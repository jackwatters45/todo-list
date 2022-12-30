import saveContent from './save-content';

export default (project, projectBoard) => {
  // remove section from dom
  const section = document.querySelector(`#${project.id}`);
  section.remove();
  // remove project from projectBoard
  projectBoard.removeProjectFromBoard(project.id);
  // update local storage
  saveContent(projectBoard);
};
