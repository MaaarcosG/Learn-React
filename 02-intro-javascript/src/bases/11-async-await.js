// const nombre = 'Marcos';
// const doc = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference'
// console.log(`Hola, ${nombre}`);

const tomarImagen = async() => {
    try {
        const apiKey = 'fEpAgNk8ItP7kDVXl3sQtzP9MEE66Yri';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        console.error(error)
    }
}

 tomarImagen(); 