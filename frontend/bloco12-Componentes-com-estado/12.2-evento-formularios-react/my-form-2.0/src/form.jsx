import React from 'react';

class Form extends React.Component {
    render() {
        const { email, password, endereco, handler, cidade } = this.props;
        return (
            <fieldset>
                Nome: <input type="text" minLength="40" maxLength="40" className="inputName" required />
                Email: < input type="email" name="email" value={email} onChange={handler} minLength="50" maxLength="50" required />
                CPF: <input type="password" name="password" value={password} onChange={handler} required minLength="11" maxLength="11" />
                Endereço: <input type="text" name="endereco" maxLength="200" value={endereco} onChange={handler} required />
                Cidade: <input type="text" maxLength="28" required value={cidade} onChange={this.changeHandler} />
            </fieldset>
        );
    }
}

export default Form;