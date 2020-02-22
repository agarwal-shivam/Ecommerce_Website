$(document).ready(() => {
    $('#product1').click(() => {
        console.log('cart ajax  1 is coming');
        var URL = 'cart/' + $('#product1').attr("value");
        $.ajax({

            url: URL,
            //contentType: "application/json; charset=utf-8",
            type: 'GET',
            success: function () {
                //FOR LEARNING PURPOSES
                // console.log('ajax call was successful');
                // console.log(data);
                // console.log(Object.keys(data));
                // console.log(data.product1);
                console.log('ajax call was successful');
                $("#product1").text("ADDED");
            }
        });
    });

    $('#product2').click(() => {
        console.log('cart ajax  2 is coming');
        var URL = 'cart/' + $('#product2').attr("value");
        $.ajax({

            url: URL,
            type: 'GET',
            success: function () {
                console.log('ajax call was successful');
                $("#product2").text("ADDED");
            }
        });
    });

    $('.product2').click(() => {
        console.log('wishlist ajax  2 is coming');
        var URL = 'wishlist/' + $('.product2').attr("class");
        console.log(URL);
        $.ajax({

            url: URL,
            type: 'GET',
            success: function () {
                console.log('ajax call was successful');

                $(".product2").attr('src', 'redheart.jpg');
            }
        });
    });

    $('.product1').click(() => {
        console.log('wishlist ajax 1 is coming');
        var URL = 'wishlist/' + $('.product1').attr("class");
        console.log(URL);
        $.ajax({
            url: URL,
            type: 'GET',
            success: function () {
                console.log('ajax call was successful');
                //$("#product2").text("ADDED");
                $(".product1").attr('src', 'redheart.jpg');
            }
        });
    });
    // $('#hwid').click(() => {
    //     $(#containerid).load("test.html");
    // });
});

function test(q) {
    //$().load
    var URL = q;
    console.log(q);
    console.log('function call was successful');
    $.ajax({

        url: URL,
        type: 'GET',
        dataType: 'html',
        success: function (result) {
            console.log('ajax call was successful');
            $('#containerid').load(result);



        }



    });


}

