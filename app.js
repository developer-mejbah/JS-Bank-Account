document.getElementById("login-btn").addEventListener("click", function(){
    const emailField = document.getElementById("e-mail");
    const emailValue = emailField.value;

    const passField = document.getElementById("pass-word");
    const passValue = passField.value;

    if (emailValue === "mejbah@gmail.com" && passValue === "mejbah456"){
        console.log("Login Successful!!");
    } else {
        alert("Wrong email or password");
}
});