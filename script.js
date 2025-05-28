
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

  
  //fomulaire register//
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-subscribe");
    const email = document.getElementById("email");
    const emailConfirm = document.getElementById("email-confirm");

    form.addEventListener("submit", function (e) {
      if (email.value !== emailConfirm.value) {
        e.preventDefault(); 
        alert("adresse email non conformea");
        emailConfirm.focus();
      }
    });
  });