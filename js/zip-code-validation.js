document.querySelector('#zip').oninvalid = function() {
  this.setCustomValidity('');
  
  if (!this.validity.valid) {
      this.setCustomValidity('There is a error on this field!');
      this.parentNode.classList.add('contactField--error')
   }
}