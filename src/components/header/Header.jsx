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
      <nav className="navbar navbar-expand-md dark">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-dark rounded bg-white  pl-2 pr-2 pb-1">
            <svg className="text-center"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-card-text"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-center">
            <li className="nav-item active li" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink className="prl nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item li" data-toggle="collapse" data-target=".navbar-collapse.show">
              <a href="#phim" className="prl nav-link" to="/movie-list">
                Phim
              </a>
            </li>
            <li className="nav-item li" data-toggle="collapse" data-target=".navbar-collapse.show">
              <a href="#tintuc" className="prl nav-link">
                Tin Tức
              </a>
            </li>
            <li className="nav-item li" data-toggle="collapse" data-target=".navbar-collapse.show">
              <a href="#sukien" className="prl nav-link">
                Sự Kiện
              </a>
            </li>
          </ul>
          <div className="ml-auto text-center">
            {userState.userInfo ? (
              <>
                {/* <span className="mr-3 text-danger ">
                  Hello {userState.userInfo.hoTen}
                </span> */}
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger font-weight-bold rounded-pill border-0"
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
