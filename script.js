const message = document.querySelector("#message");
const mainPswrd = document.querySelector("#pswrd1").value;
const confirmPswrd = document.querySelector("#pswrd2").value;
const createAccount = document.querySelector("#createAccnt");

createAccount.addEventListener("click", () =>{
    if (mainPswrd == "" || confirmPswrd !== mainPswrd){
        message.textContent = "Passwords do not match."
    }
    
})

/* 
right now I need to get the password and confirm password input boxes to display properly. 

Also, styling on the inputs on the whole of the forms is in need of changes. The borders don't look right.

*/