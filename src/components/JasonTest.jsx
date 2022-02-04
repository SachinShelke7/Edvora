import React, { useEffect, useState } from "react";
import data from "../json/data.json";
import Slider from "react-slick";

const JasonTest = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  });
  console.log(products);

  return (
    <div className="flex w-[984px] whitespace-nowrap">
      <div className="w-full">
        <Slider {...settings}>
          {products &&
            products.map((product) => {
              return <h1>S</h1>;
            })}
        </Slider>
      </div>
    </div>
  );
};

export default JasonTest;
