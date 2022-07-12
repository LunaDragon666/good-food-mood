const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
const textboxInfo = document.querySelector("#textbox");

const fName = document.querySelector("#fName");
const fNameError = document.querySelector("#fNameError");
const subject = document.querySelector("#sub");
const subjectError = document.querySelector("#subError");
const mail = document.querySelector("#mail");
const mailError = document.querySelector("#mailError");
const message = document.querySelector("#msg");
const messageError = document.querySelector("#msgError");

function checkIfFormIsPassingBy() {
   let error = false;

   if (letterLength(fName.value, "") === true) {
      fNameError.style.display = "none";
   } else {
      fNameError.style.display = "block";
      error = true;
   }

   if (letterLength(subject.value, 9) === true) {
      subjectError.style.display = "none";
   } else {
      subjectError.style.display = "block";
      error = true;
   }

   if (mailValidation(mail.value) === true) {
      mailError.style.display = "none";
   } else {
      mailError.style.display = "block";
      error = true;
   }

   if (letterLength(message.value, 14) === true) {
      messageError.style.display = "none";
   } else {
      messageError.style.display = "block";
      error = true;
   }
   return error;
   } 

   function submitForm(event) {
      event.preventDefault();
      const theErrors = checkIfFormIsPassingBy();

      if(!theErrors) {
         contactForm.style.display = "none";
         textboxInfo.style.display = "none";
         formMessage.innerHTML = `
                                    <a class="back" href="../index.html">Home</a> <span>/ Contact</span>
                                 <div class="form-confirmation">
                                    Message sent!
                                 </div>
                                 <div class="arrow-down"></div>
                              `;
      } 
   contactForm.focus();
   }

   contactForm.addEventListener("submit", submitForm);
   function letterLength(value, len) {
      if (value.trim().length > len) {
         return true;
      } else {
         return false;
      }
   }

   function mailValidation(email) {
      const reg = /\S+@\S+\.\S+/;
      const patternMatches = reg.test(email);
      return patternMatches;
   }
   