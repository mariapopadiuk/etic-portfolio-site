document.addEventListener('DOMContentLoaded', init, false);

function init() {

  let out = document.querySelector('.toggle-word');
  let footerForm = document.querySelector('.footer-form');
  let submitBtn = document.querySelector('.footer-btn');
  let inputEmail = document.querySelector('.input-email');
  let inputMessage = document.querySelector('.input-message');
  let burgerBtn = document.querySelector('.hamburger');
  let navLinks = document.querySelector('.nav-links');



  //Events
  submitBtn.addEventListener('click', validForm, false);
  burgerBtn.addEventListener('click',responsiveBurger, false);
  

  //Responsive Burger menu
  function responsiveBurger(){
    this.classList.toggle('active');
    navLinks.classList.toggle('show-nav-links');
    console.log(this);

  }
//Toast Notitfication
  function createNotification(msg) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = msg;

    container.appendChild(notif);

    setTimeout(() => {
      notif.remove();
    }, 2000);
  }

//Form Validation
  function validForm(e) {
    e.preventDefault();
    const regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    // console.log(1234);
    
    if (inputEmail.value === '' || inputMessage.value === '') {
      createNotification('Fields can\'t be empty');
    } else if (!regExEmail.test(inputEmail.value)){
      createNotification('Email address is invalid');
    } else{
      footerForm.submit();
    }
    
   }
//Toogle word
  function changer() {
    if (out.innerText === 'PLANET') {
      out.innerText = 'FUTURE'
    } else {
      out.innerText = 'PLANET'
    }
  }
  setInterval(changer, 1000);




}