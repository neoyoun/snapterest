require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let Stream = require('components/Stream.react');

class Application extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <Stream className={this.props.clsName} />
      </div>
    );
  }
}

Application.defaultProps = {
  clsName : 'stream'
};

export default Application;
