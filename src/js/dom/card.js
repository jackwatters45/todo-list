import todo from "../classes/todo";
import checkbox from "../../assets/img/checkbox.svg";

export default function card() {
  // something to determine chere add card
  let cards = document.querySelector(".cards");

  let card = document.createElement("div");
  card.classList.add("card");

  let title = document.createElement("div");
  title.classList.add('title');
  // how to get title??
  title.innerHTML = todo.prototype.getTitle();
  card.appendChild(title)

  let isDone = document.createElement("div");
  isDone.classList.add("done");

  let image = document.createElement("img");
  image.src = checkbox;
  image.alt = "Check Box";
  isDone.appendChild(image)

  isDone.innerHTML += 'Done'
  card.appendChild(isDone)


  cards.appendChild(card);
}
