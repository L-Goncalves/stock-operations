class negociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._mensagemView = new MensagemView('#mensagemView');
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(e) {
        e.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.add(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação efetivada com sucesso!');
    }
}
