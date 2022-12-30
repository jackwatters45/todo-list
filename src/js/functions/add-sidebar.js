import arrowIcon from '../../assets/img/arrow.svg';
import _priorityIcon from '../../assets/img/priority.svg';
import _dateIcon from '../../assets/img/calendar.svg';
import _doneIcon from '../../assets/img/check.svg';
import _emptyCheckbox from '../../assets/img/checkbox.svg';
import removeCard from './delete-card';
import removeSidebar from './delete-sidebar';
import addToStorage from './save-content';

export default (todo, project, projectBoard) => {
  const sidebarContainer = document.querySelector('.sidebar-positioning');
  sidebarContainer.classList.remove('hidden');

  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.id = todo.id;

  const close = document.createElement('div');
  close.classList.add('close');

  const arrow = document.createElement('img');
  arrow.classList.add('arrow');
  arrow.src = arrowIcon;
  arrow.alt = 'Close Button';
  close.appendChild(arrow);
  sidebar.appendChild(close);

  const properties = document.createElement('form');
  properties.classList.add('properties');
  properties.id = 'edit-todo';

  // name of todo
  const name = document.createElement('input');
  name.classList.add('name');
  name.value = todo.title;
  name.required = true;
  name.type = 'text';
  properties.appendChild(name);

  // Priority label
  const priorityProperty = document.createElement('label');
  priorityProperty.classList.add('priority');

  const priorityIcon = document.createElement('img');
  priorityIcon.src = _priorityIcon;
  priorityIcon.alt = 'Priority Icon';
  priorityProperty.appendChild(priorityIcon);
  priorityProperty.innerHTML += 'Priority';
  properties.appendChild(priorityProperty);

  // Priority value
  const priority = document.createElement('input');
  priority.classList.add('priority');
  if (todo.priority) {
    priority.value = todo.priority;
  }
  priority.placeholder = 'Empty';
  priority.type = 'text';
  properties.appendChild(priority);

  // Date label
  const dateProperty = document.createElement('label');
  dateProperty.classList.add('date');

  const dateIcon = document.createElement('img');
  dateIcon.src = _dateIcon;
  dateIcon.alt = 'Date Icon';
  dateProperty.appendChild(dateIcon);
  dateProperty.innerHTML += 'Date';
  properties.appendChild(dateProperty);

  // Date value
  const date = document.createElement('input');
  date.classList.add('date');
  if (todo.date) {
    date.value = todo.date;
  }
  date.placeholder = 'Empty';
  date.type = 'text';
  properties.appendChild(date);

  sidebar.appendChild(properties);
  sidebarContainer.appendChild(sidebar);

  // Done label
  const doneProperty = document.createElement('label');
  doneProperty.classList.add('is-done');

  const doneIcon = document.createElement('img');
  doneIcon.src = _doneIcon;
  doneIcon.alt = 'Checkmark Icon';
  doneProperty.appendChild(doneIcon);
  doneProperty.innerHTML += 'Done?';
  properties.appendChild(doneProperty);

  // Done value
  const done = document.createElement('div');
  done.classList.add('is-done');

  const checkmarkImage = document.createElement('img');
  checkmarkImage.src = _emptyCheckbox;
  checkmarkImage.alt = 'Empty Checkmark';
  done.appendChild(checkmarkImage);
  properties.appendChild(done);

  // Notes section
  const notes = document.createElement('div');
  notes.classList.add('notes');

  const noteBreak = document.createElement('hr');
  noteBreak.classList.add('note-break');
  notes.appendChild(noteBreak);

  const notesInput = document.createElement('input');
  notesInput.classList.add('note-input');
  if (todo.notes) {
    notesInput.value = todo.notes;
  }
  notesInput.placeholder = 'Add notes here...';
  notesInput.type = 'text';
  notes.appendChild(notesInput);

  properties.appendChild(notes);

  // Add everything
  sidebar.appendChild(properties);
  sidebarContainer.appendChild(sidebar);

  // click on name when opened
  name.focus();
  name.click();

  // add event listeners
  // clicking done div removes todo and closes sidebar
  done.addEventListener('click', () => {
    removeCard(todo, project, projectBoard);
    removeSidebar();
  });

  // close button closes sidebar
  close.addEventListener('click', () => {
    removeSidebar();
  });

  // change in any of the inputs saves to local storage and updates todo
  name.addEventListener('change', () => {
    todo.setTitle(name.value);
    // save to local storage
    addToStorage(projectBoard);
  });

  priority.addEventListener('change', () => {
    todo.setPriority(priority.value);
    // save to local storage
    addToStorage(projectBoard);
  });

  date.addEventListener('change', () => {
    todo.setDate(date.value);
    // save to local storage
    addToStorage(projectBoard);
  });

  notes.addEventListener('change', () => {
    todo.setNotes(notesInput.value);
    // save to local storage
    addToStorage(projectBoard);
  });
};
