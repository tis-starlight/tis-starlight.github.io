---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---
<!-- 

<html>
<head>
<style>
  .image-container {
    border-radius: 20px;
    overflow: hidden;
    background-image: url('data:image/webp;base64,UklGRn4CAABXRUJQVlA4WAoAAAAgAAAAEAAACQAASUNDUAwCAAAAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD//1ZQOCBMAAAAkAMAnQEqEQAKAD6RPJpIJaOioTAIALASCWUAnQAg0TH6Gb2CFgD330q6oI5egSBgzw+AKslNGh6vHedVyfBY5Ufg6M9hkSmWxTDgAA==');
    background-size: cover;
    padding-top: 56.25%;
    position: relative;
  }
  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    pointer-events: none;   /* makes the image unclickable */
  }
</style>
</head>
<body>
<div class="image-container">
  <img src="/assets/img/posts/Banner.PNG" alt="Banner">
</div>
</body>
</html>

-->

<!-- 

![Banner](/assets/img/posts/Banner.PNG){: lqip="data:image/webp;base64,UklGRn4CAABXRUJQVlA4WAoAAAAgAAAAEAAACQAASUNDUAwCAAAAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD//1ZQOCBMAAAAkAMAnQEqEQAKAD6RPJpIJaOioTAIALASCWUAnQAg0TH6Gb2CFgD330q6oI5egSBgzw+AKslNGh6vHedVyfBY5Ufg6M9hkSmWxTDgAA==" style="pointer-events: none; border-radius: 20px; overflow: hidden"} 

-->

<!-- ParticleJS | https://github.com/VincentGarreau/particles.js/ -->
<div style="border: 1px solid #444545; border-radius: 10px; padding: 10px; overflow: hidden; margin-bottom: 20px; position: relative;">
    <div id="particles-js3" style="width: 100%; height: 300px; background-image: url('https://i.imgur.com/uNfcILD.png'); background-repeat: no-repeat; background-size: 20%; background-position: 50% 50%;"></div>
  </div>
  <script>
    particlesJS("particles-js3", {
      "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 1200
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
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
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 180,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 200,
            "size": 5,
            "duration": 2,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 150,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
</script>

[![GitHub](https://img.shields.io/badge/GitHub-Starlight-brightgreen?style=for-the-badge&logo=github)](https://github.com/tis-starlight){: style="border-radius: 5px; overflow: hidden"}
[![ArtStation](https://img.shields.io/badge/ArtStation-Starlight-blue?style=for-the-badge&logo=artstation)](https://www.artstation.com/tis-starlight){: style="border-radius: 5px; overflow: hidden"}
[![YouTube](https://img.shields.io/badge/YouTube-Starlight-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/channel/UClM7SQbs4f77roJSLOAYqiA){: style="border-radius: 5px; overflow: hidden"}

## 👋 Hi!

> "In the realm of coding and 3D design, I blend the artistry of game creation with the science of programming, forging unforgettable experiences one line of code at a time."

I have an unwavering passion for the intricate world of programming, with a particular fondness for C/C++, C#, and assembly languages. These coding languages are not just lines of text for me; they are the creative threads that weave together the fabric of digital innovation.

As a developer, I firmly believe in the ethos of constant growth. Learning is not just a phase; it's a way of life. Every challenge, every bug, and every line of code is an opportunity to expand my knowledge and refine my craft. It's an exhilarating journey that I cherish.
