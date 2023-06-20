const form = document.querySelector('form');
const resultado = document.querySelector('h3');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  let PrecoPorQuilo = document.getElementById('inQuilo').value;
  let consumoEmGr = document.getElementById('inConsumo').value;

  let consumoEmQuilo = consumoEmGr / 1000;
  let valorAPagar = PrecoPorQuilo * consumoEmQuilo;

  resultado.innerText = `Valor a pagar R$: ${valorAPagar.toFixed(2)}`;
});