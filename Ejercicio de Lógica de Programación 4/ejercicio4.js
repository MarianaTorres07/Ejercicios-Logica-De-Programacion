/* Crear un programa en `JavaScript` que realice lo siguiente:

- Input
  - Solicitar por prompt o input un número.
  


- Output
  - Imprimir por consola o DOM la serie de fibonacci dependiendo el número recibido.
--- 

Input:
```
3
```
Output:
``` 
0, 1, 1
```

## Consideraciones


- Identificar si los números ingresados son de tipo `number`, en caso contrario debe mostrarse un mensaje de error y volver a solicitar los datos.
- Debe imprimirse la serie de Fibonacci dependiendo del número, es decir, si el programa recibe un 10, debe mostrar 10 números de la serie de Fibonacci.
- La `serie de Fibonacci` es una secuencia infinita de números naturales; a partir del 0 y del 1, se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores, de manera que la sucesión de Fibonacci del numero 10 es: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
- Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
- Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo `HTML` y enlazar tu script.*/

let num = parseInt(prompt("Ingrese un numero"));

if(isNaN(num)){
    //alerta, si lo ingresado es diferente a algun numero
    alert("Porfavor ingrese valores numericos");
    //...si es un numero
}else{//...entonces... hacer lo siguiente....   



function fibonacci(num){
    //inicializamos con un arreglo vacio 
    result = [];
    for(let i = 0; i< num; i++){
        //si i es igual a 0...
        if(i == 0){
            //entonces, se inserta 0 al array
            result.push(0);
            //si i es igual a 1...
        }else if(i == 1){
            //entonces, se inserta 1 al array
            result.push(1);
        }else{
            result.push(result[result.length -1] + result[result.length -2]);
        }
        
    }
    //Convertir el array en una cadena de textos
    let serie = result.toString();
    //imprimir en consola la cadena de texto de la serie de fibonacci
    console.log(serie);

    //invocar la funcion
}fibonacci(num);

} //fin del else
