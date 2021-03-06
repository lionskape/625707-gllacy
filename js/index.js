window['GL'] = {};
var Gl = window.Gl;

GL.appointmentModal = document.querySelector('.appointment-modal');
GL.mapButton = document.querySelector('.map-form-button');
GL.modalCloseBtn = document.querySelector('.appointment-close');
GL.modalForm = document.querySelector('.appointment-form');
GL.modalLogin = GL.modalForm.querySelector('[name=user-email]');
GL.modalUserName = GL.modalForm.querySelector('[name=user-name]');
GL.modalUserAbout = GL.modalForm.querySelector('[name=user-text]');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login')
} catch (err) {
  isStorageSupport = false;
}

GL.mapButton.addEventListener('click', function (e) {
  e.preventDefault();
  GL.appointmentModal.classList.add('modal-show');
  if (storage) {
    GL.modalLogin.value = storage;
    GL.modalUserName.focus();
  } else {
    GL.modalLogin.focus();
  }
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

GL.modalForm.addEventListener('submit', function (e) {
  if (!GL.modalLogin.value) {
    e.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', GL.modalLogin.value);
    }
  }

})
