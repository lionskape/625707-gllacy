window['GL'] = {};
var Gl = window.Gl;

GL.searchSvg = document.querySelector('.search-button svg path').classList;
GL.searchButton = document.querySelector('.user-search-popup');
GL.appointmentModal = document.querySelector('.appointment-modal');
GL.mapButton = document.querySelector('.map-form-button');
GL.modalCloseBtn = document.querySelector('.appointment-close');



GL.searchButton.addEventListener('mouseover', function(e) {
  e.preventDefault();
  GL.searchSvg.add('hover-search-fill');
});

GL.searchButton.addEventListener('mouseout', function(e) {
  e.preventDefault();
  GL.searchSvg.remove('hover-search-fill');
});


GL.mapButton.addEventListener('click', function (e) {
  e.preventDefault();
  GL.appointmentModal.classList.add('modal-show');
});

GL.closeModal = function (e) {
  e.preventDefault();
  GL.appointmentModal.classList.remove('modal-show');
};

GL.modalCloseBtn.addEventListener('click', GL.closeModal);
window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27 && GL.appointmentModal.classList.contains('modal-show')) {
    GL.closeModal(e);
  }
});
