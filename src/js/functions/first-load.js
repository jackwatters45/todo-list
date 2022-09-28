import { addForm } from "./add-project";
import loadContent from "./load-content";

export default function firstLoad(projectBoard) {
  // if there is anything in the local storare
  if(!(localStorage.getItem('Project Board') === undefined)){
  // load content
  loadContent(projectBoard);
}

  // add listener for add project button
  let addSection = document.querySelector(".add-project-button");
  addSection.addEventListener("click", () => {
    addForm(projectBoard);
  });
}