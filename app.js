let nameAuth = () => {
    const email = document.getElementById("email");
    const userId = email.value;

    if(email.value.trim() ==="") {
        email.style.border = "1.5px solid hsl(0, 100%, 50%)";
        email.placeholder = "Please enter your email";
        email.addEventListener("click", e => {
            email.style.border = "1px solid hsla(0, 0%, 0%, 0.1)";
            email.placeholder = "Please enter your email";
        });
        return false
    } else {
        alert(`Hey ${userId}, thanks for joining our online community 🎉`);
        true
    }
}