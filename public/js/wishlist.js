$(document).ready(async () => {
  const p = await getData('wishlist');
  populateDATA = p => {
    $("#dataDiv").text(p.wishlistkey + "DATA");
  }
  await populateDATA(p);
});
$("#buttonid").click(() => {
  alert("botton clicked");
})