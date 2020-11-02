const form = document.querySelector("form");
const inputName = form.querySelector("input[name=name]");
const inputEmail = form.querySelector("input[name=email]");
const btn = form.querySelector("button")
let end = false;
// const inputNameValue = inputName.value.trim()
// const inputEmailValue = inputEmail.value.trim()


form.addEventListener("submit", e => {
    e.preventDefault();

    if (inputName.value.length >0 && inputEmail.value.length >0) {
        e.target.submit()
        alert("message sent");
        return end
        
    } else {
        // alert("Wrong form filling");
        
    }
})
form.addEventListener('submit',send)
    
    form.addEventListener("input", e => {
    if (inputName.value.length>0 && inputEmail.value.length > 0) {
        btn.removeAttribute('disabled');
    // } else if 
    //  (inputName.value==="" || inputEmail.value === "") {
    //     btn.setAttribute('disabled','disabled');
    } else { 
        btn.setAttribute('disabled','disabled');
    }
}
)