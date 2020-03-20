/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import '../styles/FormStyles.css';
import FormInput from './FormInput';

interface P {

}

const Form: React.FC<P> = () => {
  const [state, setState] = React.useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errorState, setErrorState] = React.useState<boolean>(false);
  const [successState, setSuccessState] = React.useState<boolean>(false);

  const [messageState, setMessageState] = React.useState<string>('');

  const [formErrors, setFormErrors] = React.useState({
    usernameError: '',
  });


  const {
    username, email, password, password2,
  } = state;


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleError = (msg: string) => {
    setErrorState(!errorState);

    setMessageState(msg);
  };


  const handleSuccess = () => {
    setSuccessState(!successState);
  };

  const validatePassword = (pass1: string, pass2: string) => {
    if (pass1 !== pass2) {
      handleError('password does not match ');
    }
  };


  const validateEmail = (email: string) => {
    const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (reg.test(email.trim())) {
      handleSuccess();
    } else {
      handleError('no matching email');
    }
  };

  const validateInputs = (xs: string[]) => {
    xs.forEach((x) => {
      if (x === '') {
        handleError('Please fill in the fields');
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password, password2);
    validateInputs([username, email, password, password2]);

    setTimeout(() => {
      setState({
        username: '',
        email: '',
        password: '',
        password2: '',
      });
    }, 2000);
  };


  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>

      <div className="form-group">

        <label htmlFor="username" className={`${errorState && 'input-error'} ${successState && 'input-success'}`}>
          username
          <FormInput id="username" type="text" name="username" placeholder="username" value={username} handleChange={handleChange} />
          {errorState && (
            <small className={errorState && 'notify'}>
              {messageState}
              {' '}
            </small>

          )}
        </label>

      </div>
      <div className="form-group">

        <label htmlFor="email" className={`${errorState && 'input-error'} ${successState && 'input-success'}`}>
          email
          <FormInput id="email" type="email" name="email" placeholder="email" value={email} handleChange={handleChange} />
          {errorState && (
            <small className={errorState && 'notify'}>
              {messageState}
              {' '}
            </small>

          )}
        </label>

      </div>
      <div className="form-group">

        <label htmlFor="password" className={`${errorState && 'input-error'} ${successState && 'input-success'}`}>
          password
          <FormInput id="password" type="password" name="password" placeholder="password" value={password} handleChange={handleChange} />
          {errorState && (
            <small className={errorState && 'notify'}>
              {messageState}
              {' '}
            </small>

          )}
        </label>

      </div>


      <div className="form-group">

        <label htmlFor="password2" className={`${errorState && 'input-error'} ${successState && 'input-success'}`}>
          confirm password
          <FormInput id="password2" type="password" name="password2" placeholder="password2" value={password2} handleChange={handleChange} />
          {errorState && (
            <small className={errorState && 'notify'}>
              {messageState}
              {' '}
            </small>
          )}
        </label>
      </div>


      <button id="btn" type="submit">Sign Up</button>
    </form>
  );
};
export default Form;
