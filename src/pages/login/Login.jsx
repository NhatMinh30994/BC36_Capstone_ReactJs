import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/user";
import { setUserInfoAction } from "../../store/actions/userAction";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
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
    // console.log(state);
    const result = await loginApi(state);
    console.log(result);

    
    localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data.content));

    
    dispatch(setUserInfoAction(result.data.content));
    navigate("/");
  };

  return (
    <div className="w-25 mx-auto py-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            onChange={handleChange}
            name="taiKhoan"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            onChange={handleChange}
            name="matKhau"
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">LOGIN</button>
      </form>
    </div>
  );
}
