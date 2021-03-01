import React from "react"
import { Route, Switch } from "react-router-dom"

const FormReducer = React.lazy(() => import("../components/form/form"))
const FormWithState = React.lazy(() => import("../components/form/form-with-state/form"))
const SimpleForm = React.lazy(() => import("../components/simple-form/form"))

const Main = () => {
  return (
    <React.Suspense fallback={<div>...loading</div>}>
      <Switch>
        <Route path="/" exact component={FormReducer} />
        <Route path="/f" exact component={FormWithState} />
        <Route path="/simple" exact component={SimpleForm} />
      </Switch>
    </React.Suspense>
  )
}

export default Main
