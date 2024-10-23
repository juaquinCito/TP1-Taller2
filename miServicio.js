import fs from "fs"

const array = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false]
const condicion = "number"

function funcionalidad(array, condicion) {
    // SI NO CUMPLE ALGUNA CONDICION, SIGUE EL CURSO 
    if (typeof condicion !== 'string' || !['number', 'string', 'boolean'].includes(condicion))
        return 'Error: Condición no válida.';

    // SI EL ARRAY NO ESTA VACÍO, SIGUE EL CURSO
    if (nuevoArray.length === 0)
        return 'Error: No hay datos que coincidan con la condición.';

    //    Utilizo el filter, primero para comparar con el tipo de dato, luego agrego otra condicion para evaluar
    //  que el dato no este repetido, ya que el metod indexOf pregunta por la primera aparicion, si no coinciden los indices, 
    //  interpreta que ya fue agregado {array.filter(e,index)=> array.indexOf(e)===index}, evitando repetidos, y finalmente el array de 
    //  numeros es ordenado de manera ascendente con el metodo sort y una funcion flecha pasada por parámetro.

    const arrayOrdenado = array.filter((e, index) => typeof e == condicion && array.indexOf(e) === index).sort((a, b) => a - b)

    // Si va todo Ok, procedo a guardar los datos del Array, en el txt
    arrayOrdenado = nuevoArray.join('\n')
    fs.writeFile('contenidoArray.txt', nuevoArray, (err) => { if (err) throw err; console.log('El archivo ha sido guardado!'); })
    //Mostramos el contenido del .txt, para corroborar lo hecho    
    const file = fs.readFileSync('contenidoArray.txt', "utf-8")
    console.log(file)
}
