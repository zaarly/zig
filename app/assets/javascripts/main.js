// site nav mobile toggle
(function() {
	const main = document.querySelector('main');
	const siteNavOpener = document.getElementById('site-header-mobile-menu-opener');
	const siteNavCloser = document.getElementById('site-nav-mobile-menu-closer');
	const siteLayoutContainer = document.getElementById('site-layout');
	const addMobileNavListener = (el) => {
		if (el == siteNavCloser) {
			el.addEventListener('click', () => {
				siteNavOpener.setAttribute('aria-expanded', false);
				siteNavCloser.setAttribute('aria-expanded', false);
				siteNavOpener.disabled = false;
				siteNavCloser.disabled = true;
				main.classList.remove('js-site-nav-active');
			})
		} else if (el == siteNavOpener) {
			el.addEventListener('click', () => {
				siteNavOpener.setAttribute('aria-expanded', true);
				siteNavCloser.setAttribute('aria-expanded', true);
				siteNavOpener.disabled = true;
				siteNavCloser.disabled = false;
				main.classList.add('js-site-nav-active');
			})
		}
	};

	addMobileNavListener(siteNavOpener);
	addMobileNavListener(siteNavCloser);
})();