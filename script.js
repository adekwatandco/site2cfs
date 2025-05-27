
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

  
  // let currentIndex = 0;

  // function showSlide(index) {
  //   const carousel = document.getElementById('carouselImages');
  //   const totalSlides = carousel.children.length;
  //   if (index >= totalSlides) currentIndex = 0;
  //   else if (index < 0) currentIndex = totalSlides - 1;
  //   else currentIndex = index;

  //   const offset = -currentIndex * 100;
  //   carousel.style.transform = `translateX(${offset}%)`;
  // }

  // function nextSlide() {
  //   showSlide(currentIndex + 1);
  // }

  // function prevSlide() {
  //   showSlide(currentIndex - 1);
  // }

