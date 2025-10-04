const HOST_API: string = 'http://localhost:8888/my_list/api.php';

const list = document.querySelector('.list__items') as HTMLUListElement;
const listItems = document.querySelector('.list__items') as HTMLDataListElement;

interface Item {
	title: string;
}

export const fetchAllItems = async () => {
	try {
		const response = await fetch(HOST_API);
		if (!response.ok) {
			alert('Помилка мережі');
			throw new Error('Помилка мережі');
		}

		const data = await response.json();
		renderItems(data); // Рендерим лише після отримання даних
	} catch (error) {
		console.error('Error fetching items:', error);
	}
};

export const renderItems = (data: Item[]) => {
	if (!listItems) return;
	list.innerHTML = '';

	data.forEach(item => {
		const listItem = document.createElement('li');

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

export const getAndRenderItems = () => {
	fetchAllItems();
};
