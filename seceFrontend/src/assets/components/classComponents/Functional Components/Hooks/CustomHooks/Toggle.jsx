import React from "react";
import useToggle from "./CustomHook"; 
const Toggle = () => {
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  const style = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.3s, color 0.3s",
      backgroundColor: isDarkMode ? "#1a202c" : "white",
      color: isDarkMode ? "white" : "black",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };
  return (
    <div style={style.container}>
      <h1>Toggle Dark Mode</h1>
      <button onClick={toggleDarkMode} style={style.button}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};
export default Toggle;
