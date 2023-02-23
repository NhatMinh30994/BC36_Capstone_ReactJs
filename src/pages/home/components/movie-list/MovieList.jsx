import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovieListApi } from "../../../../services/movie";

import { Button } from "antd";
import { useMovieList } from "../../../../hooks/useMovieList";
import "./movieList.scss";

export default function MovieList() {
  const navigate = useNavigate();

  const movieList = useMovieList();

  const renderMovieList = () => {
    return movieList.map((ele) => {
      return (
        <div className="col-3" key={ele.maPhim}>
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 500 }}
          >
            <img
              style={{ height: 350, objectFit: "cover" }}
              className="card-img-top"
              src={ele.hinhAnh}
              alt="movie"
            />
            <div className="card-body upPerCase">
              <h5 className="card-title">{ele.tenPhim}</h5>
              <Button
                onClick={() => {
                  navigate(`/movie-detail/${ele.maPhim}`);
                }}
                type="dashed"
                size="large"
              >
                XEM CHI TIẾT
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row mt-3 mx-auto w-75">
      <h3 id="phim" className="col-12">PHIM CHIẾU RẠP</h3>
      <br/>
      {renderMovieList()}
    </div>
  );
}
