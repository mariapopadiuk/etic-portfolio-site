document.addEventListener('DOMContentLoaded', init, false);

function init() {
  //Toggle word
  //estrura decisao
  let out = document.querySelector('.toggle-word');
  function changer() {
    if (out.innerText === 'PLANET') {
      out.innerText = 'FUTURE'
    } else {
      out.innerText = 'PLANET'
    }
  }
  setInterval(changer, 1000);
}