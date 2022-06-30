import React from "react";

interface NavbarProp {
  title: string;
}

const Navbar: React.FC<NavbarProp> = ({ title }) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
    </React.Fragment>
  );
};
export default Navbar;
