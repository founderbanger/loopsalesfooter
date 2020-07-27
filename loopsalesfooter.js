
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
  // HubSpot Script Loader. Please do not block this resource. See more: http://hubs.ly/H0702_H0

!function(t,e,r){if(!document.getElementById(t)){var n=document.createElement("script");for(var a in n.src="https://js.hscollectedforms.net/collectedforms.js",n.type="text/javascript",n.id=t,r)r.hasOwnProperty(a)&&n.setAttribute(a,r[a]);var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("CollectedForms-7620719",0,{"crossorigin":"anonymous","data-leadin-portal-id":7620719,"data-leadin-env":"prod","data-loader":"hs-scriptloader","data-hsjs-portal":7620719,"data-hsjs-env":"prod"});
!function(t,e,r){if(!document.getElementById(t)){var n=document.createElement("script");for(var a in n.src="https://js.hs-banner.com/7620719.js",n.type="text/javascript",n.id=t,r)r.hasOwnProperty(a)&&n.setAttribute(a,r[a]);var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("cookieBanner-7620719",0,{"data-loader":"hs-scriptloader","data-hsjs-portal":7620719,"data-hsjs-env":"prod"});
!function(e,t){if(!document.getElementById(e)){var c=document.createElement("script");c.src="//js.hs-analytics.net/analytics/1595873400000/7620719.js",c.type="text/javascript",c.id=e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(c,n)}}("hs-analytics");
!function(t,e,r){if(!document.getElementById(t)){var n=document.createElement("script");for(var a in n.src="https://js.usemessages.com/conversations-embed.js",n.type="text/javascript",n.id=t,r)r.hasOwnProperty(a)&&n.setAttribute(a,r[a]);var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("hubspot-messages-loader",0,{"data-loader":"hs-scriptloader","data-hsjs-portal":7620719,"data-hsjs-env":"prod"});
}

