let inp = document.querySelectorAll(`form label input`);

let form = document.querySelector(`form`);

form.addEventListener("change", (e) => {
    document.body.style.backgroundColor = e.target.value;
});

/*  */

let inputText = document.querySelector("#inputText");

inputText.oninput = function() {
    result.innerHTML = inputText.value;
};
const lengthValue = Number(inputText.dataset.length);

inputText.addEventListener("blur", () => {
    if (inputText.value.length >= lengthValue) {
        inputText.style.outline = "1px solid lightgreen";
    } else {
        inputText.style.outline = "1px solid red";
    }
})

/*  */

let fontINp = document.querySelector("#font");
let span = document.querySelector("#span");

fontINp.oninput = function() {
    span.style.fontSize = fontINp.value + 'px';
};