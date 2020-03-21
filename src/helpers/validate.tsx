/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IFormValues } from '../hooks/useForm';

export interface IErrors {
  usernameError?: string;
  emailError?: string;
  passwordError?: string;

}

export default function validate(values: IFormValues) {
  const errors: IErrors = {};
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!values.username) {
    errors.usernameError = 'please enter a username';
  } else if (values.username.length < 3) {
    errors.usernameError = 'please enter a username with at least 3 characters';
  }


  if (!values.email) {
    errors.emailError = 'please enter a email address';
  } else if (!regex.test(values.email)) {
    errors.emailError = 'Email invalid';
  }


  if (!values.password) {
    errors.passwordError = 'password is required';
  } else if (values.password.length < 6) {
    errors.passwordError = 'Password need to be at least 6 characters';
  }

  if (values.password !== values.password2) {
    errors.passwordError = 'Password does not match';
  }


  return errors;
}
