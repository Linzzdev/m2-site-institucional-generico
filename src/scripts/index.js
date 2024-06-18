document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const openBtns = document.querySelectorAll('.buttonHeaderContainer, .faqButton');
    const closeBtns = document.querySelectorAll('.modalCloseButton, .modalBody button'); 
  
    if (modal && openBtns && closeBtns) {
      openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          modal.showModal();
          modal.classList.add('active');
        });
      });
  
      closeBtns.forEach(btn => { 
        btn.addEventListener('click', () => {
          modal.close();
          modal.classList.remove('active');
        });
      });
    }
  });