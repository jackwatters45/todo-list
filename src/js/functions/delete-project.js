export default function deleteProject(project, projectBoard) {
  // remove section from dom
  let section = document.querySelector(`#${project.id}`)
  section.remove()
  // remove project from projectBoard
  projectBoard.removeProjectFromBoard(project.id)
}
