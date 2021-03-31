const text = document.querySelector("#num");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn");


btn.addEventListener("click", () => {

        var validate = text.value;

        if(validate == ""){
            output.innerHTML = "Please input the number";
        }else if (output.innerHTML = numberToWords.toWords(text.value)){
            output.innerHTML = "Letter is invalid";
        }else{
            output.innerHTML = numberToWords.toWords(text.value)
        }

        


});
