import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserInfoAction } from "../../store/actions/userAction";
import "./header.scss";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(setUserInfoAction(null));
    navigate("/");
  };

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.csss" />
      <nav className="navbar navbar-expand-sm dark">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i
              className="pl-3 bg-secondary pr-3 fa-solid fa-bars"
              aria-hidden="true"
            />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0  flex-wrap">
            <li className="nav-item active li">
              <NavLink className="prl" to="/">
                Home
              </NavLink>
              <a href="#phim" className="prl" to="/movie-list">
                Phim
              </a>
              <a href="#tintuc" className="prl" to="/">
                Tin Tức
              </a>
              <a href="#sukien" className="prl" to="/">
                Sự Kiện
              </a>
            </li>
          </ul>
          <div className="ml-auto">
            {userState.userInfo ? (
              <>
                <span className="mr-3 text-danger ">
                  {/* Hello {userState.userInfo.hoTen} */}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger font-weight-bold rounded-pill border-0 "
                >
                  LOGOUT
                </button>
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
                  className="btn btn-outline-success my-2 my-sm-0  rounded-pill border-0"
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
