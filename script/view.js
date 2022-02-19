export class View {
  constructor() {
    this.todoInput = document.querySelector(".todo-input");
    this.addTodo = document.querySelector(".add-todo");
    this.todoList = document.querySelector(".todo-list");
    this.filterTodo = document.querySelector(".todo-filter");
    this.statusTodo = "";
  }

  bindTodo(todo) {
    this.addTodo.addEventListener("click", (event) => {
      event.preventDefault();
      const todoValue = this.todoInput.value;
      if (todoValue === "") {
        alert("Please Add Your Todo (:");
      } else {
        this.todoInput.value = "";
        todo(todoValue);
      }
    });
  }

  renderAllTodo(allTodo) {
    this.todoList.textContent = "";
    allTodo.forEach((render) => {
      const { id, todo, complete, edit } = render;
      const li = document.createElement("li");
      li.classList.add("todo-li");
      li.id = id;

      const textTodo = document.createElement("div");
      textTodo.classList.add("text-todo");
      textTodo.textContent = todo;

      const btnDelete = document.createElement("button");
      btnDelete.classList.add("btn-delete");
      btnDelete.innerHTML = `<img class="remove" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIieWTTQqDMBCFP6xb7yg9Qo/SHik3qUgXFlxWqGI3WYQ4Jc5I0NIHswnM+5lH4F9wAXpg9tP7NzVcQGIdFxIWFhcJzBk4D4Yb9vtfYzKpg2aDucWuJHDPLbAlwcJc9gQSTsAbfcEjUMZkUoIJeKi9Q+tFkgJg60Hc+SZg6UHc2S3BIQVUJ7J0oDJVAQPr/8DL76hwBp4ryDug1pL/Dj5MW2BhteGWuAAAAABJRU5ErkJggg=="/>`;
      // btnDelete.textContent = "Delete";

      const btnEdit = document.createElement("button");
      btnEdit.classList.add("btn-edit");
      btnEdit.innerHTML = `<img class="edited" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAd0lEQVRIie3P0QmAIBSF4Z/em6l2aIJokHxsBmerGRrBHuKCiBbktad74IAgfgfBcmcBDuAEPNBr4g4ISb1cdppLUSYNZIjO6S/2WlxAVxiZNXBpOuJyj77i0q0GfcOlY0t8Ndzwf3Ba408DKnhpQA3PDajilmwu1Ot0Hy1/FRoAAAAASUVORK5CYII="/>`;
      // btnEdit.textContent = "Edit";

      const btnComplete = document.createElement("button");
      btnComplete.classList.add("btn-complete");
      btnComplete.innerHTML = `<img class="done" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABBElEQVRIie3UMUoDQRQG4E8rUTAqRE9iIWij2IhYeQAP4BUEO7EJqJ122ukhbKwsRQRFEARBsQ4WmsQiWQizs5CNs2CRH6aZ9+Z9O7C7jPJPsoNj1KtElvCDDj6wWQUyiccekq0vjKeGjgKkg8vUyDJaAfKJhZTIFJ7lb7OdEoHTCHKRGllHO0DeMJcSqeFV/jYbZYbM4kD3uyjKeQQ5K4PM4LZ3sIm1SM9WBHnBdBnoOhjQxGpfvY73oKcd9AyUm8jT9mNXkfpJWQTmcV+ANSL7T7q/n6FSx11kaLhaWBkWKYMd/hUZBHvARCqoCPvGYkokS/iC7FeBZKlhD7sYqxIaJZdfhYF6R58+xmoAAAAASUVORK5CYII="/>`;

      // btnComplete.textContent = "Complete";
      this.todoList.append(li);
      li.append(textTodo, btnComplete, btnDelete, btnEdit);

      if (complete) {
        textTodo.classList.add("todo-done");
      }

      if (edit) {
        textTodo.contentEditable = "true";
      }
    });
  }

  bindDeleteTodo(deleteId) {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-delete")) {
        let id = parseInt(e.target.parentElement.id);
        deleteId(id);
      }
    });
  }

  bindCompleteTodo(completeId) {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-complete")) {
        let id = parseInt(e.target.parentElement.id);
        completeId(id);
      }
    });
  }

  bindEditTodo(editId) {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-edit")) {
        let parent = e.target.parentElement;
        let id = parseInt(parent.id);
        let todoText = parent.childNodes[0].textContent;
        editId(id, todoText);
        console.log(todoText);
      }
    });
  }

  bindFilterTodo(todoFilter) {
    this.filterTodo.addEventListener("click", (e) => {
      if (e.target.classList.contains("all-todo")) {
        this.statusTodo = "all";
        todoFilter(this.statusTodo);
        console.log(this.statusTodo);
      } else if (e.target.classList.contains("complete-todo")) {
        this.statusTodo = "complete";
        todoFilter(this.statusTodo);
        console.log(this.statusTodo);
      } else if (e.target.classList.contains("active-todo")) {
        this.statusTodo = "active";
        todoFilter(this.statusTodo);
        console.log(this.statusTodo);
      }
    });
  }
}
