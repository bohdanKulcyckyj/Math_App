function kontrola() {
    for(let i = 0; i < arguments.length; i++) {
        let argument = arguments[i];
        if(argument === "") {
            return window.alert("Vyplňte prosím všechná pole")
        }
    }
    while(resultContainer.hasChildNodes()) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
    return;
}


function slozeneUroceni() {
    let jistina = document.querySelector("#input-0").value;
    let urok = document.querySelector("#input-1").value / 100;
    let roky = document.querySelector("#input-2").value;

    let vysledek = jistina * (1 + urok) ** roky;
    vysledek = vysledek.toFixed(2);

    kontrola(jistina, urok, roky);

    let zobrazeniVysledku = `<h2>Postup: ${jistina} * (1 + ${urok})<sup>${roky}</sup></h2>
    <h1>Výsledek: ${vysledek} Kč</h1>`;
    resultContainer.innerHTML += zobrazeniVysledku;
}

function vypocetRychlosti() {
    let vzdalenost = document.querySelector("#input-0").value;
    let cas = document.querySelector("#input-1").value;

    let vysledek = vzdalenost / cas;
    vysledek = vysledek.toFixed(2);

    kontrola(vzdalenost, cas);

    let zobrazeniVysledku = `<h2>Postup: ${cas} / ${vzdalenost}</h2>
    <h1>Výsledek: ${vysledek}</h1>`;
    resultContainer.innerHTML += zobrazeniVysledku;
}

function koncentraceVzorku() {
    let hodnota = document.querySelector("#input-0").value;
    let prumer = document.querySelector("#input-1").value;
    let koncentrace = document.querySelector("#input-2").value;

    let vysledek = hodnota / prumer * koncentrace;
    vysledek = vysledek.toFixed(2);

    kontrola(hodnota, prumer, koncentrace);

    let zobrazeniVysledku = `<h2>Postup: ${hodnota} / ${prumer} * ${koncentrace}</h2>
    <h1>Výsledek: ${vysledek}</h1>`;
    resultContainer.innerHTML += zobrazeniVysledku;
}

function vypocetPrumeru() {
    let cisla = document.querySelector("#input-0").value;
    seznamCisel = cisla.split(" ");
    console.log(seznamCisel);

    let vysledek = seznamCisel.reduce((total, number) => total + parseFloat(number), 0) / seznamCisel.length;

    kontrola(cisla);

    let zobrazeniVysledku = `<h2>Postup: (${seznamCisel.join("+")}) / ${seznamCisel.length}</h2>
    <h1>Výsledek: ${vysledek}</h1>`;
    resultContainer.innerHTML += zobrazeniVysledku;
}

function faktorial() {
    let cislo = document.querySelector("#input-0").value;
    let vysledek = 1;
    let rozkladFaktorialu = [];

    kontrola(cislo);

    switch(cislo) {
        case 0 :
        case 1 :
            vysledek = 1;
            break;
        default :
            while(cislo > 0) {
                vysledek *= cislo;
                rozkladFaktorialu.push(cislo);
                cislo--;
            }
    }

    let zobrazeniVysledku = `<h2>Postup: ${rozkladFaktorialu.length > 0 ? rozkladFaktorialu.join("*") : "1" }</h2>
    <h1>Výsledek: ${vysledek}</h1>`;
    resultContainer.innerHTML += zobrazeniVysledku;
}

function navratnostInvestice() {
    let vydaj = document.querySelector("#input-0").value;
    let prijem = document.querySelector("#input-1").value;

    let vysledek = vydaj / prijem;
    vysledek = vysledek.toFixed(2);

    kontrola(vydaj, prijem);

    let zobrazeniVysledku = `<h2>Postup: ${vydaj} / ${prijem}</h2>
    <h1>Výsledek: ${vysledek} let</h1>`;
    resultContainer.innerHTML += zobrazeniVysledku;
}