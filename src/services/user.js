import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";
import {axiosRequest} from "../../src/configs/axios.config";

export const loginApi = (infomation) => {
  // infomation là dữ liệu từ bên ngoài truyền vào (là taiKhoan và matKhau khi nhập vào form)
  return axiosRequest({
    url: `/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: infomation,
  });
};
