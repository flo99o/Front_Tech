// Packages
import React from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'

// Components
import Homepage from './pages/Homepage'

const App = () => {

  return (
    <div className="global_container">
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
    </div>
  )
}

export default App;