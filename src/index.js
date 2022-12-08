import React from 'react';
import ReactDOM from 'react-dom';
import Form from './App';

class App extends React.Component {
  render () {
    return (
    <div>
      <img 
        src="https://mma.prnewswire.com/media/1274827/Alloy_Logo.jpg?p=twitter"
        alt="alloy_logo"
        width={"500px"}
        height={"120px"}
        />
      <h1>Application for Onboarding</h1>
      <h3>
        <p>Note: Please make sure all fields are accurately filled out.</p>

        <p>You may reference the inline text within each field to see how it would be written.</p>

        <p>All information should match your governemt issued identification.</p>
      </h3>
      <Form />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));