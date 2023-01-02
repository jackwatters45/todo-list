import addSidebar from './addSidebar';

export default (todo) => {
  const sidebar = document.querySelector('.sidebar-positioning');

  return todo.id === sidebar.id
    ? sidebar.classList.toggle('hidden')
    : addSidebar(todo);
};
