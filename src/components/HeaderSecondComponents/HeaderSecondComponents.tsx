import React from "react";
import "./HeaderSecondComponents.scss";
import { Link } from "react-router-dom";

const HeaderSecondComponents: React.FC = () => {
  return (
    <header id="headerSecondComponents">
      <div className="container">
        <div className="headerSecondComponents">
          <div className="headerSecondComponentsNav">
            <h1>d<span>o</span>rd<span>o</span>i</h1>
            <h2>market</h2>
          </div>
          <div className="headerSecondComponentsNavigate">
           <Link to="/"> <a href="#">ГЛАВНАЯ</a></Link>
            <a href="#">О нас</a>
            <a href="#">новинки</a>
            <a href="#">Блог </a>
            <a href="#">информация</a>
            <a href="#">Популярные</a>
            <a href="#">sale</a>
            <a href="#">контакты</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSecondComponents;
