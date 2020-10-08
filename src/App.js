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
import ProfilePage from './pages/ProfilePage'
import CreateAd from './pages/CreateAd'
import ApplicationForm from './pages/ApplicationForm'
import FormikContainer from './components/formik/FormikContainer'

const App = () => {

  return (
    <div className="global_container">
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/connexion" component={Connexion} />
        <Route exact path="/job/:id" component={JobPage} />
        <Route exact path="/profile/:typeUser/:id" component={ProfilePage} />
        <Route exact path="/createad" component={CreateAd} />
        <Route exact path="/apply" component={ApplicationForm} />
      </Switch>
    </Router>
    <FormikContainer />
    <Footer/>
    </div>
  )
}

export default App;