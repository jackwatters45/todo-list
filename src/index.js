import "./styles/style.css";
import ProjectBoard from "./js/classes/projectBoard";
import { addForm } from "./js/dom/add-project";

let projectBoard = new ProjectBoard();

let addSection = document.querySelector(".add-project");
addSection.addEventListener("click", () => {
  addForm(projectBoard);
});
