import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import image from "../../content/images/laptop-wave.png";
import Colors from '../../constants/Colors';
import { Button, NavLink } from 'reactstrap';

export const Home = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <h1 style={{ fontSize: 20, color: Colors.secondary }}>BIENVENIDOS A MI PORTFOLIO</h1>
        <h1 style={{ fontSize: 80, width: 50, color: Colors.secondary }}>Federico Battcock</h1>
        <h1 style={{ fontSize: 50 }}>Full Stack Developer Jr.</h1>
        <NavLink href="contact" style={{ paddingLeft: 0}}>
          <Button color="primary" style={{ width: 150, fontWeight: 'bold', borderRadius: 20}} >Contactame</Button>
        </NavLink>
      </div>
      <img className="image-container" src={image} alt="Logo" />
    </div>
  )
}

export default Home;
