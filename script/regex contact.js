const mobileRegex = /^09[0-9]{9}$/;
const phoneNumberInput = document.getElementById('number1');
const small_error = document.getElementById("form-ErrorRed")

phoneNumberInput.addEventListener('input', validateMobileNumber);
phoneNumberInput.addEventListener('blur', validateMobileNumber);

function validateMobileNumber() {
    const phoneNumber = phoneNumberInput.value;

    if (!(mobileRegex.test(phoneNumber))) {
        small_error.innerHTML = "لطفا شماره مبایل صحیح وارد کنید!"
    }else{
        small_error.innerHTML = "صحیح است"
    }
    
}