// function that looks for that data in localStorage when your app is first loaded.

import Project from '../classes/project';
import Todo from '../classes/todo';
import { createTodo } from './add-card';
import { addProject } from './add-project';

// if data in local storage
export default function loadContent(projectBoard) {
  // get projects board object
  const storedProjectBoard = JSON.parse(window.localStorage.getItem('Project Board'));
  // get array with projects from stored projects board object
  const { projects } = storedProjectBoard;
  // loop through all stored projects
  projects.forEach((projectData) => {
    // make into actual project object
    const project = new Project(projectData.name);
    // add project to project board
    projectBoard.addProjectToBoard(project);
    // build project card
    addProject(project, projectBoard);
    // get array with todos from stored project obj
    const { todos } = projectData;
    // loop through the projects stored todos
    todos.forEach((todoData) => {
      // create new todo obj
      const todo = new Todo(todoData.title);
      // TODO if properties exist in json, add them to the todo
      if (todoData.priority) {
        todo.setPriority(todoData.priority);
      }
      if (todoData.date) {
        todo.setDate(todoData.date);
      }
      if (todoData.notes) {
        todo.setNotes(todoData.notes);
      }
      // add todo to project
      project.addTodo(todo);
      // build todo card
      createTodo(todo, project, projectBoard);
    });
  });
}
