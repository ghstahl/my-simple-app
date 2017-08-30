import React, {
  Component,
} from 'react';

import { connect } from 'react-redux';
import { getStore } from './redux-stuff/global-store'
import {
  activateGeod,
  closeGeod,
  gatherReducers,
  registerPlugin
} from './redux-stuff/actions';
import { registerPluginJob } from './redux-stuff/jobs'
import { plugin,testOne } from './plugins/test-plugin'
// App.js
export class GeodComponent extends Component {

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
       <button onClick={() => {registerPluginJob(plugin)}}>Reload Reducers!</button>
      <button onClick={() => {
        let action = testOne({key:'dog'})
        store.dispatch(action)
        }
      }>Test One!</button>
      </div>
    );
  }

}

/*

*/
// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
  geod: state.geod,
});

const mapDispatchToProps = {  
  activateGeod,
  closeGeod,
  gatherReducers
};

const GeodComponentContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(GeodComponent);

export default GeodComponentContainer;  
