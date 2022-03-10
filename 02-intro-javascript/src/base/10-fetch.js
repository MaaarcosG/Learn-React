// const nombre = 'Marcos';
// const doc = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference'
// console.log(`Hola, ${nombre}`);

 const api_key = 'fEpAgNk8ItP7kDVXl3sQtzP9MEE66Yri';

 const http_call = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
 
 http_call
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })
    .catch(console.warn);