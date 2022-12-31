import checkbox from '../assets/img/checkbox.svg';

export default (project) => {
  const cards = document.querySelector(`#${project.id}>.cards`);

  const card = document.createElement('div');
  card.classList.add('card');

  const form = document.createElement('form');
  const title = document.createElement('input');
  title.classList.add('title');
  title.placeholder = 'Type a name...';
  form.appendChild(title);
  card.appendChild(form);

  const isDone = document.createElement('div');
  isDone.classList.add('done');
  const image = document.createElement('img');
  image.src = checkbox;
  image.alt = 'Check Box';
  isDone.appendChild(image);
  isDone.innerHTML += 'Done';
  card.appendChild(isDone);

  cards.appendChild(card);

  title.focus();
  title.select();

  return form;
};
