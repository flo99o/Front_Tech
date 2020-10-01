// Packages
import React from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'

// Components
import Homepage from './pages/Homepage'
import Connexion from './pages/Connexion'

const App = () => {

  return (
    <div className="global_container">
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Homepage} /> */}
        <Route exact path="/connexion" component={Connexion} />
      </Switch>
    </Router>
    </div>
  )
}

export default App;