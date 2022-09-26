export default function deleteProject(todo, project) {
    // Remove card from dom
    let card = document.querySelector(`#${todo.id}`);
    card.remove();
    // remove todo from projects object
    project.removeTodoFromProject(todo.id)
  }
  