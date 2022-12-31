export default () => {
  const sections = document.querySelector('.sections');

  // Create actual project column
  const section = document.createElement('div');
  section.classList.add('add-project');

  // add form html
  const header = document.createElement('form');
  header.classList.add('project-form');
  header.id = 'project-form';

  const headerTitle = document.createElement('div');
  headerTitle.classList.add('header-input');

  const input = document.createElement('input');
  input.placeholder = 'Name your project...';
  input.required = true;
  input.classList.add('project-input');
  headerTitle.appendChild(input);
  header.appendChild(headerTitle);

  section.appendChild(header);
  sections.appendChild(section);

  // cursor clicks on the text
  return header;
};
