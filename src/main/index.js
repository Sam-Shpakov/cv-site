import {
  menuClickHandler,
  parallaxMoveHandler,
  parallaxCardHandler,
  filterCardHandler,
  onScrollHandler,
  addCardClickHandler,
  onScrollAnimationHandler,
} from './js';

window.onload = () => {
  menuClickHandler();
  parallaxMoveHandler();
  parallaxCardHandler();
  filterCardHandler();
  onScrollHandler();
  onScrollAnimationHandler();
  addCardClickHandler();
};
