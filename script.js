  const form = document.getElementById("register-form"); 
  const firstName = form["first-name"].value.trim();
  const lastName = form["last-name"].value.trim();
  const email = form["email"].value.trim();
  const password = form["password"].value.trim();
  const confirmPassword = form["confirm-password"].value.trim();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Invalid email format");
  }
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    errors.push(
      "Password must contain at least 8 characters, one special character, and one uppercase letter"
    );
  }

  if (password !== confirmPassword) {
    errors.push("Passwords do not match");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    const user = {
      firstName,
      lastName,
      email,
      password
    };
    localStorage.setItem("user", JSON.stringify(user));
    form.reset();
    alert("Registration successful!");
  }
});
