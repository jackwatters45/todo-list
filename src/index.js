import "./styles/style.css";
import { toggleSidebar} from "./js/dom/sidebar";
// const { date } = require("date-fns/locale");
import Todo from "./js/classes/todo";
import Project from "./js/classes/project";
import ProjectBoard from "./js/classes/projectBoard";
import card from "./js/dom/add-card";
import {addForm} from "./js/dom/add-project";
import removeProject from "./js/dom/delete-project";

let addCard = document.querySelectorAll(".new");

addCard.forEach((button) => {
  button.addEventListener("click", () => {
    card();
  });
});

let addSection = document.querySelector(".add-project");
addSection.addEventListener("click", () => {
  addForm();
});

let deleteProject = document.querySelectorAll(".delete");
deleteProject.forEach((button) => {
  button.addEventListener("click", () => {
    removeProject();
  });
});

let clickArrow = document.querySelector(".close");
clickArrow.addEventListener("click", () => {
  toggleSidebar();
});

let testProjectBoard = () => {
  let projectBoard = new ProjectBoard();

  let project1 = new Project("Doing Next/Now");
  projectBoard.addProject(project1);

  let project2 = new Project("In Progress/Next");
  projectBoard.addProject(project2);

  console.log(projectBoard);
};

let testProject = () => {
  let project = new Project("Doing Next/Now");

  let todo1 = new Todo("ODP: Todo List");
  project.addTodo(todo1);

  let todo2 = new Todo("Site Change");
  project.addTodo(todo2);

  console.log(project);
  return todo1;
};

let testTodo = (todo) => {
  todo.completeTask();
  todo.setNotes("Here are some notes..");
  todo.setPriority("Urgent");
  console.log(todo);
};

// testProjectBoard();
// let todo = testProject();
// testTodo(todo);
