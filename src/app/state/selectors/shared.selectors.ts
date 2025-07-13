import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SHARED_FEATURE_KEY, SharedState } from '../reducers/shared.reducer';

export const selectSharedState =
  createFeatureSelector<SharedState>(SHARED_FEATURE_KEY);

export const selectShowProgressBar = createSelector(
  selectSharedState,
  (state: SharedState) => state.loading
);
