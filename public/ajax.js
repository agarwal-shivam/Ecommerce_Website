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

    var URL = q;
    console.log(q);
    console.log('function call was successful');
    $.ajax({

        url: URL,
        type: 'GET',
        dataType: 'html',
        success: function (result) {
            //var q = result;
            console.log('ajax call was successful');
            console.log()
            $('#containerid').load(result);
            //another ajax call for wishlist data
            if (URL == 'wishlist') {
                var second_ajax_url = 'wishdata';
            }
            if (URL == 'cart') {
                var second_ajax_url = 'cartdata';
            }

            $.ajax({

                url: second_ajax_url,
                typ2: 'get',
                dataType: 'JSON',
                success: function (result) {
                    console.log(result);
                    var data_fetch = result;
                    console.log(data_fetch);
                    console.log(q);//wishlist.html
                    console.log(Object.keys(data_fetch));
                    var t = Object.keys(data_fetch);
                    //console.log(data_fetch.t[0].name);
                    //first steps to follow
                    var count = Object.keys(data_fetch).length;
                    console.log(count);
                    // console.log(q);
                    //var u = '#' + q;
                    //console.log(q);
                    if (count == 0) {
                        //$(u).after("No items in wishlist");
                        if (q == 'wishlist') {
                            console.log("cond true");
                            $("#p1").append("NO ITEMS IN THE WISHLIST");
                        }
                        else {
                            console.log("cond false");
                            $("#p2").append("NO ITEMS IN THE CART");
                        }
                    }



                    //console.log(data_fetch[0].name);
                    // console.log(data_fetch.product1.path);
                    // $("#im").attr("src", data_fetch.product1.path);
                    // var z = 'data_fetch.' + 'product1.name';
                    // var w=Object.keys(data_fetch)[i].path;
                    // console.log(w);
                    //document.getElementById("li1").innerHTML = data_fetch.product1.name;
                    // $("#header1").text();
                    //$("#im").attr(src = data_fetch.product1.path);


                    //adding more cards


                    else {
                        // $("p").hide();
                        var html = "";
                        // for (i = 1; i <= Object.keys(data_fetch).length; i++) {
                        //     // var path='data_fetch.'
                        //     //var w = Object.keys(data_fetch)[i].path;
                        //     // var z = 'data_fetch.product' + i + '.path';
                        //     var path_fetch = data_fetch['product' + i]['path'];
                        //     var name_fetch = data_fetch['product' + i]['name'];
                        //     var price_fetch = data_fetch['product' + i]['price'];
                        var p = Object.keys(data_fetch);
                        //     console.log(p[0]);
                        for (i = 0; i < Object.keys(data_fetch).length; i++) {
                            //console.log(data_fetch[p[0]]['path']);
                            var path_fetch = data_fetch[p[i]]['path'];
                            var name_fetch = data_fetch[p[i]]['name'];
                            var price_fetch = data_fetch[p[i]]['price'];

                            // var z = data_fetch['product' + 1]['path'];
                            // console.log(z);
                            // var p = 'data_fetch.product' + i + '.name';
                            //console.log(z.valueOf());
                            // console.log(z);
                            // console.log(p.valueOf());
                            //data_fetch.
                            html += "<div class='card'><div class=row><div class=col><div class='card-header'><img src=" + path_fetch + " class='card-img-top' style='width:200px;height:200px;' id='im'></div></div><div class=col><div class='card-body'><ul class='list-group list-group-flush'><li class='list-group-item' id='li1'>" + name_fetch + "</li><li class='list-group-item' id='li1'>" + price_fetch + "</li></ul>";
                            if (q == 'wishlist.html') {
                                // html += "<a class='btn btn-primary' id='product1' value='product1'>ADD TO CART</a></div></div></div></div>";
                            }
                            else {
                                html += "<a class='btn btn-primary' id='data_fetch.product1.id' value='data_fetch.product1.id' href='/buy_now'>BUY NOW</a></div></div></div></div>";
                            }
                        }
                        //html += "</div></div></div></div>";
                        //html += "<br>";
                        if (q == 'wishlist') {
                            console.log("cond true");
                            // $("#header").hide();
                            $("#p1").append(html);
                        }
                        else {
                            console.log("cond false");
                            $("#p2").append(html);
                        }
                    }








                }

            });
        }
    });



}






