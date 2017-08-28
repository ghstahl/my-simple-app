import React, {  
  Component,
} from 'react';

import { connect } from 'react-redux';
import {getStore} from './redux-stuff/global-store'
import {  
  activateGeod,
  closeGeod,
  gatherReducers
} from './redux-stuff/actions';

// App.js
export class App extends Component {

  render() {
    return (
      <div>

        <h1>{this.props.geod.title || 'Hello World!'}</h1>

        {this.props.geod.title ?
          <button onClick={this.props.closeGeod}>
            Exit Geod
          </button> :
          <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
            Click Me!
          </button>
       }
       <button onClick={() => {
          
          //this.props.gatherReducers()
          let store = getStore();
          store.dispatch({
            type: 'REGISTER_PLUGIN',
            plugin:{
              key:'dog'
            }
          })

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
