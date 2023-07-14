const password = document.querySelector('#password');
const passwordError = document.querySelector('p.password-error');
const confirmPassword = document.querySelector('#confirm-password');
const confirmError = document.querySelector('p.confirm-error');
const phoneError = document.querySelector('p.phone-error');
const phone = document.querySelector('#phone-number');
const email = document.querySelector('#email');
const emailError = document.querySelector('p.email-error');
const firstName = document.querySelector('#first-name');
const firstNameError = document.querySelector('p.first-name-error');
const lastName = document.querySelector('#last-name');
const lastNameError = document.querySelector('p.last-name-error');
const successOverlay = document.querySelector('div.success-overlay');
const gridItem2 = document.querySelector('.grid-item:nth-child(2)');
const submit = document.querySelector('button');

confirmPassword.addEventListener('focusout', checkPasswordSame);

function checkPasswordSame() {
  if (password.value !== confirmPassword.value) {
    confirmError.textContent = '*passwords do not match';
  } else {
    confirmError.textContent = '';
  }
}

password.addEventListener('focusout', checkPassword);

function checkPassword() {
  if (password.value.length < 8) {
    passwordError.textContent = '*please enter 8 or more characters';
  } else {
    passwordError.textContent = '';
  }
  checkPasswordSame();
}

phone.addEventListener('focusout', checkPhone);

function checkPhone() {
  if ((/\W/g).test(phone.value) || phone.value.length < 11) {
    phoneError.textContent = '*please enter a valid phone number';
  } else {
    phoneError.textContent = '';
  }
}

email.addEventListener('focusout', checkEmail);

function checkEmail() {
  const regex = /(.+)@(.+)\.(.+)/g
  if (!regex.test(email.value)) {
    emailError.textContent = '*please enter a valid email';
  } else {
    emailError.textContent = '';
  }
}

firstName.addEventListener('focusout', checkFirstName);

function checkFirstName() {
  if (firstName.value == '') {
    firstNameError.textContent = '*please enter your first name';
  } else {
    firstNameError.textContent = '';
  }
}

lastName.addEventListener('focusout', checkLastName)

function checkLastName() {
  if (lastName.value == '') {
    lastNameError.textContent = '*please enter your last name';
  } else {
    lastNameError.textContent = '';
  }
}

submit.addEventListener('click', checkForm);

function checkForm() {
  checkEmail();
  checkFirstName();
  checkLastName();
  checkPassword();
  checkPhone();
  let arr = [firstNameError, lastNameError, emailError, phoneError, passwordError, confirmError];
  if (arr.every(item => item.textContent == '')) {
    successOverlay.style.cssText = `width: ${gridItem2.clientWidth}px;`
    successOverlay.style.display = 'flex';
  }
}