// Packages
import React from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'
// Components
import Homepage from './pages/Homepage'
import SignIn from './pages/SignIn'
import JobPage from './pages/JobPage'
import Footer from './components/Footer'
import ProfilePages from './pages/ProfilePages'
import CreateAd from './pages/CreateAd'
import ApplicationForm from './pages/ApplicationForm'
import CompagnyProfile from './pages/CompagnyProfile'
import AdminProfile from './components/AdminProfile'

const App = () => {

  return (
    <div className="global_container">
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/connexion" component={SignIn} />
        <Route exact path="/job/:id" component={JobPage} />
        <Route exact path="/profile/:typeUser/:id" component={ProfilePages} />
        <Route exact path="/compagny/:id" component={CompagnyProfile}/>
        <Route exact path="/admin" component={AdminProfile}/>
        <Route exact path="/createad" component={CreateAd} />
        <Route exact path="/apply" component={ApplicationForm} />
      </Switch>
    </Router>
    <Footer/>
    </div>
  )
}

export default App;