import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </main>
    );
  }
}
export default App;
