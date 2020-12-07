import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import routes from './router/routes'
import Navbar from './components/Navbar'

let routesComponents = routes.map((route) => {
  return <Route path={route.url}
                component={route.component}
                exact={route.exact}
                key={route.url}
  />
})


function App() {
  return (
    <Router>
      <section className="container row m-auto align-items-center" style={{height:'100vh'}}>
        <Navbar className="col-3 border-dark p-2" />
        <div className="container col">
          <Switch>
            {routesComponents}
          </Switch>
        </div>
      </section>
    </Router>
  )
}

export default App
