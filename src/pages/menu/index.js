import './menu.css';
import pizzaImg from '../../img/margarita-pizza.jpg';
import spaguettiImg from '../../img/spaguetti.jpg';
import salmonImg from '../../img/salmon.jpg';
import saladImg from '../../img/salad.jpg';

export function loadMenu() {
	const content = document.getElementById('content');
	content.innerHTML = ''; // Clear previous content

	// Create a container for the menu items
	const menuContainer = document.createElement('div');
	menuContainer.className = 'menu-container';

	// Sample menu data
	const menuItems = [
		{
			name: 'Margherita Pizza',
			description:
				'Classic Italian pizza with fresh basil, mozzarella, and tomato sauce.',
			price: '$10.99',
			img: pizzaImg,
		},
		{
			name: 'Spaghetti Carbonara',
			description:
				'Creamy pasta with pancetta, Parmesan, and a hint of black pepper.',
			price: '$12.99',
			img: spaguettiImg,
		},
		{
			name: 'Caesar Salad',
			description:
				'Crispy romaine lettuce with Caesar dressing, croutons, and Parmesan.',
			price: '$8.99',
			img: saladImg,
		},
		{
			name: 'Grilled Salmon',
			description:
				'Perfectly grilled salmon fillet served with lemon and herbs.',
			price: '$15.99',
			img: salmonImg,
		},
		{
			name: 'Spaghetti Carbonara',
			description:
				'Creamy pasta with pancetta, Parmesan, and a hint of black pepper.',
			price: '$12.99',
			img: spaguettiImg,
		},
		{
			name: 'Grilled Salmon',
			description:
				'Perfectly grilled salmon fillet served with lemon and herbs.',
			price: '$15.99',
			img: salmonImg,
		},
		{
			name: 'Margherita Pizza',
			description:
				'Classic Italian pizza with fresh basil, mozzarella, and tomato sauce.',
			price: '$10.99',
			img: pizzaImg,
		},
		{
			name: 'Grilled Salmon',
			description:
				'Perfectly grilled salmon fillet served with lemon and herbs.',
			price: '$15.99',
			img: salmonImg,
		},
	];

	// Generate a card for each menu item
	menuItems.forEach((item) => {
		const card = document.createElement('div');
		card.className = 'menu-card';

		const img = document.createElement('img');
		img.src = item.img;
		img.alt = item.name;
		img.className = 'menu-card-image';

		const name = document.createElement('h3');
		name.className = 'menu-card-name';
		name.textContent = item.name;

		const description = document.createElement('p');
		description.className = 'menu-card-description';
		description.textContent = item.description;

		const price = document.createElement('p');
		price.className = 'menu-card-price';
		price.textContent = item.price;

		card.appendChild(img);
		card.appendChild(name);
		card.appendChild(description);
		card.appendChild(price);
		menuContainer.appendChild(card);
	});

	// Append menu container to content
	content.appendChild(menuContainer);
}
