$(document).ready(async () => {
  const page = await getPage('home');
  await populatePage(page);
});

