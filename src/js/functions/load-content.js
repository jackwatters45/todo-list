// function that looks for that data in localStorage when your app is first loaded.

import Project from "../classes/project";
import Todo from "../classes/todo";
import { createTodo } from "./add-card";
import { addProject } from "./add-project";

// if data in local storage
export default function loadContent(projectBoard) {
  // get projects board object
  let storedProjectBoard = JSON.parse(window.localStorage.getItem("Project Board"));
  // get array with projects from stored projects board object
  let projects = storedProjectBoard.projects;
  // loop through all stored projects
  projects.forEach((projectData) => {
    // make into actual project object
    let project = new Project(projectData.name);
    // add project to project board
    projectBoard.addProjectToBoard(project);
    // build project card
    addProject(project, projectBoard)
    // get array with todos from stored project obj
    let todos = projectData.todos;
    // loop through the projects stored todos
    todos.forEach((todoData) => {
      // create new todo obj 
      let todo = new Todo(todoData.title);
      // TODO if properties exist in json, add them to the todo
      if(todoData.priority){
        todo.setPriority(todoData.priority)
      }
      if(todoData.date){
        todo.setDate(todoData.date)
      }
      if(todoData.notes){
        todo.setNotes(todoData.notes)
      }
      // add todo to project
      project.addTodo(todo)
      // build todo card
      createTodo(todo, project, projectBoard)
    });
  });
  console.log(projectBoard)

}

function meep() {
  let keys = Object.keys(localStorage),
    i = keys.length;

  let todos = [];
  let projects = [];

  while (i--) {
    let objType = keys[i].substring(0, 4);
    if (objType === "todo") {
      todos.push(JSON.parse(localStorage.getItem(keys[i])));
    } else {
      projects.push(JSON.parse(localStorage.getItem(keys[i])));
    }
  }

  console.log(todos);
  console.log(projects);

  for (let proj of projects) {
    proj;
  }
}
