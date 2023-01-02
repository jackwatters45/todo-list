/* eslint-disable no-shadow */
import './styles/style.css';
import ProjectBoard from './js/classes/projectBoard';
// eslint-disable-next-line no-unused-vars
import loadContent from './js/functions/loadLocalStorage';
import Project from './js/classes/project';
import saveToLocalStorage from './js/functions/saveLocalStorage';
import createProject from './dom/createProject';
import createProjectForm from './dom/createProjectForm';
import hideProjectForm from './dom/hideProjectForm';
import createTodoForm from './dom/createTodoForm';
import Todo from './js/classes/todo';
import toggleSidebar from './dom/toggleSidebar';
import clickOffSidebar from './dom/clickOffSidebar';
import cardDragStart from './dom/cardDragStart';
import cardDrop from './dom/cardDrop';

const addProjectBtn = document.querySelector('.add-project-button');
const addProjectForm = document.querySelector('.add-project');
const projectNameInput = document.querySelector('.project-input');

const projectBoard = new ProjectBoard(); // TODO i dont like this
// if (localStorage.getItem('Project')) loadContent(projectBoard);

document.addEventListener('click', clickOffSidebar);
addProjectBtn.addEventListener('click', createProjectForm);

addProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const project = new Project(projectNameInput.value);
  projectBoard.addProject(project);
  const projectSection = createProject(project);

  const deleteBtn = document.querySelector(`#${project.id}.delete`);
  deleteBtn.addEventListener('click', () => {
    projectSection.remove();
    projectBoard.removeProjectFromBoard(project.id);
    saveToLocalStorage(projectBoard);
  });

  const newTodoBtn = document.querySelector(`#${project.id}.section>.new`);
  newTodoBtn.addEventListener('click', () => {
    const todoForm = createTodoForm(project);
    const todoInput = todoForm.firstElementChild;
    const card = todoForm.parentElement;
    const isDone = card.lastElementChild;

    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!todoInput.value) card.remove();

      const todo = new Todo(todoInput.value, project.id);
      project.addTodo(todo);
      saveToLocalStorage(projectBoard);
      card.id = todoInput.value;
      todoInput.blur();

      todoInput.addEventListener('input', () => todo.setTitle(todoInput));
      card.addEventListener('click', (e) => {
        if (e.target.className !== 'done') toggleSidebar(todo);
      });

      isDone.addEventListener('click', () => {
        todo.toggleDone();
        card.remove();
        saveToLocalStorage(projectBoard);
      });
    });
    todoInput.addEventListener('blur', () => {
      if (!todoInput.value) card.remove();
    });

    card.addEventListener('dragstart', cardDragStart);
    card.addEventListener('dragover', (e) => e.preventDefault());
    card.addEventListener('dragenter', (e) => e.preventDefault());
    card.addEventListener('drop', (e) => {
      const cardData = cardDrop(e);
    });
  });

  saveToLocalStorage(projectBoard);
  hideProjectForm();
});
