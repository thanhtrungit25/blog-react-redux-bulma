import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux store
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { loadBlog } from './store/Blog';

const store = configureStore();
console.log(store.getState());
store.dispatch(loadBlog());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
