$(document).ready(async () => {
  const p = await getData('home');
  populateDATA = p => {
    $("#dataDiv").text(p.product2.name + "DATA");
  }
  await populateDATA(p);

});
$("#buttonid").click(() => {
  alert("botton clicked");
})
