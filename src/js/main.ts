import { initBurger } from './js-components/burger';
import { searchInit } from './js-components/search';

document.addEventListener('DOMContentLoaded', () => {

const userInput = document.querySelector('.user__input') as HTMLInputElement;
const userInputResetBtn = document.querySelector('.user__input-reset') as HTMLButtonElement;
const userForm = document.querySelector('.user__form') as HTMLFormElement;

userInputResetBtn.classList.add('--opacity-hide');

const toggleUserInputResetBtn= () => {
    userInput.addEventListener('input', () => {
      if (userInput.value !== '') {
        userInputResetBtn.classList.remove('--opacity-hide');
      }
      else {
        userInputResetBtn.classList.add('--opacity-hide');
      }
    })

  }
  
  const userInputResetBtnClick = () => {
    userInputResetBtn.addEventListener('click', () => {
      userInputResetBtn.classList.add('--opacity-hide');
    })
  }

  const userInputClickOutside = () => {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        if (target !== userForm) {
					userInputResetBtn.classList.add('--opacity-hide');
					userInput.value = '';
				}
    })
  }
  
  toggleUserInputResetBtn();
  userInputResetBtnClick();
  userInputClickOutside();
  
});



searchInit();
initBurger();
