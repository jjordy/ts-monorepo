import React, { useState } from "react"
import BasicForm, { FormValues } from "./components/BasicForm"

import {
  GlobalStyles,
  AppContainer,
  Display,
  Header,
  Pre,
  Code,
  Grid
} from "./components"
const App = () => {
  const [submitState, setSubmitState] = useState("")
  const submit = (values: FormValues, extras: any) => {
    setSubmitState(JSON.stringify(values, null, 2))
  }

  return (
    <AppContainer>
      <GlobalStyles />
      <Grid width="50%" gap={16}>
        <Display>
          <Header>Hello useForm</Header>
          <Header as="h3">Basic Form</Header>
          <BasicForm onSubmit={submit} />
        </Display>
        <Display className="code">
          <Header as="h2">On Submit</Header>
          <Pre>
            <Code>{submitState}</Code>
          </Pre>
        </Display>
      </Grid>
    </AppContainer>
  )
}

export default App
