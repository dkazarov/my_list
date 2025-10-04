import { initBurger } from './js-components/burger';
import { searchInit } from './js-components/search';
import { userInputInstall } from './js-components/input';
import { getAndRenderItems } from './js-components/API/getAllItems';
import { sendUserData } from './js-components/API/postData';

document.addEventListener('DOMContentLoaded', () => {
	searchInit();
	initBurger();
	userInputInstall();
	getAndRenderItems();
	sendUserData();
});

