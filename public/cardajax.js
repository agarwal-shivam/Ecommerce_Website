
//console.log(test1(wishlist));
//var z = j();
//console.log(z);

// $( document ).ready(function() {
//     //console.log( "ready!" );
//     $('#cardimage'),attr(src,'');

// });
$(document).ready(function () {
    // var data = single_card_data();
    //var l = data_length();
    var data = first_card_data_function();
    console.log(data.name);
    //console.log(data.product1.name);
    $("#cardimage").attr(src, 'data.product1.path');


    //$("im1").attr(src,'');

});
$("#cardimage").attr(src, 'data.product1.path');


//function to fetch card data