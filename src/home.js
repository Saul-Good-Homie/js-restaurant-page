const homePage = () => {
	console.log("I am loading the home page");

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

	//create and append the top hero section

	const heroOne = document.createElement("div");
	heroOne.id = "hero-1";

	const mainImg = document.createElement("div");
	mainImg.className = "main-img";
	const h = document.createElement("H1");
	h.textContent = "Welcome to Wing Slutz!";

	// const heroImg = document.createElement("img");
	// heroImg.src = "media/wingSlutz.png";
	// heroImg.setAttribute("alt", "Two happy men eating wings in restuarant");

	mainImg.style.backgroundImage = "media/wingSlutz.png";
	mainImg.appendChild(h);

	const specials = document.createElement("div");
	specials.className = "special-offers";

	const specialOne = document.createElement("div");
	specialOne.className = "special-1";
	const specialOneHeader = document.createElement("H3");
	specialOneHeader.textContent = "$14.99";
	const specialOneSubHeader = document.createElement("H4");
	specialOneSubHeader.textContent = "Wing Buckets";
	specialOne.appendChild(specialOneHeader);
	specialOne.appendChild(specialOneSubHeader);

	const specialTwo = document.createElement("div");
	specialTwo.className = "special-2";
	const specialTwoHeader = document.createElement("H3");
	specialTwoHeader.textContent = "$10.00";
	const specialTwoSubHeader = document.createElement("H4");
	specialTwoSubHeader.textContent = "Domestic Pitchers";
	specialTwo.appendChild(specialTwoHeader);
	specialTwo.appendChild(specialTwoSubHeader);

	specials.appendChild(specialOne);
	specials.appendChild(specialTwo);
	heroOne.appendChild(mainImg);
	heroOne.appendChild(specials);

	//create all four card section

	const cards = document.createElement("div");
	cards.id = "cards";

	const cardOne = document.createElement("div");
	cardOne.className = "card";

	const iconOne = document.createElement("div");
	iconOne.className = "icon";
	iconOne.innerHTML = '<i class="fas fa-beer"></i>';
	const headerOne = document.createElement("div");
	headerOne.className = "header";
	headerOne.textContent = "Beer";
	const subHeaderOne = document.createElement("div");
	subHeaderOne.className = "sub-header";
	subHeaderOne.textContent = "Over 30 Local Craft Beers and Ciders on Tap!";
	cardOne.appendChild(iconOne);
	cardOne.appendChild(headerOne);
	cardOne.appendChild(subHeaderOne);

	const cardTwo = document.createElement("div");
	cardTwo.className = "card";

	const iconTwo = document.createElement("div");
	iconTwo.className = "icon";
	iconTwo.innerHTML = '<i class="fas fa-drumstick-bite"></i>';
	const headerTwo = document.createElement("div");
	headerTwo.className = "header";
	headerTwo.textContent = "Wings";
	const subHeaderTwo = document.createElement("div");
	subHeaderTwo.className = "sub-header";
	subHeaderTwo.textContent =
		"Try a bucket of our delicious wings and famous slut sauce";
	cardTwo.appendChild(iconTwo);
	cardTwo.appendChild(headerTwo);
	cardTwo.appendChild(subHeaderTwo);

	const cardThree = document.createElement("div");
	cardThree.className = "card";
	const iconThree = document.createElement("div");
	iconThree.className = "icon";
	iconThree.innerHTML = '<i class="fas fa-question-circle"></i>';
	const headerThree = document.createElement("div");
	headerThree.className = "header";
	headerThree.textContent = "Trivia";
	const subHeaderThree = document.createElement("div");
	subHeaderThree.className = "sub-header";
	subHeaderThree.textContent = "Join us each Tuesday for Trivia Nights!";
	cardThree.appendChild(iconThree);
	cardThree.appendChild(headerThree);
	cardThree.appendChild(subHeaderThree);

	const cardFour = document.createElement("div");
	cardFour.className = "card";
	const iconFour = document.createElement("div");
	iconFour.className = "icon";
	iconFour.innerHTML = '<i class="fas fa-music"></i>';
	const headerFour = document.createElement("div");
	headerFour.className = "header";
	headerFour.textContent = "Music";
	const subHeaderFour = document.createElement("div");
	subHeaderFour.className = "sub-header";
	subHeaderFour.textContent =
		"Live Music each Thursday During our Summer of Rock";
	cardFour.appendChild(iconFour);
	cardFour.appendChild(headerFour);
	cardFour.appendChild(subHeaderFour);

	cards.appendChild(cardOne);
	cards.appendChild(cardTwo);
	cards.appendChild(cardThree);
	cards.appendChild(cardFour);

	//create and append lower hero image

	const bigHero = document.createElement("div");
	bigHero.id = "big-hero";
	const bigHeroImg = document.createElement("div");
	bigHeroImg.className = "big-hero-image";
	const img = document.createElement("img");
	img.src = "media/wings.png";
	img.setAttribute("alt", "Stock photo of bar style chicken wings");

	bigHeroImg.appendChild(img);
	bigHero.appendChild(bigHeroImg);

	// create and append footer elements
	const footer = document.createElement("footer");
	footer.innerHTML =
		'<p> This site is a learning project by <a href="https://twitter.com/saul_good_homie">Saul Belisle</a>, view the code on <a href="#">Github</a>.</p>';

	// Append all main children to content div
	content.appendChild(topNav);
	content.appendChild(heroOne);
	content.appendChild(cards);
	content.appendChild(bigHero);
	content.appendChild(footer);
};

export { homePage };
