export default function deleteSidebar() {
  let sidebarContainer = document.querySelector(".sidebar-positioning");
  sidebarContainer.classList.add("hidden");
  sidebarContainer.innerHTML = "";
}
