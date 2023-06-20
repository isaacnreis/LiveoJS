function exibeResultado(){
  const tituloResposta = document.querySelector('.tituloResposta');
  const duracaoResposta = document.querySelector('.duracaoResposta');
  let titulo = document.getElementById('titulo').value;
  let duracao = Number(document.getElementById('duracao').value);
  
  let horas = Math.floor(duracao / 60);
  let minutos = duracao % 60;

  duracao = `${horas} hora(s) e ${minutos} minuto(s)`;

  tituloResposta.innerHTML = titulo;
  duracaoResposta.innerHTML = duracao;
}