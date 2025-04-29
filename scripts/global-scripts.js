// Load Google Analytics (GA4)
(function() {
  var gtagScript = document.createElement('script');
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-VBBPFKB1SN";
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', G-VBBPFKB1SN');
})();