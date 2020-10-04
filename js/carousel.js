// Variaveis

var btns = document.querySelectorAll('.articlesList-slider-item');
var news = document.querySelectorAll('.articlesList-item');


var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');


new0.style.display = 'block'


var indicatorCurrentSlide = document.createElement('span');
indicatorCurrentSlide.classList.add('visuallyHidden');
indicatorCurrentSlide.textContent = '(Current slide)';


btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    
    news.forEach(function(newItem) {
      newItem.style.display = 'none';
      
      if ( this.getAttribute('data-sliderItem') === newItem.getAttribute('data-new') ) {
        newItem.style.display = 'block'
      }

    }.bind(this));
    
  
    
    document.querySelector('.articlesList-slider-item .visuallyHidden').remove();
    this.append(indicatorCurrentSlide);
    

    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('articlesList-slider-item--active')
    })

    this.classList.add('articlesList-slider-item--active')
  })
})