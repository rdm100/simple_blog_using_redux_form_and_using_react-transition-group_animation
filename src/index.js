import React from 'react';
import ReactDOM from 'react-dom';
//Provider passes the store down from react-redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import promise from 'redux-promise'; 
import PostsNew from './components/posts_new';

// import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
			<Switch>
				<Route path="/posts/new" component={PostsNew} />
				<Route path="/" component={PostsIndex} />
			</Switch>
    	</div>	
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
