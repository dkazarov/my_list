import { initBurger } from './js-components/burger';
import { searchInit } from './js-components/search';
import { userInputInstall } from './js-components/input';
import { getAndRenderItems } from './js-components/API/getAllItems';

document.addEventListener('DOMContentLoaded', e => {
	searchInit();
	initBurger();
	userInputInstall();
	getAndRenderItems();
});

	const HOST_API: string = 'http://localhost:8888/my_list/api.php';

	const addBtn = document.querySelector('.user__btn-add') as HTMLButtonElement;
	const userInput = document.querySelector('.user__input') as HTMLInputElement;

	interface NewItem {
		title: string;
		completed: boolean;
	}

	addBtn.addEventListener('click', e => {
		e.preventDefault();

		const userData = userInput.value.trim();

		if (userData !== '' && userData !== ' ') {
			postData();
		} else {
			alert('Поле не може бути пустим!!!');
		}
	});

	const postData = async () => {
		try {
			const response = await fetch(HOST_API, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: userInput.value,
					completed: true,
				} as NewItem),
			});

			if (!response.ok) {
				throw new Error(`HTTP ошибка: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			alert('Не вдалося выдправити дані');
			return null;
		}
	};
