import styled from "@emotion/styled"
import Form from "./components/form"

const Wrapper = styled.div`
  border: 2px solid red;
  max-width: 900px;
  margin: 0 auto;
`

function App() {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  )
}

export default App
