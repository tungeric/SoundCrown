import React from 'react';
import ReactDOM from 'react-dom';

class StreamPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render () {
    return (
      <div>
        <div className="test">
          <h1>Streaming</h1>
        </div>
      </div>
    );
  }

}

export default StreamPage;
