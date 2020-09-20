import { createAction, props } from '@ngrx/store';

export const newToDo = createAction(
  '[TODO] new to do',
  props<{ todo: string }>()
);

export const markComplete = createAction(
  '[TODO] marked complete',
  props<{ todo: string }>()
);
