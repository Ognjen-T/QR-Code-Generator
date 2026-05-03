const btn = document.querySelector("#btn");
const Input = document.querySelector("#Input");

function Run(){
    var text = Input.value;
    
    console.log(text);
}


btn.addEventListener("click", Run);



