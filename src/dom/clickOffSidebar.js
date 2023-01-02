/* eslint-disable no-shadow */
export default (event) => {
  const sidebar = document.querySelector('.sidebar-positioning');
  if (sidebar.classList.contains('hidden')) return;

  const cards = Array.from(document.querySelectorAll('.card'));
  const path = event.composedPath();
  const cardInPath = cards.filter((card) => path.includes(card)).length;

  if (!cardInPath && !path.includes(sidebar)) sidebar.classList.add('hidden');
};
