window['GL'] = {};
var Gl = window.Gl;

GL.userNavPopUp = document.querySelector('.user-navigation-popup');
GL.catalogPopupClass = document.querySelector('.main-catalog-popup-list').classList;
GL.searchPopup = document.querySelector('.search-popup').classList;
GL.searchSvg = document.querySelector('.search-button svg path').classList;
GL.searchButton = document.querySelector('.user-search-popup');
GL.loginPopup = document.querySelector('.user-login-popup');
GL.loginWin = document.querySelector('.popup-login').classList;
GL.appointmentModal = document.querySelector('.appointment-modal');
GL.mapButton = document.querySelector('.map-form-button');
GL.modalCloseBtn = document.querySelector('.appointment-close');

GL.userNavPopUp.addEventListener('mouseover', function (e) {
  e.preventDefault();
  GL.catalogPopupClass.add('showPopup')
});

GL.userNavPopUp.addEventListener('mouseout', function (e) {
  e.preventDefault();
  GL.catalogPopupClass.remove('showPopup')
});



GL.searchButton.addEventListener('mouseover', function(e) {
  e.preventDefault();
  GL.searchSvg.add('hover-search-fill')
  GL.searchPopup.add('showPopup');
});

GL.searchButton.addEventListener('mouseout', function(e) {
  e.preventDefault();
  GL.searchSvg.remove('hover-search-fill')
  GL.searchPopup.remove('showPopup');
});


GL.loginPopup.addEventListener('mouseover', function(e) {
  e.preventDefault();
  GL.loginWin.add('showPopup');
});

GL.loginPopup.addEventListener('mouseout', function(e) {
  e.preventDefault();
  GL.loginWin.remove('showPopup');
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
