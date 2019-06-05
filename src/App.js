import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImgaeLinkForm from './components/ImgaeLinkForm/ImgaeLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
  }
}

function App() {
  return (
    <div className="App">
      <Particles className="particles"
        params={particleOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImgaeLinkForm />
      {/* {
      <FaceRecogition/>} */}
    </div>
  );
}

export default App;
