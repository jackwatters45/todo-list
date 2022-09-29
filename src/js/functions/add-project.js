import trash from '../../assets/img/trash.svg';
import plus from '../../assets/img/plus.svg';
import deleteProject from './delete-project';
import newCard from './add-card';
import submit from '../../assets/img/submit.svg';
import Project from '../classes/project';
import addToStorage from './save-content';

export function addProject(project, projectBoard) {
  // creates project given the information submitted in the form
  const sections = document.querySelector('.sections');

  const section = document.createElement('div');
  section.classList.add('section');
  section.id = project.id;

  const header = document.createElement('div');
  header.classList.add('header');

  const headerTitle = document.createElement('div');
  headerTitle.classList.add('header-title');
  headerTitle.innerHTML = project.name;

  header.appendChild(headerTitle);

  const deleteElement = document.createElement('div');
  deleteElement.classList.add('delete');

  const trashIcon = document.createElement('img');
  trashIcon.src = trash;
  trashIcon.alt = 'Delete Button';
  trashIcon.classList.add('hidden');
  deleteElement.appendChild(trashIcon);

  header.appendChild(deleteElement);
  section.appendChild(header);

  const cards = document.createElement('div');
  cards.classList.add('cards');
  section.appendChild(cards);

  const newElement = document.createElement('div');
  newElement.classList.add('new');

  const plusIcon = document.createElement('img');
  plusIcon.classList.add('plus');
  plusIcon.src = plus;
  plusIcon.alt = 'Plus Button';
  newElement.appendChild(plusIcon);
  newElement.innerHTML += 'New';

  section.appendChild(newElement);
  sections.appendChild(section);

  // when user hovers over card show the little trash can to delete the project
  section.addEventListener('mouseenter', () => {
    trashIcon.classList.remove('hidden');
  });
  section.addEventListener('mouseleave', () => {
    trashIcon.classList.add('hidden');
  });

  // when trashcan is clicked delete project
  deleteElement.addEventListener('click', () => {
    deleteProject(project, projectBoard);
  });

  // when new button is clicked add a todo
  newElement.addEventListener('click', () => {
    newCard(project, projectBoard);
  });
}

export function addForm(projectBoard) {
  const sections = document.querySelector('.sections');

  // Create actual project column
  const section = document.createElement('div');
  section.classList.add('add-project');

  // add form html
  const header = document.createElement('form');
  header.classList.add('project-form');
  header.id = 'project-form';

  const headerTitle = document.createElement('div');
  headerTitle.classList.add('header-input');

  const input = document.createElement('input');
  input.placeholder = 'Name your project...';
  input.type = 'text';
  input.required = true;
  input.classList.add('input');
  headerTitle.appendChild(input);
  header.appendChild(headerTitle);

  const submitElement = document.createElement('input');
  submitElement.classList.add('submit');
  submitElement.classList.add('hidden');
  submitElement.type = 'image';
  submitElement.style.width = '16px';
  submitElement.src = submit;
  submitElement.name = 'project-name';
  submitElement.alt = 'Submit Button';

  // add elements
  header.appendChild(submitElement);
  section.appendChild(header);
  sections.appendChild(section);

  // cursor clicks on the text
  input.focus();
  input.select();

  header.addEventListener('submit', () => {
    // get form input
    const projectName = document.forms['project-form'].querySelector('.input').value;
    // create new project object
    const project = new Project(projectName);
    // add project to project board
    projectBoard.addProjectToBoard(project);
    // save to local storage
    addToStorage(projectBoard);
    // create new project column (dom)
    addProject(project, projectBoard);
    // remove form
    section.remove();
  });
}
