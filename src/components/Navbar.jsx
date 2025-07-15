import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // optionnel

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">خدم</div>
        <div className="nav-buttons">
          <Link to="/login" className="btn btn-outline">تسجيل الدخول</Link>
          <Link to="/login" className="btn btn-primary">إنشاء حساب</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
