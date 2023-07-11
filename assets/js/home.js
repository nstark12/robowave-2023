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

    // listen for submit events on the signup form

    var signupForm = document.querySelector("#signup-form");
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // get value out of the email input
        var emailInput = document.querySelector("#email");
        var email = emailInput.value.trim();

        // create a user using the jsonplaceholder API POST request
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        // if successful, redirect to the signup thank you
            .then(function(response) {
                if (response.ok && response.status === 201) {
                    window.location.assign('./signup-thankyou.html?email=' + email);
                }
            })
            // to catch errors, will only run if something happens along the way, should always do
            .catch(function(error) {
                alert("Error creating user");
                console.log(error);
            })
    });
        // event.preventDefault();
        // get the value out of the #email input 
        // create a user using the jsonplaceholder API
            // if successful
                // redirect to the signup-thankyou.html?email=<email_here>

});