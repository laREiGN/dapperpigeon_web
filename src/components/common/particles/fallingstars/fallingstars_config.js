const fallingstars_config = {
  autoPlay: true,
  background: {
    color: '#fff',
    opacity: 0,
  },
  fullScreen: {
    enable: false,
  },
  fpsLimit: 40,
  particles: {
    color: {
      value: "#fff"
    },
    number: {
      density: {
        enable: true,
        area: 1080
      },
      limit: 20,
      value: 10,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: 'image',
      image: {
        src: 'https://cdn.discordapp.com/attachments/1041748051167023214/1045359554269032498/Particle.png',
        height: 50,
        width: 50,
      },
    },
    size: {
      random: {
        enable: true,
        minimumValue: 90
      },
      value: 590,
    },
    move: {
      angle: {
        offset: 0,
        value: 0
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000
        }
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0
      },
      decay: 0,
      distance: {},
      direction: "bottom-left",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: false,
        options: {}
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out"
      },
      random: true,
      size: true,
      speed: 5,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000"
        }
      },
      vibrate: false,
      warp: false
    },
  }
}

export default fallingstars_config;