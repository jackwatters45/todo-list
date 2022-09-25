export function openSidebar(card = undefined) {
  let sideBar = document.querySelector(".sidebar-positioning");
  sideBar.style.display = 'block';
}

export function closeSidebar() {
  let sideBar = document.querySelector(".sidebar-positioning");

  sideBar.style.display = "none";
}
// technically I would want to remove all elements

export function createSidebar() {
  
}