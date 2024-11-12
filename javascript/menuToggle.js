document
    .getElementById('menu-toggle')
    .addEventListener('click', function () {
        document.getElementById('navList').classList.toggle
            ('active');
        document.getElementById('menu-toggle').ariaExpanded =
            document.getElementById('menu-toggle').ariaExpanded ==
                'true' ? 'false' : 'true';
    });

