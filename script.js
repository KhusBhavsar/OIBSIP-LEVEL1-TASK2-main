window.addEventListener('load', function() {
    setTimeout(function() {
      var infoElements = document.querySelectorAll('.info, .infoImg');
      for (var i = 0; i < infoElements.length; i++) {
        infoElements[i].classList.add('show');
      }
    }, 3000);
  });
