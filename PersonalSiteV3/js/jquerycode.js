///<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
//XML reference that gives us intellisense for JQuery

//Below is a fully qualified ready function
//It waits for the HTML and CSS to load before executing the code inside of the function
jQuery(document).ready(function () {
    console.log('jQuery is working!')
});

$(function (){
    //Code in here executes after HTML and CSS have loaded

    //Syntax to select elements is as follows:
    //$("css-selector").method(params);

    //Target the <li> tages inside the ul#highlights - then hide/fade-in
    $("#highlights li").hide().fadeIn(3000);

    //Target the last <li> and add a class
    $("#highlights li:last-child").addClass("text-danger");

    //.html and .text() are similar to .innerHTML and .textContent from our JS module
    //.html() will render any HTML characters and .text() will escape them
    // when assigning a jQuery  selection to a variable, the name is typically preceeded with a &
    let $writeless = $("#highlights li:last-child");
    $writeless.text("<em>Write less, Do more with jQuery!");//Print <em> tags
    $writeless.html("<em>Write less, Do more with jQuery!");//Render <em> tags

    
    //Make the h2 look clickable bt chaning the CSS
    $("#slide").on("click", function () {
        $(this).next().slideToggle();
    });

    //When the h2#slide is clicked we, slideToggle() the next sibling (<p> tag)
    $("#slide").css("cursor", "pointer");   
    
    //Fade in MiniLab
    $("#fade").css("cursor", "pointer");
    $("#fade").next().css("font-style", "italic");
    //$("#fade").hide().fadeIn(1000);

    $("#fade").on("click", function () { $(this).next().fadeToggle(); });


    $(".thumb").on("click", function () {
        //Find the src of the img that was clicked and store as a variable
        var imgSrc = $(this).attr("src");

        //Plug an <img> tag into #lightbox-content - use imgSrc as the src
        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive"/>');

        //Make the lightbox visible by fading in
        $("#lightbox-container").fadeIn(500);

        //When the user clicks anywhere in the #lightbox-container, fadeOut()
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });
    });


});//end read()