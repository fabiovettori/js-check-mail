// Esercitazione 1: Check lista email
// Creare un array con un insieme di indirizzi email.
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)

var databaseBoolean = [
'fraancesco.bello@gmail.com',
'thebertsinfo@gmail.com',
'nforgemark609@gmail.com',
'caudek.jacopo@gmail.com',
'rocco.chiarella.rc@gmail.com',
'fabio.vettori.ing@gmail.com',
'marco.chianese93@gmail.com',
'crimi.patrizia@gmail.com',
'sabrinacunsolo85@gmail.com',
'fd060862@gmail.com',
'debiasealba@gmail.com',
'annalisadesantis770@gmail.com',
'detaddeo.d@gmail.com',
'manuel.altaclass@gmail.com',
'danilodegortes@gmail.com',
'giacomo.1936@gmail.com',
'francesconliner95@gmail.com',
'alessandrochb@gmail.com',
'maurizio.faedda1@gmail.com',
'valerio.farina.1994@gmail.com',
'carmelo.ferraro991@gmail.com',
'alefurio93@gmail.com',
'emphigie10@gmail.com',
'mark.88g@gmail.com',
'lombardo.stanislao94@gmail.com',
'magrolorenzo@gmail.com',
'manfredi.marrone@gmail.com',
'ivan.mincione92@gmail.com',
'99m.daoud@gmail.com',
'valenovarino@gmail.com',
'carminepepiciello@gmail.com',
'francesco.savignano96@gmail.com',
'robertasciortino.ag@gmail.com'];

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
