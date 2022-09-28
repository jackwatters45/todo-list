// an individual to do object
export default class Todo {
  constructor(
    title,
    priority = undefined,
    date = new Date().toLocaleDateString(),
    notes = undefined
  ) {
    this.title = title;
    // regex removes special chars and replaces space with a -
    this.id = title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-");
    this.priority = priority;
    this.date = date;
    this.notes = notes;
    this.isDone = false;
  }
  // getters
  getTitle() {
    return this.title;
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
  }

  setPriority(priority) {
    this.priority = priority;
  }

  setDate(date) {
    this.date = date;
  }

  setNotes(notes) {
    this.notes = notes;
  }

  completeTask() {
    this.isDone = true;
  }
}
