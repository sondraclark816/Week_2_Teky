//This makes id "para" in the html fade out after being clicked.//
$(document).ready(function() {
    $('#para').click(function() {
        $('#para').fadeOut('slow', 'linear');
    })


//modifying h3 elements so that they are underlined//
$("h3").css("text-decoration" , "underline");


//This makes the first list item in html doc turn red//
$("ul").find("li:nth-child(3)")
    .css("color","red");






});