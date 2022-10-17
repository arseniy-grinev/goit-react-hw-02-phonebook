import { React, Component } from 'react';
import { nanoid } from 'nanoid';
import FormAddContact from './FormAddContact';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return <FormAddContact onAddFormSubmit={this.addContact} />;
  }
}

export default App;
