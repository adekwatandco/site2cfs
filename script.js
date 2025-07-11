document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open-modal-btn');
  const modal = document.getElementById('loginModal');
  const closeBtn = modal.querySelector('.close-btn'); 

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
  

  //cookies // 
const cookieModal = document.getElementById('cookieModal');
const acceptButton = cookieModal.querySelector('.cookie-btn.accept');
const refuseButton = cookieModal.querySelector('.cookie-btn.refuse');


window.addEventListener('load', () => {
  setTimeout(() => {
    cookieModal.style.display = 'flex';
  }, 1000);
});

function hideCookieModal() {
  cookieModal.style.display = 'none';
}
acceptButton.addEventListener('click', hideCookieModal);
refuseButton.addEventListener('click', hideCookieModal);

document.addEventListener("DOMContentLoaded", () => {
  const cardTexte = document.querySelector(".card-texte");
  const videoModal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".close-video-modal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        videoModal.style.display = "block";
        observer.unobserve(cardTexte);
      }
    });
  }, { threshold: 0.7 });

  observer.observe(cardTexte);

  closeBtn.addEventListener("click", () => {
    videoModal.style.display = "none";
    const iframe = videoModal.querySelector("iframe");
    iframe.src = iframe.src; // Stoppe la vidéo
  });

  
  window.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.style.display = "none";
      const iframe = videoModal.querySelector("iframe");
      iframe.src = iframe.src;
    }
  });
});
