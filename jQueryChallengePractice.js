$(function() {

$("#add").click(function(ev) {
    $("ul").append("<li>Item2<button class='remove'>Remove</br></li>");
});

$(".remove")>click(function(ev) {

        console.log(ev);
        $(ev.target).parent()
        .fadeOut();



$("#name").blur(function() {
    var name = $("#name").val();
    alert("Hello, " + name);
    
    });

});