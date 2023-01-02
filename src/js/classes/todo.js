// an individual todo object
export default class Todo {
  // uses default values to more easily load local content
  constructor(
    title,
    project,
    priority = undefined,
    date = new Date(),
    notes = undefined,
  ) {
    this.title = title;
    this.project = project;
    // removes special chars and replaces space with a -
    this.id = title.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
    this.priority = priority;
    this.date = date;
    this.notes = notes;
    this.isDone = false;
  }

  // getters
  getTitle() {
    return this.title;
  }

  getProject() {
    return this.project;
  }

  getPriority() {
    return this.priority;
  }

  getDate() {
    return this.date;
  }

  getNotes() {
    return this.notes;
  }

  getDone() {
    return this.isDone;
  }

  // Setters
  setTitle(title) {
    this.title = title;
    this.id = title.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
  }

  setProject(project) {
    this.project = project;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  setNotes(notes) {
    this.notes = notes;
  }

  toggleDone() {
    this.isDone = !this.isDone;
  }
}
