function makeAPICall(url, type, dataType) {
  return $.ajax({
    url,
    async: false,
    type,
    dataType
  });
}
