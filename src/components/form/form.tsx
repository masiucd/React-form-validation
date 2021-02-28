import styled from "@emotion/styled"
<<<<<<< HEAD
import { ChangeEvent, FormEvent, useReducer } from "react"
import { Debug } from "../debug"
import { css } from "@emotion/css"
=======
import { Debug } from "../debug"
import { css } from "@emotion/css"
import { useForm } from "../../hooks/form"
import { emailRe } from "../../utils/helpers"
import { useCallback } from "react"
>>>>>>> develop

const StyledForm = styled.form`
  min-width: 60rem;
  padding: 2em;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lv-3);

  @media (min-width: 668px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: var(--grid-gap-1);

    button {
      grid-column: 2/4;
      margin: 1rem 0;
    }
  }
`

const Button = styled.button`
  box-shadow: var(--shadow-md);
  font-size: 1rem;
  background-color: var(--green);
  color: var(--white);
  font-size: 1.6rem;
  cursor: pointer;
  height: 4.8rem;
  border: 1px solid var(--dark);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lv-3);
  text-align: center;
  transition: var(--transition-1);

  background-image: linear-gradient(to right, var(--blue) 50%, var(--green) 50%);
  background-position: 0;
  background-size: 200%;
  &:hover {
    background-position: -100%;
    box-shadow: var(--shadow-xl);
  }
`

const Label = styled.label`
  padding: 0.5em;
  display: flex;
  flex-flow: column wrap;
  span {
    font-size: 1.6rem;
    display: inline-block;
    margin-left: 0.8rem;
    margin-bottom: 0.4rem;
  }
`

const Input = styled.input`
  width: 100%;
  border: 1px solid var(--dark);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lv-3);
  outline: 0;
  height: 4.8rem;
  font-size: 1.6rem;
  transition: var(--transition-1);
  &:focus {
    box-shadow: var(--shadow-xl);
    transform: scale(1.03);
  }

  padding: 0 0.8rem;
`

const Select = styled.select``

const FormGroup = styled.div`
  &:first-of-type {
    grid-column: 1/-1;
    display: flex;
    align-items: center;
  }

  &:nth-of-type(2) {
    grid-column: 1/3;
  }
  &:nth-of-type(3) {
    grid-column: 3 / -1;
  }
  &:nth-of-type(4) {
    grid-column: 1 / 3;
  }
  &:nth-of-type(5) {
    grid-column: 3 / -1;
  }
  &:nth-of-type(6) {
    grid-column: 1 / 3;
  }

  &:nth-of-type(7) {
    grid-column: span 2;
  }
`

const debugStyles = css`
  & {
    pre {
      width: 100%;
    }
  }
<<<<<<< HEAD
}

const debugStyles = css`
  & {
  }
`

interface UserFormProps {
  values: Record<string, string | number | boolean>
}

const useForm = ({ values }: UserFormProps) => {
  const [state, dispatch] = useReducer(reducer, {
    values,
    errors: {},
    touched: {},
  })

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.persist()
    const target = evt.target
    console.log(evt.currentTarget)
    dispatch({ type: "SET_FIELD_VALUE", payload: { [target.name]: target.value } })
  }

  const handleBlur = (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    evt.persist()
    dispatch({ type: "SET_FIELD_TOUCHED", payload: { [evt.target.name]: true } })
  }

  const handleSubmit = (evt: FormEvent): void => {
    evt.preventDefault()
  }

  return { handleChange, handleBlur, handleSubmit, ...state }
=======
`

const ErrorMessage = styled.p`
  color: var(--white);
  background-color: var(--warning);
  padding: 0.5rem;
  border-radius: var(--border-radius-lv-3);
`

const validate = (values: FormValues) => {
  const errors: Record<string, string> = {}
  if ((values.firstName as string).length < 5) {
    errors["firstName"] = "first name is to short! "
  }
  if ((values.lastName as string).length < 10) {
    errors["lastName"] = "last name is to short! "
  }

  if (!(values.email as string).match(emailRe)) {
    errors["email"] = "No correct format of the email "
  }
  if ((values.gender as string).length < 0) {
    errors["gender"] = "please provide a gender"
  }
  if ((values.flightNumber as string).length < 0) {
    errors["flightNumber"] = "please provide a gender"
  }

  return errors
>>>>>>> develop
}

