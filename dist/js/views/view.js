export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
// essa classe é basicamente um modelo para as classes "parecidas" copiarem sua estrutura básica.
// uma classe abstrata não consegue ser instanciada DIRETAMENTE!
// um método abstrato faz com que a classe filha seja obrigada a chamar esse método em algum momento
