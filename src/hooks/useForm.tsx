/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { IErrors } from '../helpers/validate';

export interface IFormValues {
  username: string;
  email: string;
  password: string;
  password2: string;
}

export default (callback: any, validate: any) => {
  const [values, setValues] = React.useState<IFormValues>({
    username: '',
    email: '',
    password: '',
    password2: '',
  });


  const [errors, setErrors] = React.useState<IErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setErrors(validate(values));


    setIsSubmitting(true);

    // setTimeout(() => {
    //   setErrors({});
    // }, 4500);
  };


  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);


  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
