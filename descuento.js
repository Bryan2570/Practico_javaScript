function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento ) / 100;

        return parseInt(precioConDescuento);
}

const coupons = [
    "Televisor",
    "Lap top",
    "Celular",
];

        function onClickButtonDiscount() {
            const inputPrice = document.getElementById("inputPrice");
            const priceValue = inputPrice.value;

            const inputDiscount = document.getElementById("inputDiscount");
            const discountValue = inputDiscount.value;

            let descuento;

            switch(discountValue) {
              case coupons[0]: // "Televisor"
                descuento = 15;
              break;
              case coupons[1]: // "Lap top"
                descuento = 30;
              break;
              case coupons[2]: // "Celular"
                descuento = 25;
              break;
            }

            const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
            const resultPrice = document.getElementById("resultP")
            resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
        }


