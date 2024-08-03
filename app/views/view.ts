export abstract class View<T> {
  protected element: HTMLElement;
  private escapar = false;
  constructor(selector: string, escapar?: boolean) {
    const elemento = document.querySelector(selector);
    if (elemento) {
      this.element = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM. Verifique!`);
    }
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
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
