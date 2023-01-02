import frankHeadImg from "../img/frank.png";

export default function nav() {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  const home = document.createElement("a");
  home.classList.add("title");
  home.innerHTML = "Paddy's Pub";
  nav.appendChild(home);

  const frankHead = document.createElement("img");
  frankHead.classList.add("frank-head");
  frankHead.src = frankHeadImg;
  frankHead.alt = "Restaurant Logo";

  nav.appendChild(frankHead);

  const navItems = document.createElement("div");
  navItems.classList.add("nav-items");
  navItems.appendChild(document.createElement("div"));

  const menuButton = document.createElement("a");
  menuButton.href = "#";
  menuButton.innerHTML = "Menu";
  menuButton.classList.add('menuButton')
  navItems.appendChild(menuButton);

  const aboutButton = document.createElement("a");
  aboutButton.href = "#";
  aboutButton.innerHTML = "About";
  aboutButton.classList.add('aboutButton')
  navItems.appendChild(aboutButton);

  nav.appendChild(navItems);

  const content = document.querySelector("#content");
  content.appendChild(nav)
}