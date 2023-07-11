/*# Ejercicio 5

## Instrucciones

- Crear un programa en `JavaScript` que realice lo siguiente:

- Pedir al usuario por prompt o input un número del 1 al 100 para adivinar un número secreto.


- Input
  - El dato ingresado por el usuario (número del 1 al 100).
  


- Output
  - Imprimir por consola o DOM un mensaje diciendo "Ups, el número secreto es incorrecto, vuelve a intentarlo." y volver a solicitarle que ingrese un número, en caso de no adivinar el número secreto.
  - Imprimir por consola o DOM un mensaje diciendo "Felicidades, adivinaste el número secreto." en caso de adivinar el número secreto.
  - Imprimr por consola o DOM la lista de númros introducidos antes de adivinar el número secreto.

--- 


## Consideraciones


- Identificar si los números ingresados son de tipo `number`, en caso contrario debe mostrarse un mensaje de error y volver a solicitar los datos.
- El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
- Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
- Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo `HTML` y enlazar tu script.
*/

//declaro y inializo mis variables
let contador = 0;
let dato = Math.floor(Math.random() * 100) + 1;
let numero;


setTimeout(() => {
//ciclo
do{
    //Pedir un numero al usuario
    numero = parseInt(prompt("Ingrese un numero"));
    //Verificar si el numero es un numero
    if(isNaN(numero)){
        alert("Porfavor ingrese valores numericos");
        continue;
    }

    if(numero> dato){
        alert("\nUps, el número secreto es incorrecto, vuelve a intentarlo. \nDigite un numero menor");
    }
    if(numero < dato){
        alert("Ups, el número secreto es incorrecto, vuelve a intentarlo. \nDigite un numero mayor");
    }
    contador++;

}while(numero !== dato);

alert("\nFelicidades, adivinaste el número secreto.");
alert("\nNumero de intentos " + contador);
}, 100);
