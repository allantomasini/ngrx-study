import { User } from './model/user.model';
import { props, createAction } from '@ngrx/store';

export const login = createAction(
  "[Login Page] User Login",
  props<{user: User}>()
);

export const logout = createAction(
  "[Top Menu] Logout"
)
