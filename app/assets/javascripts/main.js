// demo

// layout grid overlays
(function() {
  var layoutGridOverlaySwitch = document.getElementById('layouts-grid-on-off');
  var layouts = document.getElementById('layouts');

  function addListeners() {
    layoutGridOverlaySwitch.addEventListener('change', function() {
      layouts.classList.toggle('js-active');
    });
  }

  addListeners();
})();