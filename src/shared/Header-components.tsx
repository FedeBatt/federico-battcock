import React from 'react';
import { NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import image from "../content/images/fb-logo.png";

export const BrandIcon = (props: any) => (
  <div {...props} className="brand-icon">
    <img src={image} alt="Logo" />
  </div>
);

export const Brand = () => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
  </NavbarBrand>
);