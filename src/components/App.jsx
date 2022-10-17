import { React, Component } from 'react';
// import { nanoid } from 'nanoid';
import FormAddContact from './FormAddContact';

class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return <FormAddContact />;
  }
}

export default App;
