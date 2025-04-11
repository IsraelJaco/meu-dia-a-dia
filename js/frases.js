const frases = [
  { texto: "Acredite em si mesmo e tudo será possível.", autor: "Desconhecido" },
  { texto: "O sucesso é a soma de pequenos esforços repetidos diariamente.", autor: "Robert Collier" },
  { texto: "Você é mais forte do que imagina.", autor: "Desconhecido" },
  { texto: "Não importa a velocidade, continue em frente.", autor: "Confúcio" },
  { texto: "Grandes coisas nunca vêm da zona de conforto.", autor: "Desconhecido" },
  { texto: "Persistência realiza o impossível.", autor: "Provérbio Chinês" },
  { texto: "Tudo parece impossível até que seja feito.", autor: "Nelson Mandela" },
  { texto: "Faça o seu melhor, onde você estiver, com o que você tem.", autor: "Theodore Roosevelt" },
  { texto: "A jornada de mil milhas começa com um único passo.", autor: "Lao Tsé" },
  { texto: "Coragem não é ausência de medo, é agir apesar dele.", autor: "Desconhecido" }
];

function novaFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  const frase = frases[indice];

  const fraseTexto = document.getElementById("frase-texto");
  const autorFrase = document.getElementById("autor-frase");

  if (fraseTexto && autorFrase) {
    fraseTexto.textContent = `"${frase.texto}"`;
    autorFrase.textContent = `— ${frase.autor}`;
  }
}

window.addEventListener("DOMContentLoaded", novaFrase);
