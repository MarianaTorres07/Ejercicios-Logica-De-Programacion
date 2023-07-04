/*- Crear un programa en `JavaScript` que realice lo siguiente:

- Input
  - Solicitar al usuario por input o prompt la temperatura en grados Celcius.
  


- Output
  - Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Farenheit.
  - Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Kelvin.

--- 

Input:
```
45
```
Output:
``` 
Grados Fahrenheit: 113
Grados Kelvin: 318.15
```

## Consideraciones


- Identificar si los números ingresados son de tipo `number`, en caso contrario debe mostrarse un mensaje de error y volver a solicitar los datos.
- Si no conoces las fórmulas para las conversiones, puedes apoyarte de `Google`.
- Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
- Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo `HTML` y enlazar tu script.*/

//let celsius = 45;

//pedirle al usuario que ingrese la temperatura
let celsius = prompt("Ingrese la temperatura en grados Celsius");


//Validar que sean numeros
if(isNaN(celsius)){
    //alerta, si lo ingresado es diferente a algun numero
    alert("Porfavor ingrese valores numericos");
    //...si es un numero
}else{//...entonces... hacer lo siguiente....

//funcion para convertir Celsisus a fahrenheit y a kelvin
function temperatura(celsius){
    //Traer mi elemento del html (Manipulacion del DOM)
    let lista = document.querySelector("#lista");

    //Formula para convertir celsius a fahrenheit
    let fahrenheit = (celsius* (9/5) + 32);
    //formula para convertir celsius a kelvin
    let kelvin = parseFloat(celsius) + 273.15; //convertir a Float, el entero

    //Create element (quiero que esten dentro de bullet points)
    const temperaturaLista = document.createElement("p");
    //Crear el elemento 
    temperaturaLista.innerHTML = "Grados Fahrenheit: " + fahrenheit + "<br> Grados Kelvin: " + kelvin;
    //append child
    lista.appendChild(temperaturaLista);


    //Impresion en Consola
    //console.log("Grados Fahrenheit: " + fahrenheit);
    //console.log("Grados Kelvin: " + kelvin);

    //Invocar la funcion
}temperatura(celsius);
}   //cierre del else de la validación