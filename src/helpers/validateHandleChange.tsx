import { IErrors } from './validate';
import { IFormValues } from '../hooks/useForm';

export default (
  setStateFn: any, stateValues: IFormValues, event: React.ChangeEvent<HTMLInputElement>,
) => {
  const { name, value } = event.target;
  const errors: IErrors = {};

  switch (name) {
    case 'username':
      errors.usernameError = value.length < 3 ? 'min 3 chars' : '';
      break;
    case 'email':
      errors.emailError = value.length < 3 ? 'min 3 chars' : '';
      break;
    case 'password':
      errors.passwordError = value.length < 3 ? 'password need to be at least 6 chars' : '';
      break;
    case 'password2':
      errors.passwordError = stateValues.password !== stateValues.password2 ? 'Password does not match' : '';
      break;

    default:
      break;
  }

  setStateFn({ ...stateValues, [name]: value });
};
