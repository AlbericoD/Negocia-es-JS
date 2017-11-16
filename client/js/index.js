console.log('capturado');
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]
console.log(campos);

document.querySelector('form').addEventListener('submit', function (event) {
    //alert('enviado');
    event.preventDefault();
    var tabela = document.querySelector('table tbody');
    console.log(tabela);
    var tr = document.createElement('tr');
    campos.forEach(function (campo) {  
        var td = document.createElement('td');
        td.textContent = campo.value;
        //console.log(td);
        tr.appendChild(td);
    });
    
    var tdVolume = document.createElement('td');
    tdVolume.textContent = (campos[1].value * campos[2].value);
    tr.appendChild(tdVolume);
    tabela.appendChild(tr);

    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});
