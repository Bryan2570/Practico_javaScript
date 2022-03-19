let lista = [];

function calcularModa(lista){
    
const lista1Count = {};
//metodo map nos ayuda a recorrer nuestro arreglo
lista.map(
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else {
            lista1Count[elemento] = 1;
         }
    }
);
//Object.entries() convierte objeto en array y dentro de ese Array crea otro Array
//, se le envia el argumento que se quiere convertir en Array
    const lista1Array = Object.entries(lista1Count).sort(
        function(elementoA,elementoB){
           return elementoA[1] - elementoB[1];
        }
    );  
    const moda = lista1Array[lista1Array.length - 1];
    return moda;

}


