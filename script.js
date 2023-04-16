const input_data = document.querySelector("input")
const btn = document.querySelector("button")
const result_data = document.getElementById("data")

const show_result = ()=> {
    const data = input_data.value
    const decimal = parseInt(data, 2)
    if (data == "") {
        alert("Informe um número!")
    } else {
        result_data.innerHTML = decimal
    }
    
}

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    show_result()
})

input_data.addEventListener("keyup", (event)=>{
    if (event.keyCode == 13) {
        show_result()
    }    
})

input_data.addEventListener("keypress", (event) => {
    let key = event.which; //captura o código de cada tecla
    if (key !== 48 && key !== 49) { //48 representa o 0 e 49 o 1
      event.preventDefault(); //impede que a ação seja realizada
    }
  });