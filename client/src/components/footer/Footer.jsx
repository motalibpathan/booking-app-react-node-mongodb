import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          {[
            "Countries",
            "Regions",
            "Cities",
            "Districts",
            "Airports",
            "Hotels",
          ].map((item) => (
            <li key={item} className="fListItem">
              {item}
            </li>
          ))}
        </ul>
        <ul className="fList">
          {[
            "Countries",
            "Regions",
            "Cities",
            "Districts",
            "Airports",
            "Hotels",
          ].map((item) => (
            <li key={item} className="fListItem">
              {item}
            </li>
          ))}
        </ul>
        <ul className="fList">
          {[
            "Countries",
            "Regions",
            "Cities",
            "Districts",
            "Airports",
            "Hotels",
          ].map((item) => (
            <li key={item} className="fListItem">
              {item}
            </li>
          ))}
        </ul>
        <ul className="fList">
          {[
            "Countries",
            "Regions",
            "Cities",
            "Districts",
            "Airports",
            "Hotels",
          ].map((item) => (
            <li key={item} className="fListItem">
              {item}
            </li>
          ))}
        </ul>
        <ul className="fList">
          {[
            "Countries",
            "Regions",
            "Cities",
            "Districts",
            "Airports",
            "Hotels",
          ].map((item) => (
            <li key={item} className="fListItem">
              {item}
            </li>
          ))}
        </ul>
        <ul className="fList">
          {[
            "Countries",
            "Regions",
            "Cities",
            "Districts",
            "Airports",
            "Hotels",
          ].map((item) => (
            <li key={item} className="fListItem">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="fText">Copyright &copy; 2022 Simple Booking.</div>
    </div>
  );
};

export default Footer;
