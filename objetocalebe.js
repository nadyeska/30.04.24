class Calebe {
    constructor (site) {
        this.site = site;// variável de interface
        //ações
    }

    exibirSite () {
        window.open(this.site);
        //ações
    }
}

var novoCalebe = new Calebe ("https://padrepauloricardo.org/");
novoCalebe.exibirSite();