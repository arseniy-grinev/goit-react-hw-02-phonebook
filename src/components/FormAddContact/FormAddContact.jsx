import { React, Component } from 'react';
import FormInput from 'components/FormInput';
import { Form, AddContactBtn } from './FormAddContact.styled';

class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  onImputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;
    return (
      <Form>
        <FormInput
          value={name}
          type={'text'}
          name={'name'}
          label={'name: '}
          onChange={this.onImputChange}
        />
        <AddContactBtn type="submit">Add contanct</AddContactBtn>
      </Form>
    );
  }
}

export default FormAddContact;
