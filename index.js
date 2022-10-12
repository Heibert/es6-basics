//TIPO DE INDEPENDECIAS
//COMMONJS 
//ES6MODULE
//Tipos de variable
//COLLBACK = una funcion que se ejecutara al interior dwe otra funcion cuando esta ultimo se invoque
const colors = require(`colors`)
const materias = require("./materias")



//map: es una funcion de metodo de arreglos en es6, crea un arreglo apartir de otro
const profesores = materias.map((materia)=>{
    return materia.instructor
})
console.log(profesores)
//find: localizar elementos de un arrego
//Que cumplan cierta condicion

//find= primera ocurrencia
//filter= todas las ocurrencias

const PHP = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})
//crear nueva materia:
materias.push({
    nombre: 'java',
    instructor: "Jorge Celedon",
    notas: [
        3.4,4
    ],
    tipo: "técnica"
})

console.log(PHP)
//Editar
console.log('Editando las notas de PHP basico')
let Indice = materias.findIndex(materia => materia.instructor === "Cristian Buitrago");
console.log('Antes de editar:', materias[1].notas)
console.log('Despues de editar:',materias[1].notas = '1')
//recorrido del arreglo
console.log('Arreglo sin editar')
materias.forEach((materia)=>{
    console.log(`Nombre:${materia.nombre} Tipo:${materia.tipo}`.bgBlue)
    console.log()
});
//Eliminar de un arreglo
console.log('Eliminando el primer dato del arreglo')
let eliminados = materias.splice(0,1);
materias.forEach((materia)=>{
    console.log(`Nombre:${materia.nombre} Tipo:${materia.tipo}`.bgBlue)
    console.log()
});