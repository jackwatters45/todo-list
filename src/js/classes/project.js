// an individual project object - contain sperate lists of todos
export default class Project {
  constructor(name) {
    this.name = name;
    // regex removes special chars and replaces space with a -
    this.id = name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
    this.todos = [];
  }

  // Getters
  getName() {
    return this.name;
  }

  getTodos() {
    return this.todos;
  }

  // Methods
  changeName(name) {
    this.name = name;
  }

  addTodo(newTodo) {
    this.todos.push(newTodo);
  }

  removeTodoFromProject(todoToRemove) {
    const index = this.todos.findIndex((element) => element === todoToRemove);
    this.todos.splice(index, 1);
  }
}
