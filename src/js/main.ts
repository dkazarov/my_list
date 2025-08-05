import { initBurger } from './js-components/burger';
import { searchInit } from './js-components/search';

searchInit();
initBurger();

const inputField = document.querySelector('.user__input-field') as HTMLInputElement | null;
const inputClear = document.querySelector('.user__input-ferld--clear') as HTMLButtonElement | null;
const inputBtn = document.querySelector('.user__input-btn') as HTMLButtonElement | null;

inputField?.addEventListener('input', () => {
	if (inputField && inputField.value !== '') {
		inputClear?.classList.remove('--hide');
	} else {
		inputClear?.classList.add('--hide');
	}
});
