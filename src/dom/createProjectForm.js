export default () => {
  const addProjectBtn = document.querySelector('.add-project-button');
  const addProjectForm = document.querySelector('.add-project');
  const projectNameInput = document.querySelector('.project-input');

  addProjectBtn.classList.add('hidden');
  addProjectForm.classList.remove('hidden');
  projectNameInput.focus();
  projectNameInput.select();
};
