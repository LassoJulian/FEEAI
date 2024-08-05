/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function operarNumeros(num1, num2){
    /*
        -- La función recibe dos argumentos.
        -- El argumento "num1" recibe un número en forma de string Ej. "5".
        -- El argumento "num1" recibe un número en forma de string Ej. "10".
    */

    /*   
       Al final, la función debe retornar un vector que tendra en la primera posicion, 
       el resultado de la suma en forma de número, y en la segunda posición tendrá el
       resultado de la resta en forma de número.
    */

    /*
                              --EJEMPLO--
        *operarNumeros("5", "20") la función deve devolver [25, -15].
        *operarNumeros("30", "30") la función deve devolver [60, 0].
        *operarNumeros("0", "0") la función deve devolver [0, 0].
    */

                         /*  Tú código aquí abajo */

      let resultado = []
      let n1 = parseInt(num1)
      let n2 = parseInt(num2);
      resultado.push (n1+n2)
      resultado.push (n1-n2)
      return resultado;

      // Converti los datos de string a numeros para asegurar un correcto trabajo con ellos.
      // Si no los hubiera convertido la operación se hubiese tomado por concatenación de string con un resultado distinto.

}

module.exports = operarNumeros; 