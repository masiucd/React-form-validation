import styled from "@emotion/styled"

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

const Form = () => {
  return (
    <StyledForm>
      <FormGroup>
        <input type="radio" name="male" id="male" />
        <Label htmlFor="male">male</Label>

        <input type="radio" name="female" id="female" />
        <Label htmlFor="female">female</Label>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="firstName">
          <span>firstName</span>
          <Input type="text" id="firstName" placeholder="firstName" />
        </Label>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="surname">
          <span>surname</span>
          <Input type="text" id="surname" placeholder="surname" />
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
          <Input type="email" id="email" placeholder="email" />
        </Label>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="passport">
          <span>passport</span>
          <Input type="number" id="passport" placeholder="passport" />
        </Label>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="flight-number">
          <span>flight number</span>
          <Input type="password" id="flight-number" placeholder="flight number" />
        </Label>
      </FormGroup>
      <Button type="submit">sign up</Button>
    </StyledForm>
  )
}

export default Form
