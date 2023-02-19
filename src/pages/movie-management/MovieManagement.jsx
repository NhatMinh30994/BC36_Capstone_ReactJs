import React from "react";
import { Button, notification, Space, Table, Tag } from "antd";
import { useMovieList } from "hooks/useMovieList";
import { formatDate } from "utils";
import { useNavigate } from "react-router-dom";
import { deleteMovieApi } from "services/movie";

export default function MovieManagement() {
  const movieList = useMovieList();
  console.log(movieList);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Tên phim",
      key: "1",
      dataIndex: "tenPhim",
    },
    {
      title: "Ngày khởi chiếu",
      key: "2",
      dataIndex: "ngayKhoiChieu",
      render: (text) => formatDate(text),
    },
    {
      title: "Mô tả",
      key: "3",
      dataIndex: "moTa",
    },
    {
      title: "Đánh giá",
      key: "4",
      dataIndex: "danhGia",
    },
    {
      title: "Hành động",
      key: "5",
      render: (text) => {
        // console.log(text);
        return (
          <div>
            <Button
              onClick={() =>
                navigate(`/admin/movie-management/edit/${text.maPhim}`)
              }
              type="primary"
              ghost
            >
              EDIT
            </Button>
            <Button
              onClick={async () => {
                try {
                  await deleteMovieApi(text.maPhim);
                  notification.success({
                    message: "Xóa phim thành công",
                  });
                } catch (error) {
                  notification.error({
                    message: error.response.data.content,
                  })
                }
              }}
              type="primary"
              danger
              ghost
            >
              DELETE
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Button
        onClick={() => navigate("/admin/movie-management/add")}
        className="mb-4"
      >
        THÊM PHIM
      </Button>
      <Table columns={columns} dataSource={movieList} />;
    </div>
  );
}
