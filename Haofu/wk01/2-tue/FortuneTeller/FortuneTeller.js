document.querySelector("#submit").addEventListener('click', () => {
  var form = document.querySelector("#form");

  var partner = form.querySelectorAll("input")[0].value;
  var childNum = form.querySelectorAll("input")[1].value;
  var job = form.querySelectorAll("input")[2].value;
  var geo = form.querySelectorAll("input")[3].value;

  alert(`You will be a ${job} in ${geo}, and married to ${partner} with ${childNum} kids`);
});
