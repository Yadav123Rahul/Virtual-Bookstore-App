import React from "react";
import "./Navbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiBookHeart } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="nav-brand" style={{}}>KeazoNBOOKS</div>
        <div className="nav-search" style={{ display: "flex" }}>
          <div className="search" style={{ display: "flex" }}>
            <FaMagnifyingGlass />
          </div>
          <div className="search-bar" style={{}}>
            <input type="text" />
            <button>search</button>
          </div>
        </div>
        <div className="nav-icons" style={{}}>
          <BiBookHeart />
          <FaRegBell />
          <IoDiamondOutline />
          <img
            src="../public/icons.png"
            alt="random-image"
            style={{ borderRadius: "50%", width: "50px", height: "50px" }}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// <nav className="navbar">
// <div className="nav-1">
//   <img src="../public/nav-1.png" alt="nav-1" />
//   <h3>KeazoNBOOKS</h3>
// </div>
// <div className="nav-2">
//   <input
//     type="text"
//     placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."/>
//   <input type="text" placeholder="search" />
// </div>
// <div className="nav-3">
//   <img src="../public/heart.png" alt="heart" />
//   <img src="../public/notify.png" alt="notify" />
//   <img src="../public/fluent.png" alt="notify" />
//   <img src="../public/icons.png" alt="notify" />
// </div>
// </nav>
