
/*$(document).getElementById("#add").onclick = function() {
    
    var text = document.getElementById("#item").value; 
    var li = "<li>" + text + "</li>";

   
    $(document).getElementById("item").appendChild(li);
}
console.log('add');*/




/*-----------Michael's JS for List Challenge---------------*/


$(document).ready(function() {
    $('button#add').click(function(ev) { //This makes the add button//
        var newCar = $('#newcar').val();
        if(newCar =="") return;
    $('#list').append('<li>' + newCar + '</li>' + '<button class = "remove">(x)</button>');
    });


    $('#list').click('button.remove', function(ev) { //This makes the remove button//
        $(ev.target).parent().remove();
    });
});
