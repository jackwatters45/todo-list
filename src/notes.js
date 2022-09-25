// let addCard = document.querySelectorAll(".new");

// addCard.forEach((button) => {
//   button.addEventListener("click", () => {
//     card();
//   });
// });

let deleteProject = document.querySelectorAll(".delete");
deleteProject.forEach((button) => {
  button.addEventListener("click", () => {
    removeProject();
  });
});