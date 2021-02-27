import { css, cx } from "@emotion/css"
import { useState } from "react"

interface Props {
  printData: {
    [key: string]: any
  }
  className?: string
}

const debugStyles = css`
  & {
    background-color: #333;
    color: #fff;
    padding: 2rem;
    font-size: 2rem;
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

export const Debug = ({ className, printData }: Props) => {
  const [showDebug, setShowDebug] = useState(false)
  return (
    <div className={cx(className, "debug")}>
      {showDebug && (
        <pre className={cx(debugStyles, "pre-debug")}>{JSON.stringify(printData, null, 4)}</pre>
      )}
      <button onClick={() => setShowDebug(p => !p)} className={buttonStyles}>
        {showDebug ? "hide" : "show"} debug
      </button>
    </div>
  )
}
