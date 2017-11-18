class HttpService
{    
    /*
    0: requisição ainda não iniciada
    1: conexão com o servidor estabelecida
    2: requisição recebida
    3: processando requisição
    4: requisição está concluída e a resposta está pronta
    */
    get( url )
    {
        return new Promise( ( resolve, reject ) =>
        {
            let xhr = new XMLHttpRequest();
            xhr.open( 'GET', url );
            xhr.onreadystatechange = () =>
            {
                if ( xhr.readyState == 4 ) {
                    if ( xhr.status == 200 ) {
                        resolve( JSON.parse( xhr.responseText ) );
                    } else {
                        console.log( xhr.responseText );
                        reject( alert( xhr.responseText ) );
                    }
                }
            };
            xhr.send();
        } );
    }
}