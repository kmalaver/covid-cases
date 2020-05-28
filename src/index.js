import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'
import App from './routes/App';


const initialState = {}


const store = createStore(
  reducer,
  initialState,
  applyMiddleware(reduxThunk)
)

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );