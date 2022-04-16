import React from 'react'
import { Button, NavLink } from 'reactstrap';
import Colors from '../../constants/Colors';
import image from "../../content/images/about.png";
import './about.css'

export const About = () => {
  return (
    <div className="wrapper">
      <div className="text">
        <h1 style={{ fontSize: 40, color: Colors.warning }}>Sobre mí</h1>
        <h1 style={{ fontSize: 20, width: 520, color: Colors.secondary, lineHeight: 1.4 }}>Mi nombre es Federico Battcock, soy desarrolador full-stack Jr.
          Cuento con experiencia realizando tareas como
          front-end developer en React.js, React Native y Angular,
          Java en back-end. Interpreto, analizo y ejecuto incidencias de baja y
          mediana complejidad reportados en Jira. Creación, actualización y resolución
          de conflictos que puedan surgir en los branch de Bitbucket.
        </h1>
        <NavLink href="projetc" style={{ paddingLeft: 0 }}>
          <Button color="primary" style={{ width: 150, fontWeight: 'bold', borderRadius: 20 }} >Mi experiencia</Button>
        </NavLink>
      </div>
      <img src={image} className="image" alt="avatar" />
    </div>
  )
}

export default About;