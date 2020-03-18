$(document).ready(async () => {
  const page = await getPage('home');
  await populatePage(page);
  const userDataq = login().then((result) => {
    if (result.passport) {
      console.log(result.passport.user.profile._json.name);
      console.log(result.passport.user.profile._json.picture);
      $('#login').text(`LOGOUT `);
      $('#login').removeAttr("onclick");
      $('#login').attr("href", '/logout');
      const html1 = `Hey ${result.passport.user.profile._json.name}<img src=${result.passport.user.profile._json.picture} width='30px' height='30px' style='border-radius:50%'>`
      $('#userDetail').append(html1);

    }
    else {
    }

  });
});
//login function
function login() {
  console.log("login");
  return makeAPICall(`/api/user`, 'get', 'json');
}

