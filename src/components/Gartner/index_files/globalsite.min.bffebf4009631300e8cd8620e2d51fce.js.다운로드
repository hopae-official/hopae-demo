$(document).ready(function(){Globalsite.geotargetBacPhoneNumber();
cmpDemandBase.init();
cmpSocialShare.init();
cmpGlobalContextualNav.init();
cmpGlobalSiteModal.init();
cmpGlobalSiteAccordion.init();
cmpGlobalSiteBackgroundContainer.init();
cmpGlobalSiteGlobalInsights.init();
cmpGlobalSiteRelatedContent.init();
cmpGlobalSiteVideoPlayer.init();
cmpGlobalSiteEloquaForm.init();
cmpGlobalSiteSearchResults.init();
cmpGlobalSiteBrandSearch.init();
cmpGlobalSiteCarousel.init();
cmpGlobalSiteTabCtrl.init();
cmpGlobalSiteFeaturedIcon.init();
cmpGlobalSiteDynamicExpertContent.init();
cmpGlobalSiteDynamicContent.init();
cmpGlobalSiteDynamicBlogContent.init();
cmpGlobalSiteDynamicNewsletterContent.init();
cmpGlobalSiteDynamicWebinarContent.init();
cmpGlobalSiteDynamicCachedWebinarContent.init();
cmpGlobalSiteDynamicPodcastContent.init();
cmpGlobalSiteDynamicPerspectivesContent.init();
cmpGlobalSiteUser.init();
cmpGlobalSiteForm.init();
cmpGlobalSiteMap.init();
cmpGlobalSiteWebinar.init();
cmpGlobalSiteAudioPlayer.init();
cmpGlobalSiteExpertProfile.init();
cmpGlobalSiteMarketingReader.init();
cmpGlobalSiteTransitMap.init();
cmpGlobalSiteHero.init();
cmpPromotionalHero.init();
cmpHeroWithEloqua.init();
cmpPageFilter.init();
cmpGlobalSiteDigitalMarkets.init();
cmpGlobalSiteGlossarySearch.init();
cmpGlobalSiteHighlightedConference.init();
cmpGlobalSiteCustomFormField.init();
cmpGlobalSiteCustomDigitalMarkets.init();
cmpGlobalSiteSignupForm.init();
cmpGlobalSiteQuiz.init();
cmpGlobalSiteDynamicFunctionList.init();
cmpGlobalSiteMma.init();
cmpImageGallery.init();
cmpGlobalSiteButton.init();
cmpGlobalSiteGlossaryAllTerm.init();
cmpGlobalSitePromotionType.init();
cmpCareerHeader.init()
});
var Globalsite={geotargetBacPhoneNumber:function(){var b="$bacContact$";
var a=$(".cmp-globalsite-globaluser").find("#bacPhoneNumber").val();
if(a!=undefined){$("label:contains('"+b+"')").each(function(){var c=$(this).html();
$(this).replaceWith(a);
$(this).show()
});
$("span:contains('"+b+"')").each(function(){var d=$(this).html();
var c=d.replace(b,a);
$(this).html(c);
$(this).show()
});
$("a[href$='"+b+"']").attr("href","tel:"+a.split(" ").join(""))
}},triggerSearch:function(c,b){if(c.which&&(c.which==13||c.which==1)){if(!b){return
}if(c.preventDefault){c.preventDefault()
}var a=$("#searchTargetUrl").val();
var d=(a.indexOf("?")==-1?"?":"&")+"keywords="+encodeURIComponent(b);
if(c.ac){d+="&context=ac"
}window.open(a+d,"_self")
}},initializeSearch:function(e){var c=this;
var f=$(e);
if(f.length==0){return
}var a=f.find(".search-inbox").width()+f.find(".custom-search-button").width();
console.log("searchBarWidth",a);
var b=f.find(".searchString:visible");
b.val(f.find("#searchStringValue").val());
b.blur(function(g){b.val(this.value)
});
b.on("result",function(h,g){c.triggerSearch({which:1,ac:true},g)
});
b.keydown(function(g){c.triggerSearch(g,$(this).val())
});
f.find(".searchNow").click(function(h){var g=$(this).parents(e).find(".searchString:visible").val();
c.triggerSearch(h,g)
});
f.find(".searchHead").click(function(h){var g=$(this).parents(e).find(".searchString:visible").val();
c.triggerSearch(h,g)
});
var d=f.find("#searchTargetUrl").val();
if(f.autocomplete&&d.indexOf("freecontent/simple")==-1){b.autocomplete("/ngw/syspath-bin/gartner/search/suggest",{extraParams:{limit:function(h,g){return g.max
},width:a,query:function(g){return g.val()
}}})
}},geotargetTimeZone:function(){var a=$(".cmp-globalsite-globaluser").find("#timeZone").val();
if(a!=undefined){return a
}return null
}};
$(document).on("click",'a[href^="#"]',function(b){if($(this).closest(".cmp-globalsite-tabctrl").length===0){b.preventDefault();
var a=$($.attr(this,"href")).offset();
if(a){$("html, body").animate({scrollTop:a.top-100},1000)
}}});
var cmpSocialShare=(function(){return{init:function(){var b=$(".cmp-globalsite-socialshare");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(b){b.find(".gcom-icon-social-facebook").hover(function(){$(this).addClass("gcom-icon-social-facebook-solid");
$(this).removeClass("gcom-icon-social-facebook")
},function(){$(this).addClass("gcom-icon-social-facebook");
$(this).removeClass("gcom-icon-social-facebook-solid")
});
b.find(".gcom-icon-social-twitter").hover(function(){$(this).addClass("gcom-icon-social-twitter-solid");
$(this).removeClass("gcom-icon-social-twitter")
},function(){$(this).addClass("gcom-icon-social-twitter");
$(this).removeClass("gcom-icon-social-twitter-solid")
});
b.find(".gcom-icon-social-linkedin").hover(function(){$(this).addClass("gcom-icon-social-linkedin-solid");
$(this).removeClass("gcom-icon-social-linkedin")
},function(){$(this).addClass("gcom-icon-social-linkedin");
$(this).removeClass("gcom-icon-social-linkedin-solid")
})
}})();
var cmpGlobalContextualNav=(function(){return{init:function(){a()
}};
function a(){var n=$(".cmp-globalsite-contextualnav");
var e=n.find(".searchString");
var p=n.find(".dropdown-accordion");
var A=$(".js-hero-check").first();
var h=$("#cmp-globalsite-mobile-contextualnav");
var x=h.closest("header");
var l=n.find("#primarynav");
var z=n.find(".nav-right");
var o=n.find(".primary-dropdown");
var j=n.find(".search-icon-container");
var v=n.find(".lang-icon-container");
var e=n.find("#searchString");
var y=n.find("#global-navbar");
var r=n.find(".icon-container");
var s=z.find(".orange-bold-text");
var B=window.location.pathname;
var t=false;
var u=["/webinars","/podcasts","/experts","/documents"];
var g=CommonFunctions.findUserAgent().isIEorEDGE();
var m=["en","de","es","fr","jp","ja","it","pt-br","zh-cn","zh-tw"];
var C=b(B,m);
var f=c(B,u);
var k=function(){if(l.offset().top!==z.offset().top&&window.innerWidth>breakpointMD){l.hide();
z.css("visibility","visible");
p.show()
}else{l.css("visibility","visible");
z.css("visibility","visible")
}};
var q=function(){if(window.innerWidth>breakpointMD){if(l.offset().top!==z.offset().top){l.hide();
z.css("visibility","visible");
if(A.length){h.insertAfter(A)
}else{h.insertAfter(x)
}h.css({visibility:"visible","margin-bottom":"30px"});
h.show()
}else{l.css("visibility","visible");
z.css("visibility","visible");
h.hide()
}}else{z.css("visibility","visible");
h.show()
}};
if(l.hasClass("js-global-nav")){if(!g){document.fonts.ready.then(function(){k()
})
}else{$(window).load(function(){k()
})
}$(window).resize(function(){if(window.innerWidth>breakpointMD){k()
}})
}if(l.hasClass("js-context-nav")){if(!g){document.fonts.ready.then(function(){q()
})
}else{$(window).load(function(){q()
})
}$(window).resize(function(){q()
});
if(A.length){h.insertAfter(A)
}else{h.insertAfter(x)
}h.css({visibility:"visible","margin-bottom":"30px"})
}s.on("DOMSubtreeModified",function(){q()
});
o.find(".nav-link").each(function(){if(B.startsWith($(this).attr("href"))||d($(this).attr("href"),f,C)){$(this).addClass("active");
$(this).parents(o).children(".dropdown-toggle").addClass("active")
}else{t=true
}});
if(o.find(".nav-link.active.primary-link").length>1){var w=o.find(".dropdown-menu").find(".nav-link.active");
w.removeClass("active");
w.parents(o).children(".dropdown-toggle").removeClass("active")
}y.find(".nav-link").each(function(){if(B.startsWith($(this).attr("href"))||d($(this).attr("href"),f,C)){$(this).addClass("active");
$(this).parents(".panel").children(".panel-heading").find(".nav-link").addClass("active")
}});
if(y.find(".nav-link.active").length>1){var w=y.find(".panel-body").find(".nav-link.active");
w.removeClass("active");
w.parents(".panel").children(".panel-heading").find(".nav-link").removeClass("active")
}h.find(".panel .nav-link.highlight").each(function(){if(B.startsWith($(this).attr("href"))||d($(this).attr("href"),f,C)){$(this).addClass("active");
$(this).parents(".panel").children(".panel-heading").find(".nav-link").addClass("active")
}});
if(t){}y.add(r).on("show.bs.dropdown",function(F){var E=$(this).find(".dropdown-menu");
E.before('<div class="backdrop"></div>')
});
y.add(r).on("hide.bs.dropdown",function(F){var E=$(this).find(".backdrop");
E.remove()
});
$(document).on("touchend click",".backdrop",function(E){$(this).remove()
});
p.on("show.bs.dropdown",function(F){var E=$(this).find($(this).data("accordion"));
E.find(".panel-collapse.in").collapse("hide")
});
p.find(".dropdown-menu").on("click",function(E){E.stopPropagation()
});
p.find(".js-collapse").on("click",function(E){E.preventDefault();
E.stopPropagation();
$($(this).attr("href")).collapse("show");
$($(this).attr("href")).collapse("hide")
});
if(j.length){j.on("shown.bs.dropdown",function(E){Globalsite.initializeSearch(n);
e.focus()
});
j.on("hide.bs.dropdown",function(E){e.val("")
})
}if(v.length&&window.innerWidth<breakpointSM){var i=false;
var D=v.find(".dropdown-menu");
v.on("shown.bs.dropdown",function(E){if(D.offset().left<0&&!i){D.css("right","auto")
}})
}o.one("mouseover",function(){var E=0;
$(this).find(".dropdown-menu").children(".sub-nav-col").each(function(){E+=$(this).outerWidth(true)
});
$(this).find(".dropdown-menu").width(E+1)
})
}function b(g,f){var e=g.split(/\/|\./);
var h=e.filter(function(i){if(f.indexOf(i)>-1){return i
}});
return h[0]
}function d(h,e,g){var f=false;
var i="/"+g;
if(h.indexOf(e)>-1&&h.indexOf(i)>-1){f=true
}return f
}function c(f,g){var e;
g.forEach(function(h){if(f.indexOf(h)>-1){e=h
}});
return e
}})();
var cmpGlobalSiteUser=(function(){return{init:function(){a()
}};
function a(){var c=$(".cmp-globalsite-globaluser");
var f=$(".cmp-globalsite-webinar-info");
if(c.length==0){return
}var b={event:"",user:""};
var d=window.dataLayer||[];
var e=c.find("#user");
if(e.length>0){b.event="userLogin";
b.user=JSON.parse(e.val());
d.push(b)
}if(f.length>0){c.children("a.logged-out").attr("href",f.find(".login-button a").attr("href"))
}c.find("#signin-button").click(function(){location.href=$(this).prev("a.signin-link").attr("href")
})
}})();
var cmpGlobalSiteHero=(function(){return{init:function(){$componentList=$(".cmp-globalsite-hero");
$componentList.each(function(){a($(this))
})
}};
function a(b){if(b.length==0){return
}var c=b.find(".tlstr");
if(c.length>0){var d=c.find(".focusbars");
if(d.length>0){setTimeout(function(){e(d);
c.css("visibility","visible")
},500);
$(window).resize(function(){e(d)
})
}else{c.css("visibility","visible")
}}function e(g){var h=g.find("h1");
var f="auto";
if(window.innerWidth>=breakpointSmall){g.outerWidth(f);
f=h.innerWidth()+100
}else{f="100%"
}g.outerWidth(f)
}}})();
var cmpPromotionalHero=(function(){return{init:function(){var c=$(".cmp-globalsite-promotionalhero");
if(c.length==0){return
}c.each(function(){a($(this))
})
}};
function a(c){var d=c.find(".js-video-catch");
d.on("click",".js-launch-vidyard",function(){var e=$(this);
b(e.data("vidyardid"))
})
}function b(e){var d=VidyardV4.api.getPlayersByUUID(e);
var c=d[0];
c.showLightbox()
}})();
var cmpGlobalSiteAccordion=(function(){return{init:function(){var b=$(".cmp-globalsite-accordion");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(b){b.find(".accordion-panel-heading").on("click",function(){var g=$(this).closest(".accordion-panel-group");
g.on("show.bs.collapse",function(h){$(document).find("div[href='#"+$(h.target).attr("id")+"']").find(".gcom-icon-plus").hide();
$(document).find("div[href='#"+$(h.target).attr("id")+"']").find(".gcom-icon-minus").show()
}).on("hide.bs.collapse",function(h){$(document).find("div[href='#"+$(h.target).attr("id")+"']").find(".gcom-icon-plus").show();
$(document).find("div[href='#"+$(h.target).attr("id")+"']").find(".gcom-icon-minus").hide()
});
if($(this).attr("data-parent")!==undefined){b.find(".accordion-panel-heading").not(this).each(function(){$(this).find(".gcom-icon-minus").hide();
$(this).find(".gcom-icon-plus").show()
})
}var f=$(this);
setTimeout(function(){var h=f.closest(".accordion-panel-heading");
e(h,500)
},0)
});
if(window.location.hash.length>0){var d=window.location.hash;
var c=b.find(d);
if(d&&d.length>0&&c.length>0){CommonFunctions.goToByScroll(d);
c.find("a").click()
}}function e(i,m){if(!m){m=0
}var g=0;
var f=$(".navbar");
var k=$(window).scrollTop();
var l=i.offset().top;
var j=f.offset().top;
if(f.parent().hasClass("globalsite")){g=50
}else{if(f.hasClass("affix")){g=f.outerHeight()+10
}else{g=j+f.outerHeight();
var h=l-g;
if(h>j){g=f.outerHeight()+10
}}}$("html, body").animate({scrollTop:l-g},m)
}}})();
var cmpGlobalSiteGlobalInsights=(function(){return{init:function(){var b=$(".cmp-globalsite-globalinsights");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(e){var c=CommonFunctions.findUserAgent().isHandheld();
var d=window.innerWidth;
e.find(".tab_content").hide();
if(d>=breakpoint){var b=e.find("ul.tabs li.active");
var h=b.attr("rel");
var f=e.find('.accordion-drawer[rel="'+h+'"]');
f.addClass("active");
var g=e.find("#"+h);
g.show();
g.find(".lazy").lazy()
}e.find("ul.tabs li").click(function(){var i=$(this).attr("rel");
e.find(".tab_content").hide();
e.find("ul.tabs li").removeClass("active");
$(this).addClass("active");
e.find("#"+i).show();
e.find(".tab_content").removeClass("active");
var j=e.find("#"+i);
j.addClass("active");
j.find(".lazy").lazy({bind:"event"});
e.find(".accordion-drawer").removeClass("active");
e.find(".accordion-drawer[rel="+i+"]").addClass("active")
});
e.find(".accordion-drawer").click(function(){var i=$(this).attr("rel");
e.find(".tab_content").hide();
$(this).siblings().removeClass("active");
e.find("ul.tabs li").removeClass("active");
e.find("ul.tabs li[rel="+i+"]").addClass("active");
var j=e.find("#"+i);
if($(this).hasClass("active")){$(this).removeClass("active");
j.hide()
}else{$(this).addClass("active");
j.show()
}j.addClass("active");
j.find(".lazy").lazy({bind:"event"})
});
$(window).resize(function(){screenWidthDynamic=window.innerWidth;
if(screenWidthDynamic>=breakpoint){var i=e.find("li.active").attr("rel");
var j=e.find("li.active");
if(e.find("#"+i).css("display")=="none"){j.click()
}}if(screenWidthDynamic<breakpoint){var i=e.find("accordion-drawer.active").attr("rel");
if(e.find("tab_content").css("display")=="block"){if(!$(this).hasClass("active")){currentlyActive=$(this).attr("rel");
e.find("li.active[rel="+currentlyActive+"]").click()
}}}});
e.find(".feature-content .heading").matchHeight();
e.find(".feature-content .content").matchHeight();
e.find(".feature-content .link").matchHeight()
}})();
var cmpGlobalSiteModal=(function(){return{init:function(){var b=$(".cmp-globalsite-modal");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(b){b.find(".modal-trigger").on("click",function(g){g.preventDefault();
var f=$(this).closest(".cmp-globalsite-modal").find(".modal");
f.modal("show");
var c=$(window).height()/1.5;
var d=window.innerWidth/1.4;
f.find(".modal-body").css({"max-height":c});
f.find(".modal-body").css({"max-width":d});
f.find(".modal-body").css({height:"auto"});
f.find(".modal-body").css({width:"auto"})
})
}})();
var cmpGlobalSiteBackgroundContainer=(function(){return{init:function(){var b=$(".cmp-globalsite-backgroundcontainer");
if(b.length==0){return
}b.each(function(){a($(this))
})
},initFromPromoContainer:function(c){var b=c.find(".cmp-globalsite-backgroundcontainer");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(b){}})();
var cmpGlobalSiteRelatedContent=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-globalsite-relatedcontent");
if(b.length==0){return
}$(b).each(function(){var c=$(this).find(".col-md-4").length;
if(c==1){$(this).find(".col-md-4").addClass("col-md-offset-4")
}if(c==2){$(this).find(".row .col-md-4:first-child").addClass("col-md-offset-2")
}});
b.find(".img-style").matchHeight();
b.find(".individual-block").matchHeight();
b.find(".individual-block").matchHeight()
}})();
var cmpGlobalSiteVideoPlayer=(function(){return{init:function(){var b=$(".cmp-globalsite-videoplayer");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(b){b.each(function(d){var c=$(this);
c.find(".transcriptPopover").each(function(f){var g=$(this);
var e=c.find(".transcriptPopoverPanel");
e.hide();
g.on("click",function(h){h.preventDefault();
return true
});
g.on("click",".popoverAnchor",function(){e.show();
var h=g.prev().find(".video-container").height();
var i=e.find(".panel-heading").innerHeight();
e.find(".panel-body").css("max-height",h-i);
e.find(".panel").css("max-height",h);
g.css("opacity","0")
});
e.on("click",".close",function(){g.css("opacity","");
e.hide()
})
})
})
}})();
(function(a){a.fn.extend({autocomplete:function(b,c){var d=typeof b=="string";
c=a.extend({},a.Autocompleter.defaults,{url:d?b:null,data:d?null:b,delay:d?a.Autocompleter.defaults.delay:10,max:c&&!c.scroll?10:150},c);
c.highlight=c.highlight||function(e){return e
};
c.formatMatch=c.formatMatch||c.formatItem;
return this.each(function(){new a.Autocompleter(this,c)
})
},result:function(b){return this.bind("result",b)
},search:function(b){return this.trigger("search",[b])
},unautocomplete:function(){return this.trigger("unautocomplete")
}});
a.Autocompleter=function(l,g){var c={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};
var b=a(l),m=b.attr("data-ac-options");
if(m){try{g=a.extend({},g,JSON.parse(m))
}catch(h){if(window.console){console.log(h)
}}}b.attr("autocomplete","off").addClass(g.inputClass);
var j;
var p="";
var e=0;
var u;
var x={mouseDownOnSelect:false};
var r=a.Autocompleter.Select(g,l,d,x);
var w;
a.browser.opera&&a(l.form).bind("submit.autocomplete",function(){if(w){w=false;
return false
}});
b.bind((a.browser.opera?"keypress":"keydown")+".autocomplete",function(y){u=y.keyCode;
switch(y.keyCode){case c.UP:y.preventDefault();
if(r.visible()){r.prev()
}else{t(0,true)
}break;
case c.DOWN:y.preventDefault();
if(r.visible()){r.next()
}else{t(0,true)
}break;
case c.PAGEUP:y.preventDefault();
if(r.visible()){r.pageUp()
}else{t(0,true)
}break;
case c.PAGEDOWN:y.preventDefault();
if(r.visible()){r.pageDown()
}else{t(0,true)
}break;
case c.TAB:case c.RETURN:if(d()){y.preventDefault();
w=true;
return false
}break;
case c.ESC:r.hide();
break;
default:clearTimeout(j);
j=setTimeout(t,g.delay);
break
}}).focus(function(){e++
}).blur(function(){e=0;
if(!x.mouseDownOnSelect){s()
}}).click(function(){if(e++>1&&!r.visible()){t(0,true)
}}).bind("unautocomplete",function(){r.unbind();
b.unbind();
a(l.form).unbind(".autocomplete")
});
function d(){var z=r.selected();
if(!z){return false
}var y=z.result;
p=y;
b.val(y);
v();
b.trigger("result",[z.data,z.value]);
return true
}function t(A,z){if(u==c.DEL){r.hide();
return
}var y=b.val();
if(!z&&y==p){return
}p=y;
y=i(y);
if(y.length>=g.minChars){b.addClass(g.loadingClass);
if(!g.matchCase){y=y.toLowerCase()
}f(y,k,v)
}else{n();
r.hide()
}}function i(y){return y
}function q(y,z){if(g.autoFill&&(i(b.val()).toLowerCase()==y.toLowerCase())&&u!=c.BACKSPACE){b.val(b.val()+z.substring(i(p).length));
a.Autocompleter.Selection(l,p.length,p.length+z.length)
}}function s(){clearTimeout(j);
j=setTimeout(v,200)
}function v(){var y=r.visible();
r.hide();
clearTimeout(j);
n();
if(g.mustMatch){b.search(function(z){if(!z){b.val("")
}})
}if(y){a.Autocompleter.Selection(l,l.value.length,l.value.length)
}}function k(z,y){if(y&&y.length&&e){n();
r.display(y,z);
q(z,y[0].value);
r.show()
}else{v()
}}function f(z,B,y){if(!g.matchCase){z=z.toLowerCase()
}if((typeof g.url=="string")&&(g.url.length>0)){var A={timestamp:+new Date()};
a.each(g.extraParams,function(C,D){A[C]=typeof D=="function"?D(b,g):D
});
a.ajax({mode:"abort",port:"autocomplete"+l.name,dataType:g.dataType,url:g.url,data:A,success:function(D){var C=g.parse&&g.parse(D)||o(D);
B(z,C)
}})
}else{r.emptyList();
y(z)
}}function o(B){var y=[];
var A=B.split("\n");
for(var z=0;
z<A.length;
z++){var C=a.trim(A[z]);
if(C){C=C.split("|");
y[y.length]={data:C,value:C[0],result:g.formatResult&&g.formatResult(C,C[0])||C[0]}
}}return y
}function n(){b.removeClass(g.loadingClass)
}};
a.Autocompleter.defaults={inputClass:"ac_input",boxSelector:".ac_box",resultsHtml:"<div class='ac_results' style='position:absolute;z-index:99999;'><ul class='acresults'></ul><ul class='notGUser'></ul></div>",loadingClass:"ac_loading",overClass:"ac_over",minChars:1,delay:400,matchCase:false,max:100,mustMatch:false,extraParams:{},selectFirst:false,formatItem:function(b){return b[0]
},formatMatch:null,autoFill:false,width:0,highlight:function(c,b){return c.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+b.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")
},scroll:true,scrollHeight:260};
a.Autocompleter.Select=function(f,l,n,r){var m,h=-1,t,o="",d=null,q,b,j=f.overClass;
function p(){if(d){return
}var v=f.holder?a(f.holder):document.body;
d=a(f.resultsHtml).hide().appendTo(v);
if(b=l.getAttribute("data-ac-results-class")){d.addClass(b)
}q=d.find("ul.acresults").mouseover(function(w){if(s(w).nodeName&&s(w).nodeName.toUpperCase()=="LI"){h=a("li",q).removeClass(j).index(s(w));
a(s(w)).addClass(j)
}}).click(function(w){a(s(w)).addClass(j);
n();
l.focus();
return false
}).mousedown(function(){r.mouseDownOnSelect=true
}).mouseup(function(){r.mouseDownOnSelect=false
});
if(f.width>0){d.css("width",f.width)
}if(!f.hidePersonalizedSearch&&a("#not-logged-in").val()!==undefined&&a("#marketingClientHome").val()!==undefined){var u=a("#marketingClientHome").val();
if(!CommonFunctions.findUserAgent().isHandheld()&&a("#not-logged-in").parents().hasClass("affix")){d.find("ul.notGUser").append('<li id="serp-search-affix"><b>Gartner Client? </b><a href='+u+">Log in</a> for personalized search results.</li>").css({"background-color":"#F2F2F2","padding-top":"13px","padding-bottom":"13px"})
}else{if(screen.width>breakpointSM&&screen.width<=breakpointMD&&CommonFunctions.findUserAgent().isHandheld()){d.find("ul.notGUser").append('<li id="serp-search-affix"><b>Gartner Client? </b><a href='+u+">Log in</a> for personalized search results.</li>").css({"background-color":"#F2F2F2","padding-top":"13px","padding-bottom":"13px"})
}else{d.find("ul.notGUser").append('<li id="serp-search"><a href='+u+">Log in</a> for personalized search results.</li>").css("background-color","#F2F2F2")
}}if(a(".acresults").val()!=undefined){a(".acresults").addClass("not-logged-in-border")
}}else{if(a(".acresults").hasClass("not-logged-in-border")){a(".acresults").removeClass("not-logged-in-border")
}}}function s(v){var u=v.target;
while(u&&u.tagName!="LI"){u=u.parentNode
}if(!u){return[]
}return u
}function k(u){m.slice(h,h+1).removeClass(j);
i(u);
var w=m.slice(h,h+1).addClass(j);
if(f.scroll){var v=0;
m.slice(0,h).each(function(){v+=this.offsetHeight
});
if((v+w[0].offsetHeight-q.scrollTop())>q[0].clientHeight){q.scrollTop(v+w[0].offsetHeight-q.innerHeight())
}else{if(v<q.scrollTop()){q.scrollTop(v)
}}}l.value=a.data(w[0],"ac_data").result
}function i(u){h+=u;
if(h<0){h=m.size()-1
}else{if(h>=m.size()){h=0
}}}function c(u){return f.max&&f.max<u?f.max:u
}function g(){if(typeof a("#marketingClientHome").val()!=undefined){var u=a("#marketingClientHome").val();
if(typeof a("li#serp-search").find("a").val()!=undefined){a("li#serp-search").find("a").attr("href",u)
}if(typeof a("li#serp-search-affix").find("a").val()!=undefined){a("li#serp-search-affix").find("a").attr("href",u)
}}}function e(){q.empty();
var v=c(t.length);
for(var w=0;
w<v;
w++){if(!t[w]){continue
}var x=f.formatItem(t[w].data,w+1,v,t[w].value,o);
if(x===false){continue
}var u=a("<li/>").html(f.highlight(x,o)).addClass(w%2==0?"ac_even":"ac_odd").appendTo(q)[0];
a.data(u,"ac_data",t[w])
}m=q.find("li");
if(f.selectFirst){m.slice(0,1).addClass(j);
h=0
}if(a.fn.bgiframe){q.bgiframe()
}}return{display:function(v,u){p();
t=v;
o=u;
e();
g()
},next:function(){k(1)
},prev:function(){k(-1)
},pageUp:function(){if(h!=0&&h-8<0){k(-h)
}else{k(-8)
}},pageDown:function(){if(h!=m.size()-1&&h+8>m.size()){k(m.size()-1-h)
}else{k(8)
}},hide:function(){d&&d.hide();
m&&m.removeClass(j);
h=-1
},visible:function(){return d&&d.is(":visible")
},current:function(){return this.visible()&&(m.filter("."+j)[0]||f.selectFirst&&m[0])
},show:function(){var y=a(l).parents(f.boxSelector);
if(y.length!=1){y=a(l)
}var z=y.offset(),u=f.width;
if(!(typeof u=="string"||u>0)){u=y.width()
}d.css({width:u,top:z.top+y[0].offsetHeight,left:z.left}).show();
if(f.scroll){q.scrollTop(0);
q.css({maxHeight:f.scrollHeight,overflow:"auto"});
if(a.browser.msie&&typeof document.body.style.maxHeight==="undefined"){var v=0;
m.each(function(){v+=this.offsetHeight
});
var x=v>f.scrollHeight;
q.css("height",x?f.scrollHeight:v);
if(!x){m.width(q.width()-parseInt(m.css("padding-left"))-parseInt(m.css("padding-right")))
}}}},selected:function(){var u=m&&m.filter("."+j).removeClass(j);
return u&&u.length&&a.data(u[0],"ac_data")
},emptyList:function(){q&&q.empty()
},unbind:function(){d&&d.remove()
}}
};
a.Autocompleter.Selection=function(d,e,c){if(d.createTextRange){var b=d.createTextRange();
b.collapse(true);
b.moveStart("character",e);
b.moveEnd("character",c);
b.select()
}else{if(d.setSelectionRange){d.setSelectionRange(e,c)
}else{if(d.selectionStart){d.selectionStart=e;
d.selectionEnd=c
}}}}
})(jQuery);
var cmpGlobalSiteEloquaForm=(function(){return{init:function(){var d=$(".cmp-globalsite-eloquaform");
var e=$(".cmp-conferencesite-leadgen");
var c=$(".cmp-globalsite-webinar");
var b=$(".cmp-globalsite-demandbase");
if(d.length==0&&e.length==0&&c.length==0){if(b.length>0){b.remove()
}return
}d.each(function(){a($(this))
})
}};
function a(n){var f=true;
var m="CAMPAIGN";
var e="BAC";
var c="NEWSLETTER";
var v="/ngw/syspath-bin/gartner/eloquaservlet";
var z={event:"",eloquaForm:{name:"",type:"",step:"",screen:"",userType:""}};
var t=window.dataLayer||[];
var A=window.navigator.userAgent;
if(A.match(/iPad/i)||A.match(/iPhone/i)){$("body").css("cursor","pointer")
}n.find(".gcom-icon-information").on("click",function(C){C.preventDefault()
});
n.find('[data-toggle="popover"]').popover();
var y=n.find(".form-campaign");
var g=n.find(".form-bac");
var u=n.find(".form-newsletter");
var x=n.find(".optinStatus");
var r=n.find(".optedUserFirstName");
var o=n.find(".optedUserLastName");
var b=n.find(".profileComplete");
var i=false;
if(x.length>0){x.val("false")
}if(r.length>0){r.val("")
}if(o.length>0){o.val("")
}if(b.length>0){b.val(false)
}if(y.length){l(m,y);
var w=p(m,y);
if(!w){h(m,y)
}if(y.find(".cmp-google-auto-complete").length>0){cmpGoogleAutoComplete.init(y)
}cmpFormValidation.init(y.find("#form-one"));
cmpFormValidation.init(y.find("#form-two"));
cmpFormValidation.init(y.find("#submit-form"))
}if(g.length>0){l(e,g);
h(e,g);
cmpFormValidation.init(g.find("#submit-form"))
}if(u.length){l(c,u);
var w=p(c,u);
if(!w){h(c,u)
}cmpFormValidation.init(u.find("#form-one"));
cmpFormValidation.init(u.find("#submit-form"))
}else{return
}function s(G,F,I){var E=I.find(".success-container");
if(I.parent(".webinar-form").length>0){E=I.parents().parent().next().find(".success-container")
}E.find(".footer").hide();
var H,J;
switch(F){case m:I.find("form").hide();
I.find(".campaign-heading").hide();
if(G==="ELOQUA"){H=I.find(".eloqua-message").val();
J=I.find(".eloqua-text").val()
}else{if(G==="OPTIN"){H=I.find(".optin-message").val();
J=I.find(".optin-text").val()
}}E.find(".footer").show();
I.find(".footer-span").show();
break;
case e:if(G==="ELOQUA"){var D=I.find(".doNotGotoThankYouPage").val();
if(!D||D==false||D=="false"){window.location.href=I.find(".thankYouPageUrl").val()
}else{I.find("form").hide();
I.find(".campaign-heading").hide();
I.find(".form-heading").hide();
H=I.find(".eloqua-message").val();
J=I.find(".eloqua-text").val();
var C=I.find(".eloqua-bac-text").val();
E.find(".success-text-bac").html(C);
I.find(".showBACVideo").show()
}}else{I.find("form").hide();
I.find(".campaign-heading").hide()
}break;
case c:I.find("form").hide();
I.find(".campaign-heading").hide();
if(G==="ELOQUA"){H=I.find(".eloqua-message").val();
J=I.find(".eloqua-text").val()
}else{if(G==="OPTIN"){H=I.find(".optin-message").val();
J=I.find(".optin-text").val()
}}break;
default:break
}E.find(".success-message").html(H);
E.find(".success-text").html(J);
E.show();
CommonFunctions.fireCustomEvent("eloqua-form:success","",I);
return false
}function q(D){D.find("form").hide();
D.find(".campaign-heading").hide();
var C=D.find(".error-container");
C.find(".error-message").html("Error!");
C.find(".error-text").html("Error submitting the form. Please try again later.");
C.show();
return false
}function B(C){C.parents("form").fadeOut();
C.parents("form").prev("form").fadeIn("400",function(){C.parents("form").prev("form").find(":input:first").focus()
})
}function d(G,C,H){var F=G.next("form");
var E=F.find(".stepTwoEmailAddress");
var D="";
G.css("display","none");
F.css("display","block");
if(C==c){D=E.val()
}if(H){G.siblings("form").each(function(){var L=$(this).find("input");
var J=$(this).find("select");
var K=$(this).find("#continue");
var I=$(this).find("#submit");
$(this).trigger("reset");
L.removeClass("successMessage");
L.removeClass("errorMessage");
J.prop("selectedIndex",0);
J.removeClass("successMessage");
J.removeClass("errorMessage");
K.addClass("button-gray");
if(K){K.addClass("button-gray")
}if(I){I.addClass("button-gray")
}$(this).find(".errormMessageText").remove();
$(this).find("#submitError").text("")
})
}else{F.find("#submitError").text("")
}if(D!=""){E.val(D)
}}function l(D,F){switch(D){case m:var C=F.find(".campaign-js.department").length>0;
if(C){var E=F.find(".campaign-js.department").get(0);
FormUtils.populateJobRole(E)
}F.find(".back-button").each(function(){$(this).click(function(){B($(this));
CommonFunctions.finalSubmitAjaxLoader(F,false)
})
});
F.find("#form-two").on("form.submit.valid",function(G){d($(this),D,false);
if(F.find(".googleAutocompleteSwitch").val()=="true"){cmpGoogleAutoComplete.init(y)
}if(D===m&&t){z.event=n.find(".eloquaDLEvent").val();
z.eloquaForm.name=n.find(".eloquaDLFormName").val();
z.eloquaForm.type=n.find(".elqCampaignType").val();
z.eloquaForm.step=n.find(".eloquaDLFormStep3").val();
z.eloquaForm.screen=n.find(".elqDLCandDInfo").val();
z.eloquaForm.userType=n.find(".eloquaDLAnonymousUser").val();
t.push(z)
}G.preventDefault()
});
break;
case e:break;
case c:F.find(".back-button").click(function(){B($(this));
CommonFunctions.finalSubmitAjaxLoader(F,false)
});
break;
default:break
}}function j(P,E,C){var N=FormUtils.getCommonFormData(E)||{};
if(!N.language&&window.location.pathname.split("/").length>0){N.language=window.location.pathname.split("/")[1]
}var K=CommonFunctions.urlParam("cid");
if(K){N.cid=K
}if(!N.refURL){N.refURL=document.referrer
}var G={};
var J={};
if(!C){G=FormUtils.getFormSpecificData(E);
var M=n.find(".gmlForm").val();
if(M&&M=="true"){var F=n.find(".form-campaign");
var O=n.find(".form-newsletter");
var I=n.find(".qcForm").val();
if(O.length>0){if(I=="qcDailyInsights"){J={flex1:"Y"}
}else{if(I=="qcWeeklyDigest"){J={flex2:"Y"}
}else{var L="N";
if(E.find(".dailyInsights").prop("checked")){L="Y"
}var Q="N";
if(E.find(".weeklyDigest").prop("checked")){Q="Y"
}J={flex1:L,flex2:Q}
}}}else{if(F.length>0){var L="N";
if(E.find(".dailyInsights").prop("checked")){L="Y"
}var Q="N";
if(E.find(".weeklyDigest").prop("checked")){Q="Y"
}var R="N";
if(E.find(".research").prop("checked")){R="Y"
}J={flex1:L,flex2:Q,flex3:R}
}}}if(E.find(".googleAutocompleteSwitch").val()=="true"){var H=cmpGoogleAutoComplete.getStreetAddressData(E);
G=$.extend({},H,G)
}}else{G=FormUtils.getOptedInFieldsData(E);
if(P===c){var M=n.find(".gmlForm").val();
if(M&&M=="true"){var I=n.find(".qcForm").val();
if(I=="qcDailyInsights"){J={flex1:"Y"}
}else{if(I=="qcWeeklyDigest"){J={flex2:"Y"}
}else{J={flex1:"Y",flex2:"Y"}
}}}}}var D=$.extend({},N,G,J);
return D
}function h(D,E){var C;
E.find("#submit-form").on("form.submit.valid",function(H){var F=$(this);
if(!F.find("#submit").hasClass("button-gray")){if(D=="BAC"){grecaptcha.execute($(this).find(".g-recaptcha").attr("id"));
cmpGlobalSiteEloquaForm.recaptchaCallbackHandler=function(){CommonFunctions.finalSubmitAjaxLoader(F.closest(E),true);
var I=j(D,F.closest(E),false);
k("ELOQUA",I,D,F.closest(E))
}
}else{CommonFunctions.finalSubmitAjaxLoader(F.closest(E),true);
var G=j(D,F.closest(E),false);
if($(E).filter("span[class^=form-campaign]").length==1){k("ELOQUA",G,D,E)
}else{k("ELOQUA",G,D,F.closest(E))
}}H.preventDefault();
return false
}})
}function k(E,D,C,G){var F={eloquaFormParams:JSON.stringify(D),requestType:"ELOQUA_REGISTER",elqFormName:G.find(".elq-form").val(),reCaptchaResponse:G.find('textarea[name="g-recaptcha-response"]').val()};
CommonFunctions.postAjaxRequest(v,F,true,G,function(H){if(H){if(C===e){z.event=n.find(".eloquaDLSuccessEvent").val();
z.eloquaForm.name=n.find(".eloquaBACFormName").val();
z.eloquaForm.type=n.find(".eloquaBACType").val();
z.eloquaForm.step=undefined;
z.eloquaForm.screen=n.find(".eloquaDLSuccess").val();
E==="ELOQUA"?z.eloquaForm.userType=n.find(".eloquaDLAnonymousUser").val():z.eloquaForm.userType=n.find(".eloquaDLKnownUser").val();
t.push(z);
grecaptcha.reset(G.find(".g-recaptcha").attr("id"))
}else{if(C===m){z.event=n.find(".eloquaDLSuccessEvent").val();
z.eloquaForm.name=n.find(".eloquaDLFormName").val();
z.eloquaForm.type=n.find(".elqCampaignType").val();
z.eloquaForm.step=undefined;
z.eloquaForm.screen=n.find(".eloquaDLSuccess").val();
E==="ELOQUA"?z.eloquaForm.userType=n.find(".eloquaDLAnonymousUser").val():z.eloquaForm.userType=n.find(".eloquaDLKnownUser").val();
t.push(z)
}else{if(C===c){z.event=n.find(".eloquaDLSuccessEvent").val();
z.eloquaForm.name=n.find(".eloquaDLFormName").val();
z.eloquaForm.type=n.find(".eloquaNLType").val();
z.eloquaForm.step=undefined;
z.eloquaForm.screen=n.find(".eloquaDLSuccess").val();
E==="ELOQUA"?z.eloquaForm.userType=n.find(".eloquaDLAnonymousUser").val():z.eloquaForm.userType=n.find(".eloquaDLKnownUser").val();
t.push(z)
}}}var I=G.closest("section");
if(I[0].hasAttribute("data-hotjar")){I.removeAttr("data-hotjar",true)
}s(E,C,G)
}else{CommonFunctions.finalSubmitAjaxLoader(G,false);
q(G)
}},function(H){CommonFunctions.finalSubmitAjaxLoader(G,false);
q(G)
})
}function p(C,D){D.find("#form-one").on("form.submit.valid",function(F){var H=$(this);
var E=H.find(".emailAddress");
CommonFunctions.finalSubmitAjaxLoader(H,true);
emailAddress=E.val();
if(C==c){H.next("#submit-form").find(".stepTwoEmailAddress").val(emailAddress)
}var G=v+"?requestType=GET_ELOQUA_OPTIN_BY_EMAIL&emailAddress="+emailAddress;
CommonFunctions.getAjaxRequest(G,true,H,function(J){J=J.data;
var L=H.find(".optinStatus");
var K=H.find(".profileComplete");
var O=H.find(".optedUserFirstName");
var N=H.find(".optedUserLastName");
if(L.length>0){L.val(J.optedIn)
}if(O.length>0){O.val(J.firstName)
}if(N.length>0){N.val(J.lastName)
}if(K.length>0){K.val(J.profileComplete)
}if(J.profileComplete){var M=j(C,H.closest(D),true);
if($(D).filter("span[class^=form-campaign]").length==1){k("OPTIN",M,C,D)
}else{k("OPTIN",M,C,H.closest(D))
}return true
}else{var I=H.find(".step-one-action-button");
d(I.parents("form"),C,true);
if(C===c&&t){z.event=n.find(".eloquaDLEvent").val();
z.eloquaForm.name=n.find(".eloquaDLFormName").val();
z.eloquaForm.type=n.find(".eloquaNLType").val();
z.eloquaForm.step=n.find(".eloquaNLFormStep2").val();
z.eloquaForm.screen=n.find(".eloquaNLPersonalandCompanyInfo").val();
z.eloquaForm.userType=n.find(".eloquaDLAnonymousUser").val();
t.push(z)
}if(C===m&&t){z.event=n.find(".eloquaDLEvent").val();
z.eloquaForm.name=n.find(".eloquaDLFormName").val();
z.eloquaForm.type=n.find(".elqCampaignType").val();
z.eloquaForm.step=n.find(".eloquaDLFormStep2").val();
z.eloquaForm.screen=n.find(".elqDLPersonalInfo").val();
z.eloquaForm.userType=n.find(".eloquaDLAnonymousUser").val();
t.push(z)
}CommonFunctions.finalSubmitAjaxLoader(H,false);
return false
}},function(I){q(H);
CommonFunctions.finalSubmitAjaxLoader(H,false);
return true
});
F.preventDefault()
})
}n.find("select[required]").on("invalid",function(C){if($(this).parents(".form-bac").length&&t){z.event=n.find(".eloquaDLValEvent").val();
z.formField=$(this).attr("id");
z.validationMessage="Please select an item in the list";
z.eloquaForm.name=n.find(".eloquaBACFormName").val();
z.eloquaForm.type=n.find(".eloquaBACType").val();
z.eloquaForm.step=n.find(".elqDLFormStep").val();
z.eloquaForm.screen=n.find(".elqDLPersonalInfo").val();
delete z.eloquaForm.userType;
t.push(z)
}if($(this).parents(".form-newsletter").length&&t){z.event=n.find(".eloquaDLValEvent").val();
z.formField=$(this).attr("id");
z.validationMessage="Please select an item in the list";
z.eloquaForm.name=n.find(".eloquaDLFormName").val();
z.eloquaForm.type=n.find(".eloquaNLType").val();
if($(this).attr("id")==="country"){z.eloquaForm.step=n.find(".eloquaNLFormStep2").val();
z.eloquaForm.screen=n.find(".eloquaNLPersonalandCompanyInfo").val()
}delete z.eloquaForm.userType;
t.push(z)
}if($(this).parents(".form-campaign").length&&t){z.event=n.find(".eloquaDLValEvent").val();
z.formField=$(this).attr("id");
z.validationMessage="Please select an item in the list";
z.eloquaForm.name=n.find(".eloquaDLFormName").val();
z.eloquaForm.type=n.find(".elqCampaignType").val();
if($(this).attr("id")==="country"){z.eloquaForm.step=n.find(".eloquaDLFormStep2").val();
z.eloquaForm.screen=n.find(".elqDLPersonalInfo").val()
}else{if($(this).attr("id")==="job-level"||$(this).attr("id")==="department"||$(this).attr("id")==="jobRole"){z.eloquaForm.step=n.find(".eloquaDLFormStep3").val();
z.eloquaForm.screen=n.find(".elqDLCandDInfo").val()
}}delete z.eloquaForm.userType;
t.push(z)
}})
}})();
function onBACRecaptchaSuccess(a){if(a){cmpGlobalSiteEloquaForm.recaptchaCallbackHandler()
}}function onBACRecaptchaLoad(){if(recaptcha){$(".g-recaptcha").each(function(a,b){$(b).attr("id",a);
grecaptcha.render(b,{sitekey:$(b).attr("data-sitekey")})
});
recaptcha=false
}}var cmpDemandBase=(function(){return{init:function(){var b=$(".cmp-globalsite-demandbase");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(b){(function(k,f,g,i,j){var h=f.createElement(g),c=f.getElementsByTagName(g)[0];
h.async=1;
h.id=j;
h.src=i;
c.parentNode.insertBefore(h,c)
})(window,document,"script","https://scripts.demandbase.com/4b9d2aa6.min.js","demandbase_js_lib")
}})();
var cmpGlobalSiteSearchResults=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-globalsite-searchresults");
if(b.length==0){return
}Globalsite.initializeSearch(".cmp-globalsite-searchresults");
CommonFunctions.onBreakpointChange(function(){Globalsite.initializeSearch(".cmp-globalsite-searchresults")
})
}})();
var cmpGlobalSiteBrandSearch=(function(){return{init:function(){var b=$(".cmp-globalsite-brandsearch");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(j){var g=40;
var m=38;
var e=13;
var i=27;
b();
k();
var l=j.find("input#brandSearchPageUrl").val();
var h="";
var c=true;
j.find(".search-string").on("input",function(o){var p=o.currentTarget.value.trim();
if(p==h){return
}if(!c&&p.startsWith(h)){j.find("ul li.notfound").first().text('No results for "'+p+'"');
return
}if(p){var n="/ngw/syspath-bin/gartner/l2?requestType=BRAND_SEARCH&prefix="+p;
$.get(n).success(function(q){if(o.currentTarget.value.trim()){f(p,q)
}})
}else{d()
}h=p
});
j.find(".close").click(function(){d()
});
function d(){j.find(".search-string").val("");
j.find(".search-string").focus();
j.find(".close").addClass("hidden");
j.find(".search-btn").removeClass("hidden");
j.find("ul").remove()
}function f(t,p){j.find(".search-btn").addClass("hidden");
j.find(".close").removeClass("hidden");
j.find("ul").remove();
j.find(".ac-results").show();
j.find(".ac-results").append('<ul class="grey-border"></ul>');
var n=p.data.found;
if(n==undefined){c=false;
n=p.data.notfound;
j.find("ul").append('<li class="notfound">No results for "'+t+'" </li>');
j.find("ul").append('<li class="notfound">Did you mean:</li>')
}else{c=true;
j.find("ul").prepend('<li class="found">Results</li>')
}for(var q in n){var s=n[q];
for(var r in s){var o=l+"?brand_id="+s[r].text+"&study_id="+s[r].value;
j.find("ul").append('<li class="item"><a href="'+o+'">'+r+"</a></li>")
}}j.find("li.item").hover(function(){j.find("li.item").removeClass("active");
$(this).addClass("active")
})
}function b(){$(document).click(function(){j.find(".ac-results").hide()
});
j.find(".search-string, .ac-results").click(function(n){n.stopPropagation();
j.find(".ac-results").show()
});
j.find(".search-string, .ac-results").focusin(function(n){j.find(".ac-results").show()
})
}function k(){j.find(".search-string, .ac-results").on("keydown",function(s){if(s.keyCode==g){s.preventDefault();
var p=j.find("li.item").first();
var o=j.find("li.item").hasClass("active");
if(o){var n=j.find("li.item.active");
var t=n.next("li.item");
if(t.length==0){p.addClass("active")
}else{t.addClass("active")
}n.removeClass("active")
}else{p.addClass("active")
}}else{if(s.keyCode==m){s.preventDefault();
var r=j.find("li.item").last();
var o=j.find("li.item").hasClass("active");
if(o){var n=j.find("li.item.active");
var q=n.prev("li.item");
if(q.length==0){r.addClass("active")
}else{q.addClass("active")
}n.removeClass("active")
}else{r.addClass("active")
}}else{if(s.keyCode==e){var u=j.find("li.item.active a").first();
if(u.length==0){var v=j.find("li.item a");
if(v.length==1){window.location.href=v.attr("href")
}}else{window.location.href=u.attr("href")
}}else{if(s.keyCode==i){j.find(".ac-results").hide()
}}}}})
}}})();
var cmpGlobalSiteCarousel=(function(){return{init:function(){var b=$(".cmp-globalsite-carousel");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(d){function f(){var g=0;
var h=d.find(".carousel-inner");
h.find(".item").each(function(){var i=$(this).innerHeight();
if(i>g){g=i
}});
h.height(g)
}f();
var e=CommonFunctions.findUserAgent();
if(e.isHandheld()){f()
}d.find("a.carousel-control").click(function(g){g.preventDefault()
});
function b(){var h;
var g=false;
d.each(function(){var i=$(this).find(".carousel");
if(i.find("#editMode").val()=="true"){i.carousel({interval:false});
g=true
}});
if(g){return
}d.each(function(){$(this).find(".carousel-arrows").css("display","block");
$(this).find(".carousel-control").css("display","block");
$(this).find(".item").each(function(){$(this).removeClass("active")
});
$(this).find(".item:first-child").addClass("active")
});
if(window.innerWidth<=breakpointMD){h=false
}c(h)
}b();
$(window).resize(function(){f();
b()
});
function c(g){d.each(function(){var h=$(this);
var j=$(this).find(".carousel");
if(g==undefined){var i=j.find(".frequency").val();
if(i==""){g=false
}else{g=i
}}j.carousel({interval:g});
$(this).find(".indicators").each(function(){$(this).unbind().click(function(){var k;
$(this).siblings().each(function(){$(this).removeClass("active")
});
$(this).addClass("active");
k=$(this).attr("data-slide-to");
h.find(".item").each(function(){$(this).removeClass("active")
});
h.find(".item").eq(k).addClass("active")
})
});
$(this).find(".icon-caret-right").unbind().click(function(){var m=$(this).closest("#carousel-generic");
var l=m.find(".carousel-inner").find(".active");
l.removeClass("active");
if(l.next().length!=0){l.next().addClass("active")
}else{m.find(".item:first-child").addClass("active")
}var k=m.find(".carousel-indicators").find(".active");
k.removeClass("active");
if(k.next().length!=0){k.next().addClass("active")
}else{m.find(".indicators:first-child").addClass("active")
}});
$(this).find(".icon-caret-left").unbind().click(function(){var m=$(this).closest("#carousel-generic");
var l=m.find(".carousel-inner").find(".active");
l.removeClass("active");
if(l.prev().length!=0){l.prev().addClass("active")
}else{m.find(".item:last-child").addClass("active")
}var k=m.find(".carousel-indicators").find(".active");
k.removeClass("active");
if(k.prev().length!=0){k.prev().addClass("active")
}else{m.find(".indicators:last-child").addClass("active")
}})
})
}}})();
var cmpGlobalSiteTabCtrl=(function(){return{init:function(){var c=$(".cmp-globalsite-tabctrl");
c.each(function(){b($(this))
})
}};
function b(c){topTabs.init(c);
leftTabs.init(c);
a(c);
window.onhashchange=function(){a(c)
};
c.find(".tab-item").on("click",'a[href^="#"]',function(f){f.preventDefault();
var g=$(this).attr("href");
if(g!=null&&g.length>0){var e=c.find("a").filter(function(h){return $(this).attr("href").trim()==g
});
if(e.length>0){c.find('.tab-section a[href^="'+g+'"]').click()
}}});
var d=0;
c.find(".tabs-center li").each(function(){d+=$(this).outerWidth(true)+3
});
topTabs.adaptToWidth(c,d);
$(window).on("resize",function(){topTabs.adaptToWidth(c,d)
});
if(window.innerWidth<=1024){c.find(".panel-heading-link")[0].click()
}}function a(c){if(window.location.hash.length>0){var e=window.location.hash;
if(e!=null&&e.length>0){var d=c.find("a").filter(function(f){return $(this).attr("href").trim()==e
});
if(d.length>0){$(d).click();
CommonFunctions.goToByScroll(e)
}}}}})();
topTabs=(function(){return{init:function(b){$varTopTabs=b.find(".top-tabs");
if($varTopTabs.length===0){return
}a($varTopTabs)
},adaptToWidth:function(f,g){var j=f.find(".top-tabs").length>0||f.find(".top-tabs-adapted").length>0;
var c=f.find(".top-tabs-adapted").length>0;
var d=f.find(".top-tabs").length>0;
var e=$(window).width();
var b=f.find(".grid-wide-inner .body");
var k=b.width();
function h(){f.find(".top-tabs").each(function(){$(this).addClass("top-tabs-adapted").addClass("left-tabs").removeClass("top-tabs")
});
f.find(".body").addClass("row");
f.find(".tab-section").addClass("col-md-3");
f.find(".tabs-content").addClass("col-md-9")
}function i(){f.find(".left-tabs.top-tabs-adapted").each(function(){$(this).addClass("top-tabs").removeClass("left-tabs").removeClass("top-tabs-adapted")
});
f.find(".body").removeClass("row");
f.find(".tab-section").removeClass("col-md-3");
f.find(".tabs-content").removeClass("col-md-9")
}if(j){if(e>=768){if(d){if(k<=g){h()
}}else{if(c&&((k-60)>g)){i()
}}}}}};
function a(b){b.each(function(c){var e=$(this);
e.attr("id","topTab"+c);
var f=e.find(".tabs-center:first");
var d=e.find(".tabs-content:first");
f.find("a").each(function(k){var i=$(this);
var h=i.attr("data-href");
if(h&&h!=""){i.attr("href","#"+h).attr("rel",k)
}else{i.attr("href","#topTab"+c+""+k).attr("rel",k)
}i.removeAttr("data-href");
i.parents("li").click(function(j){j.preventDefault();
f.find("a").parents("li").removeClass("selected");
d.children(".tab-item").addClass("fakeHide");
d.children(".tab-item[rel="+i.attr("rel")+"]").removeClass("fakeHide");
i.parents("li").addClass("selected");
$.fn.matchHeight._update()
})
});
d.children(".tab-item").each(function(h){var i=$(this).attr("data-id");
if(i&&i!=""){$(this).attr("id",i).attr("rel",h)
}else{$(this).attr("id","topTab"+c+""+h).attr("rel",h)
}$(this).removeAttr("data-id")
});
var g=f.width();
f.find("a").parents("li").removeClass("selected");
d.children(".tab-item").addClass("fakeHide");
d.css("visibility","visible");
d.children('.tab-item[rel="0"]').removeClass("fakeHide");
f.find("li:first").addClass("selected")
})
}})();
leftTabs=(function(){return{init:function(b){$varLeftTabs=b.find(".left-tabs");
if($varLeftTabs.length===0){return
}a($varLeftTabs)
}};
function a(b){b.each(function(e){var g=$(this);
g.attr("id","leftTab"+e);
var d=g.find(".tabs-center:first");
var f=g.find(".tabs-content:first");
d.find("a").each(function(k){var i=$(this);
var h=i.attr("data-href");
if(h&&h!=""){i.attr("href","#"+h).attr("rel",k)
}else{i.attr("href","#leftTab"+e+""+k).attr("rel",k)
}i.removeAttr("data-href");
i.unbind();
i.parents("li").click(function(j){j.preventDefault();
d.find("a").parents("li").removeClass("selected");
f.children(".tab-item").addClass("fakeHide");
f.children(".tab-item[rel="+i.attr("rel")+"]").removeClass("fakeHide");
i.parents("li").addClass("selected");
$.fn.matchHeight._update()
})
});
f.children(".tab-item").each(function(h){var i=$(this).attr("data-id");
if(i&&i!=""){$(this).attr("id",i).attr("rel",h)
}else{$(this).attr("id","leftTab"+e+""+h).attr("rel",h)
}$(this).removeAttr("data-id")
});
var c=d.height();
g.css("min-height",c);
f.css("min-height",c);
f.css("visibility","visible");
if(!$("body").hasClass("xs")){d.find("a").parents("li").removeClass("selected");
f.children(".tab-item").addClass("fakeHide");
f.children('.tab-item[rel="0"]').removeClass("fakeHide");
d.find("li:first").addClass("selected")
}})
}})();
var cmpGlobalSiteFeaturedIcon=(function(){return{init:function(){var b=$(".cmp-globalsite-featuredicon");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(b){}})();
var cmpPageFilter=(function(){var b=[];
return{init:function(){a()
},onChange:function(c){b.push(c)
}};
function a(){var h=$(".cmp-globalsite-pagefilter");
if(h.length==0){return
}var m={};
var g=[];
var l="";
var d="";
var c=h.find("input#showLocalizedContent").val();
var r=h.find("input#languageCode").val();
var n=h.find("input#filterCodes").val();
var q=h.find("input#tags").val();
var e=h.find("input#filterTags").val();
var f=h.find("input#excludeFilterTags").val();
h.find(".dropdown").each(function(){var s=$(this).find("button.dropdown-toggle span").text();
m[s]="";
g.push(s)
});
h.on("filter.single.select",function(t){var u=t.detail;
var s=u.closest(".dropdown").data("dropdown-index");
m[g[s-1]]=u.data("value").toString();
l=g[s-1];
d=u.data("value").toString();
$.get(j()).success(function(v){i(v)
});
p(m,d)
});
h.on("filter.reset",function(t){for(var s in m){m[s]=""
}l="";
d="";
k();
p(m,d)
});
o();
function p(t){for(var s in b){b[s](t,d)
}}function k(){h.find(".page-filter .dropdown").each(function(){$(this).removeClass("hide");
$(this).find(".hide").removeClass("hide")
})
}function j(){var s="/ngw/syspath-bin/gartner/dynamiccontent?requestType=GET_DYNAMIC_FILTERS_BY_TAGS&languageCode="+r+"&showLocalizedContent="+c+"&filterCodes="+n;
s=s+"&tags="+encodeURIComponent(q);
s=e?s+"&filterTags="+encodeURIComponent(e):s;
s=f?s+"&excludeFilterTags="+encodeURIComponent(f):s;
Object.keys(m).forEach(function(u,t){s=m[u]?s+"&filter"+(t+1)+"="+encodeURIComponent(m[u]):s
});
return s
}function i(s){var t=s.data;
h.find(".page-filter").children().children().children().children(".dropdown").each(function(){var v=$(this).data("dropdown-index");
var u=g[v-1];
if(l!==u){$(this).removeClass("hide");
$(this).find(".hide").removeClass("hide");
var w=t[u];
if(w){$(this).find("a").each(function(){var z=$(this);
var x=z.data("value");
var y=false;
w.forEach(function(A){if(x===A.value){y=true
}});
if(!y){z.parent().addClass("hide")
}})
}else{$(this).addClass("hide")
}}})
}function o(){var v=CommonFunctions.getAllQueryParams();
var t=decodeURIComponent(v.type);
var s=decodeURIComponent(v.tag);
if(t&&s){var u=h.find("button.btn-filter");
u.each(function(){var w=$(this);
if(w.children("span").text()===t){w.next().find("a").each(function(){if(this.innerText===s){$(this).click()
}})
}})
}}}})();
var cmpGlobalSiteDynamicExpertContent=(function(){return{init:function(){var $componentList=$(".cmp-globalsite-dynamicexpertcontent");
$componentList.each(function(){initializeForEach($(this))
})
}};
function initializeForEach($component){var nPage=Math.max(parseInt(CommonFunctions.getAllQueryParams()["page"]||"1"),1);
var tags=$component.find("input#tags").val();
var filterTags=$component.find("input#filterTags").val();
var excludeFilterTags=$component.find("input#excludeFilterTags").val();
var designType="expert";
var pageSize=parseInt($component.find("input#pageSize").val());
var showLocalizedContent=$component.find("input#showLocalizedContent").val();
var currentPagePath=$component.find("input#currentPagePath").val();
var languageCode=$component.find("input#languageCode").val();
var filterCodes=$component.find("input#filterCodes").val();
var numPages=$component.find("input#numPages").val();
var numFound=$component.find("input#numFound").val();
var totalPageSize=(nPage)*pageSize;
var $individualBlockWrapper=$component.find(".individual-block").parent();
var $individualBlock=$component.find(".individual-block");
var $globaltemplate=$component.find(".dynamic-dummy-content").find(".individual-block");
var linkText=$individualBlockWrapper.find(".link").first().text().trim();
var $paginationComponent=$component.find("div.cmp-pagination > div.sequence-pagination");
if($paginationComponent.length>0){cmpPagination.refreshSequentialPagination($paginationComponent,numPages,numFound)
}var filters={};
var lastSelectedFilter="";
var startModified=false;
emptyTemplate();
initializeFilters();
$component.find(".load-more").click(function(){loadMoreHandler($component)
});
function buildUrl(){var url="/ngw/syspath-bin/gartner/dynamiccontent?requestType=select-by-tags&designType="+designType+"&nPage="+nPage+"&pageSize="+pageSize+"&languageCode="+languageCode+"&showLocalizedContent="+showLocalizedContent+"&filterCodes="+filterCodes+"&currentPagePath="+currentPagePath;
url=url+"&tags="+encodeURIComponent(tags);
url=filterTags?url+"&filterTags="+encodeURIComponent(filterTags):url;
url=excludeFilterTags?url+"&excludeFilterTags="+encodeURIComponent(excludeFilterTags):url;
Object.keys(filters).forEach(function(key,index){url=filters[key]?url+"&filter"+(index+1)+"="+encodeURIComponent(filters[key]):url
});
return url
}function loadMoreHandler($component){$component.find(".load-more").hide();
$component.find(".loader").show();
$individualBlock=$component.find(".individual-block");
nPage++;
$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc))
}totalPageSize=totalPageSize+docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}}).complete(function(){$component.find(".headline").matchHeight();
$component.find(".headline-xs").matchHeight();
$component.find(".loader").hide()
})
}if($paginationComponent.length>0){cmpPagination.subscribePaginationEvents("pagination-sequence-changed",function(event){loadMorePaginationHandler(event.detail)
});
cmpPagination.subscribePaginationEvents("view-count-changed",function(event){if(event.detail&&(typeof(event.detail)==="string"&&event.detail.toLowerCase()==="all")){pageSize=1000
}else{pageSize=event.detail
}refreshContentBySelectedDropdown()
})
}function loadMorePaginationHandler(currentPage){$individualBlock=$component.find(".individual-block");
if(startModified&&collisionPage==currentPage){startModified=false
}if(startModified){start=(collisionPage==(currentPage-1)?start+1:start+parseInt(pageSize))
}else{start=(currentPage-1)*parseInt(pageSize)
}nPage=currentPage;
var $cachedIndividualBlock=$individualBlockWrapper.find(">div.page-"+nPage);
if($cachedIndividualBlock.length>0){$individualBlock.addClass("hide");
$cachedIndividualBlock.removeClass("hide");
return
}$paginationComponent.hide();
$component.find(".loader").show();
$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
var $newIndividualBlock=bindData(doc);
$newIndividualBlock.addClass("page-"+nPage);
$individualBlockWrapper.append($newIndividualBlock);
start=0;
collisionPage=nPage;
startModified=true
}$individualBlock.addClass("hide")
}).complete(function(){$component.find(".loader").hide();
$paginationComponent.show()
})
}function initializeFilters(){var filterNames=[];
$component.find(".dynamic-filter .dropdown button").each(function(){filterNames.push($(this).find("span").text());
var filterId=$(this).attr("id");
filters[filterId]=""
});
$component.find(".dynamic-filter .dropdown a").click(function(){$dropdown=$(this).closest(".dropdown");
$dropdown.find("a").removeClass("active");
$dropdown.find("button span").addClass("active");
$dropdown.find("button span").text($(this).text());
$(this).addClass("active");
$component.find(".reset").show();
var filterId=$dropdown.find("button").attr("id");
filters[filterId]=$(this).attr("data-value");
lastSelectedFilter=filterId;
refreshContentBySelectedDropdown()
});
$component.find(".reset").click(function(){$component.find(".dynamic-filter .dropdown").each(function(index){$(this).find("span").text(filterNames[index]);
$(this).find("span").removeClass("active");
$(this).find("a").removeClass("active");
$(this).removeClass("hide");
$(this).find(".hide").removeClass("hide")
});
$(this).hide();
Object.keys(filters).forEach(function(key){filters[key]=""
});
lastSelectedFilter="";
refreshContentBySelectedDropdown()
});
$component.find(".dynamic-filter input").change(function(){refreshContentBySelectedDropdown()
});
$component.find(".dynamic-filter .show-filters").click(function(){showFilters()
});
$component.find(".dynamic-filter .hide-filters").click(function(){hideFilters()
});
selectDropdownByQueryParams()
}function selectDropdownByQueryParams(){var params=CommonFunctions.getAllQueryParams();
var type=decodeURIComponent(params.type);
var tag=decodeURIComponent(params.tag);
if(type&&tag){$dropdown=$component.find(".dynamic-filter .dropdown button#"+type).next();
$dropdown.find("a").each(function(){if(this.innerText==tag){$(this).click();
showFilters()
}})
}}function refreshContentBySelectedDropdown(){nPage=1;
$individualBlock=$component.find(".individual-block");
$.get(buildUrl()).success(function(response){if(lastSelectedFilter!=""){refreshDynamicFilters(response.data.dynamicFilters)
}var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc))
}$individualBlock.remove();
totalPageSize=docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}else{$component.find(".load-more").hide()
}if(totalPageSize>0){if($paginationComponent.length>0){var pageCount=Math.ceil(response.data.numFound/totalPageSize);
cmpPagination.refreshSequentialPagination($paginationComponent,pageCount,response.data.numFound)
}$component.find(".not-found").addClass("hidden")
}else{$component.find(".not-found").removeClass("hidden")
}}).complete(function(){$component.find(".headline").matchHeight();
$component.find(".headline-xs").matchHeight()
})
}function refreshDynamicFilters(dynamicFilters){$component.find(".dynamic-filter .dropdown").each(function(){var filterId=$(this).find("button").attr("id");
if(lastSelectedFilter!=filterId){$(this).removeClass("hide");
$(this).find(".hide").removeClass("hide");
var filterOptions=dynamicFilters[filterId];
if(filterOptions){$(this).find("a").each(function(){var $self=$(this);
var tagId=$self.attr("data-value");
var found=false;
filterOptions.forEach(function(filterOption){if(tagId==filterOption.value){found=true
}});
if(!found){$self.parent().addClass("hide")
}})
}else{$(this).addClass("hide")
}}})
}function showFilters(){$component.find(".dynamic-filter .row").removeClass("hidden-xs");
$component.find(".dynamic-filter .show-filters").addClass("hidden");
$component.find(".dynamic-filter .hide-filters").removeClass("hidden")
}function hideFilters(){$component.find(".dynamic-filter .row").addClass("hidden-xs");
$component.find(".dynamic-filter .hide-filters").addClass("hidden");
$component.find(".dynamic-filter .show-filters").removeClass("hidden")
}function decode(str){return str.replace(/&#(\d+);/g,function(match,dec){return String.fromCharCode(dec)
})
}function bindData(){eval("var json = arguments[0]");
var $template=$globaltemplate.clone();
$template.find(".headline").removeAttr("style");
$template.find(".headline-xs").removeAttr("style");
$template.find("[data-elem-val]").each(function(){var dataAttr=$(this).attr("data-elem-val");
var value=eval("json."+dataAttr)||"";
if($.isEmptyObject(value)&&dataAttr=="allFields['ctaText']"){value="Read Now"
}if($.isArray(value)){if(value.length==0){$(this).text("")
}else{$(this).text(value[0])
}}else{var txt=decode(value);
$(this).text(txt)
}});
$template.find("[data-elem-attr]").each(function(){var $self=$(this);
var attrValues=$(this).attr("data-elem-attr");
attrValues.split(";").forEach(function(attrValue){var attrNameValue=attrValue.split("=");
var attrName=attrNameValue[0];
var attrValue=attrNameValue[1];
var value=eval("json."+attrValue)||"";
if($.isArray(value)){if(value.length==0){$self.attr(attrName,"")
}else{$self.attr(attrName,value[0])
}}else{$self.attr(attrName,value)
}})
});
return $template
}function emptyTemplate(){$globaltemplate=bindData({allFields:{}})
}}})();
var cmpGlobalSiteDynamicContent=(function(){return{init:function(){var $componentList=$(".cmp-globalsite-dynamiccontent");
$componentList.each(function(){initializeForEach($(this))
})
}};
function initializeForEach($component){$component.find(".swg-image").matchHeight();
$component.find(".swg-title").matchHeight();
$component.find(".swg-link").matchHeight();
$component.find(".swg-item").matchHeight();
var dynamicLinks=$component.find(".dynamicLink");
var webinarComponent=$(".cmp-globalsite-webinar");
if(webinarComponent&&dynamicLinks){var promotionsArray=[];
$.each(dynamicLinks,function(){var promotion={};
promotion.name=$(this).data("promo-name");
promotion.id=$(this).data("promo-id");
promotion.creative="CATEGORY CONTENT";
promotion.placement="Related Webinars";
promotion.assetType="Webinar";
promotionsArray.push(promotion)
});
var dataLayer=window.dataLayer||[];
dataLayer.push({event:"newPromotionsAdded",page:{promotions:promotionsArray}})
}var nPage=Math.max(parseInt(CommonFunctions.getAllQueryParams()["page"]||"1"),1);
var tags=$component.find("input#tags").val();
var filterTags=$component.find("input#filterTags").val();
var excludeFilterTags=$component.find("input#excludeFilterTags").val();
var designType=$component.find("input#designType").val();
var pageSize=parseInt($component.find("input#pageSize").val());
var webinarType=$component.find("input#webinarType").val();
var showLocalizedContent=$component.find("input#showLocalizedContent").val();
var currentPagePath=$component.find("input#currentPagePath").val();
var languageCode=$component.find("input#languageCode").val();
var filterCodes=$component.find("input#filterCodes").val();
var randomSeed=$component.find("input#randomSeed").val();
var tagType=$component.find("input#tagType").val();
var enablePageFilterStr=$component.find("input#enablePageFilter").val();
var enablePageFilter=(/true/i).test(enablePageFilterStr);
var totalPageSize=(nPage)*pageSize;
var numPages=$component.find("input#numPages").val();
var numFound=$component.find("input#numFound").val();
var hideEyeBrow=$component.find("input#hideEyeBrow").val();
var $paginationComponent=$component.find("div.cmp-pagination > div.sequence-pagination");
var displayAudioVideoTimestamp=$component.find("input#displayAudioVideoTimestamp").val();
if($paginationComponent.length>0){cmpPagination.refreshSequentialPagination($paginationComponent,numPages,numFound)
}var readTagsFromPage=(/true/i).test($component.find("input#readTagsFromPage").val());
var additionalPageTags=$component.find("input#additionalPageTags").val();
var $individualBlockWrapper=$component.find(".individual-block").parent();
var $individualBlock=$component.find(".individual-block");
var $globaltemplate=$component.find(".dynamic-dummy-content").find(".individual-block");
var linkText=$individualBlockWrapper.find(".link").first().text().trim();
var filters={};
var lastSelectedFilter="";
var lastSelectedTag="";
var startModified=false;
var dynamicButtonLabel=$component.find(".dynamic-button").text();
var dynamicButtonLink=$component.find(".dynamic-button").prop("href");
emptyTemplate();
if(enablePageFilter){initializePageFilters()
}else{initializeFilters()
}$component.find(".load-more").click(function(){loadMoreHandler($component)
});
function buildUrl(){var url="/ngw/syspath-bin/gartner/dynamiccontent?requestType=select-by-tags&designType="+designType+"&nPage="+nPage+"&pageSize="+pageSize+"&languageCode="+languageCode+"&showLocalizedContent="+showLocalizedContent+"&filterCodes="+filterCodes+"&randomSeed="+randomSeed+"&tagType="+tagType+"&currentPagePath="+currentPagePath;
if(readTagsFromPage){url=url+"&readTagsFromPage="+readTagsFromPage+"&additionalPageTags="+additionalPageTags
}url=tags?url+"&tags="+encodeURIComponent(tags):url;
url=filterTags?url+"&filterTags="+encodeURIComponent(filterTags):url;
url=excludeFilterTags?url+"&excludeFilterTags="+encodeURIComponent(excludeFilterTags):url;
Object.keys(filters).forEach(function(key,index){url=filters[key]?url+"&filter"+(index+1)+"="+encodeURIComponent(filters[key]):url
});
url=webinarType?url+"&webinarType="+webinarType:url;
url=lastSelectedTag?url+"&lastSelectedTag="+lastSelectedTag:url;
return url
}if($paginationComponent.length>0){cmpPagination.subscribePaginationEvents("pagination-sequence-changed",function(event){loadMorePaginationHandler(event.detail)
})
}function loadMorePaginationHandler(currentPage){$individualBlock=$component.find(".individual-block");
if(startModified&&collisionPage==currentPage){startModified=false
}if(startModified){start=(collisionPage==(currentPage-1)?start+1:start+parseInt(pageSize))
}else{start=(currentPage-1)*parseInt(pageSize)
}nPage=currentPage;
var $cachedIndividualBlock=$individualBlockWrapper.find(">div.page-"+nPage);
if($cachedIndividualBlock.length>0){$individualBlock.addClass("hide");
$cachedIndividualBlock.removeClass("hide");
return
}$paginationComponent.hide();
$component.find(".loader").show();
$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
var $newIndividualBlock=bindData(doc);
$newIndividualBlock.addClass("page-"+nPage);
if($(window).width()>1024){if(index%3==0){$newIndividualBlock.css("clear","both")
}else{$newIndividualBlock.css("clear","none")
}}else{if($(window).width()<1025&&$(window).width()>767){if(index%2==0){$newIndividualBlock.css("clear","both")
}else{$newIndividualBlock.css("clear","none")
}}}$individualBlockWrapper.append($newIndividualBlock);
start=0;
collisionPage=nPage;
startModified=true
}$individualBlock.addClass("hide")
}).complete(function(){$component.find(".loader").hide();
$paginationComponent.show();
dataLayer.push({event:"optimize.loadMore"})
})
}function loadMoreHandler($component){$component.find(".load-more").hide();
$component.find(".loader").show();
$individualBlock=$component.find(".individual-block");
nPage++;
if(startModified){start=(collisionPage==(nPage-1)?start+1:start+pageSize)
}else{start=(nPage-1)*pageSize
}$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc))
}totalPageSize=totalPageSize+docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}}).complete(function(){$component.find(".loader").hide();
dataLayer.push({event:"optimize.loadMore"})
})
}function subscribePaginationEvents(){if($paginationComponent.length>0){cmpPagination.subscribePaginationEvents("view-count-changed",function(event){if(event.detail&&(typeof(event.detail)==="string"&&event.detail.toLowerCase()==="all")){pageSize=1000
}else{pageSize=event.detail
}refreshContentBySelectedDropdown()
})
}}function initializePageFilters(){cmpPageFilter.onChange(function(pageFilters,lastSelectedOption){filters=pageFilters;
lastSelectedTag=lastSelectedOption;
refreshContentBySelectedDropdown()
});
subscribePaginationEvents()
}function initializeFilters(){var filterNames=[];
$component.find(".dynamic-filter .dropdown button").each(function(){filterNames.push($(this).find("span").text());
var filterId=$(this).attr("id");
filters[filterId]=""
});
subscribePaginationEvents();
$component.find(".dynamic-filter .dropdown a").click(function(){$dropdown=$(this).closest(".dropdown");
$dropdown.find("a").removeClass("active");
$dropdown.find("button span").addClass("active");
$dropdown.find("button span").text($(this).text());
$(this).addClass("active");
$component.find(".reset").show();
var filterId=$dropdown.find("button").attr("id");
filters[filterId]=$(this).attr("data-value");
lastSelectedFilter=filterId;
lastSelectedTag=$(this).attr("data-value");
refreshContentBySelectedDropdown()
});
$component.find(".reset").click(function(){$component.find(".dynamic-filter .dropdown").each(function(index){$(this).find("span").text(filterNames[index]);
$(this).find("span").removeClass("active");
$(this).find("a").removeClass("active");
$(this).removeClass("hide");
$(this).find(".hide").removeClass("hide")
});
$(this).hide();
Object.keys(filters).forEach(function(key){filters[key]=""
});
lastSelectedFilter="";
lastSelectedTag="";
refreshContentBySelectedDropdown()
});
if(webinarType){$component.find(".dynamic-filter input#"+webinarType).prop("checked",true)
}$component.find(".dynamic-filter input").change(function(){webinarType=$(this).prop("id");
refreshContentBySelectedDropdown()
});
$component.find(".dynamic-filter .show-filters").click(function(){showFilters()
});
$component.find(".dynamic-filter .hide-filters").click(function(){hideFilters()
});
selectDropdownByQueryParams()
}function selectDropdownByQueryParams(){var params=CommonFunctions.getAllQueryParams();
var type=decodeURIComponent(params.type);
var tag=decodeURIComponent(params.tag);
if(type&&tag){var $dropdown=$component.find(".dynamic-filter .dropdown button#"+type).next();
$dropdown.find("a").each(function(){if(this.innerText==tag){$(this).click();
showFilters()
}})
}}function refreshContentBySelectedDropdown(){nPage=1;
$individualBlock=$component.find(".individual-block");
$.get(buildUrl()).success(function(response){if(lastSelectedFilter!=""){refreshDynamicFilters(response.data.dynamicFilters)
}refreshDynamicButton(response.data.dynamicButton);
var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
var $newIndividualBlock=bindData(doc);
$newIndividualBlock.addClass("page-"+nPage);
$individualBlockWrapper.append($newIndividualBlock)
}$individualBlock.remove();
totalPageSize=docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}else{$component.find(".load-more").hide()
}if(totalPageSize>0){if($paginationComponent.length>0){var pageCount=Math.ceil(response.data.numFound/totalPageSize);
cmpPagination.refreshSequentialPagination($paginationComponent,pageCount,response.data.numFound)
}$component.find(".not-found").addClass("hidden")
}else{$component.find(".not-found").removeClass("hidden")
}}).complete(function(){})
}function refreshDynamicFilters(dynamicFilters){$component.find(".dynamic-filter .dropdown").each(function(){var filterId=$(this).find("button").attr("id");
if(lastSelectedFilter!=filterId){$(this).removeClass("hide");
$(this).find(".hide").removeClass("hide");
var filterOptions=dynamicFilters[filterId];
if(filterOptions){$(this).find("a").each(function(){var $self=$(this);
var tagId=$self.attr("data-value");
var found=false;
filterOptions.forEach(function(filterOption){if(tagId==filterOption.value){found=true
}});
if(!found){$self.parent().addClass("hide")
}})
}else{$(this).addClass("hide")
}}})
}function refreshDynamicButton(dynamicButton){if(dynamicButton){$component.find(".dynamic-button").text(dynamicButton.text);
$component.find(".dynamic-button").prop("href",dynamicButton.value)
}else{$component.find(".dynamic-button").text(dynamicButtonLabel);
$component.find(".dynamic-button").prop("href",dynamicButtonLink)
}}function showFilters(){$component.find(".dynamic-filter .row").removeClass("hidden-xs");
$component.find(".dynamic-filter .show-filters").addClass("hidden");
$component.find(".dynamic-filter .hide-filters").removeClass("hidden")
}function hideFilters(){$component.find(".dynamic-filter .row").addClass("hidden-xs");
$component.find(".dynamic-filter .hide-filters").addClass("hidden");
$component.find(".dynamic-filter .show-filters").removeClass("hidden")
}function decode(str){return str.replace(/&#(\d+);/g,function(match,dec){return String.fromCharCode(dec)
})
}function bindData(){eval("var json = arguments[0]");
var $template=$globaltemplate.clone();
$template.find(".headline").removeAttr("style");
$template.find(".headline-xs").removeAttr("style");
$template.find("[data-elem-val]").each(function(){var dataAttr=$(this).attr("data-elem-val");
var value=eval("json."+dataAttr)||"";
if($.isEmptyObject(value)&&dataAttr=="allFields['ctaText']"){value="Read Now"
}if(!$.isEmptyObject(value)&&displayAudioVideoTimestamp=="true"&&dataAttr=="allFields['maxvideolength']"){value=" | "+value
}if($.isArray(value)){var isPodcast=$(this).closest(".individual-block").hasClass("podcast");
if(value.length==0){$(this).text("");
if(isPodcast){$(this).parent().addClass("hidden")
}}else{if(isPodcast){$(this).parent().removeClass("hidden");
$(this).text(value.join(", "))
}else{$(this).text(value[0])
}}}else{var txt=decode(value);
$(this).text(txt)
}});
$template.find("[data-elem-attr]").each(function(){var $self=$(this);
var attrValues=$(this).attr("data-elem-attr");
attrValues.split(";").forEach(function(attrValue){var attrNameValue=attrValue.split("=");
var attrName=attrNameValue[0];
var attrValue=attrNameValue[1];
var value=eval("json."+attrValue)||"";
if($.isArray(value)){if(value.length==0){$self.attr(attrName,"")
}else{$self.attr(attrName,value[0])
}}else{$self.attr(attrName,value)
}if(attrValue=="seoImageUrl"){var defaultImageUrl=eval("json.defaultImageUrl")||" ";
$self.attr("onerror","this.onerror=null;this.src='"+defaultImageUrl+"'")
}})
});
return $template
}function emptyTemplate(){$globaltemplate=bindData({allFields:{}})
}}})();
var cmpGlobalSiteDynamicNewsletterContent=(function(){return{init:function(){var b=$(".cmp-globalsite-dynamicnewslettercontent");
b.each(function(){a($(this))
})
}};
function a(b){var g=b.find('input[name="contentType"]').val();
if(g&&g==="newsroomarchive"){b.find(".dynamic-filter .show-filters").click(function(){e()
});
b.find(".dynamic-filter .hide-filters").click(function(){f()
});
var d=b.find(".selected-year");
c(d);
b.find("li").click(function(h){h.preventDefault();
c($(this))
})
}function c(k){var j=k.text();
k.closest(".dropdown").find(".selected-year").text(j);
k.closest(".newsroom-header").find(".newsroom-header-year").text(j);
var h=b.find(".newsroom-items .row");
h.hide();
var i="."+j;
h=h.filter(i);
h.show()
}function e(){b.find(".dynamic-filter .row").removeClass("hidden-xs");
b.find(".dynamic-filter .show-filters").addClass("hidden");
b.find(".dynamic-filter .hide-filters").removeClass("hidden")
}function f(){b.find(".dynamic-filter .row").addClass("hidden-xs");
b.find(".dynamic-filter .hide-filters").addClass("hidden");
b.find(".dynamic-filter .show-filters").removeClass("hidden")
}}})();
var cmpGlobalSiteDynamicWebinarContent=(function(){return{init:function(){var $componentList=$(".cmp-globalsite-dynamicwebinarcontent");
$componentList.each(function(){initializeForEach($(this))
})
}};
function initializeForEach($component){var nPage=Math.max(parseInt(CommonFunctions.getAllQueryParams()["page"]||"1"),1);
var tags=$component.find("input#tags").val();
var filterTags=$component.find("input#filterTags").val();
var excludeFilterTags=$component.find("input#excludeFilterTags").val();
var designType=$component.find("input#designType").val();
var pageSize=parseInt($component.find("input#pageSize").val());
var startModified=false;
var collisionPage=null;
var start=(nPage-1)*pageSize;
var webinarType=$component.find("input#webinarType").val();
var showLocalizedContent=$component.find("input#showLocalizedContent").val();
var currentPagePath=$component.find("input#currentPagePath").val();
var languageCode=$component.find("input#languageCode").val();
var filterCodes=$component.find("input#filterCodes").val();
var numPages=$component.find("input#numPages").val();
var numFound=$component.find("input#numFound").val();
var totalPageSize=(nPage)*pageSize;
var $individualBlockWrapper=$component.find(".individual-block").parent();
var $individualBlock=$component.find(".individual-block");
var $globaltemplate=$component.find(".dynamic-dummy-content").find(".individual-block").clone();
var linkText=$individualBlockWrapper.find(".link").first().text().trim();
var $paginationComponent=$component.find("div.cmp-pagination > div.sequence-pagination");
cmpPagination.refreshSequentialPagination($paginationComponent,numPages,numFound);
var filters={};
emptyTemplate();
initializeFilters();
initializeCollisionVars();
$component.find(".load-more").click(function(){loadMoreHandler($component)
});
function buildUrl(){var url="/ngw/syspath-bin/gartner/dynamiccontent?requestType=select-by-tags&designType="+designType+"&nPage="+nPage+"&start="+start+"&pageSize="+pageSize+"&languageCode="+languageCode+"&showLocalizedContent="+showLocalizedContent+"&filterCodes="+filterCodes+"&currentPagePath="+currentPagePath;
url=url+"&tags="+encodeURIComponent(tags);
url=filterTags?url+"&filterTags="+encodeURIComponent(filterTags):url;
url=excludeFilterTags?url+"&excludeFilterTags="+encodeURIComponent(excludeFilterTags):url;
Object.keys(filters).forEach(function(key,index){url=filters[key]?url+"&filter"+(index+1)+"="+encodeURIComponent(filters[key]):url
});
url=webinarType?url+"&webinarType="+webinarType:url;
return url
}function loadMoreHandler($component){$component.find(".load-more").hide();
$component.find(".loader").show();
$individualBlock=$component.find(".individual-block");
nPage++;
if(startModified){start=(collisionPage==(nPage-1)?start+1:start+pageSize)
}else{start=(nPage-1)*pageSize
}$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
var webinarTypeModified=webinarType;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc));
if(webinarType=="all-webinars"&&!doc.upcomingWebinar){if(webinarTypeModified===webinarType){start=0;
collisionPage=nPage;
webinarTypeModified="ondemand-webinars";
startModified=true
}else{start++
}}}if(webinarTypeModified!==webinarType){webinarType=webinarTypeModified
}totalPageSize=totalPageSize+docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}}).complete(function(){$component.find(".loader").hide()
})
}cmpPagination.subscribePaginationEvents("pagination-sequence-changed",function(event){loadMorePaginationHandler(event.detail)
});
cmpPagination.subscribePaginationEvents("view-count-changed",function(event){if(event.detail&&(typeof(event.detail)==="string"&&event.detail.toLowerCase()==="all")){pageSize=1000
}else{pageSize=event.detail
}refreshContentBySelectedDropdown()
});
function loadMorePaginationHandler(currentPage){$individualBlock=$component.find(".individual-block");
if(startModified&&collisionPage==currentPage){webinarType="all-webinars";
startModified=false
}else{if(collisionPage>0&&collisionPage==(currentPage-1)){webinarType="ondemand-webinars";
startModified=true
}}if(startModified){if(currentPage>nPage&&collisionPage==(currentPage-1)){start=start+1
}else{if(currentPage>nPage){start=start+parseInt(pageSize)
}else{if(currentPage<nPage){start=start-parseInt(pageSize)
}}}}else{start=(currentPage-1)*parseInt(pageSize)
}nPage=currentPage;
var $cachedIndividualBlock=$individualBlockWrapper.find(">div.page-"+nPage);
if($cachedIndividualBlock.length>0){$individualBlock.addClass("hide");
$cachedIndividualBlock.removeClass("hide");
if(collisionPage==nPage){var totalOnDemandWebinarsIndexes=-1;
$cachedIndividualBlock.find("p.type").each(function(index,element){var webinarType=$(element).data("webinar-type");
if(webinarType=="ON-DEMAND"){totalOnDemandWebinarsIndexes++
}});
start=totalOnDemandWebinarsIndexes
}return
}$paginationComponent.hide();
$component.find(".loader").show();
$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
var webinarTypeModified=webinarType;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
var $newIndividualBlock=bindData(doc);
$newIndividualBlock.addClass("page-"+nPage);
if($(window).width()>1024){if(index%3==0){$newIndividualBlock.css("clear","both")
}else{$newIndividualBlock.css("clear","none")
}}else{if($(window).width()<1025&&$(window).width()>767){if(index%2==0){$newIndividualBlock.css("clear","both")
}else{$newIndividualBlock.css("clear","none")
}}}$individualBlockWrapper.append($newIndividualBlock);
if(webinarType=="all-webinars"&&!doc.upcomingWebinar){if(webinarTypeModified===webinarType){start=0;
collisionPage=nPage;
webinarTypeModified="ondemand-webinars";
startModified=true
}else{start++
}}}if(webinarTypeModified!==webinarType){webinarType=webinarTypeModified
}$individualBlock.addClass("hide")
}).complete(function(){$component.find(".loader").hide();
$paginationComponent.show()
})
}function initializeFilters(){var filterNames=[];
$component.find(".dynamic-filter .dropdown button").each(function(){filterNames.push($(this).find("span").text());
var filterId=$(this).attr("id");
filters[filterId]=""
});
$component.find(".dynamic-filter .dropdown a").click(function(){var $anchor=$(this);
var $dropdown=$anchor.closest(".dropdown");
$dropdown.find("a").removeClass("active");
$dropdown.find("button span").addClass("active");
$dropdown.find("button span").text($(this).text());
$anchor.addClass("active");
var filterId=$dropdown.find("button").attr("id");
$component.find(".reset").show();
filters[filterId]=$(this).attr("data-value");
refreshContentBySelectedDropdown()
});
$component.find(".reset").click(function(){$component.find(".dynamic-filter .dropdown").each(function(index){var $dropdown=$(this);
if($dropdown.parent().hasClass("pagination-filter")){return
}$dropdown.find("span").text(filterNames[index]);
$dropdown.find("span").removeClass("active");
$dropdown.find("a").removeClass("active");
$dropdown.removeClass("hide");
$dropdown.find(".hide").removeClass("hide")
});
$(this).hide();
Object.keys(filters).forEach(function(key){filters[key]=""
});
refreshContentBySelectedDropdown()
});
if(webinarType){$component.find(".dynamic-filter input#"+webinarType).prop("checked",true)
}$component.find(".dynamic-filter input").change(function(){webinarType=$(this).prop("id");
refreshContentBySelectedDropdown()
});
selectDropdownByQueryParams()
}function initializeCollisionVars(){var onDemandWebinarsCount=0;
$individualBlock.find("p.type").each(function(){var pText=$(this).data("webinar-type");
if(pText=="ON-DEMAND"){onDemandWebinarsCount++
}});
if(onDemandWebinarsCount>0){startModified=true;
collisionPage=1;
webinarType="ondemand-webinars";
start=onDemandWebinarsCount-1
}}function selectDropdownByQueryParams(){var params=CommonFunctions.getAllQueryParams();
var type=decodeURIComponent(params.type);
var tag=decodeURIComponent(params.tag);
if(type&&tag){var $dropdown=$component.find(".dynamic-filter .dropdown button#"+type).next();
$dropdown.find("a").each(function(){if(this.innerText==tag){$(this).click()
}})
}}function refreshContentBySelectedDropdown(){nPage=1;
start=0;
startModified=false;
collisionPage=null;
webinarType=$component.find(".dynamic-filter input:checked").prop("id");
$individualBlock=$component.find(".individual-block");
$component.find(".loader").show();
$paginationComponent.hide();
$.get(buildUrl()).success(function(response){refreshCount(response);
var docsArray=response.data.docs;
var numFound=response.data.numFound;
var webinarTypeModified=webinarType;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc));
if(webinarType=="all-webinars"&&!doc.upcomingWebinar){if(webinarTypeModified===webinarType){start=0;
collisionPage=nPage;
webinarTypeModified="ondemand-webinars";
startModified=true
}else{start++
}}}if(webinarTypeModified!==webinarType){webinarType=webinarTypeModified
}$individualBlock.remove();
totalPageSize=docsArray.length;
if(totalPageSize<numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}else{$component.find(".load-more").hide()
}if(totalPageSize>0){$component.find(".not-found").addClass("hidden")
}else{$paginationComponent.hide();
$component.find(".not-found").removeClass("hidden")
}}).complete(function(){$component.find(".loader").hide()
})
}function refreshCount(response){resp=response;
var numFound=response.data.numFound;
if(numFound>0){var itemText=numFound>1?" Items":" Item";
$component.find(".count").text(numFound+itemText);
$component.find(".count").show();
refreshPageCounter(numFound)
}else{$component.find(".count").hide()
}}function refreshPageCounter(numFound){if($paginationComponent.length>0){var numPages=Math.ceil(numFound/pageSize);
cmpPagination.refreshSequentialPagination($paginationComponent,numPages,numFound);
if(numFound>12){$paginationComponent.closest(".pagination-wrapper").removeClass("hide")
}}}function decode(str){return str.replace(/&#(\d+);/g,function(match,dec){return String.fromCharCode(dec)
})
}function bindData(){eval("var json = arguments[0]");
var $template=$globaltemplate.clone();
$template.find("[data-elem-val]").each(function(){var dataAttr=$(this).attr("data-elem-val");
var value=eval("json."+dataAttr)||"";
if($.isEmptyObject(value)&&dataAttr=="ctaText"){value="Read Now"
}if($.isArray(value)){if(value.length==0){$(this).text("")
}else{$(this).text(value[0])
}}else{var txt=decode(value);
$(this).text(txt)
}});
$template.find("[data-elem-attr]").each(function(){var $self=$(this);
var attrValues=$(this).attr("data-elem-attr");
attrValues.split(";").forEach(function(attrValue){var attrNameValue=attrValue.split("=");
var attrName=attrNameValue[0];
var attrValue=attrNameValue[1];
var value=eval("json."+attrValue)||"";
if($.isArray(value)){if(value.length==0){$self.attr(attrName,"")
}else{$self.attr(attrName,value[0])
}}else{$self.attr(attrName,value)
}})
});
return $template
}function emptyTemplate(){$globaltemplate=bindData({allFields:{}})
}}})();
var cmpGlobalSiteDynamicCachedWebinarContent=(function(){return{init:function(){var $componentList=$(".cmp-globalsite-dynamiccachedwebinarcontent");
$componentList.each(function(){initializeForEach($(this))
})
}};
function initializeForEach($component){var nPage=Math.max(parseInt(CommonFunctions.getAllQueryParams()["page"]||"1"),1);
var tags=$component.find("input#tags").val();
var filterTags=$component.find("input#filterTags").val();
var excludeFilterTags=$component.find("input#excludeFilterTags").val();
var designType=$component.find("input#designType").val();
var pageSize=parseInt($component.find("input#pageSize").val());
var startModified=false;
var collisionPage=null;
var start=(nPage-1)*pageSize;
var webinarType=$component.find("input#webinarType").val();
var showLocalizedContent=$component.find("input#showLocalizedContent").val();
var currentPagePath=$component.find("input#currentPagePath").val();
var languageCode=$component.find("input#languageCode").val();
var filterCodes=$component.find("input#filterCodes").val();
var numPages=$component.find("input#numPages").val();
var numFound=$component.find("input#numFound").val();
var totalPageSize=(nPage)*pageSize;
var enablePageFilterStr=$component.find("input#enablePageFilter").val();
var enablePageFilter=(/true/i).test(enablePageFilterStr);
var $individualBlockWrapper=$component.find(".individual-block").parent();
var $individualBlock=$component.find(".individual-block");
var $globaltemplate=$component.find(".dynamic-dummy-content").find(".individual-block").clone();
var linkText=$individualBlockWrapper.find(".link").first().text().trim();
var $paginationComponent=$component.find("div.cmp-pagination > div.sequence-pagination");
cmpPagination.refreshSequentialPagination($paginationComponent,numPages,numFound);
var filters={};
var lastSelectedFilter="";
var lastSelectedTag="";
emptyTemplate();
if(enablePageFilter){initializePageFilters()
}else{initializeFilters()
}initializeCollisionVars();
$component.find(".load-more").click(function(){loadMoreHandler($component)
});
function initializePageFilters(){cmpPageFilter.onChange(function(pageFilters,lastSelectedOption){filters=pageFilters;
lastSelectedTag=lastSelectedOption;
refreshContentBySelectedDropdown()
});
subscribePaginationEvents();
if(webinarType){$component.find(".dynamic-filter input#"+webinarType).prop("checked",true)
}$component.find(".dynamic-filter input").change(function(){webinarType=$(this).prop("id");
refreshContentBySelectedDropdown()
})
}function subscribePaginationEvents(){if($paginationComponent.length>0){cmpPagination.subscribePaginationEvents("view-count-changed",function(event){if(event.detail&&(typeof(event.detail)==="string"&&event.detail.toLowerCase()==="all")){pageSize=1000
}else{pageSize=event.detail
}refreshContentBySelectedDropdown()
})
}}function buildUrl(){var url="/ngw/syspath-bin/gartner/dynamiccontent?requestType=select-by-tags&designType="+designType+"&nPage="+nPage+"&start="+start+"&pageSize="+pageSize+"&languageCode="+languageCode+"&showLocalizedContent="+showLocalizedContent+"&filterCodes="+filterCodes+"&currentPagePath="+currentPagePath;
url=url+"&tags="+encodeURIComponent(tags);
url=filterTags?url+"&filterTags="+encodeURIComponent(filterTags):url;
url=excludeFilterTags?url+"&excludeFilterTags="+encodeURIComponent(excludeFilterTags):url;
Object.keys(filters).forEach(function(key,index){url=filters[key]?url+"&filter"+(index+1)+"="+encodeURIComponent(filters[key]):url
});
url=webinarType?url+"&webinarType="+webinarType:url;
url=lastSelectedTag?url+"&lastSelectedTag="+lastSelectedTag:url;
return url
}function loadMoreHandler($component){$component.find(".load-more").hide();
$component.find(".loader").show();
$individualBlock=$component.find(".individual-block");
nPage++;
if(startModified){start=(collisionPage==(nPage-1)?start+1:start+pageSize)
}else{start=(nPage-1)*pageSize
}$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
var webinarTypeModified=webinarType;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc));
if(webinarType=="all-webinars"&&!doc.upcomingWebinar){if(webinarTypeModified===webinarType){start=0;
collisionPage=nPage;
webinarTypeModified="ondemand-webinars";
startModified=true
}else{start++
}}}if(webinarTypeModified!==webinarType){webinarType=webinarTypeModified
}totalPageSize=totalPageSize+docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}}).complete(function(){$component.find(".loader").hide()
})
}if($paginationComponent.length>0){cmpPagination.subscribePaginationEvents("pagination-sequence-changed",function(event){loadMorePaginationHandler(event.detail)
})
}function loadMorePaginationHandler(currentPage){$individualBlock=$component.find(".individual-block");
if(startModified&&collisionPage==currentPage){webinarType="all-webinars";
startModified=false
}else{if(collisionPage>0&&collisionPage==(currentPage-1)){webinarType="ondemand-webinars";
startModified=true
}}if(startModified){if(currentPage>nPage&&collisionPage==(currentPage-1)){start=start+1
}else{if(currentPage>nPage){start=start+parseInt(pageSize)
}else{if(currentPage<nPage){start=start-parseInt(pageSize)
}}}}else{start=(currentPage-1)*parseInt(pageSize)
}nPage=currentPage;
var $cachedIndividualBlock=$individualBlockWrapper.find(">div.page-"+nPage);
if($cachedIndividualBlock.length>0){$individualBlock.addClass("hide");
$cachedIndividualBlock.removeClass("hide");
if(collisionPage==nPage){var totalOnDemandWebinarsIndexes=-1;
$cachedIndividualBlock.find("p.type").each(function(index,element){var webinarType=$(element).data("webinar-type");
if(webinarType=="ON-DEMAND"){totalOnDemandWebinarsIndexes++
}});
start=totalOnDemandWebinarsIndexes
}return
}$paginationComponent.hide();
$component.find(".loader").show();
fetchData()
}function fetchData(){$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
var webinarTypeModified=webinarType;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
var $newIndividualBlock=bindData(doc);
$newIndividualBlock.addClass("page-"+nPage);
if($(window).width()>1024){if(index%3==0){$newIndividualBlock.css("clear","both")
}else{$newIndividualBlock.css("clear","none")
}}else{if($(window).width()<1025&&$(window).width()>767){if(index%2==0){$newIndividualBlock.css("clear","both")
}else{$newIndividualBlock.css("clear","none")
}}}$individualBlockWrapper.append($newIndividualBlock);
if(webinarType=="all-webinars"&&!doc.upcomingWebinar){if(webinarTypeModified===webinarType){start=0;
collisionPage=nPage;
webinarTypeModified="ondemand-webinars";
startModified=true
}else{start++
}}}if(webinarTypeModified!==webinarType){webinarType=webinarTypeModified
}$individualBlock.addClass("hide")
}).complete(function(){$component.find(".loader").hide();
$paginationComponent.show()
})
}function initializeFilters(){var filterNames=[];
$component.find(".dynamic-filter .dropdown button").each(function(){filterNames.push($(this).find("span").text());
var filterId=$(this).attr("id");
filters[filterId]=""
});
subscribePaginationEvents();
$component.find(".dynamic-filter .dropdown a").click(function(){var $anchor=$(this);
var $dropdown=$anchor.closest(".dropdown");
$dropdown.find("a").removeClass("active");
$dropdown.find("button span").addClass("active");
$dropdown.find("button span").text($(this).text());
$anchor.addClass("active");
var filterId=$dropdown.find("button").attr("id");
filters[filterId]=$(this).attr("data-value");
lastSelectedFilter=filterId;
lastSelectedTag=$(this).attr("data-value");
refreshContentBySelectedDropdown()
});
$component.find(".reset").click(function(){$component.find(".dynamic-filter .dropdown").each(function(index){var $dropdown=$(this);
if($dropdown.parent().hasClass("pagination-filter")){return
}$dropdown.find("span").text(filterNames[index]);
$dropdown.find("span").removeClass("active");
$dropdown.find("a").removeClass("active");
$dropdown.removeClass("hide");
$dropdown.find(".hide").removeClass("hide")
});
$(this).hide();
Object.keys(filters).forEach(function(key){filters[key]=""
});
lastSelectedFilter="";
lastSelectedTag="";
refreshContentBySelectedDropdown()
});
if(webinarType){$component.find(".dynamic-filter input#"+webinarType).prop("checked",true)
}$component.find(".dynamic-filter input").change(function(){webinarType=$(this).prop("id");
refreshContentBySelectedDropdown()
});
selectDropdownByQueryParams()
}function initializeCollisionVars(){var onDemandWebinarsCount=0;
$individualBlock.find("p.type").each(function(){var pText=$(this).data("webinar-type");
if(pText=="ON-DEMAND"){onDemandWebinarsCount++
}});
if(onDemandWebinarsCount>0){startModified=true;
collisionPage=1;
webinarType="ondemand-webinars";
start=onDemandWebinarsCount-1
}}function selectDropdownByQueryParams(){var params=CommonFunctions.getAllQueryParams();
var type=decodeURIComponent(params.type);
var tag=decodeURIComponent(params.tag);
if(type&&tag){var $dropdown=$component.find(".dynamic-filter .dropdown button#"+type).next();
$dropdown.find("a").each(function(){if(this.innerText==tag){$(this).click()
}})
}}function refreshDynamicFilters(dynamicFilters){$component.find(".dynamic-filter .dropdown").each(function(){var filterId=$(this).find("button").attr("id");
if(lastSelectedFilter!=filterId){$(this).removeClass("hide");
$(this).find(".hide").removeClass("hide");
var filterOptions=dynamicFilters[filterId];
if(filterOptions){$(this).find("a").each(function(){var $self=$(this);
var tagId=$self.attr("data-value");
var found=false;
filterOptions.forEach(function(filterOption){if(tagId==filterOption.value){found=true
}});
if(!found){$self.parent().addClass("hide")
}})
}else{$(this).addClass("hide")
}}})
}function refreshContentBySelectedDropdown(){nPage=1;
start=0;
startModified=false;
collisionPage=null;
webinarType=$component.find(".dynamic-filter input:checked").prop("id");
$individualBlock=$component.find(".individual-block");
$component.find(".loader").show();
$paginationComponent.hide();
$.get(buildUrl()).success(function(response){if(lastSelectedFilter!=""){refreshDynamicFilters(response.data.dynamicFilters)
}refreshCount(response);
var docsArray=response.data.docs;
var numFound=response.data.numFound;
var webinarTypeModified=webinarType;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc));
if(webinarType=="all-webinars"&&!doc.upcomingWebinar){if(webinarTypeModified===webinarType){start=0;
collisionPage=nPage;
webinarTypeModified="ondemand-webinars";
startModified=true
}else{start++
}}}if(webinarTypeModified!==webinarType){webinarType=webinarTypeModified
}$individualBlock.remove();
totalPageSize=docsArray.length;
if(totalPageSize<numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}else{$component.find(".load-more").hide()
}if(totalPageSize>0){}else{$paginationComponent.hide()
}}).complete(function(){$component.find(".loader").hide()
})
}function refreshCount(response){resp=response;
var numFound=response.data.numFound;
if(numFound>0){var itemText=numFound>1?" Items":" Item";
$component.find(".count").text(numFound+itemText);
$component.find(".count").show();
refreshPageCounter(numFound)
}else{$component.find(".count").hide()
}}function refreshPageCounter(numFound){if($paginationComponent.length>0){var numPages=Math.ceil(numFound/pageSize);
cmpPagination.refreshSequentialPagination($paginationComponent,numPages,numFound);
if(numFound>12){$paginationComponent.closest(".pagination-wrapper").removeClass("hide")
}}}function decode(str){return str.replace(/&#(\d+);/g,function(match,dec){return String.fromCharCode(dec)
})
}function bindData(){eval("var json = arguments[0]");
var $template=$globaltemplate.clone();
$template.find("[data-elem-val]").each(function(){var dataAttr=$(this).attr("data-elem-val");
var value=eval("json."+dataAttr)||"";
if($.isEmptyObject(value)&&dataAttr=="ctaText"){value="Read Now"
}if($.isArray(value)){if(value.length==0){$(this).text("")
}else{$(this).text(value[0])
}}else{var txt=decode(value);
$(this).text(txt)
}});
$template.find("[data-elem-attr]").each(function(){var $self=$(this);
var attrValues=$(this).attr("data-elem-attr");
attrValues.split(";").forEach(function(attrValue){var attrNameValue=attrValue.split("=");
var attrName=attrNameValue[0];
var attrValue=attrNameValue[1];
var value=eval("json."+attrValue)||"";
if($.isArray(value)){if(value.length==0){$self.attr(attrName,"")
}else{$self.attr(attrName,value[0])
}}else{$self.attr(attrName,value)
}})
});
return $template
}function emptyTemplate(){$globaltemplate=bindData({allFields:{}})
}}})();
var cmpGlobalSiteDynamicPodcastContent=(function(){return{init:function(){var $componentList=$(".cmp-globalsite-dynamicpodcastcontent");
$componentList.each(function(){initializeForEach($(this))
})
}};
function initializeForEach($component){var nPage=Math.max(parseInt(CommonFunctions.getAllQueryParams()["page"]||"1"),1);
var tags=$component.find("input#tags").val();
var filterTags=$component.find("input#filterTags").val();
var excludeFilterTags=$component.find("input#excludeFilterTags").val();
var designType="podcast";
var pageSize=parseInt($component.find("input#pageSize").val());
var showLocalizedContent=$component.find("input#showLocalizedContent").val();
var currentPagePath=$component.find("input#currentPagePath").val();
var languageCode=$component.find("input#languageCode").val();
var filterCodes=$component.find("input#filterCodes").val();
var totalPageSize=(nPage)*pageSize;
var numPages=$component.find("input#numPages").val();
var numFound=$component.find("input#numFound").val();
var $paginationComponent=$component.find("div.cmp-pagination > div.sequence-pagination");
if($paginationComponent.length>0){cmpPagination.refreshSequentialPagination($paginationComponent,numPages,numFound)
}var $individualBlockWrapper=$component.find(".individual-block").parent();
var $individualBlock=$component.find(".individual-block");
var $globaltemplate=$individualBlock.first().clone();
var linkText=$individualBlockWrapper.find(".linkText").first().text().trim();
var filters={};
var lastSelectedFilter="";
var startModified=false;
emptyTemplate();
initializeFilters();
$component.find(".load-more").click(function(){loadMoreHandler($component)
});
function buildUrl(){var url="/ngw/syspath-bin/gartner/dynamiccontent?requestType=select-by-tags&designType="+designType+"&nPage="+nPage+"&pageSize="+pageSize+"&languageCode="+languageCode+"&showLocalizedContent="+showLocalizedContent+"&filterCodes="+filterCodes+"&currentPagePath="+currentPagePath;
url=url+"&tags="+encodeURIComponent(tags);
url=filterTags?url+"&filterTags="+encodeURIComponent(filterTags):url;
url=excludeFilterTags?url+"&excludeFilterTags="+encodeURIComponent(excludeFilterTags):url;
Object.keys(filters).forEach(function(key,index){url=filters[key]?url+"&filter"+(index+1)+"="+encodeURIComponent(filters[key]):url
});
return url
}if($paginationComponent.length>0){cmpPagination.subscribePaginationEvents("pagination-sequence-changed",function(event){loadMorePaginationHandler(event.detail)
})
}function loadMorePaginationHandler(currentPage){$individualBlock=$component.find(".individual-block");
if(startModified&&collisionPage==currentPage){startModified=false
}if(startModified){start=(collisionPage==(currentPage-1)?start+1:start+parseInt(pageSize))
}else{start=(currentPage-1)*parseInt(pageSize)
}nPage=currentPage;
var $cachedIndividualBlock=$individualBlockWrapper.find(">div.page-"+nPage);
if($cachedIndividualBlock.length>0){$individualBlock.addClass("hide");
$cachedIndividualBlock.removeClass("hide");
return
}$paginationComponent.hide();
$component.find(".loader").show();
$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
var $newIndividualBlock=bindData(doc);
$newIndividualBlock.addClass("page-"+nPage);
$individualBlockWrapper.append($newIndividualBlock);
start=0;
collisionPage=nPage;
startModified=true
}$individualBlock.addClass("hide")
}).complete(function(){$component.find(".loader").hide();
$paginationComponent.show()
})
}function loadMoreHandler($component){$component.find(".load-more").hide();
$component.find(".loader").show();
$individualBlock=$component.find(".individual-block");
nPage++;
if(startModified){start=(collisionPage==(nPage-1)?start+1:start+pageSize)
}else{start=(nPage-1)*pageSize
}$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc))
}totalPageSize=totalPageSize+docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}}).complete(function(){$component.find(".loader").hide()
})
}function initializeFilters(){$component.find(".dropdown").each(function(){var $dropdown=$(this);
var $button=$dropdown.find("button");
var filterTitle=$button.find("span").text()||"";
if(filterTitle){$button.data("filtertitle",filterTitle)
}});
if($paginationComponent.length>0){cmpPagination.subscribePaginationEvents("view-count-changed",function(event){if(event.detail&&(typeof(event.detail)==="string"&&event.detail.toLowerCase()==="all")){pageSize=1000
}else{pageSize=event.detail
}refreshContentBySelectedDropdown()
})
}$component.on("filter.single.select",function(event){var $anchor=event.detail;
var $dropdown=$anchor.closest(".dropdown");
var filterId=$dropdown.find("button").attr("id");
filters[filterId]=$anchor.data("value");
lastSelectedFilter=filterId;
refreshContentBySelectedDropdown()
});
$component.on("filter.reset",function(){$component.find(".dropdown").each(function(){var $dropdown=$(this);
$dropdown.removeClass("hide");
$dropdown.find(".hide").removeClass("hide")
});
Object.keys(filters).forEach(function(key){filters[key]=""
});
lastSelectedFilter="";
refreshContentBySelectedDropdown()
});
selectDropdownByQueryParams()
}function selectDropdownByQueryParams(){var params=CommonFunctions.getAllQueryParams();
if(typeof params.type!=="undefined"&&typeof params.tag!=="undefined"){var type=decodeURIComponent(params.type);
var tag=decodeURIComponent(params.tag);
$component.find(".dropdown").each(function(){var $dropdown=$(this);
var filterTitle=$dropdown.find("button span").text()||"";
if(filterTitle==type){$dropdown.find("ul a").each(function(){var $anchor=$(this);
var filterOption=$anchor.text();
if(filterOption==tag){$anchor.click()
}})
}})
}}function refreshContentBySelectedDropdown(){nPage=1;
$individualBlock=$component.find(".individual-block");
$.get(buildUrl()).success(function(response){if(lastSelectedFilter!=""){refreshDynamicFilters(response.data.dynamicFilters)
}var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc))
}$individualBlock.remove();
totalPageSize=docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}else{$component.find(".load-more").hide()
}if(totalPageSize>0){if($paginationComponent.length>0){var pageCount=Math.ceil(response.data.numFound/totalPageSize);
cmpPagination.refreshSequentialPagination($paginationComponent,pageCount,response.data.numFound)
}$component.find(".not-found").addClass("hidden")
}else{$component.find(".not-found").removeClass("hidden")
}})
}function refreshDynamicFilters(dynamicFilters){$component.find(".dropdown").each(function(){var $dropdown=$(this);
var filterId=$dropdown.find("button").attr("id");
var filterTitle=$dropdown.find("button").data("filtertitle");
if(lastSelectedFilter!=filterId){$dropdown.removeClass("hide");
$dropdown.find(".hide").removeClass("hide");
var filterOptions=dynamicFilters[filterTitle];
if(filterOptions){$dropdown.find("ul a").each(function(){var $anchor=$(this);
var tagId=$anchor.data("value");
var found=false;
filterOptions.forEach(function(filterOption){if(tagId==filterOption.value){found=true
}});
if(!found){$anchor.parent().addClass("hide")
}})
}else{$dropdown.addClass("hide")
}}})
}function decode(str){return str.replace(/&#(\d+);/g,function(match,dec){return String.fromCharCode(dec)
})
}function bindData(){eval("var json = arguments[0]");
var $template=$globaltemplate.clone();
$template.find(".headline").removeAttr("style");
$template.find(".headline-xs").removeAttr("style");
$template.find("[data-elem-val]").each(function(){var dataAttr=$(this).attr("data-elem-val");
var value=eval("json."+dataAttr)||"";
if($.isEmptyObject(value)&&dataAttr=="allFields['ctaText']"){value="Read Now"
}if(!$.isEmptyObject(value)&&dataAttr=="allFields['maxaudiolength']"){value=" | "+value
}if($.isArray(value)){var isPodcast=$(this).closest(".individual-block").hasClass("podcast");
if(value.length==0){$(this).text("");
if(isPodcast){$(this).parent().addClass("hidden")
}}else{if(isPodcast){$(this).parent().removeClass("hidden");
$(this).text(value.join(", "))
}else{$(this).text(value[0])
}}}else{var txt=decode(value);
$(this).text(txt)
}});
$template.find("[data-elem-attr]").each(function(){var $self=$(this);
var attrValues=$(this).attr("data-elem-attr");
attrValues.split(";").forEach(function(attrValue){var attrNameValue=attrValue.split("=");
var attrName=attrNameValue[0];
var attrValue=attrNameValue[1];
var value=eval("json."+attrValue)||"";
if($.isArray(value)){if(value.length==0){$self.attr(attrName,"")
}else{$self.attr(attrName,value[0])
}}else{$self.attr(attrName,value)
}})
});
return $template
}function emptyTemplate(){$globaltemplate=bindData({allFields:{}})
}}})();
var cmpGlobalSiteDynamicPerspectivesContent=(function(){return{init:function(){var b=$(".cmp-globalsite-dynamicperspectives");
b.each(function(){a($(this))
})
}};
function a(p){var h=p.find("input#hideResearch").val();
var s=p.find("input#hideBlog").val();
var q=p.find("input#hideWebinar").val();
var n=p.find("input#filterTags").val();
var k=p.find("input#excludeFilterTags").val();
var e=p.find("input#showLocalizedContent").val();
var l=p.find("input#currentPagePath").val();
var j=p.find("input#defaultVideoPagePath").val();
var g=p.find("input#defaultVideoImageUrl").val();
var o=p.find("input#defaultVideoPageTitle").val();
var c=p.find("input#languageCode").val();
var b=p.find("input#enablePageFilter").val();
var i={};
var r={};
if(j){r.title=o;
r.url=j;
r.seoImageUrl=g
}else{r.title=p.find(".video .title").text();
r.url=p.find(".video a").attr("href");
r.seoImageUrl=p.find(".video .img-url").attr("src")
}m();
CommonFunctions.onBreakpointChange(m);
if(b=="true"){t()
}function d(){var u="/ngw/syspath-bin/gartner/dynamiccontent?requestType=GET_PERSPECTIVES&languageCode="+c+"&showLocalizedContent="+e+"&currentPagePath="+l+"&hideResearch="+h+"&hideBlog="+s+"&hideWebinar="+q;
u=n?u+"&filterTags="+encodeURIComponent(n):u;
u=k?u+"&excludeFilterTags="+encodeURIComponent(k):u;
Object.keys(i).forEach(function(w,v){u=i[w]?u+"&filter"+(v+1)+"="+encodeURIComponent(i[w]):u
});
return u
}function t(){cmpPageFilter.onChange(function(u){i=u;
f()
})
}function f(){$.get(d()).success(function(u){var x=u.data.video;
var v=u.data.research;
var y=u.data.blog;
var w=u.data.webinar;
if(x){p.find(".video .title").text(x.title);
p.find(".video a").attr("href",x.url);
p.find(".video .img-url").attr("src",x.seoImageUrl)
}else{p.find(".video .title").text(r.title);
p.find(".video a").attr("href",r.url);
p.find(".video .img-url").attr("src",r.seoImageUrl)
}if(v){p.find(".research .title").text(v.title);
p.find(".research a").attr("href",v.url);
p.find(".research").show()
}else{p.find(".research").hide()
}if(y){p.find(".blog .title").text(y.title);
p.find(".blog a").attr("href",y.url);
p.find(".blog").show()
}else{p.find(".blog").hide()
}if(w){p.find(".webinar .title").text(w.title);
p.find(".webinar a").attr("href",w.url);
p.find(".webinar").show()
}else{p.find(".webinar").hide()
}})
}function m(){var v=p.find(".image");
var u=p.find(".text");
if(window.innerWidth<breakpointSmall){u.after(v)
}else{v.after(u)
}}}})();
var cmpGlobalSiteDynamicBlogContent=(function(){return{init:function(){var $componentList=$(".cmp-globalsite-dynamicblogcontent");
$componentList.each(function(){initializeForEach($(this))
})
}};
function initializeForEach($component){var nPage=Math.max(parseInt(CommonFunctions.getAllQueryParams()["page"]||"1"),1);
var tags=$component.find("input#tags").val();
var filterTags=$component.find("input#filterTags").val();
var excludeFilterTags=$component.find("input#excludeFilterTags").val();
var designType=$component.find("input#designType").val();
var pageSize=parseInt($component.find("input#pageSize").val());
var webinarType=$component.find("input#webinarType").val();
var showLocalizedContent=$component.find("input#showLocalizedContent").val();
var currentPagePath=$component.find("input#currentPagePath").val();
var languageCode=$component.find("input#languageCode").val();
var filterCodes=$component.find("input#filterCodes").val();
var randomSeed=$component.find("input#randomSeed").val();
var tagType=$component.find("input#tagType").val();
var enablePageFilterStr=$component.find("input#enablePageFilter").val();
var enablePageFilter=(/true/i).test(enablePageFilterStr);
var totalPageSize=(nPage)*pageSize;
var numPages=$component.find("input#numPages").val();
var numFound=$component.find("input#numFound").val();
var hideEyeBrow=$component.find("input#hideEyeBrow").val();
var $paginationComponent=$component.find("div.cmp-pagination > div.sequence-pagination");
var displayAudioVideoTimestamp=$component.find("input#displayAudioVideoTimestamp").val();
if($paginationComponent.length>0){cmpPagination.refreshSequentialPagination($paginationComponent,numPages,numFound)
}var readTagsFromPage=(/true/i).test($component.find("input#readTagsFromPage").val());
var additionalPageTags=$component.find("input#additionalPageTags").val();
var $individualBlockWrapper=$component.find(".individual-block").parent();
var $individualBlock=$component.find(".individual-block");
var $globaltemplate=$component.find(".dynamic-dummy-content").find(".individual-block");
var linkText=$individualBlockWrapper.find(".link").first().text().trim();
var filters={};
var lastSelectedFilter="";
var lastSelectedTag="";
var startModified=false;
var dynamicButtonLabel=$component.find(".dynamic-button").text();
var dynamicButtonLink=$component.find(".dynamic-button").prop("href");
emptyTemplate();
if(enablePageFilter){initializePageFilters()
}else{initializeFilters()
}$component.find(".load-more").click(function(){loadMoreHandler($component)
});
function buildUrl(){var url="/ngw/syspath-bin/gartner/dynamiccontent?requestType=select-by-tags&designType="+designType+"&nPage="+nPage+"&pageSize="+pageSize+"&languageCode="+languageCode+"&showLocalizedContent="+showLocalizedContent+"&filterCodes="+filterCodes+"&randomSeed="+randomSeed+"&tagType="+tagType+"&currentPagePath="+currentPagePath;
if(readTagsFromPage){url=url+"&readTagsFromPage="+readTagsFromPage+"&additionalPageTags="+additionalPageTags
}url=tags?url+"&tags="+encodeURIComponent(tags):url;
url=filterTags?url+"&filterTags="+encodeURIComponent(filterTags):url;
url=excludeFilterTags?url+"&excludeFilterTags="+encodeURIComponent(excludeFilterTags):url;
Object.keys(filters).forEach(function(key,index){url=filters[key]?url+"&filter"+(index+1)+"="+encodeURIComponent(filters[key]):url
});
url=webinarType?url+"&webinarType="+webinarType:url;
url=lastSelectedTag?url+"&lastSelectedTag="+lastSelectedTag:url;
return url
}if($paginationComponent.length>0){cmpPagination.subscribePaginationEvents("pagination-sequence-changed",function(event){loadMorePaginationHandler(event.detail)
})
}function loadMorePaginationHandler(currentPage){$individualBlock=$component.find(".individual-block");
if(startModified&&collisionPage==currentPage){startModified=false
}if(startModified){start=(collisionPage==(currentPage-1)?start+1:start+parseInt(pageSize))
}else{start=(currentPage-1)*parseInt(pageSize)
}nPage=currentPage;
var $cachedIndividualBlock=$individualBlockWrapper.find(">div.page-"+nPage);
if($cachedIndividualBlock.length>0){$individualBlock.addClass("hide");
$cachedIndividualBlock.removeClass("hide");
return
}$paginationComponent.hide();
$component.find(".loader").show();
$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
var $newIndividualBlock=bindData(doc);
$newIndividualBlock.addClass("page-"+nPage);
if($(window).width()>1024){if(index%3==0){$newIndividualBlock.css("clear","both")
}else{$newIndividualBlock.css("clear","none")
}}else{if($(window).width()<1025&&$(window).width()>767){if(index%2==0){$newIndividualBlock.css("clear","both")
}else{$newIndividualBlock.css("clear","none")
}}}$individualBlockWrapper.append($newIndividualBlock);
start=0;
collisionPage=nPage;
startModified=true
}$individualBlock.addClass("hide")
}).complete(function(){$component.find(".loader").hide();
$paginationComponent.show();
dataLayer.push({event:"optimize.loadMore"})
})
}function loadMoreHandler($component){$component.find(".load-more").hide();
$component.find(".loader").show();
$individualBlock=$component.find(".individual-block");
nPage++;
if(startModified){start=(collisionPage==(nPage-1)?start+1:start+pageSize)
}else{start=(nPage-1)*pageSize
}$.get(buildUrl()).success(function(response){var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
$individualBlockWrapper.append(bindData(doc))
}totalPageSize=totalPageSize+docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}}).complete(function(){$component.find(".loader").hide();
dataLayer.push({event:"optimize.loadMore"})
})
}function subscribePaginationEvents(){if($paginationComponent.length>0){cmpPagination.subscribePaginationEvents("view-count-changed",function(event){if(event.detail&&(typeof(event.detail)==="string"&&event.detail.toLowerCase()==="all")){pageSize=1000
}else{pageSize=event.detail
}refreshContentBySelectedDropdown()
})
}}function initializePageFilters(){cmpPageFilter.onChange(function(pageFilters,lastSelectedOption){filters=pageFilters;
lastSelectedTag=lastSelectedOption;
refreshContentBySelectedDropdown()
});
subscribePaginationEvents()
}function initializeFilters(){var filterNames=[];
$component.find(".dynamic-filter .dropdown button").each(function(){filterNames.push($(this).find("span").text());
var filterId=$(this).attr("id");
filters[filterId]=""
});
subscribePaginationEvents();
$component.find(".dynamic-filter .dropdown a").click(function(){$dropdown=$(this).closest(".dropdown");
$dropdown.find("a").removeClass("active");
$dropdown.find("button span").addClass("active");
$dropdown.find("button span").text($(this).text());
$(this).addClass("active");
$component.find(".reset").show();
var filterId=$dropdown.find("button").attr("id");
filters[filterId]=$(this).attr("data-value");
lastSelectedFilter=filterId;
lastSelectedTag=$(this).attr("data-value");
refreshContentBySelectedDropdown()
});
$component.find(".reset").click(function(){$component.find(".dynamic-filter .dropdown").each(function(index){$(this).find("span").text(filterNames[index]);
$(this).find("span").removeClass("active");
$(this).find("a").removeClass("active");
$(this).removeClass("hide");
$(this).find(".hide").removeClass("hide")
});
$(this).hide();
Object.keys(filters).forEach(function(key){filters[key]=""
});
lastSelectedFilter="";
lastSelectedTag="";
refreshContentBySelectedDropdown()
});
if(webinarType){$component.find(".dynamic-filter input#"+webinarType).prop("checked",true)
}$component.find(".dynamic-filter input").change(function(){webinarType=$(this).prop("id");
refreshContentBySelectedDropdown()
});
$component.find(".dynamic-filter .show-filters").click(function(){showFilters()
});
$component.find(".dynamic-filter .hide-filters").click(function(){hideFilters()
});
selectDropdownByQueryParams()
}function selectDropdownByQueryParams(){var params=CommonFunctions.getAllQueryParams();
var type=decodeURIComponent(params.type);
var tag=decodeURIComponent(params.tag);
if(type&&tag){var $dropdown=$component.find(".dynamic-filter .dropdown button#"+type).next();
$dropdown.find("a").each(function(){if(this.innerText==tag){$(this).click();
showFilters()
}})
}}function refreshContentBySelectedDropdown(){nPage=1;
$individualBlock=$component.find(".individual-block");
$.get(buildUrl()).success(function(response){if(lastSelectedFilter!=""){refreshDynamicFilters(response.data.dynamicFilters)
}refreshDynamicButton(response.data.dynamicButton);
var docsArray=response.data.docs;
for(var index in docsArray){var doc=docsArray[index];
doc.linkText=linkText;
var $newIndividualBlock=bindData(doc);
$newIndividualBlock.addClass("page-"+nPage);
$individualBlockWrapper.append($newIndividualBlock)
}$individualBlock.remove();
totalPageSize=docsArray.length;
if(totalPageSize<response.data.numFound){$component.find(".load-more").parent().removeClass("hide");
$component.find(".load-more").show()
}else{$component.find(".load-more").hide()
}if(totalPageSize>0){if($paginationComponent.length>0){var pageCount=Math.ceil(response.data.numFound/totalPageSize);
cmpPagination.refreshSequentialPagination($paginationComponent,pageCount,response.data.numFound)
}$component.find(".not-found").addClass("hidden")
}else{$component.find(".not-found").removeClass("hidden")
}}).complete(function(){})
}function refreshDynamicFilters(dynamicFilters){$component.find(".dynamic-filter .dropdown").each(function(){var filterId=$(this).find("button").attr("id");
if(lastSelectedFilter!=filterId){$(this).removeClass("hide");
$(this).find(".hide").removeClass("hide");
var filterOptions=dynamicFilters[filterId];
if(filterOptions){$(this).find("a").each(function(){var $self=$(this);
var tagId=$self.attr("data-value");
var found=false;
filterOptions.forEach(function(filterOption){if(tagId==filterOption.value){found=true
}});
if(!found){$self.parent().addClass("hide")
}})
}else{$(this).addClass("hide")
}}})
}function refreshDynamicButton(dynamicButton){if(dynamicButton){$component.find(".dynamic-button").text(dynamicButton.text);
$component.find(".dynamic-button").prop("href",dynamicButton.value)
}else{$component.find(".dynamic-button").text(dynamicButtonLabel);
$component.find(".dynamic-button").prop("href",dynamicButtonLink)
}}function showFilters(){$component.find(".dynamic-filter .row").removeClass("hidden-xs");
$component.find(".dynamic-filter .show-filters").addClass("hidden");
$component.find(".dynamic-filter .hide-filters").removeClass("hidden")
}function hideFilters(){$component.find(".dynamic-filter .row").addClass("hidden-xs");
$component.find(".dynamic-filter .hide-filters").addClass("hidden");
$component.find(".dynamic-filter .show-filters").removeClass("hidden")
}function decode(str){return str.replace(/&#(\d+);/g,function(match,dec){return String.fromCharCode(dec)
})
}function bindData(){eval("var json = arguments[0]");
var $template=$globaltemplate.clone();
$template.find(".headline").removeAttr("style");
$template.find(".headline-xs").removeAttr("style");
$template.find("[data-elem-val]").each(function(){var dataAttr=$(this).attr("data-elem-val");
var value=eval("json."+dataAttr)||"";
if(dataAttr=="allFields['authors']"){$(this).find("span").text(value);
return true
}if($.isArray(value)){var isPodcast=$(this).closest(".individual-block").hasClass("podcast");
if(value.length==0){$(this).text("");
if(isPodcast){$(this).parent().addClass("hidden")
}}else{if(isPodcast){$(this).parent().removeClass("hidden");
$(this).text(value.join(", "))
}else{$(this).text(value[0])
}}}else{var txt=decode(value);
$(this).text(txt)
}});
$template.find("[data-elem-attr]").each(function(){var $self=$(this);
var attrValues=$(this).attr("data-elem-attr");
attrValues.split(";").forEach(function(attrValue){var attrNameValue=attrValue.split("=");
var attrName=attrNameValue[0];
var attrValue=attrNameValue[1];
var value=eval("json."+attrValue)||"";
if($.isArray(value)){if(value.length==0){$self.attr(attrName,"")
}else{$self.attr(attrName,value[0])
}}else{$self.attr(attrName,value)
}if(attrValue=="seoImageUrl"){var defaultImageUrl=eval("json.defaultImageUrl")||" ";
$self.attr("onerror","this.onerror=null;this.src='"+defaultImageUrl+"'")
}})
});
return $template
}function emptyTemplate(){$globaltemplate=bindData({allFields:{}})
}}})();
var cmpGlobalSiteForm=(function(){return{init:function(){var b=$(".cmp-globalsite-form");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(e){var d=e.find(".speakeropportunityform");
var q=e.find(".speakerformsubmit");
var f=d.find(".focusareas");
var h="otherfocusareacheckbox";
var s=f.find("#"+h);
var b="otherfocusareatext";
var t=f.find("#"+b);
var l="conferences";
var p=d.find("#country");
var m=d.find("#region");
var r=e.find("#maxUploadImageSize").val()*1000;
o();
c();
cmpFormValidation.init(d);
cmpFormValidation.init(e.find("#technical-supportform"));
var n="/ngw/syspath-bin/gartner/globalform";
function j(){e.find(".uploadImgSizeErrorMsg").hide();
var x=e.find("#submit");
x.attr("disabled",true);
x.html("Please wait..");
var z=new FormData();
var w="";
var y=e.find("#image_file")[0];
if(y){var v=y.files;
if(v&&v.length>0){w=v[0];
if(w.size>r){e.find(".uploadImgSizeErrorMsg").show();
x.attr("disabled",false);
x.html("Submit");
grecaptcha.reset();
return false
}}}var u={honorific:e.find("#honorific").val(),firstName:e.find("#firstname").val(),lastName:e.find("#lastname").val(),email:e.find("#email").val(),phone:e.find("#phone").val(),contactMethod:e.find("input[name=contactmethod]:checked").val(),company:e.find("#organization").val(),region:e.find("#region").val(),question:e.find("#questionabout").val(),message:e.find("#issue").val(),imageName:w.name?w.name:""};
if(w!=""){z.append("file",w)
}z.append("objData",JSON.stringify(u));
z.append("requestType","TECHNICAL_SUPPORT");
z.append("reCaptchaResponse",e.find('textarea[name="g-recaptcha-response"]').val());
$.ajax({url:n,type:"POST",data:z,contentType:false,processData:false,beforeSend:function(){},success:function(A){e.find("#technical-supportform").hide();
if(A){e.find("#success-message").show();
e.find("#success-message").focus();
e.find("#error-message").hide();
e.find("#head-message").hide()
}else{e.find("#success-message").hide();
e.find("#error-message").show();
e.find("#error-message").focus();
e.find("#head-message").hide()
}},complete:function(){},error:function(){e.find("#technical-supportform").hide();
e.find("#success-message").hide();
e.find("#error-message").show();
e.find("#error-message").focus();
e.find("#head-message").hide()
}})
}e.find("#technical-supportform").on("form.submit.valid",function(u){u.preventDefault();
grecaptcha.execute();
cmpGlobalSiteForm.recaptchaCallbackHandler=function(){j()
}
});
d.on("form.submit.valid",function(u){u.preventDefault();
var v=k();
delete v[b];
grecaptcha.execute();
cmpGlobalSiteForm.recaptchaCallbackHandler=function(){g(v)
}
});
function g(v){q.attr("disabled",true);
q.html("Please wait..");
var u={eloquaFormParams:JSON.stringify(v),requestType:"SPEAKING_REQUEST_FORM",elqFormName:e.find("#elqFormName").val(),reCaptchaResponse:e.find('textarea[name="g-recaptcha-response"]').val()};
CommonFunctions.postAjaxRequest(n,u,false,null,function(w){d.hide();
if(w){e.find("#success-message").show();
e.find("#success-message").focus();
e.find("#error-message").hide()
}else{e.find("#success-message").hide();
e.find("#error-message").show();
e.find("#error-message").focus()
}},function(w){d.hide();
e.find("#success-message").hide();
e.find("#error-message").show();
e.find("#error-message").focus()
})
}s.on("change",function(v){var u=$(v.target).prop("checked");
if(u){t.removeClass("hide")
}else{t.val("");
t.addClass("hide")
}});
function i(u){$("html, body").animate({scrollTop:u.offset().top-200},500)
}function k(){var v=FormUtils.getDataJson(d)||{};
var u="";
v[l]=[];
f.find("input:checkbox").each(function(){var w=$(this);
if(w.prop("checked")){if(w.attr("id")==h){u=u+t.val()+","
}else{u=u+w.val()+","
}}});
v[l]=u;
return v
}function o(){$.ajax({url:"/ngw/syspath-bin/gartner/adminservlet?requestType=GET_COUNTRIES",success:function(u){$(u.data).each(function(v,w){p.append('<option value="'+w.value+'" >'+w.text+"</option>")
})
}})
}function c(){$.ajax({url:"/ngw/syspath-bin/gartner/globalform?requestType=GET_REGIONS",success:function(u){$(u.data).each(function(v,w){m.append('<option value="'+w+'" >'+w+"</option>")
})
}})
}}})();
function onFormRecaptchaSuccess(a){if(a){cmpGlobalSiteForm.recaptchaCallbackHandler()
}}var cmpGlobalSiteMap=(function(){return{init:function(){a()
}};
function a(){}})();
var cmpGlobalSiteWebinar=(function(){return{init:function(){var c=$(".cmp-globalsite-webinar");
var b=$(".cmp-globalsite-demandbase");
if(c.length==0){if(b.length>0){b.remove()
}return
}c.each(function(){a($(this))
})
}};
function a(I){if(I.length==0){return
}var k=I.find(".webinar-form").find(".form-campaign");
var l=I.find("#isOnDemand");
var h="/ngw/syspath-bin/gartner/webinar";
var r={event:"",eloquaForm:{name:"",type:"",step:"",screen:"",userType:""}};
var s=window.dataLayer||[];
var z=window.navigator.userAgent;
if(z.match(/iPad/i)||z.match(/iPhone/i)){$("body").css("cursor","pointer")
}I.find(".gcom-icon-information").on("click",function(P){P.preventDefault()
});
var c=I.find("#clientTimeZone").val();
if(c==""){c="America/New_York"
}if(k.length>0){x(k);
var w=D(k);
if(!w){p(k)
}if(k.find(".cmp-google-auto-complete").length>0){cmpGoogleAutoComplete.init(k)
}cmpFormValidation.init(k.find("#form-one"));
cmpFormValidation.init(k.find("#form-two"));
cmpFormValidation.init(k.find("#submit-form"))
}I.find(".webinar-summary").hide();
H();
$(window).resize(function(){H()
});
I.find(".btn-link").click(function(){if($(this).hasClass("read-more")){i()
}else{if($(this).hasClass("read-less")){O()
}}});
(function(P){P.each(["show","hide"],function(Q,S){var R=P.fn[S];
P.fn[S]=function(){this.trigger(S);
return R.apply(this,arguments)
}
})
})(jQuery);
var g="/ngw/syspath-bin/gartner/brighttalk";
var N=I.find(".commId").val();
var o=I.find(".channelId").val();
var C=I.find(".realm").val();
var q=I.find(".brightTalkJsUrl").val();
var A=I.find(".brightTalkDomain").val();
var j=I.find(".isUserRegistered").val();
var B=I.find(".form-campaign");
var d="";
var n="";
var E="";
var u="";
var e=false;
function M(){var R=I.find(".isUserRegistered").val();
if(R=="true"){E=I.find(".regUserFirstName").val();
u=I.find(".regUserLastName").val();
d=I.find(".regUserEmailAddress").val()
}else{var Q=I.find(".optinStatus").val();
var P=I.find(".profileComplete").val();
if(Q=="true"||P=="true"){E=B.find(".optedUserFirstName").val();
u=B.find(".optedUserLastName").val();
d=B.find("#email-address").val()
}else{E=B.find("#first-name").val();
u=B.find("#last-name").val();
d=B.find("#email-address").val()
}}n=d;
if(E.length==0){E="NA"
}if(u.length==0){u="NA"
}return'{"userId":"'+n+'","firstName":"'+E+'","lastName":"'+u+'","email":"'+d+'","timeZone":"'+c+'"}'
}function f(){var Q=I.find("#btUserData").val();
if(Q.length>0){t(Q)
}else{var P=M();
J(P)
}}function t(S){if(S.length>0&&o.length>0&&N.length>0){var R="656";
var P="1000";
if(window.innerWidth<breakpointSmall){R="auto"
}var Q='<div class="jsBrightTALKEmbedWrapper">';
Q=Q+'<script class="jsBrightTALKEmbedConfig" type="application/json">';
Q=Q+'{ "language": "en-US", "displayMode" : "standalone", "autoPlay": "true", "channelId" : '+o+', "commId" : '+N+', "height" : "'+P+'", "realmToken" : "'+S+'" ';
if(A=="stage"){Q=Q+', "environment": "stage"'
}Q=Q+"}<\/script>";
Q=Q+'<script class="jsBrightTALKEmbed" src="'+q+'"><\/script></div>';
I.find(".brighttalk-player").html(Q);
window.dataLayer=window.dataLayer||[];
s.push({event:"btPlayerDisplayed",page:{categoryLevel2:"webinar player",type:"Webinar Player"}})
}else{I.find(".brighttalk-player").html('<p style="margin-top: 30px">Error loading the webinar. Please try again later!</p>')
}}function J(P){$.ajax({url:g,method:"POST",data:{userData:P,requestType:"BRIGHTTALK_USERDATA"}}).done(function(Q){if(!$.isEmptyObject(Q)){var R=Q.data.realmToken;
t(R)
}}).error(function(Q){I.find(".brighttalk-player").html('<p style="margin-top: 30px">Error loading the webinar. Please try again later!</p>')
})
}if(j=="true"){I.find(".success-container").parent().parent().siblings(".form-row").hide();
f()
}I.find(".success-container").on("show",function(){$(this).parent().parent().siblings(".form-row").hide();
f()
});
function O(){I.find(".read-less").css("display","none");
I.find(".webinar-summary").hide();
I.find(".read-more").css("display","block")
}function i(){I.find(".read-more").css("display","none");
I.find(".webinar-summary").show();
I.find(".read-less").css("display","block")
}function H(){if(window.innerWidth<breakpointMD){O()
}else{I.find(".btn-link").css("display","none");
I.find(".webinar-summary").show()
}}function b(Q,S){S.find("form").hide();
S.find(".campaign-heading").hide();
var P=S.find(".success-container");
if(S.parent(".webinar-form").length>0){P=S.parents().parent().next().find(".success-container")
}P.find(".footer").hide();
var R,T;
if(Q==="ELOQUA"){R=S.find(".eloqua-message").val();
T=S.find(".eloqua-text").val()
}else{if(Q==="OPTIN"){R=S.find(".optin-message").val();
T=S.find(".optin-text").val()
}}P.find(".footer").show();
S.find(".footer-span").show();
P.find(".success-message").html(R);
P.find(".success-text").html(T);
P.show();
return false
}function v(Q){Q.find("form").hide();
Q.find(".campaign-heading").hide();
var P=Q.find(".error-container");
P.find(".error-message").html("Error!");
P.find(".error-text").html("Error submitting the form. Please try again later.");
P.show();
return false
}function L(P){P.parents("form").fadeOut();
P.parents("form").prev("form").fadeIn("400",function(){P.parents("form").prev("form").find(":input:first").focus()
})
}function y(S,T){var R=S.next("form");
var Q=R.find(".stepTwoEmailAddress");
var P="";
S.css("display","none");
R.css("display","block");
if(T){S.siblings("form").each(function(){var X=$(this).find("input");
var V=$(this).find("select");
var W=$(this).find("#continue");
var U=$(this).find("#submit");
$(this).trigger("reset");
X.removeClass("successMessage");
X.removeClass("errorMessage");
V.prop("selectedIndex",0);
V.removeClass("successMessage");
V.removeClass("errorMessage");
W.addClass("button-gray");
if(W){W.addClass("button-gray")
}if(U){U.addClass("button-gray")
}$(this).find(".errormMessageText").remove();
$(this).find("#submitError").text("")
})
}else{R.find("#submitError").text("")
}if(P){Q.val(P)
}}function x(P){P.find(".back-button").each(function(){$(this).click(function(){L($(this));
CommonFunctions.finalSubmitAjaxLoader(P,false)
})
});
P.find("#form-two").on("form.submit.valid",function(Q){y($(this),false);
if(P.find(".googleAutocompleteSwitch").val()=="true"){cmpGoogleAutoComplete.init(k)
}if(s){r.event=I.find(".eloquaDLEvent").val();
r.eloquaForm.name=I.find(".eloquaDLFormName").val();
r.eloquaForm.type=I.find(".elqCampaignType").val();
r.eloquaForm.step=I.find(".eloquaDLFormStep3").val();
r.eloquaForm.screen=I.find(".elqDLCandDInfo").val();
r.eloquaForm.userType=I.find(".eloquaDLAnonymousUser").val();
s.push(r)
}Q.preventDefault()
})
}function K(R,U){var V=FormUtils.getCommonFormData(R)||{};
var Q={flex1:I.find(".resId").val()||"",flex2:I.find(".commId").val()||"",flex3:I.find(".channelId").val()||""};
if(!V.language&&window.location.pathname.split("/").length>0){Q.language=window.location.pathname.split("/")[1]||""
}if(!V.cid){Q.cid=CommonFunctions.urlParam("cid")||""
}if(!V.refURL){Q.refURL=document.referrer||""
}var T={};
if(!U){T=FormUtils.getFormSpecificData(R)||{};
if(R.find(".googleAutocompleteSwitch").val()=="true"){var S=cmpGoogleAutoComplete.getStreetAddressData(R);
T=$.extend({},S,T)
}}else{T=FormUtils.getOptedInFieldsData(R)
}var P=$.extend({},V,Q,T);
return P
}function p(Q){var P;
Q.find("#submit-form").on("form.submit.valid",function(T){var R=$(this);
if(!R.find("#submit").hasClass("button-gray")){CommonFunctions.finalSubmitAjaxLoader(R.closest(Q),true);
var S=K(R.closest(Q),false);
m("ELOQUA",S,Q);
T.preventDefault();
return false
}})
}function m(S,R,U){var Q=I.find(".optinStatus").val();
var P=I.find("#isOnDemand").val();
var T={requestType:"WEBINAR_REGISTER",eloquaFormParams:JSON.stringify(R),elqFormName:U.find(".elq-form").val(),optinStatus:Q,isOnDemand:P,userData:M(),commId:N,channelId:o};
CommonFunctions.postAjaxRequest(h,T,true,U,function(V){if(V){var W=V.data;
I.find("#btUserData").val(W.realmToken);
CommonFunctions.finalSubmitAjaxLoader(U,false);
var X=U.closest("section");
if(X[0].hasAttribute("data-hotjar")){X.removeAttr("data-hotjar",true)
}b(S,U);
if(s){r.event=I.find(".eloquaDLSuccessEvent").val();
r.eloquaForm.name=I.find(".eloquaDLFormName").val();
r.eloquaForm.type=I.find(".elqCampaignType").val();
r.eloquaForm.step=undefined;
r.eloquaForm.screen=I.find(".eloquaDLSuccess").val();
S==="ELOQUA"?r.eloquaForm.userType=I.find(".eloquaDLAnonymousUser").val():r.eloquaForm.userType=I.find(".eloquaDLKnownUser").val();
s.push(r)
}}else{CommonFunctions.finalSubmitAjaxLoader(U,false);
v(U)
}},function(V){CommonFunctions.finalSubmitAjaxLoader(U,false);
v(U)
})
}function F(S,W,R){var V=W.find(".optinStatus");
var P=W.find(".profileComplete");
var T=W.find(".optedUserFirstName");
var Q=W.find(".optedUserLastName");
if(V.length>0){V.val(S.optedIn)
}if(T.length>0){T.val(S.firstName)
}if(Q.length>0){Q.val(S.lastName)
}if(P.length>0){P.val(S.profileComplete)
}if(S.cityPresent){R.find("#city").parents(".field-container").hide()
}else{R.find("#city").parents(".field-container").show()
}if(S.profileComplete){var X=K(W.closest(R),true);
X.firstName=S.firstName;
X.lastName=S.lastName;
m("OPTIN",X,R);
return true
}else{var U=W.find(".step-one-action-button");
y(U.parents("form"),true);
if(s){r.event=I.find(".eloquaDLEvent").val();
r.eloquaForm.name=I.find(".eloquaDLFormName").val();
r.eloquaForm.type=I.find(".elqCampaignType").val();
r.eloquaForm.step=I.find(".eloquaDLFormStep2").val();
r.eloquaForm.screen=I.find(".elqDLPersonalInfo").val();
r.eloquaForm.userType=I.find(".eloquaDLAnonymousUser").val();
s.push(r)
}CommonFunctions.finalSubmitAjaxLoader(W,false);
return false
}}function G(P,S,R){var Q=K(S.closest(R),true);
Q.firstName=P.firstName;
Q.lastName=P.lastName;
I.find(".isUserRegistered").val(true);
I.find(".regUserFirstName").val(P.firstName);
I.find(".regUserLastName").val(P.lastName);
I.find(".regUserEmailAddress").val(P.emailAddress);
m("OPTIN",Q,R);
return true
}function D(P){P.find("#form-one").on("form.submit.valid",function(R){var T=$(this);
var Q=T.find(".emailAddress");
CommonFunctions.finalSubmitAjaxLoader(T,true);
d=Q.val();
var S=h+"?requestType=GET_ELOQUA_WEBINAR_OPTIN_STATUS&emailAddress="+d+"&commId="+N+"&timezone="+c;
CommonFunctions.getAjaxRequest(S,true,T,function(U){var V=U.data;
I.find("#btUserData").val(V.realmToken);
if(V.webinarRegistered){return G(V,T,P)
}else{return F(V,T,P)
}},function(U){v(T);
CommonFunctions.finalSubmitAjaxLoader(T,false);
return true
});
R.preventDefault()
})
}}})();
var cmpGlobalSiteAudioPlayer=(function(){return{init:function(){var c=$(".cmp-globalsite-audioplayer");
c.each(function(){a($(this))
})
}};
function a(h){if(h.length==0){return
}var k=h.find(".right-rail-row");
var i=h.find(".right-rail");
if(i.length>0){f();
CommonFunctions.onBreakpointChange(f)
}var c=!!document.createElement("audio").canPlayType;
if(c){var e=h.find(".audioplayer-sprite").val();
var g={iconUrl:e,controls:["restart","play","progress","current-time","duration","mute","volume"]};
var d=h.find(".audio").attr("id");
var j=new Plyr("#"+d,g);
h.find(".audioplayer").attr("style","visibility:visible");
var l=h.find(".timestamp").find("a");
l.click(function(){var q=$(this).data("timestamp");
if(q.length>0){var o=$(this).parent(".timestamp").parents(".clickableTimestamps").siblings(".player").find(".player-element");
var s=o.find(".plyr__progress").find('input[type="range"]');
var r=o.find(".plyr__time--duration").text();
var n=s.attr("aria-valuemax");
var t=b(q);
if(t>0){o.find(".plyr__time--current").html(q);
s.attr("aria-valuenow",t);
s.attr("aria-valuetext",q+" of "+r);
var p=(t/n)*100;
s.attr("style","--value:"+p+"%");
var m=o.find(".audio").get(0);
m.currentTime=t;
m.play()
}}})
}function f(){i.detach();
if(window.innerWidth<breakpointMedium){k.append(i)
}else{h.find(".audioplayer").find("div.row").first().append(i)
}}}function b(g){var d=/^(?:[0-5][0-9]):[0-5][0-9]$/;
var c=/^(?:[0-5][0-9]):[0-5][0-9]:[0-5][0-9]$/;
var h=0;
var f=false;
if(d.test(g)||c.test(g)){f=true
}if(f){var e=g.split(":");
if(e.length==2&&(e[0]>=0&&e[0]<=59)&&(e[1]>=0&&e[1]<=59)){h=e[0]*60+e[1]*1
}if(e.length==3&&(e[1]>=0&&e[1]<=59)&&(e[2]>=0&&e[2]<=59)){h=e[0]*3600+e[1]*60+e[2]*1
}}return h
}})();
var cmpGlobalSiteExpertProfile=(function(){return{init:function(){var b=$(".cmp-globalsite-expertprofile");
if(b.length==0){return
}b.each(function(){a($(this));
$(window).resize(a($(this)))
})
}};
function a(e){d();
e.find(".btn-link").css("display","none");
e.find(".expert-profile").css("height","auto");
var c=e.find(".expert-profile").height();
var b=e.find(".right-sec").outerHeight(true);
if(window.innerWidth>breakpointMD){b=Math.max(b,445);
if(c>b){g()
}}else{if(window.innerWidth>breakpointSM){b=Math.max(b,330);
if(c>b){g()
}}else{b=580;
if(c>b){g()
}}}e.find(".btn-link").click(function(){if($(this).hasClass("read-more")){f()
}else{if($(this).hasClass("read-less")){g()
}}});
function d(){var l=e.find(".img-sec");
var m=e.find(".social-links");
var j=e.find(".area-of-coverage");
var k=e.find(".expert-bio");
var i=e.find(".headline");
var h=e.find(".right-sec");
if(window.innerWidth<breakpointSmall){i.next().after(m);
i.next().after(l);
k.before(j)
}else{h.append(l);
h.append(m);
h.append(j)
}}function g(){e.find(".read-less").css("display","none");
e.find(".expert-profile").css("height",b);
e.find(".expert-profile").css("overflow","hidden");
e.find(".read-more").css("display","inline-block")
}function f(){e.find(".read-more").css("display","none");
e.find(".expert-profile").css("height","auto");
e.find(".expert-profile").css("overflow","visible");
e.find(".read-less").css("display","inline-block")
}}})();
var cmpGlobalSiteMarketingReader=(function(){return{init:function(){var b=$(".cmp-globalsite-marketingreader");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(c){var e=c.find(".right-rail-row");
var d=c.find(".righ-rail-section");
if(d.length>0){b();
CommonFunctions.onBreakpointChange(b)
}function b(){d.detach();
if(window.innerWidth<breakpointSmall){e.append(d)
}else{c.find(".right-rail").append(d)
}}}})();
var cmpGlobalSiteTransitMap=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-globalsite-transitmap");
if(b.length==0){return
}var f=b.find("#featherlight-lib").val();
$("body").append('<script type="text/javascript" src="'+f+'"><\/script>');
var d={filter:{emergingTech_trk:{hide:false},cx_trk:{hide:false},adTech_trk:{hide:false},social_trk:{hide:false},commerce_trk:{hide:false},analytics_trk:{hide:false},mktgMgmt_trk:{hide:false},mobile_trk:{hide:false},search_trk:{hide:false},rtData_trk:{hide:false}}};
c();
function e(j){var i=j.length,h,g;
while(0!==i){g=Math.floor(Math.random()*i);
i-=1;
h=j[i];
j[i]=j[g];
j[g]=h
}return j
}function c(){var h=b.find(".transit-map-interactive-application");
var k=b.find(".browser-support");
var j=b.find(".device-support");
var i=CommonFunctions.findUserAgent().isIE();
var g=CommonFunctions.findUserAgent().isHandheld();
if(i){h.hide();
k.show();
return
}else{if(g){h.hide();
j.show();
return
}}b.find(".hidden-xs").removeClass("hidden-xs hidden-sm");
b.find(".col-md-10").removeClass("col-md-10");
b.find(".col-xs-8").removeClass("col-xs-8 col-md-10").addClass("col-xs-12");
b.find(".hero-beta .col-md-8.brand-secondary.bg-primary").addClass("col-xs-8").removeClass("col-md-8 col-md-offset-1 col-xs-12");
b.find("iframe").width("100%");
b.find(".filtering-controls").on("click",".filter-btn",function(o){o.preventDefault();
o.stopPropagation();
var n=$(this),m=n.attr("data-id"),l='.filter-btn[data-id="'+m+'"]';
if(m==="toggleAll"){if($(this).hasClass("not-checked")){$.each(d.filter,function(p,q){q.hide=true
});
$(this).removeClass("not-checked active")
}else{$.each(d.filter,function(p,q){q.hide=false
});
$(this).addClass("not-checked active")
}$.each(d.filter,function(p,q){if(q.hide===true){b.find('.filter-btn[data-id="'+p+'"]').removeClass("not-checked active");
b.find(".transit-map-svg-wrapper").children("g").addClass("masked")
}else{b.find('.filter-btn[data-id="'+p+'"]').addClass("not-checked active");
b.find(".transit-map-svg-wrapper").children("g").removeClass("masked")
}})
}else{if($(l).hasClass("not-checked")){$(l).removeClass("not-checked active");
d.filter[m].hide=true;
b.find('g[data-name="'+m+'"]').addClass("masked")
}else{b.find(l).addClass("not-checked active");
d.filter[m].hide=false;
b.find('g[data-name="'+m+'"]').removeClass("masked")
}}});
b.find("g").on("click",function(n){n.preventDefault();
n.stopPropagation();
var m=$(this).data("id").toString(),l=$(this).data("name");
if(m!=undefined&&m.length>0){$.featherlight(b.find("#"+m))
}else{console.log("There is no dataId! for: "+l+" with an ID of: "+m)
}});
$.ajax({type:"GET",url:"/ngw/syspath-bin/gartner/adminservlet?requestType=GET_TRANSIT_MAP",dataType:"xml",success:function(l){var m=b.find("input[name='isclient']").val();
if(m=="true"){$(l).find("Attribute").each(function(){var F=$(this).find("AttributeName").text();
var A=$(this).find("Description").text();
var w=$(this).find("Id").text();
var y=F.replace(/\(|\)|\/|\&/g," ").replace(/\s+/g,"-").toLowerCase();
if(y.substr(y.length-1)=="-"){y=y.slice(0,-1)
}var D="";
var z="";
var o="";
var v=5;
if($(this).find("ResearchList").length>0){D+='<div class="research"><h3>Related Research</h3><ul>';
var B=[];
$(this).find("ResearchElement").each(function(){var G=$(this).find("ResearchTitle").text();
var x=$(this).find("ResearchURL").text();
B.push('<li><a href="#" target="_blank" onClick="window.open(\''+x+"','myWin');return false;\">"+G+"</a></li>")
});
var q="";
e(B);
for(var C=0;
C<5;
C++){q+=B[C];
if(C==B.length-1){break
}}D+=q+"</ul></div>";
if(B.length>=2){v+=4
}}if($(this).find("VendorList").length>0){z+='<div class="vendors"><h3>Sample Vendors</h3><ul>';
var r=[];
$(this).find("VendorElement").each(function(){var G=$(this).find("VendorName").text();
var x=$(this).find("VendorURL").text();
r.push('<li><a href="#" target="_blank" onClick="window.open(\''+x+"','myWin');return false;\">"+G+"</a></li>")
});
var p="";
e(r);
for(var C=0;
C<v;
C++){p+=r[C];
if(C==r.length-1){break
}}z+=p+'<li class="disclaimer">These are randomized links from our database and are provided as additional resources for our users&rsquo; convenience. See our <a target="_blank" href="http://www.gartner.com/technology/about/policies/terms_of_use.jsp">Terms of Use</a> for more information.</li></ul></div>'
}if($(this).find("ProductList").length>0){o+='<div class="products"><h3>Sample Products</h3><ul>';
var s=[];
$(this).find("ProductElement").each(function(){var G=$(this).find("ProductName").text();
var x=$(this).find("ProductURL").text();
s.push('<li><a href="'+x+'" target="_blank">'+G+"</a></li>")
});
var E="";
e(s);
for(var C=0;
C<v;
C++){E+=s[C];
if(C==s.length-1){break
}}o+=E+'<li class="disclaimer">These are randomized links from our database and are provided as additional resources for our users&rsquo; convenience. See our <a target="_blank" href="http://www.gartner.com/technology/about/policies/terms_of_use.jsp">Terms of Use</a> for more information.</li></ul></div>'
}var n;
var u;
if(o.length>0){u=o
}else{if(z.length>0){u=z
}else{u=" ";
n="noprodorvend"
}}var t='<div id="'+w+'" data-name="'+y+'" class="transitmodal '+n+'"><h2>'+F+"</h2>"+u;
t+="<p>"+A+"</p>"+D+"</div>";
$("#lboxitems").append(t)
})
}else{$(l).find("Attribute").each(function(){var n=$(this).find("AttributeName").text();
var y=$(this).find("Description").text();
var p=$(this).find("Id").text();
var q=n.replace(/\(|\)|\/|\&/g," ").replace(/\s+/g,"-").toLowerCase();
if(q.substr(q.length-1)=="-"){q=q.slice(0,-1)
}var r="";
var B="";
var v="";
var t=5;
if($(this).find("ResearchList").length>0){r+='<div class="research"><h3>Related Research</h3><ul>';
var u=[];
$(this).find("ResearchElement").each(function(){var D=$(this).find("ResearchTitle").text();
var x=$(this).find("ResearchURL").text();
u.push('<li><a href="'+x+'" target="_blank">'+D+"</a></li>")
});
var A="";
e(u);
for(var s=0;
s<5;
s++){A+=u[s];
if(s==u.length-1){break
}}r+=A+'<li class="disclaimer">The links above are only subsets of the full documents that are available to clients.</li></ul></div>';
if(u.length>=2){t+=4
}}var C;
var z;
if(v.length>0){z=v
}else{if(B.length>0){z=B
}else{z=" ";
C="noprodorvend"
}}var o="";
var w='<div id="'+p+'" data-name="'+q+'" class="transitmodal '+C+'"><h2>'+n+"</h2>"+z;
w+="<p>"+y+"</p>"+r+o+"</div>";
b.find("#lboxitems").append(w)
})
}}})
}}})();
var cmpGlobalSiteDigitalMarkets=(function(){return{init:function(){var b=$(".cmp-globalsite-digitalmarkets");
b.each(function(){a($(this))
})
}};
function a(l){var m;
var q="freelisting";
var b="connect";
var p="/ngw/syspath-bin/gartner/eloquaservlet";
var e=false;
var s={event:"",eloquaForm:{name:"",type:"",step:"",screen:"",userType:""}};
var k=window.dataLayer||[];
var c=l.find(".form-freelisting");
var n=l.find(".form-connect");
var h=l.find(".otherCategorySpan");
var r=l.find(".elqFormName").val();
h.detach();
if(c.length){t(q,c);
u(c);
cmpFormValidation.init(c.find(".submitForm"))
}if(n.length){t(b,n);
u(n);
cmpFormValidation.init(n.find(".submitForm"))
}function u(w){var y=w.find(".software-filter");
var x=[];
v();
function v(){w.find(".software-categories-ul li").each(function(){x.push($(this).text())
});
y.on("keyup",function(){w.find(".software-categories-input").removeClass("selected");
if(!(w.find(".software-categories-input").parent().hasClass("open")&&w.find(".software-categories-input").val()==="")){w.find(".software-categories-input").parent().addClass("open")
}else{w.find(".software-categories-input").parent().removeClass("open")
}var z=$(this).val().toLowerCase();
w.find(".software-categories-ul li").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(z)>-1)
})
})
}$(function(){w.find(".software-categories-input").autocomplete({source:x,autoFocus:true})
});
$(window).click(function(){$(".software-categories-input").parent().removeClass("open")
});
w.find(".software-categories-ul li").off("click").on("click",function(){var B=$(this).find("a").text();
if(B){var A=w.find(".software-categories-input");
A.val(B);
A.addClass("selected");
A.focus();
A.focusout();
A.parent().removeClass("open");
var z=w.find(".otherCategorySection");
if(B.toLowerCase()=="other"){z.show();
z.append(h);
h.removeClass("hidden");
cmpFormValidation.init(w.find(".submitForm"),true);
v()
}else{z.hide();
h.removeClass("hidden").addClass("hidden");
h.detach();
cmpFormValidation.init(w.find(".submitForm"),true);
v()
}w.find(".software-categories-ul li").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(B.toLowerCase())>=-1)
})
}})
}function j(x){var v=x.find(".success-container");
var w,y;
w=x.find(".eloqua-message").val();
y=x.find(".eloqua-text").val();
v.empty();
v.append("<h3 class='success-message col-xs-12'></h3>");
v.append("<div class='success-text p-small col-xs-12'></div>");
v.find(".success-message").html(w);
v.find(".success-text").html(y);
x.find("form").hide();
v.show()
}function i(w){w.find("form").hide();
var v=w.find(".error-container");
v.find(".error-message").html("Error!");
v.find(".error-text").html("Error submitting the form. Please try again later.");
v.show();
return false
}function f(A,B){var C={},x={};
x=FormUtils.getDataJson(l);
var w=CommonFunctions.urlParam("elqCampaignId");
if(w){C.elqCampaignId=w
}C.url=window.location.href;
var z=B.find(".software-filter").val()||"";
var y=z.toLowerCase()=="other"?B.find(".otherCategory").val():false;
if(y){C.other=y
}var v=$.extend({},x,C);
return v
}function t(w,x){var v;
x.find(".submitForm").on("form.submit.valid",function(y){d($(this),x,w);
o(w,r);
y.preventDefault();
return false
})
}function d(v,y,w){CommonFunctions.finalSubmitAjaxLoader(v.closest(y),true);
var x=f(w,v.closest(y),false);
g(x,w,v.closest(y))
}function g(w,v,y){var x={eloquaFormParams:JSON.stringify(w),requestType:"DM_ELOQUA_REGISTER",elqFormName:v};
CommonFunctions.postAjaxRequest(p,x,true,y,function(z){var A=y.closest("section");
if(A[0].hasAttribute("data-hotjar")){A.removeAttr("data-hotjar",true)
}j(y)
},function(z){CommonFunctions.finalSubmitAjaxLoader(y,false);
i(y)
})
}function o(w,v){s.event="formSuccess";
s.eloquaForm.name=v;
s.eloquaForm.type=w;
s.eloquaForm.screen="success";
k.push(s)
}}})();
var cmpGlobalSiteGlossarySearch=(function(){return{init:function(){var b=$(".cmp-globalsite-glossarysearch");
b.each(function(){a($(this))
})
}};
function a(w){var z="0-9";
var A=w.find(".search-item-template");
var S=w.find("[name='glossaryTypeTag']").val();
var h=w.find(".search-input:visible");
var D=parseInt(w.find('[name="glossaryPageSize"]').val());
var K=w.find('[name="glossaryTermPageSize"]').val();
var T=w.find('[name="hideSearchResults"]').val();
var j=w.find('[name="showLocalizedContent"]').val();
var k=w.find('[name="languageCode"]').val();
var L=w.find(".no-result-found-suggestions");
var e=w.find(".search-result-container");
var q=w.find(".keysearch-result-container");
var H=w.find("div.cmp-pagination > div.sequence-pagination");
var M=w.find("[name='no-pagination-on-keyword-search']").val();
var c=w.find("[name='no-pagination-on-alphabet-search']").val();
var i=w.find("[name='glossarySearchStartsWith']").val();
var N=w.find("[name='glossarySearchValue']").val();
var G=w.find("[name='glossaryNumPages']").val();
var I=w.find("[name='glossaryNumFound']").val();
var F=w.find(".cmp-filter-v2");
if(!isNaN(G)&&!isNaN(I)){if(G>1){cmpPagination.refreshSequentialPagination(H,G,I)
}}h.val(N);
h.blur(function(V){h.val(this.value)
});
cmpPagination.subscribePaginationEvents("pagination-sequence-changed",function(X){var W;
var V=w.find(".search-input:visible").val();
if(V){R(X,V,false,X.detail,X.pageSize)
}});
cmpPagination.subscribePaginationEvents("view-count-changed",function(X){var W;
var V=w.find(".search-input:visible").val();
X.which=2;
if(V){R(X,V,false,1,X.detail)
}});
h.on("result",function(W,V){p({which:1,ac:true},V,false)
});
h.keydown(function(X,V){var W=$(this).val();
E();
m();
cmpPagination.refreshViewDropDown(H);
p(X,W,false)
});
w.find("[name='glossarySearchButton']").click(function(W){var V=w.find(".search-input:visible").val();
cmpPagination.refreshViewDropDown(H);
p(W,V,false)
});
var d=w.find(".list-inline").find("li.key:not(.disabled)");
d.click(function(W){W.preventDefault();
m();
E();
v();
cmpPagination.refreshViewDropDown(H);
var V=$(this).find("a").html();
$(this).addClass("selected");
$(this).find("a").addClass("selected");
f();
p(W,V,true)
});
var t=w.find(".list-inline").find("li.numkey:not(.disabled)");
t.click(function(W){W.preventDefault();
m();
E();
v();
cmpPagination.refreshViewDropDown(H);
var V="#";
$(this).addClass("selected");
$(this).find("a").addClass("selected");
f();
p(W,V,true)
});
if(N!=undefined&&N.length>0){m();
E();
cmpPagination.refreshViewDropDown(H);
U(false);
O(false,N);
s()
}else{if(i!=undefined&&i.length>0){m();
E();
cmpPagination.refreshViewDropDown(H);
U(true);
O(true,i);
s();
if(i==z){var r=w.find(".list-inline").find("li.numkey:not(.disabled)").find("."+z);
r.addClass("selected");
r.parent().addClass("selected");
f()
}else{var r=w.find(".list-inline").find("li.key:not(.disabled)").find("."+i);
r.addClass("selected");
r.parent().addClass("selected");
f()
}}}w.on("click",".item",function(W){W.preventDefault();
m();
v();
o();
var V=$(this).find("a").data("value");
p(W,V,true)
});
F.find(".item").find("a[data-value='#']").html(z);
w.find("button.close").click(function(V){b()
});
function s(){$(".cmp-globalsite-glossarytermoftheday").hide();
$(".cmp-globalsite-glossarysearchrelatedterms").hide()
}function y(){$(".cmp-globalsite-glossarytermoftheday").show();
$(".cmp-globalsite-glossarysearchrelatedterms").show()
}function U(V){if(V){w.find(".you-searched-for").hide();
w.find(".keys").show();
w.find(".phablet-keys").show()
}else{w.find(".you-searched-for").show();
w.find(".keys").hide();
w.find(".phablet-keys").hide();
w.find(".searched-content").find("h2").hide()
}}function B(V){V.find(".search-item").matchHeight()
}function m(){var W=w.find(".list-inline").find("li.key:not(.disabled)");
var V=w.find(".list-inline").find("li.numkey:not(.disabled)");
W.removeClass("selected");
W.find("a").removeClass("selected");
V.removeClass("selected");
V.find("a").removeClass("selected")
}function E(){var V=F.find(".btn-filter").find("span");
V.removeClass("active");
V.html("Select");
F.find(".item").find("a.active").removeClass("active")
}function o(){var W=F.find(".btn-filter").find("span");
m();
if(W.hasClass("active")){var X=W.html();
var V=w.find(".list-inline").find("li a:contains("+X+")");
V.addClass("selected");
V.closest("li").addClass("selected")
}}function f(){var V=w.find(".list-inline").find("li.selected");
var W=F.find(".btn-filter").find("span");
if(!V){E()
}else{var X=V.find("a").html();
if(V.hasClass("numkey")){W.html(z);
F.find(".item a:contains("+z+")").addClass("active")
}else{W.html(X);
F.find(".item a:contains("+X+")").addClass("active")
}}}function g(){w.find(".no-result-found-suggestions").find("a").click(function(W){W.preventDefault();
var V=$(this).html();
$(this).parents(".searched-content").siblings(".search-box").find(".search-input:visible").val(V);
p(W,V,false)
})
}function J(ab,aa,Y,X){var Z="/ngw/syspath-bin/gartner/glossarysearch?requestType=SEARCH&";
var W="all";
if(T=="true"){Z=w.find('[name="glossarySearchPage"]').val()+"?"
}var V="";
if(aa){V=Z+"startsWith="+encodeURIComponent(ab);
if(c==="false"){W=X?X:K
}}else{V=Z+"glossarykeyword="+encodeURIComponent(ab);
if(M==="false"){W=X?X:D
}}V=V+"&pageSize="+encodeURIComponent(W)+"&glossaryTypeTag="+encodeURIComponent(S)+"&nPage="+encodeURIComponent(Y)+"&showLocalizedContent="+encodeURIComponent(j)+"&languageCode="+encodeURIComponent(k);
return V
}function b(){m();
E();
x(w);
v();
cmpPagination.refreshSequentialPagination(H);
cmpPagination.refreshViewDropDown(H);
y()
}function v(){var V=w.find(".search-input");
V.val("");
V.focus();
w.find(".keys").show();
w.find(".phablet-keys").show();
w.find(".you-searched-for").hide();
w.find(".no-result-found-message").hide();
w.find(".found-result").hide();
w.find(".searched-content").find("h2").hide();
L.hide();
e.empty();
q.empty();
e.hide();
q.hide()
}function p(W,Y,X,V){if(W.which&&(W.which==13||W.which==1)){H.hide();
R(W,Y,X,V);
if(Y!=undefined&&Y.length>0){s()
}}}function l(){if(!P||P=="false"||P==false){var V=w.find(".search-inbox").innerWidth()+w.find('[name="glossarySearchButton"]').innerWidth();
C.autocomplete(u,{extraParams:{q:function(W){return W.val()
}},width:V,hidePersonalizedSearch:true,minChars:2,parse:function(Y){var X=[];
var W=JSON.parse(Y);
$.each(W.suggestions,function(aa,Z){Z=Z.toLowerCase().replace(/[^\w^\s]/g," ").replace("s+"," ");
var ab=Z.split("|");
X[X.length]={data:ab,value:ab[0],result:ab[0]}
});
return X
}});
C.focus()
}}function O(X,Y){var V=w.find(".breadcrumb-glossary");
var W=V.find(".function-name");
x(w);
if(W.hasClass("breadcrumb-glossary-element")){W.removeClass("breadcrumb-glossary-element");
W.addClass("breadcrumb-glossary-root")
}if(X){V.append('<i class="gcom-icon-angle-right breadcrumb-added"></i>');
if(Y=="#"){Y=z
}V.append('<span class="breadcrumb-glossary-element p-small breadcrumb-added">'+Y+"</span>")
}else{V.append('<i class="gcom-icon-angle-right breadcrumb-added"></i>');
V.append('<span class="breadcrumb-glossary-element p-small breadcrumb-added">Search</span>')
}V.show()
}function x(V){var W=V.find(".breadcrumb-glossary");
var X=W.find(".function-name");
W.find(".breadcrumb-added").remove();
W.hide();
if(X.hasClass("breadcrumb-glossary-root")){X.removeClass("breadcrumb-glossary-root");
X.addClass("breadcrumb-glossary-element")
}}function R(Y,ab,aa,X,W){if(Y.preventDefault){Y.preventDefault()
}if(!ab){return
}ab=ab.toString().trim();
if(aa){history.replaceState({},"","?glossaryletter="+ab);
Q("",ab,"")
}else{if(Y.ac){history.replaceState({},"","?glossarykeyword="+ab+"&glossarycontext=ac");
Q(ab,"","ac")
}else{if(!X){history.replaceState({},"","?glossarykeyword="+ab);
Q(ab,"","")
}}}if(!X){X=1
}var Z=J(ab,aa,X,W);
var V=w.find(".found-result");
V.html("");
U(aa);
if(T=="true"){window.location.href=Z
}else{if(aa){A=w.find(".keysearch-item-template")
}else{A=w.find(".search-item-template")
}w.find(".loader").show();
H.hide();
$.get(Z).success(function(ae){e.hide();
q.hide();
q.empty();
e.empty();
var ai=ae.data;
var ac=ai.numFound;
var ad=ai.numPages;
var af=ai.suggestion;
var aj=ai.docs;
V.hide();
O(aa,ab);
if(aj==null){if(aa){w.find(".searched-content").find("h2").show();
w.find(".searched-content").find("h2").html(ab);
w.find(".no-result-found-message").hide()
}else{w.find(".no-result-found-message").html('No results found for "'+ab+'"');
w.find(".no-result-found-message").show();
m()
}L.hide();
e.hide();
q.hide()
}else{w.find(".no-result-found-message").hide();
if(ac==1){window.location.href=aj[0].path
}else{if(aj.length>0){w.find(".no-result-found-message").hide();
if(aa){w.find(".searched-content").find("h2").show();
if(ab=="#"){w.find(".searched-content").find("h2").html(z)
}else{w.find(".searched-content").find("h2").html(ab)
}V.html("")
}else{var ah=ac+" results";
if(ad>1){ah+=" | page "+X+" of "+ad
}V.html(ah);
V.show();
m()
}for(var ag=0;
ag<aj.length;
ag++){var ak=A.clone();
ak.find(".result-heading").html(aj[ag].title);
ak.find(".result-heading").attr("href",aj[ag].path);
if(aa){ak.removeClass("keysearch-item-template");
q.append(ak)
}else{ak.find(".result-text").html(aj[ag].description);
ak.removeClass("search-item-template");
e.append(ak)
}ak.find(".search-item").show();
ak.show()
}w.find(".search-result").show();
L.hide();
if(aa){q.show()
}else{e.show()
}}else{if(aa){w.find(".searched-content").find("h2").show();
if(ab=="#"){w.find(".searched-content").find("h2").html(z)
}else{w.find(".searched-content").find("h2").html(ab)
}L.hide();
w.find(".no-result-found-message").hide()
}else{w.find(".no-result-found-message").html('No results found for "'+ab+'"');
w.find(".no-result-found-message").show();
if(af!=null){L.find(".suggestion").html(af);
L.show();
g()
}else{L.hide()
}}e.hide();
q.hide()
}}}if(Y.which&&(Y.which==13||Y.which==1||Y.which==2)&&ac>1){if((aa&&c==="true")||(!aa&&M==="true")||ac<=D){H.hide()
}else{cmpPagination.refreshSequentialPagination(H,ad,ac)
}}else{if(Y.type&&Y.type=="pagination-sequence-changed"){H.show()
}}}).complete(function(){B(w);
w.find(".loader").hide()
})
}}function Q(aa,W,Z){var X={};
X.event="keywordsearched";
var V={};
V.keyword=aa;
if(W=="#"){W="0-9"
}V.letter=W;
V.context=Z;
X.glossary=V;
window.dataLayer=window.dataLayer||[];
var Y=-1;
window.dataLayer.forEach(function(ac,ab){if(ac.hasOwnProperty("glossary")){Y=ab
}});
if(Y>-1){window.dataLayer.splice(Y,1)
}window.dataLayer.push(X)
}function n(){var ac=CommonFunctions.getAllQueryParams();
var ab=ac.glossarykeyword||" ";
ab=decodeURIComponent(ab.toString().trim());
var W=ac.glossaryletter||" ";
W=W.toString().trim();
var aa=ac.glossarycontext||" ";
aa=aa.toString().trim();
if(ab){Q(ab,W,aa)
}if(W){var V=jQuery.Event("click",{which:1});
if(CommonFunctions.findUserAgent().isMobile()||CommonFunctions.findUserAgent().isTablet()){var X=w.find("li.item").find('a[data-value="'+W+'"]');
var Y=X.parent();
if(!Y.hasClass("disabled")){X.trigger(V)
}}else{if(W=="#"){t.trigger(V)
}else{var Z=w.find(".list-inline").find("a."+W);
if(Z.length>0){var Y=Z.closest("li.key");
if(!Y.hasClass("disabled")){Y.trigger(V)
}}}}}}var u=w.find('[name="quick-suggestions-url"]').val();
var P=w.find('[name="quick-suggestions-disabled"]').val();
var C=w.find("input.search-input");
l();
n();
CommonFunctions.onBreakpointChange(function(){l()
})
}})();
var cmpGlobalSiteHighlightedConference=(function(){return{init:function(){var b=$(".cmp-globalsite-highlightedconference");
b.each(function(){a($(this))
})
}};
function a(p){var s=p.find("input#disableGeolocation").val();
var g=p.find("input#roleTags").val();
var v=p.find("input#ctaText").val();
var i=p.find("input#image").val();
var t=p.find("input#heading").val();
var k=p.find("input#tagline").val();
var r=p.find("input#description").val();
var w=p.find("input#ctaTextMultiple").val();
var l=p.find("input#ctaLinkMultiple").val();
var h=p.find("input#calendarRegion").val();
var n=p.find("input#enablePageFilter").val();
var e=(/true/i).test(n);
var o=p.find("img").attr("src");
var b=p.find("h2").text();
var d=p.find("h4").text();
var c=p.find("p").text();
var m=p.find("a").text();
var j=p.find("a").attr("href");
if(e){cmpPageFilter.onChange(f)
}function f(y,z){if($.isEmptyObject(z)){u()
}else{if(z.startsWith("emt:page/function")){var x="/ngw/syspath-bin/gartner/dynamiccontent?requestType=GET_HIGHLIGHTED_CONFERENCE";
x=s?x+"&disableGeolocation="+s:x;
x=g?x+"&roleTags="+g:x;
Object.keys(y).forEach(function(B,A){x=y[B]?x+"&filter"+(A+1)+"="+encodeURIComponent(y[B]):x
});
$.get(x).success(function(B){if(B.data.numFound==1){p.find("img").attr("src",B.data.seoImageUrl||"");
p.find("h2").text(B.data.eventTitle||"");
p.find("h4").text(B.data.eventTagline||"");
p.find("p").text(B.data.metaDescription||"");
p.find("a").text(v);
p.find("a").attr("href",B.data.conferencePageURL)
}else{var D=$('.cmp-globalsite-pagefilter a[data-value="'+z+'"]').text();
p.find("img").attr("src",i);
p.find("h4").text(k);
p.find("p").text(r);
p.find("a").text(w);
p.find("a").attr("href",j.startsWith(l)?j:l);
if(B.data.numFound>1){var E=l;
var C=z.lastIndexOf("/");
var A=z.substring(C+1);
E=E+"/"+A;
if(B.data.includeRegion){E=E+"/"+h
}p.find("a").attr("href",E);
p.find("h2").text(t.replace("[Function]",D))
}else{p.find("h2").text(t.replace("[Function]",""))
}}})
}}}function u(){p.find("img").attr("src",o);
p.find("h2").text(b);
p.find("h4").text(d);
p.find("p").text(c);
p.find("a").text(m);
p.find("a").attr("href",j)
}function q(){var A=p.find(".gartnerEventListingInfo");
if(A.length==1){var z=window.dataLayer||[];
var x={};
var y=[];
A.each(function(C){var B={};
B.eventCode=$(this).data("code");
B.eventDaysUntilEventStart=$(this).data("eventdaysuntileventstart");
B.eventGroup=$(this).data("group");
B.eventLocation=$(this).data("gtm-location");
B.eventPrimaryRole=$(this).data("primary-role");
B.eventRegion=$(this).data("region");
B.eventSecondaryRole=$(this).data("secondary-roles");
B.eventStartDate=$(this).data("gtm-start-date");
B.eventTitle=$(this).data("gtm-title");
B.eventType=$(this).data("type");
B.eventWeeksUntilEventStart=$(this).data("eventweeksuntileventstart");
B.eventCountofCurrentRegistrants=null;
B.eventCurrency=null;
B.eventCurrentMarketingMilestone=null;
B.eventKeyNoteSpeakers=null;
B.eventKeyWord=null;
B.eventPrice=null;
B.eventPriceUSD=null;
B.eventVenueName=null;
B.marketingManagerName=null;
y.push(B)
});
x.gartnerEventListing=y;
z.push(x)
}}q()
}})();
var cmpHeroWithEloqua=(function(){return{init:function(){var c=$(".cmp-globalsite-herowitheloqua");
var b=$(".cmp-globalsite-demandbase");
if(c.length==0){if(b.length>0){b.remove()
}return
}c.each(function(){a($(this))
})
}};
function a(n){var f="QUICK_COLLECT";
var i="/ngw/syspath-bin/gartner/eloquaservlet";
var j={event:"",eloquaForm:{name:"",type:"",step:"",screen:"",userType:""}};
var m=window.dataLayer||[];
var p=n.find(".quick-collect-form");
if(p.length){l(f,p);
var c=q(f,p);
if(!c){k(f,p)
}cmpFormValidation.init(p.find("#form-one"));
cmpFormValidation.init(p.find("#submit-form"))
}if(p.length===0){return
}function e(t,s,v){v.find("form").hide();
var r=v.find(".success-container");
var x=n.find(".privacy");
var u,w;
if(t==="ELOQUA"){u=v.find(".eloqua-message").val();
w=v.find(".eloqua-text").val()
}else{if(t==="OPTIN"){u=v.find(".optin-message").val();
w=v.find(".optin-text").val()
}}v.find(".footer-span").show();
r.find(".success-message").html(u);
r.find(".success-text").html(w);
r.show();
x.hide();
return false
}function o(s){s.find("form").hide();
var r=s.find(".error-container");
r.find(".error-message").html("Error!");
r.find(".error-text").html("Error submitting the form. Please try again later.");
r.show();
return false
}function g(s){s.parents("form").fadeOut();
var r=s.parents("form").prev("form");
if(r.is("#form-one")){n.find(".eloquaForm").removeClass("no-background-image");
r.fadeIn("400",function(){r.find(":input:first").focus();
r.find(":input:first").focusout()
})
}else{r.fadeIn("400",function(){r.find(":input:first").focusout()
})
}}function d(u){var t=u.next("form");
var v=t.find("input");
var s=t.find("select");
var r=t.find("#submit");
u.css("display","none");
n.find(".eloquaForm").addClass("no-background-image");
t.css("display","block");
t.trigger("reset");
v.removeClass("successMessage");
v.removeClass("errorMessage");
s.removeClass("successMessage");
s.removeClass("errorMessage");
r.addClass("button-gray");
t.find("#submitError").text("");
t.find(".bacError").text("")
}$.urlParam=function(r){var s=new RegExp("[?&]"+r+"=([^&#]*)").exec(window.location.href);
if(s==null){return null
}else{return decodeURI(s[1].replace(/[^a-zA-Z0-9_]+/g,""))||0
}};
function l(r,s){s.find(".back-button").each(function(){$(this).click(function(){g($(this));
CommonFunctions.finalSubmitAjaxLoader(s,false)
})
})
}function h(r,s,w){var t=FormUtils.getCommonFormData(s);
if(!t.refURL){t.refURL=document.referrer
}var v={};
if(w){v=FormUtils.getOptedInFieldsData(s)
}else{v=FormUtils.getFormSpecificData(s)
}var u=$.extend({},t,v);
return u
}function k(r,s){s.find("#submit-form").on("form.submit.valid",function(u){CommonFunctions.finalSubmitAjaxLoader(s,true);
var t=h(r,s,false);
b("ELOQUA",t,r,s);
u.preventDefault();
return false
})
}function b(t,s,r,v){var u={eloquaFormParams:JSON.stringify(s),requestType:"ELOQUA_REGISTER",elqFormName:v.find("#lead-gen-elqFormName").val()};
CommonFunctions.postAjaxRequest(i,u,true,v,function(w){if(w){CommonFunctions.finalSubmitAjaxLoader(v,false);
var x=v.closest("section");
if(x[0].hasAttribute("data-hotjar")){x.removeAttr("data-hotjar",true)
}e(t,r,v);
j.event=v.find("#eloquaDLSuccessEvent").val();
j.eloquaForm.name=v.find("#lead-gen-elqFormName").val();
j.eloquaForm.step=undefined;
j.eloquaForm.screen=v.find("#eloquaDLSuccess").val();
j.eloquaForm.type=v.find("#elqQCType").val();
if(t==="OPTIN"){j.eloquaForm.userType=n.find("#eloquaDLKnownUser").val()
}else{if(t==="ELOQUA"){j.eloquaForm.userType=n.find("#eloquaDLAnonymousUser").val()
}}m.push(j)
}else{CommonFunctions.finalSubmitAjaxLoader(v,false);
o(v)
}},function(w){CommonFunctions.finalSubmitAjaxLoader(v,false);
o(v)
})
}function q(r,s){s.find("#form-one").on("form.submit.valid",function(u){s=$(this).closest("#form-one").parent();
var t=s.find("#email-address");
CommonFunctions.finalSubmitAjaxLoader(s,true);
emailAddress=t.val();
var v=i+"?requestType=GET_CONFERENCE_ELOQUA_OPTIN_BY_EMAIL&emailAddress="+emailAddress;
CommonFunctions.getAjaxRequest(v,true,s,function(x){if(x.data!==undefined&&x.data.profileComplete){var y=h(r,s,true);
b("OPTIN",y,r,s);
return true
}else{var w=s.find(".step-one-action-button");
d(w.parents("form"));
CommonFunctions.finalSubmitAjaxLoader(s,false);
return false
}},function(w){o(s);
CommonFunctions.finalSubmitAjaxLoader(s,false);
return true
})
})
}}})();
var cmpGlobalSiteCustomFormField=(function(){return{init:function(){var b=$(".cmp-globalsite-customformfield");
b.each(function(){a($(this))
})
},initFromPromoContainer:function(c){var b=c.find(".cmp-globalsite-customformfield");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(b){d();
c();
function c(){var j=b.find('[data-source="software-categories"]');
if(j.length==0){return
}var f=b.find(".otherCategorySection");
var h=b.find(".otherCategorySpan");
j.removeClass("dropdown-toggle").removeAttr("data-toggle");
j.addClass("software-filter software-categories-input");
var g=b.find(".autocomplete-ul");
if(g.length>0){g.find("li").on("click",function(){var l=$(this);
var k=l.find("a").text();
e(f,h,k)
})
}else{var i=j.is("select");
if(i){j.on("change",function(){var k=$(this);
var l=k.find("option:selected").val();
e(f,h,l)
})
}}}function e(f,i,j){var g=i.hasClass("hidden");
if(j&&j.toLowerCase()=="other"){f.append(i);
i.removeClass("hidden");
f.show()
}else{if(!g){f.hide();
i.addClass("hidden");
i.detach()
}}var k=i.hasClass("hidden");
if(g!=k){var h=b.closest(".submitForm");
h.find('button[type="submit"]').off("click");
cmpFormValidation.init(h,false)
}}function d(){var f=b.find('input[data-validator="autocomplete"]');
f.each(function(){var h=$(this);
h.removeClass("dropdown-toggle").removeAttr("data-toggle");
var g=b.find(".autocomplete-ul");
h.on("keyup",function(){h.removeClass("selected");
if(!(h.parent().hasClass("open")&&h.val()==="")){h.parent().addClass("open");
if(!g.find("li").is(":visible")){g.css({padding:"0","margin-top":0,border:0})
}else{g.css({padding:"5px 0","margin-top":"2px",border:"1px solid rgba(0, 0, 0, 0.15)"})
}}else{h.parent().removeClass("open")
}var i=$(this).val().toLowerCase();
g.find("li").filter(function(){var k=$(this);
var j=$(this).text().toLowerCase();
if(j){k.toggle(j.indexOf(i)>-1)
}})
});
$(window).click(function(){h.parent().removeClass("open")
});
g.find("li").on("click",function(){var i=$(this).find("a").text();
if(i){h.val(i);
h.addClass("selected");
h.focus();
h.focusout()
}})
})
}b.find(".field-disabled").click(function(f){f.preventDefault()
})
}})();
var cmpGlobalSiteCustomDigitalMarkets=(function(){return{init:function(){var c=$(".cmp-globalsite-customdigitalmarkets");
var b=$(".cmp-globalsite-demandbase");
if(c.length==0&&b.length!=0){b.remove();
return
}c.each(function(){a($(this))
})
},initFromPromoContainer:function(d){var c=d.find(".cmp-globalsite-customdigitalmarkets");
var b=d.find(".cmp-globalsite-demandbase");
if(c.length==0&&b.length!=0){b.remove();
return
}c.each(function(){a($(this))
})
}};
function a(q){var t=$(".cmp-globalsite-demandbase");
var s="/ngw/syspath-bin/gartner/eloquaservlet";
var g=false;
var d=true;
var w={event:"",eloquaForm:{name:"",type:"",screen:"success"}};
var o=window.dataLayer||[];
var u=q.find("input[name=elqFormName]").val();
var x=q.find(".formType").val();
var j=q.find(".custom-form");
var e="";
var c=j.find("#email-form");
if(c.length){cmpFormValidation.init(c);
p(c)
}j.find("form").each(function(){if(this.id!="email-form"&&this.id!="submit-form"){if($(this).has(".form-control[required]").length>0){$(this).find("#continue").addClass("button-gray")
}cmpFormValidation.init($(this));
i($(this))
}if($(this).find(".cmp-google-auto-complete").length>0){cmpGoogleAutoComplete.init($(this))
}});
var m=j.find("#submit-form");
if(m.length){if(m.has(".form-control[required]").length){m.find("#submit").addClass("button-gray")
}cmpFormValidation.init(m);
v(m)
}if(j.find(".back-button").length>0){j.find(".back-button").each(function(){$(this).click(function(){if(!$(this)[0].hasAttribute("disabled")){y($(this));
CommonFunctions.finalSubmitAjaxLoader(j,false)
}})
})
}function n(A,B){var F=q.find(".configureSuccessStep").val();
var G=q.find(".configureKnownAndUnknownUserSteps").val();
if((/true/i).test(F)){var E=q.find(".success-form");
if((/true/i).test(G)){if(B){E=q.find(".success-form-known")
}else{E=q.find(".success-form-unknown")
}}var C=E.closest(".custom-form-container");
C.find(".email-form").addClass("hidden");
C.find("#submit-form").addClass("hidden");
E.removeClass("hidden")
}else{A.find(".custom-form-container").hide();
var z=A.find(".success-container");
var D=A.find(".email-form");
if(D.length>0){var I="";
var H="";
if(B){I=A.find(".optin-message").val();
H=A.find(".optin-text").val()
}else{I=A.find(".eloqua-message").val();
H=A.find(".eloqua-text").val()
}A.find(".success-message").html(I);
A.find(".success-text").html(H)
}z.show()
}}function l(){j.find(".custom-form-container").hide();
var z=j.find(".error-container");
z.show();
return false
}function h(){var z=FormUtils.getDataJson(j);
var C={};
var A=q.find(".eloquaUrlFieldName").val();
if(A){C[A]=window.location.href
}else{C.url=window.location.href
}var B=$.extend({},z,C);
return B
}function i(z){z.on("form.submit.valid",function(A){b($(this),z)
})
}function v(z){var A=q.find(".activateRecaptcha").val();
z.on("form.submit.valid",function(B){B.preventDefault();
if(A=="true"&&c.length==0){grecaptcha.execute($(this).find(".g-recaptcha").attr("id"));
cmpGlobalSiteCustomDigitalMarkets.recaptchaCallbackHandler=function(){f(false,z)
}
}else{f(false,z)
}return false
})
}function f(D,B){CommonFunctions.finalSubmitAjaxLoader(j,true);
B.find(".back-button").attr("disabled","");
var C=h();
var z="ELOQUA_REGISTER";
if(x=="freelisting"||x=="connect"||x=="customtype"){z="DM_ELOQUA_REGISTER"
}var E=q.find(".activateRecaptcha").val();
var A={eloquaFormParams:JSON.stringify(C),requestType:z,elqFormName:u};
if(E=="true"){A.reCaptchaResponse=q.find('textarea[name="g-recaptcha-response"]').val()
}j.trigger("form.submit.final");
CommonFunctions.postAjaxRequest(s,A,true,j,function(F){r();
var G=q.find(".retUrl").val();
if(G){window.location.href=G
}else{n(j,D)
}B.find(".back-button").removeAttr("disabled")
},function(F){CommonFunctions.finalSubmitAjaxLoader(j,false);
B.find(".back-button").removeAttr("disabled");
l()
})
}function p(z){z.on("form.submit.valid",function(A){var B=q.find(".activateRecaptcha").val();
if(B=="true"){grecaptcha.execute($(this).find(".g-recaptcha").attr("id"));
cmpGlobalSiteCustomDigitalMarkets.recaptchaCallbackHandler=function(){k(z)
}
}else{k(z)
}A.preventDefault()
})
}function k(z){e=z.find(".emailAddress").val();
CommonFunctions.finalSubmitAjaxLoader(z,true);
var A=s+"?requestType=GET_ELOQUA_OPTIN_BY_EMAIL&emailAddress="+e;
CommonFunctions.getAjaxRequest(A,true,z,function(B){B=B.data;
if(B.profileComplete){var C=true;
f(C,z);
return true
}else{b(z);
CommonFunctions.finalSubmitAjaxLoader(z,false);
return false
}},function(B){l();
CommonFunctions.finalSubmitAjaxLoader(z,false);
return true
})
}function y(B){B.parents("form").addClass("hidden");
var z=B.parents("form").prev("form");
z.removeClass("hidden");
z.find(":input:first").focus();
if(z.attr("id")==="email-form"){var A=q.find(".activateRecaptcha").val();
if(A=="true"){grecaptcha.reset()
}}}function b(E){var D=E.next("form");
var F=D.find("input");
var A=D.find("select");
var B=D.find("#continue");
var z=D.find("#submit");
var C="";
E.addClass("hidden");
D.removeClass("hidden");
D.trigger("reset");
F.removeClass("successMessage");
F.removeClass("errorMessage");
A.prop("selectedIndex",0);
A.removeClass("successMessage");
A.removeClass("errorMessage");
if(B&&D.has(".form-control[required]").length){B.addClass("button-gray")
}if(z&&D.has(".form-control[required]").length){z.addClass("button-gray")
}D.find("#submitError").remove();
D.find(".errormMessageText").remove()
}function r(){w.event="formSuccess";
w.eloquaForm.name=u;
var B=q.find(".customDataLayerFormType").val();
if(B){w.eloquaForm.type=q.find(".customDataLayerFormType").val()
}else{if(x=="freelisting"||x=="connect"||x=="customtype"){w.eloquaForm.type="Digital Markets"
}else{w.eloquaForm.type="Eloqua"
}}var z=q.find(".datalayerParams");
z.each(function(){w.eloquaForm[$(this).attr("name")]=$(this).val()
});
o.push(w);
var A=q.find(".activateRecaptcha").val();
if(A=="true"){grecaptcha.reset(q.find(".g-recaptcha").attr("id"))
}}}})();
function onRecaptchaSuccess(a){if(a){cmpGlobalSiteCustomDigitalMarkets.recaptchaCallbackHandler()
}}function onRecaptchaLoad(){if(recaptcha){$(".g-recaptcha").each(function(a,b){$(b).attr("id",a);
grecaptcha.render(b,{sitekey:$(b).attr("data-sitekey")})
});
recaptcha=false
}}var cmpGlobalSiteSignupForm=(function(){return{init:function(){var b=$(".cmp-globalsite-signupform");
b.each(function(){a($(this))
})
}};
function a(r){var s="/ngw/syspath-bin/gartner/eloquaservlet";
var w={event:"",eloquaForm:{name:"",type:"",step:"",screen:"",userType:""}};
var q=window.dataLayer||[];
var o=r.find(".form-control");
var p=r.find("#submit");
var e=r.find(".checkbox-group");
var x=window.navigator.userAgent;
if(x.match(/iPad/i)||x.match(/iPhone/i)){$("body").css("cursor","pointer")
}r.find(".gcom-icon-information").on("click",function(z){z.preventDefault()
});
r.find('[data-toggle="popover"]').popover();
var t=r.find(".form-signup");
var u=r.find(".optinStatus");
var m=r.find(".optedUserFirstName");
var j=r.find(".optedUserLastName");
var b=r.find(".profileComplete");
if(u.length>0){u.val("false")
}if(m.length>0){m.val("")
}if(j.length>0){j.val("")
}if(b.length>0){b.val(false)
}i(t);
cmpFormValidation.init(t.find("#form-one"));
cmpFormValidation.init(t.find("#submit-form"));
e.find("input:checkbox").on("change",function(z){z.preventDefault;
c()
});
o.on("change focusout keyup",function(A){A.preventDefault;
var z=e.find("input:checkbox:checked").length;
if(!z){e.removeClass("check-newsletters");
p.addClass("button-gray")
}});
p.on("click",function(z){z.preventDefault;
c()
});
var v=k(t);
if(!v){f(t)
}function c(){var A=e.find("input:checkbox:checked").length;
if(!A){e.addClass("check-newsletters");
p.addClass("button-gray")
}else{e.removeClass("check-newsletters");
var z=true;
o.each(function(B,C){var E=$(C).hasClass("successMessage");
var D=$(C).prop("disabled");
if(!D&&!E){z=false
}});
if(z){r.find(".submitError").remove();
p.removeClass("button-gray")
}}}function n(A,C){var z=C.find(".success-container");
z.find(".footer").hide();
var B,D;
C.find("form").hide();
C.find(".campaign-heading").hide();
if(A==="ELOQUA"){B=C.find(".eloqua-message").val();
D=C.find(".eloqua-text").val()
}else{if(A==="OPTIN"){B=C.find(".optin-message").val();
D=C.find(".optin-text").val()
}}z.find(".success-message").html(B);
z.find(".success-text").html(D);
z.show();
return false
}function l(A){A.find("form").hide();
A.find(".campaign-heading").hide();
var z=A.find(".error-container");
z.find(".error-message").html("Error!");
z.find(".error-text").html("Error submitting the form. Please try again later.");
z.show();
return false
}function y(z){z.parents("form").fadeOut();
z.parents("form").prev("form").fadeIn("400",function(){z.parents("form").prev("form").find(":input:first").focus()
})
}function d(F){var E=F.next("form");
var G=E.find("input");
var A=E.find("select");
var B=E.find("#continue");
var z=E.find("#submit");
var D=E.find(".stepTwoEmailAddress");
var C="";
F.css("display","none");
E.css("display","block");
C=D.val();
E.trigger("reset");
E.find(".errormMessageText").remove();
G.removeClass("successMessage");
G.removeClass("errorMessage");
A.removeClass("successMessage");
A.removeClass("errorMessage");
B.addClass("button-gray");
if(B){B.addClass("button-gray")
}if(z){z.addClass("button-gray")
}E.find("#submitError").text("");
if(C!=""){D.val(C)
}}function i(z){z.find(".back-button").click(function(){y($(this));
CommonFunctions.finalSubmitAjaxLoader(z,false)
})
}function g(B,z){var C=FormUtils.getDataJson(B)||{};
var D=CommonFunctions.urlParam("cid");
if(D){C.cid=D
}if(!C.refURL){C.refURL=document.referrer||""
}var F={};
if(!z){var E="N";
if(B.find(".dailyInsights").prop("checked")){E="Y"
}var G="N";
if(B.find(".weeklyDigest").prop("checked")){G="Y"
}var H="N";
if(B.find(".research").prop("checked")){H="Y"
}F={flex1:E,flex2:G,flex3:H}
}var A=$.extend({},C,F);
return A
}function f(A){var z;
A.find("#submit-form").on("form.submit.valid",function(D){var B=$(this);
if(!B.find("#submit").hasClass("button-gray")){CommonFunctions.finalSubmitAjaxLoader(B.closest(A),true);
var C=g(B.closest(A),false);
h("ELOQUA",C,B.closest(A));
D.preventDefault();
return false
}})
}function h(A,z,C){var B={eloquaFormParams:JSON.stringify(z),requestType:"ELOQUA_REGISTER",elqFormName:C.find(".elq-form").val()};
CommonFunctions.postAjaxRequest(s,B,true,C,function(D){if(D){CommonFunctions.finalSubmitAjaxLoader(C,false);
w.event=r.find(".eloquaDLSuccessEvent").val();
w.eloquaForm.name=r.find(".elq-form").val();
w.eloquaForm.type=r.find(".eloquaNLType").val();
w.eloquaForm.step=undefined;
w.eloquaForm.screen=r.find(".eloquaDLSuccess").val();
A==="ELOQUA"?w.eloquaForm.userType=r.find(".eloquaDLAnonymousUser").val():w.eloquaForm.userType=r.find(".eloquaDLKnownUser").val();
q.push(w);
n(A,C)
}else{CommonFunctions.finalSubmitAjaxLoader(C,false);
l(C)
}},function(D){CommonFunctions.finalSubmitAjaxLoader(C,false);
l(C)
})
}function k(z){z.find("#form-one").on("form.submit.valid",function(B){var D=$(this);
var A=D.find(".emailAddress");
CommonFunctions.finalSubmitAjaxLoader(D,true);
emailAddress=A.val();
D.next("#submit-form").find(".stepTwoEmailAddress").val(emailAddress);
var C=s+"?requestType=GET_ELOQUA_OPTIN_BY_EMAIL&emailAddress="+emailAddress;
CommonFunctions.getAjaxRequest(C,true,D,function(F){F=F.data;
var H=D.find(".optinStatus");
var G=D.find(".profileComplete");
var K=D.find(".optedUserFirstName");
var J=D.find(".optedUserLastName");
if(H.length>0){H.val(F.optedIn)
}if(K.length>0){K.val(F.firstName)
}if(J.length>0){J.val(F.lastName)
}if(G.length>0){G.val(F.profileComplete)
}if(F.profileComplete){var I=g(D.closest(z),true);
h("OPTIN",I,D.closest(z));
return true
}else{var E=D.find(".step-one-action-button");
d(E.parents("form"));
w.event=r.find(".eloquaDLEvent").val();
w.eloquaForm.name=r.find(".elq-form").val();
w.eloquaForm.type=r.find(".eloquaNLType").val();
w.eloquaForm.step=r.find(".eloquaNLFormStep2").val();
w.eloquaForm.screen=r.find(".eloquaNLPersonalandCompanyInfo").val();
w.eloquaForm.userType=r.find(".eloquaDLAnonymousUser").val();
q.push(w);
CommonFunctions.finalSubmitAjaxLoader(D,false);
return false
}},function(E){l(D);
CommonFunctions.finalSubmitAjaxLoader(D,false);
return true
});
B.preventDefault()
})
}r.find("select[required]").on("invalid",function(z){w.event=r.find(".eloquaDLValEvent").val();
w.formField=$(this).attr("id");
w.validationMessage="Please select an item in the list";
w.eloquaForm.name=r.find(".elq-form").val();
w.eloquaForm.type=r.find(".eloquaNLType").val();
if($(this).attr("id")==="country"){w.eloquaForm.step=r.find(".eloquaNLFormStep2").val();
w.eloquaForm.screen=r.find(".eloquaNLPersonalandCompanyInfo").val()
}delete w.eloquaForm.userType;
q.push(w)
})
}})();
var cmpGlobalSiteQuiz=(function(){return{init:function(){var b=$(".cmp-globalsite-quiz");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(p){var N={byRow:false};
var m={event:"",eloquaForm:{name:"",type:"",step:"",screen:"",userType:""}};
var n=window.dataLayer||[];
var k=-1;
var M={};
var z="/ngw/syspath-bin/gartner/eloquaservlet";
var o=p.find('[name="quizId"]').val();
var y=p.find(".quizWrapper");
var q=p.find(".quizHome");
var D=p.find(".quizHomeCta-js");
var J=p.find(".quizAsset");
if(J.length==0){J=p.find(".quizIcon")
}var g=p.find(".quizInstructions");
var I=p.find(".quizInstructionCta");
var G=p.find(".quizItems");
var u=p.find(".quizResult");
var h=p.find(".navigationCtaWrapper");
var B=p.find(".resultCtaWrapper");
var r=p.find(".quizItemsCtaNext");
var L=p.find(".quizItemsCtaBack");
var d=p.find(".activePage");
var v=p.find(".totalPages");
var A=p.find('[name="questionsSize"]').val();
if(!isNaN(A)){A=Number(A)
}var c=p.find(".form-quiz");
var O=p.find(".viewResultsCta");
var b=p.find(".resultAssetWrapper");
var i=p.find(".retakeQuizCta");
var t=p.find(".mh-group-js");
var f=p.find(".button-group-js");
var C=false;
l();
v.text(A);
x();
D.on("click",function(P){q.hide();
D.parent().addClass("hide");
g.show();
I.parent().removeClass("hide")
});
I.on("click",function(P){g.hide();
I.parent().addClass("hide");
k++;
H();
if(A>0){r.children("a").addClass("button-gray");
L.addClass("hidecta-js");
G.show();
h.removeClass("hide")
}});
r.on("click",function(S){var R=r.children("a").hasClass("button-gray");
if(!R){F();
var Q=k+1;
if(C&&Q==A){j(M)
}else{G.find(".question"+k).addClass("hidden");
k++;
H()
}if(k<A){var P=G.find(".question"+k);
if(P.find("input:radio:checked").length>0){r.children("a").removeClass("button-gray")
}else{r.children("a").addClass("button-gray")
}}}});
L.on("click",function(R){p.find(".quiz-submit-error").hide();
var Q=L.children("a").hasClass("disabled");
if(!Q){F();
var P=G.find(".question"+k);
P.addClass("hidden");
k--;
H();
r.children("a").removeClass("button-gray")
}});
G.find("input:radio").on("change",function(P){r.children("a").removeClass("button-gray")
});
O.on("click",function(P){if(!O.hasClass("button-gray")){CommonFunctions.finalSubmitAjaxLoader(c,true);
var Q=K(c);
j(M,Q)
}});
i.on("click",function(Q){C=true;
d.text("1");
k=0;
b.addClass("hide");
L.addClass("hidecta-js");
var P=G.find(".questionDataWrapper");
P.find("input:radio").prop("checked",false);
P.first().removeClass("hidden");
r.children("a").addClass("button-gray");
M={};
u.hide();
B.addClass("hide");
G.show();
h.removeClass("hide")
});
function j(P,Q){if(C){r.find("#eloqua-final-submit-loading").show()
}var R=p.find(".elq-form").val();
if(Q){Q=JSON.stringify(Q)
}$.ajax({url:z,type:"POST",data:{requestType:"PROCESS_QUIZ_SUBMISSION",quizId:o,formData:Q,questionResponseData:JSON.stringify(P),elqFormName:R},success:function(S){if(S.success){p.find(".quiz-submit-error").hide();
w();
var T=S.data;
if(T){e(T)
}else{s()
}}else{s()
}},error:function(T,S){s()
},complete:function(T,S){if(C){r.find("#eloqua-final-submit-loading").hide()
}else{CommonFunctions.finalSubmitAjaxLoader(c,false)
}}})
}function s(){if(C){y.find(">.quiz-submit-error").show()
}else{c.find(".quiz-submit-error").show()
}}function w(){m.event=p.find(".eloquaDLSuccessEvent").val();
m.eloquaForm.name=p.find(".elq-form").val();
m.eloquaForm.step=undefined;
m.eloquaForm.screen=p.find(".eloquaDLSuccess").val();
n.push(m)
}function F(){if(k>-1&&k<A){var P=p.find(".quizItems .question"+k);
var R=P.find(".answerChoicesWrapper");
var Q=R.find("input:radio");
Q.each(function(T,U){if($(U).is(":checked")){var W=P.find(".questiontext").find("span:eq(1)").text();
var S=P.data("questionid");
var X=$(U).val();
var V=$(U).closest("label").text();
M[S]=X
}})
}}function H(){var P=G.find(".question"+k);
if(k==1){L.removeClass("hidecta-js")
}else{if(k==0){L.addClass("hidecta-js")
}}if(k==A){E()
}else{if(k<A){P.removeClass("hidden");
var Q=k+1;
d.text(Q)
}}}function E(){h.addClass("hide");
G.hide();
c.removeClass("hidden")
}function e(P){if(!P){return false
}G.find(".questionDataWrapper").last().addClass("hidden");
h.addClass("hide");
G.hide();
c.hide();
if(P.resultAsset){u.addClass("moveElement");
b.removeClass("hide");
b.find(".resultAsset").prop("src",P.resultAsset)
}else{u.removeClass("moveElement");
b.addClass("hide")
}if(P.resultName){u.find(".resultText").show();
var Q=u.find(".resultText").text();
if(Q){Q=Q.split(" ")[0]
}u.find(".resultText").text(Q+" "+P.resultName)
}else{u.find(".resultText").hide()
}if(P.resultDescription){u.find(".resultDescription").show();
u.find(".resultDescription").text(P.resultDescription)
}else{u.find(".resultDescription").hide()
}if(P.bestResult){u.find(".bestResult").show();
u.find(".bestResult").text(P.bestResult)
}else{u.find(".bestResult").hide()
}var S=B.find(".quizResultCta");
if(P.resultCtaText){B.removeClass("hide");
S.show();
S.find("a").html(P.resultCtaText);
if(P.resultCtaLink){S.find("a").prop("href",P.resultCtaLink)
}}else{S.hide()
}var R=u.css("height");
u.css("min-height",R);
u.css("height","auto");
u.show()
}function K(R){var Q=FormUtils.getDataJson(R)||{};
var S={};
if(!Q.language&&window.location.pathname.split("/").length>0){S.language=window.location.pathname.split("/")[1]
}if(!Q.refURL){S.refURL=document.referrer
}S.refURL_Host=R.find(".refURL_Host").val()||"";
S.refURL_Path=R.find(".refURL_Path").val()||"";
S.curURL=R.find(".curURL").val()||"";
S.ga_client_id=R.find(".ga_client_id").val()||"";
S.busUnit=R.find(".evtBusUnit").val()||"";
var P=$.extend({},Q,S);
return P
}function l(){cmpFormValidation.init(c.find("#submit-form"))
}function x(){var U=G.find(".questionDataWrapper");
U.css("min-height",0);
t.css("min-height",0);
var S;
if(G.is(":visible")){U.each(function(W,X){if($(X).is(":visible")){S=$(X)
}});
U.removeClass("hidden");
var R=0;
U.each(function(X,Y){$(Y).css("height","");
var W=$(Y).outerHeight();
if(W>R){R=W
}});
U.css("height",R);
U.addClass("hidden");
if(S){S.removeClass("hidden")
}}else{G.css("visibility","hidden");
G.show();
U.removeClass("hidden");
var R=0;
U.each(function(X,Y){$(Y).css("height","");
var W=$(Y).outerHeight();
if(W>R){R=W
}});
U.css("height",R);
G.hide();
U.addClass("hidden");
U.first().removeClass("hidden");
G.css("visibility","")
}var T;
t.each(function(W,X){if($(X).is(":visible")){T=$(X)
}});
t.show();
var Q=0;
t.each(function(X,Y){$(Y).css("min-height","");
$(Y).css("height","");
$(Y).show();
var W=$(Y).outerHeight();
$(Y).hide();
if(W>Q){Q=W
}});
t.css("height",Q);
t.hide();
if(T){T.show()
}var P=0;
var V;
f.each(function(X,Y){if($(Y).is(":visible")){V=$(Y)
}$(Y).removeClass("hide");
$(Y).css("height","");
var W=$(Y).outerHeight();
$(Y).addClass("hide");
if(W>P){P=W
}});
f.parent().css("height",P);
if(V){V.removeClass("hide")
}}$(window).load(function(){x()
});
$(window).resize(function(){x()
})
}})();
var cmpGlobalSiteDynamicFunctionList=(function(){return{init:function(){var b=$(".cmp-globalsite-dynamicfunctionlist");
b.each(function(){a($(this))
})
}};
function a(b){b.find(".btn").click(function(){var c=b.find(".cmp-filter-v2").find(".dropdown").find(".dropdown-menu").find(".active").data("value");
window.open(c,"_self")
})
}})();
var cmpGlobalSiteMma=(function(){return{init:function(){var u=$(".cmp-globalsite-marketingmaturitymodel");
if(u.length==0){return
}u.each(function(){b($(this))
})
}};
function b(B){var w=B.find("#layered_pie")[0];
var y=B.find(".js-svg-trigger");
var x=B.find(".tool-container");
var u=B.find(".banner-container");
var v=B.find(".result-container");
var A=B.find(".assessment-container");
var E=B.find(".browser-support");
var C=CommonFunctions.findUserAgent().isIEorEDGE();
var z={pieDOM:w,textCoords:[{x:450,y:0},{x:650,y:150},{x:670,y:380},{x:550,y:600},{x:320,y:680},{x:60,y:620},{x:-140,y:380},{x:-110,y:180},{x:110,y:0}],svgTrigger:y,higlightedSectors:[],labels:[]};
var D=window.location.search;
if(D&&D.includes("id=")&&!C){u.addClass("hidden");
x.addClass("hidden");
v.removeClass("hidden");
a(B,D,z);
return
}if(C){E.removeClass("hidden");
x.addClass("hidden")
}$.ajax({url:"/ngw/syspath-bin/gartner/digitalmarkets?requestType=GET_ALL_COMPETENCIES",type:"GET",success:function(G){if(G.success){var F=G.data;
if(F){z.competenciesArr=F;
k(F,z)
}}}});
y.on("click",function(F){if(!y.hasClass("disabled")){var G=i(z.higlightedSectors.sort(),z.labels);
$(this).off(F);
$.ajax({url:G,type:"GET",success:function(H){if(H.success){u.addClass("hidden");
x.addClass("hidden");
A.removeClass("hidden");
$(window).scrollTop(A.offset().top);
c(B,H.data,z)
}}})
}})
}function k(v,w){var A=w.higlightedSectors;
var D,z;
$.each(v,function(F,E){w.labels.push(E.name);
var G=n(E.name,w.textCoords[F].x,w.textCoords[F].y);
G.setAttribute("id","text_name_"+F);
w.pieDOM.querySelector("#text_layer").appendChild(G)
});
w.pieDOM.querySelector("#full_pie_layer").addEventListener("click",y,false);
w.pieDOM.querySelector("#full_pie_layer").addEventListener("mouseover",B,false);
w.pieDOM.querySelector("#full_pie_layer").addEventListener("mouseout",x,false);
function y(){var F=event.target.parentNode.getAttribute("id");
if(F===null){return
}var E=F.slice(-1);
if(isNaN(E)){return
}if(A.indexOf(E)>-1){A.splice(A.indexOf(E),1);
u(F,E)
}else{if(A.length<3){C(F,E);
A.push(E);
w.svgTrigger.removeClass("disabled")
}}if(A.length===0){w.svgTrigger.addClass("disabled")
}}function B(){var F=event.target.parentNode.getAttribute("id");
var E=F.slice(-1);
if(D&&z&&A.indexOf(z)===-1||F===null){u(D,z)
}if(A.length<3){C(F,E)
}D=F;
z=E
}function x(){if(D&&z&&A.indexOf(z)===-1){u(D,z)
}}function C(H,F){var G=w.pieDOM.querySelectorAll("#"+H+" .st1");
for(var E=0;
E<G.length;
E++){G[E].setAttribute("class","st1 fill-hover")
}w.pieDOM.querySelector("#outer_wedge_layer_"+F+" .st2").setAttribute("class","st2 stroke-hover");
w.pieDOM.querySelector("#text_name_"+F).style.fill="#002856"
}function u(H,F){var G=w.pieDOM.querySelectorAll("#"+H+" .st1");
for(var E=0;
E<G.length;
E++){G[E].setAttribute("class","st1")
}w.pieDOM.querySelector("#outer_wedge_layer_"+F+" .st2").setAttribute("class","st2");
w.pieDOM.querySelector("#text_name_"+F).style.fill="#6F7878"
}}function n(z,u,A){var w=document.createElementNS("http://www.w3.org/2000/svg","text");
w.setAttributeNS(null,"x",u);
w.setAttributeNS(null,"y",A);
w.setAttributeNS(null,"dy",A);
var v=z.split(" ");
if(v.length>1){w.appendChild(g(v[0],u));
w.appendChild(g(v[1],u))
}else{w.appendChild(g(z,u))
}return w
}function g(y,u){var v=document.createElementNS("http://www.w3.org/2000/svg","tspan");
v.setAttributeNS(null,"x",u);
v.setAttributeNS(null,"dy",25);
var w=document.createTextNode(y);
v.appendChild(w);
return v
}function i(w,x){var u="/ngw/syspath-bin/gartner/digitalmarkets?requestType=GET_ASSESSMENTS_FOR_COMPETENCY";
for(var v=0;
v<w.length;
v++){u+="&competency="+x[w[v]]
}return u
}function c(K,R,x,B){var w=K.find(".assessment-container");
var ae=K.find(".result-container");
var A=K.find(".desired-slider > .slider");
var Z=K.find(".current-slider > .slider");
var D=K.find(".assessment-tabs");
var af=K.find(".question-count");
var G=K.find(".js-back");
var H=K.find(".js-next");
var C=K.find(".js-finish");
var J=K.find(".desired-slider__level > span");
var M=K.find(".desired-slider__description");
var U=K.find(".current-slider__level > span");
var V=K.find(".current-slider__description");
var S=K.find(".question-title");
var F=K.find(".level-descriptions");
var u=K.find("#pieWedge")[0];
var L="rgba(255, 84, 10, 0.5)";
var Y="rgba(0, 40, 86, 0.5)";
var Q=null;
var v=null;
var aa=[];
var T=0;
var N="?id=";
var ac=window.innerWidth<=breakpointMD;
if(B){aa=B;
W();
H.show();
C.addClass("hidden");
G.addClass("hidden")
}else{R.forEach(function(ai,ah){var aj="<li data-item="+ah+"><a>"+ai.name+"</a></li>";
D.append(aj);
var ag=ai.pages;
ag.forEach(function(ak){ak.current=0;
ak.desired=0;
aa.push(ak)
})
})
}O(0);
H.off("click").on("click",function(){$(this).blur();
var ag;
if((T+1)%3==0){ag=P(T);
if(!ag){return
}}W();
T++;
O(T);
if(T===1){G.removeClass("hidden")
}if(T===aa.length-1){H.hide();
C.removeClass("hidden")
}});
G.off("click").on("click",function(){$(this).blur();
if(C.is(":visible")){C.addClass("hidden");
H.show()
}W();
T--;
O(T);
if(T===0){G.addClass("hidden");
return
}});
C.off("click").on("click",function(){var ag=P(T);
if(!ag){return
}w.addClass("hidden");
ae.removeClass("hidden");
var ah=ad();
r(K,ah,x,R,aa)
});
function P(ah){var ai=false;
var ag;
ah=ah-2;
for(ag=0;
ag<3;
ag++){if(parseInt(aa[ah].current)!==0||parseInt(aa[ah].desired)!==0){ai=true
}ah++
}if(!ai){z()
}return ai
}function z(){$("#mmaModal").modal("show")
}function ad(){var ah=0;
var aj=0;
var ag=0;
var ai=0;
aa.forEach(function(ao,an){var ap=parseInt(ao.current);
var ak=parseInt(ao.desired);
if(ak>0&&ap==0){ap=1
}if(ak>0||ap>0){ai++
}ah+=ap;
aj+=ak;
if((an+1)%3==0){var am=ai>0?parseInt(ah/ai):0;
var al=ai>0?parseInt(aj/ai):0;
if(ag==0){N+=R[ag].name+"_"+am+"_"+al
}else{N+="&id="+R[ag].name+"_"+am+"_"+al
}ag++;
ah=0;
aj=0;
ai=0
}});
return N
}function O(aj){E(aj);
var ak=aa[aj];
var ag=ak.questions[0].text;
var ah=ak.questions[0].options;
af.html(ak.pageId);
S.html(ag);
ah.forEach(function(al){var am="<li>"+al.text+"</li>";
F.prepend(am)
});
A.val(ak.desired);
Z.val(ak.current);
p(A[0],L,ak.desired);
p(Z[0],Y,ak.current);
X(ak.desired,u);
for(var ai=1;
ai<=ak.current;
ai++){y(ai,u)
}if(ac){if(aj==0){J.text(1);
U.text(1)
}M.text(ah[0].text);
V.text(ah[0].text)
}}function E(ag){if(ag>=0&&ag<3){D.find("li[data-item=0]").addClass("active").siblings().removeClass("active")
}else{if(ag>=3&&ag<6){D.find("li[data-item=1]").addClass("active").siblings().removeClass("active")
}else{D.find("li[data-item=2]").addClass("active").siblings().removeClass("active")
}}}function W(){A.val(0);
Z.val(0);
ab(u);
I(u);
F.empty();
if(ac){J.text(1);
U.text(1);
M.empty();
V.empty()
}}A.off("input").on("input",function(ah){var ai=ah.target.value;
aa[T].desired=ai;
p($(this)[0],L,ai);
if(Q!==null){I(u)
}X(aa[T].desired,u);
if(ac){var ag=aa[T].questions[0].options;
if(ai==0){J.text(1);
M.text(ag[0].text)
}else{J.text(ai);
M.text(ag[ai-1].text)
}}});
function X(aj,ag){var ai=ag.querySelectorAll(".arc2");
for(var ah=0;
ah<ai.length;
ah++){if(ai[ah].id==aj){ai[ah].setAttribute("class","wt1 arc2 des");
break
}}Q=aj
}function I(ah){var ag=ah.querySelectorAll(".arc2");
for(var ai=0;
ai<ag.length;
ai++){ag[ai].setAttribute("class","wt1 arc2")
}}Z.off("input").on("input",function(ai){var aj=ai.target.value;
aa[T].current=aj;
p($(this)[0],Y,aj);
if(v!==null){ab(u)
}for(var ag=1;
ag<=aj;
ag++){y(ag,u)
}if(ac){var ah=aa[T].questions[0].options;
if(aj==0){U.text(1);
V.text(ah[0].text)
}else{U.text(aj);
V.text(ah[aj-1].text)
}}});
function y(aj,ag){var ai=ag.querySelectorAll(".wt1");
for(var ah=0;
ah<ai.length;
ah++){if(ai[ah].id==aj){ai[ah-1].style.fill="#002856";
ai[ah].style.fill="#002856";
break
}}v=aj
}function ab(ag){var ai=ag.querySelectorAll(".wt1");
for(var ah=0;
ah<ai.length;
ah++){ai[ah].style.fill="#d4d4d4"
}}}function p(v,u,w){v.style.background="linear-gradient(to right, "+u+" 0%, "+u+" "+w*20+"%, #e6e6e6 "+w*20+"%, #e6e6e6 100%)"
}function r(E,z,C,F,B){var w=E.find(".result-container");
var D=E.find(".assessment-container");
var v=E.find(".eloqua-container");
var x=w.find(".return-cta button");
var u=w.find(".scroll-to-eloqua span");
$.ajax({url:"/ngw/syspath-bin/gartner/digitalmarkets"+z+"&requestType=PREVIEW_RESULTS",type:"GET",success:function(G){if(G.success){var H=G.data;
if(H){$(window).scrollTop(w.offset().top);
A(H);
y()
}}}});
function A(H){var G=E.find(".ratings");
var I=1;
$.each(H,function(O,aa){var U=E.find(".competency-template").clone();
var Q=O;
var N=Object.keys(aa);
var Z=0;
var L=0;
var V;
if(N&&N.length>0){Z=N[0];
var T=aa[Z].name;
L=aa[Z].desiredScore;
V=aa[Z].maturityDescription;
U.find(".current-level-title").html("Level "+Z+": "+T);
U.find(".current-element .element-value").html(Z+".0");
U.find(".target-element .element-value").html(L+".0")
}else{V="No Data Found";
U.find(".current-to-desired").hide()
}U.find(".current-level-description").html(V);
G.find(".tab-content #content"+I).append(U);
U.removeClass("competency-template hidden");
var M=G.find(".results-tab #tab"+I);
M.html(Q);
M.removeClass("hidden");
var Y=".tab-content #content"+I;
var P=G.find(Y).find(".graph-section");
var W={name:Q,current:Z,desired:L};
var K=G.find(".accordion-content .item"+I);
K.html(Q);
K.removeClass("hidden");
U.removeClass("competency-template hidden");
var J=U.clone();
var S=J.find(".current-level-description").detach();
J.find(".graph-section").append(S);
var R=".accordion-content #accordionContent"+I;
G.find(R).html(J);
G.find(Y).html(U);
f(P,C,W,H);
var X=G.find(R).find(".graph-section");
f(X,C,W,H);
U.removeClass("competency-template hidden");
I++
});
G.find(".results-tab .hidden").closest("li").remove();
$(".results-tab a").click(function(J){J.preventDefault();
J.stopPropagation();
$(this).tab("show")
})
}function y(){var H=v.find(".bgColor").val();
v.find(".eloquaForm").css("background-color",H);
v.removeClass("hidden");
var G=window.location.href+z;
v.find(".retUrl").val(G);
v.off("eloqua-form:success").on("eloqua-form:success",function(){v.addClass("hidden");
$(window).scrollTop(w.offset().top);
a(E,z,C)
})
}x.on("click",function(){w.addClass("hidden");
v.addClass("hidden");
D.removeClass("hidden");
c(E,F,C,B)
});
u.on("click",function(){$("html, body").animate({scrollTop:v.position().top})
})
}function f(y,x,A,z){var v=y.find("#layered_pie")[0];
var B=x.labels;
var u=[];
var w=[];
$.each(z,function(E,F){var D=0;
var G=0;
if(!jQuery.isEmptyObject(F)){var I=Object.keys(F);
var H=I[0];
D=F[H].currentScore;
G=F[H].desiredScore
}var C={name:E,current:D,desired:G};
u.push(C)
});
u.forEach(function(C){if(C.name!=A.name){w.push(C)
}});
B.forEach(function(D,C){var E=n(D,x.textCoords[C].x,x.textCoords[C].y);
E.setAttribute("id","text_name_"+C);
v.querySelector("#text_layer").appendChild(E)
});
d(B,v,A,x);
if(w.length===1){e(v,B,w[0])
}if(w.length===2){e(v,B,w[0]);
e(v,B,w[1])
}}function d(A,E,x,C){var w=A.indexOf(x.name);
var u=[].slice.call(E.querySelectorAll("#full_pie_layer_"+w+" .st1")).reverse();
if(x.current>0){for(var y=x.current-1;
y<x.desired;
y++){u[y].style.fill="#d3d3d3"
}}for(var y=0;
y<x.current;
y++){u[y].style.fill="#002856"
}var D=[].slice.call(E.querySelectorAll("#outside_arc_layer_"+w+" .st0")).reverse();
if(x.desired){var B=D[x.desired-1];
B.style="stroke-dasharray:8; stroke:#FF540A; stroke-width : 8";
var z=B.cloneNode(true);
E.querySelector("#outer_wedge_layer").appendChild(z)
}var v=E.querySelector("#text_name_"+w);
v.style.fill="#002856"
}function e(I,B,y){var x=B.indexOf(y.name);
var w=y.desired;
var E=y.current;
var C=I.querySelector("#full_pie_layer_"+x);
var u=[].slice.call(I.querySelectorAll("#full_pie_layer_"+x+" .st1")).reverse();
for(var z=0;
z<E;
z++){u[z].style.fill="#d3d3d3"
}if(w){var H=[].slice.call(I.querySelectorAll("#outside_arc_layer_"+x+" .st0")).reverse();
var D=H[w-1];
D.style="stroke-dasharray:8; stroke:#d3d3d3; stroke-width : 8";
var A=D.cloneNode(true);
I.querySelector("#outer_wedge_layer").appendChild(A)
}var v=I.querySelector("#text_name_"+x);
if(window.innerWidth>=breakpointSM){C.style.cursor="pointer";
C.addEventListener("mouseover",G,false);
function G(){s(E,u,w,A,v)
}C.addEventListener("mouseout",F,false);
function F(){q(E,u,w,A,v)
}C.addEventListener("click",function(){o(I,v)
},false)
}}function s(x,y,v,z,u){for(var w=x-1;
w<v;
w++){y[w].style.fill="#d3d3d3"
}for(var w=0;
w<x;
w++){y[w].style.fill="#002856"
}z.style="stroke-dasharray:8; stroke:#FF540A; stroke-width : 8";
u.style.fill="#002856"
}function q(x,y,v,z,u){for(var w=x-1;
w<v;
w++){y[w].style.fill="#f4f4f4"
}for(var w=0;
w<x;
w++){y[w].style.fill="#d3d3d3"
}z.style="stroke-dasharray:8; stroke:#d3d3d3; stroke-width : 8";
u.style.fill="#6F7878"
}function o(w,v){var x=v.textContent;
var u=$(w).parents(".result-container").find(".results-tab li");
u.each(function(z,A){var y=A.textContent.replace(/ /g,"");
if(y===x){$(this).children().click()
}})
}function t(C,A,x,y){var B=C.find("#layered_pie")[0];
var v=y.resultData;
var u=[];
var w=[];
var z=[];
$.each(v,function(F,G){var E=F;
var J=Object.keys(G);
var I=J[0];
var H=m(J);
var D={};
D.name=E;
D.current=I;
D.desired=H;
u.push(D)
});
$.each(y.competencyDisplayOrder,function(D){z.push(D)
});
u.forEach(function(D){if(D.name!=x.name){w.push(D)
}});
z.forEach(function(E,D){var F=n(E,A.textCoords[D].x,A.textCoords[D].y);
F.setAttribute("id","text_name_"+D);
B.querySelector("#text_layer").appendChild(F)
});
d(z,B,x,A);
if(w.length===1){e(B,z,w[0])
}if(w.length===2){e(B,z,w[0]);
e(B,z,w[1])
}}function l(y,x,z){var w=y.find("#layered_pie")[0];
w.setAttribute("width","130%");
var v=z.resultData;
var u=[];
var A=[];
$.each(v,function(D,E){var C=D;
var H=Object.keys(E);
var G=H[0];
var F=m(H);
var B={};
B.name=C;
B.current=G;
B.desired=F;
u.push(B)
});
$.each(z.competencyDisplayOrder,function(B){A.push(B)
});
A.forEach(function(C,B){var D=n(C,x.textCoords[B].x,x.textCoords[B].y);
D.setAttribute("id","text_name_"+B);
w.querySelector("#text_layer").appendChild(D)
});
u.forEach(function(B){d(A,w,B,x)
})
}function a(z,C,y){var B=z.find(".final-svg-container");
var x=z.find(".download-cta");
var w=z.find(".result-container");
var A=w.find(".return-cta");
var u=w.find(".scroll-to-eloqua");
A.remove();
u.remove();
x.removeClass("hidden");
x.off("click").on("click",function(){h(z,C)
});
$.ajax({url:"/ngw/syspath-bin/gartner/digitalmarkets"+C+"&requestType=GET_RESULT_PAGE_DATA",type:"GET",success:function(D){if(D.success){var E=D.data;
if(E){l(B,y,E);
v(E)
}}}});
function v(F){var E=F.resultData;
var I=Object.keys(E);
var H=F.levels;
var D=z.find(".ratings");
var G=1;
$.each(E,function(R,af){var Z=z.find(".competency-template").clone();
var T=R;
var ag=Object.keys(af);
var J=ag.length;
var ac=0;
var N=0;
var aa;
var U=1;
var O=J+" step";
if(ag&&ag.length>0){ac=ag[0];
var W=H[ac];
N=m(ag);
aa=af[ac].maturityDescription;
Z.find(".current-level-title").html("Level "+ac+": "+W);
Z.find(".current-element .element-value").html(ac+".0");
Z.find(".target-element .element-value").html(N+".0")
}else{aa="No Data Found";
Z.find(".current-to-desired").hide();
Z.find(".level-jump-steps").hide()
}var X={};
X.name=T;
X.current=ac;
X.desired=N;
Z.find(".current-level-description").html(aa);
Z.find(".advice-wrapper").removeClass("hidden");
if(ac<5){if(J>1){O+="s"
}var ae=Z.find(".nonClientContactUsText").val();
var L="You have "+O+" to go in order to progress to your target maturity level."+ae;
Z.find(".level-jump-steps").html(L);
$.each(af,function(aj,ai){var ao=parseInt(ai.level);
var am=H[ao];
var al=H[ao+1];
var ah=ai.recommendedReadings;
var an=ai.moveToNextLevel;
var ak=z.find(".recommendation-wrapper-template").clone();
ak.find(".step-header .step-num").html("Step "+U);
ak.find(".step-header .step-text").html(H[ao]+" to "+H[ao+1]);
for(R=0;
R<Math.max(ah.length,an.length);
R++){if(R<an.length){ak.find(".actions").append("<div class='action p-small'><span class='text'>"+an[R].advice+"</span></div>")
}if(R<ah.length){ak.find(".tools").append("<div class='tool p-small'><a href='"+ah[R].url+"' >"+ah[R].description+"</a></div")
}}Z.find(".recommendations").append(ak);
ak.removeClass("recommendation-wrapper-template hidden");
U++
})
}else{var ad=Z.find(".expertContactUsText").val();
Z.find(".level-jump-steps").html(ad)
}var Q=D.find(".results-tab #tab"+G);
Q.html(T);
Q.removeClass("hidden");
var M=D.find(".accordion-content .item"+G);
M.html(T);
M.removeClass("hidden");
Z.removeClass("competency-template hidden");
var K=Z.clone();
var V=K.find(".current-level-description").detach();
K.find(".graph-section").append(V);
var Y=".tab-content #content"+G;
var P=".accordion-content #accordionContent"+G;
D.find(P).html(K);
D.find(Y).html(Z);
var S=D.find(Y).find(".graph-section");
var ab=D.find(P).find(".graph-section");
t(S,y,X,F);
t(ab,y,X,F);
G++
});
D.find(".results-tab .hidden").closest("li").remove();
$(".results-tab a").click(function(J){J.preventDefault();
J.stopPropagation();
$(this).tab("show")
})
}}function h(v,w){var u=v.find(".final-svg-container #layered_pie")[0];
var x=w.substring(1);
$.ajax({url:"/ngw/syspath-bin/gartner/getoctetstream?requestType=GET_RESULT_PDF",type:"POST",data:{resultSvg:j(u),queryParams:x},success:function(B,z,E){var A="";
var F=E.getResponseHeader("Content-Disposition");
if(F&&F.indexOf("attachment")!==-1){var D=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
var C=D.exec(F);
if(C!=null&&C[1]){A=C[1].replace(/['"]/g,"")
}}if(!A){A="marketing-maturity-assessment.pdf"
}if(B){var y=document.createElement("a");
y.href="data:application/octet-stream;base64,"+B;
y.download=A;
document.body.appendChild(y);
y.click()
}},error:function(y){}})
}function j(w){var v=(new XMLSerializer).serializeToString(w);
var u=window.btoa(v);
return"data:image/svg+xml;base64,"+u
}function m(u){return Math.min(5,parseInt(u[u.length-1])+1)
}})();
var cmpImageGallery=(function(){return{init:function(){a()
},copyToClipboard:function(c){var b=document.createElement("textarea");
document.body.appendChild(b);
b.value=c;
b.select();
document.execCommand("copy");
document.body.removeChild(b)
}};
function a(){}})();
var cmpGlobalSiteButton=(function(){return{init:function(){var b=$(".cmp-globalsite-button");
if(b.length==0){return
}b.each(function(){a($(this))
})
},initFromPromoContainer:function(c){var b=c.find(".cmp-globalsite-button");
if(b.length==0){return
}b.each(function(){a($(this))
})
}};
function a(d){var c=d.find(".btn-clipboard");
var f=c.html();
var b=d.find(".copy-success-text").val();
c.tooltip({title:b,trigger:"manual"});
var e;
c.on("click",function(k){k.preventDefault();
var g=d.find(".clipboard-text");
var j=window.getSelection();
var h=document.createRange();
var i=$("<div>");
$(this).tooltip("show");
i.css({position:"absolute",left:"-3000px",top:"-3000px"});
i.text(g.val());
$("body").append(i);
h.selectNodeContents(i[0]);
j.removeAllRanges();
j.addRange(h);
document.execCommand("copy");
j.removeAllRanges();
i.remove()
});
c.mouseleave(function(){$(this).tooltip("hide")
})
}})();
var cmpGlobalSiteGlossaryAllTerm=(function(){return{init:function(){var b=$(".cmp-globalsite-glossaryallterm");
b.each(function(){a($(this))
})
}};
function a(h){var c=h.find(".searched-content");
var g=c.find(".search-result-container");
var i=h.find(".search-input");
var j=g.find(".search-item");
var f=c.find(".no-result-found-message");
var b=0;
e();
h.find(".keys li").on("click",function(){if($(this).hasClass("disabled")){return
}var l=$(this).find("a").text();
i.val("");
j.show();
g.hide();
c.find("."+l).show();
f.hide()
});
h.find(".search-box .close").click("on",function(){g.show();
j.show();
f.hide();
i.val("");
i.focus()
});
i.on("keyup",function(){k()
});
function d(){var n=i.val().toUpperCase();
g.show();
j.hide();
j.filter(function(o){var p=$(this).find("a").attr("data-val").toUpperCase();
return p.indexOf(n)>-1
}).show();
var m=true;
g.each(function(){if($(this).children(":visible").length>1){$(this).show();
m=false
}else{$(this).hide()
}});
if(m){var l=c.find(".no-result-found-text").text()+n+".";
f.text(l);
f.show()
}else{f.hide()
}e()
}function k(){clearTimeout(b);
b=setTimeout(function(){d()
},500)
}function e(){j.matchHeight()
}}})();
var cmpGlobalSitePromotionType=(function(){return{init:function(){var b=$(".cmp-globalsite-promotion-type");
if(b.length==0){return
}b.each(function(){a($(this))
})
},initPromoComponents:function(b){a(b);
cmpGlobalSiteButton.initFromPromoContainer(b);
cmpGlobalSiteBackgroundContainer.initFromPromoContainer(b);
cmpGlobalSiteCustomFormField.initFromPromoContainer(b);
cmpGlobalSiteCustomDigitalMarkets.initFromPromoContainer(b)
}};
function a(h){var d=h.find(".popup-trigger");
var g=h.find(".author-popup-trigger");
var i=h.find(".chat-popup").length>0;
var k=h.find(".expand-collapse-button");
if(i){c()
}d.on("click",function(l){l.preventDefault();
e()
});
g.on("click",function(l){l.preventDefault();
e()
});
d.click();
h.on("click",".promo-modal-close",function(){h.find(".gcom-icon-x-circle").closest("button").click()
});
h.find(".tab-heading").on("click",function(){if(k.hasClass("gcom-icon-angle-down")){b(k);
sessionStorage.setItem("chatPopupState","collapsed");
h.find(".tab-heading").trigger("chatbox.collapsed")
}else{f(k);
sessionStorage.setItem("chatPopupState","expanded");
h.find(".tab-heading").trigger("chatbox.expanded")
}j()
});
h.find(".phone-number").on("click",function(){h.trigger("chatbox.phone.clicked")
});
h.find(".free-text").on("click",function(){h.trigger("chatbox.contact.clicked")
});
function j(){localStorage.setItem("chatpopupSessionState",JSON.stringify(sessionStorage));
localStorage.removeItem("chatpopupSessionState")
}function c(){var n=h.find(".expand-collapse-button");
var m=sessionStorage.getItem("chatPopupState");
var l=["chatPopupState"];
CommonFunctions.registerStorageEventListener("getChatpopupSessionState","chatpopupSessionState",l,function(){var o=sessionStorage.getItem("chatPopupState");
if(o){var p=h.find(".expand-collapse-button");
if(o==="collapsed"){b(p)
}else{if(o==="expanded"){f(p)
}}}});
localStorage.setItem("getChatpopupSessionState",Date.now());
if(m){if(m==="collapsed"){b(n)
}else{if(m==="expanded"){f(n)
}}}else{f(n)
}}function f(l){l.removeClass("gcom-icon-angle-up").addClass("gcom-icon-angle-down");
h.find(".tab-body").removeClass("collapsed");
h.find(".tab-heading .close").addClass("hidden")
}function b(l){h.find(".tab-body").addClass("collapsed");
l.removeClass("gcom-icon-angle-down").addClass("gcom-icon-angle-up");
h.find(".tab-heading .close").removeClass("hidden")
}function e(){var n=h.find(".modal");
n.modal("show");
var l=$(window).height()/1.5;
var m=window.innerWidth/1.4;
n.find(".modal-body").css({"max-height":l});
n.find(".modal-body").css({"max-width":m});
n.find(".modal-body").css({height:"auto"});
n.find(".modal-body").css({width:"auto"})
}}})();
var cmpGlobalSiteBlogsSearch=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-globalsite-blogssearch");
if(b.length==0){return
}CommonFunctions.onBreakpointChange(function(){})
}})();
var cmpCareerHeader=(function(){return{init:function(){a()
}};
function a(){var b=$(".cmp-globalsite-careerheader");
var c=b.find(".mobile-dropdown");
c.on("click",function(e){e.stopPropagation()
});
b.find(".js-collapse").on("click",function(e){e.preventDefault();
e.stopPropagation();
$($(this).attr("data-target")).collapse("show");
$($(this).attr("data-target")).collapse("hide")
});
function d(){if(window.innerWidth<=1024){c.addClass("dropdown-menu full-width-dropdown")
}else{c.removeClass("dropdown-menu full-width-dropdown")
}}$(window).resize(function(){d()
});
d()
}})();