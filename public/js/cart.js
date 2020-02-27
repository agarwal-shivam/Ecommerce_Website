$(document).ready(async () => {
  const p = await getData('cart');
  //await populateData(p);

  populateDATA = p => {
    $("#dataDiv").text(p.cartkey + "DATA");

  }
  await populateDATA(p);
});
$("#buttonid").click(() => {
  alert("botton clicked");
})
//populateData(p);