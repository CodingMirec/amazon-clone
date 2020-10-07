import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon banner"
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123111"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="123222"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0"
          price={58.2}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123333"
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          price={340.69}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SY445_.jpg"
        />
        <Product
          id="123444"
          title="TP-Link AC1750 Smart WiFi Router"
          price={42.2}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
        />
        <Product
          id="123555"
          title='Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD'
          price={35.35}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SX425_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123666"
          title="Apple AirPods with Wireless Charging Case"
          price={120.19}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/710rzW2RGcL._AC_SX342_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
