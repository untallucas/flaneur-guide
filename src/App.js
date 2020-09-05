import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from './screens/Home'
import About from './screens/About'
import ListSpots from './screens/ListSpots'
import SingleSpot from './screens/SingleSpot'
import ListEvents from './screens/ListEvents'
import SingleEvent from './screens/SingleEvent'
import ListTracks from './screens/ListTracks'
import SingleTrack from './screens/SingleTrack'
import Test from './screens/Test'

import AppData from './contexts/AppData'
import { AppDataProvider } from './contexts/AppData'

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <AppDataProvider>
        <Router>
          <Switch>
            <Route path='/inicio' component={ Home } exact />
            <Route path='/acerca' component={ About } exact />
            <Route path='/test' component={ Test } exact />

            <Route path='/lugares/:taxonomy/:filter' component={ ListSpots } />
            <Route path='/lugares/:slug' component={ SingleSpot } />
            <Route path='/lugares' component={ ListSpots } exact />

            <Route path='/restaurantes/tipo/:filter' component={ ListSpots } />
            <Route path='/restaurantes/:slug' component={ SingleSpot } />
            <Route path='/restaurantes' component={ ListSpots } exact />

            <Route path='/eventos/tipo/:filter' component={ ListEvents } />
            <Route path='/eventos/:slug' component={ SingleEvent } />
            <Route path='/eventos' component={ ListEvents } exact />

            <Route path='/recorridos/tipo/:filter' component={ ListTracks } />
            <Route path='/recorridos/:slug' component={ SingleTrack } />
            <Route path='/recorridos' component={ ListTracks } exact />

            <Redirect to='/inicio' />
          </Switch>
        </Router>
      </AppDataProvider>
    );
  }
}

export default App
