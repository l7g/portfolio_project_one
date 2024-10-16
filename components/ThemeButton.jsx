"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeContextProvider";
import { Button } from "./ui/button";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button variant="secondary" onClick={toggleTheme}>
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </Button>
  );
};

export default ThemeButton;
