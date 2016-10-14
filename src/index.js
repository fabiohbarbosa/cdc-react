import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LeftBar from './components/LeftBar';

ReactDOM.render(
	<LeftBar/>,
  document.getElementById('leftbar')
);

ReactDOM.render(
	<App/>,
  document.getElementById('root')
);
