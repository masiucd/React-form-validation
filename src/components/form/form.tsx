import { Debug } from "../debug"
import { css } from "@emotion/css"
import { useForm } from "../../hooks/form"
import { emailRe, sleep } from "../../utils/helpers"
import { useCallback } from "react"
import { Button, ErrorMessage, FormGroup, Input, Label, Select, StyledForm } from "./styles"

const debugStyles = css`
  & {
    pre {
      width: 100%;
    }
  }
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
  if ((values.passport as string).length < 8) {
    errors["passport"] = "please provide your passport"
  }
  if ((values.flightNumber as string).length < 5) {
    errors["flightNumber"] = "please provide a real flight number"
  }

  return errors
}

const onSubmit = async (values: FormValues) => {
  await sleep(500)
  alert(JSON.stringify(values, null, 4))
}

const Form = () => {
  const form = useForm({
    values: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      country: "",
      passport: "",
      flightNumber: "",
    } as FormValues,
    validate: useCallback(validate, []),
    onSubmit,
  })

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = form

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="male">
            <span>male</span>
            <input
              type="radio"
              checked={values.gender === "male"}
              value="male"
              name="gender"
              id="male"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.gender && touched.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
          </Label>

          <Label htmlFor="female">
            <span>female</span>
            <input
              type="radio"
              value="female"
              name="gender"
              id="female"
              onChange={handleChange}
              checked={values.gender === "female"}
              onBlur={handleBlur}
            />
            {errors.gender && touched.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
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
              value={values.firstName as string}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName && (
              <ErrorMessage>{errors.firstName}</ErrorMessage>
            )}
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
              value={values.lastName as string}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
          </Label>
        </FormGroup>

        <FormGroup className="country">
          <Label htmlFor="country">
            <span>country</span>

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
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">
            <span>email</span>
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
          </Label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="passport">
            <span>passport</span>
            <Input
              type="number"
              id="passport"
              name="passport"
              placeholder="passport"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passport as string}
            />
            {errors.passport && touched.passport && <ErrorMessage>{errors.passport}</ErrorMessage>}
          </Label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="flight-number">
            <span>flight number</span>
            <Input
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
          </Label>
        </FormGroup>
        <Button type="submit">sign up</Button>
      </StyledForm>
      <Debug printData={{ values, errors, touched }} className={debugStyles} />
    </div>
  )
}

export default Form
