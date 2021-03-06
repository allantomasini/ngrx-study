import { AuthState } from './reducers/index';
import { createSelector, createFeatureSelector } from "@ngrx/store";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);
export const isLoggedOut = createSelector(
  isLoggedIn,
  (loggedIn) => !loggedIn
);
