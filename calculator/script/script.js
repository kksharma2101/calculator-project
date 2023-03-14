(function () {
    const display = document.querySelector(".displayNum");
    const inputs = document.querySelectorAll("#input-style");
    const check = document.querySelector("#check");
    const correct = document.querySelector("#correct");
    const equal = document.querySelector("#equal");


    inputs.forEach(function(input){
    input.addEventListener("click", (e) => {
        const value = e.target.dataset.num;
        display.value += e.target.value;
    })
   })

   equal.addEventListener("click", () => {
    display.value = eval(display.value);
   })

   check.addEventListener("click", () => {
    display.value = '';
   })

//    correct.addEventListener("click", () => {
//     display.value = (display.value);
//    })

}) ();