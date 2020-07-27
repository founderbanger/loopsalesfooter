
  //window.dataLayer = window.dataLayer || [];
  //function gtag(){dataLayer.push(arguments);}
  //gtag('js', new Date());

  //gtag('config', 'UA-148756277-2');


function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
var is_mobile = detectmob();

if (is_mobile == false) {
  $('body').append(`<script type=“text/javascript” id=“hs-script-loader” async defer src=“//js.hs-scripts.com/7620719.js”></script>`)
 /* window.intercomSettings = {
    app_id: "qgjl682x",
    //hide_default_launcher: is_mobile
  };

  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/qgjl682x';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
*/
}

