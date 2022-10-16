import React from "react";

const User = ({ user }) => {
  const { name, image } = user;
  return (
    <div className="col-lg-3">
      <div className="d-flex flex-column align-items-center bg-success bg-opacity-50 p-3">
        {/* <img src={image} alt={name} width="80%" /> */}
        <h4 className="mt-3">{name}</h4>
      </div>
    </div>
  );
};

export default User;
