import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Greeting />, div);
  ReactDOM.unmountComponentAtNode(div);
});
