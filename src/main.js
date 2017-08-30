import React, {
  Component,
} from 'react';
import { Switch, Route } from 'react-router-dom'
import GeodComponent from './GeodComponent';
import Home from './home'

export default class Main extends Component {

  render() {
      return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/geod' component={GeodComponent}/>
            </Switch>
        </main>
    );
  }
}
