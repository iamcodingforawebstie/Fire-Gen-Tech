//This is to get the ids
( function ( ) { 
    const dlog = document.getElementById( 'dlog' );
    const info = document.getElementById( 'info' );
    const show = document.getElementById( 'show' );
    const cncl = document.getElementById( 'cncl' );
    const newsletterForm = document.getElementById('newsletterForm'); // Select the form
//This adds the event listener to if the button was clicked
    show.addEventListener( 'click', function ( ) { 
        dlog.showModal( );
        info.innerText = 'Modal Dialog Open';
    } );
    //This is the info incase the dialog was closed
    cncl.addEventListener( 'click', function ( ) { 
        dlog.close( );
        info.innerText = ''; 
    } );

    // Listen for the form's submit event instead of button click
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the page refresh
        
        // If validation passes, this code runs:
        dlog.close();
        info.innerText = 'Thank you!';
        
        // Show the snackbar, yay!
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ 
            x.className = x.className.replace("show", ""); 
        }, 3000);
    });

} ) ( );

