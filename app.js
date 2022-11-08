// getting all the necessary elements from DOM
const createBtn = document.querySelector("#create-btn");
createBtn.addEventListener("click", () => {
    const password = document.querySelector("#password");
    const confirmpassword = document.querySelector("#confirm_password");
    const pass0 = document.querySelector("#password_check");
    const pass1 = document.querySelector("#password_check1");

    if (password.value.toLowerCase() !== confirmpassword.value.toLowerCase()) {
        pass0.classList.add("show-error");
        pass1.classList.add("show-error");
    }else {
        pass0.classList.remove("show-error");
        pass1.classList.remove("show-error");
    }
});


const showpassword = document.querySelector("#showpassword");
showpassword.addEventListener("click", () => { 
    const password = document.querySelector("#password");
    const confirmpassword = document.querySelector("#confirm_password");
    if (password.type === "password" && confirmpassword.type === "password") {
        password.type = "text";
        confirmpassword.type = "text";
    }else {
        password.type = "password";
        confirmpassword.type = "password";
    }
});


setInterval(() => {
    const password = document.querySelector("#password");
    const confirmpassword = document.querySelector("#confirm_password");

    if (password.value === "" && confirmpassword.value === "") {
        password.style.borderBottom = "2.5px solid black";
        confirmpassword.style.borderBottom = "2.5px solid black";
    }else if (password.value.toLowerCase() !== confirmpassword.value.toLowerCase()) {
        password.style.borderBottom = "2.5px solid red";
        confirmpassword.style.borderBottom = "2.5px solid red";
    }else {
        password.style.borderBottom = "2.5px solid green";
        confirmpassword.style.borderBottom = "2.5px solid green";
    }
}, 1);