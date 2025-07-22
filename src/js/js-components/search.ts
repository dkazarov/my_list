const searchBtn = document.querySelector('.search__btn') as HTMLElement | null;
const searchInput = document.querySelector('.search__input') as HTMLInputElement | null;
const clearInput = document.querySelector('.clear__input') as HTMLInputElement | null;

// Ініціалізація кнопки пошуку
const searchOpen = () => {
	searchBtn?.addEventListener('click', () => {
		searchInput?.classList.toggle('search__input--active');
		searchInput?.focus();

		searchInput?.addEventListener('input', () => {
			clearInput?.classList.add('clear__input--active');
		});
		if (searchInput) {
			clearInputValue();
		}
		clearInput?.classList.remove('clear__input--active');
	});
};
//
const searchClose = () => {
	document.addEventListener('click', e => {
		const target = e.target as HTMLElement;
		// Закриття пошуку по кліку поза елементом
		if (!target.closest('search')) {
			searchInput?.classList.remove('search__input--active');
			clearInput?.classList.remove('clear__input--active');
		}
	});
	// Закриття пошуку по Enter
	searchInput?.addEventListener('keydown', e => {
		if (e.key === 'Enter') {
			searchInput.classList.remove('search__input--active');
			clearInput?.classList.remove('clear__input--active');
		}
	});
};
// Функція для очищення значення інпуту
const clearInputValue = () => {
	if (searchInput) {
		searchInput.value = '';
	}
};
// Ініціалізація кнопки очищення інпуту
const clearInputInit = () => {
	clearInput?.addEventListener('click', () => {
		clearInputValue();
		clearInput?.classList.remove('clear__input--active');
    searchInput?.focus();
	});
};
// Ініціалізація всіх функцій пошуку
export const searchInit = (): void => {
	searchOpen(), searchClose(), clearInputInit();
};