const Form = () => {
  const form = useForm({
<<<<<<< HEAD
    values: { firstName: "", lastName: "", email: "", female: "", male: "" },
  })

  const { handleChange, handleBlur, handleSubmit, ...state } = form
=======
    values: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      country: "",
      password: "",
      flightNumber: "",
    } as FormValues,
    validate: useCallback(validate, []),
    onSubmit: (values: FormValues) => {
      console.log("yooo")
    },
  })

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = form
>>>>>>> develop

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="male">
            <span>male</span>
            <input
              type="radio"
<<<<<<< HEAD
              // value={state.values.male as string}
              value="male"
              name="male"
              id="male"
              onChange={handleChange}
              checked={state.values.male === "male"}
            />
=======
              checked={values.gender === "male"}
              value="male"
              name="gender"
              id="male"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.gender && touched.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
>>>>>>> develop
          </Label>

          <Label htmlFor="female">
            <span>female</span>
            <input
              type="radio"
<<<<<<< HEAD
              // value={state.values.female as string}
              value="female"
              name="female"
              id="female"
              onChange={handleChange}
              checked={state.values.female === "female"}
            />
=======
              value="female"
              name="gender"
              id="female"
              onChange={handleChange}
              checked={values.gender === "female"}
              onBlur={handleBlur}
            />
            {errors.gender && touched.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
>>>>>>> develop
          </Label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="firstName">
            <span>firstName</span>
            <Input
              type="text"
              id="firstName"
              placeholder="firstName"
              name="firstName"
<<<<<<< HEAD
              value={state.values.firstName as string}
              onChange={handleChange}
              onBlur={handleBlur}
            />
=======
              value={values.firstName as string}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName && (
              <ErrorMessage>{errors.firstName}</ErrorMessage>
            )}
>>>>>>> develop
          </Label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="surname">
            <span>lastName</span>
            <Input
              type="text"
              id="surname"
              placeholder="surname"
              name="lastName"
<<<<<<< HEAD
              value={state.values.lastName as string}
              onChange={handleChange}
              onBlur={handleBlur}
            />
=======
              value={values.lastName as string}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
>>>>>>> develop
          </Label>
        </FormGroup>

        <FormGroup className="country">
          <Label htmlFor="country">
            <span>country</span>
<<<<<<< HEAD
          </Label>

          <Select id="country" onBlur={handleBlur}>
            <option value="">country</option>
            <option value="sweden">sweden</option>
            <option value="usa">usa</option>
            <option value="poland">poland</option>
          </Select>
=======

            <Select
              id="country"
              onBlur={handleBlur}
              name="country"
              value={values.country as string}
              onChange={handleChange}
            >
              <option value="">country</option>
              <option value="sweden">sweden</option>
              <option value="usa">usa</option>
              <option value="poland">poland</option>
            </Select>
            {errors.country && touched.country && <ErrorMessage>{errors.country}</ErrorMessage>}
          </Label>
>>>>>>> develop
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">
            <span>email</span>
<<<<<<< HEAD
            <Input type="email" id="email" placeholder="email" onChange={handleChange} />
=======
            <Input
              type="email"
              id="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
              value={values.email as string}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
>>>>>>> develop
          </Label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="passport">
            <span>passport</span>
            <Input
              type="number"
              id="passport"
              placeholder="passport"
              onChange={handleChange}
              onBlur={handleBlur}
<<<<<<< HEAD
            />
=======
              value={values.passport as string}
            />
            {errors.passport && touched.passport && <ErrorMessage>{errors.passport}</ErrorMessage>}
>>>>>>> develop
          </Label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="flight-number">
            <span>flight number</span>
            <Input
<<<<<<< HEAD
              type="password"
              id="flight-number"
              placeholder="flight number"
              onChange={handleChange}
              onBlur={handleBlur}
            />
=======
              type="text"
              id="flight-number"
              placeholder="flight number"
              name="flightNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.flightNumber as string}
            />
            {errors.flightNumber && touched.flightNumber && (
              <ErrorMessage>{errors.flightNumber}</ErrorMessage>
            )}
>>>>>>> develop
          </Label>
        </FormGroup>
        <Button type="submit">sign up</Button>
      </StyledForm>
<<<<<<< HEAD
      <Debug printData={state} className={debugStyles} />
=======
      <Debug printData={{ values, errors, touched }} className={debugStyles} />
>>>>>>> develop
    </div>
  )
}

export default Form
