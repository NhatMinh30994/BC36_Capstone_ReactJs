import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookTicketApi, fetchTicketDetailApi } from "../../services/ticket";
import Seat from "./components/Seat";
import * as _ from "lodash";

export default function Booking() {
  const [ticketDetail, setTicketDetail] = useState({});

  const [selectedSeatList, setSelectedSeatList] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTicketDetail();
  }, []);

  const getTicketDetail = async () => {
    const result = await fetchTicketDetailApi(params.id);

    console.log(result);
    setTicketDetail(result.data.content);
  };

  const renderSeats = () => {
    return ticketDetail?.danhSachGhe?.map((ele, idx) => {
      return (
        <React.Fragment key={ele.maGhe}>
          <Seat ele={ele} handleSelect={handleSelect} />
          {(idx + 1) % 16 === 0 && <br /> }
        </React.Fragment>
      );
    });
  };

  const handleSelect = (seat) => {
    const data = [...selectedSeatList];
    const idx = data.findIndex((ele) => ele.tenGhe === seat.tenGhe);
    if (idx !== -1) {
      data.splice(idx, 1);
    } else {
      data.push(seat);
    }

    setSelectedSeatList(data);
    // console.log(selectedSeatList);
  };

  useEffect(() => {
    console.log(selectedSeatList);
  }, [selectedSeatList]);

  const bookTicket = async () => {
    // console.log(selectedSeatList);
    const data = {
      maLichChieu: params.id,
      danhSachVe: selectedSeatList.map((ele) => {
        return {
          maGhe: ele.maGhe,
          giaVe: ele.giaVe,
        };
      }),
    };
    // console.log(data);
    await bookTicketApi(data);
    alert("Đặt vé thành công.");
    navigate("/");
  };

  return (
    <div className="py-5">
      <div className="row mx-auto ">
        <h2 className="col-12 text-center pb-2 text-primary border-bottom border-primary font-weight-bold">
          SƠ ĐỒ CHỖ NGỒI - RẠP 1{" "}
        </h2>
        <div className="row text-center mx-auto pt-3">
          <div className="col-xl-3 mb-lg-2 mb-md-2 mb-2 p-2 rounded-pill bg-secondary text-white ">
            Ghế đã được đặt
          </div>
          <div className="col-xl-3 mb-lg-2 mb-md-2 mb-2 p-2 rounded-pill bg-dark text-white">
            Ghế trống
          </div>
          <div className="col-xl-3 mb-lg-2 mb-md-2 mb-2 p-2 rounded-pill bg-success text-white">
            Ghế đang chọn
          </div>
          <div className="col-xl-3 mb-lg-2 mb-md-2 mb-2 p-2 rounded-pill bg-warning text-white">
            Ghế VIP
          </div>
        </div>

        <div className="col-xl-12 col-lg-12 pt-4 text-center pb-5">
          <div style={{ width: "90%" }} className="mx-auto ">
             {renderSeats()}
          </div>
        </div>

        <div className="row mx-auto pt-2 border border-dark">
          {" "}
          <img
            className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 mx-auto pb-2"
            style={{ width: 400, height: 500, objectFit: "cover" }}
            src={ticketDetail?.thongTinPhim?.hinhAnh}
            alt="#"
          />
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 mx-auto">
            <h4 className="mb-0 font-weight-bolder pb-3">
              PHIM: {ticketDetail?.thongTinPhim?.tenPhim}
            </h4>
            <h5 className="mb-0 pb-2 ">
              Ghế đã chọn :<br className="pt-2" />
              <div className="d-flex">
                {selectedSeatList.map((ele) => {
                  return (
                    <p key={ele.maGhe} className="badge badge-info mr-2 mb-0">
                      {ele.tenGhe}
                    </p>
                  );
                })}
              </div>
            </h5>
            <h5>
              Thanh Toán: {_.sumBy(selectedSeatList, "giaVe").toLocaleString()}{" "}
              VND
            </h5>
            <button onClick={bookTicket} className="btn btn-danger p-3 mt-3 mb-2">
              ĐẶT VÉ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
