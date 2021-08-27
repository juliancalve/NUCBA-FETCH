const caja = document.querySelector('#caja');
const baseURL = 'https://reqres.in/api';

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const submitButton = document.querySelector('#submit');

// SIN BODY
const getRequest = async () => {
    try {
        const response = await fetch(`${baseURL}/users?page=2`, {
            method: 'GET'
        });
        const json = await response.json();
        console.log(json.data);
    } catch(error) {
        console.log('error', error);
    }
}

// getRequest();

const deleteRequest = async () => {
    try { 
        // { message: 'salio bien, el 2 se borro' }
        const response = await fetch(`${baseURL}/users/2`, {
            method: 'DELETE'
        });
        console.log('Salio OK');
    } catch(error) {
        console.log('error', error);
    }
}

// deleteRequest();

// CON BODY
const postRequest = async (name, job) => {
    try {
        const response = await fetch(`${baseURL}/users`, {
            method: 'POST',
            body: {
                name,
                job
            }
        });
        const json = await response.json();
        console.log(json);
    } catch( error ) {
        console.log('error', error);
    }
}

// postRequest();

const putRequest = async () => {
    try {
        const response = await fetch(`${baseURL}/users/2`, {
            method: 'PUT',
            body: {
                name: "morpheus",
                job: "zion resident"
            }
        });
        const json = await response.json();
        console.log(json);
    } catch( error ) {
        console.log('error', error);
    }
}

// putRequest();

const patchRequest = async () => {
    try {
        const response = await fetch(`${baseURL}/users/2`, {
            method: 'PATCH',
            body: {
                name: "morpheus",
                job: "zion resident"
            }
        });
        const json = await response.json();
        console.log(json);
    } catch( error ) {
        console.log('error', error);
    }
}

// patchRequest();


const onSubmit = () => {

    const name = nameInput.value;
    const job = jobInput.value;

    console.log('name', name);
    console.log('job', job);

    postRequest(name, job);

}

submitButton.addEventListener('click', onSubmit);