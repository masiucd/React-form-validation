import React from "react"
import { Route, Switch } from "react-router-dom"

const FormReducer = React.lazy(() => import("../components/form/form"))
const FormWithState = React.lazy(() => import("../components/form/form-with-state/form"))

const Main = () => {
  return (
    <React.Suspense fallback={<div>...loading</div>}>
      <Switch>
        <Route path="/" exact component={FormReducer} />
        <Route path="/f" exact component={FormWithState} />
      </Switch>
    </React.Suspense>
  )
}

export default Main
