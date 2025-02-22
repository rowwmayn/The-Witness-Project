import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
  };

  const logoStyle = {
    height: "40px",
    marginRight: "10px",
  };

  return (
    <header style={headerStyle}>
      <img src="/The Witness.png" alt="Logo" style={logoStyle} />
      <h1>The Witness Project</h1>
    </header>
  );
};

export default Header;
