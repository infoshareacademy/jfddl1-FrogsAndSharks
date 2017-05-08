/**
 * Created by Asus on 2017-05-08.
 */
/*$(function() {
 $(document).on('click', 'a.page-scroll', function(event) {
 var $anchor = $(this);
 $('html, body').stop().animate({
 scrollTop: $($anchor.attr('href')).offset().top
 }, 1500, 'easeInOutExpo');
 event.preventDefault();
 });
 });*/

$(document).ready(function () {

    $('.smooth-slide').click(function (e) {

        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);

        e.preventDefault();

    })

});