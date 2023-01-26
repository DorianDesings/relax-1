import { INFO } from './constants.js';

const cardElement = document.getElementById('card');

let counter = 0;

const allCards = Object.values(INFO);

const setCardText = () => {
  cardElement.children[0].textContent = allCards[counter].title;
  cardElement.children[1].textContent = allCards[counter].description;
};

const previusCard = () => {
  if (counter <= 0) counter = allCards.length - 1;
  else counter--;
  setCardText();
};

const nextCard = () => {
  if (counter >= allCards.length - 1) counter = 0;
  else counter++;
  setCardText();
};

setCardText();

export { previusCard, nextCard };
