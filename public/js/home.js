'use strict';
var fetchedData;

$(document).ready(async () => {
  fetchedData = await getData('home');
  let populateDATA = (fetchedData) => {
    var keysArray = Object.keys(fetchedData);
    var html = "<div class='row'>";
    for (let i = 0; i < Object.keys(fetchedData).length; i++) {
      var path_fetch = fetchedData[keysArray[i]]['path'];
      var name_fetch = fetchedData[keysArray[i]]['name'];
      var price_fetch = fetchedData[keysArray[i]]['price'];
      var id_fetch = fetchedData[keysArray[i]]['id'];
      var seller_fetch = fetchedData[keysArray[i]]['sold_by'];
      html += "<div class='col-5'>"
      html += "<div class='card border-0' style='width: 22rem;'> <img class='card-img-center' src='" + path_fetch + "' id=" + id_fetch + " onclick='openProductDescription(id)' style='width:200px;height:200px;cursor:pointer'> <div class='card-body'><h5 class='card-title text-left'>" + name_fetch + "</h5><div class='row'><div class='col'><p class='card-text text-left' style='color:gray'>" + seller_fetch + "</p></div><div class='col'><div class='row'><h6 class='card-text text-right'>₹" + price_fetch + "</h6> </div> <div class='row'> <img src='./images/cartImage.jpg' id=" + id_fetch + " value=" + id_fetch + " onclick='addToCartData(id)' width='30px' height='30px' style='cursor:pointer'></img></div> </div> </div> </div> </div> </div>"
    }
    html += "</div>"
    $("#dataDiv2").append(html);
  }
  await populateDATA(fetchedData);
});

// window.addEventListener('popstate', function (e) {
//   console.log("popstateHome");
//   if (e.state)
//     page(e.state.pageName);
// });

$("#fetchedData.product1.id").click(() => {
  $("#fetchedData.product1.id").text("ADDED");
})

//Add to cart data feature
function addToCartData(id) {
  console.log("ADDED");
  makeAPICall(`api/cart/${id}`, 'post', 'json');
  $("#" + id).text("ADDED");
}

