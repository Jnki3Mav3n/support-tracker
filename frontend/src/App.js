// import React from 'react';
import Login from './views/login/login'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Sidebar from './views/sidebar/sidebar'
import ViewBugPage from './views/pages/viewBugs'

function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> :
        <>
          <Sidebar />
          <Switch>
            <Route path="/viewbugs"><ViewBugPage /></Route>
          </Switch>          
        </>
      }
    </Router>
  );
}

export default App;
