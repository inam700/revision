import { createContext, useEffect, useState } from "react";

export const ThemContext = createContext();

export const useStorage = (key) => {
  const [data, setData] = useState("");

  useEffect(() => {
    setData(() => JSON.parse(localStorage.getItem(key)));
  }, [key]);

  return data;
};

export const useLocalStorage = (key, initialValues) => {
  const [value, setValue] = useState(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) return JSON.parse(storageValue);

    return initialValues;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
