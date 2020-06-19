window.onload = () => {
  const estadosBrasil = ["", "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins", "Distrito Federal"];
  const tamanho = estadosBrasil.length;
  const estado = document.getElementById("estado");

  for (let i = 0; i < tamanho; i++) {
    const newElemento = document.createElement("option");
    newElemento.innerText = estadosBrasil[i];
    estado.appendChild(newElemento);
  }
}

const enviarForm = () => {
  const nome = document.getElementById("nome-usuario").value;
  const email = document.getElementById("email-usuario").value;
  const cpf = document.getElementById("cpf-usuario").value;
  const endereco = document.getElementById("endereco-usuario").value;
  const cidade = document.getElementById("cidade-usuario").value;
  const estado = document.getElementById("estado").value;
  const moradia = document.getElementsByName("moradia").value;
  const rascCurriculo = document.getElementById("rascunho-curriculo").value;
  const cargo = document.getElementById("cargo").value;
  const descricao = document.getElementById("descricao-cargo").value;
  const dataInicio = document.getElementById("data-inicio").value;

  const div = document.getElementById("consolidado");

  let consolidadoDiv = "";
  consolidadoDiv += "Nome: " + nome + "\n";
  consolidadoDiv += "E-mail: " + email + "\n";
  consolidadoDiv += "CPF: " + cpf + "\n";
  consolidadoDiv += "Endereço: " + endereco + "\n";
  consolidadoDiv += "Cidade: " + cidade + "\n";
  consolidadoDiv += "Estado: " + estado + "\n";
  consolidadoDiv += "Tipo de moradia: " + moradia + "\n";
  consolidadoDiv += "Detalhes do currículo: " + rascCurriculo + "\n";
  consolidadoDiv += "Cargo: " + cargo + "\n";
  consolidadoDiv += "Descrição: " + descricao + "\n";
  consolidadoDiv += "Data de início: " + dataInicio;

  div.innerText = consolidadoDiv;
}

const apagarTudo = () => {
  const inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    switch (inputs[i].type) {
      case 'text':
        inputs[i].value = '';
      case 'email':
        inputs[i].value = '';
        break;
      case 'number':
        inputs[i].value = '';
        break;
      case 'date':
        inputs[i].value = '';
        break;
      case 'estado':
        inputs[i].value = '';
        break;
      case 'textArea':
        inputs[i].value = '';
        break;
      case 'div':
        inputs[i].value = '';
        break;
      case 'radio':
        inputs[i].checked = false;
    }
  }
}

const pikaday = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'd/M/YYYY',
  i18n: {
    previousMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  },
});