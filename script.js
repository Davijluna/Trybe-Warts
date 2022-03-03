const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#btn');
const botaoInput = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
// esta function foi encinada pelo Matheus mentoria para ajudar a passar no teste lint
botao.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function validar() {
  if (checkbox.checked) {
    botaoInput.disabled = false;
  } else {
    botaoInput.disabled = true;
  }
}
checkbox.addEventListener('click', validar);
