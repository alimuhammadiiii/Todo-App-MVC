export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindTodo(this.addTodoModel);
    this.model.renderPage(this.addAllTodoView);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindCompleteTodo(this.handleCompleteTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindFilterTodo(this.handleFilterTodo);
  }

  addTodoModel = (todoText) => {
    this.model.addTodo(todoText);
  };

  addAllTodoView = (allTodo) => {
    this.view.renderAllTodo(allTodo);
  };

  handleDeleteTodo = (id) => {
    this.model.deleteTodo(id);
  };

  handleCompleteTodo = (id) => {
    this.model.completeTodo(id);
  };
  handleEditTodo = (todoId, todoText) => {
    this.model.editTodo(todoId, todoText);
  };

  handleFilterTodo = (statusTodo) => {
    this.model.todoFilter(statusTodo);
  };
}
