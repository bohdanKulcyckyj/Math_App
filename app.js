const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const resultContainer = document.querySelector(".result-container");
//Převod Object na Array
const destructuredFuncObject = Object.keys(functionsContainer).map((key) => [key, functionsContainer[key]]);;
console.log(destructuredFuncObject);
const searchData = "";
//Vkládá seznam funkcí
for(let i = 0; i < destructuredFuncObject.length; i++) {
    let addOption = `<div class="option">
                    <p>${destructuredFuncObject[i][1].name}</p>
                 </div>`;
    optionsContainer.innerHTML += addOption;
}
//Vkládá odkaz na funkci
let optionsList = document.querySelectorAll(".option");
for(let i = 0; i < optionsList.length; i++) {
    optionsList[i].addEventListener('click', () => {
        startingFunction(destructuredFuncObject[i][1]);
        console.log(destructuredFuncObject[i][1]);
    });
}

resultContainer.classList.add("hide");

function startingFunction({name, inputs, method}) {
    while(resultContainer.hasChildNodes()) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
    //resultContainer.innerHTML += calculation;
    selected.innerHTML = name;
    optionsContainer.classList.remove("active");
    resultContainer.classList.remove("hide");
    //console.log(name);
    for(let i = 0; i < inputs.length; i++) {
        let currentInput = `<label for="${inputs[i]}" class="function-label">${inputs[i]}</label><input id="input-${i}" name="${inputs[i]}" />`;
        resultContainer.innerHTML += currentInput;
    }

    let button = `<button class="function-button" id="trigger-function" onclick="${method}">Spočitat</button>`;
    resultContainer.innerHTML += button;
}
//Event Listeners
selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    resultContainer.classList.add("hide");
});
document.querySelector(".head-wrapper").addEventListener("click", () => {
    window.location.reload();
});