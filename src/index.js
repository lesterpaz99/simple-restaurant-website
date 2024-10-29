import './global.css';
import './styles/header.css';
import './styles/footer.css';

import { loadHome } from './pages/home';
import { showLoader, hideLoader } from './components/loader';

showLoader();
loadHome();
window.addEventListener('load', () => {
	console.log('loaded');
	setTimeout(() => {
		hideLoader();
	}, 2000);
});
