import checkbox from '../../assets/img/checkbox.svg';
import toggleSidebar from './toggle-sidebar';
import removeCard from './delete-card';
import Todo from '../classes/todo';
import submit from '../../assets/img/submit.svg';
import addToStorage from './save-content';

export function createTodo(todo, project, projectBoard) {
  // use project id to find proper column
  const cards = document.querySelector(`#${project.id}>.cards`);

  const card = document.createElement('div');
  card.classList.add('card');
  // card id = todo objects id
  card.id = todo.id;

  // adds title text
  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = todo.title;
  card.appendChild(title);

  // is done element remains
  const isDone = document.createElement('div');
  isDone.classList.add('done');

  const image = document.createElement('img');
  image.src = checkbox;
  image.alt = 'Check Box';
  isDone.appendChild(image);

  isDone.innerHTML += 'Done';
  card.appendChild(isDone);

  cards.appendChild(card);

  // clicking on card opens it up or closes it depending on if the sidebar is opened
  card.addEventListener('click', () => {
    toggleSidebar(todo, project, projectBoard);
  });

  // clicking the isdone div remove todo
  isDone.addEventListener('click', () => {
    removeCard(todo, project, projectBoard);
  });
}

export default function createCardForm(project, projectBoard) {
  const cards = document.querySelector(`#${project.id}>.cards`);

  // create card
  const card = document.createElement('div');
  card.classList.add('card');

  // add form html
  const titleForm = document.createElement('form');
  titleForm.classList.add('title');
  titleForm.id = 'todo-form';

  // todo title form
  const title = document.createElement('input');
  title.placeholder = 'Type a name...';
  title.type = 'text';
  title.required = true;
  title.classList.add('input');
  titleForm.appendChild(title);

  // potentially remove this and just change the event listener to a change rather than submit
  const submitElement = document.createElement('input');
  submitElement.classList.add('submit-card');
  submitElement.type = 'image';
  submitElement.style.width = '16px';
  submitElement.src = submit;
  submitElement.name = 'project-name';
  submitElement.alt = 'Submit Button';
  titleForm.appendChild(submitElement);

  card.appendChild(titleForm);

  // done checkbox + text
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

  titleForm.addEventListener('submit', () => {
    // get form input
    const todoName = document.forms['todo-form'].querySelector('.input').value;
    // create new todo object
    const todo = new Todo(todoName);
    // add todo to project
    project.addTodo(todo);
    // save to local storage
    addToStorage(projectBoard);
    // create new project column (dom)
    createTodo(todo, project, projectBoard);
    // remove form
    card.remove();
  });
}
