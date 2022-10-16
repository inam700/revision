import React, { useState } from "react";
import ContextHook from "../components/ContextHook";
import { ThemContext } from "../utils/Hooks";

const MyTheme = () => {
  const [theme, setTheme] = useState(false);

  return (
    <ThemContext.Provider value={theme}>
      <button onClick={() => setTheme((pre) => !pre)}>Click Me</button>

      <ContextHook />
    </ThemContext.Provider>
  );
};

export default MyTheme;
