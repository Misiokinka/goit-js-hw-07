if (typeof document !== 'undefined') {
  const btn = document.querySelector('.change-color');
  const color = document.querySelector('.color');

  btn.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}
