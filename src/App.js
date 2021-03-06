import React from 'react';
import { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImgaeLinkForm from './components/ImgaeLinkForm/ImgaeLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
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

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    join: ''
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({ user: data });
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  calculateFaceLocation = (data) => {

    const clarifaiFaceData = data.outputs[0].data.regions;

    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    var boxes = clarifaiFaceData.map(data => {

      const box = data.region_info.bounding_box;

      return {
        leftCol: box.left_col * width,
        rightCol: width - (box.right_col * width),
        topRow: box.top_row * height,
        bottomRow: height - (box.bottom_row * height)
      }

    });

    return boxes;
  }

  displayFaceBox = (boxes) => {
    this.setState({ boxes: boxes });
  }

  onButtonClick = () => {
    this.setState({ imageUrl: this.state.input });

    fetch("https://frozen-reef-74841.herokuapp.com/imageUrl", {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input,
      })
    })
      .then(response => response.json())
      .then((response) => {
        fetch("https://frozen-reef-74841.herokuapp.com/image", {
          method: 'put',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            id: this.state.user.id,
          })
        }).then(res => res.json())
          .then(count => this.setState(Object.assign(this.state.user, { entries: count })))
          .catch(console.log);

        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch((error) => console.log(error))
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    else if (route === 'signout')
      this.setState(initialState);
    this.setState({ route: route });
  }

  render() {
    const { isSignedIn, imageUrl, boxes, route, user } = this.state;
    return (
      <div className="App">
        <Particles className="particles"
          params={particleOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === 'home'
          ?
          <div>
            <Logo />
            <Rank userName={user.name} entries={user.entries} />
            <ImgaeLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
            <FaceRecognition imageUrl={imageUrl} boxes={boxes} />
          </div>
          :
          (
            route === 'signin'
              ?
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              :
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
