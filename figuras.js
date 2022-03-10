function perimetroCuadrado(lado){
    return lado * 4;
  }

  function areaCuadrado(lado){
      return lado * lado;
  }

      function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,base){
          return parseInt(ladoTriangulo1) + parseInt(ladoTriangulo2) + parseInt(base);
      } 

        function areaTriangulo(base, altura){
          return (parseInt(base) * parseInt(altura)) / 2;
        }

          function diametroCirculo(radio){
            return parseInt(radio * 2);
          }
          const PI = Math.PI;

            function perimetroCirculo(radio){
              const diametro = diametroCirculo(radio);
              return parseInt(diametro) * PI ;
            }

              function areaCirculo(radio){
                return (parseInt(radio * radio) * PI);
              }

                function calcularPerimetroCuadrado() {
                  const input = document.getElementById("inputCuadrado");
                  const value = input.value;

                  const perimetro = perimetroCuadrado(value);
                  alert(perimetro);
                }

                  function calcularAreaCuadrado() {
                    const input = document.getElementById("inputCuadrado");
                    const value = input.value;

                    const area = areaCuadrado(value);
                    alert(area);
                  }

                    function calcularPerimetroTriangulo(){
                      const input1 = document.getElementById("inputTriangulo1");
                      const value1 = input1.value;

                      const input2 = document.getElementById("inputTriangulo2");
                      const value2 = input2.value;

                      const base = document.getElementById("inputBaseTriangulo");
                      const valorT = base.value;

                      const perimetroT = perimetroTriangulo(value1,value2,valorT) ;
                      alert(perimetroT);

                    }

                      function calcularAreaTriangulo() {
                        const base = document.getElementById("inputBaseTriangulo");
                        const valorBase = base.value;

                        const altura = document.getElementById("inputAlturaTriangulo");
                        const valorAltura = altura.value;

                        const area = areaTriangulo(valorBase,valorAltura);
                        alert("El area del triangulo es:  " + area);

                      }

                        function calcularDiametroCirculo() {
                            const radio = document.getElementById("inputRadioCirculo");
                            const valorRadio = radio.value;

                            const diametro = diametroCirculo(valorRadio);
                            alert("El diametro del circulo es:  " + diametro);
                        }

                        function calcularPerimetroCirculo() {
                          const radio = document.getElementById("inputRadioCirculo");
                          const valorRadio = radio.value;

                          const perimetro = perimetroCirculo(valorRadio);
                          alert("El perimetro del circulo es:  " + perimetro);
                        }

                        function calcularAreaCirculo() {
                          const radio = document.getElementById("inputRadioCirculo");
                          const valorRadio = radio.value;

                          const area = areaCirculo(valorRadio);
                          alert("El area del circulo es:  " + area);
                        }

                      

                   