import { connect } from 'react-redux';
import {
    activateGeod,
    closeGeod,
} from './redux-stuff/actions';

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
    geod: state.geod,
  });
  
  const mapDispatchToProps = {  
    activateGeod,
    closeGeod,
  };
  

  export const connectApp = (app) => {
    return connect(  
        mapStateToProps,
        mapDispatchToProps
      )(app);
  }
  
  export default connectApp

