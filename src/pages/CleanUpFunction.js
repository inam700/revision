import React from "react";
import { Link } from "react-router-dom";

const CleanUpFunction = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {[1, 2, 3].map((item) => (
        <Link to={`/user/${item}`} key={item}>
          User {item}
        </Link>
      ))}
    </div>
  );
};

export default CleanUpFunction;
