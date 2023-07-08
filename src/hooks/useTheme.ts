import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../services/hooks";
import { themeMode } from "../services/slice";

export const useDarkMode = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((app) => app.app.themeMode);
  const [theme, setTheme] = useState(mode);
  console.log(mode);
  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
    dispatch(themeMode(theme));
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  const toggleTheme = () => {
    const body = document.body;
    const currentTheme = body.classList.contains("dark-theme")
      ? "dark"
      : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.classList.remove(
      currentTheme === "dark" ? "dark-theme" : "light-theme"
    );
    body.classList.add(newTheme === "dark" ? "dark-theme" : "light-theme");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
    dispatch(themeMode(theme));

    toggleTheme();
  }, [theme]);
  return { theme, themeToggler };
};
