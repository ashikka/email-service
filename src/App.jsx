import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage/HomePage'
import React from 'react'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={ Home }/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
