import trash from "../../assets/img/trash.svg";
import plus from "../../assets/img/plus.svg";
import deleteProject from "./delete-project";
import newCard from "./add-card";
import submit from "../../assets/img/submit.svg";
import Project from "../classes/project";

export function addForm(projectBoard) {
  let sections = document.querySelector(".sections");

  // Create actual project column
  let section = document.createElement("div");
  section.classList.add("add-project");

  // add form html
  let header = document.createElement("form");
  header.classList.add("project-form");
  header.id = "project-form";

  let headerTitle = document.createElement("div");
  headerTitle.classList.add("header-input");

  let input = document.createElement("input");
  input.placeholder = "Name your project...";
  input.type = "text";
  input.required = true;
  input.classList.add("input");
  headerTitle.appendChild(input);
  header.appendChild(headerTitle);

  let submitElement = document.createElement("input");
  submitElement.classList.add("submit");
  submitElement.classList.add("hidden");
  submitElement.type = "image";
  submitElement.style.width = "16px";
  submitElement.src = submit;
  submitElement.name = "project-name";
  submitElement.alt = "Submit Button";

  // add elements
  header.appendChild(submitElement);
  section.appendChild(header);
  sections.appendChild(section);

  input.focus();
  input.select();

  header.addEventListener("submit", () => {
    // get form input
    let projectName =
      document.forms["project-form"].querySelector(".input").value;
    // create new project object
    let project = new Project(projectName);
    // add project to project board
    projectBoard.addProjectToBoard(project);
    // create new project column (dom)
    addProject(project, projectBoard);
    // remove form
    section.remove();
  });
}

export function addProject(project, projectBoard) {
  let sections = document.querySelector(".sections");

  let section = document.createElement("div");
  section.classList.add("section");
  section.id = project.id;

  let header = document.createElement("div");
  header.classList.add("header");

  let headerTitle = document.createElement("div");
  headerTitle.classList.add("header-title");
  headerTitle.innerHTML = project.name;

  header.appendChild(headerTitle);

  let deleteElement = document.createElement("div");
  deleteElement.classList.add("delete");

  let trashIcon = document.createElement("img");
  trashIcon.src = trash;
  trashIcon.alt = "Delete Button";
  trashIcon.classList.add("hidden");
  deleteElement.appendChild(trashIcon);

  header.appendChild(deleteElement);
  section.appendChild(header);

  let cards = document.createElement("div");
  cards.classList.add("cards");
  section.appendChild(cards);

  let newElement = document.createElement("div");
  newElement.classList.add("new");

  let plusIcon = document.createElement("img");
  plusIcon.classList.add("plus");
  plusIcon.src = plus;
  plusIcon.alt = "Plus Button";
  newElement.appendChild(plusIcon);
  newElement.innerHTML += "New";

  section.appendChild(newElement);
  sections.appendChild(section);

  // let trashh = document.querySelector()
  section.addEventListener("mouseenter", () => {
    trashIcon.classList.remove("hidden");
  });
  section.addEventListener("mouseleave", () => {
    trashIcon.classList.add("hidden");
  });

  deleteElement.addEventListener("click", () => {
    deleteProject(project, projectBoard);
  });

  newElement.addEventListener("click", () => {
    newCard(project, projectBoard);
  });
}
