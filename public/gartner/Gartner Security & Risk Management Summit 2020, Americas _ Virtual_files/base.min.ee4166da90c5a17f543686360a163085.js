var cmpFormValidation=(function(){return{init:function(d,b){if(d&&d!==""){var c=$(d);
c.each(function(){a($(this),d,b)
})
}}};
function a(f,k,d){var q=f.find(".form-submit-button");
var m=f.find(".form-control");
if(d===true){m.off("change focusout keypress");
q.off("click")
}c();
n();
k.addClass("validator");
var p={number:/^[- +()]*[0-9][- +(),.#0-9]*$/,string:"^[((.*))a-zA-Z0-9&'\\u00C0-\\u024F\\u1E00-\\u1EFF\\u4e00-\\u9eff_ _.-]*$",email:/^[a-zA-Z0-9!#$%&'*\u00C0-\u024F\u1E00-\u1EFF\u4e00-\u9eff+/=?^_`’{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*\u00C0-\u024F\u1E00-\u1EFF\u4e00-\u9eff+/=?^_`’{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/,url:/^((https?|ftp|smtp):\/\/)?(www.)?[-a-z0-9#!:.?+_~=&%@!]+\.[-a-z#!:.?+_~=&%@!]+(\/[-a-zA-Z0-9#!:.?+_~=&%@!]+\/?)*$/,textarea:/^([^<>])+$/};
var h={email:"Please enter a valid email address.",url:"Please enter a valid URL.",number:"Please enter a valid number.",string:"Please enter a valid data.",textarea:"Please enter a valid character.",autocomplete:"Please select a value."};
function c(){var s;
m.on("change focusout keyup",function(w){var v=$(this)[0].getAttribute("data-validator");
var x=$(this)[0].getAttribute("pattern");
var y=$(this)[0].hasAttribute("required");
if(!v&&$(this)[0].nodeName.toLowerCase()==="select"){v=$(this)[0].nodeName.toLowerCase()
}if(v||x||y){var t=0;
var A=0;
var u=true;
var z={};
s=$(this);
if(s.closest("form").find("#submitError").is(":visible")){s.closest("form").find("#submitError").remove()
}s.closest(f).find(".form-control").each(function(B,C){A++;
if(C.value){t++
}z=e($(this),true,w,true);
if(!z.valid){u=false
}});
if(t>0){z=e($(this),false,w,true);
if(!z.valid){b("form.filled.error",{selector:$(this)},$(k))
}if(u){q.removeClass("button-gray")
}else{if(!q.hasClass("button-gray")){q.addClass("button-gray")
}}}else{z=e($(this),false,w,true);
if(!q.hasClass("button-gray")&&!z.valid){q.addClass("button-gray")
}}}});
var r=f.find("[data-validator='autocomplete']");
r.siblings(".dropdown-menu").find("li").on("click",function(){var t=$(this).parent().siblings("[data-validator='autocomplete']");
t.attr("data-typed",true);
t.focusout();
t.focusin()
});
r.on("keyup",function(t){if(t.keyCode!==9&&t.keyCode!==16){$(this).attr("data-typed",false)
}})
}function o(r){r.removeClass("errorMessage successMessage");
if(r.closest("form").find("#submitError").is(":visible")){r.closest("form").find("#submitError").remove()
}$(r).removeClass("errorMessage")
}function e(A,z,E,r){var D=A;
A=A[0];
var F=A.getAttribute("pattern");
var t=A.hasAttribute("required");
if(!A.getAttribute("data-validator")&&!F&&!t){var u={valid:true};
return u
}if(A.hasAttribute("required")||A.value!==""){type=A.getAttribute("type")||A.nodeName.toLowerCase();
var x=type==="number"||type==="range";
var B=A.value.trim();
var s=B.length;
var C=A.getAttribute("data-validator");
if(C){type=C
}var I;
if(C==="autocomplete"){I=$(A).attr("data-typed")
}var w=false;
var G=((((type==="checkbox"||type==="radio")&&!A.checked)||(type==="select"&&A.options[A.selectedIndex].value<1)||(type!=="checkbox"&&type!=="radio"&&type!=="select"&&s<1))&&D.is(":visible"));
var u={badInput:(x&&s>0&&!/[-+]?[0-9]/.test(B)),rangeOverflow:(A.hasAttribute("max")&&x&&B.length>1&&parseInt(B.length,10)>parseInt(A.getAttribute("max"),10)),rangeUnderflow:(A.hasAttribute("min")&&x&&B.length>1&&parseInt(B.length,10)<parseInt(A.getAttribute("min"),10)),stepMismatch:(A.hasAttribute("step")&&A.getAttribute("step")!=="any"&&x&&Number(B)%parseFloat(A.getAttribute("step"))!==0),tooLong:(A.hasAttribute("maxLength")&&A.getAttribute("maxLength")>0&&s>parseInt(A.getAttribute("maxLength"),10)),tooShort:(A.hasAttribute("minLength")&&A.getAttribute("minLength")>0&&s>0&&s<parseInt(A.getAttribute("minLength"),10))};
if(z){u.valueMissing=G
}if(C&&(F===null||F==="")){if(C!=="string"&&C!="autocomplete"){F=p[type];
u.patternMismatch=(s>0&&F.test(B)===false)
}else{if(C==="string"){F=p[type];
u.patternMismatch=(s>0&&new RegExp(F).test(B)===false)
}}}var y=true;
for(var H in u){if(u.hasOwnProperty(H)){if(u[H]){y=false;
if(r){j(A,E,type)
}break
}}}if(C==="autocomplete"&&I=="false"&&D.is(":visible")){y=false;
if(r){j(A,E,type)
}}u.valid=y;
var v=false;
if(C==="autocomplete"&&D.parent().find(".caret")){v=D.parent().find(".caret")
}if(!G&&y){if(A&&r){A.className=A.className.replace("errorMessage","");
$(A).siblings(".errormMessageText").remove();
if(!$(A).hasClass("successMessage")&&B.length>0){A.className+=" successMessage"
}if(v&&s>0&&C==="autocomplete"){v.hide()
}}}else{if(G){A.className=A.className.replace("successMessage","");
A.className=A.className.replace("errorMessage","");
$(A).siblings(".errormMessageText").remove();
if(v&&s>0&&C==="autocomplete"){v.show()
}}else{if(v&&s>0&&C==="autocomplete"){v.show()
}}}}else{var u={valid:true};
A.className=A.className.replace("successMessage","");
A.className=A.className.replace("errorMessage","");
$(A).siblings(".errormMessageText").remove();
if(v&&s>0&&C==="autocomplete"){v.show()
}}return u
}function j(v,u,r){if(u.type==="focusout"){$(v).addClass("errorMessage");
$(v).removeClass("successMessage");
$(v).siblings(".errormMessageText").remove();
var t=document.createElement("p");
t.setAttribute("class","errormMessageText");
var s=v.getAttribute("errormessage");
if(!s||s==""){if(r&&r!=""){s=h[r]
}else{s="Please enter valid data."
}}t.innerHTML=s;
$(v).parent().append(t)
}}function n(){q.on("click",function(t){t.preventDefault;
if(!q.hasClass("button-gray")){var u={};
var s=true;
o($(this));
m.each(function(v,w){u=e($(this),true,"submit",false);
if(!u.valid){s=false
}});
l();
if(s){b("form.submit.valid","",$(k))
}else{b("form.submit.invalid","",$(k));
g("submit",$(this))
}}else{var r=0;
m.each(function(v,w){if(w.value){r++
}});
if(r>0){l()
}b("form.submit.invalid",{selector:$(this)},$(k));
g("submit",$(this))
}return false
})
}function l(){m.each(function(){var r=$(this);
if(r&&(r.val()==null||r.val().trim()=="")&&this.hasAttribute("required")){r.addClass("errorMessage")
}})
}function g(r,s){f.find("#submitError").remove();
var t='<p id="submitError" class="text-right submitError">All fields are required.</p>';
var u=f.find(".footer");
if(u.length>0){u.prepend(t)
}else{t='<p id="submitError" class="pull-right text-right submitError">All fields are required.</p>';
q.after(t)
}}function b(s,r,t){t.trigger({type:s,detail:r})
}}})();
var breakpointLarge=1440;
var breakpointLG=1439.98;
var breakpointMedium=1025;
var breakpointMD=1024;
var breakpointSmall=768;
var breakpointSM=767.98;
var breakpointXSmall=376;
var breakpointXSM=375.98;
var breakpoint=992;
var breakpointConf=1100;
var CommonFunctions={findUserAgent:function(){var a={isIEorEDGE:function(){return(document.documentMode||/Edge/.test(navigator.userAgent))
},isIE:function(){return((typeof document.documentMode)==="number")
},isHandheld:function(){return/iPhone|iPad|iPod|Android|BlackBerry|Mobile|Opera Mini|IEMobile/i.test(navigator.userAgent)
},isTablet:function(){return/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch)))/.test(navigator.userAgent.toLowerCase())
},isMobile:function(){return/(iphone|iPod|blackberry|iemobile|(android(.*mobile))|(windows(.*phone)(.*touch)))/.test(navigator.userAgent.toLowerCase())
}};
return a
},isElementOnViewPort:function(b){if(b.length==0){return false
}else{var e=b.offset().top;
var a=b.offset().top+b.outerHeight();
var c=$(window).scrollTop()+window.innerHeight;
var d=$(window).scrollTop();
if((c>e)&&(d<a)){return true
}else{return false
}}},storageEnabled:function(){try{if(localStorage!=null){localStorage.setItem("__test","data")
}}catch(a){if(/QUOTA_?EXCEEDED/i.test(a.name)){return false
}}return true
},getAjaxRequest:function(e,c,d,f,b){var a=this;
$.ajax({url:e,type:"GET",beforeSend:function(){if(c){a.ajaxLoader(d,true)
}},success:function(g){f(g)
},complete:function(){if(c){a.ajaxLoader(d,false)
}},error:function(){b("[{}]")
}})
},postAjaxRequest:function(f,e,c,d,g,b){var a=this;
$.ajax({url:f,type:"POST",data:e,beforeSend:function(){if(c){a.ajaxLoader(d,true)
}},success:function(h){g(h)
},complete:function(){if(c){a.ajaxLoader(d,true)
}},error:function(){b("[{}]");
if(c){a.ajaxLoader(d,true)
}}})
},ajaxLoader:function(b,a){b.find(".eloqua-loading").css({display:a?"inline-block":"none"});
b.find(".eloqua-continue").prop("disabled",a)
},finalSubmitAjaxLoader:function(b,a){b.find(":visible").find("#eloqua-final-submit-loading").css({display:a?"inline-block":"none"});
b.find(":visible").find(".step-one-action-button").prop("disabled",a);
b.find(":visible").find("#submit").prop("disabled",a);
b.find(":visible").find("#submit-button").prop("disabled",a)
},getAllQueryParams:function(){var d=[];
var c;
var a=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");
for(var b=0;
b<a.length;
b++){c=a[b].split("=");
d[c[0]]=c[1]
}return d
},onBreakpointChange:(function(){var c=[];
var a=window.innerWidth;
$(window).resize(function(){if(c.length>0){if(a<768){if(window.innerWidth>=768){b()
}}else{if(768<=a&&a<1025){if(window.innerWidth<768||window.innerWidth>=1025){b()
}}else{if(1025<=a&&a<1440){if(window.innerWidth<1025||window.innerWidth>=1440){b()
}}else{if(window.innerWidth<1440){b()
}}}}}a=window.innerWidth
});
function b(){for(var d in c){c[d]()
}}return function(d){c.push(d)
}
})(),goToByScroll:function(c){var b=0;
var a=$(".navbar");
if(a.find(".affix").length==1){b=2*a.outerHeight()
}else{b=1.5*a.outerHeight()
}$("html, body").animate({scrollTop:$(c).offset().top-b},2000)
},fireCustomEvent:function(b,a,c){c.trigger({type:b,detail:a})
},urlParam:function(a){var b=new RegExp("[?&]"+a+"=([^&#]*)").exec(window.location.href);
if(b==null){return null
}else{return decodeURI(b[1].replace(/[^a-zA-Z0-9_]+/g,""))||0
}},debounce:function(c,a){var b=0;
return function(){var e=this,d=arguments;
clearTimeout(b);
b=setTimeout(function(){c.apply(e,d)
},a||0)
}
},registerStorageEventListener:function(b,d,c,a){window.addEventListener("storage",function(f){if(f.key==b){var e={};
c.forEach(function(j,h){if(sessionStorage.getItem(j)){e[j]=sessionStorage.getItem(j)
}});
if(Object.keys(e).length>0){localStorage.setItem(d,JSON.stringify(e));
localStorage.removeItem(d)
}}else{if(f.key==d){var g=JSON.parse(f.newValue);
for(key in g){sessionStorage.setItem(key,g[key])
}if(g&&(Object.keys(g).length>0)){a()
}}}})
}};
(function(b){if(!b){return
}function a(c){c.sort(function(e,d){return e.text.toLowerCase().localeCompare(d.text.toLowerCase())
})
}b.fn.sortElements=function(e){var k=this;
var j={wrapper:k.parent().first()};
var f=b.extend(j,e);
var h=f.wrapper;
var d=[];
k.each(function(){var m={};
var l=b(this).text()||"";
m.text=l.toString().trim();
m.$nodeRef=b(this);
d.push(m)
});
a(d);
for(var g in d){var c=d[g].$nodeRef;
h.append(c)
}return this
}
})(jQuery);
$(document).ready(function(){$(".match-height-target").matchHeight()
});
$(window).load(function(){var j=window.dataLayer||[];
var d=window.location.host;
var l=window.location.pathname;
var e=window.location.protocol+"//"+d+l;
var g=window.location.href;
var f=g.replace(e,"");
var b=f;
if(j[0]){var n;
var c;
var h;
if(j[0].page){if(j[0].page["function"]){n=j[0].page["function"]
}if(j[0].page.role){c=j[0].page.role
}}if(j[0].gartnerEvent){if(j[0].gartnerEvent.eventCode){h=j[0].gartnerEvent.eventCode
}}var k=false;
function m(){if(k===false){b=b+"?";
k=true
}else{b=b+"&"
}}if(f!==""){k=true
}if(n){m();
b=b+"pgFunction="+n
}if(c){m();
b=b+"pgRole="+c
}if(h){m();
b=b+"evCode="+h
}if(n||c||h){b=b.replace(/\s+/g,"");
b=e+encodeURIComponent(b)
}var a=window._elqQ||[];
a.push(["elqTrackPageView",b])
}});
if(!String.prototype.startsWith){Object.defineProperty(String.prototype,"startsWith",{value:function(a,b){b=!b||b<0?0:+b;
return this.substring(b,b+a.length)===a
}})
}if(!String.prototype.includes){String.prototype.includes=function(a,b){if(a instanceof RegExp){throw TypeError("first argument must not be a RegExp")
}if(b===undefined){b=0
}return this.indexOf(a,b)!==-1
}
}var cmpFilterV2=(function(){var f;
return{init:function(){var j=$(".cmp-filter-v2");
j.each(function(){h($(this))
});
f=j.find(".filter-template").first()
},setFilterTitle:function(j,k){g(j,k)
},refreshFilter:function(l,k,j){e(l,k,j)
}};
function h(r){var m=r.find(".dropdown").not(".popup");
var u=r.find(".filter-pills-container");
u.html("");
var o=u.parent();
var s=r.find(".reset");
var p=r.find(".filter-pill");
var n=p.first().clone();
n.removeClass("hide");
var q=[];
m.each(function(){var x=$(this).find("button.dropdown-toggle span").text();
q.push(x);
var y=$(this).hasClass("multiselect");
if(y){d(this,x)
}});
t();
$(document).on("click",function(x){if(m!==x.target&&!m.has(x.target).length){m.each(function(y,A){var z=$(A).hasClass("open");
if(z){$(A).removeClass("open")
}})
}});
r.on("click",".dropdown a.single__link",function(){var z=$(this);
var x=z.closest(".dropdown");
x.removeClass("open");
if(z.hasClass("active")){return false
}var y=z.text();
x.find("a").removeClass("active");
x.find("button span").addClass("active");
x.find("button span").text(y);
z.addClass("active");
s.show();
c("filter.single.select",z,z)
});
r.on("click","button.dropdown-toggle",function(){var z=$(this).closest(".dropdown");
var y=z.hasClass("popup");
if(y){return true
}var x=z.data("dropdown-index");
m.each(function(A,B){var C=$(B).data("dropdown-index");
if(C==x){if(z.hasClass("open")){z.removeClass("open")
}else{z.addClass("open")
}}else{$(B).removeClass("open")
}})
});
m.on("click",".listitem",function(B){var z;
var y=false;
var C=$(B.currentTarget);
var x=$(B.target).hasClass("listitem__checkbox");
if(x){z=$(B.target);
var A=z.prop("checked");
if(A){$(this).addClass("listitem__checked");
y=true
}else{$(this).removeClass("listitem__checked")
}}else{z=$(this).find(".listitem__checkbox");
if(z.length>0){var A=z.prop("checked");
if(A){z.prop("checked",false);
$(this).removeClass("listitem__checked")
}else{z.prop("checked",true);
$(this).addClass("listitem__checked");
y=true
}}}if(y){w(C);
j()
}else{l(C)
}c("filter.multi.select",C,C)
});
u.on("click",".gcom-icon-x-circle",function(z){var x=$(this).closest(".filter-pill");
var B=x.find("span.p-small").text()||"";
B=B.toString().trim();
var y=x.data("dropdown-index");
var A=r.find(".filter-dropdown"+y);
A.find(".listitem__checked").each(function(C,D){var E=($(D).find(".listitem__link").text()||"");
E=E.toString().trim();
if(E==B){$(D).removeClass("listitem__checked");
$(D).find("input:checkbox").prop("checked",false)
}});
x.detach();
c("filter.pill.remove",x,u)
});
r.on("click",".filternav__clear",function(){var C=$(this).closest(".dropdown");
var B=C.get(0);
var y=C.data("dropdown-index");
var x=q[y-1];
var A=[];
C.find(".listitem__checked").each(function(){var D={};
var F=$(this).children(".listitem__link");
var G=(F.data("value")||"").toString();
var E=(F.text()||"").toString();
D.value=G;
D.text=E;
A.push(D)
});
d(B,x);
var z=C.data("dropdown-index");
u.children(".filter-pill").each(function(E,F){var D=$(F).data("dropdown-index");
if(z==D){$(F).remove()
}});
C.removeClass("open");
c("filter.clear",A,C)
});
r.find(".show-filters").click(function(){k()
});
r.find(".hide-filters").click(function(){v()
});
r.on("click",".filternav__close",function(){var x=$(this).closest(".dropdown");
if(x.hasClass("open")){x.removeClass("open")
}});
function w(D){var z=D.closest(".dropdown");
var y=z.data("dropdown-index");
var x=D.children(".listitem__link");
var A=x.data("value")||"";
A=A.toString().trim();
var C=x.text()||"";
C=C.toString().trim();
var B=n.clone();
B.find(".p-small").text(C);
B.data("dropdown-index",y);
B.data("value",A);
u.append(B)
}function l(A){var y=A.closest(".dropdown");
var x=y.data("dropdown-index");
var z=A.children(".listitem__link").data("value")||"";
z=z.toString().trim();
u.children(".filter-pill").each(function(C,D){var B=$(D).data("dropdown-index");
var E=$(D).data("value")||"";
E=E.toString().trim();
if(B==x&&E==z){$(D).detach()
}})
}s.click(function(){m.each(function(y){var x=q[y];
if(x){d(this,x)
}});
u.html("");
s.hide();
c("filter.reset",undefined,s)
});
function k(){r.find(".row").removeClass("hidden-xs");
r.find(".show-filters").addClass("hidden");
r.find(".hide-filters").removeClass("hidden")
}function v(){r.find(".row").addClass("hidden-xs");
r.find(".hide-filters").addClass("hidden");
r.find(".show-filters").removeClass("hidden")
}function t(){m.each(function(y,z){if($(z).hasClass("multiselect")){a($(z))
}});
if(window.innerWidth<breakpointSmall){var x=s.closest("div");
u.insertBefore(x)
}else{o.append(u)
}}function j(){var A=[];
var x=u.find(".filter-pill");
x.each(function(B,C){var D={};
D.dropdownIndex=$(C).data("dropdown-index");
D.dataValue=$(C).data("value");
D.spanText=$(C).find("span.p-small").text();
A.push(D)
});
A.sort(function(B,C){return B.dropdownIndex-C.dropdownIndex
});
for(var y=0;
y<A.length;
y++){var z=x.get(y);
$(z).find("span.p-small").text(A[y].spanText);
$(z).data("dropdown-index",A[y].dropdownIndex);
$(z).data("value",A[y].dataValue)
}}$(window).resize(t)
}function g(j,k){j.find("a").removeClass("active");
j.find("button span").addClass("active");
j.find("button span").text(k);
j.find("a").each(function(){var l=$(this).text()||"";
l=l.toString().trim();
if(l===k){$(this).addClass("active")
}})
}function d(l,j){$(l).removeClass("open");
$(l).find("button.dropdown-toggle span").text(j);
$(l).find("button.dropdown-toggle span").removeClass("active");
$(l).find("a").removeClass("active");
$(l).find("li").removeClass("listitem__checked");
var k=$(l).find("input:checkbox");
if(k.length>0){k.prop("checked",false)
}}function e(l,p,q){var m=l.data("dropdown-index");
var r=l.find(".dropdown-menu");
r.find("li").remove();
var s=f.find("li").first().clone();
for(var n in p){var o=s.clone();
var k=o.find("a");
k.text(p[n].text);
k.data("value",p[n].value);
var j="";
if(q){j+="listitem";
k.addClass("listitem__link")
}else{k.addClass("single__link");
o.find("label").remove();
o.find("input:checkbox").remove();
o.find(".listitem__last").remove()
}if(!p[n].value){j+=" disabled";
o.find("input:checkbox").remove();
k.remove();
o.find("span.p-small").text(p[n].text)
}else{o.find("span.p-small").remove()
}o.addClass(j);
r.append(o)
}if(q){a(l)
}}function a(j){var q=j.is(":visible");
var n=j.hasClass("hide");
var k=(j.css("display")==="none");
var l=j.parent().hasClass("hidden-xs");
if(!q){b(j,n,k,l,true)
}var r=j.find(".btn-filter")[0].getBoundingClientRect().height;
var o=j.find(".dropdown-menu");
var s=j.find(".filternav");
j.addClass("open");
var p=o[0].getBoundingClientRect().height;
j.removeClass("open");
var m=Math.floor(r+p)-1;
s.css("top",m+"px");
if(!q){b(j,n,k,l,false)
}}function b(k,j,n,l,m){if(m){if(j){k.removeClass("hide")
}if(n){k.show()
}if(l){k.parent().removeClass("hidden-xs")
}}else{if(j){k.addClass("hide")
}if(n){k.hide()
}if(l){k.parent().addClass("hidden-xs")
}}}function c(k,j,l){l.trigger({type:k,detail:j})
}})();
$(document).ready(function(){cmpFilterV2.init()
});
var cmpPagination=(function(){var c={};
var b;
var a=$("div.cmp-pagination > div.sequence-pagination");
a.each(function(){d($(this))
});
function d(l){var k=l.find(".page-counter");
var p=k.find("li").first();
var f=p.next();
var e=f.next();
var n=parseInt(l.find("#pagination").find("span").text());
var o={type:"pagination-sequence-changed"};
var h={type:"view-count-changed"};
p.click(function(){if(p.hasClass("inactive")){return
}var q=f.children("span").text();
q=parseInt(q);
var r=l.find(".page-total").children("span").text();
r=parseInt(r);
if(q>1){q=q-1;
f.children("span").text(q);
if(q==1){p.removeClass("active");
p.addClass("inactive")
}if(q<r){e.removeClass("inactive");
e.addClass("active")
}}m(q)
});
e.click(function(){if(e.hasClass("inactive")){return
}var q=f.children("span").text();
q=parseInt(q);
var r=l.find(".page-total").children("span").text();
r=parseInt(r);
if(q<r){q=q+1;
f.children("span").text(q);
if(q==r){e.removeClass("active");
e.addClass("inactive")
}if(q>1){p.removeClass("inactive");
p.addClass("active")
}}g();
m(q)
});
function m(q){o.detail=q;
o.pageSize=b;
j(o)
}l.find(".pagination-view-dropdown .dropdown a").click(function(){var q=$(this);
var r=q.closest(".dropdown");
r.find("a").removeClass("active");
r.find("button span").addClass("active");
r.find("button span").text($(this).text());
q.addClass("active");
b=q.data("value");
if(p.hasClass("active")){p.removeClass("active");
p.addClass("inactive")
}h.detail=b;
j(h);
if(n>parseInt($(this).text())){g()
}n=parseInt($(this).text())
});
function j(q){if(!c[q.type]){return
}for(i=0;
i<c[q.type].length;
i++){(c[q.type][i])(q)
}}function g(){$("html, body").animate({scrollTop:l.closest(".globalsite").offset().top},2000)
}}return{subscribePaginationEvents:function(f,g){if(!c[f]){c[f]=[]
}var e=c[f].push(g)-1;
return{unsubscribe:function(){delete c[f][e]
}}
},refreshSequentialPagination:function(e,h,g){if(!e&&e.length===0){return
}var m=e.find(".viewselection");
e.hide();
if(!h){return
}var l=e.find(".page-counter");
var k=l.find("li").first();
if(k.hasClass("active")){k.removeClass("active");
k.addClass("inactive")
}var j=k.next();
var f=j.next();
if(h>1){f.removeClass("inactive").addClass("active")
}else{f.removeClass("active").addClass("inactive")
}if(g){if(g<12){e.hide()
}else{e.show()
}}e.find(".page-total").children("span").text(h);
j.children("span").text("1")
},refreshViewDropDown:function(e){e.find(".pagination-view-dropdown .dropdown").each(function(f){var g=$(this);
var h=g.find(".dropdown-menu>li>a").first().data("value");
g.find("span").html(h);
g.find("a").removeClass("active");
b=null
})
}}
})();
var cmpHotjar=(function(){return{init:function(){var b=$(".hotjar");
b.each(function(){a($(this))
})
}};
function a(b){b.find("form").each(function(){$component=$(this);
var f=$component.find(".form-control");
var c=sessionStorage.getItem("hotJarActive")?true:false;
var e;
f.on("focusin",function(j){if(!c){var l=$(this)[0];
if(l.hasAttribute("data-hotjar")){try{hj("tagRecording",["js-event","form_field_revisit"]);
hj("trigger","form_field_revisit");
sessionStorage.setItem("hotJarActive",true);
c=true
}catch(h){}}else{l.setAttribute("data-hotjar",true)
}}var k=$(this).closest("section")[0];
if(!k.hasAttribute("data-hotjar")){k.setAttribute("data-hotjar",true)
}d()
});
f.on("focusout",function(h){g()
});
$(document).click(function(j){var k=$(j.target)[0].closest("section");
k=k==null?true:!k.hasAttribute("data-hotjar");
if(k&&$component.closest("section")[0].hasAttribute("data-hotjar")&&!c){try{hj("tagRecording",["js-event","form_field_abandon_click_outside"]);
hj("trigger","form_field_abandon_click_outside");
sessionStorage.setItem("hotJarActive",true);
c=true
}catch(h){}}});
window.addEventListener("beforeunload",function(j){if($component.closest("section")[0].hasAttribute("data-hotjar")&&!c){try{hj("tagRecording",["js-event","form_field_abandon_page_exit"]);
hj("trigger","form_field_abandon_page_exit");
sessionStorage.setItem("hotJarActive",true);
c=true
}catch(h){}}});
$component.on("form.filled.error",function(j){if(j.detail.selector.closest("section").hasClass("hotjar")&&!c){try{hj("tagRecording",["js-event","form_validation_error"]);
hj("trigger","form_validation_error");
sessionStorage.setItem("hotJarActive",true);
c=true
}catch(h){}}});
$component.on("form.submit.invalid",function(j){var k=null;
if(j&&j.detail){k=j.detail.selector
}if(k&&k.closest("section").hasClass("hotjar")&&!c){try{hj("tagRecording",["js-event","form_validation_error"]);
hj("trigger","form_validation_error");
sessionStorage.setItem("hotJarActive",true);
c=true
}catch(h){}}});
function d(){if(!c){e=setTimeout(function(){try{hj("tagRecording",["js-event","form_time_in_field"]);
hj("trigger","form_time_in_field");
sessionStorage.setItem("hotJarActive",true);
c=true
}catch(h){}},10000)
}}function g(){if(!c){clearTimeout(e)
}}})
}})();
$(document).ready(function(){cmpHotjar.init()
});
var cmpGoogleAutoComplete=(function(){return{init:function(c){if(c&&c!==""){var b=c.find(".cmp-google-auto-complete");
b.each(function(){a($(this),c)
})
}},getStreetAddressData:function(b){var d={};
if(b.find(".googleAutocompleteSwitch").val()=="true"){var c=b.find("#street").val();
if(c){var e=c.split("  ");
d.address1=e[0]||"";
d.address2=e[1]||""
}}return d
}};
function a(j,l){var d="/ngw/syspath-bin/gartner/mdm";
companysuggestionList=true;
j.find(".company-autocomplete-close").mousedown(function(){g()
});
if(l.find(".googleAutocompleteSwitch").val()=="true"){b()
}function g(){companysuggestionList=true;
j.find("#company").val("").removeClass("successMessage errorMessage");
j.find("#street").val("").removeClass("successMessage errorMessage");
j.find("#city").val("").removeClass("successMessage errorMessage");
j.find("#state").val("").removeClass("successMessage errorMessage");
j.find("#postalCode").val("").removeClass("successMessage errorMessage");
c(j.find("#country"));
j.find(".company-autocomplete-close").addClass("hidden");
j.find(".company-ul").hide();
j.find(".company-ul").find("ul").remove()
}function c(n){n.find("option:selected").removeAttr("selected");
n.val("");
n.removeClass("successMessage");
n.removeClass("errorMessage")
}function b(){var o=j.find("#company");
var n=j.find(".company-ul");
var p=j.find(".company-autocomplete-close");
o.on("keyup",CommonFunctions.debounce(function(r){var q=d+"?requestType=MDM_ADDRESS_AUTOCOMPLETE&query="+r.target.value;
if(r.target.value.length>2&&k(r)){if(companysuggestionList){CommonFunctions.getAjaxRequest(q,true,j,function(s){var t={};
if(s.data!=undefined){if(s.data.predictions!=undefined){t=s.data.predictions
}}h(t,n)
})
}}else{m(n,p)
}if(companyFieldFocused&&r.target.value.length>0){p.removeClass("hidden")
}},200));
o.on("blur",function(q){m(n,p);
n.siblings(".gcom-icon-check-circle").show();
companyFieldFocused=false
});
o.on("focus",function(q){if(q.target.value.length>2){f(n,p)
}n.siblings(".gcom-icon-check-circle").hide();
companyFieldFocused=true
})
}function k(n){var o=n.keyCode;
return(o==32||o==8||(o>=46&&o<=90)||(o>=186&&o<=191)||(o>=219&&o<=222))
}function m(n,o){n.hide();
o.addClass("hidden")
}function f(n,o){if(n.find(".autocomplete-results li").length>0){n.show()
}o.removeClass("hidden")
}function h(o,p){p.find("ul").remove();
if(!companyFieldFocused||(j.find("#company").val().trim().length<=2)){return
}p.show();
p.append('<ul class="autocomplete-results"></ul>');
var n="";
$.each(o,function(q,r){n+='<li data-value="'+r.place_id+'">'+r.description+"</li>"
});
n+='<li data-value="0">My company and/or address isn’t listed above</li>';
p.find("ul").append(n);
p.find("li").hover(function(){p.find("li").removeClass("active");
$(this).addClass("active")
});
p.find("li").mousedown(function(){p.find("ul").remove();
p.hide();
var q=$(this).attr("data-value");
if(q!=0){j.find("#autocomplete-loading").css("display","block");
var r=d+"?requestType=MDM_ADDRESS_PROCESS_PLACE_ID&placeId="+q;
CommonFunctions.getAjaxRequest(r,true,j,function(s){e(s.data);
j.find("#autocomplete-loading").hide()
})
}else{g();
companysuggestionList=false
}})
}function e(p){var q=j.find("#company");
if(p.name){q.val(p.name)
}else{q.val("")
}var o=p.address_components["address_1"]+(p.address_components["address_2"]?"  ":"")+p.address_components["address_2"];
var r=j.find("#street");
var n=j.find("#city");
if($.trim(o)){r.val(o)
}else{r.val("")
}r.focusout();
if(p.address_components["city"]){n.val(p.address_components["city"])
}else{n.val("")
}n.focusout();
if(p.address_components["state_long"]){j.find("#state").val(p.address_components["state_long"])
}else{j.find("#state").val("")
}if(p.address_components["postal_code"]){j.find("#postalCode").val(p.address_components["postal_code"])
}else{j.find("#postalCode").val("")
}if(p.address_components["country_long"]){c(j.find("#country"));
j.find('#country option[value="'+p.address_components["country_long"].toUpperCase()+'"]').prop("selected","true")
}else{c(j.find("#country"))
}j.find("#country").focusout();
q.focusout();
q.focusin()
}}})();
var FormUtils={populateJobRole:function(d){var a=$(d).find("option:selected").data("function-label");
if(a){a=a.toString().trim();
var c=$(d).closest("form");
var b=c.find(".jobRole");
b.find("option").prop("selected",false);
b.find("option").prop("hidden",true);
var e=false;
b.find("option").each(function(f,h){var g=$(h).data("function");
if(a==g){$(h).prop("hidden",false)
}})
}},populateJobFunctionValue:function(d,e){var a=$(d).find("option:selected").data("mdm-function");
var c=$(d).closest("form");
var b;
if(e){var f="#"+e;
b=c.find(f)
}else{b=c.find("#department")
}b.find("option:selected").val(a)
},getDemandBaseAttributes:function(){var b={};
var a=$(".cmp-globalsite-demandbase");
if(a.length>0){var c=a.find(".demandbaseParams");
c.each(function(){var e=$(this).attr("name");
if(e){var d=$(this).val()||"";
b[e]=d
}})
}return b
},getFormSpecificData:function(c){var b={};
var a=c.find(".form-control");
a.each(function(e,g){var d=$(g).attr("name");
if(d){var f=FormUtils.getFieldValue($(g));
b[d]=f
}});
return b
},getHiddenParamsData:function(b){var a=b.find(".hiddenParams");
var c={};
a.each(function(){var e=$(this).attr("name");
if(e){var d=$(this).val()||"";
c[e]=d
}});
return c
},getUtmParameters:function(b){var c=b.find(".urlParams");
var a={};
c.each(function(d){var e=$(this).attr("name");
var f=CommonFunctions.urlParam(e);
if(!f){f=$(this).val()||""
}a[e]=f
});
return a
},getCommonFormData:function(d){var b=FormUtils.getDemandBaseAttributes();
var a=FormUtils.getUtmParameters(d);
var e=FormUtils.getHiddenParamsData(d);
var c=$.extend({},b,a,e);
return c
},getDataJson:function(d){var b=FormUtils.getCommonFormData(d);
var c=FormUtils.getFormSpecificData(d);
var a=$.extend({},b,c);
return a
},getOptedInFieldsData:function(c){var a={};
var b=c.find(".form-control.optedinfield");
b.each(function(f,g){var d=$(g);
var e=d.attr("name");
if(e){var h=FormUtils.getFieldValue(d);
a[e]=h
}});
return a
},getFieldValue:function(a){var c="";
if(a.is("select")){c=a.children("option:selected").val()
}else{if(a.is(":checkbox")){var b=a.prop("checked");
if(b){c=a.get(0).getAttribute("value")||"True"
}else{c="False"
}}else{c=a.val()
}}if(typeof c!=="number"&&typeof c!=="boolean"){c=c||""
}return c
}};
$(window).load(function(){(function(e,k,q){k=k.top;
if(k.location.pathname.startsWith("/editor.html/")){return
}else{if(k.location.pathname.startsWith("/content/gartner")){var a=CommonFunctions.getAllQueryParams();
var s=a.wcmmode;
if(!s||s!="disabled"){return
}}else{if(k.location.hostname=="www.gartner.com"){return
}}}var f="/ngw/syspath-bin/gartner/promotions";
var l=[];
var d=0;
var p=k.dataLayer||[];
var v=7000;
var g=[];
var t=["pageViewsThisVisit","vistedPromotionIds"];
var c={};
var n={pageScrollPercent:function(w,y,x){return{status:false,monitor:function(){if(y||y==0){var A=this;
var z="scroll."+w;
var B=function(H){var G=e(k).scrollTop();
var E=e(q).height();
var D=e(k).height();
var C=(G)/(E-D);
var F=Math.round(C*100);
console.log("inside Scroll monitor evaluations....curr pos - "+F+" target -- "+y);
if(F>=y){A.status=true;
m(w);
e(k).off(z)
}};
e(k).on(z,B)
}}}
},intendsToLeave:function(w,y,x){return{status:false,monitor:function(){var A=this;
var z="mouseleave."+w;
var B=function(C){if(C.clientY<=0||C.clientY>=k.innerHeight){A.status=true;
m(w);
e(q).off(z)
}};
e(q).on(z,B)
}}
},spentSeconds:function(w,y,x){return{status:false,monitor:function(){var A=this;
if(!y){A.status=true;
return
}var z=0;
var B=setInterval(function(){z++;
console.log("time spent in secons "+z);
switch(x){case"EQUAL":if(z==y){A.status=true;
clearInterval(B);
m(w)
}break;
case"NOTEQUAL":if(z!=y){A.status=true;
clearInterval(B);
m(w)
}break;
case"LESSTHAN":if(z<y){A.status=true;
clearInterval(B);
m(w)
}break;
case"GREATERTHAN":if(z>y){A.status=true;
clearInterval(B);
m(w)
}break;
default:A.status=true;
clearInterval(B);
m(w)
}},1000)
}}
}};
CommonFunctions.registerStorageEventListener("getPromotionsState","broadcastPromotionsState",t,function(){});
localStorage.setItem("getPromotionsState",Date.now());
k.setTimeout(function(){console.log("data collection started......");
var y={currentPath:"",sessionFact:{},localFact:{}};
var w={pageViewsThisVisit:0,vistedPromotionIds:[]};
var z=k.sessionStorage.getItem("pageViewsThisVisit");
if(!z){z=0
}z++;
k.sessionStorage.setItem("pageViewsThisVisit",z);
b();
g=k.sessionStorage.getItem("vistedPromotionIds");
if(!g||g=="null"){g=[]
}if(typeof g=="string"){g=g.split(",")
}y.currentPath=encodeURI(k.location.pathname);
w.pageViewsThisVisit=z;
w.vistedPromotionIds=g;
y.sessionFact=w;
console.log("data collection ended......");
var x=JSON.stringify(y);
console.log("data sent to server "+x);
e.ajax({url:f,data:{requestType:"GET_SELECTED_PROMOTIONS_BY_FACTS",fact:x},success:function(A){console.log(A);
var B=A.data;
r(B)
}})
},500);
function o(w,x){if(!x){return
}console.log("inside monitoring setup ....");
var y=x.promotionRules.conditionGroups;
y.forEach(function(z){var A=z.conditions;
A.forEach(function(G){var E=G.ruleType;
var B=G.evalType;
var C=G.value;
var F=n[E];
var D;
if(F&&F instanceof Function){console.log("setting monitoring callback .... "+w+C+B);
D=F(w,C,B);
D.monitor();
G.monitor=D
}else{D={status:true};
G.monitor=D
}})
});
m(w)
}function m(y){console.log("inside trigger evaluations....");
if(!y){return
}var z=c[y];
if(!z){return
}var B=z.promotionRules.operator;
var C=z.promotionRules.conditionGroups;
var A=[];
C.forEach(function(D){console.log("inside condition groups....");
var G=[];
var F=D.operator;
var H=D.conditions;
if(!H||H.length==0){return
}H.forEach(function(K){var J=K.monitor;
var I=J.status;
G.push(I)
});
var E;
G.forEach(function(J,I){if(I==0){E=J
}else{if(F=="AND"){E=E&&J
}else{E=E||J
}}});
A.push(E)
});
var w;
A.forEach(function(E,D){if(D==0){w=E
}else{if(B=="AND"){w=w&&E
}else{w=w||E
}}});
if(w){console.log("time to show promotion - impression");
delete c[y];
var x=e("#promotionWrapper_"+y);
x.show();
cmpGlobalSitePromotionType.initPromoComponents(x);
u(y);
e(q).trigger("promo.datalayer",["promoImpression",y])
}}function u(w){console.log("starting timer (7 seconds) for promo "+w+" to track promo view data layer event ");
var x=setTimeout(function(){var y=e("#promotionWrapper_"+w);
if(y.length>0){clearTimeout(x);
e(q).trigger("promo.datalayer",["promoView",w])
}},v)
}function h(A){if(!A){return
}var y=A.name;
var w=A.id;
var z=JSON.parse(A.ruleDataJson);
c[w]=z;
var x=e("<div id='promotionWrapper_"+w+"' class='promotionWrapper' data-name='"+y+"' data-promoid='"+w+"' style='display: none;background-color: white;z-index: 999987; width: 100%;'></div> ");
e(q.body).append(x);
var B=A.contentHtml;
x.html(B);
o(w,z)
}var r=function(w){if(!w){return
}l=w;
if(l.length==0){return
}l.sort(function(z,y){return z.priority-y.priority
});
d=j(l,d);
console.log("setup monitoring for next highest priority promotion with index = "+d);
var x=l[d];
h(x)
};
function j(A,G){if(!A){return G
}var E=CommonFunctions.findUserAgent().isMobile();
var D=CommonFunctions.findUserAgent().isTablet();
var C=!E&&!D;
var y=A.length;
for(var B=G;
B<y;
B++){var x=A[B];
if(!x){return
}var z=x.hideFromDesktop;
if(C&&!z){return B
}var F=x.hideFromTablet;
if(D&&!F){return B
}var w=x.hideFromMobile;
if(E&&!w){return B
}}return G
}function b(){var w={};
t.forEach(function(y,x){w[y]=k.sessionStorage.getItem(y)
});
localStorage.setItem("broadcastPromotionsState",JSON.stringify(w));
localStorage.removeItem("broadcastPromotionsState")
}e(q).on("hidden.bs.modal",function(z){var w=e(z.target);
var B=w.closest(".promotionWrapper");
var A=B.length>0;
if(!A){return
}var x=B.data("promoid");
e(q).trigger("promo.datalayer",["promoClose",x]);
B.remove();
g.push(x);
k.sessionStorage.setItem("vistedPromotionIds",g);
console.log("broadcasting the updated session state");
b();
console.log("fetch next highest priority promotion");
d++;
d=j(l,d);
if(d<l.length){console.log("setup monitoring for next highest priority promotion with index = "+d);
var y=l[d];
h(y)
}});
e(q).on("click",".promotionWrapper",function(w){var y=[".popup-trigger","[data-dismiss='modal']"];
var D=w.currentTarget;
var B=w.target;
if(!B){return true
}var x=false;
for(var C=0;
C<y.length;
C++){var A=y[C];
if(e(B).is(A)){x=true;
break
}}if(x){return true
}var z=B.tagName;
if(z=="BUTTON"||z=="A"){var E=e(D).data("promoid");
e(q).trigger("promo.datalayer",["promoClick",E])
}return true
});
e(q).on("form.submit.final",".promotionWrapper",function(y){var x=y.currentTarget;
var w=e(x).data("promoid");
e(q).trigger("promo.datalayer",["promoFormSubmit",w])
});
e(q).on("chatbox.collapsed",".promotionWrapper",function(y){var x=y.currentTarget;
var w=e(x).data("promoid");
e(q).trigger("promo.datalayer",["tabCollapse",w])
});
e(q).on("chatbox.expanded",".promotionWrapper",function(y){var x=y.currentTarget;
var w=e(x).data("promoid");
e(q).trigger("promo.datalayer",["tabExpand",w])
});
e(q).on("promo.datalayer",function(w,x,G){console.log("logging data layer event for promo "+G+" and event type is "+x);
var B="modalForm";
var z="chatBox";
var y={promoImpression:{event:"promoImpression"},promoView:{event:"promoEvent",promoEvent:"Engagement - Promo View"},promoClick:{event:"promoEvent",promoEvent:"Engagement - Promo Click"},promoFormSubmit:{event:"promoEvent",promoEvent:"Engagement - Promo Form Submit"},promoClose:{event:"promoEvent",promoEvent:"Engagement - Promo Close"},tabCollapse:{event:"promoEvent",promoEvent:"Engagement - Tab Collapse"},tabExpand:{event:"promoEvent",promoEvent:"Engagement - Tab Expand"}};
var F=y[x];
var C=e("#promotionWrapper_"+G);
var E=C.find("section.popup-modal").length;
var D=C.find("section.chat-popup").length;
var H="";
if(E){H=B
}else{if(D){H=z
}}var A={};
A.promoTitle=C.data("name")||"";
A.promoID=G;
A.promoType=H;
F=e.extend({},A,F);
p.push(F);
console.log(p)
})
})(jQuery,window,document)
});