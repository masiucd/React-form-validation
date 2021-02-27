import { css, cx } from "@emotion/css"
import { useState, ChangeEvent, FormEvent } from "react"
import { Debug } from "./debug"

const formStyles = css`
  & {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    box-shadow: 1px 1px 1px 2px rgba(66, 66, 66, 0.3);
    border-radius: 4px;
    label {
      padding: 1rem 0.5rem;
      display: flex;
      flex-flow: column wrap;
      span {
        font-size: 1.4em;
        text-transform: capitalize;
      }
    }
    button[type="submit"] {
      grid-column: span 2;
      font-size: 2rem;
      background-color: #333;
      color: #fff;
      border-radius: 4px;
      padding: 0.5rem;
      cursor: pointer;
      border: 2px solid #332332;
      box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.3);
    }
  }
`

const Form = () => {
  const [formState, setFormSatate] = useState({
    username: "",
    email: "",
    male: false,
    female: false,
  })

  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { target } = evt

    const value = target.type === "checkbox" ? target.checked : target.value

    setFormSatate({ ...formState, [target.name]: value })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    if (!formState.username && !formState.email && !formState.male && !formState.female) return
    alert(JSON.stringify(formState, null, 4))
    setFormSatate({
      username: "",
      email: "",
      male: false,
      female: false,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={cx(formStyles)}>
        <label htmlFor="male">
          <span>male</span>
          <input
            type="checkbox"
            name="male"
            id="male"
            checked={formState.male}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="female">
          <span>female</span>
          <input
            type="checkbox"
            name="female"
            id="female"
            checked={formState.female}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="username">
          <span>username</span>
          <input type="text" name="username" value={formState.username} onChange={handleChange} />
        </label>

        <label htmlFor="email">
          <span>email</span>
          <input type="email" name="email" value={formState.email} onChange={handleChange} />
        </label>

        <button type="submit">submit</button>
      </form>
      <Debug printData={formState} />
    </>
  )
}
export default Form
