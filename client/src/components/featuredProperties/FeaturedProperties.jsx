import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const featuredData = [
    {
      id: 1,
      title: "Dublin",
      desc: "123 properties",
      img: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      id: 2,
      title: "Austin",
      desc: "851 properties",
      img: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    },
    {
      id: 3,
      title: "Reno",
      desc: "532 properties",
      img: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    },
    {
      id: 4,
      title: "Austin",
      desc: "851 properties",
      img: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    },
  ];
  return (
    <div className="fp">
      {featuredData.map((feature) => (
        <div className="fpItem">
          <img src={feature.img} alt="" className="fpImg" />
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
