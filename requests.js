const baseURL = 'https://reqres.in/api';

const errorURL = 'https://reqres.in/api/unknown/23';
const token = 'asdfihsdfui2hieorufh2oeff2errft';

// GET, POST, PUT, PATCH, DELETE
const getRequest = async () => {
try{
    const response = await fetch(`${baseURL}/users?page=2`, {
        method: 'GET',
        headers: { token: token },
    });

    // const response = await fetch(errorURL);

    // console.log('RESPONSE', response);
    const json = await response.json();
    // console.log('JSON', json);
    // Recorremos 'data' que es donde viene la info que queremos y por cada uno, creamos un elemento h3
    // y le asignamos de texto el elemento que estamos recorriendo en el momento y se lo añadimos al div 'caja'
    json.data.forEach( (person) => {
        const h3 = document.createElement('h3');
        const text = `Id: ${person.id}, name: ${person.first_name}, lastName: ${person.last_name}`;
        h3.innerText = text;
        caja.appendChild(h3);
    });
}catch(error) {
    alert(error);
}

}

const postRequest = async () => {
    try {
        const response = await fetch(`${baseURL}/users`, {
            method: 'POST',
            // headers: { token },
            body: {
                email: "example@gmail.com",
                password: "pass12345"
            }
        });
    } catch( error ) {

    }
}

// getRequest();

// GET, POST, PUT, PATCH, DELETE
// https://ejemplo.com => GET //
// https://ejemplo.com => POST



//GET sirve para pedir https://facebook.com/api/photos headers.token => pepe, voy a darle las fotos de pepe

//POST https://facebook.com/api/photos => POST sirve para crear, 

//2 grupos en las llamadas al back ( HTTP VERBS )

// grupo 1 => Son los que NO TINENE body
// GET, DELET
// URL, HEADER, VERB

// grupo 2 => Son los que TINENE body
// POST, PATCH, PUT
// URL, HEADER, VERB, BODY

// users
// name: pedro, age: 40

// id: 1, name: pan, price: 34
// id: 2, name: lavandina, price: 40
// id: 3, name: jabon, price: 30


//CRUD

// Create  READ      Update     Delete
// POST    GET     PUT/PATCH    DELETE