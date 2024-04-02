import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
        La Région <span className="navbar-sign">+</span>
        </Link>
      </h1>
      <small>Auvergne-Rhône-Alpes</small>


      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="#maregion" className="navbar-links">
            Ma Région
          </Link>
        </li>
        <li>
          <a href="#actualité" className="navbar-links">
            Actualité
          </a>
        </li>
        <li>
          <a href="#aides" className="navbar-links">
            Aides
          </a>
        </li>
        <li>
          <a href="#particuliers" className="navbar-links">
            Particuliers
          </a>
        </li>
        <li>
          <a href="#professionnels" className="navbar-links">
            Professionnels
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="#maregion">
            Ma Région
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#actualité">
            Actualité
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#aides">
            Aides
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#particuliers">
            Particuliers
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#professionnels">
              Professionnels
            </a>
          </li>
          
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
