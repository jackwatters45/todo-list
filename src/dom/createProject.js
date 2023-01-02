import trashIcon from '../assets/img/trash.svg';
import plus from '../assets/img/plus.svg';

// creates project given the information submitted in the form
export default (project) => {
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
  deleteElement.id = project.id;

  const trash = document.createElement('img');
  trash.src = trashIcon;
  trash.alt = 'Delete Button';
  trash.classList.add('hidden');
  deleteElement.appendChild(trash);

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
  section.addEventListener('mouseenter', () => trash.classList.remove('hidden'));
  section.addEventListener('mouseleave', () => trash.classList.add('hidden'));

  return section;
};
