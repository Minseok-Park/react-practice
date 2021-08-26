import React from "react";

const Navbar = ({ totalCount }) => {
  return (
    <div className="navbar">
      <i className="fas fa-leaf navbar-icon"></i>
      <span className="navbar-title">Habit-Tracker</span>
      <span className="navbar-count">{totalCount}</span>
    </div>
  );
};

export default Navbar;
