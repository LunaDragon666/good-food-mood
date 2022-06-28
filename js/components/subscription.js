const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const confirmation = document.querySelector("#subscribed");
const subscribeForm = document.querySelector("#subform");

function formPass() {
   let error = false;
   if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        error = true;
    }
        return error;
    } 
 
function submitForm(event) {
    event.preventDefault();
    const messageError = formPass();

    if(!messageError) {
        subscribeForm.style.display = "none";
        confirmation.innerHTML = `<div class="confirmation">
                                    <p>Thank you!</p><p>You are now subscribed to our newsletters.</p>
                                  </div>
                                  <div class="arrow-down"></div>
                                  `;
    } 
   subscribeForm.reset();
}

subscribeForm.addEventListener("submit", submitForm);
function validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    const patternMatches = reg.test(email);
    return patternMatches;
}
