const completed = (todos) => {
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
};

export default completed;