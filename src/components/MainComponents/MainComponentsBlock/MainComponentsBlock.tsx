import React, { useState } from "react";
import im1 from "../../../assets/1.png";
import "./MainComponentsBlock.scss";
import im2 from "../../../assets/2.png";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import HeaderMainComponents from "../HeaderMainComponents/HeaderMainComponents";
import HeaderMainComponentsSecend from "../HeaderMainComponentsSecend/HeaderMainComponentsSecend";

const MainComponentsBlock: React.FC = () => {
  let imageaMainBlock = [
    "https://i.pinimg.com/564x/52/b8/89/52b88954e32420d9d013b9421822ada5.jpg",
    "https://storeluxe.ru/image/cache/catalog/strogie-jenskie-folder/1/265387414-kostyum-chanel-930755-sn-360x450.jpg",
    "https://storeluxe.ru/image/cache/catalog/strogie-jenskie-folder/6/82618507-kostyum-chanel-61490-sn-360x450.jpg",
    "https://storeluxe.ru/image/cache/catalog/products/128735503-folder/0/517699212-kostyum-chanel-928858-sn-360x450.jpg",
  ];

  const [buttonClickImage, setButtonClickImage] = useState<Number>(0);
const [imageLocalStorage,setImageLocalStorage] = useState<String>("")
  function buttonClick1() {
    setButtonClickImage(0);
    setImageLocalStorage(imageaMainBlock[0])
  }
  function buttonClick2() {
    setButtonClickImage(1);
    setImageLocalStorage(imageaMainBlock[1])

  }
  function buttonClick3() {
    setButtonClickImage(2);
    setImageLocalStorage(imageaMainBlock[2])

  }
  function buttonClick4() {
    setButtonClickImage(3);
    setImageLocalStorage(imageaMainBlock[3])

  }

  
  const oneProduct = {
    name: "",
    price: 0,
    size: [10,30],
    
  }
  return (
    <>
      <HeaderMainComponents />
      <HeaderMainComponentsSecend />
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
              <img src={imageLocalStorage} alt="" />
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
                <div
                  onClick={buttonClick1}
                  style={{
                    padding: buttonClickImage === 0 ? "5px" : "0px",
                  }}
                  className="miniBlock2"
                ></div>
                <div
                  onClick={buttonClick2}
                  style={{
                    padding: buttonClickImage === 1 ? "5px" : "0px",
                  }}
                  className="miniBlock2"
                ></div>
                <div
                  onClick={buttonClick3}
                  style={{
                    padding: buttonClickImage === 2 ? "5px" : "0px",
                  }}
                  className="miniBlock2"
                ></div>
                <div
                  onClick={buttonClick4}
                  style={{
                    padding: buttonClickImage === 3 ? "5px" : "0px",
                  }}
                  className="miniBlock2"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainComponentsBlock;
