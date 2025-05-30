import { createReducer, on } from '@ngrx/store';
import { addTodo, editTodo, removeTodo, toggleTodo } from './todo.actions';

export interface Todo {
  text: string;
  completed: boolean;
}

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => [...state, { text, completed: false }]),
  on(removeTodo, (state, { index }) => {
    return state.filter((_, i) => i !== index);
  }),

  on(editTodo, (state, { index, text }) => {
    const updated = [...state];
    updated[index] = { ...updated[index], text: text, completed: false };
    return updated;
  }),
  on(toggleTodo, (state, { index }) => {
    const updated = [...state];
    updated[index] = {
      ...updated[index],
      completed: !updated[index].completed,
    };
    return updated;
  })
);
