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

// Prompt the user to enter 10 numbers
const numbers = [];
for (let i = 0; i < 10; i++) {
  let number = prompt(`Enter the ten numbers one after one `);
  while (isNaN(number)) {
    number = prompt(`This isn't a number, Please enter a valid number`);
  }
  numbers.push(parseInt(number));
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let results = [];
  while(i < arr1.length && j < arr2.length) {
   if (arr2[j] > arr1[i]) {
    results.push(arr1[i]);
    i++;  
   }else {
    results.push(arr2[j])
    j++
   }
  }
  while(i < arr1.length){
   results.push(arr1[i]);
   i++;
  }
  while(j < arr2.length){
   results.push(arr2[j]);
   j++;
  }
  return results
 }
 function mergeSort(arr){
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
   return merge(left, right);
 }
const sortedNumbers = mergeSort(numbers);
alert(sortedNumbers);
