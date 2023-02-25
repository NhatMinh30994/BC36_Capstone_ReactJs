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
          {(idx + 1) % 16 === 0 && <br />}
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
      <div className="row">
        <h2 className="col-12 text-center pb-2 text-primary border-bottom border-primary font-weight-bold">
          SƠ ĐỒ CHỖ NGỒI - RẠP 1{" "}
        </h2>
        <div className="col-8 pt-4">
          <div style={{ width: "90%" }} className="mx-auto">
            {/* <Seat /> */}
            {renderSeats()}
          </div>
        </div>
        <div className="col-4 pt-4">
          {/* <div style={{ width: "95%" }} className="">
            <div className="mr-2 mb-2 d-inline-block p-2 rounded-pill bg-light ">
              <button className="bg-secondary"></button>Ghế đã được đặt
            </div>{" "}
            <br />
            <div className="mr-2 mb-2 d-inline-block p-2 rounded-pill bg-dark">
              <button className="bg-dark"></button>Ghế trống
            </div>{" "}
            <br />
            <div className="mr-2 mb-2 d-inline-block p-2 rounded-pill bg-primary">
              <button className="bg-primary"></button>Ghế đang chọn
            </div>
            <br />
            <div className="mr-2 mb-2 d-inline-block p-2 rounded-pill bg-warning">
              <button className="bg-warning"></button>Ghế VIP
            </div>
            <br />
          </div> */}
          {/* <div className="row">
            {" "}
            <img
              className="col-5"
              style={{ width: 300, height: 300, objectFit: "cover" }}
              src={ticketDetail?.thongTinPhim?.hinhAnh}
              alt="#"
            />
            <div className="col-7">
              <h4 className="mb-0">{ticketDetail?.thongTinPhim?.tenPhim}</h4>
              <h5 className="mb-0">
                Number of seats:
                <div className="d-flex">
                  {selectedSeatList.map((ele) => {
                    return (
                      <p
                        key={ele.maGhe}
                        className="badge badge-success mr-2 mb-0"
                      >
                        {ele.tenGhe}
                      </p>
                    );
                  })}
                </div>
              </h5>
              <h5>
                Total: {_.sumBy(selectedSeatList, "giaVe").toLocaleString()}
              </h5>
              <button onClick={bookTicket} className="btn btn-warning">
                BOOK
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
