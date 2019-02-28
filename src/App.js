import React from 'react'
import { Switch } from 'react-router-dom'
import Header from './components/header/Header';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

const App = () => {
  return (
    <div>
      <Switch>
        <Header />
      </Switch>
    </div>
  )
}

export default DragDropContext(HTML5Backend)(App)
