if (typeof document !== 'undefined') {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const divBoxes = document.getElementById('boxes');

  input.addEventListener('input', event => {
    input.value = event.currentTarget.value;
  });

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });
  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });

  function createBoxes(amount) {
    divBoxes.innerHTML = '';
    let size = 30;

    for (let i = 1; i <= amount; i++) {
      const newDivBoxes = document.createElement('div');
      newDivBoxes.style.width = `${size}px`;
      newDivBoxes.style.height = `${size}px`;
      newDivBoxes.style.backgroundColor = getRandomHexColor();
      divBoxes.append(newDivBoxes);
      size += 10;
    }
  }
  function destroyBoxes() {
    divBoxes.innerHTML = '';
  }
}
