class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instaciada!');
    }
    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Formato deve estar em : AAAA-MM-DD');
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}