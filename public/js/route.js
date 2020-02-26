// 1. make an AJAX call to get the page based on the route

const getPage = pageName => {
  console.log('GETTING PAGE: ', pageName);
  return makeAPICall(`/partials/${pageName}`, 'get', 'html');
};

populatePage = page => {
  console.log('Printing Page', page);
  $('#mainContent').html(page);
};
