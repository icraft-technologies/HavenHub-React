import React from "react";

const Loader = ({ size = 16, color = "white", className = "" }) => {
  const borderSize = 2; // thickness of the spinner border
  const borderColor = color;
  
  return (
    <span
      className={`ml-1.5 animate-spin rounded-full border-${borderSize} border-solid border-${borderColor} border-t-transparent ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth: borderSize,
      }}
    ></span>
  );
};

export default Loader;
