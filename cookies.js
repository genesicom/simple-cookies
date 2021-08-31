(function () {
  // Create STORE
  const store = window.localStorage;

  // Create cookies BOX
  const cookies = document.createElement('DIV');
  cookies.style.opacity = '0';
  cookies.style.transform = 'scale(0)';
  cookies.style.transition = 'all 200ms ease-out';
  cookies.style.transformOrigin = 'bottom right';
  cookies.style.position = 'fixed';
  cookies.style.bottom = '2rem';
  cookies.style.right = '3rem';
  cookies.style.boxShadow = '0 0 40px rgba(0,0,0,0.17)';
  cookies.style.padding = '2rem';
  cookies.style.width = '300px';
  cookies.style.maxHeight = '300px';
  cookies.style.overflow = 'auto';
  cookies.style.backgroundColor = 'white';
  cookies.style.zIndex = '999';
  // Create cookies TITLE
  const cookiesTitle = document.createElement('P');
  cookiesTitle.style.fontWeight = 'bolder';
  cookiesTitle.style.fontSize = '1.1rem';
  cookiesTitle.style.margin = '0 0 1rem 0';
  cookiesTitle.style.color = 'var(--text, #333333)';
  // Cookies TITLE TEXT
  const cookiesTitleText = document.createTextNode('🍪 Informativa');
  // Create cookies MESSAGE
  const cookiesMessage = document.createElement('P');
  cookiesMessage.style.fontSize = '.9rem';
  cookiesMessage.style.margin = '0 0 1rem 0';
  cookiesMessage.style.color = 'var(--text, #333333)';
  // Cookies MESSAGE TEXT
  const cookiesMessageText = document.createTextNode('Noi e terze parti selezionate utilizziamo cookie o tecnologie simili come specificato nella cookie policy. Puoi acconsentire all’utilizzo di tali tecnologie chiudendo questa informativa o continuando a navigare in altro modo.');
  // Create cookies OK button 
  const cookiesOk = document.createElement('DIV');
  cookiesOk.style.margin = '0';
  cookiesOk.style.fontSize = '.9rem';
  cookiesOk.style.cursor = 'pointer';
  cookiesOk.style.backgroundColor = 'var(--dark, #333333)';
  cookiesOk.style.display = 'inline-block';
  cookiesOk.style.padding = '.5rem .75rem';
  cookiesOk.style.color = 'var(--light, white)';
  cookiesOk.style.borderRadius = 'var(--radius, .3rem)';
  // Cookies OK TEXT
  const cookiesOkText = document.createTextNode('Ok, ho capito');
  // Create cookies NO button 
  const cookiesNo = document.createElement('A');
  cookiesNo.style.margin = '0 0 0 .5rem';
  cookiesNo.style.fontSize = '.9rem';
  cookiesNo.style.cursor = 'pointer';
  cookiesNo.style.display = 'inline-block';
  cookiesNo.style.padding = '.5rem .75rem';
  cookiesNo.style.color = 'var(--text, #333333)';
  cookiesNo.style.textDecoration = 'underline';
  // Cookies NO TEXT and ATTR
  const cookiesNoText = document.createTextNode('Dimmi di più');
  cookiesNo.href = document.querySelector('[data-policy]').dataset.policy;
  cookiesNo.setAttribute('target', '_blank');
  cookiesNo.setAttribute('download', '');
  
  // Attach ELEMENTS
  document.querySelector('body').appendChild(cookies);
  cookies.appendChild(cookiesTitle);
  cookiesTitle.appendChild(cookiesTitleText);
  cookies.appendChild(cookiesMessage);
  cookiesMessage.appendChild(cookiesMessageText);
  cookies.appendChild(cookiesOk);
  cookiesOk.appendChild(cookiesOkText);
  cookies.appendChild(cookiesNo);
  cookiesNo.appendChild(cookiesNoText);
  // and EVENTS
  cookiesOk.addEventListener('click', function() {
    store.setItem('cookiesPreference', 'yes');
    cookies.style.transform = 'scale(0)';
    cookies.style.opacity = '0';
  });

  // Check preferences 
  const preference = store.getItem('cookiesPreference');

  if(preference === 'yes') {	
    const fathom = document.createElement('SCRIPT');
    // fathom.setAttribute('src', 'https://cdn.usefathom.com/script.js');
    fathom.setAttribute('src', 'https://cdn.jsdelivr.net/gh/genesicom/simple-cookies/test.js');
    fathom.dataset.site = document.querySelector('[data-fathom]').dataset.fathom;;
    document.head.appendChild(fathom);
  } else {
    setTimeout(function() {
      cookies.style.transform = 'scale(1)';
      cookies.style.opacity = '1';
    }, 100);
  }
})();
