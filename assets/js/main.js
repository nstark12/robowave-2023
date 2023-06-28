$(document).ready(function() {
    $('#fullpage').fullpage({
       licenseKey: 'gplv3-license',
       navigation: true,
       navigationTooltips: ['Welcome', 'New Robots', 'Used Robots', 'Contact']
    });

    // typewriter js
    var typewriterElements = document.querySelectorAll('.typewriter-effect')
    for (var i = 0; i < typewriterElements.length; i++) {
        var currentEl = typewriterElements[i]
        var innerText = currentEl.innerText

        new Typewriter(currentEl, {
            loop: true,
        }).typeString(innerText)
        .pauseFor(1000)
        .start()
    };

    // glitch
    PowerGlitch.glitch('.glitch');
});