//product description page opens on clicking the product image
function openProductDescription(productId) {
  $("#dataDiv2").hide();
  $(".col-4").hide();
  var html = "<script>window.history.pushState({},null,'productId')</script>";
  var id_fetch = fetchedData[productId]['id'];
  var path_fetch = fetchedData[productId]['path'];
  var path_fetch1 = fetchedData[productId]['path1'];
  var path_fetch2 = fetchedData[productId]['path2'];
  var name_fetch = fetchedData[productId]['name'];
  var price_fetch = fetchedData[productId]['price'];
  var productDescription_fetch = fetchedData[productId]['product_description'];
  var soldBy_fetch = fetchedData[productId]['sold_by'];
  var warrantyDetails_fetch = fetchedData[productId]['warranty_details'];
  var html = "<script>window.history.pushState({},null," + "'" + id_fetch + "'" + ")</script>";
  html += "<div class='card text-left bg-transparent border-white mb-3(style='width: 40rem;')'><div class='row'><div class='col-6'><div class='card-header bg-white border-0'><div id='carouselExampleSlidesOnly' class='carousel slide' data-ride='carousel'><div class='carousel-inner'> <div class='carousel-item active'>  <img src=" + path_fetch + " class='d-block w-100 bg-transparent border-0' style='width:100%;height:100%;'></div><div class='carousel-item'>  <img src='images/camera.jpg' class='d-block w-100 bg-transparent border-0' style='width:100%;height:100%;'></div> <div class='carousel-item'>  <img src='images/camera1.jpg' class='d-block w-100 bg-transparent border-0' style='width:100%;height:100%;'></div></div><a class='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'> <span class='carousel-control-next-icon' aria-hidden='true'></span> <span class='sr-only'>Next</span> </a></div></div><div class='row'> <div class='col'> <img src=" + path_fetch + " style='width: 30px; height: 30px'> </div> <div class='col'> <img src=" + path_fetch1 + " style='width: 30px; height: 30px; '></div> <div class='col'> <img src=" + path_fetch2 + " style='width: 30px; height: 30px; '> </div> </div></div><div class=col-6><div class='card-body'><ul class='list-group list-group-flush border-0'><li class='list-group-item border-0 text-grey' style='color:gray' id='li1'>" + soldBy_fetch + "</li><li class='list-group-item border-0' id='li1'><h4>" + name_fetch + "</h4><li class='list-group-item border-0' id='li1'></li><li class='list-group-item border-0' id='li1'>" + productDescription_fetch + "</li><li class='list-group-item border-0' id='li1'></li></ul><p>Price per unit</p><div class='row'> <div class='col'><h3>₹" + price_fetch + "</h3></div> <div class='col'><a class='btn btn-primary bg-dark text-white border-dark' href='/buy_now'>BUY NOW</a></div>";
  //html += "<div class='card text-left bg-transparent border-white mb-3(style='width: 40rem;')'><div class='row'><div class='col-6'><div class='card-header bg-white border-0'>  <img src=" + path_fetch + " class='bg-transparent border-0' style='width:100%;height:100%;'></div><div class='row'> <div class='col'> <img src=" + path_fetch + " style='width: 30px; height: 30px'> </div> <div class='col'> <img src=" + path_fetch1 + " style='width: 30px; height: 30px; '></div> <div class='col'> <img src=" + path_fetch2 + " style='width: 30px; height: 30px; '> </div> </div></div><div class=col-6><div class='card-body'><ul class='list-group list-group-flush border-0'><li class='list-group-item border-0 text-grey' style='color:gray' id='li1'>" + soldBy_fetch + "</li><li class='list-group-item border-0' id='li1'><h4>" + name_fetch + "</h4><li class='list-group-item border-0' id='li1'></li><li class='list-group-item border-0' id='li1'>" + productDescription_fetch + "</li><li class='list-group-item border-0' id='li1'></li></ul><p>Price per unit</p><div class='row'> <div class='col'><h3>₹" + price_fetch + "</h3></div> <div class='col'><a class='btn btn-primary bg-dark text-white border-dark' href='/buy_now'>BUY NOW</a></div>";
  // html += "<div class='card text-left text-black bg-transparent border-white mb-3(style='width: 30rem;')'><div class=row><div class=col><div class='card-header bg-white border-0'><div id='carouselExampleControls card-right' class='carousel slide' data-ride='carousel'> <div class='carousel-inner'> <div class='carousel-item active'>  <img src=" + path_fetch + " class='d-block w-100 border-0' style='width:px;height:200px;'></div></div></div><div class=col><div class='card-body'><ul class='list-group list-group-flush border-0'><li class='list-group-item border-0' id='li1'><h5>" + name_fetch + "</h5></li><li class='list-group-item border-0' id='li1'><h6>SELLER:</h6>" + soldBy_fetch + "</li><li class='list-group-item border-0' id='li1'><h6>PRODUCT DETAILS:</h6>" + productDescription_fetch + "</li><li class='list-group-item border-0' id='li1'><h6>WARRANTY DETAILS:</h6>" + warrantyDetails_fetch + "</li></ul><p>Price per unit</p><h3>₹" + price_fetch + "</h3>";
  html += " <img src='./images/cartImage.jpg' width='30px' height='30px' id=" + id_fetch + " value=" + id_fetch + " onclick='addToCartData(id)' style='cursor:pointer'></img></div></div></div></div></div>";
  $("#dataDiv1").append(html);
}
//Add to wishlist feature 
function addToWishlistData(id) {
  console.log("ADDED");
  makeAPICall(`api/wishlist/${id}`, 'post', 'json');
  $("#" + id).text("ADDED");
}

