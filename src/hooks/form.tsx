import { ChangeEvent, FormEvent, useEffect, useReducer } from "react"
import { setNestedObjectValues } from "../utils/helpers"

interface UserFormProps {
  values: FormValues
  onSubmit: Function
  validate: Function
}

interface State {
  values: FormValues
  errors: Record<string, string>
  touched: Record<string, boolean>
  isSubmitted: boolean
}

type Action =
  | { type: "SET_FIELD_VALUE"; payload: FormValues }
  | { type: "SET_FIELD_TOUCHED"; payload: Record<string, boolean> }
  | { type: "SET_ERRORS"; payload: Record<string, string> }
  | { type: "SUBMIT_ATTEMPT"; payload: Record<string, string> }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_FAILURE" }

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

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      }

    case "SET_FIELD_TOUCHED":
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload,
        },
      }

    case "SUBMIT_ATTEMPT":
      return {
        ...state,
        isSubmitted: true,
        touched: setNestedObjectValues(state.values, true),
      }
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        isSubmitted: false,
      }
    case "SUBMIT_FAILURE":
      return {
        ...state,
        isSubmitted: false,
      }

    default:
      return state
  }
}

const useForm = ({ values, validate, onSubmit }: UserFormProps) => {
  const [state, dispatch] = useReducer(reducer, {
    values,
    errors: {},
    touched: {},
    isSubmitted: false,
  })

  useEffect(() => {
    if (validate) {
      const errorsObj = validate(state.values)
      dispatch({ type: "SET_ERRORS", payload: errorsObj })
    }
  }, [state.values, validate])

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    evt.persist()
    const target = evt.target

    dispatch({ type: "SET_FIELD_VALUE", payload: { [target.name]: target.value } })
  }

  const handleBlur = (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    evt.persist()
    dispatch({ type: "SET_FIELD_TOUCHED", payload: { [evt.target.name]: true } })
  }

  const handleSubmit = (evt: FormEvent): void => {
    evt.preventDefault()

    // check if there are errors
    if (!Object.keys(state.errors).length) {
      onSubmit(state.values)
    } else {
      dispatch({ type: "SET_ERRORS", payload: state.errors })
      dispatch({ type: "SUBMIT_FAILURE" })
    }
  }

  return { handleChange, handleBlur, handleSubmit, ...state }
}

export { useForm }
