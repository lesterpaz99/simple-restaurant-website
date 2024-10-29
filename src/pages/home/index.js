import { loadMenu } from '../menu';
import './home.css';

// Function to create the Home view content
export function loadHome() {
	const content = document.getElementById('content');

	// Clear the content first
	content.innerHTML = '';

	// Create elements for Home view
	const homeContainer = document.createElement('div');
	homeContainer.classList.add('home-view');

	// Hero Section
	const heroSection = document.createElement('div');
	heroSection.classList.add('hero-section');
	const heroHeading = document.createElement('h1');
	heroHeading.textContent = 'Welcome to Our Restaurant!';
	const heroDescription = document.createElement('p');
	heroDescription.textContent =
		'Experience the finest dining with our exquisite menu, cozy atmosphere, and exceptional service.';
	const heroButton = document.createElement('button');
	heroButton.textContent = 'View Menu';
	heroButton.classList.add('cta-button');
	heroButton.onclick = function () {
		// Logic to load the Menu view can be added here
		loadMenu();
	};

	// Append elements to heroSection
	heroSection.appendChild(heroHeading);
	heroSection.appendChild(heroDescription);
	heroSection.appendChild(heroButton);

	// Append heroSection to homeContainer
	homeContainer.appendChild(heroSection);

	// Create a container for sections (Hours and Location)
	const sectionsContainer = document.createElement('div');
	sectionsContainer.classList.add('sections-container');

	// Hours Section
	const hoursSection = document.createElement('div');
	hoursSection.classList.add('card', 'hours-section');
	const hoursHeading = document.createElement('h2');
	hoursHeading.textContent = 'Hours of Operation';
	const hoursList = document.createElement('ul');
	const hoursData = [
		'Monday: 6am - 6pm',
		'Tuesday: 6am - 6pm',
		'Wednesday: 6am - 6pm',
		'Thursday: 6am - 10pm',
		'Friday: 6am - 10pm',
		'Saturday: 8am - 10pm',
		'Sunday: Closed',
	];

	hoursData.forEach((hour) => {
		const listItem = document.createElement('li');
		listItem.textContent = hour;
		hoursList.appendChild(listItem);
	});

	hoursSection.appendChild(hoursHeading);
	hoursSection.appendChild(hoursList);

	// Location Section
	const locationSection = document.createElement('div');
	locationSection.classList.add('card', 'location-section');
	const locationHeading = document.createElement('h2');
	locationHeading.textContent = 'Our Location';
	const locationAddress = document.createElement('p');
	locationAddress.textContent = 'Armenta St, Food City, San Pedro Sula, Cortes';

	locationSection.appendChild(locationHeading);
	locationSection.appendChild(locationAddress);

	// Append sections to sectionsContainer
	sectionsContainer.appendChild(hoursSection);
	sectionsContainer.appendChild(locationSection);

	// Append sectionsContainer to homeContainer
	homeContainer.appendChild(sectionsContainer);

	// Append homeContainer to content
	content.appendChild(homeContainer);
}
