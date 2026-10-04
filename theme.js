/* TravelBharat pre-paint theme (must stay a blocking head script) */
    try {
      var _tbTheme = localStorage.getItem('travelbharat-theme');
      if (_tbTheme === 'dark' || _tbTheme === 'light') document.documentElement.setAttribute('data-theme', _tbTheme);
    } catch (e) {}
  
