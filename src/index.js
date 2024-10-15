import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./component/Main/Menu/menu";
import Card from "./component/Product/Card/card";
import Form from "./component/ContactUs/Form/form";
import Header from "./component/AboutUs/01 Header/Header";
import HeroHeader from "./component/AboutUs/02 Hero Header/Hero Header";

// For Home Page
const Home = ReactDOM.createRoot(document.getElementById("root_Home"));
Home.render(
  <React.StrictMode>
    {/* <Menu /> */}
  </React.StrictMode>
);

// For Product Page
const Product = ReactDOM.createRoot(document.getElementById("root_Product"));
Product.render(
  <React.StrictMode>
    {/* <Menu />
    <Card /> */}
  </React.StrictMode>
);

// For AboutUs Page
const AboutUs = ReactDOM.createRoot(document.getElementById("root_AboutUs"));
AboutUs.render(
  <React.StrictMode>
    {/* <Header />
    <HeroHeader /> */}
  </React.StrictMode>
);

// For ContactUs Page
const ContactUs = ReactDOM.createRoot(document.getElementById("root_ContactUs"));
ContactUs.render(
  <React.StrictMode>
    <Menu />
    <Form />
  </React.StrictMode>
);
