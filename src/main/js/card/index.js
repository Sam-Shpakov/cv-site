import { giveInfoItems } from '../common';
import { CardModal } from './card-modal';

export async function addCardClickHandler() {
  let items = await giveInfoItems();
  document
    .querySelector('.filter-container')
    .addEventListener('click', (event) => {
      if (event.target.closest('.card')) {
        generateCardModal(
          getClickedData(items, event.target.closest('.card').id)
        );
        event.target.closest('.card').classList.add('active-card');
      }
    });
}

function getClickedData(items, id) {
  return items.find((item) => item.id.toLowerCase() === id.toLowerCase());
}
const generateCardModal = (data) => {
  let cardModal = new CardModal('modal', data);
  cardModal.renderCardModal();
};
