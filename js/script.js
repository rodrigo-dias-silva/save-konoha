const naruto = document.querySelector('.naruto');
const enemy = document.querySelector('.enemy');
const floor = document.querySelector('.floor');

function jump() {
  naruto.classList.add('jump');

  setTimeout(() => {
    naruto.classList.remove('jump')
  }, 700);
}

const loop = setInterval(() => {

  const enemiesPosition = enemy.offsetLeft;
  const narutoPosition = +window.getComputedStyle(naruto).bottom.replace('px', '');

  if (enemiesPosition <= 95 && enemiesPosition > 0 && narutoPosition < 110) {

    floor.style.animation = 'none';

    enemy.style.animation = 'none';
    enemy.style.left = `${enemiesPosition}px`;

    naruto.style.animation = 'none';
    naruto.style.bottom = `${narutoPosition}px`;

    naruto.src = './images/game-over.gif'
    naruto.style.width = '200px'
    naruto.style.marginBottom = '-15px'
    naruto.style.marginLeft = '-60px'

    clearInterval(loop)
  }

}, 10)

document.addEventListener('keypress', jump)