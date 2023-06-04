import { useTheme } from "../Context/useTheme";

const Background = () => {
  const { theme, isChecked, handleCheckboxChange } = useTheme();

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
