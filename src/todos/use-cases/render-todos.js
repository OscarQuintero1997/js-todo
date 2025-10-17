import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";
/**
 * 
 * @param {String} elementId 
 * @param {String} todos 
 */

export const renderTodos = ( elementId, todos = [] ) => {

    //TODO referencias
    const element = document.querySelector(elementId);

    todos.forEach( todo  => {
        element.append(createTodoHTML(todo));
    });

}