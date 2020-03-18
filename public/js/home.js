'use strict';
var fetchedData;

$(document).ready(async () => {
  fetchedData = await getData('home');
  let populateDATA = (fetchedData) => {
    const keysArray = Object.keys(fetchedData);
    let html = `<div class='row'>`;
    //let html = `<table id="table">`
    for (let i = 0; i < Object.keys(fetchedData).length; i++) {
      let pathFetch = fetchedData[keysArray[i]]['path'];
      let nameFetch = fetchedData[keysArray[i]]['name'];
      let priceFetch = fetchedData[keysArray[i]]['price'];
      let idFetch = fetchedData[keysArray[i]]['id'];
      let sellerFetch = fetchedData[keysArray[i]]['sold_by'];
      // html += `<th><tr><td><img src='${pathFetch}' id="${idFetch}" onclick='openProductDescription(id)' style='width:200px;height:200px;cursor:pointer'> </td></tr>`;
      // html += `<tr><td><h5>${nameFetch}</h5></td></tr>`;
      // html += `<tr><td><p>${sellerFetch}   ₹${priceFetch}</p></td></tr></th>`;


      html += `<div class='col-6'>`
      html += `<div class='card border-0'>
                 <img class='card-img-center' src='${pathFetch}' id="${idFetch}" onclick='openProductDescription(id)' style='width:200px;height:200px;cursor:pointer'> 
                <div class='card-body'>
                 <h5 class='card-title text-left'>${nameFetch}</h5>
                 <div class='row'>
                  <div class='col'>
                   <p class='card-text text-left' style='color:gray'>${sellerFetch}</p>
                  </div>
                  <div class='col'>
                   <div class='row'>
                    <h6 class='card-text text-right'>₹${priceFetch}</h6> 
                   </div> 
                   <div class='row'>
                      <img src='./images/cartImage.jpg' id=${idFetch} value=${idFetch} onclick='addToCartData(id)' width='30px' height='30px' style='cursor:pointer'></img>
                   </div> 
                  </div>
                 </div>
                </div> 
              </div>
            </div>`
    }
    html += `</div>`
    //html += `</table>`
    $("#dataDiv2").append(html);
  }
  await populateDATA(fetchedData);


  //console.log("userdata" + userDataq.passport);
});

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
  $("#dataDiv2").empty();
  $(".col-4").remove();
  // var html = "<script>window.history.pushState({},null,'productId')</script>";
  let idFetch = fetchedData[productId]['id'];
  let pathFetch = fetchedData[productId]['path'];
  let pathFetch1 = fetchedData[productId]['path1'];
  let pathFetch2 = fetchedData[productId]['path2'];
  let nameFetch = fetchedData[productId]['name'];
  let priceFetch = fetchedData[productId]['price'];
  let productDescriptionFetch = fetchedData[productId]['product_description'];
  let soldByFetch = fetchedData[productId]['sold_by'];
  window.history.pushState({}, null, `${idFetch}`)
  // var html = "<script>window.history.pushState({},null," + "'" + idFetch + "'" + ")</script>";
  let html = '';
  html += `<div class='card text-left bg-transparent border-white mb-3' style='width: 40rem;' >
            <div class='row'>
              <div class='col'>
                <div class='card-header bg-white border-0'>
                  <img src= ${pathFetch} class='d-block w-100 bg-transparent border-0' style='width:200px;height:300px;'>
                </div>
                <div class='row'> 
                  <div class='col'> <img src= ${pathFetch} style='width: 30px; height: 30px'> </div>
                  <div class='col'> <img src= ${pathFetch1} style='width: 30px; height: 30px; '></div>
                  <div class='col'> <img src= ${pathFetch2} style='width: 30px; height: 30px; '> </div> 
                </div>
              <div class=col>
                <div class='card-body'>
                  <ul class='list-group list-group-flush border-0'>
                    <li class='list-group-item border-0 text-grey' style='color:gray'> ${soldByFetch} </li>
                    <li class='list-group-item border-0'><h4>${nameFetch}</h4><li class='list-group-item border-0'></li>
                    <li class='list-group-item border-0'>${productDescriptionFetch} </li>
                    <li class='list-group-item border-0'></li></ul>
                    <p>Price per unit</p>
                  <div class='row'>
                   <div class='col'><h3>₹${priceFetch} </h3></div>
                   <div class='col'><a class='btn btn-primary bg-dark text-white border-dark' href='/buy_now'>BUY NOW</a>
                    <img src='./images/cartImage.jpg' width='30px' height='30px' id= ${idFetch} value= ${idFetch} onclick='addToCartData(id)' style='cursor:pointer'></img>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  //html += ` <img src='./images/cartImage.jpg' width='30px' height='30px' id= ${idFetch} value= ${idFetch} onclick='addToCartData(id)' style='cursor:pointer'></img></div></div></div></div></div>`;
  $("#mainContent").append(html);
}
//Add to wishlist feature 
function addToWishlistData(id) {
  console.log("ADDED");
  makeAPICall(`api/wishlist/${id}`, 'post', 'json');
  $("#" + id).text("ADDED");
}

