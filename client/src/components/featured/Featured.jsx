import React from "react";
import "./featured.css";

const Featured = () => {
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
  ];
  return (
    <div className="featured">
      {featuredData.map((feature) => (
        <div key={feature.id} className="featuredItem">
          <img src={feature.img} alt="" />
          <div className="featuredTitles">
            <h1>{feature.title}</h1>
            <h2>{feature.desc}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
