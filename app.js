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


  //validation form
  //transform notification
//   const btnSend = document.querySelector('.footer-btn');

//   const containernotif = document.querySelector('.container');

//   btnSend.addEventListener('click', () => {
//     createNotification();
//   });

//   function createNotification(){
//     let notif = document.createElement('div');
//     notif.classList.add('notification');
//     notif.innerText = 'Fields must be required'

//     containernotif.appendChild(notif);
//   }
//   setTimeout(() => {
//     notif.remove();
//   }, 2000);
}