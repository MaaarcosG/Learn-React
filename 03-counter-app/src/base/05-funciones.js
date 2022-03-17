const saludar = function (data){
    return `Hola soy ${data}`;
};

const saludar2 = (data) => {
    return `Hola soy ${data}`
};

const saludar3 = (data) =>  `Hola soy ${data}`;

export const getUser = () => ({
    uid: 'ABCD123',
    username: 'EL_MAESTRO'
});

// TAREAAAS
export const getUserActive = (nombre) =>
    ({
        uid: 'ABCD123',
        username: nombre
});
