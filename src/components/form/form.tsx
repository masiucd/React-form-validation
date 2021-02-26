import styled from "@emotion/styled"
import { ChangeEvent, useReducer } from "react"

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

interface State {
  values: Record<string, string | number | boolean>
  errors: Record<string, string>
  touched: Record<string, boolean>
}

type Action =
  | { type: "SET_FIELD_VALUE"; payload: Record<string, string | number | boolean> }
  | { type: "SET_FIELD_TOUCHED"; payload: Record<string, boolean> }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      }

    case "SET_FIELD_TOUCHED":
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload,
        },
      }

    default:
      return state
  }
}

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

    const value = target.type === "checkbox" ? target.checked : target.value

    dispatch({ type: "SET_FIELD_VALUE", payload: { [target.name]: value } })
  }

  const handleBlur = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.persist()
    dispatch({ type: "SET_FIELD_TOUCHED", payload: { [evt.target.name]: true } })
  }

  return { handleChange, handleBlur, ...state }
}

const Form = () => {
  const form = useForm({ values: { firstName: "", lastName: "" } })

  const { handleChange, ...state } = form

  console.log("state", state.values)
  return (
    <StyledForm>
      <FormGroup>
        <input type="radio" name="male" id="male" />
        <Label htmlFor="male">male</Label>

        <input
          type="radio"
          name="female"
          id="female"
          onChange={handleChange}
          checked={state.values.female as boolean}
        />
        <Label htmlFor="female">female</Label>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="firstName">
          <span>firstName</span>
          <Input type="text" id="firstName" placeholder="firstName" name="firstName" />
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
            value={state.values.lastName as string}
            onChange={handleChange}
          />
        </Label>
      </FormGroup>

      <FormGroup className="country">
        <Label htmlFor="country">
          <span>country</span>
        </Label>
        <Select id="country">
          <option value="">country</option>
          <option value="sweden">sweden</option>
          <option value="usa">usa</option>
          <option value="poland">poland</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">
          <span>email</span>
          <Input type="email" id="email" placeholder="email" onChange={handleChange} />
        </Label>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="passport">
          <span>passport</span>
          <Input type="number" id="passport" placeholder="passport" onChange={handleChange} />
        </Label>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="flight-number">
          <span>flight number</span>
          <Input
            type="password"
            id="flight-number"
            placeholder="flight number"
            onChange={handleChange}
          />
        </Label>
      </FormGroup>
      <Button type="submit">sign up</Button>
    </StyledForm>
  )
}

export default Form
