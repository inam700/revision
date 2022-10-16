import React from "react";
import { Link } from "react-router-dom";
import { links } from "../constants/constants";

const Footer = () => {
  return (
    <footer className="bg-dark px-3 py-3 w-100 position-fixed bottom-0 d-flex justify-content-center flex-wrap">
      {links.map((item, index) => (
        <Link
          to={item.to}
          key={index}
          className="text-decoration-none mx-2"
          style={{
            color: "#fff",
          }}
        >
          {item.name}
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
