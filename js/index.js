window['GL'] = {};
var Gl = window.Gl;

GL.appointmentModal = document.querySelector('.appointment-modal');
GL.mapButton = document.querySelector('.map-form-button');
GL.modalCloseBtn = document.querySelector('.appointment-close');


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
