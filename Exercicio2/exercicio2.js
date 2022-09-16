//Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

let lados =  Number (prompt("Insira o  tamanho do lado de um quadrado"))
let resultado = Math.pow (lados , 2)
alert('Área do quadrado  ' + resultado)
resultado = lados * 4
alert ('Perimetro do  quadrado é:' + resultado)