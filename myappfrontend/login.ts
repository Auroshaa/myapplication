import axios from 'axios';

const form = document.getElementById('login-form') as HTMLFormElement;
const userIdInput = document.getElementById('userId') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const messageDiv = document.getElementById('message') as HTMLDivElement;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const userId = userIdInput.value;
  const password = passwordInput.value;

  try {
    const response = await axios.post('http://3.111.31.54:3000/login', {
      userId,
      password,
    });

    messageDiv.innerHTML = `<p>${response.data.message}</p>`;
  } catch (error) {
    if (error.response) {
      messageDiv.innerHTML = `<p>${error.response.data.message}</p>`;
    } else {
      messageDiv.innerHTML = `<p>An error occurred. Please try again later.</p>`;
    }
  }
});
