let label = document.querySelector('label');
let navBarList = document.querySelector('.nav-bar__list');

label.addEventListener('click', (event) => {
  navBarList.classList.toggle('show');
});
console.log(label);
