'use strict';
var fetchedData;

$(document).ready(async () => {
  fetchedData = await getData('home');

  let populateDATA = (fetchedData) => {
    var html = "";
    var keysArray = Object.keys(fetchedData);

    for (let i = 0; i < Object.keys(fetchedData).length; i++) {
      var path_fetch = fetchedData[keysArray[i]]['path'];
      var name_fetch = fetchedData[keysArray[i]]['name'];
      var price_fetch = fetchedData[keysArray[i]]['price'];
      var id_fetch = fetchedData[keysArray[i]]['id'];

      html += "<div class='card text-left text-black bg-transparent border-dark mb-3(style='width: 18rem;')'><div class=row><div class=col><div class='card-header bg-white'><img src=" + path_fetch + " class='card-img-top bg-transparent' id='" + id_fetch + "' onclick='openProductDescription(id)' style='width:200px;height:200px;'></div></div><div class=col><div class='card-body'><ul class='list-group list-group-flush'><li class='list-group-item' id='li1'>" + name_fetch + "</li><li class='list-group-item' id='li1'>" + price_fetch + "</li></ul>";
      html += "<a class='btn btn-primary bg-dark text-white border-dark' href='/buy_now'>BUY NOW</a> <a class='btn btn-primary bg-dark text-white border-dark cartButton' ' id=" + id_fetch + " value=" + id_fetch + " onclick='addToCartData(id)'>ADD TO CART</a> <a class='btn btn-primary bg-dark text-white border-dark cartButton' ' id=" + id_fetch + " value=" + id_fetch + " onclick='addToWishlistData(id)'>ADD TO WISHLIST</a></div></div></div></div><br>";
    }
    $("#dataDiv2").append(html);
  }
  await populateDATA(fetchedData);
  //productpage



});
$("#buttonid").click(() => {
  alert("botton clicked");
})
$("#fetchedData.product1.id").click(() => {
  $("#fetchedData.product1.id").text("ADDED");
})
function addToCartData(id) {
  console.log("ADDED");
  makeAPICall(`api/cart/${id}`, 'post', 'json');
  $("#" + id).text("ADDED");
}
function openProductDescription(productId) {
  $("#dataDiv2").hide();
  var html = "";
  var id_fetch = fetchedData[productId]['id'];
  var path_fetch = fetchedData[productId]['path'];
  var name_fetch = fetchedData[productId]['name'];
  var price_fetch = fetchedData[productId]['price'];
  var productDescription_fetch = fetchedData[productId]['product_description'];
  var soldBy_fetch = fetchedData[productId]['sold_by'];
  var warrantyDetails_fetch = fetchedData[productId]['warranty_details'];
  html += "<div class='card text-left text-black bg-transparent border-white mb-3(style='width: 30rem;')'><div class=row><div class=col><div class='card-header bg-white'><img src=" + path_fetch + " class='card-img-right bg-transparent' style='width:100%;height:100%;'></div></div><div class=col><div class='card-body'><ul class='list-group list-group-flush'><li class='list-group-item' id='li1'><h5>" + name_fetch + "</h5></li><li class='list-group-item' id='li1'><h6>SELLER:</h6>" + soldBy_fetch + "</li><li class='list-group-item' id='li1'><h6>PRODUCT DETAILS:</h6>" + productDescription_fetch + "</li><li class='list-group-item' id='li1'><h6>WARRANTY DETAILS:</h6>" + warrantyDetails_fetch + "</li></ul><p>Price per unit</p><h3>₹" + price_fetch + "</h3>";
  html += "<a class='btn btn-primary bg-dark text-white border-dark' href='/buy_now'>BUY NOW</a>   <a class='btn btn-primary cartButton bg-dark text-white border-dark' ' id=" + id_fetch + " value=" + id_fetch + " onclick='addToCartData(id)'>ADD TO CART</a></div></div></div></div>";
  $("#dataDiv1").append(html);
}
function addToWishlistData(id) {
  console.log("ADDED");
  makeAPICall(`api/wishlist/${id}`, 'post', 'json');
  $("#" + id).text("ADDED");
}

