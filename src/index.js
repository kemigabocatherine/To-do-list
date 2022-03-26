/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import todos from './modules/task.js';
import store from './modules/store.js';
import { clear, todoInput } from './modules/elements.js';
import completed from './modules/completed.js';

if (store('localStorage')) {
  todos.checkStorage();

  todos.showTodos();

  // Remove
  for (let i = 0; i < todos.todos.length; i += 1) {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons[i].addEventListener('click', () => {
      todos.delete(i);
    });
  }

  // Completed
  completed(todos);

  for (let i = 0; i < todos.todos.length; i += 1) {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes[i].addEventListener('change', (e) => {
      if (e.target.checked) {
        todos.complete(i, true);
      } else {
        todos.complete(i, false);
      }
      todos.save();
    });
  }

  for (let i = 0; i < todos.todos.length; i += 1) {
    const todoTexts = document.querySelectorAll('.todo-text');
    todoTexts[i].addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
    todoTexts[i].addEventListener('input', () => {
      todos.edit(i, todoTexts[i].innerHTML);
      todos.save();
    });
  }

  todoInput.addEventListener('keyup', (event) => {
    if (todoInput.value !== '') {
      if (event.keyCode === 13) {
        todos.add({
          description: todoInput.value,
          isComplete: false,
          index: todos.todos.length + 1,
        });
        todos.save();
        todoInput.value = '';
        window.location.reload();
      }
    }
  });

  // Remove completed to-dos
  clear.addEventListener('click', () => {
    todos.clearCompleted();
    todos.save();
    window.location.reload();
  });
}