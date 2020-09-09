var cmpConferencesiteConferenceHeader=(function(){return{init:function(){var b=$(".cmp-conferencesite-conferenceheader");
b.each(function(){a($(this))
})
}};
function a(N){var u={event:"",user:""};
var d=window.dataLayer||[];
var Z=N.find("#user");
if(Z.length>0){u.event="userLogin";
u.user=JSON.parse(Z.val());
d.push(u)
}var y=window.innerWidth;
var aB;
var ac;
var ag;
var t;
var l;
var ab;
var r;
function I(){if(y>breakpointMD){aB=false;
ac=false;
ag=true
}if(y<=breakpointMD&&y>breakpointSM){aB=false;
ac=true;
ag=false
}if(y<=breakpointSM){aB=true;
ac=false;
ag=false
}if(!l==""){if(aB){t="mobile"
}if(ac){t="tablet"
}if(ag){t="desktop"
}if(t===l){ab=false
}else{ab=true
}}if(aB){l="mobile"
}if(ac){l="tablet"
}if(ag){l="desktop"
}}I();
var x=window.location.pathname.replace(".html","");
var X=N.find(".navigation-item");
X.each(function(aE){if(typeof $(this).attr("href")!=="undefined"){var aF=$(this).attr("href").replace(".html","");
if(x===aF){if(!$(this).hasClass("register")){$(this).find("span").first().addClass("selected-option");
$(this).parent("li").parent("ul").prev("a").find("span").first().addClass("selected-option")
}}else{if(x.startsWith(aF)&&typeof $(this).attr("data-nav-home")==="undefined"){if(!$(this).hasClass("register")){$(this).find(".nav-text").first().addClass("selected-option")
}}}}});
var O=N.find(".subsub-navigation-item");
O.each(function(aE){if(typeof $(this).attr("href")!=="undefined"){var aF=$(this).attr("href").replace(".html","");
if(x.startsWith(aF)){if(!$(this).hasClass("register")){$(this).find(".nav-text").first().addClass("selected-option");
subParent=$(this).parent("li").parent(".dropdown-subsubmenu").parent(".dropdown-submenu");
parent=subParent.parent(".dropdown-menu").parent(".dropdown");
parent.find(".nav-text").first().addClass("selected-option");
subParent.find(".nav-text").first().addClass("selected-option")
}}}});
var ad=$(window);
var A;
var an=false;
var k;
var L;
var B;
var T;
var S;
var i;
var E=false;
var av;
var aD;
var aA;
var R;
var z="";
var P=false;
var p=N.find(".main-menu>.navbar-nav");
var Q=N.find(".navbar");
var j=N.find(".main-menu .navbar-nav>li:first-child a");
var J=N.find(".gartner-logo .logo img");
var aC=N.find(".main-menu .navbar-nav>*");
var aa=N.find(".event-details");
var e=N.find(".affix-logo");
var n=e.outerWidth(true);
var w=N.find(".navigation");
var q=N.find(".nav-bg");
var K=N.find(".main-menu .navbar-nav>li>a");
var M=N.find("li.header-button a");
var W=N.find(".main-menu");
var h=N.find(".nav-text .l-bar");
var f=N.find(".nav-text .r-bar");
var ai=N.find(".navbar-collapse");
var C=$(".cmp-common-cookiebanner");
var g=$(".emt-container-inner");
var c=$(".cmp-common-cookiebanner").find(".cookie-alert");
var ap=0;
if(w.length>0){ap=w.offset().top
}var am=true;
function au(){A=ad.scrollTop();
if(w.hasClass("affix")||w.hasClass("affix-top")){an=true;
if(aB){ap=0;
if(c.is(":visible")){ap=ap+$(".cmp-common-cookiebanner").height()
}}else{ap=ai.height();
if(c.is(":visible")){if(ac){if(!C.hasClass("tab-fixed")){C.addClass("tab-fixed");
g.attr("style","top: "+C.height()+"px; position: relative");
w.attr("style","top: "+C.height()+"px;")
}}else{C.removeClass("tab-fixed");
g.removeAttr("style");
w.removeAttr("style")
}ap=ap+C.height()
}}am=true
}else{if(am===false&&w.length>0){ap=w.offset().top;
am=true
}an=false
}if(A>=ap||((aB||ac)&&!c.is(":visible"))){if(an===true){return
}V();
an=true
}else{if(an===false){return
}w.removeClass("affix");
w.addClass("affix-top");
V();
an=false
}}au();
function b(){m.parent().first().addClass("open");
ar=true
}function s(){if(D){m.parent().siblings().removeClass("open");
al.removeClass("open")
}else{U.removeClass("open");
al.removeClass("open");
ar=false
}}function ae(){if(!m.parent().first().hasClass("open")){r=false;
s();
if(D){b()
}}else{az=false;
r=true;
if(m.hasClass("dropdown-parent")){al.removeClass("open")
}}}var D=false;
var az=false;
var m;
var ar;
var aq;
var aw=false;
var v=N.find(".navigation-item");
var U=N.find(".js-hover-menu>li");
var al=N.find(".dropdown-menu li");
var F=N.find(".navbar-toggle");
var at=N.find(".site-nav");
var G=N.find(".wrapper-fixed");
var ah;
F.click(function(){if(!ag){if(!N.hasClass("fixed")){N.addClass("fixed")
}else{N.removeClass("fixed");
$(window).scrollTop(0)
}}});
M.hover(function(){if(ag){m=$(this);
s()
}});
v.mouseenter(function(aE){if(ag){aE.stopPropagation();
D=true;
az=true;
m=$(this);
if(ar===true){ae()
}}});
v.hover(function(){if(ag){if(!aq){aq=window.setTimeout(function(){if(!aw){ae()
}},500)
}}},function(){if(ag){if(aq){window.clearTimeout(aq);
aq=null
}}});
W.mouseleave(function(){D=false;
if(ag){setTimeout(function(){if(D===true){return
}s()
},500)
}});
v.click(function(aE){m=$(this);
D=true;
if(m.attr("href").length==1){aE.preventDefault();
if(m.parent().first().hasClass("open")&&!ag){m.parent().first().removeClass("open")
}else{s();
b()
}}});
function aj(){K.css({"padding-right":""});
K.css({"padding-left":""});
M.css({"margin-left":""});
M.css({"margin-right":""});
h.css({left:""});
f.css({right:""});
if(P===false){W.removeClass("event-new-line")
}}function V(){if(ag&&z!==""){if(z!==""){K.css({"padding-left":z+"px"});
K.css({"padding-right":z+"px"});
M.css({"margin-left":z+"px"});
M.css({"margin-right":z+"px"});
if(P===true){W.addClass("event-new-line")
}return
}}else{if(!ag){aj();
return
}}aj();
y=window.innerWidth;
W.removeClass("event-new-line");
R=W.width();
aA=p.outerWidth(true);
eventDetailsWidth=aa.width();
n=e.outerWidth(true);
k=0;
L=0;
B=0;
T=0;
S=0;
i=0;
if(ag){K.each(function(){if($(this).is(":visible")){L=L+$(this).outerWidth(true);
k++
}});
L=L+k;
aC.each(function(){if($(this).is(":visible")){av=$(this)
}});
if((R-L-5)<=eventDetailsWidth&&!w.hasClass("marketing-sym")){W.addClass("event-new-line");
P=true
}else{P=false;
W.removeClass("event-new-line")
}if(N.find(".attendees-dropdown").is(":visible")){av=N.find(".attendees-dropdown>a")
}if((R-n)<(aA+25)){B=L+22-(R-n);
T=parseInt(K.css("padding-right"));
originalBarPad=parseInt(f.css("right"));
S=B/k-1;
S=Math.ceil(S/2);
i=T-S;
if(i<1){i=1
}if(i<15){barPad=originalBarPad+(11-i);
h.css({left:barPad+"px"});
f.css({right:barPad+"px"})
}else{h.css({left:""});
f.css({right:""})
}K.css({"padding-left":i+"px"});
K.css({"padding-right":i+"px"});
M.css({"margin-left":i+"px"});
M.css({"margin-right":i+"px"});
z=i
}else{aj()
}}}function ak(){G.css({top:""});
q.css({top:""});
W.css({"padding-bottom":""});
w.css({height:""});
C.removeClass("tab-fixed");
w.removeAttr("style");
g.removeAttr("style")
}var o;
function H(){if(ac&&c.is(":visible")){windowScroll=ad.scrollTop();
var aE=0;
if(w.length>0){aE=w.offset().top
}adjustNavHeight=G.outerHeight()+aE-windowScroll;
q.css({top:C.height()+G.outerHeight()+"px"});
W.css({"padding-bottom":adjustNavHeight+"px"})
}else{ak()
}}if(c){var Y=c.find(".close-cookie-alert");
Y.click(function(){if(!ag){ak()
}if(w.length>0){ap=w.offset().top
}})
}var af=N.find(".nav-conf-title");
var ao;
var ay;
if(af.length>0){ao=af.text();
if(ao.indexOf("201")>=0){ay=ao.split("20")[0][0];
af.text(ay)
}}$(window).resize(function(){y=window.innerWidth;
I();
D=false;
ar=false;
am=false;
s();
au();
if(ag){z="";
V()
}if(aB||ac){aj()
}ak();
H()
});
var ax=false;
$(window).load(function(){au();
V();
H();
$(window).scroll(function(){au();
if(aB||ac){H()
}})
})
}})();
var cmpConferencesiteHero=(function(){return{init:function(){var b=$(".cmp-conferencesite-conferencehero");
b.each(function(){a($(this))
})
}};
function a(i){var d=$(".cmp-conferencesite-conferenceheader");
var g=i.find(".registration");
if(g.length){var e=i.find(".not-loggedin");
var c=i.find(".loggedin");
var m=d.find("#eventDetailAuth").val();
if(m==="true"){e.hide();
c.show()
}else{c.hide();
e.show()
}}var l=i.find(".tlstr__wrapper");
if(l.length>0){f(l);
$(window).resize(function(){f(l)
})
}var h=i.find(".hero-phone-number-1");
if(h){var k=h.attr("href");
if(k){k=k.replace(/%20|\D/g,"");
h.attr("href","tel:"+k)
}}var b=i.find(".hero-phone-number-2");
if(b){var j=b.attr("href");
if(j){j=j.replace(/%20|\D/g,"");
b.attr("href","tel:"+j)
}}function f(p){var q=p.find(".tlstr__container");
var o=p.find(".tlstr__left");
var n=o.find("span");
$(window).load(function(){var s=o.width();
var r=n.width();
if(window.innerWidth>=breakpointSmall){if(s!==r){var t=n.width()+102;
o.css("max-width",t);
q.css("visibility","visible")
}else{q.css("visibility","visible")
}}else{q.css("visibility","visible")
}})
}}})();
var cmpConferencesiteLeadGen=(function(){return{init:function(){var b=$(".cmp-conferencesite-leadgen");
b.each(function(){a($(this))
})
}};
function a(o){var x=$(".cmp-globalsite-demandbase");
if(o.length==0){if(x.length>0){x.remove()
}return
}var n="CAMPAIGN";
var k="QUICK_COLLECT";
var m="WARMING_CAMPAING";
var w="/ngw/syspath-bin/gartner/eloquaservlet";
var D={event:"",eloquaForm:{name:"",type:"",step:"",screen:"",userType:""}};
var u=window.dataLayer||[];
var C=o.find(".form-campaign");
var g=o.find(".form-qc");
var B=o.find(".form-warmingCampaing");
var b=o.find(".form-verticalcampaign");
var E=o.find(".form-becomeanexhibitor");
var h=o.find(".match-height-target");
var A;
var y=["North America","Australia","Brazil","Europe","India","Japan","Middle East","South Africa"];
var t;
var c=[];
if(C.length){l(n,C);
var z=p(n,C);
if(!z){f(n,C)
}cmpFormValidation.init(C.find("#form-one"));
cmpFormValidation.init(C.find("#submit-form"))
}if(g.length){l(k,g);
var z=p(k,g);
if(!z){f(k,g)
}cmpFormValidation.init(g.find("#form-one"));
cmpFormValidation.init(g.find("#submit-form"))
}if(B.length){l(m,B);
var z=p(m,B);
if(!z){f(m,B)
}cmpFormValidation.init(B.find("#submit-form"))
}if(b.length>0){v(b)
}else{if(E.length>0){v(E)
}}if(C.length===0&&g.length===0&&B.length===0&&b.length===0&&E.length===0){return
}function s(K,J,M){M.closest(".eloquaForm").addClass("no-background-image");
M.find("form").hide();
M.find(".campaign-heading").hide();
M.find(".footer-span").hide();
var I=M.find(".success-container");
var L,N;
if(K==="ELOQUA"){L=M.find(".eloqua-message").val();
N=M.find(".eloqua-text").val()
}else{if(K==="OPTIN"){L=M.find(".optin-message").val();
N=M.find(".optin-text").val()
}}M.find(".footer-span").show();
I.find(".success-message").html(L);
I.find(".success-text").html(N);
I.show();
return false
}function q(J){J.find("form").hide();
J.find(".campaign-heading").hide();
var I=J.find(".error-container");
I.find(".error-message").html("Error!");
I.find(".error-text").html("Error submitting the form. Please try again later.");
I.show();
return false
}function H(J){J.parents("form").fadeOut();
var I=J.parents("form").prev("form");
if(I.is("#form-one")){o.find(".eloquaForm").removeClass("no-background-image");
I.fadeIn("400",function(){I.find(":input:first").focus();
I.find(":input:first").focusout()
})
}else{I.fadeIn("400",function(){I.find(":input:first").focusout()
})
}}function d(L){var K=L.next("form");
var M=K.find("input");
var J=K.find("select");
var I=K.find("#submit");
L.css("display","none");
o.find(".eloquaForm").addClass("no-background-image");
K.css("display","block");
K.trigger("reset");
M.removeClass("successMessage");
M.removeClass("errorMessage");
J.removeClass("successMessage");
J.removeClass("errorMessage");
J.prop("selectedIndex",0);
I.addClass("button-gray");
K.find("#submitError").text("");
K.find(".bacError").text("");
A=h.css("height");
h.css("height","")
}$.urlParam=function(I){var J=new RegExp("[?&]"+I+"=([^&#]*)").exec(window.location.href);
if(J==null){return null
}else{return decodeURI(J[1].replace(/[^a-zA-Z0-9_]+/g,""))||0
}};
function l(I,J){J.find(".back-button").each(function(){$(this).click(function(){H($(this));
CommonFunctions.finalSubmitAjaxLoader(J,false);
h.css("height","auto")
})
})
}function i(Q,L,I){var P=FormUtils.getCommonFormData(L)||{};
var J=window.location.href.split("/")[5].toUpperCase();
var O=new Date(L.find("#lead-gen-year").val());
if(Q===k){P.campaignName="EVT_"+J+"_"+O.getFullYear()+"_"+P.mktgCode+"_QC"
}if(!P.refURL){P.refURL=document.referrer
}var N={emailAddress:L.find("#email-address").val()};
if(Q===m){N.jobTitle=L.find("#job-title").val();
N.jobFunction=L.find("#department").val();
N.jobRole=L.find("#jobRole").val()
}var M={};
if(!I){M=FormUtils.getFormSpecificData(L)
}var K=$.extend({},P,N,M);
return K
}function f(I,J){J.find("#submit-form").on("form.submit.valid",function(L){CommonFunctions.finalSubmitAjaxLoader(J,true);
var K=i(I,J,false);
j("ELOQUA",K,I,J);
L.preventDefault();
return false
})
}function j(K,J,I,M){var L={eloquaFormParams:JSON.stringify(J),requestType:"ELOQUA_CONFERENCE_REGISTER",elqFormName:M.find("#lead-gen-elqFormName").val()};
CommonFunctions.postAjaxRequest(w,L,true,M,function(N){if(N){CommonFunctions.finalSubmitAjaxLoader(M,false);
var P=M.closest("section");
if(P[0].hasAttribute("data-hotjar")){P.removeAttr("data-hotjar",true)
}s(K,I,M);
D.event=M.find("#eloquaDLSuccessEvent").val();
D.eloquaForm.name=M.find("#lead-gen-elqFormName").val();
D.eloquaForm.step=undefined;
D.eloquaForm.screen=M.find("#eloquaDLSuccess").val();
if(M===C||M===B){D.eloquaForm.type=M.find("#elqCampaignType").val()
}else{if(M===g){D.eloquaForm.type=M.find("#elqQCType").val()
}else{D.eloquaForm.type="campaign"
}}if(K==="OPTIN"){D.eloquaForm.userType=o.find("#eloquaDLKnownUser").val()
}else{if(K==="ELOQUA"){D.eloquaForm.userType=o.find("#eloquaDLAnonymousUser").val()
}}u.push(D);
var O=N.data;
if(O.length>0&&M.find("#lead-gen-campaignFunctionMapping").val()=="true"){if(M.find("#lead-gen-autoRedirect").val()=="true"){window.location.href=N.data
}else{M.find(".success-button").attr("href",O)
}}}else{CommonFunctions.finalSubmitAjaxLoader(M,false);
q(M)
}},function(N){CommonFunctions.finalSubmitAjaxLoader(M,false);
q(M)
})
}function p(I,J){J.find("#form-one").on("form.submit.valid",function(L){J=$(this).closest("#form-one").parent();
var K=J.find("#email-address");
CommonFunctions.finalSubmitAjaxLoader(J,true);
emailAddress=K.val();
var M=w+"?requestType=GET_CONFERENCE_ELOQUA_OPTIN_BY_EMAIL&emailAddress="+emailAddress;
CommonFunctions.getAjaxRequest(M,true,J,function(O){if(O.data!==undefined&&O.data.profileComplete){var P=i(I,J,true);
j("OPTIN",P,I,J);
return true
}else{var N=J.find(".step-one-action-button");
d(N.parents("form"));
CommonFunctions.finalSubmitAjaxLoader(J,false);
return false
}},function(N){q(J);
CommonFunctions.finalSubmitAjaxLoader(J,false);
return true
})
})
}function v(L){var J=L.data("name");
var I=L.data("optin");
var K=(/true/i).test(I);
if(K){l(J,L);
F(J,L);
if(J==="BECOME AN EXHIBITOR"){cmpFormValidation.init(E.find("#form-one"));
cmpFormValidation.init(E.find("#submit-form"))
}if(J==="VERTICAL CAMPAIGN"){cmpFormValidation.init(b.find("#form-one"));
cmpFormValidation.init(b.find("#submit-form"));
r(L);
$.fn.matchHeight._maintainScroll=true;
var M=function(N){L.closest(".column-control").find(".match-height-target").matchHeight()
};
L.on("filter.multi.select",M);
L.on("filter.pill.remove",M)
}}else{if(J==="VERTICAL CAMPAIGN"){r(L)
}$.fn.matchHeight._maintainScroll=true;
var M=function(N){L.closest(".column-control").find(".match-height-target").matchHeight()
};
L.on("filter.multi.select",M);
L.on("filter.pill.remove",M);
cmpFormValidation.init(L.find("#submit-form"))
}L.find("#submit-form").on("form.submit.valid",function(O){CommonFunctions.finalSubmitAjaxLoader(L,true);
var N=G(L,false);
e("ELOQUA",N,J,L);
O.preventDefault();
return false
})
}function G(L,I){var N={};
var P=FormUtils.getCommonFormData(L)||{};
if(!P.refURL){P.refURL=document.referrer
}if(!I){var O=L.find("#submit-form");
N=FormUtils.getFormSpecificData(O)
}N.emailAddress=L.find("#email-address").val();
var J=L.find(".otherFocusArea").hasClass("hidden");
var K=L.find(".otherBusinessGoal").hasClass("hidden");
if(!J&&N.otherFocusArea){N.flex3=N.flex3.replace("Other","Other|")+N.otherFocusArea
}if(!K&&N.otherBusinessGoal){N.flex4=N.flex4.replace("Other","Other|")+N.otherBusinessGoal
}var M=$.extend({},P,N);
return M
}function e(K,J,I,M){var L={eloquaFormParams:JSON.stringify(J),requestType:"ELOQUA_CONFERENCE_REGISTER",elqFormName:M.find("#lead-gen-elqFormName").val()};
CommonFunctions.postAjaxRequest(w,L,true,M,function(N){if(N){CommonFunctions.finalSubmitAjaxLoader(M,false);
s(K,I,M);
D.event=M.find("#eloquaDLSuccessEvent").val();
D.eloquaForm.name=M.find("#lead-gen-elqFormName").val();
D.eloquaForm.step=undefined;
D.eloquaForm.screen=M.find("#eloquaDLSuccess").val();
D.eloquaForm.type=M.find("#elqCampaignType").val();
if(K==="OPTIN"){D.eloquaForm.userType=o.find("#eloquaDLKnownUser").val()
}else{if(K==="ELOQUA"){D.eloquaForm.userType=o.find("#eloquaDLAnonymousUser").val()
}}u.push(D)
}else{CommonFunctions.finalSubmitAjaxLoader(M,false);
q(M)
}},function(N){CommonFunctions.finalSubmitAjaxLoader(M,false);
q(M)
})
}function F(I,J){J.find("#form-one").on("form.submit.valid",function(L){J=$(this).closest("#form-one").parent();
var K=J.find("#email-address");
CommonFunctions.finalSubmitAjaxLoader(J,true);
emailAddress=K.val();
var M=w+"?requestType=GET_CONFERENCE_ELOQUA_OPTIN_BY_EMAIL&emailAddress="+emailAddress;
CommonFunctions.getAjaxRequest(M,true,J,function(O){if(I==="BECOME AN EXHIBITOR"){if(O.data!==undefined&&O.data.profileComplete){var P=G(J,true);
e("OPTIN",P,I,J);
return true
}else{var N=J.find(".step-one-action-button");
d(N.parents("form"));
CommonFunctions.finalSubmitAjaxLoader(J,false);
return false
}}else{if(I==="VERTICAL CAMPAIGN"){var N=J.find(".step-one-action-button");
d(N.parents("form"));
CommonFunctions.finalSubmitAjaxLoader(J,false);
return false
}}},function(N){q(J);
CommonFunctions.finalSubmitAjaxLoader(J,false);
return true
})
})
}function r(L){var K=L.find(".dropdown");
var U=L.find(".flex1");
var S=L.find(".additionalregions");
var J=false;
var O=false;
function Q(){var W=(U.val()?U.val().trim():"");
if(t){$(".additionalregionsList").append('<li class="listitem"><input type="checkbox" class="listitem__checkbox" /><label></label><a class="p-small listitem__link" href="#" data-value='+t+">"+t+"</a></li>")
}$(".additionalregionsList li a").each(function(X){if(W===$(this).text().trim()){t=$(this).text().trim();
$(this).parent().remove()
}})
}function N(){var W=$(".flex2").val().split(",");
if(c.length!==0){$.each(c,function(X,Y){$("#primaryregionoffocus").append("<option value="+Y+">"+Y+"</option>")
})
}c=[];
$("#primaryregionoffocus option").each(function(X){if(W.indexOf($(this).val().trim())!=-1&&$(this).val()!==undefined&&$(this).val()!==""){if(c.indexOf($(this).val().trim())==-1){c.push($(this).val().trim())
}$(this).remove()
}})
}U.blur(function(){Q()
});
U.focusout(function(){Q()
});
S.focusout(function(){N()
});
S.blur(function(){N()
});
K.on("hide.bs.dropdown",function(W){if(J||O){W.preventDefault()
}J=false;
O=false
});
K.on("click",".pill",function(W){O=true
});
K.on("click",".listitem",function(aa){aa.preventDefault();
J=true;
var ad=$(aa.currentTarget);
if(ad.hasClass("disabled")){return
}var ac=ad.closest(".dropdown");
var Y;
var X=false;
var W=$(aa.target).hasClass("listitem__checkbox");
if(W){Y=$(aa.target);
var Z=Y.prop("checked");
if(Z){$(this).addClass("listitem__checked");
X=true
}else{$(this).removeClass("listitem__checked")
}}else{Y=$(this).find(".listitem__checkbox");
if(Y.length>0){var Z=Y.prop("checked");
if(Z){Y.prop("checked",false);
$(this).removeClass("listitem__checked")
}else{Y.prop("checked",true);
$(this).addClass("listitem__checked");
X=true
}}}if(X){T(ad)
}else{I(ad)
}R(ac);
var ab=ac.find("button");
ab.focusin();
ab.focusout();
CommonFunctions.fireCustomEvent("filter.multi.select",ad,ad)
});
K.on("click",".gcom-icon-x-circle",function(Y){var X;
var aa=$(this).closest(".pill");
var ac=aa.find(".pill-text").text()||" ";
ac=ac.toString().trim();
var ab=aa.closest(".dropdown");
ab.find(".listitem__checked").each(function(ad,ae){var af=($(ae).find(".listitem__link").data("value")||" ");
af=af.toString().trim();
if(af==ac){$(ae).removeClass("listitem__checked");
$(ae).find("input:checkbox").prop("checked",false);
X=$(ae)
}});
aa.remove();
var W=ab.find(".pill-container");
M(W);
var Z=ab.find("button");
V(Z,ac);
R(ab);
P(X);
CommonFunctions.fireCustomEvent("filter.pill.remove",aa,W)
});
function T(ae){var ab=ae.closest(".dropdown");
var W=ab.find("button");
var ad=ab.find(".pill-container");
var ac=ad.closest("button").find(".placeholder");
var Y=ad.find(".pill").first().clone();
Y.removeClass("hide");
var aa=ae.children(".listitem__link");
var Z=aa.data("value")||" ";
Z=Z.toString().trim();
Y.find(".pill-text").text(Z);
ad.append(Y);
ad.removeClass("hide");
ac.addClass("hide");
var X=W.val();
if(X){X=X+","+Z;
W.val(X)
}else{W.val(Z)
}P(ae)
}function I(ab){var Z=ab.closest(".dropdown");
var X=Z.find("button");
var Y=ab.children(".listitem__link");
var aa=Y.data("value")||" ";
aa=aa.toString().trim();
var W=Z.find(".pill-container");
W.children(".pill").each(function(ac,ad){var ae=$(ad).find(".pill-text").text()||" ";
ae=ae.toString().trim();
if(ae==aa){$(ad).remove()
}});
M(W);
V(X,aa);
P(ab)
}function M(Y){var X=Y.find(".pill").length;
var W=Y.closest("button").find(".placeholder");
if(X==1){Y.addClass("hide");
W.removeClass("hide")
}}function R(Y){var X=Y.find(".listitem__checked").length;
var W=Y.data("limit")||1;
if(W==X){Y.find("li.listitem").each(function(aa,ab){var Z=$(ab).hasClass("listitem__checked");
if(!Z){$(ab).addClass("disabled")
}})
}else{Y.find("li.listitem").removeClass("disabled")
}}function V(Z,ab){var X=Z.val();
if(X){var aa=X.split(",");
var Y=$.inArray(ab,aa);
aa.splice(Y,1);
var W=aa.join();
Z.val(W)
}}function P(aa){if(aa){var Z=aa.data("action");
if(Z){var Y=aa.closest("form");
var W="."+Z;
Y.find(W).toggleClass("hidden");
var X=Y.find(W).find("input").prop("required");
Y.find(W).find("input").prop("required",!X)
}}}}}})();
var cmpConferencesiteConferenceByNumbers=(function(){var c=[];
var b=[];
return{init:function(){components=$(".cmp-conferencesite-conferencebynumbers");
components.each(function(d){a($(this),d)
})
}};
function a(d,e){c[e]=false;
function f(){numberPosition=CommonFunctions.isElementOnViewPort(d.find(".btCounter"));
if(numberPosition){c[e]=true;
d.find(".onedigit").each(function(){digit=$(this).attr("data-digit");
if(digit==","){$(this).css("width","10px");
$(this).children(".n0").text(" ")
}});
d.find(".btCounter .onedigit").removeClass("preload")
}}b[e]=function(){if(!c[e]){f(d)
}else{$(window).off("scroll",b[e])
}};
$(window).on("scroll",b[e]);
d.find(".para-top").matchHeight();
d.find(".para-bottom").matchHeight()
}})();
var cmpConferencesiteExhibitorList=(function(){return{init:function(){var b=$(".cmp-conferencesite-conferenceexhibitorlist");
b.each(function(){a($(this))
})
}};
function a(b){b.find(".lazy").lazy()
}})();
var cmpConferencesiteExhibitorsDetail=(function(){return{init:function(){var b=$(".cmp-conferencesite-conferenceexhibitorsdetail");
b.each(function(){a($(this))
})
}};
function a(b){b.find(".lazy").lazy()
}})();
var cmpConferencesiteFeaturedSpeaker=(function(){return{init:function(){var b=$(".cmp-conferencesite-conferencefeaturedspeaker");
b.each(function(){a($(this))
})
}};
function a(b){b.find(".specialty").matchHeight();
b.find(".member").matchHeight();
b.matchHeight()
}})();
var cmpConferencesiteSpeakerProfile=(function(){return{init:function(){var b=$(".cmp-conferencesite-speakerprofile");
b.each(function(){a($(this));
$(window).load(a($(this)));
$(window).resize(a($(this)))
})
}};
function a(c){c.find(".btn-link").css("display","none");
c.find(".speaker-bio").css("height","auto");
var b=c.find(".speaker-bio").height();
var g=b;
if(window.innerWidth>breakpointMD){var f=25;
if(Math.round(b/f)>5){g=5*f;
e()
}}else{if(window.innerWidth>breakpointSM){var f=22;
if(Math.round(b/f)>8){g=8*f;
e()
}}else{var f=22;
if(Math.round(b/f)>14){g=14*f;
e()
}}}c.find(".btn-link").click(function(){if($(this).hasClass("read-more")){d()
}else{if($(this).hasClass("read-less")){e()
}}});
function e(){c.find(".read-less").css("display","none");
c.find(".speaker-bio").css("height",g);
c.find(".speaker-bio").css("overflow","hidden");
c.find(".read-more").css("display","inline-block")
}function d(){c.find(".read-more").css("display","none");
c.find(".speaker-bio").css("height",b);
c.find(".speaker-bio").css("overflow","visible");
c.find(".read-less").css("display","inline-block")
}}})();
var cmpConferencesiteSpeakerList=(function(){return{init:function(){var b=$(".cmp-conferencesite-speakerlist");
b.each(function(){a($(this))
})
}};
function a(b){b.find(".speaker").matchHeight()
}})();
var cmpConferencesiteVenue=(function(){return{init:function(){var b=$(".cmp-conferencesite-venue");
b.each(function(){a($(this))
})
}};
function a(d){google.maps.event.addDomListener(window,"load",b(d));
function c(f){var e=f.split(",");
if(e.length!=2){return""
}return{lat:parseFloat(e[0]/3600),lng:parseFloat(e[1]/3600)}
}function b(g){var m=g.find("#primaryvenue-map-venue-name").val();
var k=g.find("#primaryvenue-map-coordinates").val();
var e=c(k);
var l=new google.maps.Map(document.getElementById("map"),{zoom:13,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP});
var j=new google.maps.InfoWindow({content:m});
var f=new google.maps.Marker({position:e,map:l});
var h=0;
google.maps.event.addListener(f,"click",(function(n,o){return function(){j.open(l,n)
}
})(f,h));
g.find(".map-coordinates").each(function(o){var p=$(this).val();
var n=$(this).next(".map-venue-name").val();
var q=c(p);
if(q!=""){if(e==""&&o==0){l=new google.maps.Map(document.getElementById("map"),{zoom:13,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP})
}var i=new google.maps.Marker({position:q,map:l});
h=o+1;
j=new google.maps.InfoWindow({content:n});
google.maps.event.addListener(i,"click",(function(r,s){return function(){j.open(l,r)
}
})(i,h))
}})
}}})();
var cmpConferencesiteCalendar=(function(){return{init:function(){var b=$(".cmp-conferencesite-conferencecalendar");
b.each(function(){a($(this))
})
}};
function a(g){roleFilters=[];
locationFilters=[];
conferenceFilters=[];
function j(){var p=g.find(".conference-link");
var q=window.dataLayer||[];
var n={};
n.event="EEC";
var o=[];
p.each(function(s){var r={};
r.eventCode=$(this).data("code");
r.eventDaysUntilEventStart=$(this).data("eventdaysuntileventstart");
r.eventGroup=$(this).data("group");
r.eventLocation=$(this).data("gtm-location");
r.eventPrimaryRole=$(this).data("primary-role");
r.eventRegion=$(this).data("region");
r.eventSecondaryRole=$(this).data("secondary-roles");
r.eventStartDate=$(this).data("gtm-start-date");
r.eventTitle=$(this).data("gtm-title");
r.eventType=$(this).data("type");
r.eventWeeksUntilEventStart=$(this).data("eventweeksuntileventstart");
r.eventCountofCurrentRegistrants=null;
r.eventCurrency=null;
r.eventCurrentMarketingMilestone=null;
r.eventKeyNoteSpeakers=null;
r.eventKeyWord=null;
r.eventPrice=null;
r.eventPriceUSD=null;
r.eventVenueName=null;
r.marketingManagerName=null;
o.push(r)
});
n.gartnerEventListing=o;
q.push(n)
}function k(){var n=g.find("#selectedRole").val();
var o=g.find("#selectedConferenceType").val();
var p=g.find("#selectedLocation").val();
if(n!="all"){b()
}if(p!="all"){g.find('.filter-dropdown2 .listitem a[data-value="'+p+'"]').click()
}if(o!="all"){g.find('.filter-dropdown3 .listitem a[data-value="'+o+'"]').click()
}}function d(){var q=g.find(".conference-link");
q.addClass("hidden");
q.parent().addClass("hidden");
var p=roleFilters.join(",");
var o=conferenceFilters.join(",");
var n="";
if(locationFilters.indexOf(".emea")!=-1){n=locationFilters.concat(".af",".eu",".me").join(",")
}else{n=locationFilters.join(",")
}if(p.length>0){q=q.filter(p)
}if(o.length>0){q=q.filter(o)
}if(n.length>0){q=q.filter(n)
}q.removeClass("hidden");
q.parent().removeClass("hidden");
h();
i()
}function f(){g.find(".reset").on("filter.reset",function(){roleFilters=[];
locationFilters=[];
conferenceFilters=[];
d()
})
}function m(){g.find(".listitem").on("filter.multi.select",function(){var n=$(this).closest("ul").prev().attr("id");
var o="."+$(this).find("a").data("value");
if(n=="filterDropdown1"){if($(this).hasClass("listitem__checked")){roleFilters.push(o)
}else{roleFilters=roleFilters.filter(function(p){return p!=o
})
}}else{if(n=="filterDropdown2"){if($(this).hasClass("listitem__checked")){locationFilters.push(o)
}else{locationFilters=locationFilters.filter(function(p){return p!=o
})
}}else{if(n=="filterDropdown3"){if($(this).hasClass("listitem__checked")){conferenceFilters.push(o)
}else{conferenceFilters=conferenceFilters.filter(function(p){return p!=o
})
}}}}d()
})
}function l(){g.find(".dropdown").on("filter.clear",function(){var n=$(this).find("button").attr("id");
if(n=="filterDropdown1"){roleFilters=[]
}else{if(n=="filterDropdown2"){locationFilters=[]
}else{if(n=="filterDropdown3"){conferenceFilters=[]
}}}d()
})
}function c(){g.on("filter.pill.remove",function(p){var n=p.detail;
var o=n.data("dropdown-index");
var q="."+n.data("value");
if(o==1){roleFilters=roleFilters.filter(function(r){return r!=q
})
}else{if(o==2){locationFilters=locationFilters.filter(function(r){return r!=q
})
}else{if(o==3){conferenceFilters=conferenceFilters.filter(function(r){return r!=q
})
}}}d()
})
}function i(){var n=g.find(".conference-link:visible").length;
if(n==0){g.find(".no-cards-found").show()
}else{g.find(".no-cards-found").hide()
}}function h(){if(roleFilters.length==0&&locationFilters.length==0&&conferenceFilters.length==0){g.find(".reset").hide()
}else{g.find(".reset").show()
}}function b(){$.ajax({url:"/ngw/syspath-bin/gartner/event?requestType=GET_TAG_ROLE_MAPPING",success:e})
}function e(t){var w=false;
var q=g.find("#selectedRole").val();
if(t&&t.success){t=t.data;
var x=JSON.stringify(t);
if(x=="[{}]"){return
}var o=JSON.parse(x);
for(var y in o){if(o.hasOwnProperty(y)){var n=o[y].functionTags;
var r=n[0].value||"";
r=r.toString().trim();
if(r){var p=r.lastIndexOf("/");
if(p>-1){var z=r.slice(p+1);
if(z==q){var A=o[y].conferenceRoles;
for(var u in A){var v=A[u];
var s=v.value;
if(s){w=true;
g.find('.filter-dropdown1 .listitem a[data-value="'+s+'"]').click()
}}break
}}}}}}if(!w){g.find('.filter-dropdown1 .listitem a[data-value="'+q+'"]').click()
}}m();
k();
j();
f();
l();
c()
}})();
var cmpConferencesiteAgenda=(function(){return{init:function(){var b=$(".cmp-conference-agenda");
b.each(function(){a($(this))
})
}};
function a(e){var d=CommonFunctions.findUserAgent().isHandheld();
if(d){e.find(".agenda-panel-group").addClass("isMobile")
}var c=$(".cmp-conferencesite-conferenceheader");
var f=$(window.location.hash);
if(f.length>0){f.collapse("show");
var b;
if(c.find("affix").length==1){b=c.outerHeight()
}else{b=2.3*c.outerHeight()
}$("html, body").animate({scrollTop:$(f).offset().top-b})
}e.find("#back-to-top").click(function(h){h.stopPropagation();
var g=$(this).attr("href");
$("html, body").animate({scrollTop:$(g).offset().top-c.outerHeight()})
})
}})();
var cmpConferencesiteRegistration=(function(){return{init:function(){var b=$(".cmp-conferencesite-registration");
b.each(function(){a($(this))
})
}};
function a(b){b.find(".heading").matchHeight();
b.find(".btn").matchHeight();
b.find(".tile-background").matchHeight()
}})();
var cmpConferencesiteSpeakerSession=(function(){return{init:function(){var b=$(".cmp-conferencesite-speakersession");
b.each(function(){a($(this))
})
}};
function a(b){b.find(".dash").matchHeight();
b.find(".text").matchHeight()
}})();
var cmpConferencesiteFeaturedAgenda=(function(){return{init:function(){var b=$(".cmp-conferencesite-featuredagenda");
b.each(function(){a($(this))
})
}};
function a(b){b.find(".track-label").matchHeight();
b.find(".headline").matchHeight();
b.find(".description").matchHeight();
b.find(".tile").matchHeight()
}})();
var cmpConferencesiteExhibitorCarousel=(function(){return{init:function(){var b=$(".cmp-conferencesite-exhibitorcarousel");
b.each(function(){a($(this))
})
}};
function a(c){var d=function(g){var f=c.find(".carousel-inner-copy .exhibitor").length/g;
for(var e=0;
e<f;
e++){if(e==0){c.find(".carousel-inner").append("<div class='item active'></div>")
}else{c.find(".carousel-inner").append("<div class='item'></div>")
}}c.find(".item").each(function(){for(var h=0;
h<g;
h++){$(this).append(c.find(".carousel-inner-copy").children()[0])
}});
c.find(".carousel-inner-copy").remove()
};
function b(){var e=window.innerWidth;
if(e>=breakpoint){d(6)
}if(e>breakpointSM&&e<breakpoint){d(3)
}if(e<=breakpointSM){d(2)
}}b();
c.find("#exhibitorcarousel").carousel({interval:6000});
c.find(".lazy").lazy({visibleOnly:true,delay:0});
c.find("#exhibitorcarousel").on("slide.bs.carousel",function(){c.find(".lazy").lazy({bind:"event",visibleOnly:true,delay:0})
})
}})();
var cmpConferencesiteConferencePricing=(function(){return{init:function(){var b=$(".cmp-conferencesite-pricing");
b.each(function(){a($(this))
})
}};
function a(b){}})();
var cmpConferencesiteConferenceRegister=(function(){return{init:function(){var b=$(".cmp-conferencesite-conferenceregister");
b.each(function(){a($(this))
})
}};
function a(g){var i=g.find(".g-recaptcha").length;
var c=g.find(".formOne");
cmpFormValidation.init(c);
var f=c.find("#email-address");
var e=g.find(".register-phone-number-1");
var d;
if(e){var k=e.attr("href");
if(k){k=k.replace(/%20|\D/g,"");
e.attr("href","tel:"+k)
}}var b=g.find(".register-phone-number-2");
if(b){var j=b.attr("href");
if(j){j=j.replace(/%20|\D/g,"");
b.attr("href","tel:"+j)
}}g.find(".login-back").click(function(l){l.preventDefault();
g.find(".formTwo").hide();
g.find(".formOne").show();
g.find(".errormMessageText").remove();
d=f.val();
if(i){grecaptcha.reset()
}});
g.find("#password").on("keyup",function(){g.find(".errormMessageText").remove()
});
cmpConferencesiteConferenceRegister.recaptchaCallbackHandler=function(){g.find(".errormMessageText").remove();
CommonFunctions.finalSubmitAjaxLoader(c,true);
var m=f.val();
var o="/ngw/syspath-bin/gartner/user?requestType=IS_ACCOUNT_PRESENT&email="+m;
var n=g.find(".g-recaptcha").length;
if(n){var l=g.find('textarea[name="g-recaptcha-response"]').val();
o=o+"&reCaptchaResponse="+l
}$.ajax(o).done(function(q){if(q&&q.data){CommonFunctions.finalSubmitAjaxLoader(c,false);
var t=g.find(".formTwo");
var s=t.find(".back-button");
var p=t.find("#password");
g.find(".formOne").hide();
t.show();
cmpFormValidation.init(t);
t.find("#email-address2").val(m);
p.focus();
if(d&&(d!==m)){p.val("")
}t.find(".form-submit-button").on("mousedown",function(u){if(t.find("#password").val()){s.hide()
}});
t.on("form.submit.valid",function(x){x.preventDefault();
g.find(".errormMessageText").remove();
var y="/ngw/syspath-bin/gartner/user";
var u=new ClientJS();
var v=u.getFingerprint();
var w={requestType:"LOGIN",userName:m,password:t.find("#password").val(),fingerprint:v};
CommonFunctions.postAjaxRequest(y,w,true,c,function(z){g.find(".errormMessageText").remove();
if(z.success){h();
var A=g.find("#eventRegisterUrl").val();
window.location.href=A
}else{var B=document.createElement("p");
B.setAttribute("class","errormMessageText text-right");
B.innerHTML=z.message;
g.find(".email-check").prepend(B)
}},function(z){g.find(".errormMessageText").remove();
var B=document.createElement("p");
B.setAttribute("class","errormMessageText text-right");
var A=g.find("#secondStepErrorMessage").val();
if(A==""){A="This username and/or password does not match our records."
}B.innerHTML=A;
g.find(".email-check").prepend(B);
s.show()
})
})
}else{var r=g.find("#eventCreateAccountRegisterUrl").val();
window.location.href=r
}CommonFunctions.finalSubmitAjaxLoader(c,false)
}).fail(function(p){var q=g.find("#eventCreateAccountRegisterUrl").val();
window.location.href=q;
CommonFunctions.finalSubmitAjaxLoader(c,false)
})
};
c.on("form.submit.valid",function(l){l.preventDefault();
if(i){grecaptcha.execute()
}else{cmpConferencesiteConferenceRegister.recaptchaCallbackHandler()
}});
g.find(".event-register-button").on("click",function(l){h();
return true
});
if(f.val()&&f.val()!=""){f.focus();
f.focusout()
}function h(){var m=window.dataLayer||[];
var l={event:"formSuccess",eloquaForm:{name:"Register_CTA_button",type:"loggedin_user",step:"",screen:"success",userType:"known"}};
m.push(l)
}}})();
function onConferenceRegisterRecaptchaSuccess(a){if(a){cmpConferencesiteConferenceRegister.recaptchaCallbackHandler()
}}function onConferenceRegisterRecaptchaLoad(){if(recaptcha){$(".g-recaptcha").each(function(a,b){$(b).attr("id",a);
grecaptcha.render(b,{sitekey:$(b).attr("data-sitekey")})
});
recaptcha=false
}}var Constants={breakpoint:1100};
var Conferencesite={formatDateTimeText:function(c){var e=c.split("|");
var a=e[0].trim();
var d=e[1].trim();
var f=a.split(" ");
if(f.length==2){f=a.split("\uFF09");
f.splice(1,0,"\uFF09/ ");
a=f.join("")
}else{f.splice(4,0,"/");
a=f.join(" ")
}var b=d.split(" ");
if(b.length==2){b=d.split("\uFF09");
b.splice(0,1)
}else{b.splice(0,4)
}d=b.join(" ");
return a+" - "+d
}};
$(function(){cmpConferencesiteConferenceHeader.init();
cmpConferencesiteConferenceByNumbers.init();
cmpConferencesiteHero.init();
cmpConferencesiteLeadGen.init();
cmpConferencesiteExhibitorList.init();
cmpConferencesiteExhibitorsDetail.init();
cmpConferencesiteFeaturedSpeaker.init();
cmpConferencesiteSpeakerProfile.init();
cmpConferencesiteSpeakerList.init();
cmpConferencesiteAgenda.init();
cmpConferencesiteCalendar.init();
cmpConferencesiteRegistration.init();
cmpConferencesiteVenue.init();
cmpConferencesiteSpeakerSession.init();
cmpConferencesiteFeaturedAgenda.init();
cmpConferencesiteExhibitorCarousel.init();
cmpConferencesiteConferencePricing.init();
cmpConferencesiteConferenceRegister.init()
});