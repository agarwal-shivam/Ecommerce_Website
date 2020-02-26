function ajax1(url) {
    var l;
    var arr;
    var ht;
    var cardhtml_toload;
    htmlfetch(url).done(function (result) {
        inserthtml1(result);
        ht = result;
        console.log(result);
    });
    whole_data(url).done(function (result) {
        l = Object.keys(result).length;
        arr = Object.keys(result);
        //console.log(result[arr[0]]);
        //var t = result[arr[0]];
        //console.log(t.name);
        for (var i = 0; i < l; i++) {
            fetchcard(result[l[i]], i).done(function (result) {
                console.log("loop");
                cardhtml_toload = result;
                //
            });
            insertcard(cardhtml_toload, i + 1);
            //     set_card_attr(result[l[i]])  ; 
        }
    });
    // for (var i = 0; i < l; i++) {
    //     fetchcard()
    // }
    //inserthtml1(ht);
    console.log('load me at last' + l);
    //setTimeout(function () { console.log('load me at last'); }, 10000)
}

//function to fetch whole data
function whole_data(url) {
    var x = 'wishdata';
    if (url == 'cartlist') {
        x = 'cartdata';
    }
    return $.ajax({
        url: x,
        async: false,
        type: 'get',
        dataType: 'JSON'
    });
}
//function to fetch wishlist/cart html
function htmlfetch(url) {
    return $.ajax({
        url: url,
        async: false,
        type: 'GET',
        dataType: 'html'
    });
}
//funtion to load wishlist/cart html in index conrainerid
function inserthtml1(result) {
    $('#containerid').load(result);
}

//functon to fetch card
function fetchcard(carddata, i) {
    return $.ajax({
        url: 'card',
        async: false,
        type: 'get',
        dataType: 'html'
    });

}

//insert card function
function insertcard(card, j) {
    console.log(card);
    var z = "#p" + j;
    $("#p1").load(card);
}



//funcion to update card
function set_card_attr(carddata) {
    $('#cardbody').attr(src = carddata.path);
}