import fs from "fs"

function funcionalidad(array, condicion) {
    // SI NO CUMPLE ALGUNA CONDICION, SIGUE EL CURSO 
    if (typeof condicion !== 'string' || !['number', 'string', 'boolean'].includes(condicion))
        return 'Error: Condición no válida.';

    // SI EL ARRAY NO ESTA VACÍO, SIGUE EL CURSO
    if (array.length === 0)
        return 'Error: No hay datos que coincidan con la condición.';

    //    Utilizo el filter, primero para comparar con el tipo de dato, luego agrego otra condicion para evaluar
    //  que el dato no este repetido, ya que el metod indexOf pregunta por la primera aparicion, si no coinciden los indices, 
    //  interpreta que ya fue agregado {array.filter(e,index)=> array.indexOf(e)===index}, evitando repetidos, y finalmente el array de 
    //  numeros es ordenado de manera ascendente con el metodo sort y una funcion flecha pasada por parámetro.

    const arrayOrdenado = array.filter((e, index) => typeof e == condicion && array.indexOf(e) === index).sort((a, b) => a - b)

    // Si va todo Ok, procedo a guardar los datos del Array, en el txt
    const contenido = arrayOrdenado.join('\n').toString()
    fs.writeFileSync('contenidoArray.txt', contenido)
    const file = fs.readFileSync('contenidoArray.txt', "utf-8")
    console.log(file)
}
export default {
    funcionalidad
}
