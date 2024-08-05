const inputMessage = document.getElementById("input-msg");
const errorMessage = document.getElementById("error-input");
const submitBtn = document.getElementById("submit-btn");

function verifyEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email.value)
    return emailRegex.test(email.value);
}

submitBtn.addEventListener("click",()=>{
    errorMessage.textContent="";
    if(inputMessage.value===""){
        errorMessage.textContent="Please enter your email";
    }
    else if(!verifyEmail(inputMessage)){
        errorMessage.textContent="Check your email please";
    }
    else{
        alert("Congratulations!");
    }
})