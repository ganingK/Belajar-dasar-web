const toggleButton = document.getElementsByClassName('popcorn')[0];
const navbarLinks = document.getElementsByClassName('navigasi')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});
