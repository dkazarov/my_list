import { initBurger } from './js-components/burger';
import { searchInit } from './js-components/search';

searchInit();
initBurger();

const inputField = document.querySelector('.user__input-field') as HTMLInputElement | null;
const inputClear = document.querySelector('.user__input-ferld--clear') as HTMLButtonElement | null;
const inputBtn = document.querySelector('.user__input-btn') as HTMLButtonElement | null;

// Ініціалізація кнопки очистки інпуту
const writeInput = () => {
	inputField?.addEventListener('input', () => {
		if (inputField && inputField.value !== '') {
			inputClear?.classList.remove('--hide');
		} else {
			inputClear?.classList.add('--hide');
		}
	});
};

// Ховає хрестик якщо клацнув поза інпутом
const hideInputClear = () => {
	document.addEventListener('click', e => {
		e.target as HTMLElement;
		if (!inputField?.contains(e.target as Node) && !inputClear?.contains(e.target as Node)) {
			inputClear?.classList.add('--hide');
			clearInputValue();
		}
	});
};

// Очистка інпуту
const clearInputValue = () => {
	if (inputField) {
		inputField.value = '';
	}
};

// Attach hideInputClear as a click event listener to the document
hideInputClear();
writeInput();
