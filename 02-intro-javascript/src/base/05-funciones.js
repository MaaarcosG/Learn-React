const saludar = function (data){
    return `Hola soy ${data}`;
};

const saludar2 = (data) => {
    return `Hola soy ${data}`
};

const saludar3 = (data) =>  `Hola soy ${data}`;

console.log(saludar('Goku'));
console.log(saludar2('Veggeta'));
console.log(saludar3('Gohan'));

const getUser = () => ({
    uid: 'ABCD123',
    username: 'EL_MAESTRO'
});

console.log(getUser());

// TAREAAAS
const getUserActive = (nombre) =>
    ({
        uid: 'ABCD123',
        username: nombre
    });

const usuarioActivo = getUserActive('Marcos');
console.log(usuarioActivo);