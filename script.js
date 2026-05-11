// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Reveal animations
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Particles
if (window.tsParticles) {
  tsParticles.load("tsparticles", {
    background: {
      color: "transparent"
    },
    particles: {
      number: {
        value: 60
      },
      color: {
        value: ["#f472b6", "#ec4899", "#be185d"]
      },
      links: {
        enable: true,
        distance: 150,
        color: "#f472b6",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1
      },
      size: {
        value: {
          min: 1,
          max: 3
        }
      },
      opacity: {
        value: 0.5
      }
    }
  });
}
