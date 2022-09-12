/* ** hamburger menu ** */
const hamMenu = document.getElementById('hamMenu');
const offScreenNav = document.getElementById('offScreenNav');
const handleHamAnimations = () => {
    hamMenu.classList.toggle('animate');
    offScreenNav.classList.toggle('show');
}
hamMenu.addEventListener('click', handleHamAnimations);
offScreenNav.addEventListener('click', handleHamAnimations);


const particleBoard = document.querySelector('.particle-board');
const config = {
  particleCount: 200,
}
for (let i = 0; i < config.particleCount; i++) {
  createParticle();
  positionParticle();
}
function createParticle() {
  let particle = document.createElement('div');
  particle.classList.add('particle');
  particleBoard.appendChild(particle);
}
function positionParticle(index) {
  let particles = document.querySelectorAll('.particle');
  for (let i = 0; i < particles.length / 2; i++) {
    particles[i].classList.add('mobile');
  }
  particles.forEach(particle => {
    let randomTop = Math.floor(Math.random() * (-700 - 700) + 700);
    particle.style.top = `${randomTop}%`
    
    let randomLeft = Math.floor(Math.random() * (-700 - 700) + 700);
    particle.style.left = `${randomLeft}%`

    let randomDuration = Math.floor(Math.random() * 50);
    let randomDelay = Math.floor(Math.random() * 1);

    particle.style.animation = `particles ${randomDuration}s ${randomDelay}s ease infinite`
  });
}


// load project data
const projectData = [
  {
    name: "Online Registration Form",
    description: "I used HTML and CSS to create a fully responsive registration form for users attending a conference.",
    githubLink: "",
    livedemoLink: "",
    thumbnail: "./assets/proj3.png",
  },
  {
    name: "Interactive Photo Gallery",
    description: "This photo gallery app uses JavaScript to search/filter through photos as well as to show a larger version once a photo is clicked. I used CSS Gird to layout the photo gallery.",
    githubLink: "",
    livedemoLink: "",
    thumbnail: "./assets/proj5.png",
  },
  {
    name: "Gameshow App",
    description: "I used my knowledge of JavaScript to build out a fun, interactive game. Users have to guess the random word up on the screen but only get 5 attempts to guess the word before losing.",
    githubLink: "",
    livedemoLink: "",
    thumbnail: "./assets/proj6.png",
  },
  {
    name: "WebApp Dashboard",
    description: "This well-structured dashboard was built using CSS grid and flex-box. I used the Chart.js plugin to display data onto the dashboard. ",
    githubLink: "",
    livedemoLink: "",
    thumbnail: "./assets/proj7.png",
  },
  {
    name: "Employee Directory (API)",
    description: "Connecting to the randomuser API, I was able to generate a webpage with data from an API using fetch.",
    githubLink: "",
    livedemoLink: "",
    thumbnail: "./assets/proj8.png",
  },
  
];
createProject(projectData[0]);
function createProject(data) {
  const projectContentImg = document.getElementById('contentImage');
  const projectInfo = document.getElementById('projectInfo');
  const header = projectInfo.querySelector('h4');
  const desc = projectInfo.querySelector('p');
  const repoLink = projectInfo.querySelector('a.repo');
  const liveLink = projectInfo.querySelector('a.live');

  projectContentImg.src = data.thumbnail;

  header.textContent = data.name;
  desc.textContent = data.description;
  repoLink.setAttribute('href', data.githubLink);
  liveLink.setAttribute('href', data.livedemoLink);
}


// carousel logic
let currentIndex = 0;
const projectCarousel = document.getElementById('projectCarousel');
projectCarousel.addEventListener('click', e => {
  handleCarouselSwitching(e);
});


function handleCarouselSwitching(e) {
  const prev = document.querySelector('.project-carousel i.fa-angle-left');
  const next = document.querySelector('.project-carousel i.fa-angle-right');

  if (e.target === prev) {
    if (currentIndex === 0) {
      currentIndex = projectData.length -1;
    } else {
      currentIndex --;
    }
    createProject(projectData[currentIndex])
  } else
  if (e.target === next) {
    if (currentIndex === projectData.length -1) {
      currentIndex = 0;
    } else {
      currentIndex ++;
    }
    createProject(projectData[currentIndex])
  }
}