// NYC, SF, LA, SYD, ATX
const citys = "NYC, SF, LA, SYD, ATX".split(', ');
citys.forEach(city=>{
  const newOption = document.createElement("option");
  newOption.textContent = city;
  document.querySelector('#city-type').appendChild(newOption);
});

document.querySelector('#city-type').addEventListener('change', event=>{
  const body = document.querySelector('body');
  body.classList.add()
  switch (event.target.value) {
    case 'NYC':
      body.className = 'nyc';
      break;
    case 'SF':
      body.className = 'sf';
      break;
    case 'LA':
      body.className = 'la';
      break;
    case 'SYD':
      body.className = 'sydney';
      break;
    case 'ATX':
      body.className = 'austin';
      break;
    default:
      body.className = '';
  }
});
