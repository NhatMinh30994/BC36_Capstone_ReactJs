import axios from "axios";
import { BASE_URL, GROUP_ID, TOKEN_CYBERSOFT } from "../constants";
import { axiosRequest } from "../../src/configs/axios.config";

export const fetchMovieListApi = () => {
  return axiosRequest({
    url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
    method: "GET",
  });
};

// MaPhim phải nhận từ ngoài truyền vào nên cần cho nó tham số id (params)
export const fetchMovieDetailApi = (id) => {
  return axiosRequest({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
  });
};

export const addMovieApi = (data) => {
  return axiosRequest({
    url: `/QuanLyPhim/ThemPhimUploadHinh`,
    method: "POST",
    data: data,
  });
};

export const editMovieApi = (data) => {
  return axiosRequest({
    url: `/QuanLyPhim/CapNhatPhimUpload`,
    method: "POST",
    data: data,
  });
};

export const deleteMovieApi = (id) => {
  return axiosRequest({
    url: `/QuanLyPhim/XP?MaPhim=${id}`,
    method: "DELETE",
  });
};
