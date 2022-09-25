import todo from "../classes/todo";
import checkbox from "../../assets/img/checkbox.svg";
import { toggleSidebar } from "./sidebar";
import removeCard from "./delete-card";
import Todo from "../classes/todo";
import submit from "../../assets/img/submit.svg";

export default function createCardForm(project, projectBoard) {
  let cards = document.querySelector(`#${project.name}>.cards`);

  // create card
  let card = document.createElement("div");
  card.classList.add("card");

  // add form html
  let titleForm = document.createElement("form");
  titleForm.classList.add("title");
  titleForm.id = "todo-form";

  let title = document.createElement("input");
  title.placeholder = "Type a name...";
  title.type = "text";
  title.required = true;
  title.classList.add("input");
  titleForm.appendChild(title);

  let submitElement = document.createElement("input");
  submitElement.classList.add("submit-card");
  submitElement.type = "image";
  submitElement.style.width = "16px";
  submitElement.src = submit;
  submitElement.name = "project-name";
  submitElement.alt = "Submit Button";
  titleForm.appendChild(submitElement);

  card.appendChild(titleForm);

  let isDone = document.createElement("div");
  isDone.classList.add("done");

  let image = document.createElement("img");
  image.src = checkbox;
  image.alt = "Check Box";
  isDone.appendChild(image);

  isDone.innerHTML += "Done";
  card.appendChild(isDone);

  cards.appendChild(card);

  titleForm.addEventListener("submit", () => {
    // get form input
    let todoName = document.forms["todo-form"].querySelector(".input").value;
    // create new todo object
    let todo = new Todo(todoName);
    // add todo to project
    project.addTodo(todo);
    // create new project column (dom)
    createTodo(todo, project, projectBoard);
    // remove form
    card.remove();
  });
}

export function createTodo(todo, project) {
  let cards = document.querySelector(`#${project.name}>.cards`);

  let card = document.createElement("div");
  card.classList.add("card");
  card.id = todo.title;

  let title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = todo.title;
  card.appendChild(title);

  let isDone = document.createElement("div");
  isDone.classList.add("done");

  let image = document.createElement("img");
  image.src = checkbox;
  image.alt = "Check Box";
  isDone.appendChild(image);

  isDone.innerHTML += "Done";
  card.appendChild(isDone);

  cards.appendChild(card);

  isDone.addEventListener("click", () => {
    removeCard(todo, project);
    toggleSidebar();
  });

  card.addEventListener("click", () => {
    toggleSidebar();
  });

  let clickArrow = document.querySelector(".close");
  clickArrow.addEventListener("click", () => {
    toggleSidebar();
  });
}
