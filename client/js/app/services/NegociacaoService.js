class NegociacaoService
{
    /*
    0: requisição ainda não iniciada
    1: conexão com o servidor estabelecida
    2: requisição recebida
    3: processando requisição
    4: requisição está concluída e a resposta está pronta
    */
    obterNegociacoesDaSemana()
    {
        return new Promise( ( resolve, reject ) =>
        {
            
            let xhr = new XMLHttpRequest();
            xhr.open( 'GET', 'negociacoes/semana' );

            xhr.onreadystatechange = () =>
            {
                if ( xhr.readyState == 4 ) {
                    if ( xhr.status == 200 ) {
                        resolve(JSON.parse( xhr.responseText )
                            .map( objeto => new Negociacao( new Date( objeto.data ), objeto.quantidade, objeto.valor ) ) );
                            alert( 'Importando negociação da semana!' );
                    } else {
                        console.log( xhr.responseText );
                        reject( alert( 'algum problema ocorreu com a importação da semana!' ));
                    }
                }
            };
            xhr.send();
        } );
    }
    obterNegociacoesDaSemanaRetrasada()
    {
        return new Promise( ( resolve, reject ) =>
        {
            
            let xhr = new XMLHttpRequest();
            xhr.open( 'GET', 'negociacoes/retrasada' );

            xhr.onreadystatechange = () =>
            {
                if ( xhr.readyState == 4 ) {
                    if ( xhr.status == 200 ) {
                        resolve(JSON.parse( xhr.responseText )
                            .map( objeto => new Negociacao( new Date( objeto.data ), objeto.quantidade, objeto.valor ) ) );
                            alert( 'Importando semana retrasada!' );
                    } else {
                        console.log( xhr.responseText );
                        reject( alert( 'algum problema ocorreu na importação da semana retrasada!' ));
                    }
                }
            };
            xhr.send();
        } );
    }
    obterNegociacoesDaSemanaAnterior()
    {
        return new Promise( ( resolve, reject ) =>
        {
            
            let xhr = new XMLHttpRequest();
            xhr.open( 'GET', 'negociacoes/anterior' );

            xhr.onreadystatechange = () =>
            {
                if ( xhr.readyState == 4 ) {
                    if ( xhr.status == 200 ) {
                        resolve(JSON.parse( xhr.responseText )
                            .map( objeto => new Negociacao( new Date( objeto.data ), objeto.quantidade, objeto.valor ) ) );
                            alert( 'Importando!' );
                    } else {
                        console.log( xhr.responseText );
                        reject( alert( 'algum problema ocorreu!' ));
                    }
                }
            };
            xhr.send();
        } );
    }
}