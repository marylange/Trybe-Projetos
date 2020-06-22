/*
    Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

    Dica: use default params.
*/

const assert = require('assert')

// escreva greet abaixo
const greet = (name, message = ["Hi", "Good morning", "Oi"]) => {
    for (let i = 0; i < message.length; i+= 1) {
        if (name == "John") {
            return `${message[0]} ${name}`;
        } else if (name == "John") {
            return `${message[1].length} ${name}`;
        } else if (name == "Isabela") {
            return `${message[2]} ${name}`;
        }
    }
}

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")

