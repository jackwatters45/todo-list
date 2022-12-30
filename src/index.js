import './styles/style.css';
import ProjectBoard from './js/classes/projectBoard';
import loadContent from './js/functions/load-content';
import { addForm } from './js/functions/add-project';

const projectBoard = new ProjectBoard();

if (localStorage.getItem('Project Board')) loadContent(projectBoard);

const addSection = document.querySelector('.add-project-button');
addSection.addEventListener('click', () => {
  addForm(projectBoard);
});
