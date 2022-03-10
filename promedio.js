const listaPrecio = [
    100,
    200,
    500,
    400,
    300,
]


function calcularMediaAritmetica(lista){
    //let sumaLista = 0;
    for (let i = 0, i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    // const sumaLista = lista.reduce( 
    //     function (valorAcumulado = 0, nuevoElemento){
    //         return valorAcumulado + nuevoElemento;
    //     }
    // )

    const promedioLista = sumaLista / lista.length;

    const parrafoM = document.getElementById("resultM")

    parrafoM.innerText = "La media aritmetica es: " + promedioLista;
}

    // function calcularMedia() {
    //     const inputM = document.getElementById("inputMedia");
    //     const valueM = inputM.value;

       
    
    // }