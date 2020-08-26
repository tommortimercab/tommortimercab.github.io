// Replacement for jquery doc ready
function ready(callback)
{
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
}

ready(function ()
{

    /* Setup side nav centering functionality */

    // When we scroll, run the centering function
    window.onscroll = function () { centerFunction() };

    $(function ()
    {
        jQuery.fn.center = function ()
        {
            // Get the center of the screen
            this.css("left", ($(window).width() / 2) - (this.outerWidth() / 2) + 349);
            return this;
        }
    });

    // Make the side nav the scrollable item
    var scrollItem = document.getElementsByClassName("side-nav")[0];

    /* Fix and center side nav on scroll */

    function centerFunction()
    {

        // How far down the page are we?
        var scrollBottom = window.pageYOffset + $(window).height();

        //How tall is the page?
        var pageHeight = $("#main").height();

        // If we have scrolled beyond the header...
        if (window.pageYOffset > 288) {
            // ... and beyond the footer
            if (scrollBottom > (pageHeight + 900)) {
                // We don't overlap the nav over the footer
                scrollItem.classList.remove("fix-nav");
            }
            else {
                // If we are not at the footer yet, fix nav....
                scrollItem.classList.add("fix-nav");
                // And if we are at responsive desktop size, center the nav
                if ($(window).width() < 1680 && $(window).width() > 1036) {
                    $(scrollItem).center();
                }
            }
        } else {
            // If we're still at the top of the page
            scrollItem.classList.remove("fix-nav");
        }
    }

});