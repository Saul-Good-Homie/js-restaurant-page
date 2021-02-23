import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

const clearDOM = () => {
	var content = document.getElementById("content");
	content.innerHTML = "";
};

const loadHome = () => {
	clearDOM();
	homePage();
	addEventListeners();
};

const loadMenu = () => {
	clearDOM();
	menuPage();
	addEventListeners();
};

const loadContact = () => {
	clearDOM();
	contactPage();
	addEventListeners();
};

const addEventListeners = () => {
	var home = document.getElementById("home");
	home.addEventListener("click", loadHome);

	var menu = document.getElementById("menu");
	menu.addEventListener("click", loadMenu);

	var contact = document.getElementById("contact");
	contact.addEventListener("click", loadContact);
};

homePage();
addEventListeners();
