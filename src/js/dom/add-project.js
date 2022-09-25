import trash from "../../assets/img/trash.svg";
import plus from "../../assets/img/plus.svg";
import deleteProject from "./delete-project";
import newCard from "./add-card"
import submit from "../../assets/img/submit.svg"
import Project from "../classes/project";

export function addForm() {
  let sections = document.querySelector(".sections");

  // Create actual project column
  let section = document.createElement("div");
  section.classList.add("add-project");

  // add form html
  let header = document.createElement("form");
  header.classList.add("project-form");
  header.id = 'project-form'

  let headerTitle = document.createElement("div");
  headerTitle.classList.add("header-input");

  let input = document.createElement('input')
  input.placeholder = 'New Project';
  input.type = 'text';
  input.required = true;
  input.classList.add('input')
  headerTitle.appendChild(input)
  header.appendChild(headerTitle);

  let submitElement = document.createElement("input");
  submitElement.classList.add("submit");
  submitElement.type = 'image'
  submitElement.style.width = '16px'
  submitElement.src = submit;
  submitElement.name = "project-name"
  submitElement.alt = "Submit Button";

  // add elements
  header.appendChild(submitElement);
  section.appendChild(header);
  sections.appendChild(section);

  header.addEventListener('submit', () => {
    // get form input
    let projectName = document.forms["project-form"].querySelector(".input").value
    // create new project object
    let project = new Project(projectName);
    // create new project column (dom)
    addProject(project, section)
  })
}

export function addProject(project, form) {
  // remove form
  form.remove()

  let sections = document.querySelector(".sections");

  let section = document.createElement("div");
  section.classList.add("section");

  let header = document.createElement("div");
  header.classList.add("header");

  let headerTitle = document.createElement("div");
  headerTitle.classList.add("header-title");
  headerTitle.innerHTML = project.name

  header.appendChild(headerTitle);

  let deleteElement = document.createElement("div");
  deleteElement.classList.add("delete");

  let trashIcon = document.createElement("img");
  trashIcon.src = trash;
  trashIcon.alt = "Delete Button";
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

  deleteElement.addEventListener("click", () => {
    deleteProject();
  });

  newElement.addEventListener('click', () => {
    newCard(section);
    // newCard(project);
  })

  sections.appendChild(section);
}

