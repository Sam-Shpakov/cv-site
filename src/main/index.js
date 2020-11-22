import {
  menuClickHandler,
  parallaxMoveHandler,
  parallaxCardHandler,
  filterCardHandler,
  onScrollHandler,
  // addCardClickHandler,
} from './js';

window.onload = () => {
  menuClickHandler();
  parallaxMoveHandler();
  parallaxCardHandler();
  filterCardHandler();
  onScrollHandler();
  // addCardClickHandler();
};
