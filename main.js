const screen1 =  document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click',handleResetClick)

   
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");


    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        document.querySelector(".screen2 h2").classList.remove("hide");


        
    }
     inputNumber.value = ""
    xAttempts++;

    

}

function handleResetClick() {
   toggleScreen()
    xAttempts = 1;
    

}

function toggleScreen() {
        
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
