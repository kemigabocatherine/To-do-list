import { todoList } from './elements.js';

const newTodos = [];
class Todos {
  constructor() {
    this.todos = [];
  }

  save = () => {
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
    for (let i = 0; i < this.todos.length; i += 1) {
      window.localStorage.setItem(i.toString(), JSON.stringify(this.todos[i]));
    }
  }

  add = (todo) => {
    this.todos.push(todo);
  }

  delete = (index) => {
    this.todos.splice(index, 1);
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].index = i + 1;
    }
    this.save();
    window.location.reload();
  }

  complete = (index, completed) => {
    this.todos[index].isComplete = completed;
  }

  edit = (index, description) => {
    this.todos[index].description = description;
  }

  clearCompleted = () => {
    this.todos = this.todos.filter((todo) => todo.isComplete === false);
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].index = i + 1;
    }
  }

  checkStorage = () => {
    if (window.localStorage.getItem('todos') !== null) {
      const array = JSON.parse(window.localStorage.getItem('todos'));
      for (let i = 0; i < array.length; i += 1) {
        newTodos[i] = JSON.parse(window.localStorage.getItem(i.toString()));
      }
      this.todos = newTodos;
    }
  }

  showTodos = () => {
    for (let i = 0; i < this.todos.length; i += 1) {
      const content = document.createElement('li');
      content.setAttribute('class', 'todo');
      content.innerHTML = `
        <div class="todo-left pl-3 pt-3">
          <input type="checkbox" class="checkbox" ${this.todos[i].isComplete ? 'checked' : ''}>
          <label class="todo-text" contenteditable="true" ${this.todos[i].isComplete ? 'style="text-decoration: line-through;"' : ''}>${this.todos[i].description}</label>
        </div>
        <p class="remove-button pr-3"><span class="iconify delete" data-icon="fa-solid:trash-alt"></span></p>
      `;
      todoList.appendChild(content);
    }
  }
}

const todos = new Todos();

export default todos;