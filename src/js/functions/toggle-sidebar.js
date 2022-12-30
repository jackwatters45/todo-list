import removeSidebar from './delete-sidebar';
import addSidebar from './add-sidebar';

export default (todo, project, projectBoard) => {
  const sidebar = document.querySelector('.sidebar');

  if (!sidebar) {
    addSidebar(todo, project, projectBoard);
    return;
  }
  removeSidebar();
  if (!(todo.id === sidebar.id)) addSidebar(todo, project, projectBoard);
};
