import {axiosRequest} from "../../src/configs/axios.config";

export const loginApi = (infomation) => {
  // infomation là dữ liệu từ bên ngoài truyền vào (là taiKhoan và matKhau khi nhập vào form)
  return axiosRequest({
    url: `/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: infomation,
  });
};

export const registerApi = (infomation) => {
  // infomation là dữ liệu từ bên ngoài truyền vào (là taiKhoan và matKhau khi nhập vào form)
  return axiosRequest({
    url: `/QuanLyNguoiDung/DangKy`,
    method: "POST",
    data: infomation,
  });
};

