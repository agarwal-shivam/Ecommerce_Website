var singledata;
var length;
var l;
var arr;
var first_card_data;
var second_card_data;
$(document).ready(function () {

    // fetchcard().done(function (result) {
    //     whole_data(wishlist).done(function (result) {
    //         singledata = result.product1;
    //         length=Object.keys(result).length;
    //     });

    //     $("#p1").load(result);

    // });
    whole_data(wishlist).done(function (result) {
        l = Object.keys(result).length;
        arr = Object.keys(result);
        if (l == 0) {
            $("#p1").text("NO ITEMS IN WISHLIST");
        }
        else {
            fetchcard().done(function (result) {
                $("#p1").load(result);
            })
            first_card_data = result[arr[0]];
            if (l == 2) {
                fetchcard1().done(function (result) {
                    $("#p2").load(result);

                })
                second_card_data = result[arr[1]];
            }


        }
        //singledata = result;
        console.log(result);
    })
    //$("#p1").load
});

//function which will be called by card.js for card data
function first_card_data_function() {
    return first_card_data;
}
function second_card_data_function() {
    return second_card_data;
}

//functon to fetch card
function fetchcard() {
    return $.ajax({
        url: 'card',
        async: false,
        type: 'get',
        dataType: 'html'
    });
}

//function to fetch card 2
//functon to fetch card
function fetchcard1() {
    return $.ajax({
        url: 'card1',
        async: false,
        type: 'get',
        dataType: 'html'
    });
}





//function to return wishlist data length
function data_length() {
    return length;
}
