// // demo

// // layout grid overlays
// (function() {
// 	const layoutGridOverlaySwitch = document.getElementById('layouts-grid-on-off');
// 	const layouts = document.getElementById('layouts');
// 	const addLayoutGridToggleListeners = () => {
// 		layoutGridOverlaySwitch.addEventListener('change', () => {
// 			layouts.classList.toggle('js-active');
// 		});
// 	}

// 	addLayoutGridToggleListeners();
// })();

// site nav mobile toggle
(function() {
	const siteNavOpener = document.getElementById('site-nav-open');
	const siteNavCloser = document.getElementById('site-nav-close');
	const siteLayoutContainer = document.getElementById('site-layout');
	const addMobileNavListener = (el) => {
		if (el == siteNavCloser) {
			el.addEventListener('click', () => {
				siteNavOpener.setAttribute('aria-expanded', false);
				siteNavCloser.setAttribute('aria-expanded', false);
				siteNavOpener.enabled;
				siteLayoutContainer.classList.remove('js-site-nav-active');
			})
		} else if (el == siteNavOpener) {
			el.addEventListener('click', () => {
				siteNavOpener.setAttribute('aria-expanded', true);
				siteNavCloser.setAttribute('aria-expanded', true);
				siteNavOpener.disabled;
				siteLayoutContainer.classList.add('js-site-nav-active');
			})
		}
	};

	addMobileNavListener(siteNavOpener);
	addMobileNavListener(siteNavCloser);
})();