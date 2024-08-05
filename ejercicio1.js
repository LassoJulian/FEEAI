/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

/*
  Una empresa necesita saber si un trabajor va a recibir un inecntivo en su salario,
  esto se determina teniendo en cuenta si cumplió con la meta de producción semanal
*/

function incentivo(produccion, meta) {
    /*  
        --La funcion recibe dos argumentos.
        --El argumento "produccion" recibe el numero de unidades 
          producidas en la semana por el operario.
        --El argumento "meta" recibe el numero de unidades
          establecidos por la empresa como meta u objetivo semanal */

    /* Si el operario cumplió con la meta semanal, la funcion debe retornar true, de lo 
     contrario devuelve false.Si en la produccion se recibe un valor 
     negativo o en 0, se deberá retornar un null 
    */
   

    /*
                               -- EJEMPLO --
        *incentivo(5, 10) se debe retornar false porque no cumplió con la meta.
        *incentiv0(10, 10) se debe retornar true porque cumplió con la meta.
    */

                                   /*  Tú código aquí abajo */

   if (produccion<=0) return null;

   return produccion>=meta;

}

console.log(incentivo(10, 10)); // true
console.log(incentivo(5, 10));  // false
console.log(incentivo(0, 10));  // null
console.log(incentivo(-1, 10)); // null

module.exports = incentivo