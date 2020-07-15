import React from 'react';

type NavbarProps = {
  children?: React.ReactNode | React.ReactNodeArray
};

const Navbar = ({ children }: NavbarProps) => {
  const navbarStyles = {
    width: '100%',
    height: '60px',
    backgroundColor: '#FFF',
    boxShadow: '1px 1px #CCC',
  };

  return (
    <div style={navbarStyles}>
      {children}
    </div>
  );
};

export default Navbar;
