import React from "react";
import MainComponentsBlock from "../components/MainComponents/MainComponentsBlock/MainComponentsBlock";
import { Route, Routes } from "react-router-dom";
import RegistrMainHeader from "../components/RegistrMainHeader/RegistrMainHeader";
import ToComeInComponent from "../components/ToComeInComponent/ToComeInComponent";

const MainRoutes: React.FC = () => {
  let PUBLIC = [
    { link: "/", element: <MainComponentsBlock />, id: 1 },
    { link: "/register", element: <RegistrMainHeader />, id: 2 },
    { link: "/tocomin", element: <ToComeInComponent />, id: 3 },

  ];
  return <Routes>
   {
    PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id}/>
    ))
   }
  </Routes>;
};

export default MainRoutes;
