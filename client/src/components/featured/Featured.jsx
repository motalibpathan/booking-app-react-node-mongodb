import React from "react";
import useFetch from "../../hooks/useFetch";
import { BarLoading } from "../loading/Loading";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=barlin,madrid,london"
  );
  const featuredData = [
    {
      id: 1,
      title: "Berlin",
      properties: data[0],
      img: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      id: 2,
      title: "Madrid",
      properties: data[1],
      img: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    },
    {
      id: 3,
      title: "London",
      properties: data[2],
      img: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    },
  ];
  if (loading) {
    return <BarLoading />;
  }
  if (error) {
    return (
      <p style={{ color: "red", textAlign: "center" }}>
        Ops! Error Loading Data!
      </p>
    );
  }
  return (
    <div className="featured">
      {featuredData.map((feature) => (
        <div key={feature.id} className="featuredItem">
          <img src={feature.img} alt="" />
          <div className="featuredTitles">
            <h1>{feature.title}</h1>
            <h2>{feature.properties} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
