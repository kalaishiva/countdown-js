let inputNum = document.querySelector(".inputNum");
let startBtn = document.querySelector("button");
let countDownNum = document.querySelector(".count");

let countDownNumber;

//on button click---call the function every one second(1000)
function countStart() {
    countDownNumber = parseInt(inputNum.value); // Setting up the Initial Counter Number
    console.log(countDownNumber);
    setInterval(counter, 1000);

}


//reduce one number and display 
function counter() {
    if (countDownNumber <= 0) {
        clearInterval(counter);

    } else {
        countDownNumber = countDownNumber - 1;
        countDownNum.innerHTML = countDownNumber;
    }
}