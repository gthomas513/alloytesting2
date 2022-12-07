import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/form.js';

class App extends React.component {
  render () {
    return (<div>
      <h1>Form Submission</h1>
      <Form />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));