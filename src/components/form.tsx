import styled from "@emotion/styled"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2em;
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 1em;

    button {
      grid-column: span 2;
    }
  }
`

const Button = styled.button`
  padding: 0.5em;
  box-shadow: var(--shadow-md);
  font-size: 1rem;
  background-color: var(--green);
  color: var(--white);
  border-radius: 4px;
  cursor: pointer;
`

const Label = styled.label`
  padding: 0.5em;
  display: flex;
  flex-flow: column wrap;
  span {
    font-size: 1.2rem;
    display: inline-block;
    margin-left: 0.3rem;
    margin-bottom: 0.4rem;
  }
`

const Input = styled.input`
  width: 100%;
  border: 2px solid var(--dark);
  box-shadow: var(--shadow-md);
  border-radius: 4px;
  font-size: 1.2rem;
  outline: 0;
`

const Form = () => {
  return (
    <StyledForm>
      <Label htmlFor="username">
        <span>username</span>
        <Input type="text" id="username" placeholder="username" />
      </Label>
      <Label htmlFor="email">
        <span>email</span>
        <Input type="email" id="email" placeholder="email" />
      </Label>
      <Label htmlFor="email">
        <span>password</span>
        <Input type="password" id="password" placeholder="password" />
      </Label>
      <Label htmlFor="repeat-password">
        <span>repeat password</span>
        <Input type="password" id="repeat-password" placeholder="repeat password" />
      </Label>
      <Button type="submit">sign up</Button>
    </StyledForm>
  )
}

export default Form
