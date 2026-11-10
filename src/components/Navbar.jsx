import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-light bg-white border-bottom px-4 py-3">
    <button
      id="btnToggleSidebar"
      className="btn btn-light border d-md-none me-3"
    >
      ☰
    </button>
    <span className="navbar-brand mb-0 h1 fs-4 fw-bold text-primary">
      Admin Panel
    </span>
    <div className="ms-auto d-flex align-items-center">
      <div className="bg-light rounded-circle p-2 me-2">👤</div>
      <span className="fw-semibold text-secondary">Abdullah Habib</span>
    </div>
  </nav>
);

export default Navbar;
