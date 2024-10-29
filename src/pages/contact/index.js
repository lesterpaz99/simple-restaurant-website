import './contact.css';

export function loadContact() {
	const content = document.getElementById('content');
	content.innerHTML = ''; // Clear previous content

	// Create a container for the contact cards
	const contactContainer = document.createElement('div');
	contactContainer.className = 'contact-container';

	// Sample contact data
	const contacts = [
		{
			name: 'Luca Rossi',
			position: 'Head Chef',
			phone: '+504 9456-7890',
			email: 'chef.luca@example.com',
		},
		{
			name: 'Maria Johnson',
			position: 'Restaurant Manager',
			phone: '+504 9287-6543',
			email: 'manager.maria@example.com',
		},
		{
			name: 'Emma Garcia',
			position: 'Receptionist',
			phone: '+504 2456-4321',
			email: 'reception.emma@example.com',
		},
	];

	// Generate a card for each contact
	contacts.forEach((contact) => {
		const card = document.createElement('div');
		card.className = 'contact-card';

		const name = document.createElement('h3');
		name.className = 'contact-card-name';
		name.textContent = contact.name;

		const position = document.createElement('p');
		position.className = 'contact-card-position';
		position.textContent = contact.position;

		const phone = document.createElement('p');
		phone.className = 'contact-card-phone';
		phone.textContent = `Phone: ${contact.phone}`;

		const email = document.createElement('p');
		email.className = 'contact-card-email';
		email.textContent = `Email: ${contact.email}`;

		card.appendChild(name);
		card.appendChild(position);
		card.appendChild(phone);
		card.appendChild(email);
		contactContainer.appendChild(card);
	});

	// Append contact container to content
	content.appendChild(contactContainer);
}
