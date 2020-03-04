'use strict';
var fetchedData;
$(document).ready(async () => {
  fetchedData = await getData('wishlist');
  let populateDATA = fetchedData => {
    var html = "";
    var keysArray = Object.keys(fetchedData);
    if (Object.keys(fetchedData).length == 0) {
      $("#dataDiv2").text("WISHLIST EMPTY");
    }
    else {
      for (let i = 0; i < Object.keys(fetchedData).length; i++) {
        var path_fetch = fetchedData[keysArray[i]]['path'];
        var name_fetch = fetchedData[keysArray[i]]['name'];
        var price_fetch = fetchedData[keysArray[i]]['price'];
        var id_fetch = fetchedData[keysArray[i]]['id'];

        html += "<div class='card text-left text-black bg-transparent border-dark mb-3(style='width: 18rem;')'><div class=row><div class=col><div class='card-header'><img src=" + path_fetch + " class='card-img-top bg-transparent' id=' " + id_fetch + "' onclick='openProductDescription(id)' style='width:200px;height:200px;' id='im'></div></div><div class=col><div class='card-body'><ul class='list-group list-group-flush'><li class='list-group-item' id='li1'>" + name_fetch + "</li><li class='list-group-item' id='li1'>" + price_fetch + "</li></ul>";
        html += "<a class='btn btn-primary' href='/buy_now'>BUY NOW</a><a class='btn btn-primary cartButton' ' id=" + id_fetch + " value=" + id_fetch + " onclick='addToCartData(id)'>ADD TO CART</a></div></div></div></div>";
      }
      $("#dataDiv2").append(html);
    }
  }
  await populateDATA(fetchedData);

});
// window.addEventListener('popstate', function (e) {
//   console.log("popstateWishlist");
//   if (e.state)
//     page(e.state.pageName);
// });
$("#fetchedData.product1.id").click(() => {
  $("#fetchedData.product1.id").text("ADDED");
})


