class NegociacaoController
{
    constructor()
    {
        let $ = document.querySelector.bind( document );
        this._inputData = $( '#data' );
        this._inputQuantidade = $( '#quantidade' );
        this._inputValor = $( '#valor' );
        this._nview = new NegociacaoView( $( '#negociacaoView' ) );
        /*    this._listaNegociacoes = new ListaNegociacoes( this,function ( model )
            {
                console.log( this );
                this._nview.update( model );
            } );*/
        this._listaNegociacoes = new ListaNegociacoes( model => this._nview.update( model ) );

        this._nview.update( this._listaNegociacoes );
        this._mensagem = new Mensagem();

        this._mensagemView = new MensagemView( $( '#mensagemView' ) );
        this._mensagemView.update( this._mensagem );
    }
    adiciona( event )
    {
        event.preventDefault();
        let negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona( negociacao );
        //this._nview.update( this._listaNegociacoes );

        this._mensagem.texto = 'Negociação adicionado com sucesso!';
        this._mensagemView.update( this._mensagem );


        this._limpaFormulario();

        //console.log(this._listaNegociacoes.negociacoes);
    }
    _criaNegociacao()
    {
        return new Negociacao(
            DateHelper.textoParaData( this._inputData.value ),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    _limpaFormulario()
    {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
    apaga()
    {
        this._listaNegociacoes.esvazia();
        //this._nview.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociações apagadas com sucesso!';
        this._mensagemView.update( this._mensagem );
    }
}