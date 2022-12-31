export default class ProjectBoard {
  constructor() {
    this.projects = {};
  }

  getProjects() {
    return this.projects;
  }

  addProjectToBoard(project) {
    this.projects[project.id] = project;
  }

  removeProjectFromBoard(projectToRemove) {
    delete this.projects[projectToRemove].id;
  }
}
