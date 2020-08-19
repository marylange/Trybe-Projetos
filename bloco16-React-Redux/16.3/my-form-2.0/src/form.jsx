import React from 'react';
import { connect } from 'react-redux';
import { changeName, changeEmail } from './action';

class Form extends React.Component {
    render() {
        const { handlerName, handlerEmail, nome, email } = this.props;
        return (
            <fieldset>
                Nome: <input type="text" minLength="40" maxLength="40" name="name" className="inputName" value={nome} onChange={(event) => changeDados(event.target.value)} required />
                Email: < input type="email" name="email" value={email} onChange={(event) => changeDados(event.target.value)} minLength="50" maxLength="50" required />
                {/* CPF: <input type="password" name="password" value={password} onChange={handler} required minLength="11" maxLength="11" />
                Endereço: <input type="text" name="endereco" maxLength="200" value={endereco} onChange={handler} required />
                Cidade: <input type="text" maxLength="28" required value={cidade} onChange={this.changeHandler} /> */}
            </fieldset>
        );
    }
}

const mapStateToProps = (state) => ({
    nome: state.nameReducer.nome,
    email: state.emailReducer.email
});

const mapDispatchToProps = (dispatch) => ({
    handlerName: infos => dispatch(changeName(infos)),
    handlerEmail: infos => dispatch(changeEmail(infos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);