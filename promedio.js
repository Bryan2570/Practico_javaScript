// const listaPrecio = [
//     100,
//     200,
//     500,
//     400,
//     300,
// ]


// function calcularMediaAritmetica(lista){
//     // let sumaLista = 0;
//     // for (let i = 0, i < lista.length; i++){
//     //     sumaLista = sumaLista + lista[i];
//     // }
//     const sumaLista = lista.reduce( 
//         function (valorAcumulado = 0, nuevoElemento){
//             return valorAcumulado + nuevoElemento;
//         }
//     )

//     const promedioLista = sumaLista / lista.length;

//     const parrafoM = document.getElementById("resultM")

//     parrafoM.innerText = "La media aritmetica es: " + promedioLista;
// }

//     // function calcularMedia() {
//     //     const inputM = document.getElementById("inputMedia");
//     //     const valueM = inputM.value;

       
    
//     // }


let lista =[];
let listado = document.getElementById("listado");
let dato = document.getElementById("numeroLista");
let resultado = document.getElementById("resultado");
let elementos = document.getElementById("contenedorLista");


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
    calcularPromedio();
  
       
}
function limpiar(){
   
    lista = [];
    listado.innerText = `La lista está vacía`;
    resultado.innerText = `No hay ningun elemento en la lista`;
    elementos.style.display="none";
}

function calcularPromedio(){
    if(lista.length>=1){
        const sumaLista = lista.reduce(
            function (valorAcumulado, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );  
        promedio = sumaLista/lista.length
        resultado.innerText = `El promedio de la lista es: ${promedio}`;
        }
        else{
            resultado.innerText = `No hay ningun elemento en la lista`;
        }
}