function validateForm() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const subject = document.getElementById("subject").value;
    const agree = document.getElementById("agree").checked;



    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById( "password-error");
    const subjectError = document.getElementById("subject-error");
    const agreeError = document.getElementById("agree-error");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    subjectError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent =
            "Please select your course.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }
    
    display(name, email,subject); 
    
    return isValid;
   
}

function display(name, email,subject) {
    const table = document.getElementById('dataTable');
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const subjectCell= newRow.insertCell(2);

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    subjectCell.innerHTML=subject;
    
    table.style.display = 'table';

    document.getElementById('dataForm').reset();
}
