// 1. make an AJAX call to get the page based on the route

const getPage = pageName => {
  console.log('GETTING PAGE: ', pageName);
  return makeAPICall(`/partials/${pageName}`, 'get', 'html');
};

populatePage = page => {
  console.log('Populating Page', page);
  $('#mainContent').html(page);
};
async function page(pageName) {
  const page = await getPage(pageName);
  populatePage(page);
}

//data
const getData = dataName => {
  console.log('GETTING DATA: ', dataName);
  return makeAPICall(`/api/${dataName}`, 'get', 'json');
};
// populateData = dataGot => {
//   console.log('Populating data', dataGot);
//   //var d = { d: "l" }
//   var arrKeys = Object.keys(dataGot);
//   console.log(arrKeys);
//   $("#dataDiv").text(dataGot[arrKeys[0]]);
// }
// async function data(data) {
//   const dataGot = await getData(data);
//   console.log(dataGot);
//   //$("#divid").text("data");
//   populateData(dataGot);
// }
