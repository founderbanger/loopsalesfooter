

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-148756277-2');



(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1572671,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');


try {
  var e = document.createElement("style");
  e.textContent = "@font-face { font-display: swap; }";
  document.documentElement.appendChild(e);
  var isFontDisplaySupported = e.sheet.cssRules[0].cssText.indexOf("font-display") != -1;
  e.remove();
} catch (e) {
  // Do something with an error if you want
}
