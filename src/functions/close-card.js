let closeArrow = document.querySelector("img.arrow")
let sideBar = document.querySelector(".sidebar-positioning")

closeArrow.addEventListener('click', () => {
    sideBar.style.display = 'none';
})

// technically I would want to remove all elements 