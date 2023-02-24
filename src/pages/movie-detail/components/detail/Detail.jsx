import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailApi } from "../../../../services/movie";
import { formatDate } from "../../../../utils";

export default function Detail() {
  const [movieDetail, setMovieDetail] = useState({}); 
  const params = useParams();
  useEffect(() => {
    getMovieDetail();
  }, []);

  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);

    console.log(result);
    setMovieDetail(result.data.content);
  };

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-3">
          <img className="w-100" src={movieDetail.hinhAnh} />
        </div>
        <div className="col-9 text-giua">
          <h4>{movieDetail.tenPhim}</h4>
          <p className="text-giua">{movieDetail.moTa}</p>
          <p>{formatDate(movieDetail.ngayKhoiChieu)}</p>
          <div>
            <button className="btn btn-info mr-2">TRAILER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
