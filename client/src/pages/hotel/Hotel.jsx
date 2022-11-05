import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Elton St 125 New york</span>
        </div>
        <span className="hotelDistance">
          Excellent location - 500m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over $113 at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
          {photos.map((photo) => (
            <div className="hotelImgWrapper">
              <img src={photo.src} alt="" className="hotelImg" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsText">
            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
            <p className="hotelDesc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores tempore eos at corporis delectus dolore porro neque
              nisi doloribus est obcaecati unde inventore optio, odio saepe
              quidem sapiente eaque facere. Explicabo natus quas fugit nobis
              veritatis. Veritatis in molestiae tempore praesentium accusantium
              recusandae architecto nulla debitis veniam dolore, eveniet esse
              maiores error nobis. Blanditiis quisquam libero eos laudantium non
              quas debitis vel qui! Enim corrupti, asperiores libero, quis ab
              quas delectus reiciendis explicabo fuga dignissimos ipsam
              molestiae provident numquam dicta expedita obcaecati cumque ipsum?
              Reprehenderit dignissimos quidem aperiam ipsum iusto at, fugiat
              similique eius minima possimus, unde optio earum quas.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              consequatur.
            </span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
