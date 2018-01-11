import React  from 'react';
import { BlurView } from 'expo';
import navbarStyles from '../styles/NavbarStyles';

const Navbar = () => (
  <BlurView
    tint='dark'
    intensity={100}
    style={navbarStyles.container}
  />
);

export default Navbar;
