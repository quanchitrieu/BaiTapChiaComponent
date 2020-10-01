import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Listmovie from "./Listmovie";
import Promo from "./Promo";
import Footer from "./Footer";

export default class Home extends Component {
    render() {
      return (
        <div>
          <Header />
          <Carousel />
          <Listmovie/>
          <Promo/>
          <Footer />
        </div>
      );
    }
  }