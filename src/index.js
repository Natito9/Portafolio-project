import './style.css';
import './reset.css';
import './header.css';


const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active'); // Toggles the 'active' class
});