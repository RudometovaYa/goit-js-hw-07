const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.elements.email;
    const password = e.target.elements.password;
    
    if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    userEmail: e.target.elements.email.value.trim(),
    userPassword: e.target.elements.password.value.trim(),
  };

  
  console.log(data);
    
  e.target.reset();
});
