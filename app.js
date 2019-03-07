document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(e) {
  const name = e.target.value;
  const regex = /^[a-zA-Z]{2,10}$/; // start with and end with letters greater than 2 and less than 10

  if(!regex.test(name)){
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
  }
}

function validateZipcode(e){
  const eircode = e.target.value;
  const regex = /^[a-zA-Z0-9]{7}$/g;

  if(!regex.test(eircode)){
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
  }
}

function validateEmail(e) {
  const email = e.target.value;
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z\.]+)$/g;

  if(!regex.test(email)){
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
  }
}

function validatePhone(e) {
  const phone = e.target.value;
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/g;

  if(!regex.test(phone)){
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
  }
}