import styled from "@emotion/styled"
import { ChangeEvent, FormEvent, useCallback, useEffect, useReducer } from "react"
import { callAll, emailRe, setNestedObjectValues, sleep } from "../../utils/helpers"
import { Debug } from "../debug"
import { Button, ErrorMessage, Input, Label, StyledForm } from "../form/styles"

const FormWrapper = styled(StyledForm)`
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 668px) {
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  button {
    margin: 1rem 0;
    width: 100%;
  }
  & {
    min-width: 10rem;
    max-width: 50rem;
  }
`

const FormGroup2 = styled.div``

const ButtonWrapper = styled.div`
  @media (min-width: 668px) {
    grid-column: span 3;
  }
`

interface State {
  formValues: StringRecord
  errors: StringRecord
  touched: Record<string, boolean>
  hasSubmitted: boolean
}

type Action =
  | { type: "SET_FIELD_VALUE"; payload: StringRecord }
  | { type: "SET_FIELD_TOUCHED"; payload: Record<string, boolean> }
  | { type: "SET_ERRORS"; payload: StringRecord }
  | { type: "SUBMIT_ATTEMPT" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_FAILURE"; payload: StringRecord }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        formValues: {
          ...state.formValues,
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

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      }
    case "SUBMIT_ATTEMPT":
      return {
        ...state,
        hasSubmitted: true,
        touched: setNestedObjectValues(state.formValues, true),
      }

    case "SUBMIT_SUCCESS":
      return {
        ...state,
        hasSubmitted: false,
      }

    case "SUBMIT_FAILURE":
      return {
        ...state,
        hasSubmitted: false,
        errors: action.payload,
      }

    default:
      return state
  }
}

interface UseForm {
  formValues: StringRecord
  validate: (values: StringRecord) => StringRecord
  onSubmit: (values: StringRecord) => void
}
const useForm = ({ formValues, validate, onSubmit }: UseForm) => {
  const [state, dispatch] = useReducer(reducer, {
    formValues,
    errors: {},
    touched: {},
    hasSubmitted: false,
  })

  useEffect(() => {
    if (validate) {
      const errors = validate(state.formValues)
      console.log(errors)
      dispatch({ type: "SET_ERRORS", payload: errors })
    }
  }, [state.formValues, validate])

  const handleChange = (fieldName: string) => (event: ChangeEvent<HTMLInputElement>) => {
    event.persist()
    const { value } = event.target

    dispatch({ type: "SET_FIELD_VALUE", payload: { [fieldName]: value } })
  }
  const handleTouched = (fieldName: string) => (event: ChangeEvent<HTMLInputElement>) => {
    event.persist()

    dispatch({ type: "SET_FIELD_TOUCHED", payload: { [fieldName]: true } })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch({ type: "SUBMIT_ATTEMPT" })
    if (!Object.keys(state.errors).length) {
      onSubmit(state.formValues)
      dispatch({ type: "SUBMIT_SUCCESS" })
    } else {
      dispatch({ type: "SUBMIT_FAILURE", payload: state.errors })
    }
  }

  const getFieldProps = (fieldName: string, options = {}) => {
    // CallAll function is not needed here
    // But is give us functionality to customize our functions if we want to
    return {
      value: state.formValues[fieldName],
      onChange: callAll(handleChange(fieldName)),
      onBlur: callAll(handleTouched(fieldName)),
      name: fieldName,
      id: fieldName,
      ...options,
    }
  }

  return {
    handleChange,
    handleTouched,
    getFieldProps,
    handleSubmit,
    ...state,
  }
}

const Form = () => {
  const { formValues, errors, touched, getFieldProps, handleSubmit } = useForm({
    formValues: { firstName: "", email: "" },
    validate: useCallback((values: StringRecord) => {
      const errors: StringRecord = {}
      if (values.firstName.length < 5) {
        errors.firstName = "first name is missing"
      }
      if (!values.email.match(emailRe)) {
        errors.email = "please provide a email"
      }
      return errors
    }, []),
    onSubmit: async (values: StringRecord) => {
      await sleep(500)
      alert(JSON.stringify(values, null, 4))
    },
  })

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <FormGroup2>
          <Label htmlFor="firstName">
            <span>firstName</span>
            <Input placeholder="bob" {...getFieldProps("firstName")} />
            {errors.firstName && touched.firstName && (
              <ErrorMessage>{errors.firstName}</ErrorMessage>
            )}
          </Label>
        </FormGroup2>
        <FormGroup2>
          <Label htmlFor="email">
            <span>email</span>

            <Input {...getFieldProps("email")} placeholder="bob@io.com" />
            {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </Label>
        </FormGroup2>

        <ButtonWrapper>
          <Button>submit</Button>
        </ButtonWrapper>
      </FormWrapper>
      <Debug printData={{ formValues, errors, touched }} />
    </>
  )
}

export default Form
