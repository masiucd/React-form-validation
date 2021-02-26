import styled from "@emotion/styled"
import Main from "./routes/main"

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
`

function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  )
}

export default App
