import './style.css'
import { generateHomePage } from './homepage.js';
import { generateMenu } from './menu.js';
import { generateContact } from './contact.js';



const homepageBtn = document.querySelector('.homepage');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

homepageBtn.addEventListener('click', generateHomePage);
menuBtn.addEventListener('click', generateMenu);
contactBtn.addEventListener('click', generateContact);

generateHomePage();
