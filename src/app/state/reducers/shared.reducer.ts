import { createReducer, on } from "@ngrx/store";
import { SharedActions } from "../actions";

export const SHARED_FEATURE_KEY = 'shared';

export interface SharedState {
    loading: boolean;
}
export const initialSharedState: SharedState = {
    loading: false,
};

export const sharedReducer = createReducer(
    initialSharedState,
    on(SharedActions.showLoadingProgress, (state,{loading}) => ({
        ...state,
        loading
    })
));