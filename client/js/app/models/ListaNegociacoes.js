class ListaNegociacoes
{
    constructor(amdlh)
    {
        this._negociacoes = [];
        this._amdlh = amdlh;
        //this._contexto = contexto;
    }
    adiciona( negociacao )
    {
        this._negociacoes.push( negociacao );
        this._amdlh(this);
        //Reflect.apply(this._amdlh,this._contexto,[this]);
    }
    get negociacoes()
    {
        return [].concat( this._negociacoes );
    }
    esvazia()
    {
        this._negociacoes = [];
        this._amdlh(this);
        //Reflect.apply(this._amdlh,this._contexto,[this]);
    }
}