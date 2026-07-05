(function () {
  if (document.querySelector('link[rel="icon"]')) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = 'Images/Favicon/favicon1.ico';
  document.head.appendChild(link);
})();
