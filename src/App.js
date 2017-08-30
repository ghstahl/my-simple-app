import React, {
  Component,
} from 'react';
import { Provider } from 'react-redux';  
import GeodComponent from './GeodComponent';
import Header from './header'
import Main from './main'

export default class App extends Component {

  render() {
      return (
        <div>
            <Header />
            <Main />
        </div>
    );
  }
}
