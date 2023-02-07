import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  return (
    <div className="App">
       <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": false,
            "zIndex": 0
        },
        "particles": {
            "number": {
                "value": 300,
                "density": {
                    "enable": true,
                    "value_area": 600
                }
            },
            "color": {
                "value": "#F0F8FF"
            },
            "shape": {
                "type": ["circle", "triangle",]
            },
            "opacity": {
                "value": 0.1,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#0000",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "bottom",
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
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.2
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 7,
                    "duration": 0.7,
                    "opacity": 1,
                    "speed": 5
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
        "background": {
            "color": "0,0,0,0.9",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
    />
    </div>
  );
}