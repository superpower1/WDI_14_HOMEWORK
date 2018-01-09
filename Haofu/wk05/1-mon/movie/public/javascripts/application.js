const button = document.querySelector('button');
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', e=>{
  console.log(e.target.value);
  if (e.target.value === "") {
    button.classList.add('hidden');
  } else {
    button.classList.remove('hidden');
  }
});
