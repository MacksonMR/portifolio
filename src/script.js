

function novaFamilia(){
    document.getElementById('novaDiv').style.display='block'
}

function novaFamiliaSalvar(){
    var select = document.getElementById("input-situacao-nova");
    var opcaoTexto = select.options[select.selectedIndex].text;
    var opcaoValor = select.options[select.selectedIndex].value;
    var Familia = document.getElementById('input-nova-familia').value;
    var Data = document.getElementById('input-data-criada').value;

    console.log('Familia: ' + Familia);
    console.log('Data: ' + Data);
    console.log(opcaoTexto);
    console.log(opcaoValor); 

    if(Familia != ""){
        console.log('diferene de vazio')
    }
    else{
        console.log('igual a vazio')
    }
}

function cancelarFamilia(){
    document.getElementById('novaDiv').style.display='none';
    document.getElementById('input-nova-familia').value = '';
    document.getElementById('input-data-criada').options = '#01/01/1990';
}

function editar(id,familia){

}