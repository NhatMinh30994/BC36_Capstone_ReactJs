import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebarAdmin.scss";

export default function SidebarAdmin() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-top logo">Logo</div>
      <div className="sidebar-center">
        <ul className="list">
          <li className="list-item">
            <i class="fa-regular fa-user"></i>
            <span
              onClick={() => navigate("/admin/user-management")}
              className="list-item-text"
            >
              User
            </span>
          </li>
          <li className="list-item">
            <i class="fa-regular fa-file"></i>
            <span
              onClick={() => navigate("/admin/movie-management")}
              className="list-item-text"
            >
              Movie
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
