const leftTextArea = document.querySelector("#leftTextArea");
const rightTextArea = document.querySelector("#rightTextArea");
const encodeButton = document.querySelector("#encodeButton");
const decodeButton = document.querySelector("#decodeButton");

runEventListeners();

function runEventListeners(){
    encodeButton.addEventListener("click", encode);
    decodeButton.addEventListener("click", decode);
}

function encode(){
    let value = leftTextArea.value.trim();

    if(value == null || value == ""){
        alert("Lütfen bir değer giriniz");
    }else{
        rightTextArea.value = btoa(value);
        leftTextArea.value = "";
    }
}

function decode(){
    if(rightTextArea.value == "" || rightTextArea.value == null){
        alert("Çözülecek bir değer yok");
    }else {
        leftTextArea.value = atob(rightTextArea.value);
        rightTextArea.value = "";
    }
}