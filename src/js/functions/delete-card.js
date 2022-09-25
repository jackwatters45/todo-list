export default function deleteProject(todo, project) {
    // Remove card from dom
    let card = document.querySelector(`#${todo.title}`);
    card.remove();
    // remove todo from projects object
    project.removeTodoFromProject(todo.title)
  }
  