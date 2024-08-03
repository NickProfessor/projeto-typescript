export class View {
    constructor(selector, escapar) {
        this.escapar = false;
        this.element = document.querySelector(selector);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            //protege nosso código fazendo com que seja removido todo script no innerHTML
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }
}
// essa classe é basicamente um modelo para as classes "parecidas" copiarem sua estrutura básica.
// uma classe abstrata não consegue ser instanciada DIRETAMENTE!
// um método abstrato faz com que a classe filha seja obrigada a chamar esse método em algum momento
