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
            <div className="bottomHeaderSubcategory">
              <div
                style={{
                  zIndex: "99",
                  display: modalHeaderCategoria ? "flex" : "none",
                }}
                className="bottomHeaderBlockModal"
              > 
                <h1>Женщинам</h1>
                <h1>Мужчинам</h1>
                <h1>Детям</h1>
                <h1>Обувь</h1>
                <h1>Красота</h1>
                <h1>Дом</h1>
                <h1>Аксессуары</h1>
                <h1>Электроника</h1>
                <h1>Продукты</h1>
              </div>
            </div>
              <div className="bottomHeaderBlockModal2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMainComponentsSecend;
