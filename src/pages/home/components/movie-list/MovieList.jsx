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
        <div className="col-3 mx-auto khung" key={ele.maPhim}>
          <div
            className="card movie-card rounded-pill border-secondary "
            style={{ marginBottom: 20, height: 500 }}
          >
            <img
              style={{ height: 350, objectFit: "cover" }}
              className="card-img-top rounded-pill border-secondary"
              src={ele.hinhAnh}
              alt="movie"
            />
            <div className="card-body upPerCase tam">
              <h5 className="card-title">{ele.tenPhim}</h5>
              <button
                onClick={() => {
                  navigate(`/movie-detail/${ele.maPhim}`);
                }}
                className=" btn btn-info rounded-pill "
              >
                Chi Tiết
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row mt-3 mx-auto w-75">
      <h3 id="phim" className="col-12">
        PHIM CHIẾU RẠP
      </h3>
      <br />
      {renderMovieList()}
    </div>
  );
}
