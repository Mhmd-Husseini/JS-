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

const numbers = [];
while(numbers.length<10) {
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

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return isPalindrome(str.substring(1, str.length - 1));
  }}
function checkPalindrome() {
  const palindromeText = document.getElementById("palindrome-text").value.toLowerCase();
  const palindromeResult = document.getElementById("palindrome-result");
  if (isPalindrome(palindromeText)) {
    palindromeResult.innerText = `it is a palindrome!`;
  } else {
    palindromeResult.innerText = `it is not a palindrome.`;
  }}

  function checkPrime() {
    const birthYear = document.getElementById("birth-year").value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    let isPrime = true;
  
    if (age <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i < age; i++) {
        if (age % i === 0) {
          isPrime = false;
          break;
        }}}
    const result = document.getElementById("result");
    if (isPrime) {
      result.innerHTML = `Your age is a prime number!`;
    } else {
      result.innerHTML = `Your age is not a prime number`;
    } }

class Course {
  constructor(name, instructor, credits) {
    this.name = name;
    this.instructor = instructor;
    this.credits = credits;
  }}
const form2 = document.getElementById("course-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form2.elements["name"].value.trim();
  const instructor = form2.elements["instructor"].value.trim();
  const credits = parseInt(form2.elements["credits"].value.trim());
  let course = new Course(name, instructor, credits);
  form2.reset();
});

function reverseNumbers() {
  const input = document.getElementById("stringNumbers").value;
  const output = document.getElementById("output");
  const numbers = input.match(/\d+/g);
  if (numbers) {
    const reversed = input.split(/\d+/g).reduceRight((result, value, index) => result.concat(value, numbers[index]), '');
    output.innerText = reversed;
  } else {
    output.innerText = "No numbers found!";
  }}

  function convert() {
    var input = document.getElementById("inputText").value;
    var vowels = ["a", "e", "i", "o", "u"];
    var first_consonants = "";

    for (var i = 0; i < input.length; i++) {
        if (vowels.indexOf(input[i]) === -1) {
            first_consonants += input[i];
        } else {
            break;
        }
    }
    var result = input.substr(first_consonants.length) + first_consonants + "ay";
    document.getElementById("convertResult").innerHTML = result;
}

