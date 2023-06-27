import React from "react";
import Left from "./left/Left";
import Middle from "./middle/Middle";
import Right from "./Right/Right";

const Home = () => {
  return (
    <div className="home-page">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};

export default Home;
