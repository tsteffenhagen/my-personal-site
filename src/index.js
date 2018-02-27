import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import FA  from 'react-fontawesome';



ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
