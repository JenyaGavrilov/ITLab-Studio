var openMenu = document.querySelectorAll('.hamburger')[0],
	menu = document.getElementById('menu'),
	info = document.getElementById('info');

	openMenu.addEventListener('click', function(e) {
		menu.classList.add('vertical-menu');
	});

	info.addEventListener('click', function() {
		menu.classList.remove('vertical-menu');
	})

	