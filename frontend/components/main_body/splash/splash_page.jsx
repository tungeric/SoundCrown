import React from 'react';
import ReactDOM from 'react-dom';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render () {
    return (
      <div>
        <div className="test">
          <h1>Splashing</h1>
        </div>
      </div>
    );
  }

}

export default SplashPage;
