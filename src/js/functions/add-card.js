import checkbox from "../../assets/img/checkbox.svg";
import toggleSidebar from "./toggle-sidebar";
import removeCard from "./delete-card";
import Todo from "../classes/todo";
import submit from "../../assets/img/submit.svg";
import addToStorage from "../functions/save-content"

export default function createCardForm(project, projectBoard) {
  let cards = document.querySelector(`#${project.id}>.cards`);

  // create card
  let card = document.createElement("div");
  card.classList.add("card");

  // add form html
  let titleForm = document.createElement("form");
  titleForm.classList.add("title");
  titleForm.id = "todo-form";

  // todo title form
  let title = document.createElement("input");
  title.placeholder = "Type a name...";
  title.type = "text";
  title.required = true;
  title.classList.add("input");
  titleForm.appendChild(title);

  // potentially remove this and just change the event listener to a change rather than submit
  let submitElement = document.createElement("input");
  submitElement.classList.add("submit-card");
  submitElement.type = "image";
  submitElement.style.width = "16px";
  submitElement.src = submit;
  submitElement.name = "project-name";
  submitElement.alt = "Submit Button";
  titleForm.appendChild(submitElement);

  card.appendChild(titleForm);

  // done checkbox + text
  let isDone = document.createElement("div");
  isDone.classList.add("done");

  let image = document.createElement("img");
  image.src = checkbox;
  image.alt = "Check Box";
  isDone.appendChild(image);

  isDone.innerHTML += "Done";
  card.appendChild(isDone);

  cards.appendChild(card);

  title.focus();
  title.select();

  titleForm.addEventListener("submit", (e) => {
    // get form input
    let todoName = document.forms["todo-form"].querySelector(".input").value;
    // create new todo object
    let todo = new Todo(todoName);
    // add todo to project
    project.addTodo(todo);
    // save to local storage
    addToStorage(projectBoard)
    console.log(projectBoard)
    // create new project column (dom)
    createTodo(todo, project, projectBoard);
    // remove form
    card.remove();
  });
}

export function createTodo(todo, project, projectBoard) {
  // use project id to find proper column
  let cards = document.querySelector(`#${project.id}>.cards`);

  let card = document.createElement("div");
  card.classList.add("card");
  // card id = todo objects id
  card.id = todo.id;

  // adds title text
  let title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = todo.title;
  card.appendChild(title);

  // is done element remains
  let isDone = document.createElement("div");
  isDone.classList.add("done");

  let image = document.createElement("img");
  image.src = checkbox;
  image.alt = "Check Box";
  isDone.appendChild(image);

  isDone.innerHTML += "Done";
  card.appendChild(isDone);

  cards.appendChild(card);

  // clicking on card opens it up or closes it depending on if the sidebar is opened
  card.addEventListener("click", () => {
    toggleSidebar(todo, project, projectBoard);
  });

  // clicking the isdone div remove todo 
  isDone.addEventListener("click", () => {
    removeCard(todo, project, projectBoard);
  });
}
