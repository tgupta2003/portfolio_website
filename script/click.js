document.addEventListener('DOMContentLoaded', function() {

//CLICKING ON BUTTONS/LOGOS/TEXT TO OPEN NEW PAGES: IMP: MAKE SURE TO HAVE THESE
// FUNCTIONS BE INSIDE DOMCONTENTLOADED FUNCTION!!!

//IF JS ISNT WORKING, RIGHT CLICK-INSPECT ON PAGE AND GO TO CONSOLE TO RESOLVE ERRORS


//LOOK FOR BUGS

    //LOGO
    document.getElementById("top-logo").addEventListener("click", function() {
        window.location.href = "home.html";
    });

    //---------------------------
    //HEADER BUTTONS 
    //HOME
    document.getElementById("home-button").addEventListener("click", function() {
        window.location.href = "home.html";
    });

    //ABOUT
    document.getElementById("about-button").addEventListener("click", function() {
        window.location.href = "about.html";
    });

     //CONTACT
     document.getElementById("contact-button").addEventListener("click", function() {
        window.location.href = "contact.html";
    });

    //CONTACT
    // document.getElementById("contact-button").addEventListener("click", function() {
    //     window.location.href = "contact.html";
    // });
    //---------------------------

   
    // --------------------------------
    //PORTFOLIO LINKS-END OF PAGE + 
    //A+F
    document.getElementById("a+f-link").addEventListener("click", function() {
        window.location.href = "animation+film.html";
    });

    //graphic design
    document.getElementById("gd-link").addEventListener("click", function() {
        window.location.href = "graphic-design.html";
    });

    //photog
    document.getElementById("photo-link").addEventListener("click", function() {
        window.location.href = "photography.html";
    });

    //multimedia
    document.getElementById("multimedia-link").addEventListener("click", function() {
        window.location.href = "multimedia.html";
    });

    //SE
    document.getElementById("SE-link").addEventListener("click", function() {
        window.location.href = "SE.html";
    });

    //UX
    document.getElementById("ux-link").addEventListener("click", function() {
        window.location.href = "ux-ui.html";
    });

    //------------------------
    //BOTTOM LINKS -> PORTFOLIO

   
    


   















})