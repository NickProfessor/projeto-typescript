import { Negociacao } from "./models/negociacao.js";
alert("welcome to the mato");
const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.quantidade);
