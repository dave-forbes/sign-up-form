const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const error = document.querySelector('p.error');
const submit = document.querySelector('button');

confirmPassword.addEventListener('keyup', checkPassword);

function checkPassword() {
  if (password.value !== confirmPassword.value) {
    error.textContent = '*passwords do not match';
  } else {
    error.textContent = '';
  }
}

