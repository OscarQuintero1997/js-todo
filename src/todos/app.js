import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases/';

const elementIDs = {
    TodoList: '.todo-list',
}

/**
 * @param {String} elementId
 */
export const App = (elementId) => {
  const element = document.querySelector(elementId);


  const displayTodos = ()=> {
      const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
      renderTodos(elementIDs.TodoList, todos);
    } 


  if (!element) {
    console.error(`No se encontró el elemento con selector ${elementId}`);
    return;
  }

  const app = document.createElement('div');
  app.innerHTML = html;
  element.append(app);
  displayTodos();
};

