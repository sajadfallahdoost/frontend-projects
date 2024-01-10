const show_otp = document.getElementById("show_otp")

function print(i) {
    console.log(i)    
}
// Generate a random 6-digit OTP
const otp = Math.floor(100000 + Math.random() * 900000);
function generateOTP() {
    
    
  
    // Display the generated OTP
    // alert(`Your OTP is: ${otp}`);
    show_otp.innerHTML = `${otp}`
    

}
// document.getElementById("gen").disabled = true;
//var input = document.getElementById("otp").value;
let sucsessshow = document.getElementById("sucsessshow")
function sucsess() {
    var input = document.getElementById("otp").value;
    let sucsessshow = document.getElementById("sucsessshow")
    var desiredValue = otp.toString();
    if (input === desiredValue) {
        // sucsessshow.innerHTML = "ssssssssssssssssssssssssssssssssssssssssssssssssss"
        alert("عالی! مقدار وارد شده با مقدار دلخواه شما یکی است.");
    } else {
        alert("مقدار وارد شده با مقدار دلخواه شما یکسان نیست.");
    }
    
}



  
//   document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     // Here you can add the logic to verify the OTP and log the user in
//     alert("Login logic with OTP should be implemented here!");
//   });
  