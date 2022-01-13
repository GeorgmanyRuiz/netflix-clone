import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://fontmeme.com/permalink/220113/3a61d285d75bfbb43f0de1741b789068.png"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://mitymo-pages-4.s3.amazonaws.com/friendsofstrays.com/photos/448/medium/956315eedf40a60820c4b453f6680166.jpg"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
