const displayEl = document.querySelector("#display");

function appendToDisplay(input) {
    displayEl.value += input;
}

function clearDisplay() {
    displayEl.value = "";
}

function calculate( ) {
    try{
        displayEl.value = eval(displayEl.value);
    }
    catch(err) {
        console.log(err);
        displayEl.value = "error";
    }
}