const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#btn');

botao.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
