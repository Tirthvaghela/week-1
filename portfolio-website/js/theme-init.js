(function () {
  try {
    if (localStorage.getItem('tv-theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (error) {}
})();
