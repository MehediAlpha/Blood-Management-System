import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import BloodSection from './components/BloodSection/BloodSection';
import SignIn from './components/SignIn/SignIn'
import Register from './components/SignIn/Register'
import Profile from './components/Profile/Profile'

import Particles from 'react-particles-js';


class App extends Component{
  constructor(){
    super();
    this.state = {
      route: 'signin',
      route2: 'profile',
      isSignedIn: false,
      user : {
        name : 'asd',
        email : 'asd',
        phone : 'asd',
        district: 'asd',
        upazilla : 'asd',
        bloodType : 'asd',
      }
    } 
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn: true})
    } else {
      this.setState({isSignedIn: false})
      this.setState({route2: 'profile'})
    }
    this.setState({route: route})
    //console.log(this.state.isSignedIn);
  }
  onRouteChange2 = (route2) =>{
    this.setState({route2: route2})
  }

  userProfile = (data) => {
    console.log(data);
    this.setState({
      user : {
        name : data.name,
        email : data.email,
        phone : data.phone,
        district: data.district,
        upazilla : data.upazilla,
        bloodType : data.bloodType
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange} onRouteChange2 = {this.onRouteChange2}/>
        {
          this.state.route === 'home' 
        ?  this.state.route2 === 'profile'
                  ? <Profile user = {this.state.user}/>
                  : <BloodSection/> 
        
        : this.state.route === 'signin'
          ? <div>
            <Logo/> <SignIn userProfile = {this.userProfile} onRouteChange = {this.onRouteChange}/>
            </div>  
          : <Register onRouteChange = {this.onRouteChange}/>
        }
        <div>
          <MediaQuery maxDeviceWidth={1000} >
            <Particles className='prticle' params={prticleMobile} />
          </MediaQuery>
          <MediaQuery minDeviceWidth={1000} maxDeviceWidth={1600}>
            <Particles className='prticle' params={prticleTab} />
          </MediaQuery>
          <MediaQuery minDeviceWidth={1600}>
            <Particles className='prticle' params={prticlePC} />
          </MediaQuery>
        </div>

      </div>
    );
  }
}

const prticlePC ={
  "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#000000"
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
}

const prticleTab ={
  "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#000000"
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
}

const prticleMobile ={
  "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#000000"
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
}

export default App;
