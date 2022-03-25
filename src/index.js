/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const items = [
  {
    description: 'Clean the house',
    completed: 'check box',
    index: 1,
  },
  {
    description: 'Clean the house',
    completed: 'check box',
    index: 2,
  },
  {
    description: 'Study and do assignments',
    completed: 'check box',
    index: 3,
  },
];

const activityList = document.getElementById('tasklist');

items.forEach((item, index) => {
  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'list-group-item');

  listItem.innerHTML = `
    <div>
      <input class = "checkbox_class" type = "checkbox">
      <p class="task pl-3 pt-1">${items[index].description}</p>
    </div>
    <i class ="fa fa-trash justify-content-right"></i>
  `;

  activityList.appendChild(listItem);
});