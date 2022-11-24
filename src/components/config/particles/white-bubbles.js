const white_bubbles = {
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
      limit: 0,
      value: 5,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.4,
      },
      value: 0.6,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: {
        enable: true,
        minimumValue: 70
      },
      value: 120
    },
    move: {
      angle: {
        offset: 0,
        value: 90
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
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50
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
        default: "bounce",
        bottom: "bounce",
        left: "bounce",
        right: "bounce",
        top: "bounce"
      },
      random: false,
      size: false,
      speed: 2,
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

export default white_bubbles;