// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
const assert = require('assert')

// escreva greet abaixo
const greet = (name, message = ["Hi", "Good morning", "Oi"]) => {
  for(let i = 0; i < message.length; i++) {
    if(name == "John") {
      return `${message[i].length} John`;
    } else if (name == "John") {
      return `${message[i].length} John`;
    } else if (name == "Isabela") {
      return `${message[i].length} Isabela`;
    }
  }
}
console.log(greet("John"));
assert.equal(greet("John"), "Hi John");
assert.equal(greet("John", "Good morning"), "Good morning John");
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")