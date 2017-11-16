class Negociacao {
    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    get obtemVolume() {
        return this.quantidade * this.valor;
    }
    get data(){
        return new Date(this._data.getTime()); 
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }

}
class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    obtemNomeCompleto() {
        return this._nome + " " + this._sobrenome;
    }
}
    
class Conta {
    constructor(titular, conta) {
        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0;
    }
    deposita(valor) {
        console.log('Valor depositado: %d', valor);
        this._saldo += valor;
    }

    get titular(){
        console.log('Titular da Conta: %s',this._titular);
        return this._titular;
    }
    get conta(){
        console.log('Número da Conta: %s',this._conta);
        return this._conta;
    }
    get saldo(){
        console.log('Saldo da Conta: %s',this._saldo);
        return this._saldo;
    }
}