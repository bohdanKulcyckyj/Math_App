const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const resultContainer = document.querySelector(".result-container");

let addOption;
let functionsContainer = [{name: "Složené úročení", id: "funkce1", method: slozeneUroceni1()}];

for(let i = 0; i < functionsContainer.length; i++) {
    addOption = `<div class="option" onclick=",${functionsContainer[i].method()}">
                    <input type="radio" class="radio" name="category" id="${functionsContainer[i].id}" />
                    <label for="${functionsContainer[i].id}">${functionsContainer[i].name}</label>
                 </div>`;
    optionsContainer.innerHTML += addOption;
}

resultContainer.classList.add("hide");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(item => {
    item.addEventListener("click", () => {
        selected.innerHTML = item.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        resultContainer.classList.remove("hide");
    });
});


function slozeneUroceni1() {
    while(resultContainer.hasChildNodes()) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
    let calculation = `<label for="jistina">Jistina:</label>
                       <input type="number" class="func-inpt" id="inpt-1" name="jistina" />
                       <label for="urok">Úrok p.a.(v %):</label>
                       <input type="number" class="func-inpt" id="inpt-2" name="urok" />
                       <label for="roky">Počet let:</label>
                       <input type="number" class="func-inpt" id="inpt-3" name="roky" />
                        <button onclick="slozeneUroceni2()">Spočítat</button>`;

    resultContainer.innerHTML += calculation;
}

function slozeneUroceni2() {
    let jistina = document.querySelector("#inpt-1").value;
    let urok = document.querySelector("#inpt-2").value / 100;
    let roky = (document.querySelector("#inpt-3").value);
    let vysledek = jistina * (1 + urok) ** roky;
    vysledek = vysledek.toFixed(2);

    console.log(jistina);
    console.log(urok);
    console.log(roky);
    console.log(vysledek);

    while(resultContainer.hasChildNodes()) {
        resultContainer.removeChild(resultContainer.firstChild);
    }

    let zobrazeniVysledku = `<h2>Postup: ${jistina} * (1 + ${urok})<sup>${roky}</sup></h2>
                             <h1>Výsledek: ${vysledek} Kč</h1>`;
    resultContainer.innerHTML += zobrazeniVysledku;
}
