const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
    
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}
    
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

test('Verificando nome', async () => {
  expect.assertions(1);
  const result = await getUserName(4);
  expect(result).toEqual('Mark');
})

test('Testando o reject', async () => {
  expect.assertions(1);
  try{
    await getUserName(6);
  } catch(error) {
    expect(error).toEqual(error);
  }
});