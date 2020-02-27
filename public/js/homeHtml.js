$(document).ready(async () => {
  const page = await getPage('home');
  //console.log(page);
  await populatePage(page);

  const p = await getData('home');
  // populateDATA = p => {
  //   $("#dataDiv").text(p.product2.name + "DATA");
  // }
  // await populateDATA(p);
  //await populateData(p);

});
// $("#buttonid").click(() => {
//   alert("botton clicked");
// })
