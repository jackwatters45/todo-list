import arrowIcon from "../../assets/img/arrow.svg";
import _priorityIcon from "../../assets/img/priority.svg";
import _dateIcon from "../../assets/img/calendar.svg";
import _doneIcon from "../../assets/img/check.svg";
import _emptyCheckbox from "../../assets/img/checkbox.svg";
import removeCard from "./delete-card";

export function toggleSidebar() {
  let sidebarContainer = document.querySelector(".sidebar-positioning");
  sidebarContainer.classList.toggle("hidden");

  if (sidebarContainer.classList.contains("hidden")) {
    sidebarContainer.innerHTML = "";
  }
}

export function createSidebarForm(todo, project) {
  let sidebarContainer = document.querySelector(".sidebar-positioning");

  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  let close = document.createElement("div");
  close.classList.add("close");

  let arrow = document.createElement("img");
  arrow.classList.add("arrow");
  arrow.src = arrowIcon;
  arrow.alt = "Close Button";
  close.appendChild(arrow);
  sidebar.appendChild(close);

  let properties = document.createElement("form");
  properties.classList.add("properties");
  properties.id = "edit-todo";

  // name of todo
  let name = document.createElement("input");
  name.classList.add("name");
  name.value = todo.title;
  name.required = true;
  name.type = "text";
  properties.appendChild(name);

  // Priority label
  let priorityProperty = document.createElement("label");
  priorityProperty.classList.add("priority");

  let priorityIcon = document.createElement("img");
  priorityIcon.src = _priorityIcon;
  priorityIcon.alt = "Priority Icon";
  priorityProperty.appendChild(priorityIcon);
  priorityProperty.innerHTML += "Priority";
  properties.appendChild(priorityProperty);

  // Priority value
  let priority = document.createElement("input");
  priority.classList.add("priority");
  if (todo.priority) {
    priority.value = todo.priority;
  }
  priority.placeholder = "Empty";
  priority.type = "text";
  properties.appendChild(priority);

  // Date label
  let dateProperty = document.createElement("label");
  dateProperty.classList.add("date");

  let dateIcon = document.createElement("img");
  dateIcon.src = _dateIcon;
  dateIcon.alt = "Date Icon";
  dateProperty.appendChild(dateIcon);
  dateProperty.innerHTML += "Date";
  properties.appendChild(dateProperty);

  // Date value
  let date = document.createElement("input");
  date.classList.add("date");
  if (todo.date) {
    date.value = todo.date;
  }
  date.placeholder = "Empty";
  date.type = "text";
  properties.appendChild(date);

  sidebar.appendChild(properties);
  sidebarContainer.appendChild(sidebar);
  toggleSidebar();

  // Done label
  let doneProperty = document.createElement("label");
  doneProperty.classList.add("is-done");

  let doneIcon = document.createElement("img");
  doneIcon.src = _doneIcon;
  doneIcon.alt = "Checkmark Icon";
  doneProperty.appendChild(doneIcon);
  doneProperty.innerHTML += "Done?";
  properties.appendChild(doneProperty);

  // Done value
  let done = document.createElement("div");
  done.classList.add("is-done");

  let checkmarkImage = document.createElement("img");
  checkmarkImage.src = _emptyCheckbox;
  checkmarkImage.alt = "Empty Checkmark";
  done.appendChild(checkmarkImage);
  properties.appendChild(done);

  // Notes section
  let notes = document.createElement("div");
  notes.classList.add("notes");

  let noteBreak = document.createElement("hr");
  noteBreak.classList.add("note-break");
  notes.appendChild(noteBreak);

  let notesInput = document.createElement("input");
  notesInput.classList.add("note-input");
  if (todo.notes) {
    notesInput.value = todo.notes;
  }
  notesInput.placeholder = "Add notes here...";
  notesInput.type = "text";
  notes.appendChild(notesInput);

  properties.appendChild(notes);

  // Add everything
  sidebar.appendChild(properties);
  sidebarContainer.appendChild(sidebar);

  name.focus();
  name.click();

  // add event listeners
  done.addEventListener("click", () => {
    removeCard(todo, project);
    toggleSidebar();
  });

  close.addEventListener("click", () => {
    toggleSidebar();
  });

  priority.addEventListener('change', () => {
    todo.setPriority(priority.value);
  })

  date.addEventListener('change', () => {
    todo.setDate(date.value);
  })

  notes.addEventListener('change', () => {
    todo.setNotes(notesInput.value);
  })
}
