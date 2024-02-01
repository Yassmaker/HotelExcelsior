function generatoreCarattere(length) {
    const carattere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const caratteriLength = carattere.length;
    for (let i = 0; i < length; i++) {
        result += carattere.charAt(Math.floor(Math.random() * caratteriLength));
    }
    return result;
}

function generaNuovoCodice() {
    var codiceSicurezza = generatoreCarattere(8);
    document.getElementById('CarattereCasual').textContent = codiceSicurezza;
    return codiceSicurezza;
}

document.getElementById('NuovoCode').addEventListener('click', function(event) {
    event.preventDefault();
    generaNuovoCodice(); 
});

document.getElementById('button').addEventListener("click", function(event) {
    event.preventDefault(); 

    var nome = document.getElementById('name').value;
    var cognome = document.getElementById('cognome').value;
    var email = document.getElementById('Email').value;
    var telefono = document.getElementById('Telefono').value;
    var arrivo = document.getElementById('Arrivo').value;
    var partenza = document.getElementById('Partenza').value;
    var codiceInserito = document.getElementById('code').value;
    var codiceGenerato = document.getElementById('CarattereCasual').textContent;

    var verifica = true;

    if (nome === "" || cognome === "" || email === "" || telefono === "" || arrivo === "" || partenza === "") {
        alert("Per favore, compila tutti i campi obbligatori.");
        verifica = false;
    } else if (codiceInserito !== codiceGenerato) {
        alert("Il codice di sicurezza inserito non corrisponde. Per favore, inserisci il codice corretto.");
        verifica = false;
    }

    if (verifica) {
        alert('Modulo Inviato 😊');

        setTimeout(function() {
            location.reload();
        }, 1000);
    }
});

generaNuovoCodice();
