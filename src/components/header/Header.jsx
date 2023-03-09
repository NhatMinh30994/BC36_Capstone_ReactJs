import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserInfoAction } from "../../store/actions/userAction";
import "./header.scss";
import { MaLoaiNguoiDung } from "enums";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(setUserInfoAction(null));
    navigate("/");
  };

  const handleShow = () => {
    if (userState.userInfo.maLoaiNguoiDung === MaLoaiNguoiDung.QuanTri) {
      return (
        <>
          <div>
            <button
              className="btn dropdown-toggle text-danger"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-expanded="false"
              data-offset="10,20"
            >
              {userState.userInfo.hoTen}
            </button>

            <div
              className="dropdown-menu dropdown-menu-right "
              aria-labelledby="triggerId"
            >
              <button
                id="admin"
                onClick={() => navigate("/admin/user-management")}
                className="btn font-weight-bold dropdown-item"
                style={{ color: "green" }}
              >
                DASHBOARD
              </button>

              <button
                onClick={handleLogout}
                className="text-danger btn font-weight-bold dropdown-item"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <button
              className="btn dropdown-toggle text-danger"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-expanded="false"
              data-offset="10,20"
            >
              {userState.userInfo.hoTen}
            </button>

            <div
              className="dropdown-menu dropdown-menu-right "
              aria-labelledby="triggerId"
            >
              <button
                onClick={handleLogout}
                className="text-danger btn font-weight-bold dropdown-item"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <h5 className="logo-top">
          <span>
            <img
              src="https://www.svgrepo.com/show/227816/galaxy.svg"
              className="logo-top"
            />
          </span>
          <b className="logo-name text-dark">
            Gana<span className="text-muted">Xi</span>
          </b>
        </h5>
        <div
          className="collapse navbar-collapse"
          id="collapsibleNavId"
          style={{ alignItems: "center" }}
        >
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-center">
            <li
              className="nav-item active li"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="active prl nav-link" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li
              className="nav-item li"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a href="#phim" className="prl nav-link" to="/">
                Phim
              </a>
            </li>
            <li
              className="nav-item li"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a href="#tintuc" className="prl nav-link">
                Tin Tức
              </a>
            </li>
            <li
              className="nav-item li"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a href="#sukien" className="prl nav-link">
                Sự Kiện
              </a>
            </li>
          </ul>
          <div className="ml-auto text-center d-flex align-content-center align-items-center top-right">
            {userState.userInfo ? (
              <>
                <Avatar
                  style={{
                    backgroundColor: "rgb(228 204 187)",
                    color: "rgb(206 141 131)",
                    paddingBottom: "5px",
                  }}
                  size="default"
                  icon={<UserOutlined />}
                ></Avatar>
                <span
                  className="ml-2 px-0"
                  style={{
                    border: "1px dashed rgb(255, 255, 255, 0.8)",
                    borderRadius: "5px",
                    lineHeight: "32px",
                  }}
                >
                  {/* <div>
                    <button
                      className="btn dropdown-toggle text-danger"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      data-offset="10,20"
                    >
                      {userState.userInfo.hoTen}
                    </button>

                    <div
                      className="dropdown-menu dropdown-menu-right "
                      aria-labelledby="triggerId"
                    >
                      <button
                        id="admin"
                        onClick={() => navigate("/admin/movie-management")}
                        className="btn font-weight-bold dropdown-item"
                      >
                        ADMIN
                      </button>

                      <button
                        onClick={handleLogout}
                        className="btn font-weight-bold dropdown-item"
                      >
                        LOGOUT
                      </button>
                    </div>
                  </div> */}
                  {handleShow()}
                </span>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/register")}
                  className="btn btn-outline-info my-2 my-sm-0 mr-2  rounded-pill border-0"
                  type="sumit"
                >
                  REGISTER
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-outline-success my-2 my-sm-0 mr-4 rounded-pill border-0"
                >
                  LOGIN
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
