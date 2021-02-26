import { css } from "@emotion/css"
import { useState } from "react"

interface Props {
  printData: Record<string, string | number | boolean>
}

const debugStyles = css`
  & {
    position: fixed;
    top: 12rem;
    background-color: #333;
    color: #fff;
    padding: 2rem;
    font-size: 2rem;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45rem;
    border: 2px solid #332332;
    box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.3);
    transition: 500ms ease-in-out all;
  }
`

const buttonStyles = css`
  & {
    position: fixed;
    bottom: 5rem;
    left: 3rem;
    font-size: 2rem;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    padding: 0.5rem;
    width: 16rem;
    cursor: pointer;
    border: 2px solid #332332;
    box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.3);
  }
`

export const Debug = ({ printData }: Props) => {
  const [showDebug, setShowDebug] = useState(false)
  return (
    <>
      {showDebug && <pre className={debugStyles}>{JSON.stringify(printData, null, 4)}</pre>}
      <button onClick={() => setShowDebug(p => !p)} className={buttonStyles}>
        show debug
      </button>
    </>
  )
}
