export default class ProjectBoard {
  constructor() {
    this.projects = {};
  }

  getProjects() {
    return this.projects;
  }

  addProject(project) {
    this.projects[project.id] = project;
  }

  deleteProject(project) {
    delete this.projects[project.id];
  }

  getProject(projectId) {
    return this.projects[projectId];
  }
}
