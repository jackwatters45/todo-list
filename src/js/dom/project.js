import trash from "../../assets/img/trash.svg";
import plus from "../../assets/img/plus.svg";

export default function card() {
  let sections = document.querySelector(".sections");

  let section = document.createElement("div");
  section.classList.add("section");

  let header = document.createElement("div");
  header.classList.add("header");

  let headerTitle = document.createElement("div");
  headerTitle.classList.add("header-title");
  headerTitle.innerHTML = "Doing Next/Now"; // need to figure out how to make dynamically
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

  sections.appendChild(section);
}

// <div class="section">
/* <div class="header">
<div class="header-title">Doing Next/Now</div>
<div class="delete">
    <img src="../assets/img/trash.svg" alt="Delete Button">
</div>
</div>
<div class="cards">

</div>
<div class="new">
<img class="plus" src="../assets/img/plus.svg" alt="Plus Icon">
New
</div>
</div> */
