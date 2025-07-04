
  const openBtn = document.querySelector('.open-modal-btn');
  const modal = document.getElementById('loginModal');
  const closeBtn = document.querySelector('.close-btn');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

 
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  
  //login const//
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-subscribe");
    const email = document.getElementById("email");
    const emailConfirm = document.getElementById("email-confirm");

//
    form.addEventListener("submit", function (e) {
      if (email.value !== emailConfirm.value) {
        e.preventDefault(); 
        alert("adresse email non conforme");
        emailConfirm.focus();
      }
    });
  });


  //burger //
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});


//cookies // 
const cookieBanner = document.querySelector('.cookie-banner');
const cookieOverlay = document.querySelector('.cookie-overlay');
const acceptButton = document.querySelector('.cookie-banner button');

function showCookieBanner() {
  cookieBanner.style.display = 'flex';
  cookieOverlay.style.display = 'block';
}

function hideCookieBanner() {
  cookieBanner.style.display = 'none';
  cookieOverlay.style.display = 'none';
}

acceptButton.addEventListener('click', hideCookieBanner);

window.addEventListener('load', () => {
  setTimeout(showCookieBanner, 1000);
});


