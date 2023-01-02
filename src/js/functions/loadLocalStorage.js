import Project from '../classes/project';
import Todo from '../classes/todo';
import createTodo from '../../dom/createTodoForm';
import addProject from '../../dom/createProject';

export default (projectBoard) => {
  const { projects } = JSON.parse(window.localStorage.getItem('Project'));
  Object.keys(projects).forEach((projectId) => {
    const projectJSON = projects[projectId];
    const project = new Project(projectJSON.name);
    projectBoard.addProjectToBoard(project);
    addProject(project, projectBoard); // TODO rename

    const { todos } = projectJSON; // get array with todos from stored project obj
    Object.keys(todos).forEach((todoId) => {
      const todoJSON = todos[todoId];
      const todo = new Todo(
        todoJSON.title,
        todoJSON.priority,
        todoJSON.date,
        todoJSON.notes,
      );
      // if (todoData.priority) todo.setPriority(todoData.priority);
      // if (todoData.date) todo.setDate(todoData.date);
      // if (todoData.notes) todo.setNotes(todoData.notes);
      project.addTodo(todo);
      createTodo(todo, project, projectBoard); // TODO rename
    });
  });
};
