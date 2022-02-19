export class Model {
  constructor() {
    this.todoDataBase = [];
    this.id = 0;
  }

  addTodo(todoText) {
    this.todo = {
      id: this.id++,
      complete: false,
      edit: false,
      todo: todoText,
    };
    this.todoDataBase.push(this.todo);
    this._renderTodo(this.todoDataBase);
  }

  deleteTodo(id) {
    this.todoDataBase = this.todoDataBase.filter((todo) => {
      return todo.id !== id;
    });
    this._renderTodo(this.todoDataBase);
  }

  completeTodo(id) {
    this.todoDataBase.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
    this._renderTodo(this.todoDataBase);
  }

  editTodo(todoId, todoText) {
    this.todoDataBase.forEach((todo) => {
      if (todo.id === todoId) {
        todo.edit = !todo.edit;
        todo.todo = todoText;
      }
    });
    this._renderTodo(this.todoDataBase);
  }

  todoFilter(statusTodo) {
    if (statusTodo === "all") {
      this._renderTodo(this.todoDataBase);
    } else if (statusTodo === "complete") {
      let filterDataBase = this.todoDataBase.filter((todo) => {
        return todo.complete !== false;
      });
      this._renderTodo(filterDataBase);
    } else if (statusTodo === "active") {
      let filterDataBase = this.todoDataBase.filter((todo) => {
        return todo.complete !== true;
      });
      this._renderTodo(filterDataBase);
    }
  }

  renderPage(renderTodo) {
    this._renderTodo = renderTodo;
  }
}
