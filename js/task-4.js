if (typeof document !== 'undefined') {
  const loginForm = document.querySelector('.login-form');
  loginForm.addEventListener('submit', handleSubm);

  function handleSubm(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (login === '' || password === '') {
      return alert('All form fields must be filled in');
    }
    console.log({ email: login, password });
    form.reset();
  }
}
