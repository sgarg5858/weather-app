import { createAction, props } from "@ngrx/store";

export const showLoadingProgress = createAction(
  '[Shared] Show Loading Progress',
    props<{ loading: boolean }>()
);