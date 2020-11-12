// O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e 
// retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', 
// faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' 
// se encontram nessa lista.
const fetch = require('node-fetch');
const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log('Y',data);
      return data.map((repo) => repo.name)
    });
}
describe('teste', () => {
  test('Verificando URL', async () => {
      expect.assertions(1);
      const armazenarDados = await getRepos('https://api.github.com/users/tryber/repos');
      const repositorio = armazenarDados.some(repo => repo === 'sd-01-week4-5-project-todo-list');
      expect(repositorio).toBe(false);
  })
  test('Verificando segunda URL', async () => {
    expect.assertions(1);
    const armazenarDados2 = await getRepos('https://api.github.com/users/tryber/repos');
    const repositorio2 = armazenarDados2.some(repos => repos === 'sd-01-week4-5-project-meme-generator');
    expect(repositorio2).toBe(false);
  })
})
