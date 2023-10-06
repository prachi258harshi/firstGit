function validate(input) {

    var validityState_object = input.validity;
  
    console.log(validityState_object)
  
    if (validityState_object.typeMismatch) {
      input.setCustomValidity('Thats not an email!');
      input.reportValidity();
    } else {
      input.setCustomValidity('');
      input.reportValidity();
    }
  }
  
  document.querySelector('#email').addEventListener('blur', e =>
    validate(e.target)
  )
  <input type="email" value="" id="email">