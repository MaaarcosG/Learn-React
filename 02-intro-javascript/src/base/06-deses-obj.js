// const nombre = 'Marcos';
// const doc = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference'
// console.log(`Hola, ${nombre}`);

/** DESESTRUCTURANTE **/
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
}

// const {nombre, edad, clave} = persona;

const usarContext = ({clave, nombre, edad, rango='Capitan'}) => {
    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 14.3562,
            lng: -12.546
        }
    }
}

const { nombreClave, anios, lating:{lat, lng} } = usarContext( persona );
//const avenger = usarContext(persona);
console.log(nombreClave, anios)
console.log(lat, lng)
