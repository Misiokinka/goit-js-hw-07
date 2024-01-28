if (typeof document !== 'undefined') {
  const input = document.getElementById('name-input');
  const userName = document.getElementById('name-output');

  input.addEventListener('input', event => {
    userName.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === '') {
      userName.textContent = 'Anonymous';
    }
  });
}
