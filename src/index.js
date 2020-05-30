import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'
import App from './routes/App';
import defaultResponse from './response.json'

const initialState = {
  filterData:"",
  isData: false,
  response: defaultResponse,
}


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );