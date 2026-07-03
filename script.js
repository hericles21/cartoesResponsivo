const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");
const botao5 = document.getElementById("botao5");

const caixa = document.getElementById("caixa-cartoes");

const botao = document.getElementById('meuBotao');

const botao = document.getElementById('meuBotao');

botao1.addEventListener('click', function(e) {
  const rect = botao.getBoundingClientRect();
  
  
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const onda = document.createElement('span');
  onda.classList.add('onda');
  onda.style.left = x + 'px';
  onda.style.top = y + 'px';

  this.appendChild(onda);

  setTimeout(() => {
    onda.remove();
  }, 600);
});
