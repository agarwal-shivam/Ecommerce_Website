function makeAPICall(url, type, dataType) {
  return $.ajax({
    url,
    async: false,
    type,
    dataType,
    success: function (result) {
      console.log("ajax call completed");
      console.log(typeof (result));
    }
  });
}
