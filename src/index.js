// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



//----------------------------------------------------------------------------------
// import store, { adicionaPacote } from './store';

// store.subscribe( () => console.log(store.getState()) );

// store.dispatch(adicionaPacote(1, 'nome do pacote')); 
// store.dispatch(adicionaPacote(1, 'nome do pacote')); 


//------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import * as reducers from './reducers'
import App from './App'

// const store = createStore(
//   combineReducers(reducers)
// )

// ReactDOM.render(
//   <Provider store=>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
ReactDOM.render(<App/>, document.getElementById('root'));