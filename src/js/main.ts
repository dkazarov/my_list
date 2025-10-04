import { initBurger } from './js-components/burger';
import { searchInit } from './js-components/search';
import { userInputInstall } from './js-components/input';
import { getAndRenderItems } from './js-components/API/getAllItems';

document.addEventListener('DOMContentLoaded', () => {

	searchInit();
	initBurger();
	userInputInstall();
	getAndRenderItems();
});