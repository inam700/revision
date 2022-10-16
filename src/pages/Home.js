import React from "react";
import { useStorage } from "../utils/Hooks";
const Home = () => {
  const name = useStorage("name");
  return <div className="d-flex flex-column">User Name: {name}</div>;
};

export default Home;
