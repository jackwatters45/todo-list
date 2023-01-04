import addToStorage from '../functions/saveLocalStorage';

export default (todo, projectBoard) => {
  const sidebar = document.querySelector('.sidebar-positioning');
  const card = document.querySelector(`#${todo.id}`);
  const form = document.querySelector(`#${todo.id}>form>input`);

  const close = document.querySelector('.close');
  const name = document.querySelector('.name');
  const project = document.querySelector('.project');
  const priority = document.querySelector('.priority');
  const date = document.querySelector('.date');
  const notes = document.querySelector('.note-input');
  const done = document.querySelector('.is-done>img');

  sidebar.classList.remove('hidden');
  sidebar.id = todo.id;

  name.value = todo.title;
  project.innerHTML = todo.project;
  priority.value = todo.priority || null;
  date.innerHTML = todo.date.toLocaleString();
  notes.value = todo.notes || null;

  name.focus();
  name.click();

  close.addEventListener('click', () => sidebar.classList.add('hidden'));

  done.addEventListener('click', () => {
    todo.toggleDone();
    card.remove();
    sidebar.classList.add('hidden');
    addToStorage(projectBoard);
  });

  name.addEventListener('input', () => {
    todo.setTitle(name.value);
    form.value = name.value;
    addToStorage(projectBoard);
  });

  priority.addEventListener('input', () => {
    todo.setPriority(priority.value);
    addToStorage(projectBoard);
  });

  notes.addEventListener('input', () => {
    todo.setNotes(notes.value);
    addToStorage(projectBoard);
  });

  name.addEventListener('change', () => name.blur());
  priority.addEventListener('change', () => priority.blur());
  date.addEventListener('change', () => date.blur());
  notes.addEventListener('change', () => notes.blur());
};
