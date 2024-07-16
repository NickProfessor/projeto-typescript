import { Negociacao } from "./models/negociacao.js";
alert("welcome to the mato");

const negociacao = new Negociacao(new Date(), 10, 1000);
console.log(negociacao.quantidade);
