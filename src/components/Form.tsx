/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import '../styles/FormStyles.css';
import FormInput from './FormInput';
import userForm from '../hooks/useForm';
import validate from '../helpers/validate';


interface P {

}

const Form: React.FC<P> = () => {
  const {
    handleChange, handleSubmit, values, errors,
  } = userForm(submit, validate);


  function submit() {
    console.log('submitted');
  }


  return (
    <form className="Form" onSubmit={handleSubmit} noValidate>
      <h2>Sign up</h2>

      <div className="form-group">

        <label htmlFor="username" className={errors.usernameError && 'input-error'}>
          username
          <FormInput id="username" type="text" name="username" placeholder="username" value={values.username} handleChange={handleChange} />
          {errors.usernameError && (
            <small className="notify">
              {errors.usernameError}
            </small>
          )}
        </label>

      </div>
      <div className="form-group">

        <label htmlFor="email" className={errors.emailError && 'input-error'}>
          email
          <FormInput id="email" type="email" name="email" placeholder="email" value={values.email} handleChange={handleChange} />
          {errors.emailError && (
            <small className="notify">
              {errors.emailError}
            </small>
          )}
        </label>

      </div>
      <div className="form-group">

        <label htmlFor="password" className={errors.passwordError && 'input-error'}>
          password
          <FormInput id="password" type="password" name="password" placeholder="password" value={values.password} handleChange={handleChange} />
          {errors.passwordError && (
            <small className="notify">
              {errors.passwordError}
            </small>
          )}
        </label>

      </div>


      <div className="form-group">

        <label htmlFor="password2" className={errors.passwordError && 'input-error'}>
          confirm password
          <FormInput id="password2" type="password" name="password2" placeholder="password2" value={values.password2} handleChange={handleChange} />
          {errors.passwordError && (
            <small className="notify">
              {errors.passwordError}
            </small>
          )}
        </label>
      </div>


      <button id="btn" type="submit">Sign Up</button>
    </form>
  );
};
export default Form;
