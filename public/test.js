function j() {
    //return t;
    var l;
    var n = { a: 'l', m: 'p' };
    $.ajax({
        url: 'wishdata',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            l = result;
            console.log(l);
            //return 5;





        }
    });
    return n;
}