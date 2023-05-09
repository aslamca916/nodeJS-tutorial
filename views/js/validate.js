const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");

console.log("Validating")
console.log(form);
console.log(email);
console.log(password);

// form.addEventListener("submit",(e)=>{
//     if(email === '' || password === ''){
//         e.preventDefault();
//         alert("Please fill the form");
//         return false;
//     }
// })

form.addEventListener("submit", submitValidate)

function submitValidate(event) {
        if(email.value === '' || password.value === ''){
            event.preventDefault();
            window.alert("Please fill the form");
            return false;
        }
}
