import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./HeaderMainComponents.scss";
import { Link } from "react-router-dom";

const HeaderMainComponents: React.FC = () => {
  const [modalHeaderCategoria, setModalHeaderCategoria] =
    useState<boolean>(false);
    

  function handleModalHeader() {
    if (modalHeaderCategoria) {
      setModalHeaderCategoria(false);
    } else {
      setModalHeaderCategoria(true);
    }
  }

  return (
    <header id="headerMain">
      <div className="container">
        <div className="headerMain">
          <div className="headerMainNav">
            <h1>
              d<span>o</span>rd<span>o</span>i
            </h1>
            <h2>market</h2>
          </div>
          <div className="headerMainSelect">
            <select>
              <option>USD</option>
              <option>USD</option>
              <option>USD</option>
            </select>
          </div>
          <div className="headerMainInput">
            <input type="text" placeholder="Искать товары" />
            <div className="headerMainInputSearch">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <div className="headerMainIcons">
            <div className="mainBlockSingInSingUp">
              <div className="headerMainUser">
                <IconButton onClick={handleModalHeader}>
                  <PersonOutlinedIcon />
                </IconButton>
              </div>
              <div
                style={{
                  display: modalHeaderCategoria ? "flex" : "none",
                }}
                className="headerMainIconsUser"
              >
               <Link to="/register"> <h4>Зарегистрироваться</h4></Link>
               <Link to="/tocomin"><h4>Войти </h4></Link>
              </div>
            </div>

            <div className="headerMainBag">
              <h5>2</h5>
              <IconButton>
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMainComponents;
