import '../App.css';
import React from "react";
import LayoutComponent from '../components/LayoutComponent';
import About from '../components/About';

const Home = () => {
  return (
      <LayoutComponent>
        <About />
      </LayoutComponent>
  );
};

export default Home;