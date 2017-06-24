var animatePin = (function() {
  var pin = document.getElementById('footer-pin');

  window.addEventListener('scroll', debounce(_checkPin, 50));

  function _checkPin() {
    var currentPosition = (window.scrollY + window.innerHeight);
    var totalHeight     = document.documentElement.offsetHeight;

    totalHeight - currentPosition <= 15 ?
    pin.classList.add('footer__pin--enter') : pin.classList.remove('footer__pin--enter');
  }
})();
