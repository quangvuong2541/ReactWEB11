import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// redux thunk
import { Provider } from 'react-redux';
import thunk from "redux-thunk"
import { applyMiddleware, createStore, compose } from "redux"
import { rootReducer } from './redux/rootReducer';
// copy paste 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // để dành khi học kết nối với api thì sẽ giải thích middleware là gì
  composeEnhancers(applyMiddleware(thunk))
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
