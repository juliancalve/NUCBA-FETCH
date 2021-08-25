const baseURL = 'https://reqres.in';

const errorURL = 'https://reqres.in/api/unknown/23';

const caja = document.querySelector('#caja');
// GET, POST, PUT, PATCH, DELETE
const getRequest = async () => {
try{

    const response = await fetch(`${baseURL}/api/users?page=2`, {
        method: 'GET'
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

getRequest();