import './global.css';
import './styles/header.css';
import './styles/footer.css';

import { loadHome } from './pages/home';
import { showLoader, hideLoader } from './components/loader';
import { loadMenu } from './pages/menu';

showLoader();
loadHome();
window.addEventListener('load', () => {
	console.log('loaded');
	setTimeout(() => {
		hideLoader();
	}, 2000);
});

// menu buttons
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');

homeBtn.addEventListener('click', () => loadHome());
menuBtn.addEventListener('click', () => loadMenu());
// homeBtn.addEventListener('click', () => loadHome());
