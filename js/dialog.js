// Variáveis
var contentOutDialog = document.querySelector('#contentOutDialog');
var video = document.querySelector('video');

var btnOpenDialog = document.querySelector('#openDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnOpenDialog.style.display = 'block'

btnOpenDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--opened');
  document.querySelector('.dialogNewsletter-label').focus();
  contentOutDialog.inert = true;

  document.querySelector('video').removeAttribute('controls'); 
});

function closingDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--opened'); 
  contentOutDialog.inert = false;
  btnOpenDialog.focus();
  document.querySelector('video').setAttribute('controls', 'true');
}

// Listeners
document.querySelector('.dialogNewsletter-close').addEventListener('click', closingDialog);
dialogOverlay.addEventListener('click', closingDialog);

document.addEventListener('keyup', function(event) {
  if (event.keyCode == 27) {
      closingDialog()
  }
})









