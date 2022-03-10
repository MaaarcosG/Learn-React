/*
    {} --> son objetos lo que se encuentran dentro
*/
const persona = {
    nombre: 'Sergio',
    apellido: 'Aguero',
    edad: 45,
    direccion: {
        ciudad: 'Buenos Aires',
        zip: 23566,
        lat: 3.14,
        lng: 6582
    }
};

const persona2 = {...persona};
persona.nombre = 'Juan'

console.log(persona);
console.log(persona2)