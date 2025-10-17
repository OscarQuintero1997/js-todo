import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    pending: 'Pending'
}

const state = {
    todos: [
        new Todo ('Piedra del infinito'),
        new Todo ('Piedra del alma'),
        new Todo ('Piedra del tiempo'),
        new Todo ('Piedra del poder'),
        new Todo ('Piedra del realidad'),
    ],
    Filter: Filters.All,
}

const initStore = () => {
    console.log('state');
    console.log ('initStore');
}

const loadStore = () => {
    throw new Error("Not implement");
    
}

const getTodos =( Filter = Filters.All) => {
    switch (Filter) {
        case Filters.All:
             return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done);
        case Filters.pending:
            return state.todos.filter( todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid`);
    }
}


/**
 * @param {String} description
 */

const addTodo = ( description ) => {
    if (!description) throw new Error('Description is required');
     state.todos.push(new Todo(description));

}

/**
 * @param {String} todoId Todo Identifier
 */

const toggleTodo = ( todoId ) => {
        state.todos = state.todos.map( todo =>{
            if (todo.id === todoId) {
                todo.done = !todo.done;
            }
            return todo;
        });

}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);

}

/**
 * 
 * @param {Filters} newFilter 
 */

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    initStore,
    getTodos,
    loadStore,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    
}









