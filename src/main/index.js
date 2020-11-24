import {
  menuClickHandler,
  parallaxMoveHandler,
  filterCardHandler,
  onScrollHandler,
  addCardClickHandler,
  onScrollAnimationHandler,
  addCard,
  addCertificateClickHandler,
} from "./js";

window.onload = () => {
  addCard();
  menuClickHandler();
  parallaxMoveHandler();
  filterCardHandler();
  onScrollHandler();
  onScrollAnimationHandler();
  addCardClickHandler();
  addCertificateClickHandler();
};
