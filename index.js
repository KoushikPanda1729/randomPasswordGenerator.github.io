let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "0123456789";
let symbolSet = "~!@#$%^&*";



const upperCase = document.querySelector("#upperCase");
const lowerCase = document.querySelector("#lowerCase");
const number = document.querySelector("#numberCheck");
const symbol = document.querySelector("#Symbol");
const customGenerateBtn = document.querySelector(".customGenerateBtn");
const userLength = document.querySelector(".userLength");
const screen = document.querySelector(".screen h3");

const allInput = document.querySelectorAll(".inputLength div input[type='checkbox']");
const random = document.querySelector(".random");
const stop = document.querySelector(".stop");
const submitAudio = new Audio("a1.mp3")
const aleart = new Audio("alert.wav");






const randomValue = (setValue) => {
    return setValue[Math.floor((Math.random()) * setValue.length)];
};





const generatePassword = (password = "") => {
    if (userLength.value > 0) {
        submitAudio.play();
    }
    if ((upperCase.checked || lowerCase.checked || number.checked || symbol.checked) == true) {

        if (upperCase.checked) {
            password += randomValue(upperSet);
        }
        if (lowerCase.checked) {
            password += randomValue(lowerSet);
        }
        if (number.checked) {
            password += randomValue(numberSet);
        }
        if (symbol.checked) {
            password += randomValue(symbolSet);
        }
        if (userLength.value > password.length) {
            return generatePassword(password);
        }
        screen.textContent = trimString(password, userLength.value);
    } else {
        customGenerateBtn.style.display = "none";
        random.style.display = "none";
        stop.style.display = "none";
    }

}

generatePassword();




allInput.forEach((singleInput) => {
    singleInput.addEventListener("click", () => {
        customGenerateBtn.style.display = "block";
        random.style.display = "block";
        stop.style.display = "block";
    })
})





customGenerateBtn.addEventListener("click", () => {

    generatePassword();
})





const trimString = (passwordForTrim, userLength) => {
    if (passwordForTrim.length > userLength) {

        if (userLength == 0) {
            screen.style.color = "red";
            screen.style.border = "2px solid red";
            screen.style.display = "inline-block";
            screen.style.borderRadius = "0.4rem";
            screen.style.padding = " 0.4rem 0.8rem";
            screen.style.transition = " 0.3s ease-in";
            aleart.play();
            return "PLease enter length";
        }
        return passwordForTrim.substring(0, userLength);

    } else {
        return passwordForTrim;
    }
}



// =============================================================

random.addEventListener("click", () => {
    let id = setInterval(() => {
        generatePassword();
    }, 2000);

    stop.addEventListener("click", () => {
        aleart.play();
        clearInterval(id);
    })
})