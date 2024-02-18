var kunder = []

function skrivUtBiletter() {
    var utskrift = ""
    for (var i = 0; i < kunder.length; i++) {
        utskrift += kunder[i].antall + " " + kunder[i].fornavn + " "+ kunder[i].telefonnr + " " + kunder[i].epost + "<br>";
    }
    document.getElementById("alleBiletter").innerHTML = utskrift;
}
function riktigInput() {
    var filmValgt = document.getElementById("filmer").value;
    var antall = document.getElementById("antall").value;
    var fornavn = document.getElementById("fornavn").value;
    var etternavn = document.getElementById("etternavn").value;
    var telefonnr = document.getElementById("telefonnr").value;
    var epost = document.getElementById("epost").value;

    var filmFeil = document.getElementById("filmFeil");
    var antallFeil = document.getElementById("antallFeil");
    var fornavnFeil = document.getElementById("fornavnFeil");
    var etternavnFeil = document.getElementById("etternavnFeil");
    var telefonnrFeil = document.getElementById("telefonnrFeil");
    var epostFeil = document.getElementById("epostFeil");
    

    var gyldig = true;

    if (filmValgt == "velgFilm") {
        filmFeil.textContent = "Velg en film"; // bruker ikke tegn som æøå i utskriften
        gyldig = false;
    } else {
        antallFeil.textContent = "";
    }    

    if (isNaN(antall) || antall <= 0) {
        antallFeil.textContent = "Skrive noe inn i antall";
        gyldig = false;
    } else {
        antallFeil.textContent = "";
    }

    // Valider fornavn
    if (!/^[a-zA-Z]+$/.test(fornavn) ||	fornavn.length < 3) {
        fornavnFeil.textContent = "Skrive noe inn i fornavnet";
        gyldig = false;
    } else {
        fornavnFeil.textContent = "";
    }

    // Valider etternavn
    if (!/^[a-zA-Z]+$/.test(etternavn)) {
        etternavnFeil.textContent = "Skrive noe inn i etternavnet";
        gyldig = false;
    } else {
        etternavnFeil.textContent = "";
    }

    // Valider telefonnummer
    if ((telefonnr.replace(/\s/g, "").length !== 8)) { // sjekker om telefonnr uten mellomrom har en lengde på 8
        telefonnrFeil.textContent = "Skrive et gyldig telefonnr";
        gyldig = false;
    } else {
        telefonnrFeil.textContent = "";
    }

    if (epost.trim().length === 0) { // sjekker at lengden på inputet ikke er 0
        epostFeil.textContent = "Skriv inn en e-postadresse";
        gyldig = false;
    } else if (epost.includes(" ") || !epost.includes("@")) { // sørger for at eposten ikke har mellomrom og har en @ i seg
        epostFeil.textContent = "Skriv inn en gyldig e-postadresse";
        gyldig = false;
    } else {
        epostFeil.textContent = ""; 
    }

    if (gyldig) {
        var kjop = {
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };
        kunder.push(kjop);
        skrivUtBiletter();
    }
}

function slettData() {
    kunder = []
}
