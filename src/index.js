import "./styles/style.css";
import { openSidebar, closeSidebar } from "./js/dom/sidebar";
// const { date } = require("date-fns/locale");
import Todo from "./js/classes/todo";
import Project from "./js/classes/project";
import ProjectBoard from "./js/classes/projectBoard";
import card from "./js/dom/card";
import project from "./js/dom/project";
import removeProject from "./js/dom/delete-project";
import removeCard from "./js/dom/delete-card.js";

let addCard = document.querySelectorAll(".new");

addCard.forEach((button) => {
  button.addEventListener("click", () => {
    card();
  });
});

let addSection = document.querySelector(".add-project");
addSection.addEventListener("click", () => {
  project();
});

let deleteProject = document.querySelectorAll(".delete");
deleteProject.forEach((button) => {
  button.addEventListener("click", () => {
    removeProject();
  });
});

let deleteCard = document.querySelectorAll(".done");
deleteCard.forEach((button) => {
  button.addEventListener("click", () => {
    removeCard();
  });
});

let clickCard = document.querySelectorAll(".card");
clickCard.forEach((button) => {
  button.addEventListener("click", () => {
    openSidebar();
  });
});

let clickArrow = document.querySelector(".arrow");
clickArrow.addEventListener("click", () => {
  closeSidebar();
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

testProjectBoard();
let todo = testProject();
testTodo(todo);
