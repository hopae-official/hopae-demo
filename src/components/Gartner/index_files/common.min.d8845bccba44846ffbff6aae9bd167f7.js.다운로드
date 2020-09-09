var cookieAlertHeight=0;
var cmpCommonCookieBanner=(function(){return{init:function(){a()
}};
function a(){var e=$(".cmp-common-cookiebanner");
if(e.length==0){return
}var d=e.find(".cookie-alert");
if(CommonFunctions.storageEnabled()==true){if(localStorage==null||localStorage.getItem("firstVisit")==null||localStorage.getItem("firstVisit")!="true"){b(d)
}else{c(d)
}e.find(".close-cookie-alert").on("click",function(){d.slideUp("fast");
if(localStorage!=null){localStorage.setItem("firstVisit","true")
}c(d)
})
}}function c(d){d.css("display","none");
d.css("height","0");
d.css("padding","0");
cookieAlertHeight=0
}function b(d){d.css("display","block");
cookieAlertHeight=d.outerHeight(true)
}})();
$(document).ready(function(){cmpCommonCookieBanner.init()
});