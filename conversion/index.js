const text = document.querySelector("#num");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn");


btn.addEventListener("click", () => {

        var myStr = new RegExp('^[0-9]+$');

    if (myStr != "") {

        output.innerText = numberToWords.toWords(text.value);
    } else {
        output.innerHTML = "Invalid";
    }



});