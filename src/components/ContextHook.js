import React, { useContext } from "react";
import { ThemContext } from "../utils/Hooks";

const ContextHook = () => {
  const myTheme = useContext(ThemContext);
  const themeStyles = {
    background: myTheme ? "#000" : "#369",
    color: myTheme ? "#fff" : "#000",
    width: "100px",
    height: "100px",
  };
  return <div style={themeStyles}>ContextHook</div>;
};

export default ContextHook;
