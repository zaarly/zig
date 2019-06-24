// demo

// layout grid overlays
(function() {
	const layoutGridOverlaySwitch = document.getElementById('layouts-grid-on-off');
	const layouts = document.getElementById('layouts');
	const addLayoutGridToggleListeners = () => {
		layoutGridOverlaySwitch.addEventListener('change', () => {
			layouts.classList.toggle('js-active');
		});
	}

	addLayoutGridToggleListeners();
})();