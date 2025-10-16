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
    ],
    Filter: Filters.All,
}

const initStore = () => {
    console.log('state');
    console.log ('initStore');
}

export default {
    initStore,
}









