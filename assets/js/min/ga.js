!function(e,t,a,n,i,c,r){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,c=t.createElement(a),r=t.getElementsByTagName(a)[0],c.async=1,c.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(c,r)}(window,document,"script",0,"ga"),ga("create","UA-59973092-5","auto"),ga("require","displayfeatures"),ga("send","pageview");var eventTrack=function(e,t){e=String(e),t=String(t),ga("send","event",e,"click",t,null)};$("a").on("click",function(){var e="ebiallergy.github.io",t=$(this).data("title")||$(this).attr("title")||$(this).attr("href");t&&(eventTrack(e,t),console.log(e,t))});