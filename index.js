const submitButton = document.querySelector('#submit');

const esMiFecth = () => {
    return new Promise((resolve, reject) => {
        resolve('OK');
    })
}

const enviarMail = async () => {
    try{
        const response = await esMiFecth();
        alert(response);

    } catch(err){
        alert(err);
    }
}


submitButton.addEventListener('click', enviarMail);

// La promesa sirve para crear un evento asincrono, el cual puede tardar x tiempo y devolver
// un resultado satisfactorio (resolve) o un error (reject)
const miPromesa = () => {

    const flag = true;
    return new Promise((resolve, reject) => {
        // codigo //
        if(flag) {
            resolve('salio todo OK');
        } else {
            reject('Ocurrio un error!');
        }
    });
};

const llamarMiPromesa = async () => {
    // Con el try catch, nos aseguramos de que si ocurre un error, ya sea en una promesa (llamado al back por ejemplo)
    // o con algun error logico (querer hacer un .toString() de null), poder obtener el error en el catch y dar un 
    // feedback al usuario y no generar errores
    try{
        const res = await miPromesa();

    }catch(err){
        // Lo que este en el argumento del 'reject' por ejemplo.. reject('Ocurrio un error'), es lo que va
        // a darle el valor a 'err', en este caso err seria 'Ocurrio un error'
        console.log('Esto es un error: ' + err);
    }
};
