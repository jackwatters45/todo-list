// an individual project object - contain sperate lists of todos
export default class Project {
  constructor(name) {
    this.name = name;
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
    // add something to change project of each object??
  }

  addTodo(newTodo) {
    this.todos.push(newTodo);
  }

  removeTodoFromProject(todoToRemove) {
    let index = this.todos.findIndex((element) => element === todoToRemove);
    this.todos.splice(index, 1);
  }
}
