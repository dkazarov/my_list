import { initBurger } from './js-components/burger';
import { searchInit } from './js-components/search';
import { userInputInstall } from './js-components/input';

document.addEventListener('DOMContentLoaded', () => {
  searchInit();
  initBurger();
  userInputInstall();
  
	const listItems = document.querySelector('.list__items');

	const fetchAllItems = async () => {
		try {
			const response = await fetch('http://localhost:8888/my_list/api.php');
			if (!response.ok) throw new Error('Ошибка сети');

			const data = await response.json();
			renderItems(data); // рендерим только после получения данных
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error);
		}
	};

	const renderItems = data => {
		if (!listItems) return;

		data.forEach(item => {
			const listItem = document.createElement('li'); // используем li
			listItem.classList.add('list__item');

			listItem.innerHTML = `
        ${item.title}
        <span class="list__item-actions">
          <button class="grid__item-edit btn--reset">&#9998;</button>
          <button class="grid__item-delete btn--reset">&#10005;</button>
        </span>
      `;

			listItems.appendChild(listItem);
		});
	};

	fetchAllItems();
});