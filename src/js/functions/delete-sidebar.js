export default function deleteSidebar() {
  // hides sidebar and removes all inner html aka child elements
  let sidebarContainer = document.querySelector(".sidebar-positioning");
  sidebarContainer.classList.add("hidden");
  sidebarContainer.innerHTML = "";
}
