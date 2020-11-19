import { givePets } from '../common';
import { CardModal } from './card-modal';

export async function addCardClickHandler() {
  let pets = await givePets();
  document.querySelector('.pets__slider').addEventListener('click', (event) => {
    if (event.target.closest('.card')) {
      generateCardModal(getClickedData(pets, event.target.closest('.card').id));
      event.target.closest('.card').classList.add('active-card');
    }
  });
}

function getClickedData(pets, name) {
  return pets.find((pet) => pet.name.toLowerCase() === name.toLowerCase());
}
const generateCardModal = (data) => {
  let cardModal = new CardModal('modal', data);
  cardModal.renderCardModal();
};