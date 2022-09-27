import { addForm } from "./add-project";

export default function firstLoad(projectBoard) {
  let addSection = document.querySelector(".add-project-button");
  addSection.addEventListener("click", () => {
    addForm(projectBoard);
  });
}
