import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos, renderPending } from './use-cases/';

const elementIDs = {
  clearCompletedButton: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    pendingCountLabel: '#pending-count', 
}

/**
 * @param {String} elementId
 */
export const App = (elementId) => {
  const element = document.querySelector(elementId);


  const displayTodos = ()=> {
      const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
      renderTodos(elementIDs.TodoList, todos);
      updatePendingCount();
    } 

  const updatePendingCount = () => {
    renderPending(elementIDs.pendingCountLabel);
  }

  if (!element) {
    console.error(`No se encontró el elemento con selector ${elementId}`);
    return;
  }

  const app = document.createElement('div');
  app.innerHTML = html;
  element.append(app);
  displayTodos();


// Referenias HTML
const newDescriptionInput = document.querySelector (elementIDs.NewTodoInput );
const TodoListUL = document.querySelector (elementIDs.TodoList  );
const clearCompletedButton = document.querySelector(elementIDs.clearCompletedButton);
const filterLIs = document.querySelectorAll(elementIDs.TodoFilters);

 // Listeners
newDescriptionInput.addEventListener('keyup', (event) =>{
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0 ) return;
 
    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value  = '';
});

TodoListUL.addEventListener('click', (event) => {
  const element = event.target.closest('[data-id]');
  todoStore.toggleTodo(element.getAttribute('data-id'));
  displayTodos();
})

TodoListUL.addEventListener('click', (event) => {
  const isDestroyElement = event.target.className === 'destroy';
  const element = event.target.closest('[data-id]');
  if ( !element || !isDestroyElement ) return;

  todoStore.deleteTodo(element.getAttribute('data-id'));
  displayTodos();
})


clearCompletedButton.addEventListener('click', () => {
  todoStore.deleteCompleted();
  displayTodos();
})

filterLIs.forEach(element => {

      element.addEventListener('click', (element) => {
        filterLIs.forEach(el => el.classList.remove('selected'));
        element.target.classList.add('selected');

        switch (element.target.text) {
          case 'Todos':
              todoStore.setFilter(Filters.All)
            break;
            case 'Pendientes':
              todoStore.setFilter(Filters.pending)
            break;
            case 'Completados':
              todoStore.setFilter(Filters.Completed)
            break;
        }

        displayTodos();

      });

  
});

};

