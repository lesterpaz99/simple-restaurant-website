import './loader.css';
import * as lottie from 'lottie-web';
import animationData from '../../assets/loading.json';

// Function to create and show the loader
function showLoader() {
	// Create loader container
	const loaderContainer = document.createElement('div');
	loaderContainer.id = 'loader-container';

	// Create loader content (where the Lottie animation will go)
	const loaderContent = document.createElement('div');
	loaderContent.id = 'lottie-loader';
	lottie.loadAnimation({
		container: loaderContent,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		animationData,
	});

	// Append loader content to loader container
	loaderContainer.appendChild(loaderContent);

	// Append loader container to body
	document.body.appendChild(loaderContainer);
}

// Function to hide the loader
function hideLoader() {
	const loaderContainer = document.getElementById('loader-container');
	if (loaderContainer) {
		loaderContainer.remove();
	}
}

// Export functions for external usage
export { showLoader, hideLoader };
