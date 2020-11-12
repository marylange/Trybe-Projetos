import React from 'react';
import { Component } from 'react';

class FormErros extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { formErros } = this.props;
        return (
            <div>
                {Object.keys(formErros).map((fieldName, i) => {
                    if (formErros[fieldName].length === 0) return ''
                    return <p key={i}>{fieldName}{formErros[fieldName]}</p>
                })}
            </div>
        )
    }
}

export default FormErros;
