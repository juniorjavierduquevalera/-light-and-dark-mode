import { createContext, useState } from "react";
import PropTypes from "prop-types";

const themes = {
  light: {
    background: "bg-white",
    color: "text-black",
  },
  dark: {
    background: "bg-black",
    color: "text-white",
  },
};

export const ThemeContext = createContext(themes.dark);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
