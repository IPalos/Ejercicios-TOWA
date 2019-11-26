let personas = [
        {name:'Ana',
        age:18,
        materias:[
                {title: 'Fisica', avg:10}
                ]
        },
        {name:'Pedro',
        age:15,
        materias:[ 
                {title: 'Fisica', avg:5},
                {title:'Matematicas',avg:7}
                ]
        },
        {name:'Maria',
        age:21,
        materias:[ 
                {title: 'Fisica',avg:5},
                {title:'Matematicas',avg:8}
                ]
        }

]

const reprobados = persona => persona.materias.some(materia => materia.avg <6 );


//devolver un objeto con la caracteristica ('Nombre': $nombre, 'reprobadas': $ reprobadas)

//sumar las edades de los estudiantes mayores a 18
const olderPersons = personas.filter(persona => persona.age >17);

let totalAge =olderPersons.map(person => person.age);


console.log(totalAge.reduce((accum,next) => { 
  return accum+next
}));



const personList = personas.map((persona,materia) =>{
  return {'Nombre: ':persona.name, 'Reprobadas: ':persona.materias}
})

const matReprobadas = materia => materia.avg<6;
const personaReprobada= personas.filter(persona => persona.materias.filter(matReprobadas));


