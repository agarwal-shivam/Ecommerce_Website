// 1. make an AJAX call to get the page based on the route

const getPage = pageName => {
  console.log('GETTING PAGE: ', pageName);
  return makeAPICall(`/partials/${pageName}`, 'get', 'html');
};

populatePage = page => {
  console.log('Populating Page', page);
  $('#mainContent').html(page);
};

async function goToPage(pageName) {
  window.history.pushState({ pageName: pageName }, pageName, pageName);
  page(pageName);

}

async function page(pageName) {
  const page = await getPage(pageName);
  await populatePage(page);
}

//function to get data from server
const getData = dataName => {
  console.log('GETTING DATA: ', dataName);
  return makeAPICall(`/api/${dataName}`, 'get', 'json');
};
