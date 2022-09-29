import saveContent from './save-content';

export default function deleteProject(todo, project, projectBoard) {
  // Remove card from dom
  const card = document.querySelector(`#${todo.id}`);
  card.remove();
  // remove todo from projects object
  project.removeTodoFromProject(todo.id);
  // update local storage
  saveContent(projectBoard);
}
