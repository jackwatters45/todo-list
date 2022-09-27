import removeSidebar from "./delete-sidebar";
import addSidebar from "./add-sidebar";

export default function toggleSidebar(todo, project) {
  let sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    removeSidebar();
    if (!(todo.id === sidebar.id)) {
      addSidebar(todo, project);
    }
  } else {
    addSidebar(todo, project);
  }
}
