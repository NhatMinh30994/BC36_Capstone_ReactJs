import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerApi } from "services/user";
import "./register.scss";
import { setUserInfoAction } from "../../store/actions/userAction";
import { notification } from "antd";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email:"",
    soDt:"",
    maNhom:"",
    hoTen:"",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await registerApi(state);
    console.log(result.data.content);
    // if () {
    //   notification.warning({
    //     message: "Chưa đăng nhập không thể truy cập.",
    //   });
    // }
      dispatch(setUserInfoAction(result.data.content));
      navigate("/login");

  };


  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">Sign Up</h1>
            <p className="text text-normal">
              You had an account?{" "}
              <span>
                <a
                  onClick={() => navigate("/login")}
                  className="text text-links text-info"
                >
                  Login
                </a>
              </span>
            </p>
          </div>
          <form name="signin" className="form"
             onSubmit={handleSubmit} 
          >
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Account
              </label>
              <input
                type="text"
                name="taiKhoan"
                className="input-field"
                placeholder="Account"
                  onChange={handleChange}
              />
            </div>
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder="Password"
                name="matKhau"
                  onChange={handleChange}
              />
            </div>
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Email"
                name="email"
                  onChange={handleChange}
              />
            </div>
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Phone Number
              </label>
              <input
                type="soDt"
                id="soDt"
                className="input-field"
                placeholder="Phone Number"
                name="soDt"
                  onChange={handleChange}
              />
            </div>
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Full Name
              </label>
              <input
                type="hoTen"
                id="hoTen"
                className="input-field"
                placeholder="Full Name"
                name="hoTen"
                  onChange={handleChange}
              />
            </div>


            <div className="input-control">
              <button className=" input-submit mx-auto">REGISTER</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
