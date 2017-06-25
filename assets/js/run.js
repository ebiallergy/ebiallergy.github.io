$('a').on('click', function () {
	var title = 'ebiallergy.github.io',
		lbl = $(this).data('title') || $(this).attr('title') || $(this).attr('href');

	if (lbl) {
		eventTrack(title, lbl);
	}
});