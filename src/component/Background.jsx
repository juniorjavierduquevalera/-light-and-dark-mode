import { useContext, useState } from "react";
import { ThemeContext } from "../Context/Theme";

const Background = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  return (
    <>
      <div className={`w-full h-screen ${theme.background} ${theme.color}`}>
        <h1 className="text-center font-bold text-3xl py-6">
          light and dark mode
        </h1>
        <div className="flex justify-center">
          <input
            type="checkbox"
            className="toggle"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
    </>
  );
};

export default Background;
