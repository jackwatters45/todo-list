/* eslint-disable no-shadow */
import './styles/style.css';
import ProjectBoard from './classes/projectBoard';
// eslint-disable-next-line no-unused-vars
import loadContent from './functions/loadLocalStorage';
import Project from './classes/project';
import saveToLocalStorage from './functions/saveLocalStorage';
import createProject from './dom/createProject';
import createProjectForm from './dom/createProjectForm';
import hideProjectForm from './dom/hideProjectForm';
import createTodoForm from './dom/createTodoForm';
import Todo from './classes/todo';
import toggleSidebar from './dom/toggleSidebar';
import clickOffSidebar from './dom/clickOffSidebar';
import cardDragStart from './dom/cardDragStart';
import changeTodoProject from './functions/changeTodoProject';

const addProjectBtn = document.querySelector('.add-project-button');
const addProjectForm = document.querySelector('.add-project');
const projectNameInput = document.querySelector('.project-input');

const projectBoard = new ProjectBoard();
// if (localStorage.getItem('Project')) loadContent(projectBoard);

document.addEventListener('click', clickOffSidebar);
addProjectBtn.addEventListener('click', createProjectForm);
projectNameInput.addEventListener('blur', () => {
  if (!projectNameInput.value) hideProjectForm();
});

addProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const project = new Project(projectNameInput.value);
  projectBoard.addProject(project);
  const projectSection = createProject(project);

  // Dragging todos to different projects
  projectSection.addEventListener('dragstart', cardDragStart);
  projectSection.addEventListener('dragover', (e) => e.preventDefault());
  projectSection.addEventListener('dragenter', (e) => e.preventDefault());
  projectSection.addEventListener('drop', (e) => {
    changeTodoProject(e, project, projectBoard);
    saveToLocalStorage(projectBoard);
  });

  // Deleting a project
  const deleteBtn = document.querySelector(`#${project.id}.delete`);
  deleteBtn.addEventListener('click', () => {
    projectSection.remove();
    projectBoard.removeProjectFromBoard(project.id);
    saveToLocalStorage(projectBoard);
  });

  // creating a new todo
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
      // clicking on card will open it unless you click the done section
      card.addEventListener('click', (e) => {
        if (e.target.className !== 'done') toggleSidebar(todo);
      });

      // clicking done section will remove the todo from the board
      isDone.addEventListener('click', () => {
        todo.toggleDone();
        card.remove();
        saveToLocalStorage(projectBoard);
      });
    });

    todoInput.addEventListener('blur', () => {
      if (!todoInput.value) card.remove();
    });
  });

  saveToLocalStorage(projectBoard);
  hideProjectForm();
});
