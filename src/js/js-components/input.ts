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
// Видаляэ значення інпуту при кліку на хрестик
const clearInput = () => {
	inputClear?.addEventListener('click', () => {
		clearInputValue();
		if (inputField) {
			inputClear.classList.add('--hide');
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

export const input = (): void => {
	clearInput(), hideInputClear(), writeInput();
};
