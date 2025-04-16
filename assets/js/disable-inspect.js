document.addEventListener('keydown', function (event) {
  if (event.key === 'F12' || event.key === 'Alt') {
    event.preventDefault();
  }
});

document.addEventListener('contextmenu', (event) => event.preventDefault());
