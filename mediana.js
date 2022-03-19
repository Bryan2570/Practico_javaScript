let lista =[];
let listado = document.getElementById("listado");
let dato = document.getElementById("numeroLista");
let resultado = document.getElementById("resultado");
let elementos = document.getElementById("contenedorLista");

function calcularMediaAritmetica(lista){
               
    const sumaLista = lista.reduce( 
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function limpiar(){
    lista = [];
    listado.innerText = `La lista está vacía`;
    resultado.innerText = `No hay ningun elemento en la lista`;
    elementos.style.display="none";
}

function agregarLista(){
     
    if(dato.value != ""){
        elementos.innerText="Los números en la lista son:" ;
        lista.push(parseInt(dato.value));
        listado.innerText = `Tu lista lleva: ${lista.length} elemento(s)`;
    
        lista.forEach(elemento=>{
            elementos.innerText+= "\n"+elemento  ;
        });
        elementos.style.display="inline";
    }
    else{
       console.log("introduce un número válido");
    }
    calcularMediana(lista);
}

    function esPar(numero1){
        if (numero1 % 2 === 0){

            return true;
        }
        else {
            return false;
        }
    }

    let mediana;
    
    function calcularMediana (lista) {
        const listaOrdenada = lista.sort(function (a, b) { return a - b })  //metodo sort para ordenar
        const mitalLista = parseInt(listaOrdenada.length / 2);
    
    if (esPar(lista.length) ){
        const elemento1 = lista[mitalLista - 1];
        const elemento2 = lista[mitalLista];

        const promedioElementos = calcularMediaAritmetica(
            [elemento1,
            elemento2,
            ]);
            mediana = promedioElementos;
    }
    else {
        mediana = listaOrdenada[mitalLista];
        resultado.innerText = `La Mediana es: ${mediana}`;
    }

    }