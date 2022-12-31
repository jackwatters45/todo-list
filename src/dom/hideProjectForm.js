export default () => {
  const addProjectBtn = document.querySelector('.add-project-button');
  const addProjectForm = document.querySelector('.add-project');

  addProjectForm.firstElementChild.reset();
  addProjectForm.classList.add('hidden');
  addProjectBtn.classList.remove('hidden');
};
