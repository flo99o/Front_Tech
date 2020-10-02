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
import JobPage from './pages/JobPage'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className="global_container">
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/connexion" component={Connexion} />
        <Route exact path="/job/:id" component={JobPage} />
      </Switch>
    </Router>
    <Footer/>
    </div>
  )
}

export default App;