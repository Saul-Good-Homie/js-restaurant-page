import { homePage } from "./home";
import { menuPage } from "./menu";

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

const addEventListeners = () => {
	var home = document.getElementById("home");
	home.addEventListener("click", loadHome);

	var menu = document.getElementById("menu");
	menu.addEventListener("click", loadMenu);
};

homePage();
addEventListeners();
