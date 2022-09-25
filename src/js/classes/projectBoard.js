export default class ProjectBoard {
    constructor() {
      this.projects = [];
    }
  
    // Getter
    getProjects() {
      return this.projects;
    }
  
    // Methods
    addProject(project) {
      this.projects.push(project);
    }
  
    removeProject(projectToRemove) {
      let index = this.projects.findIndex(
        (element) => element === projectToRemove
      );
      this.projects.splice(index, 1);
    }
  }