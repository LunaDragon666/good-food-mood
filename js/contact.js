/* 
const form = document.querySelector("#contactForm");
const message = document.querySelector("#message");

// Name
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
// Subject
const subject = document.querySelector("#subjectName");
const subjectError = document.querySelector("#subjectNameError");
// Email
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
// Adress
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");


// If all inputs pass or fail while submitting the contact form
function checkIfFormIsPassingBy() {
   let error = false;

   // Name
   if (checkLength(fullName.value, "") === true) {
      fullNameError.style.display = "none";
   } else {
      fullNameError.style.display = "block";
      error = true;
   }

   // Subject
   if (checkLength(subjectName.value, 9) === true) {
      subjectError.style.display = "none";
   } else {
      subjectError.style.display = "block";
      error = true;
   }

   // Email
   if (validateEmail(email.value) === true) {
      emailError.style.display = "none";
   } else {
      emailError.style.display = "block";
      error = true;
   }

   // Adress
   if (checkLength(adress.value, 24) === true) {
      adressError.style.display = "none";
   } else {
      adressError.style.display = "block";
      error = true;
   }

   return error;

   } 


   // When contact form is submitted after required input fields are filled in 
   function submitForm(event) {
      event.preventDefault();

      const theErrors = checkIfFormIsPassingBy();

      if(!theErrors) {
         message.innerHTML = '<div class="message">Whoop whoop&#127881; Your request is on its way! We will come right back to you asap </div>';
      } 

   // Retain inputted text after submit, unless we change it or refresh the page
   form.focus();
   }


   form.addEventListener("submit", submitForm);

   function checkLength(value, len) {
      if (value.trim().length > len) {
         return true;
      } else {
         return false;
      }
   }

   // Email validation controller inside the contact form (email-input)
   function validateEmail(email) {
      const reg = /\S+@\S+\.\S+/;
      const patternMatches = reg.test(email);
      return patternMatches;
   }
*/