import React from 'react';
import ReactDOM from 'react-dom';
import Autor from './Autor';
import LeftBar from './components/LeftBar';

ReactDOM.render(
	<LeftBar/>,
  document.getElementById('leftbar')
);

ReactDOM.render(
	<Autor/>,
  document.getElementById('root')
);
