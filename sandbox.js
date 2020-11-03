// Esercitazione 1: Check lista email
// Creare un array con un insieme di indirizzi email.
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)

var databaseBoolean = [
'francesco.green@gmail.com',
'rocco.blue@gmail.com',
'fabio.white@gmail.com',
'marco.red@gmail.com',
'patrizia.brown@gmail.com'];

var userEmail = prompt('Please insert your email');

var userRegistered = 0;
for (var i = 0; i < databaseBoolean.length; i++) {
    if (userEmail == databaseBoolean[i]) {
        userRegistered = 1;
    }
}
// console.log(userRegistered);

if (userRegistered == 1) {
    document.getElementById('output').innerHTML = 'User Registered';
} else {
    document.getElementById('output').innerHTML = 'User Not Found';
}
