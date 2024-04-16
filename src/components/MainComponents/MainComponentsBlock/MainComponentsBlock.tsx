import React from "react";
import im1 from "../../../assets/1.png";
import "./MainComponentsBlock.scss";
import im2 from "../../../assets/2.png";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

const MainComponentsBlock: React.FC = () => {
  return (
    <section id="blockMainComponents">
      <div className="container">
        <div className="blockMainComponents">
          <div className="blockMainComponentsNav">
            <h1>DORDOI MARKET CENTRAL ASIA</h1>
            <p> «Дордой» является самым большим рынком в Центральной Азии</p>
            <button>покупателям</button>
            <div className="blockMainComponentsMini">
              <div className="blockMainComnonentsMiniInsade">
                <div className="blockMainComnonentsMiniInsadeInfo">
                  <h1>Вам промокод</h1>
                  <p>Вы можете применить его на два заказа</p>
                  <div>
                    <button>промокод АПРЕЛЬТОП</button>
                  </div>
                </div>
                <div className="blockMainComnonentsMiniInsadeImage">
                  <img src={im1} alt="" />
                </div>
              </div>
              <div className="blockMainComponentsMiniP">
                <p>
                  промокода может быть ограничено. Подробнее об организаторе ,
                  ограничениях акции и правилах ее проведения:
                  https/dordoi.market/link
                </p>
              </div>
            </div>
          </div>
          <div className="blockMainComponentsImage">
            <img src={im2} alt="" />
            <div className="blackMainComponentsImageBlock">
              <div className="blockMainComponentsImageInfo">
                <h3>КОСУХА ЖЕНСКАЯ</h3>
                <h4>со скидкой 30%</h4>
              </div>
            </div>
            <div className="blockMainComponentsImageButton">
              <button>
                <ArrowOutwardOutlinedIcon />
              </button>
            </div>
            <div className="blockMainComponentsImageMiniBlock">
              <div className="miniBlock"></div>
              <div className="miniBlock2"></div>
              <div className="miniBlock2"></div>
              <div className="miniBlock2"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponentsBlock;
