const menuPage = () => {
	console.log("I am loading the Menu page");

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

	//choose a size
	const sizeContainer = document.createElement("div");
	sizeContainer.id = "bucket-size";
	sizeContainer.innerHTML = "<h1>Choose a Size:</h1>";

	const buckets = document.createElement("div");
	buckets.className = "buckets";

	const bucket1 = document.createElement("div");
	bucket1.className = "bucket";
	bucket1.innerHTML = "Large Bucket";

	const bucket2 = document.createElement("div");
	bucket2.className = "bucket";
	bucket2.innerHTML = "Extra Large Bucket";

	buckets.appendChild(bucket1);
	buckets.appendChild(bucket2);
	sizeContainer.appendChild(buckets);

	//choose a sauce
	const sauceGrid = document.createElement("div");
	sauceGrid.id = "sauce-grid";
	sauceGrid.innerHTML = "<h1>Choose a Sauce:</h1>";

	const saucesContainer = document.createElement("div");
	saucesContainer.className = "sauceContainer";

	const slutSauce = document.createElement("div");
	slutSauce.className = "sauces";
	slutSauce.innerHTML = "Slut Sauce";

	const a = document.createElement("div");
	a.className = "sauces";
	a.innerHTML = "Bingpot BBQ";

	const b = document.createElement("div");
	b.className = "sauces";
	b.innerHTML = "Toit Teriyaki";

	const c = document.createElement("div");
	c.className = "sauces";
	c.innerHTML = "Vulture Sauce";

	const d = document.createElement("div");
	d.className = "sauces";
	d.innerHTML = "Halloween Habenero Heist";

	const e = document.createElement("div");
	e.className = "sauces";
	e.innerHTML = "Spicy Cheddar";

	const f = document.createElement("div");
	f.className = "sauces";
	f.innerHTML = "Doug Judy's Voodoo JuJu";

	const g = document.createElement("div");
	g.className = "sauces";
	g.innerHTML = "CoolCoolCool Ranch";

	const h = document.createElement("div");
	h.className = "sauces";
	h.innerHTML = "9-9 Degrees";

	const i = document.createElement("div");
	i.className = "sauces";
	i.innerHTML = "NoiceVille Hot";

	const j = document.createElement("div");
	j.className = "sauces";
	j.innerHTML = "Pimento Pepper";

	const k = document.createElement("div");
	k.className = "sauces";
	k.innerHTML = "Dry Rub aka Title of your Sex Tape";

	saucesContainer.appendChild(slutSauce);
	saucesContainer.appendChild(a);
	saucesContainer.appendChild(b);
	saucesContainer.appendChild(c);
	saucesContainer.appendChild(d);
	saucesContainer.appendChild(e);
	saucesContainer.appendChild(f);
	saucesContainer.appendChild(g);
	saucesContainer.appendChild(h);
	saucesContainer.appendChild(i);
	saucesContainer.appendChild(j);
	saucesContainer.appendChild(k);

	sauceGrid.appendChild(saucesContainer);

	//choose a side
	const sides = document.createElement("div");
	sides.id = "sides-grid";
	sides.innerHTML = "<h1>Choose Your Sides:</h1>";

	const sidesContainer = document.createElement("div");
	sidesContainer.className = "sauceContainer";

	const fries = document.createElement("div");
	fries.className = "sides";
	fries.innerHTML = "Fries";
	const gravy = document.createElement("div");
	gravy.className = "sides";
	gravy.innerHTML = "Gravy";
	const potatoSalad = document.createElement("div");
	potatoSalad.className = "sides";
	potatoSalad.innerHTML = "Potato Salad";
	const onionRings = document.createElement("div");
	onionRings.className = "sides";
	onionRings.innerHTML = "Onion Rings";

	sidesContainer.appendChild(fries);
	sidesContainer.appendChild(gravy);
	sidesContainer.appendChild(potatoSalad);
	sidesContainer.appendChild(onionRings);
	sides.appendChild(sidesContainer);

	// create and append footer elements
	const footer = document.createElement("footer");
	footer.innerHTML =
		'<p> This site is a learning project by <a href="https://twitter.com/saul_good_homie">Saul Belisle</a>, view the code on <a href="#">Github</a>.</p>';

	//append all primary children to content
	content.appendChild(topNav);
	content.appendChild(sizeContainer);
	content.appendChild(sauceGrid);
	content.appendChild(sides);
	content.appendChild(footer);
};

export { menuPage };
