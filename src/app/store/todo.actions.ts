import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[TODO] Add', props<{ text: string }>());
export const removeTodo = createAction(
  '[TODO Remove',
  props<{ index: number }>()
);
export const editTodo = createAction(
  '[TODO] Edit',
  props<{ index: number; text: string }>()
);

export const toggleTodo = createAction(
  '[TODO] Toggle',
  props<{ index: number }>()
);
