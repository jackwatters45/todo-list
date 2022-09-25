// an individual to do object
export default class Todo {
    constructor(
      title,
      priority,
      date = new Date().toLocaleDateString(),
      notes = undefined
    ) {
      this.title = title;
      this.priority = priority;
      this.date = date;
      this.notes = notes;
      this.done = false;
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
      return this.done;
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
      this.done = true;
    }
  
    // methods
  }