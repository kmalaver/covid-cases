import React from 'react' 
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from '../components/Layout'
import '../assets/styles/App.scss'
import Home from '../containers/Home'
import Country from '../containers/Country'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/country/:id' component={Country}/>
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App