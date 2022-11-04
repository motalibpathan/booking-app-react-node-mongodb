import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";

export const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
    </div>
  );
};
