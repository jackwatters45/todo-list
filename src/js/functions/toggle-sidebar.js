import removeSidebar from "./delete-sidebar";
import addSidebar from "./add-sidebar";

export default function toggleSidebar(todo, project, projectBoard) {
  let sidebar = document.querySelector(".sidebar");
  // if there is currently sidebar content
  if (sidebar) {
    // removes old sidebar
    removeSidebar();
    // if todo clicked is not whats already loaded
    if (!(todo.id === sidebar.id)) {
      // create new sidebar
      addSidebar(todo, project, projectBoard);
    }
  } 
  // if currently no sidebar content just adds sidebar content for clicked todo
  else {
    addSidebar(todo, project, projectBoard);
  }
}
