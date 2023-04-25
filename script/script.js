function displayRadioValue(){
    let elemento = document.getElementsByName('gender');
    for(let i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
            let div = document.getElementById('result');
            div.innerHTML = "Genêro selecionado é: " + elemento[i].value;

            if(elemento[i].value == "Masculino"){
                div.style.backgroundColor = "green"
            } else if(elemento[i].value == "Feminino"){ 
                div.style.backgroundColor = "red"
            } else {
                div.style.backgroundColor = "blue"
            }
        }
    }
}