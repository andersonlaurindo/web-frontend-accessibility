var fieldEmail = document.querySelector('#email')
var suggestion = document.querySelector('#suggestion')

var domains = ['gmail.com', 'aol.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];


fieldEmail.addEventListener('blur', function() {
  Mailcheck.run({
    email: fieldEmail.value,
    domains: domains,                       // optional
    topLevelDomains: topLevelDomains,       // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function(suggestion) {
      suggestion.style.display = 'inline-block';
      suggestion.textContent = "It's mean: " + suggestion.full + " ?";
      suggestion.parentNode.classList.add('contactField--error');
      fieldEmail.classList.add('contactField--notValid');
      suggestion.setAttribute('tabindex', '0');
      suggestion.setAttribute('role', 'alert');
    }
  });
});