import React from "react";

const ColorfulMessage = (props) => {
  const { color, children, message } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>{children || message}</p>
    </>
  );
};

export default ColorfulMessage;
