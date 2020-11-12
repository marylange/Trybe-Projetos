import React from 'react';
import Header from './header';
import FormErros from './formErros';
import Form from './form';

class Formulario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      endereco: '',

      formErros: { email: '', password: '', endereco: '' }
    }
  }

  changeHandler = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState((state) => (
      {
        [name]: value,
        formErros: {
          ...state.formErros,
          [name]: this.validateField(name, value)
        }
      })
    );
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        return isValid ? '' : ' inválido';
      case 'password':
        return value.length >= 11 ? '' : ' inválido';
      case 'endereco':
        const validEnd = value.match(/^[a-z\u00C0-\u00ff A-Z]+$/i)
        return validEnd ? '' : ' inválido';
      default:
        break;
    }
  }

  // verificaCidade(fieldName, value) {
  //   if(fieldName === 'cidade' && value.match(/^[0-9]+$/i)) {
  //     fieldName = '';
  //   }
  // }

  render() {
    const { email, password, endereco, formErros } = this.state;
    return (
      <form>
        <Header />
        <Form  email={email} password={password} endereco={endereco} handler={this.changeHandler} />
        <div>
          <FormErros formErros={formErros} />
        </div>
      </form>
    )
  }
}


export default Formulario;