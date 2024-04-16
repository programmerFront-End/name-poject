import React, { useState } from "react";
import "./HeaderMainComponentsSecend.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const HeaderMainComponentsSecend: React.FC = () => {
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
    <section id="bottomHeader">
      <div className="container">
        <div className="bottomHeader">
          <div className="bottomHeaderNav">
            <a href="#">ГЛАВНАЯ</a>
            <a href="#">О нас</a>
            <a href="#">новинки</a>
            <a href="#">Блог </a>
            <a href="#">информация</a>
            <a href="#">Популярные</a>
            <a href="#">sale</a>
            <a href="#">контакты</a>
          </div>
          <div className="bottomHeaderCategori">
            <h4 onClick={handleModalHeader}>
              КАТЕГОРИИ
              {modalHeaderCategoria ? (
                <KeyboardArrowUpOutlinedIcon />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )}
            </h4>
            <div
              style={{
                display: modalHeaderCategoria ? "flex" : "none",
              }}
              className="bottomHeaderBlockModal"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMainComponentsSecend;
