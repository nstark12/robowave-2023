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
    PowerGlitch.glitch('.glitch', {
        hideOverflow: true,
    })

    // last error date
    $('[data-lastErrorDate]').each(function() {
        var errDate = $(this).attr('data-lastErrorDate')
        errDate = dayjs(errDate);
        // get today's date as a daysjs object
        var today = dayjs();

        var diff = today.diff(errDate, 'day');
        console.log(diff)
        

        // determine text color class
        var textClass;
        if (diff < 5) {
            textClass = 'text-danger'
        } else if (diff < 30) {
            textClass = 'text-warning'
        } else {
            textClass = 'text-success'
        }

        // sets text of el and adds class
        $(this).text(diff + " days since last error.")
        .addClass(textClass)

    })
});