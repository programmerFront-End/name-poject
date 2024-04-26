import React, { useState } from "react";
import "./ToComeInComponent.scss";
import HeaderSecondComponents from "../HeaderSecondComponents/HeaderSecondComponents";
import google from "../../assets/google.png";
import { IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import facebook from "../../assets/facebook.png"

const ToComeInComponent: React.FC = () => {
  const [emailAndPhone, setEmailAndPhone] = useState<string>("email");

  function heandelEmailAndPhone() {
    if (emailAndPhone === "email") {
      setEmailAndPhone("phone");
    } else {
      setEmailAndPhone("email");
    }
  }
  return (
    <>
      <HeaderSecondComponents />
      <section id="registerMainHeader">
        <div className="container">
          <div className="registerMainHeader">
            <div className="registerMainNav">
              <div className="registerMainNavText">
                <h1>ВОЙДИТЕ ЧТОБЫ ПОЛУЧИТЬ 20% </h1>
                <h1>СКИДКУ НА ВЕСЬ АССОРТИМЕНТ</h1>
              </div>
              <div className="registerMainButton">
                <button
                  onClick={heandelEmailAndPhone}
                  style={{
                    background:
                      emailAndPhone === "email" ? "rgb(143, 166, 248)" : "none",
                  }}
                >
                  почта
                </button>
                <button
                  onClick={heandelEmailAndPhone}
                  style={{
                    background:
                      emailAndPhone === "phone" ? "rgb(143, 166, 248)" : "none",
                  }}
                >
                  телефон
                </button>
              </div>

              {emailAndPhone === "email" ? (
                <>
                  <input type="text" placeholder="АДРЕС ЭЛ.ПОЧТЫ" />
                  <input type="Телефон номер" placeholder="пароль" />
                </>
              ) : (
                <>
                  <input
                    type="tel"
                    placeholder="+996 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ "
                  />
                </>
              )}

              {emailAndPhone === "email" ? (
                <>
                  <a href="#">ЗАБЫЛИ ПАРОЛЬ?</a>
                </>
              ) : (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <a href="#">Введите номер телефона и мы отправим </a>
                    <a href="#"> СМС с кодом подтверждения.</a>
                  </div>
                </>
              )}

              {emailAndPhone === "email" ? (
                 <button className="singin">ВОЙТИ</button>
              ) : (
                <>
                  <button className="singin">ПОЛучить код</button>
                </>
              )}
              <h2>или вы можете войти с помощью</h2>
              <div className="registerWithGoogle">
                <img style={{ cursor: "pointer" }} src={google} alt="" />
                {/* <img src={facebook} alt="" /> */}
                <IconButton>
                  <FacebookOutlinedIcon
                    sx={{ fontSize: "45px", color: "blue" }}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToComeInComponent;
