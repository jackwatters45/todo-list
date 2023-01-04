import moveCard from '../dom/cardDrop';

export default (e, project, projectBoard) => {
  const projectSection = document.querySelector(`.section#${project.id}`);
  const { srcProjectId, todoId } = JSON.parse(
    e.dataTransfer.getData('text/plain'),
  );
  moveCard(projectSection, todoId);
  const srcProject = projectBoard.getProject(srcProjectId);
  const draggedTodo = srcProject.getTodo(todoId);
  draggedTodo.setProject(project.id);
  project.addTodo(draggedTodo);
  srcProject.deleteTodo(draggedTodo);
};
