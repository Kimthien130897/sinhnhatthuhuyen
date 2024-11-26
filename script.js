const card = document.querySelector('.card');
const playSongButton = document.getElementById('playSong');
const birthdaySong = document.getElementById('birthdaySong');

// Thêm hiệu ứng mở thiệp
card.addEventListener('click', () => {
  card.classList.toggle('open');
});

// Phát nhạc chúc mừng
playSongButton.addEventListener('click', () => {
  birthdaySong.play();
});
