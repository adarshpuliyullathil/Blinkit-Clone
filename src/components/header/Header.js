import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faCartShopping,
  faSearch,
  faBagShopping,
  faArrowLeftLong,
  faMagnifyingGlass,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import { typography } from "@mui/system";

export default function Header() {
  // code for dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // dropdown code ends

  return (
    <div id="header-section">
      <div className="hidden-header ">
        <div className="back-icon">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faArrowLeftLong} size="2x" />
          </Link>
        </div>

        <div className="hidden-location">
          <h4 className="delivery-time">delivery in 22 minutes</h4>
          <select className="location-selection">
            <option className="delivery-location">
              Ellisbridge,Ahemedabad
            </option>
          </select>
        </div>

        <div className="find-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </div>
        <div className="bag-icon">
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faBagShopping} size="2x" />
          </Link>
        </div>

        <div className="hidden-search-input">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input
            className="hidden-text-input"
            type={text}
            placeholder={"search for products"}
          ></input>
        </div>
      </div>

      <div className="header-wrapper">
        <div className="blinkit-logo">
          <a className="logo" href="/">
            <img
              src="https://blinkit.com/images/header/blinkit_logo-3898547.png"
              alt="blinkit-img"
            ></img>
          </a>
        </div>

        <div className="location">
          <h4 className="delivery-time">delivery in 22 minutes</h4>
          <select className="location-selection">
            <option className="delivery-location">
              Ellisbridge,Ahemedabad
            </option>
          </select>
        </div>

        <div className="search-input">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input
            className="text-input"
            type={text}
            placeholder={"search for products"}
          ></input>
        </div>

        <div className="profile">
          <Typography
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}
          >
            <p className="sub-heading">Profile</p>
          </Typography>
          {/* dropdown items */}

          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            style={{  }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/myorders">My orders</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/savedaddress">savedaddress</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/mywallet">My wallet</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/faq">Faq's</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/logout">Logout</Link>
            </MenuItem>
          </Menu> */}

          {/* dropdown items ends */}
        </div>

        <div className="cart-button">
          <button className="cart-opener">
            <Link to="/"></Link>
            <Link to="/cart" className="cart-link">
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
              my cart
            </Link>
          </button>
        </div>

        {/* <div className="get-the-app">
          <FontAwesomeIcon
            className="mobile-icon"
            icon={faMobileScreenButton}
          />
          <typography>Get The App</typography>
        </div> */}

        <div className="dropdown-menu">
          <Typography
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}
            id='category-dropdown'
          >
            categories
          </Typography>
        </div>
        {/* dropdown items */}

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose} 
        >
          <MenuItem className="list-view" onClick={handleClose}>
            <Link to="/atta">atta, rice & dal </Link>
          </MenuItem>
          <MenuItem className="list-view" onClick={handleClose}>
            <Link to="/masala">masala ,oil & more </Link>
          </MenuItem>
          <MenuItem className="list-view" onClick={handleClose}>
            <Link to="/fruits">vegitables & fruits</Link>
          </MenuItem>
          <MenuItem className="list-view" onClick={handleClose}>
            <Link to="/cleaning">cleaning essentials</Link>
          </MenuItem>
          <MenuItem className="list-view" onClick={handleClose}>
            <Link to="/breakfast">breakfast & instant food</Link>
          </MenuItem>
          <MenuItem className="list-view" onClick={handleClose}>
            <Link to="/bakery">bakery & biscuits</Link>
          </MenuItem>
          <MenuItem className="list-view" onClick={handleClose}>
            <Link to="/personalcare">Personal care</Link>
          </MenuItem>
        </Menu>
        {/* </div> */}

        {/* <div className="dropdown-area">
          <toolbar>
            <MenuItem onClick={handleClose}>
              <Link to="/atta">atta, rice & dal </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/masala">masala ,oil & more </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/fruits">vegitables & fruits</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/cleaning">cleaning essentials</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/breakfast">breakfast & instant food</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/bakery">bakery & biscuits</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/personalcare">Personal care</Link>
            </MenuItem>
          </toolbar>
        </div> */}
      </div>
    </div>
  );
}
