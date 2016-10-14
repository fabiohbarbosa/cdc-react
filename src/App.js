import React, { Component } from 'react';

// pure
import './css/pure-min.css';
import './css/side-menu.css';

// components
import AuthorBox from './Author';

class App extends Component {

  render() {
    return (
      <div id="layout">
        <div id="main">
          <div className="header">
            <AuthorBox/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
