import React from "react";
import "../CSS/UnderDevelopment.css";
import construction from "../assets/construction.svg"; 
import Header from "./Header";

const UnderDevelopment = () => {
  return (
    <>
    <Header />
    <div className="underDevSection">
      <div className="underDevContent">
        <img src={construction} alt="Under Construction" className="constructionImg" />
        <h1>Page Under Development</h1>
        <p>We are working hard to bring this section to life. Stay tuned!</p>
        <div className="loader"></div>
      </div>
    </div>
    </>
  );
};

export default UnderDevelopment;
