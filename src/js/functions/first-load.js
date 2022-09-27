import { addForm } from "./add-project";
import loadContent from "./load-content";

export default function firstLoad(projectBoard) {
  // load content
  loadContent();

  // add listener for add project button
  let addSection = document.querySelector(".add-project-button");
  addSection.addEventListener("click", () => {
    addForm(projectBoard);
  });
}
