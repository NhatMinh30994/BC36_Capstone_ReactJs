import React from "react";
import "./news.scss";
// import { Slider } from "antd";npm
import Slider from "react-slick";

export default function News() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };

  return (
    <div className="container-fluid justify-content-center plr">
      <h3>BLOG PHIM</h3>
      <div class="row">
        {/* <Slider {...settings}> */}
          <div class="col-md-3">
            <div className="border">
              <div className="card-header p-0 position-relative">
                <img
                  className=" "
                  src="https://cdn.galaxycine.vn/media/2023/2/18/ant-man-and-the-wasp-quantumania-cu-lua-xuat-sac-cua-marvel-3_1676654214338.jpg"
                />
              </div>
              <div className="card-body card-shadow ">
                <a href="#" className="blog-post">
                  Delivering happiness for Pets
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur ipsum elit. Qui
                  eligendi vitae sit.
                </p>
                <div className="author align-items-center mt-3 mb-1">
                  <a href="#author">Johnson smith</a> -{" "}
                  <span className="meta-value"> May 23, 2020 </span>
                </div>
                <ul className="blog-meta">
                  <li className="meta-item blog-students">
                    <span className="meta-value">
                      {" "}
                      <span className="fa fa-comment" /> 30 comments
                    </span>
                  </li>
                  <li className="meta-item blog-students">
                    <span className="meta-value">
                      {" "}
                      <span className="fa fa-eye" /> 30 Views
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="border">
              <div className="card-header p-0 position-relative">
                <img
                  className=" "
                  src="https://cdn.galaxycine.vn/media/2023/2/18/ant-man-and-the-wasp-quantumania-cu-lua-xuat-sac-cua-marvel-3_1676654214338.jpg"
                />
              </div>
              <div className="card-body card-shadow ">
                <a href="#" className="blog-post">
                  Delivering happiness for Pets
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur ipsum elit. Qui
                  eligendi vitae sit.
                </p>
                <div className="author align-items-center mt-3 mb-1">
                  <a href="#author">Johnson smith</a> -{" "}
                  <span className="meta-value"> May 23, 2020 </span>
                </div>
                <ul className="blog-meta">
                  <li className="meta-item blog-students">
                    <span className="meta-value">
                      {" "}
                      <span className="fa fa-comment" /> 30 comments
                    </span>
                  </li>
                  <li className="meta-item blog-students">
                    <span className="meta-value">
                      {" "}
                      <span className="fa fa-eye" /> 30 Views
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="border">
              <div className="card-header p-0 position-relative">
                <img
                  className=" "
                  src="https://cdn.galaxycine.vn/media/2023/2/18/ant-man-and-the-wasp-quantumania-cu-lua-xuat-sac-cua-marvel-3_1676654214338.jpg"
                />
              </div>
              <div className="card-body card-shadow ">
                <a href="#" className="blog-post">
                  Delivering happiness for Pets
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur ipsum elit. Qui
                  eligendi vitae sit.
                </p>
                <div className="author align-items-center mt-3 mb-1">
                  <a href="#author">Johnson smith</a> -{" "}
                  <span className="meta-value"> May 23, 2020 </span>
                </div>
                <ul className="blog-meta">
                  <li className="meta-item blog-students">
                    <span className="meta-value">
                      {" "}
                      <span className="fa fa-comment" /> 30 comments
                    </span>
                  </li>
                  <li className="meta-item blog-students">
                    <span className="meta-value">
                      {" "}
                      <span className="fa fa-eye" /> 30 Views
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="border">
              <div className="card-header p-0 position-relative">
                <img
                  className=" "
                  src="https://cdn.galaxycine.vn/media/2023/2/18/ant-man-and-the-wasp-quantumania-cu-lua-xuat-sac-cua-marvel-3_1676654214338.jpg"
                />
              </div>
              <div className="card-body card-shadow ">
                <a href="#" className="blog-post">
                  Delivering happiness for Pets
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur ipsum elit. Qui
                  eligendi vitae sit.
                </p>
                <div className="author align-items-center mt-3 mb-1">
                  <a href="#author">Johnson smith</a> -{" "}
                  <span className="meta-value"> May 23, 2020 </span>
                </div>
                <ul className="blog-meta">
                  <li className="meta-item blog-students">
                    <span className="meta-value">
                      {" "}
                      <span className="fa fa-comment" /> 30 comments
                    </span>
                  </li>
                  <li className="meta-item blog-students">
                    <span className="meta-value">
                      {" "}
                      <span className="fa fa-eye" /> 30 Views
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* </Slider> */}
      </div>

      <h3>TIN KHUYẾN MÃI</h3>
      <div className="row ">
        <div className="col-md-3 col-sm-4 col-xs-6 ">
          <img
            src="https://cdn.galaxycine.vn/media/2023/2/6/500_1675669941430.jpg"
            alt=""
          />
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 ">
          <img
            src="https://cdn.galaxycine.vn/media/2023/1/17/bangqltv-2023-digital-1200x1800_1673940943642.jpg"
            alt="hinh anh"
          />
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 ">
          <img
            src="	https://cdn.galaxycine.vn/media/2022/12/10/combo-u22-digital-300x450-1667285239633_1670637604853.jpg"
            alt="hinh anh"
          />
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 ">
          <img
            src="https://cdn.galaxycine.vn/media/2023/2/16/glx-q1-1200x1800_1676516168305.jpg"
            alt="hinh anh"
          />
        </div>
      </div>

      <h3>GANAXI CINEMA</h3>
      <div className="row content-seo ">
        <div className="col-md-12 ">
          <div className="content-text">
            <p>
              {" "}
              <b>Ganaxi Cinema</b> là một trong những công ty tư nhân đầu tiên
              về điện ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu
              là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất.
              Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt
              người đến xem, <b>Ganaxi Cinema</b> còn hấp dẫn khán giả bởi không
              khí thân thiện cũng như chất lượng dịch vụ hàng đầu.
            </p>
            <p>
              Giờ đây đặt vé tại <b>Ganaxi Cinema</b> càng thêm dễ dàng chỉ với
              vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý
              khách có thể chọn Mua vé theo phim, theo rạp, hoặc theo ngày. Sau
              đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút,
              quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành
              công của <b>Ganaxi Cinema</b>. Quý khách có thể dùng tin nhắn lấy
              vé tại quầy vé của <b>Ganaxi Cinema</b> hoặc quét mã QR để một
              bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.
            </p>
            <p>
              Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng
              box Mua Vé Nhanh ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và
              email phản hồi của <b>Ganaxi Cinema</b> sẽ gửi ngay vào điện thoại
              và hộp mail của bạn.
            </p>
            <p>
              Hiện nay, <b>Ganaxi Cinema</b> đang ngày càng phát triển hơn nữa
              với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho
              khán giả những bộ phim bom tấn của thế giới và Việt Nam nhanh
              chóng và sớm nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
