/* ** hamburger menu ** */
const hamMenu = document.getElementById('hamMenu');
const offScreenNav = document.getElementById('offScreenNav');
const handleHamAnimations = () => {
    hamMenu.classList.toggle('animate');
    offScreenNav.classList.toggle('show');
}
hamMenu.addEventListener('click', handleHamAnimations);
offScreenNav.addEventListener('click', handleHamAnimations);


const particalBoard = document.querySelector('.partical-board');
const config = {
  particalCount: 150,
}
for (let i = 0; i < config.particalCount; i++) {
  createPartical();
  positionPartical();
}
function createPartical() {
  let partical = document.createElement('div');
  partical.classList.add('partical');
  particalBoard.appendChild(partical);
}
function positionPartical(index) {
  let particals = document.querySelectorAll('.partical');
  particals.forEach(partical => {
    let randomTop = Math.floor(Math.random() * (-500 - 500) + 500);
    partical.style.top = `${randomTop}%`
    
    let randomLeft = Math.floor(Math.random() * (-500 - 500) + 500);
    partical.style.left = `${randomLeft}%`

    let randomDuration = Math.floor(Math.random() * 20);
    let randomDelay = Math.floor(Math.random() * 10);

    partical.style.animation = `particals ${randomDuration}s ${randomDelay}s ease infinite`
  });
}