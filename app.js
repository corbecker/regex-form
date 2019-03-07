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

function validateZipcode(){

}

function validateEmail() {

}

function validatePhone() {

}