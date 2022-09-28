import removeSidebar from "./delete-sidebar";
import addSidebar from "./add-sidebar";

export default function toggleSidebar(todo, project, projectBoard) {
  let sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    removeSidebar();
    if (!(todo.id === sidebar.id)) {
      addSidebar(todo, project, projectBoard);
    }
  } else {
    addSidebar(todo, project, projectBoard);
  }
}
