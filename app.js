var birthDate = document.querySelector("#birth-date");
var luckyNum = document.querySelector("#lucky-num");
var btnCheck = document.querySelector("#check");
var lucky = document.querySelector("#success");
var notLucky = document.querySelector("#fail");


function checkLuck() {

let dob = birthDate.value;
let number = luckyNum.value;
dob = dob.replaceAll("-", "");

let sum = 0;
for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
}

if (sum % number === 0) {

    lucky.style.display= "block";
} 
else {
    notLucky.style.display = "block";
}
}


btnCheck.addEventListener("click", checkLuck)




