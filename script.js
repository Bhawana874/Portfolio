// Typed.js
var typed = new Typed('#typed-text', {
    strings: ['Cyber Security Enthusiast', 'Frontend Developer', 'UI/UX Designer', 'AI-ML Learner'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
  
  // AOS Init
  AOS.init({
    duration: 1000,
    once: true
  });
  
  // Scroll and Navbar highlight
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  const bgColors = {
    home: '#0f0c29',
    education: '#302b63',
    skills: '#24243e',
    contact: '#0b0c28'
  };
  
  window.onscroll = () => {
    let current = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  
    if (current) {
      document.body.style.background = `linear-gradient(135deg, ${bgColors[current]}, #000)`;
    }
  };
  
