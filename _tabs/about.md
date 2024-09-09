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

{% include animated-background.html %} <!-- Enable animated background here only-->

<!-- ParticleJS | https://github.com/VincentGarreau/particles.js/ -->
<div style="border: 1px solid #444545; border-radius: 10px; padding: 10px; overflow: hidden; margin-bottom: 20px; position: relative;">
    <div id="particles-js3" style="width: 100%; height: 300px; background-image: url('https://i.imgur.com/uNfcILD.png'); background-repeat: no-repeat; background-size: 20%; background-position: 50% 50%; filter: invert(50%);"></div>
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
          "value": "#7a6e6e"
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
          "color": "#373030",
          "opacity": 0.5,
          "width": 1.5
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

> Tell me and I forget. Teach me and I remember. Involve me and I learn.
> --- Benjamin Franklin

I’m a passionate game developer and 3D artist with a solid academic background in computer science. Here, you'll find a wealth of unified resources covering a wide range of topics, all curated to streamline referencing and enhance your learning experience.

<br>

<div class="box-info" markdown="1">
<div class="title"> The Story Behind the Screen </div>
<p> Over time, my notes and ideas scattered across various mediums—note books, loose pages, books, Obsidian vaults, text documents, PDFs, presentations, and even Google Memo app. As someone juggling multiple projects, I found myself repeatedly going back to relearn concepts, often piecing together information from countless sources just to regain what I had previously understood. It became a frustrating cycle, wasting time and energy. </p>
<p> I created this site to break that cycle. It’s my way of consolidating all those scattered notes into one unified, detailed resource that’s easy to reference. By sharing my experiences and learnings here, I hope to save others from the same frustration and provide a clear, concise guide through the topics I’ve explored. </p>
<p> Beyond just a learning hub, this site also doubles as my portfolio and blog, showcasing the projects I’m passionate about and the insights I’ve gained along the way. </p>
</div>
