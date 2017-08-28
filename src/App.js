import React, {  
  Component,
} from 'react';

import { connect } from 'react-redux';
import {getStore} from './redux-stuff/global-store'
import {  
  activateGeod,
  closeGeod,
  gatherReducers,
  registerPlugin
} from './redux-stuff/actions';

// App.js
export class App extends Component {

  render() {
    let store = getStore();
    return (
      <div>

        <h1>{this.props.geod.title || 'Hello World!'}</h1>

        {this.props.geod.title ?
          <button onClick={this.props.closeGeod}>
            Exit Geod
          </button> :
          <button onClick={() => {
           
            store.dispatch(activateGeod({ title: 'I am a geo dude!' }))
            this.props.activateGeod({ title: 'I am a geo dude!' })}
          }>
            Click Me!
          </button>
       }
       <h2>{this.props.geod.count || 'na'}</h2>
       <button id="increment">INCREMENT</button>
          <button id="decrement">DECREMENT</button>
       <button onClick={() => {
          
          //this.props.gatherReducers()
          
          store.dispatch(registerPlugin( {key:'dog'}))

          }
         }>
            Reload Reducers!
          </button>

      </div>
    );
  }

}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
  geod: state.geod,
});

const mapDispatchToProps = {  
  activateGeod,
  closeGeod,
  gatherReducers
};

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;  
