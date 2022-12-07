import React from 'react';
import ReactDOM from 'react-dom';
import Form from './App';

class App extends React.Component {
  render () {
    return (<div>
      <h1>Form Submission</h1>
      <Form />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));