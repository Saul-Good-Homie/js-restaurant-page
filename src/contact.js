const contactPage = () => {
	console.log("I am loading the contact page");

	const content = document.getElementById("content");

	//create all the top navigation elements
	const topNav = document.createElement("div");
	topNav.id = "top-nav";

	const ul = document.createElement("ul");
	const home = document.createElement("li");
	home.textContent = "Home";
	home.id = "home";
	const menu = document.createElement("li");
	menu.textContent = "Menu";
	menu.id = "menu";
	const contact = document.createElement("li");
	contact.textContent = "Contact";
	contact.id = "contact";

	ul.appendChild(home);
	ul.appendChild(menu);
	ul.appendChild(contact);
	topNav.appendChild(ul);

	//contact page details

	const contactContainer = document.createElement("div");
	contactContainer.id = "contact-container";

	const phone = document.createElement("div");
	phone.className = "contact";
	phone.innerHTML = "Phone: 123-456-7890";

	const address = document.createElement("div");
	address.className = "contact";
	address.innerHTML = "Address: Main Park, Brooklyn NY, 99th Precinct";

	const img = document.createElement("img");
	img.src = "/media/brooklyn.png";

	img.setAttribute("alt", "Screenshot of google maps over brooklyn");

	contactContainer.appendChild(phone);
	contactContainer.appendChild(address);
	contactContainer.appendChild(img);

	// create and append footer elements
	const footer = document.createElement("footer");
	footer.innerHTML =
		'<p> This site is a learning project by <a href="https://twitter.com/saul_good_homie">Saul Belisle</a>, view the code on <a href="#">Github</a>.</p>';

	content.appendChild(topNav);
	content.appendChild(contactContainer);
	content.appendChild(footer);
};

export { contactPage };
