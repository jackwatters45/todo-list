export default class ProjectBoard {
  constructor() {
    this.projects = [];
  }

  // Getter
  getProjects() {
    return this.projects;
  }

  // Methods
  addProjectToBoard(project) {
    this.projects.push(project);
  }

  removeProjectFromBoard(projectToRemove) {
    const index = this.projects.findIndex(
      (element) => element === projectToRemove,
    );
    this.projects.splice(index, 1);
  }
}
