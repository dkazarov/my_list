const burger = document.querySelector('.burger') as HTMLElement | null;
const burgerLine = document.querySelector('.burger__line') as HTMLElement | null;
const nav = document.querySelector('.nav') as HTMLElement | null;
const body = document.querySelector('body') as HTMLElement | null;
const navItems = document.querySelectorAll('.nav__item') as NodeListOf<HTMLElement>;

const burgerOpen = (): void => {
	if (!burger || !burgerLine || !nav || !body) return;

	burger.addEventListener('click', () => {
		burgerLine.classList.toggle('line--hide');
		burger.classList.toggle('burger--transform');
		nav.classList.toggle('nav--hide');
		body.classList.toggle('no-scroll');
	});
};

const burgerClose = (): void => {
	if (!burger || !burgerLine || !nav || !body) return;

	navItems.forEach(el => {
		el.addEventListener('click', () => {
			burgerLine.classList.remove('line--hide');
			burger.classList.remove('burger--transform');
			nav.classList.remove('nav--hide');
			body.classList.remove('no-scroll');
		});
	});
};

export const initBurger = (): void => {
	burgerOpen();
	burgerClose();
}


