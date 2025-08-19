const inputField = document.querySelector('.user__input-field') as HTMLInputElement | null;
const inputClear = document.querySelector('.user__input-field--clear') as HTMLButtonElement | null;

const writeInput = () => {
	inputField?.addEventListener('input', () => {
		if (inputField && inputField.value !== '') {
			inputClear?.classList.remove('--hide');
		} else {
			inputClear?.classList.add('--hide');
		}
	});
};

const clearInput = () => {
	inputClear?.addEventListener('click', () => {
		clearInputValue();
		if (inputField) {
			inputClear.classList.add('--hide');
		}
	});
};

// ФИКС: убрана очистка поля при клике вне области
const showClearInput = () => {
	document.addEventListener('click', e => e.target as HTMLElement);
};

const clearInputValue = () => {
	if (inputField) {
		inputField.value = '';
	}
};

export const input = (): void => {
	clearInput(), showClearInput(), writeInput();
};
