// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { previusCard, nextCard } from './changeCard.js';

const previousCardElement = document.getElementById('previuos-card');
const nextCardElement = document.getElementById('next-card');

previousCardElement.addEventListener('click', previusCard);
nextCardElement.addEventListener('click', nextCard);
