import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './screens/about/About';
import { Contacto } from './screens/contact/Contact';
import Home from './screens/home/Home';
import Project from './screens/project/Project';
import { Header } from './shared/Header';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contacto />} />
      </Routes>
    </BrowserRouter>

  )
}
export default Router;

