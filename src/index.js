import React from 'react';
import ReactDOM from 'react-dom';
import './Greeting.css';
import Greeting from './components/Greeting';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Greeting />, document.getElementById('root'));

serviceWorker.register();
