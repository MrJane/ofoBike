import React from 'react';
import ReactDOM from 'react-dom';
import IRoute from './router'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IRoute />, document.getElementById('root'));
registerServiceWorker();
