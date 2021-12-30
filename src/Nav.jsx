import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else setShowNav(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${showNav && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />

      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Avatar"
      />
    </div>
  );
};

export default Nav;
