import { initBurger } from './js-components/burger';
import { searchInit } from './js-components/search';
import { userInputInstall } from './js-components/input';

document.addEventListener('DOMContentLoaded', () => {
  searchInit();
  initBurger();
  userInputInstall();
})
