const resposta1 = document.getElementById('outResp1');
const resposta2 = document.getElementById('outResp2');
const resposta3 = document.getElementById('outResp3');
const form = document.querySelector('form');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const veiculo = document.getElementById('inVeiculo').value;
  const preco = document.getElementById('inPreco').value;

  let entrada = preco * 0.5;
  let parcelas = entrada / 12;

  resposta1.innerText = `Promoção: ${veiculo}`;
  resposta2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
  resposta3.innerText = `+12x de R$ ${parcelas.toFixed(2)}`;
});