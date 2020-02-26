
var URL;
var data_fetch_whole;
var cardhtml;
var p;

function test1(q) {

    URL = q;
    console.log(q);
    console.log('function call was successful');
    $.ajax({

        url: URL,
        type: 'GET',
        dataType: 'html',
        success: function (result) {
            p = result;
            console.log('ajax call was successful');
            console.log()
            $('#containerid').load(result);
            //$('#p1').after(result);
            //another ajax call for wishlist data
            if (URL == 'wishlist') {
                var second_ajax_url = 'wishdata';
            }
            if (URL == 'cart') {
                var second_ajax_url = 'cartdata';
            }
            //$('#p1').text("rr");
            //         }
            //     });
            //     //$('#p1').text("rr");

            // }
            // $('#p1').text("rr");
            // console.log(p);











            $.ajax({

                url: second_ajax_url,
                typ2: 'get',
                dataType: 'JSON',
                success: function (result) {
                    //$('#p1').text("rr");
                    data_fetch_whole = result;
                    console.log(data_fetch_whole);
                    $.ajax({
                        url: 'card',
                        type: 'GET',
                        dataType: 'html',
                        success: function (result) {
                            console.log("card should get loaded")
                            $('#p1').load(result);
                            if (Object.keys(data_fetch_whole).length == 2) {
                                $('#p2').load(result);
                            }

                            cardhtml = result;
                            // console.log(cardhtml);
                            // console.log(p);
                            // console.log(data_fetch_whole);
                            // console.log(cardhtml);
                        }
                    });
                    // console.log(p);
                    // console.log(data_fetch_whole);
                    // console.log(cardhtml);
                    // console.log(data_fetch_whole);
                    // $('#divid1').text("card title inserted");
                    return data_fetch_whole;

                }
            });
            // console.log(data_fetch_whole);
            // $('#divid1').text("card title inserted");
            //     console.log(p);
            //     console.log(data_fetch_whole);
            //     console.log(cardhtml);
        }
    });
    //console.log(data_fetch_whole);
    // $('#divid1').text("card title inserted");

}

//function calling() {
//console.log(test1(wishlist));
// }
console.log(Object.keys(data_fetch_whole).length);
var p = Object.keys(data_fetch_whole);

for (i = 0; i < Object.keys(data_fetch_whole).length; i++) {



    var path_fetch = data_fetch_whole[p[i]]['path'];
    var name_fetch = data_fetch_whole[p[i]]['name'];
    var price_fetch = data_fetch_whole[p[i]]['price'];
    console.log(path_fetch);
    $('#cardimage').attr('src', path_fetch);
    //console.log(data_fetch_whole);
    $('#divid1').text(name_fetch);
}
//calling();


//console.log();

//                             $('#p1').load(result);
//                             // if (URL == 'wishlist') {
//                             //     var second_ajax_url = 'wishdata';

//                             // }
//                             // if (URL == 'cart') {
//                             //     var second_ajax_url = 'cartdata';
//                             // }








//                         }







//                     });

//                     $('#ml').attr(href = "card title inserted");










//                 }


//             });

//         }

//     });



// }
