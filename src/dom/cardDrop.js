export default (newSection, todoId) => {
  const cards = document.querySelector(`#${newSection.id}>.cards`);
  const todoCard = document.getElementById(todoId);
  cards.appendChild(todoCard);
};
