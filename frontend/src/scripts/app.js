/* ** hamburger menu ** */
const hamMenu = document.getElementById('hamMenu');
const offScreenNav = document.getElementById('offScreenNav');
const handleHamAnimations = () => {
    hamMenu.classList.toggle('animate');
    offScreenNav.classList.toggle('show');
}
hamMenu.addEventListener('click', handleHamAnimations);
offScreenNav.addEventListener('click', handleHamAnimations);