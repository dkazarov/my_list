import { fetchAllItems } from './getAllItems';

const HOST_API: string = 'http://localhost:8888/my_list/api.php';

const addBtn = document.querySelector('.user__btn-add') as HTMLButtonElement;
const userInput = document.querySelector('.user__input') as HTMLInputElement;


interface NewItem {
	title: string;
	completed: boolean;
}

export const sendData = () => {
	try {
		addBtn.addEventListener('click', event => {
			event.preventDefault();

			const userData = userInput.value.trim();

			if (userData !== '' && userData !== ' ') {
				postData();
				fetchAllItems();
			} else {
				alert('Поле не може бути пустим');
			}
		});
	} catch (error) {
    alert("Не вдалося надіслати дані")
  }
};

export const postData = async () => {
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
		alert('Не вдалося відправити дані');
		return null;
	}
};

export const sendUserData = () => {
	sendData();
};
