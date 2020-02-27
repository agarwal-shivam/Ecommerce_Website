function makeAPICall(url, type, dataType) {
  return $.ajax({
    url,
    async: false,
    type,
    dataType,
    success: function (result) {
      console.log("ajax call completed" + result);
      console.log(typeof (result));
    }
  });
}
