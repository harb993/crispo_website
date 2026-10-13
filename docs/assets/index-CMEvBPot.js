(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function sr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Km(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Co={duration:.5,overwrite:!1,delay:0},Tf,gn,Ft,_i=1e8,Rt=1/_i,eh=Math.PI*2,_0=eh/4,v0=0,Zm=Math.sqrt,x0=Math.cos,y0=Math.sin,fn=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},_r=function(e){return typeof e=="number"},Ef=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},wf=function(){return typeof window<"u"},Jo=function(e){return Ht(e)||fn(e)},Jm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,M0=/random\([^)]+\)/g,S0=/,\s*/g,Ld=/(?:-?\.?\d|\.)+/gi,Qm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,aa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eg=/[+-]=-?[.\d]+/,b0=/[^,'"\[\]\s]+/gi,T0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,ki,th,Af,ci={},uc={},tg,ng=function(e){return(uc=xa(e,ci))&&$n},Cf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ro=function(e,t){return!t&&console.warn(e)},ig=function(e,t){return e&&(ci[e]=t)&&uc&&(uc[e]=t)||ci},Po=function(){return 0},E0={suppressEvents:!0,isStart:!0,kill:!1},Hl={suppressEvents:!0,kill:!1},w0={suppressEvents:!0},Rf={},kr=[],nh={},rg,ti={},Jc={},Id=30,Gl=[],Pf="",Df=function(e){var t=e[0],n,i;if($i(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Gl.length;i--&&!Gl[i].targetTest(t););n=Gl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new wg(e[i],n)))||e.splice(i,1);return e},xs=function(e){return e._gsap||Df(vi(e))[0]._gsap},sg=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():Ef(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},ca=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},A0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hc=function(){var e=kr.length,t=kr.slice(0),n,i;for(nh={},kr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lf=function(e){return!!(e._initted||e._startAt||e.add)},ag=function(e,t,n,i){kr.length&&!gn&&hc(),e.render(t,n,!!(gn&&t<0&&Lf(e))),kr.length&&!gn&&hc()},og=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(b0).length<2?t:fn(e)?e.trim():e},lg=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},C0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},xa=function(e,t){for(var n in t)e[n]=t[n];return e},Nd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},fc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},lo=function(e){var t=e.parent||Bt,n=e.keyframes?C0(An(e.keyframes)):ui;if(Wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},R0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},cg=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Uc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ys=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},P0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ih=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(Hl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},D0=function r(e){return!e||e._ts&&r(e.parent)},Ud=function(e){return e._repeat?ya(e._tTime,e=e.duration()+e._rDelay)*e:0},ya=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},dc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fc=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},Oc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fc(e),n._dirty||ys(n,e)),e},ug=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dc(e.rawTime(),t),(!t._dur||qo(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),ys(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},Hi=function(e,t,n,i){return t.parent&&Hr(t),t._start=Ot((_r(n)?n:n||e!==Bt?di(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),cg(e,t,"_first","_last",e._sort?"_start":0),rh(t)||(e._recent=t),i||ug(e,t),e._ts<0&&Oc(e,e._tTime),e},hg=function(e,t){return(ci.ScrollTrigger||Cf("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},fg=function(e,t,n,i,s){if(Nf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rg!==ii.frame)return kr.push(e),e._lazy=[s,i],1},L0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},rh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},I0=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&L0(e)&&!(!e._initted&&rh(e))||(e._ts<0||e._dp._ts<0)&&!rh(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=qo(0,e._tDur,t),u=ya(l,o),e._yoyo&&u&1&&(a=1-a),u!==ya(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||gn||i||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&fg(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ih(e,t,n,!0),e._onUpdate&&!n&&ai(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Hr(e,1),!n&&!gn&&(ai(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},N0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ma=function(e,t,n,i){var s=e._repeat,a=Ot(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ot(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Oc(e,e._tTime=e._tDur*o),e.parent&&Fc(e),n||ys(e.parent,e),e},Fd=function(e){return e instanceof Gn?ys(e):Ma(e,e._dur)},U0={_start:0,endTime:Po,totalDuration:Po},di=function r(e,t,n){var i=e.labels,s=e._recent||U0,a=e.duration()>=_i?s.endTime(!1):e._dur,o,l,c;return fn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},co=function(e,t,n){var i=_r(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;a.immediateRender=Wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Kt(t[0],a,t[s+1])},Yr=function(e,t){return e||e===0?t(e):t},qo=function(e,t,n){return n<e?e:n>t?t:n},En=function(e,t){return!fn(e)||!(t=T0.exec(e))?"":t[1]},F0=function(e,t,n){return Yr(n,function(i){return qo(e,t,i)})},sh=[].slice,dg=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==ki},O0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return fn(i)&&!t||dg(i,1)?(s=n).push.apply(s,vi(i)):n.push(i)})||n},vi=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):fn(e)&&!n&&(th||!Sa())?sh.call((t||Af).querySelectorAll(e),0):An(e)?O0(e,n):dg(e)?sh.call(e,0):e?[e]:[]},ah=function(e){return e=vi(e)[0]||Ro("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?Ro("Invalid scope")||Af.createElement("div"):e)}},pg=function(e){return e.sort(function(){return .5-Math.random()})},mg=function(e){if(Ht(e))return e;var t=$i(e)?e:{each:e},n=Ms(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return fn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,p){var _=(p||t).length,g=a[_],m,v,M,y,E,T,w,x,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,_i])[1],!S){for(w=-_i;w<(w=p[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(g=a[_]=[],m=l?Math.min(S,_)*u-.5:i%S,v=S===_i?0:l?_*d/S-.5:i/S|0,w=0,x=_i,T=0;T<_;T++)M=T%S-m,y=v-(T/S|0),g[T]=E=c?Math.abs(c==="y"?y:M):Zm(M*M+y*y),E>w&&(w=E),E<x&&(x=E);i==="random"&&pg(g),g.max=w-x,g.min=x,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=En(t.amount||t.each)||0,n=n&&_<0?K0(n):n}return _=(g[h]-g.min)/g.max||0,Ot(g.b+(n?n(_):_)*g.v)+g.u}},oh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_r(n)?0:En(n))}},gg=function(e,t){var n=An(e),i,s;return!n&&$i(e)&&(i=n=e.radius||_i,e.values?(e=vi(e.values),(s=!_r(e[0]))&&(i*=i)):e=oh(e.increment)),Yr(t,n?Ht(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=_i,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||_r(a)?u:u+En(a)}:oh(e))},_g=function(e,t,n,i){return Yr(An(e)?!t:n===!0?!!(n=0):!i,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},B0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},k0=function(e,t){return function(n){return e(parseFloat(n))+(t||En(n))}},z0=function(e,t,n){return xg(e,t,0,1,n)},vg=function(e,t,n){return Yr(n,function(i){return e[~~t(i)]})},V0=function r(e,t,n){var i=t-e;return An(e)?vg(e,r(0,e.length),t):Yr(n,function(s){return(i+(s-e)%i)%i+e})},H0=function r(e,t,n){var i=t-e,s=i*2;return An(e)?vg(e,r(0,e.length-1),t):Yr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Do=function(e){return e.replace(M0,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(S0);return _g(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},xg=function(e,t,n,i,s){var a=t-e,o=i-n;return Yr(s,function(l){return n+((l-e)/a*o||0)})},G0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=fn(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var _=Math.min(h,~~p);return u[_](p-_)},n=t}else i||(e=xa(An(e)?[]:{},e));if(!u){for(l in t)If.call(o,e,l,"get",t[l]);s=function(p){return Of(p,o)||(a?e.p:e)}}}return Yr(n,s)},Od=function(e,t,n){var i=e.labels,s=_i,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ai=function(e,t,n){var i=e.vars,s=i[t],a=Ft,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&kr.length&&hc(),o&&(Ft=o),u=l?s.apply(c,l):s.call(c),Ft=a,u},Ja=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&ai(e,"onInterrupt"),e},oa,yg=[],Mg=function(e){if(e)if(e=!e.name&&e.default||e,wf()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Po,render:Of,add:If,kill:av,modifier:sv,rawVars:0},a={targetTest:0,get:0,getSetter:Ff,aliases:{},register:0};if(Sa(),e!==i){if(ti[t])return;ui(i,ui(fc(e,s),a)),xa(i.prototype,xa(s,fc(e,a))),ti[i.prop=t]=i,e.targetTest&&(Gl.push(i),Rf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ig(t,i),e.register&&e.register($n,i,qn)}else yg.push(e)},Ct=255,Qa={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Qc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},Sg=function(e,t,n){var i=e?_r(e)?[e>>16,e>>8&Ct,e&Ct]:0:Qa.black,s,a,o,l,c,u,d,h,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qa[e])i=Qa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Ld),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Qc(l+1/3,s,a),i[1]=Qc(l,s,a),i[2]=Qc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Qm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ld)||Qa.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Ct,a=i[1]/Ct,o=i[2]/Ct,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},bg=function(e){var t=[],n=[],i=-1;return e.split(zr).forEach(function(s){var a=s.match(aa)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Bd=function(e,t,n){var i="",s=(e+i).match(zr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Sg(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=bg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(zr,"1").split(aa),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(zr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},zr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),W0=/hsl[a]?\(/,Tg=function(e){var t=e.join(" "),n;if(zr.lastIndex=0,zr.test(t))return n=W0.test(t),e[1]=Bd(e[1],n),e[0]=Bd(e[0],n,bg(e[1])),!0},Lo,ii=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,p=function _(g){var m=r()-i,v=g===!0,M,y,E,T;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,M=E-a,(M>0||v)&&(T=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,a+=M+(M>=s?4:s-M),y=1),v||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](E,h,T,g)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){tg&&(!th&&wf()&&(ki=th=window,Af=ki.document||{},ci.gsap=$n,(ki.gsapVersions||(ki.gsapVersions=[])).push($n.version),ng(uc||ki.GreenSockGlobals||!ki.gsap&&ki||{}),yg.forEach(Mg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(g){return setTimeout(g,a-d.time*1e3+1|0)},Lo=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Lo=0,c=Po},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),a=d.time*1e3+s},add:function(g,m,v){var M=m?function(y,E,T,w){g(y,E,T,w),d.remove(M)}:g;return d.remove(g),o[v?"unshift":"push"](M),Sa(),M},remove:function(g,m){~(m=o.indexOf(g))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),Sa=function(){return!Lo&&ii.wake()},ht={},X0=/^[\d.\-M][\d.\-,\s]/,q0=/["']/g,Y0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(q0,"").trim():+c,i=l.substr(o+1).trim();return t},$0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},j0=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Y0(t[1])]:$0(e).split(",").map(og)):ht._CE&&X0.test(e)?ht._CE("",e):n},K0=function(e){return function(t){return 1-e(1-t)}},Ms=function(e,t){return e&&(Ht(e)?e:ht[e]||j0(e))||t},Ls=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Xn(e,function(o){ht[o]=ci[o]=s,ht[a=o.toLowerCase()]=n;for(var l in s)ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[o+"."+l]=s[l]}),s},Eg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},eu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/eh*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*y0((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Eg(o);return s=eh/s,l.config=function(c,u){return r(e,c,u)},l},tu=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Eg(n);return i.config=function(s){return r(e,s)},i};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ls(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Ls("Elastic",eu("in"),eu("out"),eu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ls("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ls("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ls("Circ",function(r){return-(Zm(1-r*r)-1)});Ls("Sine",function(r){return r===1?1:-x0(r*_0)+1});Ls("Back",tu("in"),tu("out"),tu());ht.SteppedEase=ht.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Rt;return function(o){return((i*qo(0,a,o)|0)+s)*n}}};Co.ease=ht["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Pf+=r+","+r+"Params,"});var wg=function(e,t){this.id=v0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sg,this.set=t?t.getSetter:Ff},Io=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ma(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),Lo||ii.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ma(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Sa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Oc(this,n),!s._dp||s.parent||ug(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Rt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ag(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ud(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ud(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ya(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts,this.totalTime(qo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fc(this),P0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Sa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=w0);var i=gn;return gn=n,Lf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(di(this,n),Wn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Wn(i)),this._dur||(this._zTime=-Rt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Rt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ht(n)?n:lg,l=function(){var u=i.then;i.then=null,s&&s(),Ht(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ja(this)},r})();ui(Io.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var Gn=(function(r){Km(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wn(n.sortChildren),Bt&&Hi(n.parent||Bt,sr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hg(sr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return co(0,arguments,this),this},t.from=function(i,s,a){return co(1,arguments,this),this},t.fromTo=function(i,s,a,o){return co(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,di(this,a),1),this},t.call=function(i,s,a){return Hi(this,Kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Kt(i,a,di(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,lo(a).immediateRender=Wn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,lo(o).immediateRender=Wn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ot(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,p,_,g,m,v,M,y,E,T,w;if(this!==Bt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,M=this._ts,m=!M,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,a);if(h=Ot(u%g),u===l?(_=this._repeat,h=c):(E=Ot(u/g),_=~~E,_&&_===E&&(h=c,_--),h>c&&(h=c)),E=ya(this._tTime,g),!o&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),T&&_&1&&(h=c-h,w=1),_!==E&&!this._lock){var x=T&&E&1,S=x===(T&&_&1);if(_<E&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Ot(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=N0(this,Ot(o),Ot(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!E&&(ai(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){v=0,p&&(u+=this._zTime=-Rt);break}}f=p}else{f=this._last;for(var P=i<0?i:h;f;){if(p=f._prev,(f._act||P<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(P-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(P-f._start)*f._ts,s,a||gn&&Lf(f)),h!==this._time||!this._ts&&!m){v=0,p&&(u+=this._zTime=P?-Rt:Rt);break}}f=p}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-Rt)._zTime=h>=o?1:-1,this._ts))return this._start=y,Fc(this),this.render(i,s,a);this._onUpdate&&!s&&ai(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ai(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(_r(s)||(s=di(this,s,i)),!(i instanceof Io)){if(An(i))return i.forEach(function(o){return a.add(o,s)}),this;if(fn(i))return this.addLabel(i,s);if(Ht(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Hi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-_i);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return fn(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(i.parent===this&&Uc(this,i),i===this._recent&&(this._recent=this._last),ys(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=di(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Kt.delayedCall(0,s||Po,a);return o.data="isPause",this._hasPause=1,Hi(this,o,di(this,i))},t.removePause=function(i){var s=this._first;for(i=di(this,i);s;)s._start===i&&s.data==="isPause"&&Hr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Lr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=vi(i),l=this._first,c=_r(s),u;l;)l instanceof Kt?A0(l._targets,o)&&(c?(!Lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=di(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,p=Kt.to(a,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Rt,onStart:function(){if(a.pause(),!f){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==g&&Ma(p,g,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,d||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ui({startAt:{time:di(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Od(this,di(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Od(this,di(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ot(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ys(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ys(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=_i,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Hi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ot(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ma(a,a===Bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Bt._ts&&(ag(Bt,dc(i,Bt)),rg=ii.frame),ii.frame>=Id){Id+=li.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&li.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},e})(Io);ui(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Z0=function(e,t,n,i,s,a,o){var l=new qn(this._pt,e,t,0,1,Lg,null,s),c=0,u=0,d,h,f,p,_,g,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Do(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(Zc)||[];d=Zc.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:p.charAt(1)==="="?ca(g,p)-g:parseFloat(p)-g,m:f&&f<4?Math.round:0},c=Zc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(eg.test(i)||m)&&(l.e=0),this._pt=l,l},If=function(e,t,n,i,s,a,o,l,c,u){Ht(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Ht(d)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Ht(d)?c?nv:Pg:Uf,p;if(fn(i)&&(~i.indexOf("random(")&&(i=Do(i)),i.charAt(1)==="="&&(p=ca(h,i)+(En(h)||0),(p||p===0)&&(i=p))),!u||h!==i||lh)return!isNaN(h*i)&&i!==""?(p=new qn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?rv:Dg,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!d&&!(t in e)&&Cf(t,i),Z0.call(this,e,t,h,i,f,l||li.stringFilter,c))},J0=function(e,t,n,i,s){if(Ht(e)&&(e=uo(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||An(e)||Jm(e))return fn(e)?uo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=uo(e[o],s,t,n,i);return a},Ag=function(e,t,n,i,s,a){var o,l,c,u;if(ti[e]&&(o=new ti[e]).init(s,o.rawVars?t[e]:J0(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new qn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==oa))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Lr,lh,Nf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,p=e._dur,_=e._startAt,g=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:g,M=e._overwrite==="auto"&&!Tf,y=e.timeline,E=i.easeReverse||d,T,w,x,S,P,R,D,k,V,H,z,F,J;if(y&&(!h||!s)&&(s="none"),e._ease=Ms(s,Co.ease),e._rEase=E&&(Ms(E)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||h&&!i.stagger){if(k=g[0]?xs(g[0]).harness:0,F=k&&i[k.prop],T=fc(i,Rf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&p?Hl:E0),_._lazy=0),a){if(Hr(e._startAt=Kt.set(g,ui({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!o&&!f)&&e._startAt.revert(Hl),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(o=!1),x=ui({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Wn(l),immediateRender:o,stagger:0,parent:m},T),F&&(x[k.prop]=F),Hr(e._startAt=Kt.set(g,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Hl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Wn(l)||l&&!p,w=0;w<g.length;w++){if(P=g[w],D=P._gsap||Df(g)[w]._gsap,e._ptLookup[w]=H={},nh[D.id]&&kr.length&&hc(),z=v===g?w:v.indexOf(P),k&&(V=new k).init(P,F||T,e,z,v)!==!1&&(e._pt=S=new qn(e._pt,P,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(Q){H[Q]=S}),V.priority&&(R=1)),!k||F)for(x in T)ti[x]&&(V=Ag(x,T,e,z,P,v))?V.priority&&(R=1):H[x]=S=If.call(e,P,x,"get",T[x],z,v,0,i.stringFilter);e._op&&e._op[w]&&e.kill(P,e._op[w]),M&&e._pt&&(Lr=e,Bt.killTweensOf(P,H,e.globalTime(t)),J=!e.parent,Lr=0),e._pt&&l&&(nh[D.id]=1)}R&&Ig(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,h&&t<=0&&y.render(_i,!0,!0)},Q0=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lh=1,e.vars[t]="+=0",Nf(e,o),lh=0,l?Ro(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Xt(n)+En(d.e)),d.b&&(d.b=u.s+En(d.b))},ev=function(e,t){var n=e[0]?xs(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=xa({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},tv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(An(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},uo=function(e,t,n,i,s){return Ht(e)?e.call(t,n,i,s):fn(e)&&~e.indexOf("random(")?Do(e):e},Cg=Pf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Rg={};Xn(Cg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Rg[r]=1});var Kt=(function(r){Km(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:lo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=i.parent||Bt,v=(An(n)||Jm(n)?_r(n[0]):"length"in i)?[n]:vi(n),M,y,E,T,w,x,S,P;if(o._targets=v.length?Df(v):Ro("GSAP target "+n+" not found. https://gsap.com",!li.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,p||h||Jo(c)||Jo(u)){i=o.vars;var R=i.easeReverse||i.yoyoEase;if(M=o.timeline=new Gn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:v}),M.kill(),M.parent=M._dp=sr(o),M._start=0,h||Jo(c)||Jo(u)){if(T=v.length,S=h&&mg(h),$i(h))for(w in h)~Cg.indexOf(w)&&(P||(P={}),P[w]=h[w]);for(y=0;y<T;y++)E=fc(i,Rg),E.stagger=0,R&&(E.easeReverse=R),P&&xa(E,P),x=v[y],E.duration=+uo(c,sr(o),y,x,v),E.delay=(+uo(u,sr(o),y,x,v)||0)-o._delay,!h&&T===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),M.to(x,E,S?S(y,x,v):0),M._ease=ht.none;M.duration()?c=u=0:o.timeline=0}else if(p){lo(ui(M.vars.defaults,{ease:"none"})),M._ease=Ms(p.ease||i.ease||"none");var D=0,k,V,H;if(An(p))p.forEach(function(z){return M.to(v,z,">")}),M.duration();else{E={};for(w in p)w==="ease"||w==="easeEach"||tv(w,p[w],E,p.easeEach);for(w in E)for(k=E[w].sort(function(z,F){return z.t-F.t}),D=0,y=0;y<k.length;y++)V=k[y],H={ease:V.e,duration:(V.t-(y?k[y-1].t:0))/100*c},H[w]=V.v,M.to(v,H,D),D+=H.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return f===!0&&!Tf&&(Lr=sr(o),Bt.killTweensOf(v),Lr=0),Hi(m,sr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!p&&o._start===Ot(m._time)&&Wn(d)&&D0(sr(o))&&m.data!=="nested")&&(o._tTime=-Rt,o.render(Math.max(0,-u)||0)),g&&hg(sr(o),g),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Rt&&!u?l:i<Rt?0:i,h,f,p,_,g,m,v,M;if(!c)I0(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Ot(d%_),d===l?(p=this._repeat,h=c):(g=Ot(d/_),p=~~g,p&&p===g?(h=c,p--):h>c&&(h=c)),m=this._yoyo&&p&1,m&&(h=c-h),g=ya(this._tTime,_),h===o&&!a&&this._initted&&p===g)return this._tTime=d,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Ot(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(fg(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=h<o;if(y!==this._inv){var E=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(y?-1:1)/E:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!g&&(ai(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ih(this,i,s,a),ai(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&ai(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ih(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(ai(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Lo||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Nf(this,c),u=this._ease(c/this._dur),Q0(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Oc(this,0),this.parent||cg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ja(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Lr&&Lr.vars.overwrite!==!0)._first||Ja(this),this.parent&&a!==this.timeline.totalDuration()&&Ma(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?vi(i):o,c=this._ptLookup,u=this._pt,d,h,f,p,_,g,m;if((!s||s==="all")&&R0(o,l))return s==="all"&&(this._pt=0),Ja(this);for(d=this._op=this._op||[],s!=="all"&&(fn(s)&&(_={},Xn(s,function(v){return _[v]=1}),s=_),s=ev(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,p=h,f={}):(f=d[m]=d[m]||{},p=s);for(_ in p)g=h&&h[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Uc(this,g,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Ja(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return co(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return co(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Bt.killTweensOf(i,s,a)},e})(Io);ui(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Gn,t=sh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Uf=function(e,t,n){return e[t]=n},Pg=function(e,t,n){return e[t](n)},nv=function(e,t,n,i){return e[t](i.fp,n)},iv=function(e,t,n){return e.setAttribute(t,n)},Ff=function(e,t){return Ht(e[t])?Pg:Ef(e[t])&&e.setAttribute?iv:Uf},Dg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Of=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sv=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},av=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Uc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ov=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ig=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},qn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Dg,this.d=l||this,this.set=c||Uf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ov,this.m=n,this.mt=s,this.tween=i},r})();Xn(Pf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Rf[r]=1});ci.TweenMax=ci.TweenLite=Kt;ci.TimelineLite=ci.TimelineMax=Gn;Bt=new Gn({sortChildren:!1,defaults:Co,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=Tg;var Ss=[],Wl={},lv=[],kd=0,cv=0,nu=function(e){return(Wl[e]||lv).map(function(t){return t()})},ch=function(){var e=Date.now(),t=[];e-kd>2&&(nu("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ki.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),nu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kd=e,nu("matchMedia"))},Ng=(function(){function r(t,n){this.selector=n&&ah(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ht(n)&&(s=i,i=n,n=Ht);var a=this,o=function(){var c=Ft,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=ah(s)),Ft=a,d=i.apply(a,arguments),Ht(d)&&a._r.push(d),Ft=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ht?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ft;Ft=null,n(this),Ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ss.length;a--;)Ss[a].id===this.id&&Ss.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),uv=(function(){function r(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$i(n)||(n={matches:n});var a=new Ng(0,s||this.scope),o=a.conditions={},l,c,u;Ft&&!a.selector&&(a.selector=Ft.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ki.matchMedia(n[c]),l&&(Ss.indexOf(a)<0&&Ss.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ch):l.addEventListener("change",ch)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),pc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Mg(i)})},timeline:function(e){return new Gn(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){fn(e)&&(e=vi(e)[0]);var s=xs(e||{}).get,a=n?lg:og;return n==="native"&&(n=""),e&&(t?a((ti[t]&&ti[t].get||s)(e,t,n,i)):function(o,l,c){return a((ti[o]&&ti[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var i=e.map(function(u){return $n.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=ti[t],o=xs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;oa._pt=0,d.init(e,n?u+n:u,oa,0,[e]),d.render(1,d),oa._pt&&Of(1,oa)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=$n.to(e,ui((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ms(e.ease,Co.ease)),Nd(Co,e||{})},config:function(e){return Nd(li,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ti[o]&&!ci[o]&&Ro(t+" effect requires "+o+" plugin.")}),Jc[t]=function(o,l,c){return n(vi(o),ui(l||{},s),c)},a&&(Gn.prototype[t]=function(o,l,c){return this.add(Jc[t](o,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Ms(t)},parseEase:function(e,t){return arguments.length?Ms(e,t):ht},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gn(e),i,s;for(n.smoothChildTiming=Wn(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Hi(n,i,i._start-i._delay),i=s;return Hi(Bt,n,0),n},context:function(e,t){return e?new Ng(e,t):Ft},matchMedia:function(e){return new uv(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ch()},addEventListener:function(e,t){var n=Wl[e]||(Wl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:V0,wrapYoyo:H0,distribute:mg,random:_g,snap:gg,normalize:z0,getUnit:En,clamp:F0,splitColor:Sg,toArray:vi,selector:ah,mapRange:xg,pipe:B0,unitize:k0,interpolate:G0,shuffle:pg},install:ng,effects:Jc,ticker:ii,updateRoot:Gn.updateRoot,plugins:ti,globalTimeline:Bt,core:{PropTween:qn,globals:ig,Tween:Kt,Timeline:Gn,Animation:Io,getCache:xs,_removeLinkedListItem:Uc,reverting:function(){return gn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return Tf=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pc[r]=Kt[r]});ii.add(Gn.updateRoot);oa=pc.to({},{duration:0});var hv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fv=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=hv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},iu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(fn(s)&&(l={},Xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fv(o,s)}}}},$n=pc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},iu("roundProps",oh),iu("modifiers"),iu("snap",gg))||pc;Kt.version=Gn.version=$n.version="3.15.0";tg=1;wf()&&Sa();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;var zd,Ir,ua,Bf,ps,Vd,kf,dv=function(){return typeof window<"u"},vr={},os=180/Math.PI,ha=Math.PI/180,Os=Math.atan2,Hd=1e8,zf=/([A-Z])/g,pv=/(left|right|width|margin|padding|x)/i,mv=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_v=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ug=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Fg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},yv=function(e,t,n){return e.style[t]=n},Mv=function(e,t,n){return e.style.setProperty(t,n)},Sv=function(e,t,n){return e._gsap[t]=n},bv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Tv=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Ev=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},kt="transform",Yn=kt+"Origin",wv=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in vr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ar(i,o)}):this.tfm[e]=a.x?a[e]:ar(i,e),e===Yn&&(this.tfm.zOrigin=a.zOrigin);else return Gi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(kt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Yn,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},Og=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Av=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(zf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=kf(),(!s||!s.isStart)&&!n[kt]&&(Og(n),i.zOrigin&&n[Yn]&&(n[Yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bg=function(e,t){var n={target:e,props:[],revert:Av,save:wv};return e._gsap||$n.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},kg,hh=function(e,t){var n=Ir.createElementNS?Ir.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ir.createElement(e);return n&&n.style?n:Ir.createElement(e)},oi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(zf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ba(t)||t,1)||""},Gd="O,Moz,ms,Ms,Webkit".split(","),ba=function(e,t,n){var i=t||ps,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Gd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Gd[a]:"")+e},fh=function(){dv()&&window.document&&(zd=window,Ir=zd.document,ua=Ir.documentElement,ps=hh("div")||{style:{}},hh("div"),kt=ba(kt),Yn=kt+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kg=!!ba("perspective"),kf=$n.core.reverting,Bf=1)},Wd=function(e){var t=e.ownerSVGElement,n=hh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ua.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ua.removeChild(n),s},Xd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zg=function(e){var t,n;try{t=e.getBBox()}catch{t=Wd(e),n=1}return t&&(t.width||t.height)||n||(t=Wd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Xd(e,["x","cx","x1"])||0,y:+Xd(e,["y","cy","y1"])||0,width:0,height:0}:t},Vg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zg(e))},Gr=function(e,t){if(t){var n=e.style,i;t in vr&&t!==Yn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(zf,"-$1").toLowerCase())):n.removeAttribute(t)}},Nr=function(e,t,n,i,s,a){var o=new qn(e._pt,t,n,0,1,a?Fg:Ug);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},qd={deg:1,rad:1,turn:1},Cv={grid:1,flex:1},Wr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ps.style,l=pv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",p,_,g,m;if(i===a||!s||qd[i]||qd[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&Vg(e),(f||a==="%")&&(vr[t]||~t.indexOf("adius")))return p=m?e.getBBox()[l?"width":"height"]:e[u],Xt(f?s/p*d:s/100*p);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ir||!_.appendChild)&&(_=Ir.body),g=_._gsap,g&&f&&g.width&&l&&g.time===ii.time&&!g.uncache)return Xt(s/g.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,p=e[u],v?e.style[t]=v:Gr(e,t)}else(f||a==="%")&&!Cv[oi(_,"display")]&&(o.position=oi(e,"position")),_===e&&(o.position="static"),_.appendChild(ps),p=ps[u],_.removeChild(ps),o.position="absolute";return l&&f&&(g=xs(_),g.time=ii.time,g.width=_[u]),Xt(h?p*s/d:p&&s?d/p*s:0)},ar=function(e,t,n,i){var s;return Bf||fh(),t in Gi&&t!=="transform"&&(t=Gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),vr[t]&&t!=="transform"?(s=Uo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:gc(oi(e,Yn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=mc[t]&&mc[t](e,t,n)||oi(e,t)||sg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Wr(e,t,s,n)+n:s},Rv=function(e,t,n,i){if(!n||n==="none"){var s=ba(t,e,1),a=s&&oi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var o=new qn(this._pt,e.style,t,0,1,Lg),l=0,c=0,u,d,h,f,p,_,g,m,v,M,y,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=oi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=oi(e,t)||i,_?e.style[t]=_:Gr(e,t)),u=[n,i],Tg(u),n=u[0],i=u[1],h=n.match(aa)||[],E=i.match(aa)||[],E.length){for(;d=aa.exec(i);)g=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),g!==(_=h[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),g.charAt(1)==="="&&(g=ca(f,g)+y),m=parseFloat(g),M=g.substr((m+"").length),l=aa.lastIndex-M.length,M||(M=M||li.units[t]||y,l===i.length&&(i+=M,o.e+=M)),y!==M&&(f=Wr(e,t,_,M)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:m-f,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Fg:Ug;return eg.test(i)&&(o.e=0),this._pt=o,o},Yd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Pv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Yd[n]||n,t[1]=Yd[i]||i,t.join(" ")},Dv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],vr[o]&&(l=1,o=o==="transformOrigin"?Yn:kt),Gr(n,o);l&&(Gr(n,kt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Uo(n,1),a.uncache=1,Og(i)))}},mc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new qn(e._pt,t,n,0,0,Dv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},No=[1,0,0,1,0,0],Hg={},Gg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},$d=function(e){var t=oi(e,kt);return Gg(t)?No:t.substr(7).match(Qm).map(Xt)},Vf=function(e,t){var n=e._gsap||xs(e),i=e.style,s=$d(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?No:s):(s===No&&!e.offsetParent&&e!==ua&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ua.appendChild(e)),s=$d(e),l?i.display=l:Gr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ua.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},dh=function(e,t,n,i,s,a){var o=e._gsap,l=s||Vf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],p=l[1],_=l[2],g=l[3],m=l[4],v=l[5],M=t.split(" "),y=parseFloat(M[0])||0,E=parseFloat(M[1])||0,T,w,x,S;n?l!==No&&(w=f*g-p*_)&&(x=y*(g/w)+E*(-_/w)+(_*v-g*m)/w,S=y*(-p/w)+E*(f/w)-(f*v-p*m)/w,y=x,E=S):(T=zg(e),y=T.x+(~M[0].indexOf("%")?y/100*T.width:y),E=T.y+(~(M[1]||M[0]).indexOf("%")?E/100*T.height:E)),i||i!==!1&&o.smooth?(m=y-c,v=E-u,o.xOffset=d+(m*f+v*_)-m,o.yOffset=h+(m*p+v*g)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Yn]="0px 0px",a&&(Nr(a,o,"xOrigin",c,y),Nr(a,o,"yOrigin",u,E),Nr(a,o,"xOffset",d,o.xOffset),Nr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Uo=function(e,t){var n=e._gsap||new wg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=oi(e,Yn)||"0",u,d,h,f,p,_,g,m,v,M,y,E,T,w,x,S,P,R,D,k,V,H,z,F,J,Q,L,le,ce,ke,We,$e;return u=d=h=_=g=m=v=M=y=0,f=p=1,n.svg=!!(e.getCTM&&Vg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),w=Vf(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),dh(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,T=n.yOrigin||0,w!==No&&(R=w[0],D=w[1],k=w[2],V=w[3],u=H=w[4],d=z=w[5],w.length===6?(f=Math.sqrt(R*R+D*D),p=Math.sqrt(V*V+k*k),_=R||D?Os(D,R)*os:0,v=k||V?Os(k,V)*os+_:0,v&&(p*=Math.abs(Math.cos(v*ha))),n.svg&&(u-=E-(E*R+T*k),d-=T-(E*D+T*V))):($e=w[6],ke=w[7],L=w[8],le=w[9],ce=w[10],We=w[11],u=w[12],d=w[13],h=w[14],x=Os($e,ce),g=x*os,x&&(S=Math.cos(-x),P=Math.sin(-x),F=H*S+L*P,J=z*S+le*P,Q=$e*S+ce*P,L=H*-P+L*S,le=z*-P+le*S,ce=$e*-P+ce*S,We=ke*-P+We*S,H=F,z=J,$e=Q),x=Os(-k,ce),m=x*os,x&&(S=Math.cos(-x),P=Math.sin(-x),F=R*S-L*P,J=D*S-le*P,Q=k*S-ce*P,We=V*P+We*S,R=F,D=J,k=Q),x=Os(D,R),_=x*os,x&&(S=Math.cos(x),P=Math.sin(x),F=R*S+D*P,J=H*S+z*P,D=D*S-R*P,z=z*S-H*P,R=F,H=J),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),f=Xt(Math.sqrt(R*R+D*D+k*k)),p=Xt(Math.sqrt(z*z+$e*$e)),x=Os(H,z),v=Math.abs(x)>2e-4?x*os:0,y=We?1/(We<0?-We:We):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Gg(oi(e,kt)),F&&e.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Xt(f),n.scaleY=Xt(p),n.rotation=Xt(_)+o,n.rotationX=Xt(g)+o,n.rotationY=Xt(m)+o,n.skewX=v+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Yn]=gc(c)),n.xOffset=n.yOffset=0,n.force3D=li.force3D,n.renderTransform=n.svg?Iv:kg?Wg:Lv,n.uncache=0,n},gc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ru=function(e,t,n){var i=En(t);return Xt(parseFloat(t)+parseFloat(Wr(e,"x",n+"px",i)))+i},Lv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Wg(e,t)},Zr="0deg",za="0px",Jr=") ",Wg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,v=n.target,M=n.zOrigin,y="",E=m==="auto"&&e&&e!==1||m===!0;if(M&&(d!==Zr||u!==Zr)){var T=parseFloat(u)*ha,w=Math.sin(T),x=Math.cos(T),S;T=parseFloat(d)*ha,S=Math.cos(T),a=ru(v,a,w*S*-M),o=ru(v,o,-Math.sin(T)*-M),l=ru(v,l,x*S*-M+M)}g!==za&&(y+="perspective("+g+Jr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||a!==za||o!==za||l!==za)&&(y+=l!==za||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Jr),c!==Zr&&(y+="rotate("+c+Jr),u!==Zr&&(y+="rotateY("+u+Jr),d!==Zr&&(y+="rotateX("+d+Jr),(h!==Zr||f!==Zr)&&(y+="skew("+h+", "+f+Jr),(p!==1||_!==1)&&(y+="scale("+p+", "+_+Jr),v.style[kt]=y||"translate(0, 0)"},Iv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,v=n.forceCSS,M=parseFloat(a),y=parseFloat(o),E,T,w,x,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ha,c*=ha,E=Math.cos(l)*d,T=Math.sin(l)*d,w=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=ha,S=Math.tan(c-u),S=Math.sqrt(1+S*S),w*=S,x*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,T*=S)),E=Xt(E),T=Xt(T),w=Xt(w),x=Xt(x)):(E=d,x=h,T=w=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=Wr(f,"x",a,"px"),y=Wr(f,"y",o,"px")),(p||_||g||m)&&(M=Xt(M+p-(p*E+_*w)+g),y=Xt(y+_-(p*T+_*x)+m)),(i||s)&&(S=f.getBBox(),M=Xt(M+i/100*S.width),y=Xt(y+s/100*S.height)),S="matrix("+E+","+T+","+w+","+x+","+M+","+y+")",f.setAttribute("transform",S),v&&(f.style[kt]=S)},Nv=function(e,t,n,i,s){var a=360,o=fn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?os:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Hd)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Hd)%a-~~(c/a)*a)),e._pt=h=new qn(e._pt,t,n,i,c,gv),h.e=u,h.u="deg",e._props.push(n),h},jd=function(e,t){for(var n in t)e[n]=t[n];return e},Uv=function(e,t,n){var i=jd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[kt]=t,o=Uo(n,1),Gr(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],a[kt]=t,o=Uo(n,1),a[kt]=c);for(l in vr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=En(c),p=En(u),d=f!==p?Wr(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new qn(e._pt,o,l,d,h-d,uh),e._pt.u=p||0,e._props.push(l));jd(o,i)};Xn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});mc[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(p){return ar(o,p,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(p,_){return f[p]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var Xg={name:"css",register:fh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,p,_,g,m,v,M,y,E,T,w,x,S;Bf||fh(),this.styles=this.styles||Bg(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ti[_]&&Ag(_,t,n,i,e,s)))){if(f=typeof u,p=mc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Do(u)),p)p(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",zr.lastIndex=0,zr.test(c)||(g=En(c),m=En(u),m?g!==m&&(c=Wr(e,_,c,m)+m):g&&(u+=g)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],fn(c)&&~c.indexOf("random(")&&(c=Do(c)),En(c+"")||c==="auto"||(c+=li.units[_]||En(ar(e,_))||""),(c+"").charAt(1)==="="&&(c=ar(e,_))):c=ar(e,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in Gi&&(_==="autoAlpha"&&(h===1&&ar(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),Nr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in vr,M){if(this.styles.save(_),S=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=oi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=u,u=oi(e,"perspective"),P?e.style.perspective=P:Gr(e,"perspective")}d=parseFloat(u)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Uo(e,t.parseTransform),T=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new qn(this._pt,o,kt,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new qn(this._pt,E,"scaleY",E.scaleY,(v?ca(E.scaleY,v+d):d)-E.scaleY||0,uh),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Yn,0,o[Yn]),u=Pv(u),E.svg?dh(e,u,0,T,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&Nr(this,E,"zOrigin",E.zOrigin,m),Nr(this,o,_,gc(c),gc(u)));continue}else if(_==="svgOrigin"){dh(e,u,1,T,0,this);continue}else if(_ in Hg){Nv(this,E,_,h,v?ca(h,v+u):u);continue}else if(_==="smoothOrigin"){Nr(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){Uv(this,u,e);continue}}else _ in o||(_=ba(_)||_);if(M||(d||d===0)&&(h||h===0)&&!mv.test(u)&&_ in o)g=(c+"").substr((h+"").length),d||(d=0),m=En(u)||(_ in li.units?li.units[_]:g),g!==m&&(h=Wr(e,_,c,m)),this._pt=new qn(this._pt,M?E:o,_,h,(v?ca(h,v+d):d)-h,!M&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?xv:uh),this._pt.u=m||0,M&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=vv):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=_v);else if(_ in o)Rv.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){Cf(_,u);continue}M||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}w&&Ig(this)},render:function(e,t){if(t.tween._time||!kf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ar,aliases:Gi,getSetter:function(e,t,n){var i=Gi[t];return i&&i.indexOf(",")<0&&(t=i),t in vr&&t!==Yn&&(e._gsap.x||ar(e,"x"))?n&&Vd===n?t==="scale"?bv:Sv:(Vd=n||{})&&(t==="scale"?Tv:Ev):e.style&&!Ef(e.style[t])?yv:~t.indexOf("-")?Mv:Ff(e,t)},core:{_removeProperty:Gr,_getMatrix:Vf}};$n.utils.checkPrefix=ba;$n.core.getStyleSaver=Bg;(function(r,e,t,n){var i=Xn(r+","+e+","+t,function(s){vr[s]=1});Xn(e,function(s){li.units[s]="deg",Hg[s]=1}),Gi[i[13]]=r+","+e,Xn(n,function(s){var a=s.split(":");Gi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){li.units[r]="px"});$n.registerPlugin(Xg);var dt=$n.registerPlugin(Xg)||$n;dt.core.Tween;const Fv="modulepreload",Ov=function(r,e){return new URL(r,e).href},Kd={},Bc=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(u=>{if(u=Ov(u,n),u in Kd)return;Kd[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(n)for(let p=a.length-1;p>=0;p--){const _=a[p];if(_.href===u&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Fv,d||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((p,_)=>{f.addEventListener("load",p),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};const Hf="183",Bv=0,Zd=1,kv=2,Xl=1,zv=2,eo=3,Xr=0,kn=1,gi=2,pr=0,fa=1,Jd=2,Qd=3,ep=4,Vv=5,hs=100,Hv=101,Gv=102,Wv=103,Xv=104,qv=200,Yv=201,$v=202,jv=203,ph=204,mh=205,Kv=206,Zv=207,Jv=208,Qv=209,ex=210,tx=211,nx=212,ix=213,rx=214,gh=0,_h=1,vh=2,Ta=3,xh=4,yh=5,Mh=6,Sh=7,Gf=0,sx=1,ax=2,qi=0,qg=1,Yg=2,$g=3,Wf=4,jg=5,Kg=6,Zg=7,tp="attached",ox="detached",Jg=300,As=301,Ea=302,ql=303,su=304,kc=306,_c=1e3,Pi=1001,bh=1002,pn=1003,lx=1004,Qo=1005,qt=1006,au=1007,Ur=1008,Vw=1008,ri=1009,Qg=1010,e_=1011,Fo=1012,Xf=1013,ji=1014,xi=1015,xr=1016,qf=1017,Yf=1018,Oo=1020,t_=35902,n_=35899,i_=1021,r_=1022,yi=1023,yr=1026,ms=1027,$f=1028,jf=1029,wa=1030,Kf=1031,Zf=1033,Yl=33776,$l=33777,jl=33778,Kl=33779,Th=35840,Eh=35841,wh=35842,Ah=35843,Ch=36196,Rh=37492,Ph=37496,Dh=37488,Lh=37489,Ih=37490,Nh=37491,Uh=37808,Fh=37809,Oh=37810,Bh=37811,kh=37812,zh=37813,Vh=37814,Hh=37815,Gh=37816,Wh=37817,Xh=37818,qh=37819,Yh=37820,$h=37821,jh=36492,Kh=36494,Zh=36495,Jh=36283,Qh=36284,ef=36285,tf=36286,vc=2300,nf=2301,ou=2302,np=2303,ip=2400,rp=2401,sp=2402,cx=2500,ux=0,hx=1,ap=2,fx=3200,Jf=0,dx=1,or="",Vn="srgb",Cs="srgb-linear",xc="linear",St="srgb",Bs=7680,op=519,px=512,mx=513,gx=514,Qf=515,_x=516,vx=517,ed=518,xx=519,rf=35044,lp="300 es",Wi=2e3,Bo=2001;function yx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Mx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ko(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sx(){const r=ko("canvas");return r.style.display="block",r}const cp={};function yc(...r){const e="THREE."+r.shift();console.log(e,...r)}function s_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Le(...r){r=s_(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function He(...r){r=s_(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Mc(...r){const e=r.join(" ");e in cp||(cp[e]=!0,Le(...r))}function bx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Tx={[gh]:_h,[vh]:Mh,[xh]:Sh,[Ta]:yh,[_h]:gh,[Mh]:vh,[Sh]:xh,[yh]:Ta};class La{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let up=1234567;const ho=Math.PI/180,Aa=180/Math.PI;function Di(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function nt(r,e,t){return Math.max(e,Math.min(t,r))}function td(r,e){return(r%e+e)%e}function Ex(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function wx(r,e,t){return r!==e?(t-r)/(e-r):0}function fo(r,e,t){return(1-t)*r+t*e}function Ax(r,e,t,n){return fo(r,e,1-Math.exp(-t*n))}function Cx(r,e=1){return e-Math.abs(td(r,e*2)-e)}function Rx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Px(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Dx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Lx(r,e){return r+Math.random()*(e-r)}function Ix(r){return r*(.5-Math.random())}function Nx(r){r!==void 0&&(up=r);let e=up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ux(r){return r*ho}function Fx(r){return r*Aa}function Ox(r){return(r&r-1)===0&&r!==0}function Bx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zx(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*u,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const a_={DEG2RAD:ho,RAD2DEG:Aa,generateUUID:Di,clamp:nt,euclideanModulo:td,mapLinear:Ex,inverseLerp:wx,lerp:fo,damp:Ax,pingpong:Cx,smoothstep:Rx,smootherstep:Px,randInt:Dx,randFloat:Lx,randFloatSpread:Ix,seededRandom:Nx,degToRad:Ux,radToDeg:Fx,isPowerOfTwo:Ox,ceilPowerOfTwo:Bx,floorPowerOfTwo:kx,setQuaternionFromProperEuler:zx,normalize:bt,denormalize:Ci};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],p=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==p){let g=l*h+c*f+u*p+d*_;g<0&&(h=-h,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);m=Math.sin(m*v)/M,o=Math.sin(o*v)/M,l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lu=new O,hp=new Ni;class tt{constructor(e,t,n,i,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],v=i[1],M=i[4],y=i[7],E=i[2],T=i[5],w=i[8];return s[0]=a*_+o*v+l*E,s[3]=a*g+o*M+l*T,s[6]=a*m+o*y+l*w,s[1]=c*_+u*v+d*E,s[4]=c*g+u*M+d*T,s[7]=c*m+u*y+d*w,s[2]=h*_+f*v+p*E,s[5]=h*g+f*M+p*T,s[8]=h*m+f*y+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,p=t*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(cu.makeScale(e,t)),this}rotate(e){return this.premultiply(cu.makeRotation(-e)),this}translate(e,t){return this.premultiply(cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cu=new tt,fp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dp=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vx(){const r={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(i.r=da(i.r),i.g=da(i.g),i.b=da(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===or?xc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Mc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Mc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Cs]:{primaries:e,whitePoint:n,transfer:xc,toXYZ:fp,fromXYZ:dp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:n,transfer:St,toXYZ:fp,fromXYZ:dp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),r}const pt=Vx();function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function da(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class Hx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ks===void 0&&(ks=ko("canvas")),ks.width=e.width,ks.height=e.height;const i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=mr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gx=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(uu(i[a].image)):s.push(uu(i[a]))}else s=uu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function uu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Wx=0;const hu=new O;class Cn extends La{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,n=Pi,i=Pi,s=qt,a=Ur,o=yi,l=ri,c=Cn.DEFAULT_ANISOTROPY,u=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Di(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _c:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _c:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Jg;Cn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(f+1)/2,E=(m+1)/2,T=(u+h)/4,w=(d+_)/4,x=(p+g)/4;return M>y&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=T/n,s=w/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=x/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=x/s),this.set(n,i,s,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xx extends La{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Cn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new nd(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Xx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class id extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hw extends Li{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new id(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class qx extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class it{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,g){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,g)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/zs.setFromMatrixColumn(e,0).length(),s=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yx,e,$x)}lookAt(e,t,n){const i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Tr.crossVectors(n,Zn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Tr.crossVectors(n,Zn)),Tr.normalize(),el.crossVectors(Zn,Tr),i[0]=Tr.x,i[4]=el.x,i[8]=Zn.x,i[1]=Tr.y,i[5]=el.y,i[9]=Zn.y,i[2]=Tr.z,i[6]=el.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],M=n[7],y=n[11],E=n[15],T=i[0],w=i[4],x=i[8],S=i[12],P=i[1],R=i[5],D=i[9],k=i[13],V=i[2],H=i[6],z=i[10],F=i[14],J=i[3],Q=i[7],L=i[11],le=i[15];return s[0]=a*T+o*P+l*V+c*J,s[4]=a*w+o*R+l*H+c*Q,s[8]=a*x+o*D+l*z+c*L,s[12]=a*S+o*k+l*F+c*le,s[1]=u*T+d*P+h*V+f*J,s[5]=u*w+d*R+h*H+f*Q,s[9]=u*x+d*D+h*z+f*L,s[13]=u*S+d*k+h*F+f*le,s[2]=p*T+_*P+g*V+m*J,s[6]=p*w+_*R+g*H+m*Q,s[10]=p*x+_*D+g*z+m*L,s[14]=p*S+_*k+g*F+m*le,s[3]=v*T+M*P+y*V+E*J,s[7]=v*w+M*R+y*H+E*Q,s[11]=v*x+M*D+y*z+E*L,s[15]=v*S+M*k+y*F+E*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],v=l*f-c*h,M=o*f-c*d,y=o*h-l*d,E=a*f-c*u,T=a*h-l*u,w=a*d-o*u;return t*(_*v-g*M+m*y)-n*(p*v-g*E+m*T)+i*(p*M-_*E+m*w)-s*(p*y-_*T+g*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=t*o-n*a,M=t*l-i*a,y=t*c-s*a,E=n*l-i*o,T=n*c-s*o,w=i*c-s*l,x=u*_-d*p,S=u*g-h*p,P=u*m-f*p,R=d*g-h*_,D=d*m-f*_,k=h*m-f*g,V=v*k-M*D+y*R+E*P-T*S+w*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/V;return e[0]=(o*k-l*D+c*R)*H,e[1]=(i*D-n*k-s*R)*H,e[2]=(_*w-g*T+m*E)*H,e[3]=(h*T-d*w-f*E)*H,e[4]=(l*P-a*k-c*S)*H,e[5]=(t*k-i*P+s*S)*H,e[6]=(g*y-p*w-m*M)*H,e[7]=(u*w-h*y+f*M)*H,e[8]=(a*D-o*P+c*x)*H,e[9]=(n*P-t*D-s*x)*H,e[10]=(p*T-_*y+m*v)*H,e[11]=(d*y-u*T-f*v)*H,e[12]=(o*S-a*R-l*x)*H,e[13]=(t*R-n*S+i*x)*H,e[14]=(_*M-p*E-g*v)*H,e[15]=(u*E-d*M+h*v)*H,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,p=s*d,_=a*u,g=a*d,m=o*d,v=l*c,M=l*u,y=l*d,E=n.x,T=n.y,w=n.z;return i[0]=(1-(_+m))*E,i[1]=(f+y)*E,i[2]=(p-M)*E,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(h+m))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(p+M)*w,i[9]=(g-v)*w,i[10]=(1-(h+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=zs.set(i[0],i[1],i[2]).length();const o=zs.set(i[4],i[5],i[6]).length(),l=zs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ti.copy(this);const c=1/a,u=1/o,d=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,t.setFromRotationMatrix(Ti),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Wi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===Wi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Bo)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Wi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===Wi)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===Bo)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zs=new O,Ti=new it,Yx=new O(0,0,0),$x=new O(1,1,1),Tr=new O,el=new O,Zn=new O,pp=new it,mp=new Ni;class jn{constructor(e=0,t=0,n=0,i=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mp.setFromEuler(this),this.setFromQuaternion(mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jx=0;const gp=new O,Vs=new Ni,Qi=new it,tl=new O,Va=new O,Kx=new O,Zx=new Ni,_p=new O(1,0,0),vp=new O(0,1,0),xp=new O(0,0,1),yp={type:"added"},Jx={type:"removed"},Hs={type:"childadded",child:null},fu={type:"childremoved",child:null};class zt extends La{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new O,t=new jn,n=new Ni,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new tt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(_p,e)}rotateY(e){return this.rotateOnAxis(vp,e)}rotateZ(e){return this.rotateOnAxis(xp,e)}translateOnAxis(e,t){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_p,e)}translateY(e){return this.translateOnAxis(vp,e)}translateZ(e){return this.translateOnAxis(xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tl.copy(e):tl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Va,tl,this.up):Qi.lookAt(tl,Va,this.up),this.quaternion.setFromRotationMatrix(Qi),i&&(Qi.extractRotation(i.matrixWorld),Vs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yp),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jx),fu.child=e,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yp),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,Kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,Zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new O(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bn extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qx={type:"move"};class du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},nl={h:0,s:0,l:0};function pu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=td(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=pu(a,s,e+1/3),this.g=pu(a,s,e),this.b=pu(a,s,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Vn){function n(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const n=o_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return pt.workingToColorSpace(Sn.copy(this),e),Math.round(nt(Sn.r*255,0,255))*65536+Math.round(nt(Sn.g*255,0,255))*256+Math.round(nt(Sn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Sn.copy(this),t);const n=Sn.r,i=Sn.g,s=Sn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Vn){pt.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,i=Sn.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(nl);const n=fo(Er.h,nl.h,t),i=fo(Er.s,nl.s,t),s=fo(Er.l,nl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ke;Ke.NAMES=o_;class l_ extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ei=new O,er=new O,mu=new O,tr=new O,Gs=new O,Ws=new O,Mp=new O,gu=new O,_u=new O,vu=new O,xu=new Ut,yu=new Ut,Mu=new Ut;class Ri{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ei.subVectors(e,t),i.cross(Ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ei.subVectors(i,t),er.subVectors(n,t),mu.subVectors(e,t);const a=Ei.dot(Ei),o=Ei.dot(er),l=Ei.dot(mu),c=er.dot(er),u=er.dot(mu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tr.x),l.addScaledVector(a,tr.y),l.addScaledVector(o,tr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return xu.setScalar(0),yu.setScalar(0),Mu.setScalar(0),xu.fromBufferAttribute(e,t),yu.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(xu,s.x),a.addScaledVector(yu,s.y),a.addScaledVector(Mu,s.z),a}static isFrontFacing(e,t,n,i){return Ei.subVectors(n,t),er.subVectors(e,t),Ei.cross(er).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Ei.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Gs.subVectors(i,n),Ws.subVectors(s,n),gu.subVectors(e,n);const l=Gs.dot(gu),c=Ws.dot(gu);if(l<=0&&c<=0)return t.copy(n);_u.subVectors(e,i);const u=Gs.dot(_u),d=Ws.dot(_u);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Gs,a);vu.subVectors(e,s);const f=Gs.dot(vu),p=Ws.dot(vu);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ws,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return Mp.subVectors(s,i),o=(d-u)/(d-u+(f-p)),t.copy(i).addScaledVector(Mp,o);const m=1/(g+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(Gs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),il.copy(n.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),rl.subVectors(this.max,Ha),Xs.subVectors(e.a,Ha),qs.subVectors(e.b,Ha),Ys.subVectors(e.c,Ha),wr.subVectors(qs,Xs),Ar.subVectors(Ys,qs),Qr.subVectors(Xs,Ys);let t=[0,-wr.z,wr.y,0,-Ar.z,Ar.y,0,-Qr.z,Qr.y,wr.z,0,-wr.x,Ar.z,0,-Ar.x,Qr.z,0,-Qr.x,-wr.y,wr.x,0,-Ar.y,Ar.x,0,-Qr.y,Qr.x,0];return!Su(t,Xs,qs,Ys,rl)||(t=[1,0,0,0,1,0,0,0,1],!Su(t,Xs,qs,Ys,rl))?!1:(sl.crossVectors(wr,Ar),t=[sl.x,sl.y,sl.z],Su(t,Xs,qs,Ys,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new O,new O,new O,new O,new O,new O,new O,new O],wi=new O,il=new Zi,Xs=new O,qs=new O,Ys=new O,wr=new O,Ar=new O,Qr=new O,Ha=new O,rl=new O,sl=new O,es=new O;function Su(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){es.fromArray(r,s);const o=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),u=n.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const lr=ey();function ey(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function ty(r){Math.abs(r)>65504&&Le("DataUtils.toHalfFloat(): Value out of range."),r=nt(r,-65504,65504),lr.floatView[0]=r;const e=lr.uint32View[0],t=e>>23&511;return lr.baseTable[t]+((e&8388607)>>lr.shiftTable[t])}function ny(r){const e=r>>10;return lr.uint32View[0]=lr.mantissaTable[lr.offsetTable[e]+(r&1023)]+lr.exponentTable[e],lr.floatView[0]}class Gw{static toHalfFloat(e){return ty(e)}static fromHalfFloat(e){return ny(e)}}const $t=new O,al=new Ge;let iy=0;class Mi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rf,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)al.fromBufferAttribute(this,t),al.applyMatrix3(e),this.setXY(t,al.x,al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rf&&(e.usage=this.usage),e}}class c_ extends Mi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class u_ extends Mi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Mi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ry=new Zi,Ga=new O,bu=new O;class Mr{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ry.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);const t=Ga.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ga,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(bu)),this.expandByPoint(Ga.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sy=0;const fi=new it,Tu=new zt,$s=new O,Jn=new Zi,Wa=new Zi,ln=new O;class _n extends La{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?u_:c_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wa.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Jn.min,Wa.min),Jn.expandByPoint(ln),ln.addVectors(Jn.max,Wa.max),Jn.expandByPoint(ln)):(Jn.expandByPoint(Wa.min),Jn.expandByPoint(Wa.max))}Jn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)ln.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ln.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(e,c),ln.add($s)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new O,l[x]=new O;const c=new O,u=new O,d=new O,h=new Ge,f=new Ge,p=new Ge,_=new O,g=new O;function m(x,S,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,P),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,P),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(R),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),o[x].add(_),o[S].add(_),o[P].add(_),l[x].add(g),l[S].add(g),l[P].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,S=v.length;x<S;++x){const P=v[x],R=P.start,D=P.count;for(let k=R,V=R+D;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new O,y=new O,E=new O,T=new O;function w(x){E.fromBufferAttribute(i,x),T.copy(E);const S=o[x];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(T,S);const R=y.dot(l[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,R)}for(let x=0,S=v.length;x<S;++x){const P=v[x],R=P.start,D=P.count;for(let k=R,V=R+D;k<V;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new Mi(h,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ww{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new O;class h_{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){yc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new h_(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ay=0;class $r extends La{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=fa,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fa&&(n.blending=this.blending),this.side!==Xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ph&&(n.blendSrc=this.blendSrc),this.blendDst!==mh&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ir=new O,Eu=new O,ol=new O,Cr=new O,wu=new O,ll=new O,Au=new O;class Yo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eu.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(Eu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ol),o=Cr.dot(this.direction),l=-Cr.dot(ol),c=Cr.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=s*u,d>=0)if(h>=-p)if(h<=p){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Eu).addScaledVector(ol,h),f}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),i=ir.dot(ir)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,i,s){wu.subVectors(t,e),ll.subVectors(n,e),Au.crossVectors(wu,ll);let a=this.direction.dot(Au),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cr.subVectors(this.origin,e);const l=o*this.direction.dot(ll.crossVectors(Cr,ll));if(l<0)return null;const c=o*this.direction.dot(wu.cross(Cr));if(c<0||l+c>a)return null;const u=-o*Cr.dot(Au);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class f_ extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sp=new it,ts=new Yo,cl=new Mr,bp=new O,ul=new O,hl=new O,fl=new O,Cu=new O,dl=new O,Tp=new O,pl=new O;class Pt extends zt{constructor(e=new _n,t=new f_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Cu.fromBufferAttribute(d,e),a?dl.addScaledVector(Cu,u):dl.addScaledVector(Cu.sub(t),u))}t.add(dl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(cl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(cl,bp)===null||ts.origin.distanceToSquared(bp)>(e.far-e.near)**2))&&(Sp.copy(s).invert(),ts.copy(e.ray).applyMatrix4(Sp),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,E=M;y<E;y+=3){const T=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);i=ml(this,m,e,n,c,u,d,T,w,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),M=o.getX(g+1),y=o.getX(g+2);i=ml(this,a,e,n,c,u,d,v,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,E=M;y<E;y+=3){const T=y,w=y+1,x=y+2;i=ml(this,m,e,n,c,u,d,T,w,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,M=g+1,y=g+2;i=ml(this,a,e,n,c,u,d,v,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function oy(r,e,t,n,i,s,a,o){let l;if(e.side===kn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Xr,o),l===null)return null;pl.copy(o),pl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(pl);return c<t.near||c>t.far?null:{distance:c,point:pl.clone(),object:r}}function ml(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ul),r.getVertexPosition(l,hl),r.getVertexPosition(c,fl);const u=oy(r,e,t,n,ul,hl,fl,Tp);if(u){const d=new O;Ri.getBarycoord(Tp,ul,hl,fl,d),i&&(u.uv=Ri.getInterpolatedAttribute(i,o,l,c,d,new Ge)),s&&(u.uv1=Ri.getInterpolatedAttribute(s,o,l,c,d,new Ge)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};Ri.getNormal(ul,hl,fl,h.normal),u.face=h,u.barycoord=d}return u}const Ep=new O,wp=new Ut,Ap=new Ut,ly=new O,Cp=new it,gl=new O,Ru=new Mr,Rp=new it,Pu=new Yo;class Xw extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tp,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gl),this.boundingBox.expandByPoint(gl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gl),this.boundingSphere.expandByPoint(gl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ru.copy(this.boundingSphere),Ru.applyMatrix4(i),e.ray.intersectsSphere(Ru)!==!1&&(Rp.copy(i).invert(),Pu.copy(e.ray).applyMatrix4(Rp),!(this.boundingBox!==null&&Pu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ox?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;wp.fromBufferAttribute(i.attributes.skinIndex,e),Ap.fromBufferAttribute(i.attributes.skinWeight,e),Ep.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Ap.getComponent(s);if(a!==0){const o=wp.getComponent(s);Cp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ly.copy(Ep).applyMatrix4(Cp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cy extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $o extends Cn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=pn,u=pn,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pp=new it,uy=new it;class d_{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:uy;Pp.multiplyMatrices(o,t[s]),Pp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new d_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $o(t,e,e,yi,xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Le("Skeleton: No bone found with UUID:",s),a=new cy),this.bones.push(a),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Dp extends Mi{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new it,Lp=new it,_l=[],Ip=new Zi,hy=new it,Xa=new Pt,qa=new Mr;class zc extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dp(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Ip.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Ip)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),qa.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(qa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xa.geometry=this.geometry,Xa.material=this.material,Xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(n),e.ray.intersectsSphere(qa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,js),Lp.multiplyMatrices(n,js),Xa.matrixWorld=Lp,Xa.raycast(e,_l);for(let a=0,o=_l.length;a<o;a++){const l=_l[a];l.instanceId=s,l.object=this,t.push(l)}_l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $o(new Float32Array(i*this.count),i,this.count,$f,xi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Du=new O,fy=new O,dy=new tt;class ls{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Du.subVectors(n,t).cross(fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Du),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dy.getNormalMatrix(e),i=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Mr,py=new Ge(.5,.5),vl=new O;class sd{constructor(e=new ls,t=new ls,n=new ls,i=new ls,s=new ls,a=new ls){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],_=s[9],g=s[10],m=s[11],v=s[12],M=s[13],y=s[14],E=s[15];if(i[0].setComponents(c-a,f-u,m-p,E-v).normalize(),i[1].setComponents(c+a,f+u,m+p,E+v).normalize(),i[2].setComponents(c+o,f+d,m+_,E+M).normalize(),i[3].setComponents(c-o,f-d,m-_,E-M).normalize(),n)i[4].setComponents(l,h,g,y).normalize(),i[5].setComponents(c-l,f-h,m-g,E-y).normalize();else if(i[4].setComponents(c-l,f-h,m-g,E-y).normalize(),t===Wi)i[5].setComponents(c+l,f+h,m+g,E+y).normalize();else if(t===Bo)i[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=py.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vl.x=i.normal.x>0?e.max.x:e.min.x,vl.y=i.normal.y>0?e.max.y:e.min.y,vl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class my extends $r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new O,bc=new O,Np=new it,Ya=new Yo,xl=new Mr,Lu=new O,Up=new O;class p_ extends zt{constructor(e=new _n,t=new my){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Sc.fromBufferAttribute(t,i-1),bc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sc.distanceTo(bc);e.setAttribute("lineDistance",new Lt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(i),xl.radius+=s,e.ray.intersectsSphere(xl)===!1)return;Np.copy(i).invert(),Ya.copy(e.ray).applyMatrix4(Np);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=u.getX(_),v=u.getX(_+1),M=yl(this,e,Ya,l,m,v,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(p-1),g=u.getX(f),m=yl(this,e,Ya,l,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=yl(this,e,Ya,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=yl(this,e,Ya,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yl(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Sc.fromBufferAttribute(o,i),bc.fromBufferAttribute(o,s),t.distanceSqToSegment(Sc,bc,Lu,Up)>n)return;Lu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Lu);if(!(c<e.near||c>e.far))return{distance:c,point:Up.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Fp=new O,Op=new O;class qw extends p_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Fp.fromBufferAttribute(t,i),Op.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fp.distanceTo(Op);e.setAttribute("lineDistance",new Lt(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yw extends p_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gy extends $r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bp=new it,sf=new Yo,Ml=new Mr,Sl=new O;class $w extends zt{constructor(e=new _n,t=new gy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(i),Ml.radius+=s,e.ray.intersectsSphere(Ml)===!1)return;Bp.copy(i).invert(),sf.copy(e.ray).applyMatrix4(Bp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,_=f;p<_;p++){const g=c.getX(p);Sl.fromBufferAttribute(d,g),kp(Sl,g,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,_=f;p<_;p++)Sl.fromBufferAttribute(d,p),kp(Sl,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kp(r,e,t,n,i,s,a){const o=sf.distanceSqToPoint(r);if(o<t){const l=new O;sf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class m_ extends Cn{constructor(e=[],t=As,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zo extends Cn{constructor(e,t,n=ji,i,s,a,o=pn,l=pn,c,u=yr,d=1){if(u!==yr&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _y extends zo{constructor(e,t=ji,n=As,i,s,a=pn,o=pn,l,c=yr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class g_ extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Is extends _n{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(d,2));function p(_,g,m,v,M,y,E,T,w,x,S){const P=y/w,R=E/x,D=y/2,k=E/2,V=T/2,H=w+1,z=x+1;let F=0,J=0;const Q=new O;for(let L=0;L<z;L++){const le=L*R-k;for(let ce=0;ce<H;ce++){const ke=ce*P-D;Q[_]=ke*v,Q[g]=le*M,Q[m]=V,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[g]=0,Q[m]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ce/w),d.push(1-L/x),F+=1}}for(let L=0;L<x;L++)for(let le=0;le<w;le++){const ce=h+le+H*L,ke=h+le+H*(L+1),We=h+(le+1)+H*(L+1),$e=h+(le+1)+H*L;l.push(ce,ke,$e),l.push(ke,We,$e),J+=6}o.addGroup(f,J,S),f+=J,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ad extends _n{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let p=0;const _=[],g=n/2;let m=0;v(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(f,2));function v(){const y=new O,E=new O;let T=0;const w=(t-e)/n;for(let x=0;x<=s;x++){const S=[],P=x/s,R=P*(t-e)+e;for(let D=0;D<=i;D++){const k=D/i,V=k*l+o,H=Math.sin(V),z=Math.cos(V);E.x=R*H,E.y=-P*n+g,E.z=R*z,d.push(E.x,E.y,E.z),y.set(H,w,z).normalize(),h.push(y.x,y.y,y.z),f.push(k,1-P),S.push(p++)}_.push(S)}for(let x=0;x<i;x++)for(let S=0;S<s;S++){const P=_[S][x],R=_[S+1][x],D=_[S+1][x+1],k=_[S][x+1];(e>0||S!==0)&&(u.push(P,R,k),T+=3),(t>0||S!==s-1)&&(u.push(R,D,k),T+=3)}c.addGroup(m,T,0),m+=T}function M(y){const E=p,T=new Ge,w=new O;let x=0;const S=y===!0?e:t,P=y===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,g*P,0),h.push(0,P,0),f.push(.5,.5),p++;const R=p;for(let D=0;D<=i;D++){const V=D/i*l+o,H=Math.cos(V),z=Math.sin(V);w.x=S*z,w.y=g*P,w.z=S*H,d.push(w.x,w.y,w.z),h.push(0,P,0),T.x=H*.5+.5,T.y=z*.5*P+.5,f.push(T.x,T.y),p++}for(let D=0;D<i;D++){const k=E+D,V=R+D;y===!0?u.push(V,V+1,k):u.push(V+1,V,k),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ad(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class od extends _n{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(s.slice(),3)),this.setAttribute("uv",new Lt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const M=new O,y=new O,E=new O;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],y),f(t[T+2],E),l(M,y,E,v)}function l(v,M,y,E){const T=E+1,w=[];for(let x=0;x<=T;x++){w[x]=[];const S=v.clone().lerp(y,x/T),P=M.clone().lerp(y,x/T),R=T-x;for(let D=0;D<=R;D++)D===0&&x===T?w[x][D]=S:w[x][D]=S.clone().lerp(P,D/R)}for(let x=0;x<T;x++)for(let S=0;S<2*(T-x)-1;S++){const P=Math.floor(S/2);S%2===0?(h(w[x][P+1]),h(w[x+1][P]),h(w[x][P])):(h(w[x][P+1]),h(w[x+1][P+1]),h(w[x+1][P]))}}function c(v){const M=new O;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(v),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function u(){const v=new O;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const y=g(v)/2/Math.PI+.5,E=m(v)/Math.PI+.5;a.push(y,1-E)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){const M=a[v+0],y=a[v+2],E=a[v+4],T=Math.max(M,y,E),w=Math.min(M,y,E);T>.9&&w<.1&&(M<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function f(v,M){const y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){const v=new O,M=new O,y=new O,E=new O,T=new Ge,w=new Ge,x=new Ge;for(let S=0,P=0;S<s.length;S+=9,P+=6){v.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),T.set(a[P+0],a[P+1]),w.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),E.copy(v).add(M).add(y).divideScalar(3);const R=g(E);_(T,P+0,v,R),_(w,P+2,M,R),_(x,P+4,y,R)}}function _(v,M,y,E){E<0&&v.x===1&&(a[M]=v.x-1),y.x===0&&y.z===0&&(a[M]=E/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.vertices,e.indices,e.radius,e.detail)}}class vy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Ge:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,i=[],s=[],a=[],o=new O,l=new it;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(nt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(nt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function zp(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}class ld extends vy{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(zp(o,l.x,c.x,u.x,d.x),zp(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ge().fromArray(i))}return this}}class cd extends od{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cd(e.radius,e.detail)}}class jo extends _n{constructor(e=[new Ge(0,-.5),new Ge(.5,0),new Ge(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=nt(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,d=new O,h=new Ge,f=new O,p=new O,_=new O;let g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=t;v++){const M=n+v*u*i,y=Math.sin(M),E=Math.cos(M);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*y,d.y=e[T].y,d.z=e[T].x*E,a.push(d.x,d.y,d.z),h.x=v/t,h.y=T/(e.length-1),o.push(h.x,h.y);const w=l[3*T+0]*y,x=l[3*T+1],S=l[3*T+0]*E;c.push(w,x,S)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){const y=M+v*e.length,E=y,T=y+e.length,w=y+e.length+1,x=y+1;s.push(E,T,x),s.push(w,x,T)}this.setIndex(s),this.setAttribute("position",new Lt(a,3)),this.setAttribute("uv",new Lt(o,2)),this.setAttribute("normal",new Lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.points,e.segments,e.phiStart,e.phiLength)}}class Ko extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const v=m*h-a;for(let M=0;M<c;M++){const y=M*d-s;p.push(y,-v,0),_.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const M=v+c*m,y=v+c*(m+1),E=v+1+c*(m+1),T=v+1+c*m;f.push(M,y,T),f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class ud extends _n{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/i,f=new O,p=new Ge;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=s+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,M=v,y=v+n+1,E=v+n+2,T=v+1;o.push(M,y,T),o.push(y,E,T)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class po extends _n{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new O,h=new O,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],M=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const T=E/t;d.x=-e*Math.cos(i+T*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(i+T*s)*Math.sin(a+M*o),p.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(T+y,1-M),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const M=u[m][v+1],y=u[m][v],E=u[m+1][v],T=u[m+1][v+1];(m!==0||a>0)&&f.push(M,y,T),(m!==n-1||l<Math.PI)&&f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ca(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ln(r){const e={};for(let t=0;t<r.length;t++){const n=Ca(r[t]);for(const i in n)e[i]=n[i]}return e}function xy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function __(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const yy={clone:Ca,merge:Ln};var My=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=My,this.fragmentShader=Sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class by extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tc extends $r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jf,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jr extends Tc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ty extends $r{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jf,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Gf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ey extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wy extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function bl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ay(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function v_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Zo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cy extends Zo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ip,endingEnd:ip}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case rp:s=e,o=2*t-n;break;case sp:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rp:a=e,l=2*n-t;break;case sp:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-h*g+2*h*_-h*p,v=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*p+1,M=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let E=0;E!==o;++E)s[E]=m*a[u+E]+v*a[c+E]+M*a[l+E]+y*a[d+E];return s}}class Ry extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}}class Py extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dy extends Zo{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){const _=(n-t)/(i-t),g=1-_;for(let m=0;m!==o;++m)s[m]=a[c+m]*g+a[l+m]*_;return s}const f=o*2,p=e-1;for(let _=0;_!==o;++_){const g=a[c+_],m=a[l+_],v=p*f+_*2,M=h[v],y=h[v+1],E=e*f+_*2,T=d[E],w=d[E+1];let x=(n-t)/(i-t),S,P,R,D,k;for(let V=0;V<8;V++){S=x*x,P=S*x,R=1-x,D=R*R,k=D*R;const z=k*t+3*D*x*M+3*R*S*T+P*i-n;if(Math.abs(z)<1e-10)break;const F=3*D*(M-t)+6*R*x*(T-M)+3*S*(i-T);if(Math.abs(F)<1e-10)break;x=x-z/F,x=Math.max(0,Math.min(1,x))}s[_]=k*g+3*D*x*y+3*R*S*w+P*m}return s}}class Ui{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bl(t,this.TimeBufferType),this.values=bl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bl(e.times,Array),values:bl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Py(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ry(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Dy(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case vc:t=this.InterpolantFactoryMethodDiscrete;break;case nf:t=this.InterpolantFactoryMethodLinear;break;case ou:t=this.InterpolantFactoryMethodSmooth;break;case np:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vc;case this.InterpolantFactoryMethodLinear:return nf;case this.InterpolantFactoryMethodSmooth:return ou;case this.InterpolantFactoryMethodBezier:return np}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Mx(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ou,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const _=t[d+p];if(_!==t[h+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ui.prototype.ValueTypeName="";Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=nf;class Ia extends Ui{constructor(e,t,n){super(e,t,n)}}Ia.prototype.ValueTypeName="bool";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=vc;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;class x_ extends Ui{constructor(e,t,n,i){super(e,t,n,i)}}x_.prototype.ValueTypeName="color";class Ec extends Ui{constructor(e,t,n,i){super(e,t,n,i)}}Ec.prototype.ValueTypeName="number";class Ly extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ni.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Vc extends Ui{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ly(this.times,this.values,this.getValueSize(),e)}}Vc.prototype.ValueTypeName="quaternion";Vc.prototype.InterpolantFactoryMethodSmooth=void 0;class Na extends Ui{constructor(e,t,n){super(e,t,n)}}Na.prototype.ValueTypeName="string";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=vc;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;class wc extends Ui{constructor(e,t,n,i){super(e,t,n,i)}}wc.prototype.ValueTypeName="vector";class jw{constructor(e="",t=-1,n=[],i=cx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ny(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Ui.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Ay(l);l=Vp(l,1,u),c=Vp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ec(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Le("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return He("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,p,_){if(f.length!==0){const g=[],m=[];v_(f,g,m,p),g.length!==0&&_.push(new d(h,g,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let _=0;_<h[p].morphTargets.length;_++)f[h[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let v=0;v!==h[p].morphTargets.length;++v){const M=h[p];g.push(M.time),m.push(M.morphTarget===_?1:0)}i.push(new Ec(".morphTargetInfluence["+_+"]",g,m))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(wc,f+".position",h,"pos",i),n(Vc,f+".quaternion",h,"rot",i),n(wc,f+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Iy(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ec;case"vector":case"vector2":case"vector3":case"vector4":return wc;case"color":return x_;case"quaternion":return Vc;case"bool":case"boolean":return Ia;case"string":return Na}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ny(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Iy(r.type);if(r.times===void 0){const t=[],n=[];v_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ur={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Hp(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Hp(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Hp(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Uy{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fy=new Uy;class Ua{constructor(e){this.manager=e!==void 0?e:Fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ua.DEFAULT_MATERIAL_NAME="__DEFAULT";const rr={};class Oy extends Error{constructor(e,t){super(e),this.response=t}}class By extends Ua{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ur.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(rr[e]!==void 0){rr[e].push({onLoad:t,onProgress:n,onError:i});return}rr[e]=[],rr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=rr[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){d.read().then(({done:M,value:y})=>{if(M)m.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,w=u.length;T<w;T++){const x=u[T];x.onProgress&&x.onProgress(E)}m.enqueue(y),v()}},M=>{m.error(M)})}}});return new Response(g)}else throw new Oy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ur.add(`file:${e}`,c);const u=rr[e];delete rr[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=rr[e];if(u===void 0)throw this.manager.itemError(e),c;delete rr[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ks=new WeakMap;class ky extends Ua{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ur.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Ks.get(a);d===void 0&&(d=[],Ks.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=ko("img");function l(){u(),t&&t(this);const d=Ks.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Ks.delete(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),ur.remove(`image:${e}`);const h=Ks.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Ks.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ur.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Kw extends Ua{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new $o,o=new By(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{u(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Pi,a.wrapT=c.wrapT!==void 0?c.wrapT:Pi,a.magFilter=c.magFilter!==void 0?c.magFilter:qt,a.minFilter=c.minFilter!==void 0?c.minFilter:qt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ur),c.mipmapCount===1&&(a.minFilter=qt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class zy extends Ua{constructor(e){super(e)}load(e,t,n,i){const s=new Cn,a=new ky(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Hc extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Vy extends Hc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Iu=new it,Gp=new O,Wp=new O;class hd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sd,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),Iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Bo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tl=new O,El=new Ni,Oi=new O;class y_ extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tl,El,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,El,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Tl,El,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,El,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new O,Xp=new Ge,qp=new Ge;class Hn extends y_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,Xp,qp),t.subVectors(qp,Xp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hy extends hd{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Aa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zw extends Hc{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Hy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Gy extends hd{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0}}class Wy extends Hc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fd extends y_{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xy extends hd{constructor(){super(new fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wl extends Hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Xy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Jw{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qw extends _n{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Nu=new WeakMap;class eA extends Ua{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ur.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(Nu.has(a)===!0)i&&i(Nu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ur.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Nu.set(l,c),ur.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ur.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zs=-90,Js=1;class qy extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(Zs,Js,e,t);i.layers=this.layers,this.add(i);const s=new Hn(Zs,Js,e,t);s.layers=this.layers,this.add(s);const a=new Hn(Zs,Js,e,t);a.layers=this.layers,this.add(a);const o=new Hn(Zs,Js,e,t);o.layers=this.layers,this.add(o);const l=new Hn(Zs,Js,e,t);l.layers=this.layers,this.add(l);const c=new Hn(Zs,Js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Yy extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tA{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$y.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function $y(){this._document.hidden===!1&&this.reset()}const dd="\\[\\]\\.:\\/",jy=new RegExp("["+dd+"]","g"),pd="[^"+dd+"]",Ky="[^"+dd.replace("\\.","")+"]",Zy=/((?:WC+[\/:])*)/.source.replace("WC",pd),Jy=/(WCOD+)?/.source.replace("WCOD",Ky),Qy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pd),eM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pd),tM=new RegExp("^"+Zy+Jy+Qy+eM+"$"),nM=["material","materials","bones","map"];class iM{constructor(e,t,n){const i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class wt{constructor(e,t,n){this.path=t,this.parsedPath=n||wt.parseTrackName(t),this.node=wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new wt.Composite(e,t,n):new wt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jy,"")}static parseTrackName(e){const t=tM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);nM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=wt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wt.Composite=iM;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Yp=new it;class nA{constructor(e,t,n=0,i=1/0){this.ray=new Yo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new rd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yp),this}intersectObject(e,t=!0,n=[]){return af(e,this,n,t),n.sort($p),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)af(e[i],this,n,t);return n.sort($p),n}}function $p(r,e){return r.distance-e.distance}function af(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)af(s[a],e,t,!0)}}class rM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class M_{constructor(e,t,n,i){M_.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}function jp(r,e,t,n){const i=sM(n);switch(t){case i_:return r*e;case $f:return r*e/i.components*i.byteLength;case jf:return r*e/i.components*i.byteLength;case wa:return r*e*2/i.components*i.byteLength;case Kf:return r*e*2/i.components*i.byteLength;case r_:return r*e*3/i.components*i.byteLength;case yi:return r*e*4/i.components*i.byteLength;case Zf:return r*e*4/i.components*i.byteLength;case Yl:case $l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jl:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eh:case Ah:return Math.max(r,16)*Math.max(e,8)/4;case Th:case wh:return Math.max(r,8)*Math.max(e,8)/2;case Ch:case Rh:case Dh:case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ph:case Ih:case Nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jh:case Kh:case Zh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jh:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ef:case tf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sM(r){switch(r){case ri:case Qg:return{byteLength:1,components:1};case Fo:case e_:case xr:return{byteLength:2,components:1};case qf:case Yf:return{byteLength:2,components:4};case ji:case Xf:case xi:return{byteLength:4,components:1};case t_:case n_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);function S_(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function aM(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$M=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ES=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,US=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,FS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ob=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,db=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ab=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Db=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ib=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:oM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:uM,alphatest_fragment:hM,alphatest_pars_fragment:fM,aomap_fragment:dM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:_M,beginnormal_vertex:vM,bsdfs:xM,iridescence_fragment:yM,bumpmap_pars_fragment:MM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:EM,color_fragment:wM,color_pars_fragment:AM,color_pars_vertex:CM,color_vertex:RM,common:PM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:LM,displacementmap_pars_vertex:IM,displacementmap_vertex:NM,emissivemap_fragment:UM,emissivemap_pars_fragment:FM,colorspace_fragment:OM,colorspace_pars_fragment:BM,envmap_fragment:kM,envmap_common_pars_fragment:zM,envmap_pars_fragment:VM,envmap_pars_vertex:HM,envmap_physical_pars_fragment:QM,envmap_vertex:GM,fog_vertex:WM,fog_pars_vertex:XM,fog_fragment:qM,fog_pars_fragment:YM,gradientmap_pars_fragment:$M,lightmap_pars_fragment:jM,lights_lambert_fragment:KM,lights_lambert_pars_fragment:ZM,lights_pars_begin:JM,lights_toon_fragment:eS,lights_toon_pars_fragment:tS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:rS,lights_physical_pars_fragment:sS,lights_fragment_begin:aS,lights_fragment_maps:oS,lights_fragment_end:lS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:hS,logdepthbuf_vertex:fS,map_fragment:dS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:_S,metalnessmap_pars_fragment:vS,morphinstance_vertex:xS,morphcolor_vertex:yS,morphnormal_vertex:MS,morphtarget_pars_vertex:SS,morphtarget_vertex:bS,normal_fragment_begin:TS,normal_fragment_maps:ES,normal_pars_fragment:wS,normal_pars_vertex:AS,normal_vertex:CS,normalmap_pars_fragment:RS,clearcoat_normal_fragment_begin:PS,clearcoat_normal_fragment_maps:DS,clearcoat_pars_fragment:LS,iridescence_pars_fragment:IS,opaque_fragment:NS,packing:US,premultiplied_alpha_fragment:FS,project_vertex:OS,dithering_fragment:BS,dithering_pars_fragment:kS,roughnessmap_fragment:zS,roughnessmap_pars_fragment:VS,shadowmap_pars_fragment:HS,shadowmap_pars_vertex:GS,shadowmap_vertex:WS,shadowmask_pars_fragment:XS,skinbase_vertex:qS,skinning_pars_vertex:YS,skinning_vertex:$S,skinnormal_vertex:jS,specularmap_fragment:KS,specularmap_pars_fragment:ZS,tonemapping_fragment:JS,tonemapping_pars_fragment:QS,transmission_fragment:eb,transmission_pars_fragment:tb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:rb,worldpos_vertex:sb,background_vert:ab,background_frag:ob,backgroundCube_vert:lb,backgroundCube_frag:cb,cube_vert:ub,cube_frag:hb,depth_vert:fb,depth_frag:db,distance_vert:pb,distance_frag:mb,equirect_vert:gb,equirect_frag:_b,linedashed_vert:vb,linedashed_frag:xb,meshbasic_vert:yb,meshbasic_frag:Mb,meshlambert_vert:Sb,meshlambert_frag:bb,meshmatcap_vert:Tb,meshmatcap_frag:Eb,meshnormal_vert:wb,meshnormal_frag:Ab,meshphong_vert:Cb,meshphong_frag:Rb,meshphysical_vert:Pb,meshphysical_frag:Db,meshtoon_vert:Lb,meshtoon_frag:Ib,points_vert:Nb,points_frag:Ub,shadow_vert:Fb,shadow_frag:Ob,sprite_vert:Bb,sprite_frag:kb},ge={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Vi={basic:{uniforms:Ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Ln([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Ln([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Ln([ge.points,ge.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Ln([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Ln([ge.common,ge.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Ln([ge.sprite,ge.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Ln([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Ln([ge.lights,ge.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Vi.physical={uniforms:Ln([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Al={r:0,b:0,g:0},is=new jn,zb=new it;function Vb(r,e,t,n,i,s){const a=new Ke(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(v){let M=!1;const y=f(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),M=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,M){const y=f(M);y&&(y.isCubeTexture||y.mapping===kc)?(c===void 0&&(c=new Pt(new Is(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ca(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),is.copy(M.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zb.makeRotationFromEuler(is)),c.material.toneMapped=pt.getTransfer(y.colorSpace)!==St,(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pt(new Ko(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ca(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=pt.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(Al,__(r)),t.buffers.color.setClear(Al.r,Al.g,Al.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Hb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(R,D,k,V,H){let z=!1;const F=d(R,V,k,D);s!==F&&(s=F,c(s.object)),z=f(R,V,k,H),z&&p(R,V,k,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(R,D,k,V),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function d(R,D,k,V){const H=V.wireframe===!0;let z=n[D.id];z===void 0&&(z={},n[D.id]=z);const F=R.isInstancedMesh===!0?R.id:0;let J=z[F];J===void 0&&(J={},z[F]=J);let Q=J[k.id];Q===void 0&&(Q={},J[k.id]=Q);let L=Q[H];return L===void 0&&(L=h(l()),Q[H]=L),L}function h(R){const D=[],k=[],V=[];for(let H=0;H<t;H++)D[H]=0,k[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:V,object:R,attributes:{},index:null}}function f(R,D,k,V){const H=s.attributes,z=D.attributes;let F=0;const J=k.getAttributes();for(const Q in J)if(J[Q].location>=0){const le=H[Q];let ce=z[Q];if(ce===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),le===void 0||le.attribute!==ce||ce&&le.data!==ce.data)return!0;F++}return s.attributesNum!==F||s.index!==V}function p(R,D,k,V){const H={},z=D.attributes;let F=0;const J=k.getAttributes();for(const Q in J)if(J[Q].location>=0){let le=z[Q];le===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const ce={};ce.attribute=le,le&&le.data&&(ce.data=le.data),H[Q]=ce,F++}s.attributes=H,s.attributesNum=F,s.index=V}function _(){const R=s.newAttributes;for(let D=0,k=R.length;D<k;D++)R[D]=0}function g(R){m(R,0)}function m(R,D){const k=s.newAttributes,V=s.enabledAttributes,H=s.attributeDivisors;k[R]=1,V[R]===0&&(r.enableVertexAttribArray(R),V[R]=1),H[R]!==D&&(r.vertexAttribDivisor(R,D),H[R]=D)}function v(){const R=s.newAttributes,D=s.enabledAttributes;for(let k=0,V=D.length;k<V;k++)D[k]!==R[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function M(R,D,k,V,H,z,F){F===!0?r.vertexAttribIPointer(R,D,k,H,z):r.vertexAttribPointer(R,D,k,V,H,z)}function y(R,D,k,V){_();const H=V.attributes,z=k.getAttributes(),F=D.defaultAttributeValues;for(const J in z){const Q=z[J];if(Q.location>=0){let L=H[J];if(L===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),L!==void 0){const le=L.normalized,ce=L.itemSize,ke=e.get(L);if(ke===void 0)continue;const We=ke.buffer,$e=ke.type,j=ke.bytesPerElement,ee=$e===r.INT||$e===r.UNSIGNED_INT||L.gpuType===Xf;if(L.isInterleavedBufferAttribute){const re=L.data,Ie=re.stride,Ne=L.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)m(Q.location+Ce,re.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)g(Q.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Ce=0;Ce<Q.locationSize;Ce++)M(Q.location+Ce,ce/Q.locationSize,$e,le,Ie*j,(Ne+ce/Q.locationSize*Ce)*j,ee)}else{if(L.isInstancedBufferAttribute){for(let re=0;re<Q.locationSize;re++)m(Q.location+re,L.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let re=0;re<Q.locationSize;re++)g(Q.location+re);r.bindBuffer(r.ARRAY_BUFFER,We);for(let re=0;re<Q.locationSize;re++)M(Q.location+re,ce/Q.locationSize,$e,le,ce*j,ce/Q.locationSize*re*j,ee)}}else if(F!==void 0){const le=F[J];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(Q.location,le);break;case 3:r.vertexAttrib3fv(Q.location,le);break;case 4:r.vertexAttrib4fv(Q.location,le);break;default:r.vertexAttrib1fv(Q.location,le)}}}}v()}function E(){S();for(const R in n){const D=n[R];for(const k in D){const V=D[k];for(const H in V){const z=V[H];for(const F in z)u(z[F].object),delete z[F];delete V[H]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;const D=n[R.id];for(const k in D){const V=D[k];for(const H in V){const z=V[H];for(const F in z)u(z[F].object),delete z[F];delete V[H]}}delete n[R.id]}function w(R){for(const D in n){const k=n[D];for(const V in k){const H=k[V];if(H[R.id]===void 0)continue;const z=H[R.id];for(const F in z)u(z[F].object),delete z[F];delete H[R.id]}}}function x(R){for(const D in n){const k=n[D],V=R.isInstancedMesh===!0?R.id:0,H=k[V];if(H!==void 0){for(const z in H){const F=H[z];for(const J in F)u(F[J].object),delete F[J];delete H[z]}delete k[V],Object.keys(k).length===0&&delete n[D]}}}function S(){P(),a=!0,s!==i&&(s=i,c(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Gb(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_]*h[_];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Wb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==yi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ri&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xi&&!x)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:T}}function Xb(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ls,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=r.get(d);if(!i||p===null||p.length===0||s&&!g)s?u(null):c();else{const v=s?0:n,M=v*4;let y=m.clippingState||null;l.value=y,y=u(p,h,M,f);for(let E=0;E!==M;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=f;M!==_;++M,y+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Fr=4,Kp=[.125,.215,.35,.446,.526,.582],fs=20,qb=256,$a=new fd,Zp=new Ke;let Uu=null,Fu=0,Ou=0,Bu=!1;const Yb=new O;class of{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Yb}=s;Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Fu,Ou),this._renderer.xr.enabled=Bu,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:xr,format:yi,colorSpace:Cs,depthBuffer:!1},i=Jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$b(s)),this._blurMaterial=Kb(s,e,t),this._ggxMaterial=jb(s,e,t)}return i}_compileMaterial(e){const t=new Pt(new _n,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,n,i,s){const l=new Hn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Zp),d.toneMapping=qi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Is,new f_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,m=!0):(g.color.copy(Zp),m=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const E=this._cubeSize;Qs(i,y*E,M>2?E:0,E,E),d.setRenderTarget(i),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===As||e.mapping===Ea;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Fr?n-p+Fr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Qs(s,g,m,3*_,2*_),i.setRenderTarget(s),i.render(o,$a),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Qs(e,g,m,3*_,2*_),i.setRenderTarget(e),i.render(o,$a)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fs-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):fs;g>fs&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const m=[];let v=0;for(let w=0;w<fs;++w){const x=w/_,S=Math.exp(-x*x/2);m.push(S),w===0?v+=S:w<g&&(v+=2*S)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-n;const y=this._sizeLods[i],E=3*y*(i>M-Fr?i-M+Fr:0),T=4*(this._cubeSize-y);Qs(t,E,T,3*y,2*y),l.setRenderTarget(t),l.render(d,$a)}}function $b(r){const e=[],t=[],n=[];let i=r;const s=r-Fr+1+Kp.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Fr?l=Kp[a-r+Fr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),M=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,x=T>2?0:-1,S=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];v.set(S,_*p*T),M.set(h,g*p*T);const P=[T,T,T,T,T,T];y.set(P,m*p*T)}const E=new _n;E.setAttribute("position",new Mi(v,_)),E.setAttribute("uv",new Mi(M,g)),E.setAttribute("faceIndex",new Mi(y,m)),n.push(new Pt(E,null)),i>Fr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Jp(r,e,t){const n=new Li(r,e,t);return n.texture.mapping=kc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jb(r,e,t){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Kb(r,e,t){const n=new Float32Array(fs),i=new O(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Qp(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function em(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class b_ extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new m_(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Is(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:pr});s.uniforms.tEquirect.value=t;const a=new Pt(i,s),o=t.minFilter;return t.minFilter===Ur&&(t.minFilter=qt),new qy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Zb(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===ql||f===su)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new b_(p.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===ql||f===su,_=f===As||f===Ea;if(p||_){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new of(r)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const v=h.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new of(r)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===ql?h.mapping=As:f===su&&(h.mapping=Ea),h}function l(h){let f=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Jb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Mc("WebGLRenderer: "+n+" extension not supported."),i}}}function Qb(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let M=0,y=v.length;M<y;M+=3){const E=v[M+0],T=v[M+1],w=v[M+2];h.push(E,T,T,w,w,E)}}else{const v=p.array;_=p.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const E=M+0,T=M+1,w=M+2;h.push(E,T,T,w,w,E)}}const g=new(p.count>=65535?u_:c_)(h,1);g.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,g)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function e1(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function d(h,f,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/a,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*_[v];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function t1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function n1(r,e,t){const n=new WeakMap,i=new Ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let y=o.attributes.position.count*M,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*E*4*d),w=new id(T,y,E,d);w.type=xi,w.needsUpdate=!0;const x=M*4;for(let P=0;P<d;P++){const R=g[P],D=m[P],k=v[P],V=y*E*4*P;for(let H=0;H<R.count;H++){const z=H*x;f===!0&&(i.fromBufferAttribute(R,H),T[V+z+0]=i.x,T[V+z+1]=i.y,T[V+z+2]=i.z,T[V+z+3]=0),p===!0&&(i.fromBufferAttribute(D,H),T[V+z+4]=i.x,T[V+z+5]=i.y,T[V+z+6]=i.z,T[V+z+7]=0),_===!0&&(i.fromBufferAttribute(k,H),T[V+z+8]=i.x,T[V+z+9]=i.y,T[V+z+10]=i.z,T[V+z+11]=k.itemSize===4?i.w:1)}}h={count:d,texture:w,size:new Ge(y,E)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function i1(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const r1={[qg]:"LINEAR_TONE_MAPPING",[Yg]:"REINHARD_TONE_MAPPING",[$g]:"CINEON_TONE_MAPPING",[Wf]:"ACES_FILMIC_TONE_MAPPING",[Kg]:"AGX_TONE_MAPPING",[Zg]:"NEUTRAL_TONE_MAPPING",[jg]:"CUSTOM_TONE_MAPPING"};function s1(r,e,t,n,i){const s=new Li(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Li(e,t,{type:xr,depthBuffer:!1,stencilBuffer:!1}),o=new _n;o.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const l=new by({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Pt(o,l),u=new fd(-1,1,1,-1,0,1);let d=null,h=null,f=!1,p,_=null,g=[],m=!1;this.setSize=function(v,M){s.setSize(v,M),a.setSize(v,M);for(let y=0;y<g.length;y++){const E=g[y];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){g=v,m=g.length>0&&g[0].isRenderPass===!0;const M=s.width,y=s.height;for(let E=0;E<g.length;E++){const T=g[E];T.setSize&&T.setSize(M,y)}},this.begin=function(v,M){if(f||v.toneMapping===qi&&g.length===0)return!1;if(_=M,M!==null){const y=M.width,E=M.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return m===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=qi,!0},this.hasRenderPass=function(){return m},this.end=function(v,M){v.toneMapping=p,f=!0;let y=s,E=a;for(let T=0;T<g.length;T++){const w=g[T];if(w.enabled!==!1&&(w.render(v,E,y,M),w.needsSwap!==!1)){const x=y;y=E,E=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},pt.getTransfer(d)===St&&(l.defines.SRGB_TRANSFER="");const T=r1[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const T_=new Cn,lf=new zo(1,1),E_=new id,w_=new qx,A_=new m_,tm=[],nm=[],im=new Float32Array(16),rm=new Float32Array(9),sm=new Float32Array(4);function Fa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=tm[i];if(s===void 0&&(s=new Float32Array(i),tm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wc(r,e){let t=nm[e];t===void 0&&(t=new Int32Array(e),nm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function a1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function o1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function c1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function u1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;sm.set(n),r.uniformMatrix2fv(this.addr,!1,sm),sn(t,n)}}function h1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;rm.set(n),r.uniformMatrix3fv(this.addr,!1,rm),sn(t,n)}}function f1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;im.set(n),r.uniformMatrix4fv(this.addr,!1,im),sn(t,n)}}function d1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function p1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function m1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function g1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function _1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function v1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function x1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function y1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function M1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(lf.compareFunction=t.isReversedDepthBuffer()?ed:Qf,s=lf):s=T_,t.setTexture2D(e||s,i)}function S1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||w_,i)}function b1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||A_,i)}function T1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||E_,i)}function E1(r){switch(r){case 5126:return a1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return h1;case 35676:return f1;case 5124:case 35670:return d1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return _1;case 36294:return v1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return T1}}function w1(r,e){r.uniform1fv(this.addr,e)}function A1(r,e){const t=Fa(e,this.size,2);r.uniform2fv(this.addr,t)}function C1(r,e){const t=Fa(e,this.size,3);r.uniform3fv(this.addr,t)}function R1(r,e){const t=Fa(e,this.size,4);r.uniform4fv(this.addr,t)}function P1(r,e){const t=Fa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function D1(r,e){const t=Fa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function L1(r,e){const t=Fa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function I1(r,e){r.uniform1iv(this.addr,e)}function N1(r,e){r.uniform2iv(this.addr,e)}function U1(r,e){r.uniform3iv(this.addr,e)}function F1(r,e){r.uniform4iv(this.addr,e)}function O1(r,e){r.uniform1uiv(this.addr,e)}function B1(r,e){r.uniform2uiv(this.addr,e)}function k1(r,e){r.uniform3uiv(this.addr,e)}function z1(r,e){r.uniform4uiv(this.addr,e)}function V1(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=lf:a=T_;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function H1(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||w_,s[a])}function G1(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||A_,s[a])}function W1(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||E_,s[a])}function X1(r){switch(r){case 5126:return w1;case 35664:return A1;case 35665:return C1;case 35666:return R1;case 35674:return P1;case 35675:return D1;case 35676:return L1;case 5124:case 35670:return I1;case 35667:case 35671:return N1;case 35668:case 35672:return U1;case 35669:case 35673:return F1;case 5125:return O1;case 36294:return B1;case 36295:return k1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return W1}}class q1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=E1(t.type)}}class Y1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X1(t.type)}}class $1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function am(r,e){r.seq.push(e),r.map[e.id]=e}function j1(r,e,t){const n=r.name,i=n.length;for(ku.lastIndex=0;;){const s=ku.exec(n),a=ku.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){am(t,c===void 0?new q1(o,r,e):new Y1(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new $1(o),am(t,d)),t=d}}}class Zl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);j1(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function om(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const K1=37297;let Z1=0;function J1(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const lm=new tt;function Q1(r){pt._getMatrix(lm,pt.workingColorSpace,r);const e=`mat3( ${lm.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(r)){case xc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+J1(r.getShaderSource(e),o)}else return s}function eT(r,e){const t=Q1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tT={[qg]:"Linear",[Yg]:"Reinhard",[$g]:"Cineon",[Wf]:"ACESFilmic",[Kg]:"AgX",[Zg]:"Neutral",[jg]:"Custom"};function nT(r,e){const t=tT[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new O;function iT(){pt.getLuminanceCoefficients(Cl);const r=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function sT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function aT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function to(r){return r!==""}function um(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oT=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(r){return r.replace(oT,cT)}const lT=new Map;function cT(r,e){let t=rt[e];if(t===void 0){const n=lT.get(e);if(n!==void 0)t=rt[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cf(t)}const uT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(r){return r.replace(uT,hT)}function hT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const fT={[Xl]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function dT(r){return fT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pT={[As]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE",[kc]:"ENVMAP_TYPE_CUBE_UV"};function mT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":pT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const gT={[Ea]:"ENVMAP_MODE_REFRACTION"};function _T(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vT={[Gf]:"ENVMAP_BLENDING_MULTIPLY",[sx]:"ENVMAP_BLENDING_MIX",[ax]:"ENVMAP_BLENDING_ADD"};function xT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vT[r.combine]||"ENVMAP_BLENDING_NONE"}function yT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function MT(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dT(t),c=mT(t),u=_T(t),d=xT(t),h=yT(t),f=rT(t),p=sT(s),_=i.createProgram();let g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(to).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(to).join(`
`),m.length>0&&(m+=`
`)):(g=[dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),m=[dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?rt.tonemapping_pars_fragment:"",t.toneMapping!==qi?nT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,eT("linearToOutputTexel",t.outputColorSpace),iT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),a=cf(a),a=um(a,t),a=hm(a,t),o=cf(o),o=um(o,t),o=hm(o,t),a=fm(a),o=fm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+g+a,y=v+m+o,E=om(i,i.VERTEX_SHADER,M),T=om(i,i.FRAGMENT_SHADER,y);i.attachShader(_,E),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(R){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(E)||"",V=i.getShaderInfoLog(T)||"",H=D.trim(),z=k.trim(),F=V.trim();let J=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,T);else{const L=cm(i,E,"vertex"),le=cm(i,T,"fragment");He("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+L+`
`+le)}else H!==""?Le("WebGLProgram: Program Info Log:",H):(z===""||F==="")&&(Q=!1);Q&&(R.diagnostics={runnable:J,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:F,prefix:m}})}i.deleteShader(E),i.deleteShader(T),x=new Zl(i,_),S=aT(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(_,K1)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let ST=0;class bT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new TT(e),t.set(e,n)),n}}class TT{constructor(e){this.id=ST++,this.code=e,this.usedTimes=0}}function ET(r,e,t,n,i,s){const a=new rd,o=new bT,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,P,R,D){const k=R.fog,V=D.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||H,z),J=F&&F.mapping===kc?F.image.height:null,Q=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const L=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=L!==void 0?L.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let ke,We,$e,j;if(Q){const ve=Vi[Q];ke=ve.vertexShader,We=ve.fragmentShader}else ke=x.vertexShader,We=x.fragmentShader,o.update(x),$e=o.getVertexShaderID(x),j=o.getFragmentShaderID(x);const ee=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,Ce=!!x.map,ft=!!x.matcap,be=!!F,ze=!!x.aoMap,Ze=!!x.lightMap,Be=!!x.bumpMap,X=!!x.normalMap,N=!!x.displacementMap,_t=!!x.emissiveMap,at=!!x.metalnessMap,Ve=!!x.roughnessMap,xe=x.anisotropy>0,C=x.clearcoat>0,b=x.dispersion>0,U=x.iridescence>0,K=x.sheen>0,Z=x.transmission>0,Y=xe&&!!x.anisotropyMap,_e=C&&!!x.clearcoatMap,ae=C&&!!x.clearcoatNormalMap,Re=C&&!!x.clearcoatRoughnessMap,ye=U&&!!x.iridescenceMap,ne=U&&!!x.iridescenceThicknessMap,se=K&&!!x.sheenColorMap,Me=K&&!!x.sheenRoughnessMap,Te=!!x.specularMap,fe=!!x.specularColorMap,Xe=!!x.specularIntensityMap,I=Z&&!!x.transmissionMap,oe=Z&&!!x.thicknessMap,ie=!!x.gradientMap,de=!!x.alphaMap,te=x.alphaTest>0,$=!!x.alphaHash,Se=!!x.extensions;let Fe=qi;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const mt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:We,defines:x.defines,customVertexShaderID:$e,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Cs,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:ft,envMap:be,envMapMode:be&&F.mapping,envMapCubeUVHeight:J,aoMap:ze,lightMap:Ze,bumpMap:Be,normalMap:X,displacementMap:N,emissiveMap:_t,normalMapObjectSpace:X&&x.normalMapType===dx,normalMapTangentSpace:X&&x.normalMapType===Jf,metalnessMap:at,roughnessMap:Ve,anisotropy:xe,anisotropyMap:Y,clearcoat:C,clearcoatMap:_e,clearcoatNormalMap:ae,clearcoatRoughnessMap:Re,dispersion:b,iridescence:U,iridescenceMap:ye,iridescenceThicknessMap:ne,sheen:K,sheenColorMap:se,sheenRoughnessMap:Me,specularMap:Te,specularColorMap:fe,specularIntensityMap:Xe,transmission:Z,transmissionMap:I,thicknessMap:oe,gradientMap:ie,opaque:x.transparent===!1&&x.blending===fa&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:te,alphaHash:$,combine:x.combine,mapUv:Ce&&p(x.map.channel),aoMapUv:ze&&p(x.aoMap.channel),lightMapUv:Ze&&p(x.lightMap.channel),bumpMapUv:Be&&p(x.bumpMap.channel),normalMapUv:X&&p(x.normalMap.channel),displacementMapUv:N&&p(x.displacementMap.channel),emissiveMapUv:_t&&p(x.emissiveMap.channel),metalnessMapUv:at&&p(x.metalnessMap.channel),roughnessMapUv:Ve&&p(x.roughnessMap.channel),anisotropyMapUv:Y&&p(x.anisotropyMap.channel),clearcoatMapUv:_e&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(x.sheenRoughnessMap.channel),specularMapUv:Te&&p(x.specularMap.channel),specularColorMapUv:fe&&p(x.specularColorMap.channel),specularIntensityMapUv:Xe&&p(x.specularIntensityMap.channel),transmissionMapUv:I&&p(x.transmissionMap.channel),thicknessMapUv:oe&&p(x.thicknessMap.channel),alphaMapUv:de&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(X||xe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Ce||de),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&X===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&pt.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:_t&&x.emissiveMap.isVideoTexture===!0&&pt.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function g(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(S,x),v(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){const S=f[x.type];let P;if(S){const R=Vi[S];P=yy.clone(R.uniforms)}else P=x.uniforms;return P}function y(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new MT(r,S,x,i),c.push(P),u.set(S,P)),P}function E(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:w}}function wT(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function AT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function pm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,_,g,m){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=g,v.group=m),e++,v}function l(h,f,p,_,g,m){const v=o(h,f,p,_,g,m);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function c(h,f,p,_,g,m){const v=o(h,f,p,_,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||AT),n.length>1&&n.sort(f||pm),i.length>1&&i.sort(f||pm)}function d(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function CT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new mm,r.set(n,[a])):i>=s.length?(a=new mm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function RT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ke};break;case"SpotLight":t={position:new O,direction:new O,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function PT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let DT=0;function LT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function IT(r){const e=new RT,t=PT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new it,a=new it;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,M=0,y=0,E=0,T=0,w=0;c.sort(LT);for(let S=0,P=c.length;S<P;S++){const R=c[S],D=R.color,k=R.intensity,V=R.distance;let H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===wa?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*k,d+=D.g*k,h+=D.b*k;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],k);w++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const F=R.shadow,J=t.get(R);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=z,f++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(D).multiplyScalar(k),z.distance=V,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;const F=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,F.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=F.matrix,R.castShadow){const J=t.get(R);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=H,y++}_++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(D).multiplyScalar(k),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=z,g++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const F=R.shadow,J=t.get(R);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,J.shadowCameraNear=F.camera.near,J.shadowCameraFar=F.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=R.shadow.matrix,M++}n.point[p]=z,p++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(k),z.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[m]=z,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==M||x.numSpotShadows!==y||x.numSpotMaps!==E||x.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,x.directionalLength=f,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=M,x.numSpotShadows=y,x.numSpotMaps=E,x.numLightProbes=w,n.version=DT++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const M=c[m];if(M.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(M.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function gm(r){const e=new IT(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function NT(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new gm(r),e.set(i,[o])):s>=a.length?(o=new gm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,OT=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],BT=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],_m=new it,ja=new O,zu=new O;function kT(r,e,t){let n=new sd;const i=new Ge,s=new Ge,a=new Ut,o=new Ey,l=new wy,c={},u=t.maxTextureSize,d={[Xr]:kn,[kn]:Xr,[gi]:gi},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:UT,fragmentShader:FT}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new _n;p.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let m=this.type;this.render=function(T,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===zv&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xl);const S=r.getRenderTarget(),P=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),D=r.state;D.setBlending(pr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=m!==this.type;k&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(H=>H.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,H=T.length;V<H;V++){const z=T[V],F=z.shadow;if(F===void 0){Le("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const J=F.getFrameExtents();i.multiply(J),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,F.mapSize.y=s.y));const Q=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Q,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===eo){if(z.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Li(i.x,i.y,{format:wa,type:xr,minFilter:qt,magFilter:qt,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new zo(i.x,i.y,xi),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=yr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=pn,F.map.depthTexture.magFilter=pn}else z.isPointLight?(F.map=new b_(i.x),F.map.depthTexture=new _y(i.x,ji)):(F.map=new Li(i.x,i.y),F.map.depthTexture=new zo(i.x,i.y,ji)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=yr,this.type===Xl?(F.map.depthTexture.compareFunction=Q?ed:Qf,F.map.depthTexture.minFilter=qt,F.map.depthTexture.magFilter=qt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=pn,F.map.depthTexture.magFilter=pn);F.camera.updateProjectionMatrix()}const L=F.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<L;le++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,le),r.clear();else{le===0&&(r.setRenderTarget(F.map),r.clear());const ce=F.getViewport(le);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),D.viewport(a)}if(z.isPointLight){const ce=F.camera,ke=F.matrix,We=z.distance||ce.far;We!==ce.far&&(ce.far=We,ce.updateProjectionMatrix()),ja.setFromMatrixPosition(z.matrixWorld),ce.position.copy(ja),zu.copy(ce.position),zu.add(OT[le]),ce.up.copy(BT[le]),ce.lookAt(zu),ce.updateMatrixWorld(),ke.makeTranslation(-ja.x,-ja.y,-ja.z),_m.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),F._frustum.setFromProjectionMatrix(_m,ce.coordinateSystem,ce.reversedDepth)}else F.updateMatrices(z);n=F.getFrustum(),y(w,x,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===eo&&v(F,x),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(S,P,R)};function v(T,w){const x=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Li(i.x,i.y,{format:wa,type:xr})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,x,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,x,f,_,null)}function M(T,w,x,S){let P=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=P.uuid,k=w.uuid;let V=c[D];V===void 0&&(V={},c[D]=V);let H=V[k];H===void 0&&(H=P.clone(),V[k]=H,w.addEventListener("dispose",E)),P=H}if(P.visible=w.visible,P.wireframe=w.wireframe,S===eo?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=r.properties.get(P);D.light=x}return P}function y(T,w,x,S,P){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===eo)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const k=e.update(T),V=T.material;if(Array.isArray(V)){const H=k.groups;for(let z=0,F=H.length;z<F;z++){const J=H[z],Q=V[J.materialIndex];if(Q&&Q.visible){const L=M(T,Q,S,P);T.onBeforeShadow(r,T,w,x,k,L,J),r.renderBufferDirect(x,null,k,L,T,J),T.onAfterShadow(r,T,w,x,k,L,J)}}}else if(V.visible){const H=M(T,V,S,P);T.onBeforeShadow(r,T,w,x,k,H,null),r.renderBufferDirect(x,null,k,H,T,null),T.onAfterShadow(r,T,w,x,k,H,null)}}const D=T.children;for(let k=0,V=D.length;k<V;k++)y(D[k],w,x,S,P)}function E(T){T.target.removeEventListener("dispose",E);for(const x in c){const S=c[x],P=T.target.uuid;P in S&&(S[P].dispose(),delete S[P])}}}function zT(r,e){function t(){let I=!1;const oe=new Ut;let ie=null;const de=new Ut(0,0,0,0);return{setMask:function(te){ie!==te&&!I&&(r.colorMask(te,te,te,te),ie=te)},setLocked:function(te){I=te},setClear:function(te,$,Se,Fe,mt){mt===!0&&(te*=Fe,$*=Fe,Se*=Fe),oe.set(te,$,Se,Fe),de.equals(oe)===!1&&(r.clearColor(te,$,Se,Fe),de.copy(oe))},reset:function(){I=!1,ie=null,de.set(-1,0,0,0)}}}function n(){let I=!1,oe=!1,ie=null,de=null,te=null;return{setReversed:function($){if(oe!==$){const Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),oe=$;const Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return oe},setTest:function($){$?ee(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function($){ie!==$&&!I&&(r.depthMask($),ie=$)},setFunc:function($){if(oe&&($=Tx[$]),de!==$){switch($){case gh:r.depthFunc(r.NEVER);break;case _h:r.depthFunc(r.ALWAYS);break;case vh:r.depthFunc(r.LESS);break;case Ta:r.depthFunc(r.LEQUAL);break;case xh:r.depthFunc(r.EQUAL);break;case yh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case Sh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=$}},setLocked:function($){I=$},setClear:function($){te!==$&&(te=$,oe&&($=1-$),r.clearDepth($))},reset:function(){I=!1,ie=null,de=null,te=null,oe=!1}}}function i(){let I=!1,oe=null,ie=null,de=null,te=null,$=null,Se=null,Fe=null,mt=null;return{setTest:function(ve){I||(ve?ee(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(ve){oe!==ve&&!I&&(r.stencilMask(ve),oe=ve)},setFunc:function(ve,Pe,et){(ie!==ve||de!==Pe||te!==et)&&(r.stencilFunc(ve,Pe,et),ie=ve,de=Pe,te=et)},setOp:function(ve,Pe,et){($!==ve||Se!==Pe||Fe!==et)&&(r.stencilOp(ve,Pe,et),$=ve,Se=Pe,Fe=et)},setLocked:function(ve){I=ve},setClear:function(ve){mt!==ve&&(r.clearStencil(ve),mt=ve)},reset:function(){I=!1,oe=null,ie=null,de=null,te=null,$=null,Se=null,Fe=null,mt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,M=null,y=null,E=null,T=null,w=new Ke(0,0,0),x=0,S=!1,P=null,R=null,D=null,k=null,V=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,F=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(J)[1]),z=F>=1):J.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),z=F>=2);let Q=null,L={};const le=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),ke=new Ut().fromArray(le),We=new Ut().fromArray(ce);function $e(I,oe,ie,de){const te=new Uint8Array(4),$=r.createTexture();r.bindTexture(I,$),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<ie;Se++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(oe,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(oe+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return $}const j={};j[r.TEXTURE_2D]=$e(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=$e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=$e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=$e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(Ta),Be(!1),X(Zd),ee(r.CULL_FACE),ze(pr);function ee(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function re(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Ie(I,oe){return d[I]!==oe?(r.bindFramebuffer(I,oe),d[I]=oe,I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=oe),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ne(I,oe){let ie=f,de=!1;if(I){ie=h.get(oe),ie===void 0&&(ie=[],h.set(oe,ie));const te=I.textures;if(ie.length!==te.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let $=0,Se=te.length;$<Se;$++)ie[$]=r.COLOR_ATTACHMENT0+$;ie.length=te.length,de=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,de=!0);de&&r.drawBuffers(ie)}function Ce(I){return p!==I?(r.useProgram(I),p=I,!0):!1}const ft={[hs]:r.FUNC_ADD,[Hv]:r.FUNC_SUBTRACT,[Gv]:r.FUNC_REVERSE_SUBTRACT};ft[Wv]=r.MIN,ft[Xv]=r.MAX;const be={[qv]:r.ZERO,[Yv]:r.ONE,[$v]:r.SRC_COLOR,[ph]:r.SRC_ALPHA,[ex]:r.SRC_ALPHA_SATURATE,[Jv]:r.DST_COLOR,[Kv]:r.DST_ALPHA,[jv]:r.ONE_MINUS_SRC_COLOR,[mh]:r.ONE_MINUS_SRC_ALPHA,[Qv]:r.ONE_MINUS_DST_COLOR,[Zv]:r.ONE_MINUS_DST_ALPHA,[tx]:r.CONSTANT_COLOR,[nx]:r.ONE_MINUS_CONSTANT_COLOR,[ix]:r.CONSTANT_ALPHA,[rx]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(I,oe,ie,de,te,$,Se,Fe,mt,ve){if(I===pr){_===!0&&(re(r.BLEND),_=!1);return}if(_===!1&&(ee(r.BLEND),_=!0),I!==Vv){if(I!==g||ve!==S){if((m!==hs||y!==hs)&&(r.blendEquation(r.FUNC_ADD),m=hs,y=hs),ve)switch(I){case fa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFunc(r.ONE,r.ONE);break;case Qd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ep:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:He("WebGLState: Invalid blending: ",I);break}else switch(I){case fa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Qd:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ep:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",I);break}v=null,M=null,E=null,T=null,w.set(0,0,0),x=0,g=I,S=ve}return}te=te||oe,$=$||ie,Se=Se||de,(oe!==m||te!==y)&&(r.blendEquationSeparate(ft[oe],ft[te]),m=oe,y=te),(ie!==v||de!==M||$!==E||Se!==T)&&(r.blendFuncSeparate(be[ie],be[de],be[$],be[Se]),v=ie,M=de,E=$,T=Se),(Fe.equals(w)===!1||mt!==x)&&(r.blendColor(Fe.r,Fe.g,Fe.b,mt),w.copy(Fe),x=mt),g=I,S=!1}function Ze(I,oe){I.side===gi?re(r.CULL_FACE):ee(r.CULL_FACE);let ie=I.side===kn;oe&&(ie=!ie),Be(ie),I.blending===fa&&I.transparent===!1?ze(pr):ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){P!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),P=I)}function X(I){I!==Bv?(ee(r.CULL_FACE),I!==R&&(I===Zd?r.cullFace(r.BACK):I===kv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),R=I}function N(I){I!==D&&(z&&r.lineWidth(I),D=I)}function _t(I,oe,ie){I?(ee(r.POLYGON_OFFSET_FILL),(k!==oe||V!==ie)&&(k=oe,V=ie,a.getReversed()&&(oe=-oe),r.polygonOffset(oe,ie))):re(r.POLYGON_OFFSET_FILL)}function at(I){I?ee(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function Ve(I){I===void 0&&(I=r.TEXTURE0+H-1),Q!==I&&(r.activeTexture(I),Q=I)}function xe(I,oe,ie){ie===void 0&&(Q===null?ie=r.TEXTURE0+H-1:ie=Q);let de=L[ie];de===void 0&&(de={type:void 0,texture:void 0},L[ie]=de),(de.type!==I||de.texture!==oe)&&(Q!==ie&&(r.activeTexture(ie),Q=ie),r.bindTexture(I,oe||j[I]),de.type=I,de.texture=oe)}function C(){const I=L[Q];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function K(){try{r.texSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function Z(){try{r.texSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function _e(){try{r.compressedTexSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function ae(){try{r.texStorage2D(...arguments)}catch(I){He("WebGLState:",I)}}function Re(){try{r.texStorage3D(...arguments)}catch(I){He("WebGLState:",I)}}function ye(){try{r.texImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function ne(){try{r.texImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function se(I){ke.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ke.copy(I))}function Me(I){We.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),We.copy(I))}function Te(I,oe){let ie=c.get(oe);ie===void 0&&(ie=new WeakMap,c.set(oe,ie));let de=ie.get(I);de===void 0&&(de=r.getUniformBlockIndex(oe,I.name),ie.set(I,de))}function fe(I,oe){const de=c.get(oe).get(I);l.get(oe)!==de&&(r.uniformBlockBinding(oe,de,I.__bindingPointIndex),l.set(oe,de))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,L={},d={},h=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,M=null,y=null,E=null,T=null,w=new Ke(0,0,0),x=0,S=!1,P=null,R=null,D=null,k=null,V=null,ke.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:re,bindFramebuffer:Ie,drawBuffers:Ne,useProgram:Ce,setBlending:ze,setMaterial:Ze,setFlipSided:Be,setCullFace:X,setLineWidth:N,setPolygonOffset:_t,setScissorTest:at,activeTexture:Ve,bindTexture:xe,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:U,texImage2D:ye,texImage3D:ne,updateUBOMapping:Te,uniformBlockBinding:fe,texStorage2D:ae,texStorage3D:Re,texSubImage2D:K,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:se,viewport:Me,reset:Xe}}function VT(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,b){return f?new OffscreenCanvas(C,b):ko("canvas")}function _(C,b,U){let K=1;const Z=xe(C);if((Z.width>U||Z.height>U)&&(K=U/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(K*Z.width),_e=Math.floor(K*Z.height);d===void 0&&(d=p(Y,_e));const ae=b?p(Y,_e):d;return ae.width=Y,ae.height=_e,ae.getContext("2d").drawImage(C,0,0,Y,_e),Le("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_e+")."),ae}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,b,U,K,Z=!1){if(C!==null){if(r[C]!==void 0)return r[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=b;if(b===r.RED&&(U===r.FLOAT&&(Y=r.R32F),U===r.HALF_FLOAT&&(Y=r.R16F),U===r.UNSIGNED_BYTE&&(Y=r.R8)),b===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.R8UI),U===r.UNSIGNED_SHORT&&(Y=r.R16UI),U===r.UNSIGNED_INT&&(Y=r.R32UI),U===r.BYTE&&(Y=r.R8I),U===r.SHORT&&(Y=r.R16I),U===r.INT&&(Y=r.R32I)),b===r.RG&&(U===r.FLOAT&&(Y=r.RG32F),U===r.HALF_FLOAT&&(Y=r.RG16F),U===r.UNSIGNED_BYTE&&(Y=r.RG8)),b===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RG8UI),U===r.UNSIGNED_SHORT&&(Y=r.RG16UI),U===r.UNSIGNED_INT&&(Y=r.RG32UI),U===r.BYTE&&(Y=r.RG8I),U===r.SHORT&&(Y=r.RG16I),U===r.INT&&(Y=r.RG32I)),b===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),U===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),U===r.UNSIGNED_INT&&(Y=r.RGB32UI),U===r.BYTE&&(Y=r.RGB8I),U===r.SHORT&&(Y=r.RGB16I),U===r.INT&&(Y=r.RGB32I)),b===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),U===r.UNSIGNED_INT&&(Y=r.RGBA32UI),U===r.BYTE&&(Y=r.RGBA8I),U===r.SHORT&&(Y=r.RGBA16I),U===r.INT&&(Y=r.RGBA32I)),b===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),b===r.RGBA){const _e=Z?xc:pt.getTransfer(K);U===r.FLOAT&&(Y=r.RGBA32F),U===r.HALF_FLOAT&&(Y=r.RGBA16F),U===r.UNSIGNED_BYTE&&(Y=_e===St?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(C,b){let U;return C?b===null||b===ji||b===Oo?U=r.DEPTH24_STENCIL8:b===xi?U=r.DEPTH32F_STENCIL8:b===Fo&&(U=r.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===Oo?U=r.DEPTH_COMPONENT24:b===xi?U=r.DEPTH_COMPONENT32F:b===Fo&&(U=r.DEPTH_COMPONENT16),U}function E(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==pn&&C.minFilter!==qt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),x(b),b.isVideoTexture&&u.delete(b)}function w(C){const b=C.target;b.removeEventListener("dispose",w),P(b)}function x(C){const b=n.get(C);if(b.__webglInit===void 0)return;const U=C.source,K=h.get(U);if(K){const Z=K[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(C),Object.keys(K).length===0&&h.delete(U)}n.remove(C)}function S(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const U=C.source,K=h.get(U);delete K[b.__cacheKey],a.memory.textures--}function P(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let Z=0;Z<b.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(b.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)r.deleteFramebuffer(b.__webglFramebuffer[K]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const U=C.textures;for(let K=0,Z=U.length;K<Z;K++){const Y=n.get(U[K]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(U[K])}n.remove(C)}let R=0;function D(){R=0}function k(){const C=R;return C>=i.maxTextures&&Le("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function V(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function H(C,b){const U=n.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){const K=C.image;if(K===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,C,b);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+b)}function z(C,b){const U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){j(U,C,b);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+b)}function F(C,b){const U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){j(U,C,b);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+b)}function J(C,b){const U=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&U.__version!==C.version){ee(U,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+b)}const Q={[_c]:r.REPEAT,[Pi]:r.CLAMP_TO_EDGE,[bh]:r.MIRRORED_REPEAT},L={[pn]:r.NEAREST,[lx]:r.NEAREST_MIPMAP_NEAREST,[Qo]:r.NEAREST_MIPMAP_LINEAR,[qt]:r.LINEAR,[au]:r.LINEAR_MIPMAP_NEAREST,[Ur]:r.LINEAR_MIPMAP_LINEAR},le={[px]:r.NEVER,[xx]:r.ALWAYS,[mx]:r.LESS,[Qf]:r.LEQUAL,[gx]:r.EQUAL,[ed]:r.GEQUAL,[_x]:r.GREATER,[vx]:r.NOTEQUAL};function ce(C,b){if(b.type===xi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qt||b.magFilter===au||b.magFilter===Qo||b.magFilter===Ur||b.minFilter===qt||b.minFilter===au||b.minFilter===Qo||b.minFilter===Ur)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Q[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,L[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pn||b.minFilter!==Qo&&b.minFilter!==Ur||b.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ke(C,b){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const K=b.source;let Z=h.get(K);Z===void 0&&(Z={},h.set(K,Z));const Y=V(b);if(Y!==C.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[Y].usedTimes++;const _e=Z[C.__cacheKey];_e!==void 0&&(Z[C.__cacheKey].usedTimes--,_e.usedTimes===0&&S(b)),C.__cacheKey=Y,C.__webglTexture=Z[Y].texture}return U}function We(C,b,U){return Math.floor(Math.floor(C/U)/b)}function $e(C,b,U,K){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,U,K,b.data);else{Y.sort((ne,se)=>ne.start-se.start);let _e=0;for(let ne=1;ne<Y.length;ne++){const se=Y[_e],Me=Y[ne],Te=se.start+se.count,fe=We(Me.start,b.width,4),Xe=We(se.start,b.width,4);Me.start<=Te+1&&fe===Xe&&We(Me.start+Me.count-1,b.width,4)===fe?se.count=Math.max(se.count,Me.start+Me.count-se.start):(++_e,Y[_e]=Me)}Y.length=_e+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),Re=r.getParameter(r.UNPACK_SKIP_PIXELS),ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let ne=0,se=Y.length;ne<se;ne++){const Me=Y[ne],Te=Math.floor(Me.start/4),fe=Math.ceil(Me.count/4),Xe=Te%b.width,I=Math.floor(Te/b.width),oe=fe,ie=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,Xe,I,oe,ie,U,K,b.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function j(C,b,U){let K=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=r.TEXTURE_3D);const Z=ke(C,b),Y=b.source;t.bindTexture(K,C.__webglTexture,r.TEXTURE0+U);const _e=n.get(Y);if(Y.version!==_e.__version||Z===!0){t.activeTexture(r.TEXTURE0+U);const ae=pt.getPrimaries(pt.workingColorSpace),Re=b.colorSpace===or?null:pt.getPrimaries(b.colorSpace),ye=b.colorSpace===or||ae===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ne=_(b.image,!1,i.maxTextureSize);ne=Ve(b,ne);const se=s.convert(b.format,b.colorSpace),Me=s.convert(b.type);let Te=M(b.internalFormat,se,Me,b.colorSpace,b.isVideoTexture);ce(K,b);let fe;const Xe=b.mipmaps,I=b.isVideoTexture!==!0,oe=_e.__version===void 0||Z===!0,ie=Y.dataReady,de=E(b,ne);if(b.isDepthTexture)Te=y(b.format===ms,b.type),oe&&(I?t.texStorage2D(r.TEXTURE_2D,1,Te,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Te,ne.width,ne.height,0,se,Me,null));else if(b.isDataTexture)if(Xe.length>0){I&&oe&&t.texStorage2D(r.TEXTURE_2D,de,Te,Xe[0].width,Xe[0].height);for(let te=0,$=Xe.length;te<$;te++)fe=Xe[te],I?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,se,Me,fe.data):t.texImage2D(r.TEXTURE_2D,te,Te,fe.width,fe.height,0,se,Me,fe.data);b.generateMipmaps=!1}else I?(oe&&t.texStorage2D(r.TEXTURE_2D,de,Te,ne.width,ne.height),ie&&$e(b,ne,se,Me)):t.texImage2D(r.TEXTURE_2D,0,Te,ne.width,ne.height,0,se,Me,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Te,Xe[0].width,Xe[0].height,ne.depth);for(let te=0,$=Xe.length;te<$;te++)if(fe=Xe[te],b.format!==yi)if(se!==null)if(I){if(ie)if(b.layerUpdates.size>0){const Se=jp(fe.width,fe.height,b.format,b.type);for(const Fe of b.layerUpdates){const mt=fe.data.subarray(Fe*Se/fe.data.BYTES_PER_ELEMENT,(Fe+1)*Se/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Fe,fe.width,fe.height,1,se,mt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ne.depth,se,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Te,fe.width,fe.height,ne.depth,0,fe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ne.depth,se,Me,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Te,fe.width,fe.height,ne.depth,0,se,Me,fe.data)}else{I&&oe&&t.texStorage2D(r.TEXTURE_2D,de,Te,Xe[0].width,Xe[0].height);for(let te=0,$=Xe.length;te<$;te++)fe=Xe[te],b.format!==yi?se!==null?I?ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Te,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,se,Me,fe.data):t.texImage2D(r.TEXTURE_2D,te,Te,fe.width,fe.height,0,se,Me,fe.data)}else if(b.isDataArrayTexture)if(I){if(oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Te,ne.width,ne.height,ne.depth),ie)if(b.layerUpdates.size>0){const te=jp(ne.width,ne.height,b.format,b.type);for(const $ of b.layerUpdates){const Se=ne.data.subarray($*te/ne.data.BYTES_PER_ELEMENT,($+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,se,Me,Se)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,se,Me,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,ne.width,ne.height,ne.depth,0,se,Me,ne.data);else if(b.isData3DTexture)I?(oe&&t.texStorage3D(r.TEXTURE_3D,de,Te,ne.width,ne.height,ne.depth),ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,se,Me,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Te,ne.width,ne.height,ne.depth,0,se,Me,ne.data);else if(b.isFramebufferTexture){if(oe)if(I)t.texStorage2D(r.TEXTURE_2D,de,Te,ne.width,ne.height);else{let te=ne.width,$=ne.height;for(let Se=0;Se<de;Se++)t.texImage2D(r.TEXTURE_2D,Se,Te,te,$,0,se,Me,null),te>>=1,$>>=1}}else if(Xe.length>0){if(I&&oe){const te=xe(Xe[0]);t.texStorage2D(r.TEXTURE_2D,de,Te,te.width,te.height)}for(let te=0,$=Xe.length;te<$;te++)fe=Xe[te],I?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,se,Me,fe):t.texImage2D(r.TEXTURE_2D,te,Te,se,Me,fe);b.generateMipmaps=!1}else if(I){if(oe){const te=xe(ne);t.texStorage2D(r.TEXTURE_2D,de,Te,te.width,te.height)}ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,Me,ne)}else t.texImage2D(r.TEXTURE_2D,0,Te,se,Me,ne);g(b)&&m(K),_e.__version=Y.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ee(C,b,U){if(b.image.length!==6)return;const K=ke(C,b),Z=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+U);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(r.TEXTURE0+U);const _e=pt.getPrimaries(pt.workingColorSpace),ae=b.colorSpace===or?null:pt.getPrimaries(b.colorSpace),Re=b.colorSpace===or||_e===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,ne=b.image[0]&&b.image[0].isDataTexture,se=[];for(let $=0;$<6;$++)!ye&&!ne?se[$]=_(b.image[$],!0,i.maxCubemapSize):se[$]=ne?b.image[$].image:b.image[$],se[$]=Ve(b,se[$]);const Me=se[0],Te=s.convert(b.format,b.colorSpace),fe=s.convert(b.type),Xe=M(b.internalFormat,Te,fe,b.colorSpace),I=b.isVideoTexture!==!0,oe=Y.__version===void 0||K===!0,ie=Z.dataReady;let de=E(b,Me);ce(r.TEXTURE_CUBE_MAP,b);let te;if(ye){I&&oe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Xe,Me.width,Me.height);for(let $=0;$<6;$++){te=se[$].mipmaps;for(let Se=0;Se<te.length;Se++){const Fe=te[Se];b.format!==yi?Te!==null?I?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,Fe.width,Fe.height,Te,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Xe,Fe.width,Fe.height,0,Fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,Fe.width,Fe.height,Te,fe,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Xe,Fe.width,Fe.height,0,Te,fe,Fe.data)}}}else{if(te=b.mipmaps,I&&oe){te.length>0&&de++;const $=xe(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Xe,$.width,$.height)}for(let $=0;$<6;$++)if(ne){I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,se[$].width,se[$].height,Te,fe,se[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,se[$].width,se[$].height,0,Te,fe,se[$].data);for(let Se=0;Se<te.length;Se++){const mt=te[Se].image[$].image;I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,mt.width,mt.height,Te,fe,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Xe,mt.width,mt.height,0,Te,fe,mt.data)}}else{I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Te,fe,se[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,Te,fe,se[$]);for(let Se=0;Se<te.length;Se++){const Fe=te[Se];I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,Te,fe,Fe.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Xe,Te,fe,Fe.image[$])}}}g(b)&&m(r.TEXTURE_CUBE_MAP),Y.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function re(C,b,U,K,Z,Y){const _e=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),Re=M(U.internalFormat,_e,ae,U.colorSpace),ye=n.get(b),ne=n.get(U);if(ne.__renderTarget=b,!ye.__hasExternalTextures){const se=Math.max(1,b.width>>Y),Me=Math.max(1,b.height>>Y);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Re,se,Me,b.depth,0,_e,ae,null):t.texImage2D(Z,Y,Re,se,Me,0,_e,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),_t(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Z,ne.__webglTexture,0,N(b)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Z,ne.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(C,b,U){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const K=b.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=y(b.stencilBuffer,Z),_e=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(b),Y,b.width,b.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(b),Y,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Y,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,C)}else{const K=b.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],_e=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),Re=M(Y.internalFormat,_e,ae,Y.colorSpace);_t(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(b),Re,b.width,b.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(b),Re,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Re,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(C,b,U){const K=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);if(Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(r.TEXTURE_CUBE_MAP,b.depthTexture);const ye=s.convert(b.depthTexture.format),ne=s.convert(b.depthTexture.type);let se;b.depthTexture.format===yr?se=r.DEPTH_COMPONENT24:b.depthTexture.format===ms&&(se=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,se,b.width,b.height,0,ye,ne,null)}}else H(b.depthTexture,0);const Y=Z.__webglTexture,_e=N(b),ae=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,Re=b.depthTexture.format===ms?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===yr)_t(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Re,ae,Y,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,Re,ae,Y,0);else if(b.depthTexture.format===ms)_t(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Re,ae,Y,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,Re,ae,Y,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const b=n.get(C),U=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=K}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)Ne(b.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?Ne(b.__webglFramebuffer[0],C,0):Ne(b.__webglFramebuffer,C,0)}else if(U){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=r.createRenderbuffer(),Ie(b.__webglDepthbuffer[K],C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ie(b.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(C,b,U){const K=n.get(C);b!==void 0&&re(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&Ce(C)}function be(C){const b=C.texture,U=n.get(C),K=n.get(b);C.addEventListener("dispose",w);const Z=C.textures,Y=C.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=b.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let Re=0;Re<b.mipmaps.length;Re++)U.__webglFramebuffer[ae][Re]=r.createFramebuffer()}else U.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<b.mipmaps.length;ae++)U.__webglFramebuffer[ae]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(_e)for(let ae=0,Re=Z.length;ae<Re;ae++){const ye=n.get(Z[ae]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&_t(C)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const Re=Z[ae];U.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const ye=s.convert(Re.format,Re.colorSpace),ne=s.convert(Re.type),se=M(Re.internalFormat,ye,ne,Re.colorSpace,C.isXRRenderTarget===!0),Me=N(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,se,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(U.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ce(r.TEXTURE_CUBE_MAP,b);for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)re(U.__webglFramebuffer[ae][Re],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re);else re(U.__webglFramebuffer[ae],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(b)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,Re=Z.length;ae<Re;ae++){const ye=Z[ae],ne=n.get(ye);let se=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ne.__webglTexture),ce(se,ye),re(U.__webglFramebuffer,C,ye,r.COLOR_ATTACHMENT0+ae,se,0),g(ye)&&m(se)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),ce(ae,b),b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)re(U.__webglFramebuffer[Re],C,b,r.COLOR_ATTACHMENT0,ae,Re);else re(U.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,ae,0);g(b)&&m(ae),t.unbindTexture()}C.depthBuffer&&Ce(C)}function ze(C){const b=C.textures;for(let U=0,K=b.length;U<K;U++){const Z=b[U];if(g(Z)){const Y=v(C),_e=n.get(Z).__webglTexture;t.bindTexture(Y,_e),m(Y),t.unbindTexture()}}}const Ze=[],Be=[];function X(C){if(C.samples>0){if(_t(C)===!1){const b=C.textures,U=C.width,K=C.height;let Z=r.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(C),ae=b.length>1;if(ae)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);const ne=n.get(b[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,U,K,0,0,U,K,Z,r.NEAREST),l===!0&&(Ze.length=0,Be.length=0,Ze.push(r.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ze.push(Y),Be.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);const ne=n.get(b[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function N(C){return Math.min(i.maxSamples,C.samples)}function _t(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(C){const b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function Ve(C,b){const U=C.colorSpace,K=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==Cs&&U!==or&&(pt.getTransfer(U)===St?(K!==yi||Z!==ri)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",U)),b}function xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=J,this.rebindTextures=ft,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=re,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HT(r,e){function t(n,i=or){let s;const a=pt.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===qf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Yf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===t_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===n_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qg)return r.BYTE;if(n===e_)return r.SHORT;if(n===Fo)return r.UNSIGNED_SHORT;if(n===Xf)return r.INT;if(n===ji)return r.UNSIGNED_INT;if(n===xi)return r.FLOAT;if(n===xr)return r.HALF_FLOAT;if(n===i_)return r.ALPHA;if(n===r_)return r.RGB;if(n===yi)return r.RGBA;if(n===yr)return r.DEPTH_COMPONENT;if(n===ms)return r.DEPTH_STENCIL;if(n===$f)return r.RED;if(n===jf)return r.RED_INTEGER;if(n===wa)return r.RG;if(n===Kf)return r.RG_INTEGER;if(n===Zf)return r.RGBA_INTEGER;if(n===Yl||n===$l||n===jl||n===Kl)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Th||n===Eh||n===wh||n===Ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Th)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Rh||n===Ph||n===Dh||n===Lh||n===Ih||n===Nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ch||n===Rh)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ph)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dh)return s.COMPRESSED_R11_EAC;if(n===Lh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ih)return s.COMPRESSED_RG11_EAC;if(n===Nh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uh||n===Fh||n===Oh||n===Bh||n===kh||n===zh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===qh||n===Yh||n===$h)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$h)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jh||n===Kh||n===Zh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jh)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jh||n===Qh||n===ef||n===tf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Jh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ef)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new g_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ki({vertexShader:GT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qT extends La{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new XT,m={},v=t.getContextAttributes();let M=null,y=null;const E=[],T=[],w=new Ge;let x=null;const S=new Hn;S.viewport=new Ut;const P=new Hn;P.viewport=new Ut;const R=[S,P],D=new Yy;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=E[j];return ee===void 0&&(ee=new du,E[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=E[j];return ee===void 0&&(ee=new du,E[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=E[j];return ee===void 0&&(ee=new du,E[j]=ee),ee.getHandSpace()};function H(j){const ee=T.indexOf(j.inputSource);if(ee===-1)return;const re=E[ee];re!==void 0&&(re.update(j.inputSource,j.frame,c||a),re.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",F);for(let j=0;j<E.length;j++){const ee=T[j];ee!==null&&(T[j]=null,E[j].disconnect(ee))}k=null,V=null,g.reset();for(const j in m)delete m[j];e.setRenderTarget(M),f=null,h=null,d=null,i=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",z),i.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ie=null,Ne=null;v.depth&&(Ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?ms:yr,Ie=v.stencil?Oo:ji);const Ce={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Li(h.textureWidth,h.textureHeight,{format:yi,type:ri,depthTexture:new zo(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Li(f.framebufferWidth,f.framebufferHeight,{format:yi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(j){for(let ee=0;ee<j.removed.length;ee++){const re=j.removed[ee],Ie=T.indexOf(re);Ie>=0&&(T[Ie]=null,E[Ie].disconnect(re))}for(let ee=0;ee<j.added.length;ee++){const re=j.added[ee];let Ie=T.indexOf(re);if(Ie===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=T.length){T.push(re),Ie=Ce;break}else if(T[Ce]===null){T[Ce]=re,Ie=Ce;break}if(Ie===-1)break}const Ne=E[Ie];Ne&&Ne.connect(re)}}const J=new O,Q=new O;function L(j,ee,re){J.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);const Ie=J.distanceTo(Q),Ne=ee.projectionMatrix.elements,Ce=re.projectionMatrix.elements,ft=Ne[14]/(Ne[10]-1),be=Ne[14]/(Ne[10]+1),ze=(Ne[9]+1)/Ne[5],Ze=(Ne[9]-1)/Ne[5],Be=(Ne[8]-1)/Ne[0],X=(Ce[8]+1)/Ce[0],N=ft*Be,_t=ft*X,at=Ie/(-Be+X),Ve=at*-Be;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ve),j.translateZ(at),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ne[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const xe=ft+at,C=be+at,b=N-Ve,U=_t+(Ie-Ve),K=ze*be/C*xe,Z=Ze*be/C*xe;j.projectionMatrix.makePerspective(b,U,K,Z,xe,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function le(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ee=j.near,re=j.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(re=g.depthFar)),D.near=P.near=S.near=ee,D.far=P.far=S.far=re,(k!==D.near||V!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,V=D.far),D.layers.mask=j.layers.mask|6,S.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const Ie=j.parent,Ne=D.cameras;le(D,Ie);for(let Ce=0;Ce<Ne.length;Ce++)le(Ne[Ce],Ie);Ne.length===2?L(D,S,P):D.projectionMatrix.copy(S.projectionMatrix),ce(j,D,Ie)};function ce(j,ee,re){re===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Aa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(j){return m[j]};let ke=null;function We(j,ee){if(u=ee.getViewerPose(c||a),p=ee,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ie=!1;re.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let be=0;be<re.length;be++){const ze=re[be];let Ze=null;if(f!==null)Ze=f.getViewport(ze);else{const X=d.getViewSubImage(h,ze);Ze=X.viewport,be===0&&(e.setRenderTargetTextures(y,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(y))}let Be=R[be];Be===void 0&&(Be=new Hn,Be.layers.enable(be),Be.viewport=new Ut,R[be]=Be),Be.matrix.fromArray(ze.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ze.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),be===0&&(D.matrix.copy(Be.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push(Be)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const be=d.getDepthInformation(re[0]);be&&be.isValid&&be.texture&&g.init(be,i.renderState)}if(Ne&&Ne.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let be=0;be<re.length;be++){const ze=re[be].camera;if(ze){let Ze=m[ze];Ze||(Ze=new g_,m[ze]=Ze);const Be=d.getCameraImage(ze);Ze.sourceTexture=Be}}}}for(let re=0;re<E.length;re++){const Ie=T[re],Ne=E[re];Ie!==null&&Ne!==void 0&&Ne.update(Ie,ee,c||a)}ke&&ke(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const $e=new S_;$e.setAnimationLoop(We),this.setAnimationLoop=function(j){ke=j},this.dispose=function(){}}}const rs=new jn,YT=new it;function $T(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,__(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,M,y){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===kn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===kn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,rs.copy(y),rs.x*=-1,rs.y*=-1,rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(YT.makeRotationFromEuler(rs)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jT(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function c(v,M){let y=i[v.id];y===void 0&&(p(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",g));const E=M.program;n.updateUBOMapping(v,E);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function u(v){const M=d();v.__bindingPointIndex=M;const y=r.createBuffer(),E=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const M=i[v.id],y=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let T=0,w=y.length;T<w;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,P=x.length;S<P;S++){const R=x[S];if(f(R,T,S,E)===!0){const D=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let H=0;H<k.length;H++){const z=k[H],F=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,D+V,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,M,y,E){const T=v.value,w=M+"_"+y;if(E[w]===void 0)return typeof T=="number"||typeof T=="boolean"?E[w]=T:E[w]=T.clone(),!0;{const x=E[w];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return E[w]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function p(v){const M=v.uniforms;let y=0;const E=16;for(let w=0,x=M.length;w<x;w++){const S=Array.isArray(M[w])?M[w]:[M[w]];for(let P=0,R=S.length;P<R;P++){const D=S[P],k=Array.isArray(D.value)?D.value:[D.value];for(let V=0,H=k.length;V<H;V++){const z=k[V],F=_(z),J=y%E,Q=J%F.boundary,L=J+Q;y+=Q,L!==0&&E-L<F.storage&&(y+=E-L),D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=F.storage}}}const T=y%E;return T>0&&(y+=E-T),v.__size=y,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){const M=v.target;M.removeEventListener("dispose",g);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const KT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function ZT(){return Bi===null&&(Bi=new $o(KT,16,16,wa,xr),Bi.name="DFG_LUT",Bi.minFilter=qt,Bi.magFilter=qt,Bi.wrapS=Pi,Bi.wrapT=Pi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class JT{constructor(e={}){const{canvas:t=Sx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ri}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,g=new Set([Zf,Kf,jf]),m=new Set([ri,ji,Fo,Oo,qf,Yf]),v=new Uint32Array(4),M=new Int32Array(4);let y=null,E=null;const T=[],w=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let P=!1;this._outputColorSpace=Vn;let R=0,D=0,k=null,V=-1,H=null;const z=new Ut,F=new Ut;let J=null;const Q=new Ke(0);let L=0,le=t.width,ce=t.height,ke=1,We=null,$e=null;const j=new Ut(0,0,le,ce),ee=new Ut(0,0,le,ce);let re=!1;const Ie=new sd;let Ne=!1,Ce=!1;const ft=new it,be=new O,ze=new Ut,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function X(){return k===null?ke:1}let N=n;function _t(A,B){return t.getContext(A,B)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hf}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",mt,!1),N===null){const B="webgl2";if(N=_t(B,A),N===null)throw _t(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw He("WebGLRenderer: "+A.message),A}let at,Ve,xe,C,b,U,K,Z,Y,_e,ae,Re,ye,ne,se,Me,Te,fe,Xe,I,oe,ie,de;function te(){at=new Jb(N),at.init(),oe=new HT(N,at),Ve=new Wb(N,at,e,oe),xe=new zT(N,at),Ve.reversedDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),C=new t1(N),b=new wT,U=new VT(N,at,xe,b,Ve,oe,C),K=new Zb(S),Z=new aM(N),ie=new Hb(N,Z),Y=new Qb(N,Z,C,ie),_e=new i1(N,Y,Z,ie,C),fe=new n1(N,Ve,U),se=new Xb(b),ae=new ET(S,K,at,Ve,ie,se),Re=new $T(S,b),ye=new CT,ne=new NT(at),Te=new Vb(S,K,xe,_e,p,l),Me=new kT(S,_e,Ve),de=new jT(N,C,Ve,xe),Xe=new Gb(N,at,C),I=new e1(N,at,C),C.programs=ae.programs,S.capabilities=Ve,S.extensions=at,S.properties=b,S.renderLists=ye,S.shadowMap=Me,S.state=xe,S.info=C}te(),_!==ri&&(x=new s1(_,t.width,t.height,i,s));const $=new qT(S,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(A){A!==void 0&&(ke=A,this.setSize(le,ce,!1))},this.getSize=function(A){return A.set(le,ce)},this.setSize=function(A,B,q=!0){if($.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,ce=B,t.width=Math.floor(A*ke),t.height=Math.floor(B*ke),q===!0&&(t.style.width=A+"px",t.style.height=B+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(le*ke,ce*ke).floor()},this.setDrawingBufferSize=function(A,B,q){le=A,ce=B,ke=q,t.width=Math.floor(A*q),t.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(_===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,B,q,W){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,B,q,W),xe.viewport(z.copy(j).multiplyScalar(ke).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,B,q,W){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,B,q,W),xe.scissor(F.copy(ee).multiplyScalar(ke).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){xe.setScissorTest(re=A)},this.setOpaqueSort=function(A){We=A},this.setTransparentSort=function(A){$e=A},this.getClearColor=function(A){return A.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,q=!0){let W=0;if(A){let G=!1;if(k!==null){const ue=k.texture.format;G=g.has(ue)}if(G){const ue=k.texture.type,pe=m.has(ue),he=Te.getClearColor(),we=Te.getClearAlpha(),Ee=he.r,Je=he.g,ot=he.b;pe?(v[0]=Ee,v[1]=Je,v[2]=ot,v[3]=we,N.clearBufferuiv(N.COLOR,0,v)):(M[0]=Ee,M[1]=Je,M[2]=ot,M[3]=we,N.clearBufferiv(N.COLOR,0,M))}else W|=N.COLOR_BUFFER_BIT}B&&(W|=N.DEPTH_BUFFER_BIT),q&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),Te.dispose(),ye.dispose(),ne.dispose(),b.dispose(),K.dispose(),_e.dispose(),ie.dispose(),de.dispose(),ae.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ye),$.removeEventListener("sessionend",Gt),je.stop()};function Se(A){A.preventDefault(),yc("WebGLRenderer: Context Lost."),P=!0}function Fe(){yc("WebGLRenderer: Context Restored."),P=!1;const A=C.autoReset,B=Me.enabled,q=Me.autoUpdate,W=Me.needsUpdate,G=Me.type;te(),C.autoReset=A,Me.enabled=B,Me.autoUpdate=q,Me.needsUpdate=W,Me.type=G}function mt(A){He("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ve(A){const B=A.target;B.removeEventListener("dispose",ve),Pe(B)}function Pe(A){et(A),b.remove(A)}function et(A){const B=b.get(A).programs;B!==void 0&&(B.forEach(function(q){ae.releaseProgram(q)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,W,G,ue){B===null&&(B=Ze);const pe=G.isMesh&&G.matrixWorld.determinant()<0,he=hi(A,B,q,W,G);xe.setMaterial(W,pe);let we=q.index,Ee=1;if(W.wireframe===!0){if(we=Y.getWireframeAttribute(q),we===void 0)return;Ee=2}const Je=q.drawRange,ot=q.attributes.position;let Ue=Je.start*Ee,Tt=(Je.start+Je.count)*Ee;ue!==null&&(Ue=Math.max(Ue,ue.start*Ee),Tt=Math.min(Tt,(ue.start+ue.count)*Ee)),we!==null?(Ue=Math.max(Ue,0),Tt=Math.min(Tt,we.count)):ot!=null&&(Ue=Math.max(Ue,0),Tt=Math.min(Tt,ot.count));const Wt=Tt-Ue;if(Wt<0||Wt===1/0)return;ie.setup(G,W,he,q,we);let Vt,Et=Xe;if(we!==null&&(Vt=Z.get(we),Et=I,Et.setIndex(Vt)),G.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*X()),Et.setMode(N.LINES)):Et.setMode(N.TRIANGLES);else if(G.isLine){let yn=W.linewidth;yn===void 0&&(yn=1),xe.setLineWidth(yn*X()),G.isLineSegments?Et.setMode(N.LINES):G.isLineLoop?Et.setMode(N.LINE_LOOP):Et.setMode(N.LINE_STRIP)}else G.isPoints?Et.setMode(N.POINTS):G.isSprite&&Et.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Mc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))Et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const yn=G._multiDrawStarts,De=G._multiDrawCounts,Kn=G._multiDrawCount,gt=we?Z.get(we).bytesPerElement:1,bi=b.get(W).currentProgram.getUniforms();for(let Fi=0;Fi<Kn;Fi++)bi.setValue(N,"_gl_DrawID",Fi),Et.render(yn[Fi]/gt,De[Fi])}else if(G.isInstancedMesh)Et.renderInstances(Ue,Wt,G.count);else if(q.isInstancedBufferGeometry){const yn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,De=Math.min(q.instanceCount,yn);Et.renderInstances(Ue,Wt,De)}else Et.render(Ue,Wt)};function me(A,B,q){A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,vn(A,B,q),A.side=Xr,A.needsUpdate=!0,vn(A,B,q),A.side=gi):vn(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),E=ne.get(q),E.init(B),w.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),A!==q&&A.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const W=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const he=ue[pe];me(he,q,G),W.add(he)}else me(ue,q,G),W.add(ue)}),E=w.pop(),W},this.compileAsync=function(A,B,q=null){const W=this.compile(A,B,q);return new Promise(G=>{function ue(){if(W.forEach(function(pe){b.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){G(A);return}setTimeout(ue,10)}at.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let qe=null;function Oe(A){qe&&qe(A)}function Ye(){je.stop()}function Gt(){je.start()}const je=new S_;je.setAnimationLoop(Oe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){qe=A,$.setAnimationLoop(A),A===null?je.stop():je.start()},$.addEventListener("sessionstart",Ye),$.addEventListener("sessionend",Gt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const q=$.enabled===!0&&$.isPresenting===!0,W=x!==null&&(k===null||q)&&x.begin(S,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,B,k),E=ne.get(A,w.length),E.init(B),w.push(E),ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ie.setFromProjectionMatrix(ft,Wi,B.reversedDepth),Ce=this.localClippingEnabled,Ne=se.init(this.clippingPlanes,Ce),y=ye.get(A,T.length),y.init(),T.push(y),$.enabled===!0&&$.isPresenting===!0){const pe=S.xr.getDepthSensingMesh();pe!==null&&It(pe,B,-1/0,S.sortObjects)}It(A,B,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(We,$e),Be=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Be&&Te.addToRenderList(y,A),this.info.render.frame++,Ne===!0&&se.beginShadows();const G=E.state.shadowsArray;if(Me.render(G,A,B),Ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&x.hasRenderPass())===!1){const pe=y.opaque,he=y.transmissive;if(E.setupLights(),B.isArrayCamera){const we=B.cameras;if(he.length>0)for(let Ee=0,Je=we.length;Ee<Je;Ee++){const ot=we[Ee];Nt(pe,he,A,ot)}Be&&Te.render(A);for(let Ee=0,Je=we.length;Ee<Je;Ee++){const ot=we[Ee];Jt(y,A,ot,ot.viewport)}}else he.length>0&&Nt(pe,he,A,B),Be&&Te.render(A),Jt(y,A,B)}k!==null&&D===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),W&&x.end(S),A.isScene===!0&&A.onAfterRender(S,A,B),ie.resetDefaultState(),V=-1,H=null,w.pop(),w.length>0?(E=w[w.length-1],Ne===!0&&se.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function It(A,B,q,W){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){W&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ft);const pe=_e.update(A),he=A.material;he.visible&&y.push(A,pe,he,q,ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const pe=_e.update(A),he=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ze.copy(pe.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(ft)),Array.isArray(he)){const we=pe.groups;for(let Ee=0,Je=we.length;Ee<Je;Ee++){const ot=we[Ee],Ue=he[ot.materialIndex];Ue&&Ue.visible&&y.push(A,pe,Ue,q,ze.z,ot)}}else he.visible&&y.push(A,pe,he,q,ze.z,null)}}const ue=A.children;for(let pe=0,he=ue.length;pe<he;pe++)It(ue[pe],B,q,W)}function Jt(A,B,q,W){const{opaque:G,transmissive:ue,transparent:pe}=A;E.setupLightsView(q),Ne===!0&&se.setGlobalState(S.clippingPlanes,q),W&&xe.viewport(z.copy(W)),G.length>0&&yt(G,B,q),ue.length>0&&yt(ue,B,q),pe.length>0&&yt(pe,B,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Nt(A,B,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Ue=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Li(1,1,{generateMipmaps:!0,type:Ue?xr:ri,minFilter:Ur,samples:Math.max(4,Ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const ue=E.state.transmissionRenderTarget[W.id],pe=W.viewport||z;ue.setSize(pe.z*S.transmissionResolutionScale,pe.w*S.transmissionResolutionScale);const he=S.getRenderTarget(),we=S.getActiveCubeFace(),Ee=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(Q),L=S.getClearAlpha(),L<1&&S.setClearColor(16777215,.5),S.clear(),Be&&Te.render(q);const Je=S.toneMapping;S.toneMapping=qi;const ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Ne===!0&&se.setGlobalState(S.clippingPlanes,W),yt(A,q,W),U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Tt=0,Wt=B.length;Tt<Wt;Tt++){const Vt=B[Tt],{object:Et,geometry:yn,material:De,group:Kn}=Vt;if(De.side===gi&&Et.layers.test(W.layers)){const gt=De.side;De.side=kn,De.needsUpdate=!0,vt(Et,q,W,yn,De,Kn),De.side=gt,De.needsUpdate=!0,Ue=!0}}Ue===!0&&(U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue))}S.setRenderTarget(he,we,Ee),S.setClearColor(Q,L),ot!==void 0&&(W.viewport=ot),S.toneMapping=Je}function yt(A,B,q){const W=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ue=A.length;G<ue;G++){const pe=A[G],{object:he,geometry:we,group:Ee}=pe;let Je=pe.material;Je.allowOverride===!0&&W!==null&&(Je=W),he.layers.test(q.layers)&&vt(he,B,q,we,Je,Ee)}}function vt(A,B,q,W,G,ue){A.onBeforeRender(S,B,q,W,G,ue),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(S,B,q,W,A,ue),G.transparent===!0&&G.side===gi&&G.forceSinglePass===!1?(G.side=kn,G.needsUpdate=!0,S.renderBufferDirect(q,B,W,G,A,ue),G.side=Xr,G.needsUpdate=!0,S.renderBufferDirect(q,B,W,G,A,ue),G.side=gi):S.renderBufferDirect(q,B,W,G,A,ue),A.onAfterRender(S,B,q,W,G,ue)}function vn(A,B,q){B.isScene!==!0&&(B=Ze);const W=b.get(A),G=E.state.lights,ue=E.state.shadowsArray,pe=G.state.version,he=ae.getParameters(A,G.state,ue,B,q),we=ae.getProgramCacheKey(he);let Ee=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=K.get(A.envMap||W.environment,Je),W.envMapRotation=W.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ee===void 0&&(A.addEventListener("dispose",ve),Ee=new Map,W.programs=Ee);let ot=Ee.get(we);if(ot!==void 0){if(W.currentProgram===ot&&W.lightsStateVersion===pe)return xn(A,he),ot}else he.uniforms=ae.getUniforms(A),A.onBeforeCompile(he,S),ot=ae.acquireProgram(he,we),Ee.set(we,ot),W.uniforms=he.uniforms;const Ue=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=se.uniform),xn(A,he),W.needsLights=en(A),W.lightsStateVersion=pe,W.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=ot,W.uniformsList=null,ot}function Dt(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Zl.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function xn(A,B){const q=b.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function hi(A,B,q,W,G){B.isScene!==!0&&(B=Ze),U.resetTextureUnits();const ue=B.fog,pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,he=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Cs,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ee=K.get(W.envMap||pe,we),Je=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ot=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!q.morphAttributes.position,Tt=!!q.morphAttributes.normal,Wt=!!q.morphAttributes.color;let Vt=qi;W.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Vt=S.toneMapping);const Et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yn=Et!==void 0?Et.length:0,De=b.get(W),Kn=E.state.lights;if(Ne===!0&&(Ce===!0||A!==H)){const on=A===H&&W.id===V;se.setState(W,A,on)}let gt=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Kn.state.version||De.outputColorSpace!==he||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==Ee||W.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==Je||De.vertexTangents!==ot||De.morphTargets!==Ue||De.morphNormals!==Tt||De.morphColors!==Wt||De.toneMapping!==Vt||De.morphTargetsCount!==yn)&&(gt=!0):(gt=!0,De.__version=W.version);let bi=De.currentProgram;gt===!0&&(bi=vn(W,B,G));let Fi=!1,Kr=!1,Us=!1;const At=bi.getUniforms(),dn=De.uniforms;if(xe.useProgram(bi.program)&&(Fi=!0,Kr=!0,Us=!0),W.id!==V&&(V=W.id,Kr=!0),Fi||H!==A){xe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(N,"projectionMatrix",A.projectionMatrix),At.setValue(N,"viewMatrix",A.matrixWorldInverse);const br=At.map.cameraPosition;br!==void 0&&br.setValue(N,be.setFromMatrixPosition(A.matrixWorld)),Ve.logarithmicDepthBuffer&&At.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,Kr=!0,Us=!0)}if(De.needsLights&&(Kn.state.directionalShadowMap.length>0&&At.setValue(N,"directionalShadowMap",Kn.state.directionalShadowMap,U),Kn.state.spotShadowMap.length>0&&At.setValue(N,"spotShadowMap",Kn.state.spotShadowMap,U),Kn.state.pointShadowMap.length>0&&At.setValue(N,"pointShadowMap",Kn.state.pointShadowMap,U)),G.isSkinnedMesh){At.setOptional(N,G,"bindMatrix"),At.setOptional(N,G,"bindMatrixInverse");const on=G.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),At.setValue(N,"boneTexture",on.boneTexture,U))}G.isBatchedMesh&&(At.setOptional(N,G,"batchingTexture"),At.setValue(N,"batchingTexture",G._matricesTexture,U),At.setOptional(N,G,"batchingIdTexture"),At.setValue(N,"batchingIdTexture",G._indirectTexture,U),At.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&At.setValue(N,"batchingColorTexture",G._colorsTexture,U));const Sr=q.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&fe.update(G,q,bi),(Kr||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,At.setValue(N,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(dn.envMapIntensity.value=B.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=ZT()),Kr&&(At.setValue(N,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&Qt(dn,Us),ue&&W.fog===!0&&Re.refreshFogUniforms(dn,ue),Re.refreshMaterialUniforms(dn,W,ke,ce,E.state.transmissionRenderTarget[A.id]),Zl.upload(N,Dt(De),dn,U)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zl.upload(N,Dt(De),dn,U),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(N,"center",G.center),At.setValue(N,"modelViewMatrix",G.modelViewMatrix),At.setValue(N,"normalMatrix",G.normalMatrix),At.setValue(N,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const on=W.uniformsGroups;for(let br=0,Fs=on.length;br<Fs;br++){const Dd=on[br];de.update(Dd,bi),de.bind(Dd,bi)}}return bi}function Qt(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function en(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,B,q){const W=b.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=B,b.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const q=b.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const an=N.createFramebuffer();this.setRenderTarget=function(A,B=0,q=0){k=A,R=B,D=q;let W=null,G=!1,ue=!1;if(A){const he=b.get(A);if(he.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(N.FRAMEBUFFER,he.__webglFramebuffer),z.copy(A.viewport),F.copy(A.scissor),J=A.scissorTest,xe.viewport(z),xe.scissor(F),xe.setScissorTest(J),V=-1;return}else if(he.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(he.__hasExternalTextures)U.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(he.__boundDepthTexture!==Je){if(Je!==null&&b.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ue=!0);const Ee=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ee[B])?W=Ee[B][q]:W=Ee[B],G=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?W=b.get(A).__webglMultisampledFramebuffer:Array.isArray(Ee)?W=Ee[q]:W=Ee,z.copy(A.viewport),F.copy(A.scissor),J=A.scissorTest}else z.copy(j).multiplyScalar(ke).floor(),F.copy(ee).multiplyScalar(ke).floor(),J=re;if(q!==0&&(W=an),xe.bindFramebuffer(N.FRAMEBUFFER,W)&&xe.drawBuffers(A,W),xe.viewport(z),xe.scissor(F),xe.setScissorTest(J),G){const he=b.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,he.__webglTexture,q)}else if(ue){const he=B;for(let we=0;we<A.textures.length;we++){const Ee=b.get(A.textures[we]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+we,Ee.__webglTexture,q,he)}}else if(A!==null&&q!==0){const he=b.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.__webglTexture,q)}V=-1},this.readRenderTargetPixels=function(A,B,q,W,G,ue,pe,he=0){if(!(A&&A.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){xe.bindFramebuffer(N.FRAMEBUFFER,we);try{const Ee=A.textures[he],Je=Ee.format,ot=Ee.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!Ve.textureFormatReadable(Je)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(ot)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-W&&q>=0&&q<=A.height-G&&N.readPixels(B,q,W,G,oe.convert(Je),oe.convert(ot),ue)}finally{const Ee=k!==null?b.get(k).__webglFramebuffer:null;xe.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,W,G,ue,pe,he=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we)if(B>=0&&B<=A.width-W&&q>=0&&q<=A.height-G){xe.bindFramebuffer(N.FRAMEBUFFER,we);const Ee=A.textures[he],Je=Ee.format,ot=Ee.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!Ve.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ue),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),N.readPixels(B,q,W,G,oe.convert(Je),oe.convert(ot),0);const Tt=k!==null?b.get(k).__webglFramebuffer:null;xe.bindFramebuffer(N.FRAMEBUFFER,Tt);const Wt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bx(N,Wt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ue),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.deleteBuffer(Ue),N.deleteSync(Wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,q=0){const W=Math.pow(2,-q),G=Math.floor(A.image.width*W),ue=Math.floor(A.image.height*W),pe=B!==null?B.x:0,he=B!==null?B.y:0;U.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,pe,he,G,ue),xe.unbindTexture()};const Ji=N.createFramebuffer(),Ns=N.createFramebuffer();this.copyTextureToTexture=function(A,B,q=null,W=null,G=0,ue=0){let pe,he,we,Ee,Je,ot,Ue,Tt,Wt;const Vt=A.isCompressedTexture?A.mipmaps[ue]:A.image;if(q!==null)pe=q.max.x-q.min.x,he=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Ee=q.min.x,Je=q.min.y,ot=q.isBox3?q.min.z:0;else{const dn=Math.pow(2,-G);pe=Math.floor(Vt.width*dn),he=Math.floor(Vt.height*dn),A.isDataArrayTexture?we=Vt.depth:A.isData3DTexture?we=Math.floor(Vt.depth*dn):we=1,Ee=0,Je=0,ot=0}W!==null?(Ue=W.x,Tt=W.y,Wt=W.z):(Ue=0,Tt=0,Wt=0);const Et=oe.convert(B.format),yn=oe.convert(B.type);let De;B.isData3DTexture?(U.setTexture3D(B,0),De=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),De=N.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),De=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Kn=N.getParameter(N.UNPACK_ROW_LENGTH),gt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),bi=N.getParameter(N.UNPACK_SKIP_PIXELS),Fi=N.getParameter(N.UNPACK_SKIP_ROWS),Kr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,Je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ot);const Us=A.isDataArrayTexture||A.isData3DTexture,At=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const dn=b.get(A),Sr=b.get(B),on=b.get(dn.__renderTarget),br=b.get(Sr.__renderTarget);xe.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let Fs=0;Fs<we;Fs++)Us&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,b.get(A).__webglTexture,G,ot+Fs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,b.get(B).__webglTexture,ue,Wt+Fs)),N.blitFramebuffer(Ee,Je,pe,he,Ue,Tt,pe,he,N.DEPTH_BUFFER_BIT,N.NEAREST);xe.bindFramebuffer(N.READ_FRAMEBUFFER,null),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||b.has(A)){const dn=b.get(A),Sr=b.get(B);xe.bindFramebuffer(N.READ_FRAMEBUFFER,Ji),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ns);for(let on=0;on<we;on++)Us?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dn.__webglTexture,G,ot+on):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dn.__webglTexture,G),At?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Sr.__webglTexture,ue,Wt+on):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Sr.__webglTexture,ue),G!==0?N.blitFramebuffer(Ee,Je,pe,he,Ue,Tt,pe,he,N.COLOR_BUFFER_BIT,N.NEAREST):At?N.copyTexSubImage3D(De,ue,Ue,Tt,Wt+on,Ee,Je,pe,he):N.copyTexSubImage2D(De,ue,Ue,Tt,Ee,Je,pe,he);xe.bindFramebuffer(N.READ_FRAMEBUFFER,null),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(De,ue,Ue,Tt,Wt,pe,he,we,Et,yn,Vt.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(De,ue,Ue,Tt,Wt,pe,he,we,Et,Vt.data):N.texSubImage3D(De,ue,Ue,Tt,Wt,pe,he,we,Et,yn,Vt):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ue,Ue,Tt,pe,he,Et,yn,Vt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ue,Ue,Tt,Vt.width,Vt.height,Et,Vt.data):N.texSubImage2D(N.TEXTURE_2D,ue,Ue,Tt,pe,he,Et,yn,Vt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Kn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Fi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Kr),ue===0&&B.generateMipmaps&&N.generateMipmap(De),xe.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){R=0,D=0,k=null,xe.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}class QT extends l_{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Is;e.deleteAttribute("uv");const t=new Tc({side:kn}),n=new Tc,i=new Wy(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Pt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new zc(e,n,6),o=new zt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Pt(e,ea(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Pt(e,ea(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new Pt(e,ea(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const d=new Pt(e,ea(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const h=new Pt(e,ea(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const f=new Pt(e,ea(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ea(r){return new Ty({color:0,emissive:16777215,emissiveIntensity:r})}function eE(r,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count;let a=0;const o=Object.keys(r.attributes),l={},c={},u=[],d=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let v=0,M=o.length;v<M;v++){const y=o[v],E=r.attributes[y];l[y]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const T=r.morphAttributes[y];T&&(c[y]||(c[y]=[]),T.forEach((w,x)=>{const S=new w.array.constructor(w.count*w.itemSize);c[y][x]=new w.constructor(S,w.itemSize,w.normalized)}))}const f=e*.5,p=Math.log10(1/e),_=Math.pow(10,p),g=f*_;for(let v=0;v<s;v++){const M=n?n.getX(v):v;let y="";for(let E=0,T=o.length;E<T;E++){const w=o[E],x=r.getAttribute(w),S=x.itemSize;for(let P=0;P<S;P++)y+=`${~~(x[d[P]](M)*_+g)},`}if(y in t)u.push(t[y]);else{for(let E=0,T=o.length;E<T;E++){const w=o[E],x=r.getAttribute(w),S=r.morphAttributes[w],P=x.itemSize,R=l[w],D=c[w];for(let k=0;k<P;k++){const V=d[k],H=h[k];if(R[H](a,x[V](M)),S)for(let z=0,F=S.length;z<F;z++)D[z][H](a,S[z][V](M))}}t[y]=a,u.push(a),a++}}const m=r.clone();for(const v in r.attributes){const M=l[v];if(m.setAttribute(v,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),v in c)for(let y=0;y<c[v].length;y++){const E=c[v][y];m.morphAttributes[v][y]=new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)}}return m.setIndex(u),m}function iA(r,e){if(e===ux)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ap||e===hx){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ap)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}const tE=`
vec3 n_mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 n_mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 n_permute(vec4 x) { return n_mod289(((x * 34.0) + 1.0) * x); }
vec4 n_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = n_mod289(i);
  vec4 p = n_permute(n_permute(n_permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = n_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`,nE=`
vec3 n_hash33(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123);
}
float worley(vec3 p) {
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float d = 1.0;
  for (int z = -1; z <= 1; z++)
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec3 o = vec3(float(x), float(y), float(z));
    vec3 r = o + n_hash33(ip + o) - fp;
    d = min(d, dot(r, r));
  }
  return sqrt(d);
}
// Distances to the nearest AND second-nearest point. Where they are almost equal is
// a cell border — so F2 - F1 draws the network of cracks between crumbs.
vec2 worley2(vec3 p) {
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float d1 = 8.0;
  float d2 = 8.0;
  for (int z = -1; z <= 1; z++)
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec3 o = vec3(float(x), float(y), float(z));
    vec3 r = o + n_hash33(ip + o) - fp;
    float d = dot(r, r);
    if (d < d1) { d2 = d1; d1 = d; }
    else if (d < d2) { d2 = d; }
  }
  return vec2(sqrt(d1), sqrt(d2));
}
`,iE=`
vec3 crustPerturb(vec3 surfPos, vec3 surfNorm, vec2 dHdxy, float faceDir) {
  vec3 vSigmaX = normalize(dFdx(surfPos.xyz));
  vec3 vSigmaY = normalize(dFdy(surfPos.xyz));
  vec3 R1 = cross(vSigmaY, surfNorm);
  vec3 R2 = cross(surfNorm, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDir;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surfNorm - vGrad);
}
`;function Oa(r,e){return r.onBeforeCompile=t=>{Object.assign(t.uniforms,e.uniforms);const n=`${tE}
${nE}
${e.common??""}`;t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${n}`),e.displace&&(t.vertexShader=t.vertexShader.replace("#include <beginnormal_vertex>",`
          ${e.displace}
          vec3 objectNormal = dNormal;
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3(tangent.xyz);
          #endif
        `).replace("#include <begin_vertex>","vec3 transformed = dPos;"));let i=t.fragmentShader.replace("#include <common>",`#include <common>
${n}
${iE}`);e.color&&(i=i.replace("#include <color_fragment>",`#include <color_fragment>
${e.color}`)),e.roughness&&(i=i.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${e.roughness}`)),e.metalness&&(i=i.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e.metalness}`)),e.normal&&(i=i.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${e.normal}`)),e.lighting&&(i=i.replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
${e.lighting}`)),t.fragmentShader=i},r.customProgramCacheKey=()=>e.key,r}const hn=r=>({value:new Ke(r)});function Xc(r={}){const e={raw:"#e6bba2",spice:"#c2502a",batter:"#eee2cc",deep:"#3a1204",golden:"#ad5f17",peak:"#ec9f36",bone:"#dcc59c",...r.palette},t={uTime:{value:0},uCoat:{value:r.coat??1},uFry:{value:r.fry??1},uMarinade:{value:r.marinade??1},uAmp:{value:r.amp??.07},uFreq:{value:r.freq??2.2},uDetail:{value:r.detail??9},uBump:{value:r.bump??1.4},uBoneY:{value:r.boneY??99},uSeed:{value:new O(r.seed??0,(r.seed??0)*1.7,(r.seed??0)*.3)},uRaw:hn(e.raw),uSpice:hn(e.spice),uBatter:hn(e.batter),uDeep:hn(e.deep),uGolden:hn(e.golden),uPeak:hn(e.peak),uBone:hn(e.bone)},n=new jr({color:16777215,roughness:.6,metalness:0,clearcoat:.12,clearcoatRoughness:.5});return r.lowQuality&&(n.defines={CRUST_LQ:""}),Oa(n,{key:"crust",uniforms:t,common:`
      uniform float uTime, uCoat, uFry, uMarinade, uAmp, uFreq, uDetail, uBump, uBoneY;
      uniform vec3 uSeed, uRaw, uSpice, uBatter, uDeep, uGolden, uPeak, uBone;
      varying vec3 vObj;
      varying float vMacro;
      varying float vMask;

      // The big shapes: clusters of batter split by deep cracks, on lumpy meat.
      float crustMacro(vec3 p) {
        p += uSeed;
        float lumps = snoise(p * 0.8) * 0.5 + 0.5;
        vec2 f = worley2(p * 1.5);
        float cluster = smoothstep(0.0, 0.32, f.y - f.x) * (1.0 - f.x * 0.6);
        float flakes = 1.0 - abs(snoise(p * 3.4));
        flakes = flakes * flakes * flakes;
        return lumps * 0.25 + cluster * 0.6 + flakes * 0.22;
      }

      // 1 on the meat, 0 on the bone — with a ragged edge, because batter never
      // stops in a straight line.
      float crustMask(vec3 p) {
        if (uBoneY > 50.0) return 1.0;
        float edge = uBoneY + snoise(p * 5.0 + uSeed) * 0.06;
        return 1.0 - smoothstep(edge - 0.05, edge + 0.04, p.y);
      }

      // The fine crumbs, per pixel: flakes of two sizes with shadowed pits between,
      // and a speckle on top. Two scales, because one reads as a pattern.
      float crumbLayer(vec3 p) {
        vec2 f = worley2(p);
        float crack = smoothstep(0.02, 0.28, f.y - f.x);
        return crack * (1.0 - f.x * 0.7);
      }
      float crustDetail(vec3 p) {
        p += uSeed * 1.7;
        #ifdef CRUST_LQ
          float r = 1.0 - abs(snoise(p * 1.1));
          return r * r * 0.75 + (snoise(p * 3.0) * 0.5 + 0.5) * 0.25;
        #else
          float big = crumbLayer(p);
          float small = crumbLayer(p * 2.7 + 11.0);
          float fine = snoise(p * 6.5) * 0.5 + 0.5;
          return big * 0.5 + small * 0.35 + fine * 0.15;
        #endif
      }
    `,displace:`
      vec3 n0 = normalize(normal);
      // Even raw meat is not a smooth solid of revolution, so a little of the shape
      // is always there; the batter makes it stand proud.
      float amp = uAmp * (0.22 + 0.78 * uCoat);
      float m0 = crustMask(position);
      vec3 dPos = position;
      vec3 dNormal = n0;
      vMacro = crustMacro(position * uFreq);
      if (amp * m0 > 0.00001) {
        vec3 tt = normalize(cross(n0, abs(n0.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
        vec3 bb = normalize(cross(n0, tt));
        float e = 0.01;
        vec3 q1 = position + tt * e;
        vec3 q2 = position + bb * e;
        vec3 P0 = position + n0 * vMacro * amp * m0;
        vec3 P1 = q1 + n0 * crustMacro(q1 * uFreq) * amp * crustMask(q1);
        vec3 P2 = q2 + n0 * crustMacro(q2 * uFreq) * amp * crustMask(q2);
        dPos = P0;
        dNormal = normalize(cross(P1 - P0, P2 - P0));
        if (dot(dNormal, n0) < 0.0) dNormal = -dNormal;
      }
      vObj = position;
      vMask = m0;
    `,color:`
      float cH = crustDetail(vObj * uDetail);
      float cav = clamp(vMacro * 0.75 + cH * 0.38 - 0.08, 0.0, 1.0);

      float speck = smoothstep(0.2, 0.7, snoise(vObj * 30.0 + uSeed)) * 0.7
                  + smoothstep(0.5, 0.9, snoise(vObj * 70.0 - uSeed)) * 0.5;
      vec3 marinated = mix(uRaw, uSpice, clamp(0.5 + speck * 0.5, 0.0, 1.0));
      vec3 meat = mix(uRaw, marinated, uMarinade);

      vec3 coated = mix(uBatter * 0.8, uBatter, smoothstep(0.2, 0.9, cav));
      vec3 cooked = mix(uDeep, uGolden, smoothstep(0.08, 0.55, cav));
      cooked = mix(cooked, uPeak, smoothstep(0.62, 0.98, cav));

      // The peaks brown first and the cracks last, and most of the colour arrives in
      // the first half of the fry — which is how it looks through the oil.
      float browned = clamp(pow(uFry, 0.6) * 1.35 - (1.0 - cav) * 0.35, 0.0, 1.0);
      vec3 crust = mix(meat, coated, uCoat);
      crust = mix(crust, cooked, browned);

      vec3 boneC = uBone * (0.86 + 0.14 * snoise(vObj * 16.0));
      diffuseColor.rgb = mix(boneC, crust, vMask);
    `,roughness:`
      float oil = smoothstep(0.5, 0.95, cH);
      float rCrust = mix(0.62, 0.34, uMarinade);   // marinade is wet
      rCrust = mix(rCrust, 0.88, uCoat);           // flour is chalk-matte
      rCrust = mix(rCrust, 0.74 - oil * 0.3, uFry); // dry crust; the oil glints on the peaks
      roughnessFactor = mix(0.72, rCrust, vMask);
    `,normal:`
      vec2 dH = vec2(dFdx(cH), dFdy(cH)) * uBump * vMask * (0.3 + 0.7 * uCoat);
      normal = crustPerturb(-vViewPosition, normal, dH, faceDirection);
    `,lighting:`
      #ifdef USE_CLEARCOAT
        material.clearcoat *= mix(mix(0.15, 0.7, uMarinade), 1.0, uFry) * mix(0.05, 1.0, vMask) * (1.0 - uCoat * (1.0 - uFry) * 0.9);
      #endif
    `}),n.userData.crust=t,n}function vm(r={}){const e=new jr({color:16777215,roughness:.42,clearcoat:.7,clearcoatRoughness:.32});return Oa(e,{key:"bun",uniforms:{uCrown:hn("#9c4a14"),uRim:hn("#e1a457"),uCrumb:hn("#f2dcb0"),uCutY:{value:r.cutY??99},uCrownY:{value:r.crownY??.8}},common:`
      uniform vec3 uCrown, uRim, uCrumb;
      uniform float uCutY, uCrownY;
      varying vec3 vObj;
    `,displace:`
      vec3 dPos = position;
      vec3 dNormal = normal;
      vObj = position;
    `,color:`
      float t = smoothstep(0.0, uCrownY, vObj.y);
      float n = snoise(vObj * 6.0) * 0.5 + 0.5;
      vec3 c = mix(uRim, uCrown, t * (0.8 + 0.2 * n));
      float cut = smoothstep(uCutY - 0.015, uCutY + 0.015, vObj.y);
      diffuseColor.rgb = mix(c, uCrumb * (0.9 + 0.1 * n), cut);
      float bH = snoise(vObj * 26.0) * 0.5 + snoise(vObj * 60.0) * 0.2;
    `,normal:`
      normal = crustPerturb(-vViewPosition, normal, vec2(dFdx(bH), dFdy(bH)) * 0.25, faceDirection);
    `})}function rE(){return new jr({color:"#f6e7c2",roughness:.45,clearcoat:.3})}function sE(){const r=new jr({color:16777215,roughness:.45,side:gi,clearcoat:.4,clearcoatRoughness:.3});return Oa(r,{key:"lettuce",uniforms:{uDark:hn("#3f8f2a"),uLight:hn("#a8d968")},common:`
      uniform vec3 uDark, uLight;
      varying vec3 vObj;
      float ruffle(vec2 p) {
        float r = length(p);
        float a = atan(p.y, p.x);
        float edge = smoothstep(0.62, 1.15, r);
        return (sin(a * 13.0 + snoise(vec3(p * 2.0, 0.0)) * 2.5) * 0.075
              + snoise(vec3(p * 3.0, 1.0)) * 0.04) * edge;
      }
    `,displace:`
      float e = 0.01;
      vec3 P0 = vec3(position.xy, ruffle(position.xy));
      vec3 P1 = vec3(position.xy + vec2(e, 0.0), ruffle(position.xy + vec2(e, 0.0)));
      vec3 P2 = vec3(position.xy + vec2(0.0, e), ruffle(position.xy + vec2(0.0, e)));
      vec3 dPos = P0;
      vec3 dNormal = normalize(cross(P1 - P0, P2 - P0));
      vObj = position;
    `,color:`
      float r = length(vObj.xy);
      float vein = smoothstep(0.92, 1.0, abs(sin(atan(vObj.y, vObj.x) * 13.0)));
      vec3 c = mix(uLight, uDark, smoothstep(0.55, 1.1, r) * 0.7 + vein * 0.2);
      diffuseColor.rgb = c;
    `})}function aE(){const r=new jr({color:16777215,roughness:.32,side:gi,clearcoat:.5,clearcoatRoughness:.2});return Oa(r,{key:"cheese",uniforms:{uCheese:hn("#f6a81c")},common:`
      uniform vec3 uCheese;
      varying vec3 vObj;
      float droop(vec2 p) {
        float r = length(p);
        return -pow(max(0.0, r - 0.62), 2.0) * 1.6;
      }
    `,displace:`
      float e = 0.01;
      vec3 P0 = vec3(position.xy, droop(position.xy));
      vec3 P1 = vec3(position.xy + vec2(e, 0.0), droop(position.xy + vec2(e, 0.0)));
      vec3 P2 = vec3(position.xy + vec2(0.0, e), droop(position.xy + vec2(0.0, e)));
      vec3 dPos = P0;
      vec3 dNormal = normalize(cross(P1 - P0, P2 - P0));
      vObj = position;
    `,color:`
      diffuseColor.rgb = uCheese * (0.92 + 0.08 * snoise(vObj * 5.0));
    `})}function oE(){const r=new jr({color:16777215,roughness:.5,side:gi,clearcoat:.25});return Oa(r,{key:"carton",uniforms:{uRed:hn("#c8202f"),uCream:hn("#f7e6c8"),uBandY:{value:.33}},common:`
      uniform vec3 uRed, uCream;
      uniform float uBandY;
      varying vec3 vObj;
    `,displace:`
      vec3 dPos = position;
      vec3 dNormal = normal;
      vObj = position;
    `,color:`
      float band = smoothstep(0.012, 0.0, abs(vObj.y - uBandY) - 0.055);
      vec3 c = mix(uRed, uCream, band);
      if (!gl_FrontFacing) c = uRed * 0.35;
      diffuseColor.rgb = c;
    `})}function lE(){const r=new jr({color:16777215,roughness:.3,metalness:1,clearcoat:1,clearcoatRoughness:.12});return Oa(r,{key:"can",uniforms:{uRed:hn("#c8202f"),uCream:hn("#f7e6c8"),uSilver:hn("#d9d6d0"),uBodyMin:{value:-.8},uBodyMax:{value:.76}},common:`
      uniform vec3 uRed, uCream, uSilver;
      uniform float uBodyMin, uBodyMax;
      varying vec3 vObj;
      float canBody() { return step(uBodyMin, vObj.y) * step(vObj.y, uBodyMax); }
      float canBand() {
        float a = atan(vObj.z, vObj.x);
        float wave = sin(a * 2.0 + 1.2) * 0.2;
        return smoothstep(0.012, 0.0, abs(vObj.y - (-0.05 + wave)) - 0.085) * canBody();
      }
    `,displace:`
      vec3 dPos = position;
      vec3 dNormal = normal;
      vObj = position;
    `,color:`
      float body = canBody();
      float band = canBand();
      vec3 c = mix(uSilver, uRed, body);
      diffuseColor.rgb = mix(c, uCream, band);
    `,roughness:`
      roughnessFactor = mix(0.22, 0.3, canBody()) + canBand() * 0.2;
    `,metalness:`
      metalnessFactor = mix(1.0, 0.75, canBody()) * (1.0 - canBand() * 0.9);
    `})}function mo(r){r.deleteAttribute("uv"),r.deleteAttribute("normal");const e=eE(r,1e-4);return e.computeVertexNormals(),r.dispose(),e}function qc(r,e=1){const t=new Zi().setFromObject(r),n=t.getSize(new O),i=t.getCenter(new O),s=e*2/Math.max(n.x,n.y,n.z),a=new Bn;for(;r.children.length;)a.add(r.children[0]);a.position.copy(i).multiplyScalar(-1),r.add(a),r.scale.setScalar(s)}function Yc(r){return()=>{r.traverse(e=>{const t=e;t.isMesh&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose()))})}}function cE(r){const e=[[0,-1.1],[.2,-1.08],[.38,-1.01],[.52,-.91],[.62,-.78],[.69,-.62],[.72,-.44],[.71,-.26],[.66,-.08],[.58,.09],[.47,.25],[.35,.41],[.24,.55],[.165,.67],[.13,.77],[.112,.89],[.108,.99],[.122,1.06],[.158,1.11],[.192,1.16],[.2,1.21],[.18,1.26],[.12,1.3],[.05,1.318],[0,1.322]].map(([u,d])=>new Ge(u,d)),n=new ld(e).getPoints(r.low?120:220);n[0].x=0,n[n.length-1].x=0;let i=new jo(n,r.low?96:180);const s=i.attributes.position;for(let u=0;u<s.count;u++){const h=(s.getY(u)+1.1)/2.42;s.setX(u,s.getX(u)+.09*h*h),s.setZ(u,s.getZ(u)*.88)}i=mo(i);const a=Xc({amp:.11,freq:2.1,detail:13,bump:1.5,boneY:.74,seed:3.1,lowQuality:r.low}),o=new Pt(i,a),l=new Bn;l.add(o),qc(l,1);const c=a.userData.crust;return{name:"drumstick",key:"cg:drumstick",group:l,tilt:-.62,spin:.32,cook:c,timed:[c],dispose:Yc(l)}}function uE(r){const e=[],t=Math.PI*(3-Math.sqrt(5));for(let n=0;n<r;n++){const i=1-n/(r-1)*2,s=Math.sqrt(1-i*i),a=t*n;e.push(new O(Math.cos(a)*s,i,Math.sin(a)*s))}return e}function hE(r){const e=new Bn,t=mo(new po(1,r.low?64:112,r.low?32:56,0,Math.PI*2,0,Math.PI/2)),n=new Pt(t,vm({crownY:.9}));n.scale.set(1.08,.66,1.08),n.position.y=.36,e.add(n);const i=new po(1,10,6);i.scale(.035,.012,.018);const s=uE(220).filter(T=>T.y>.42),a=new zc(i,rE(),s.length),o=new it,l=new Ni,c=new O(0,1,0);s.forEach((T,w)=>{const x=new O(T.x*1.08,T.y*.66+.36,T.z*1.08),S=new O(T.x/1.08,T.y/.66,T.z/1.08).normalize();l.setFromUnitVectors(c,S),l.multiply(new Ni().setFromAxisAngle(c,Math.random()*Math.PI)),o.compose(x.addScaledVector(S,.004),l,new O(1,1,1)),a.setMatrixAt(w,o)}),e.add(a);const u=new ud(.001,1.16,r.low?72:128,r.low?10:18),d=new Pt(u,sE());d.rotation.x=-Math.PI/2,d.position.y=.33,e.add(d);const h=new Ko(1.72,1.72,40,40),f=new Pt(h,aE());f.rotation.x=-Math.PI/2,f.rotation.z=.5,f.position.y=.24,e.add(f);let p=new po(1,r.low?72:128,r.low?36:64);const _=p.attributes.position;for(let T=0;T<_.count;T++){const w=_.getX(T),x=_.getY(T),S=_.getZ(T),P=Math.atan2(S,w),R=1+.08*Math.sin(3*P+1)+.05*Math.sin(5*P+2)+.03*Math.sin(9*P);_.setXYZ(T,w*1.3*R,x*.27,S*1.16*R)}p=mo(p);const g=Xc({amp:.06,freq:2.6,detail:10,bump:1.4,seed:7.7,lowQuality:r.low}),m=new Pt(p,g);m.position.y=0,e.add(m);const v=[[0,-.2],[.85,-.2],[.97,-.16],[1.03,-.07],[1.04,.02],[1,.09],[.93,.12],[0,.12]].map(([T,w])=>new Ge(T,w)),M=mo(new jo(new ld(v).getPoints(48),r.low?64:112)),y=new Pt(M,vm({cutY:.105,crownY:.4}));y.position.y=-.36,e.add(y),qc(e,1);const E=g.userData.crust;return{name:"burger",key:"cg:burger",group:e,tilt:.18,spin:.38,timed:[E],dispose:Yc(e)}}function fE(r){const e=new Bn,t=new ad(.82,.58,1.3,4,1,!0);t.rotateY(Math.PI/4),t.scale(1.12,1,.78);const n=new Pt(t,oE());e.add(n);const i=new Is(.11,1.45,.11,1,8,1),s=Xc({amp:.006,freq:6,detail:16,bump:.5,coat:.25,seed:1.9,lowQuality:r.low,palette:{deep:"#b06a1c",golden:"#e8ad45",peak:"#f8d983",batter:"#f3d38c"}}),a=r.low?26:38,o=new zc(i,s,a),l=new it,c=new jn,u=new Ni;let d=11;const h=()=>(d=d*16807%2147483647)/2147483647;for(let p=0;p<a;p++){const _=(h()-.5)*1.2,g=(h()-.5)*.66,m=.35+h()*.45;c.set((h()-.5)*.45,h()*Math.PI,(h()-.5)*.45-_*.35),u.setFromEuler(c);const v=.85+h()*.3;l.compose(new O(_,m,g),u,new O(1,v,1)),o.setMatrixAt(p,l)}e.add(o),qc(e,1);const f=s.userData.crust;return{name:"fries",key:"cg:fries",group:e,tilt:.14,spin:.42,timed:[f],dispose:Yc(e)}}function dE(r){const e=[[0,-1],[.4,-1],[.47,-.97],[.52,-.9],[.55,-.8],[.55,.76],[.5,.88],[.45,.95],[.455,.99],[.44,1.01],[.4,.99],[0,.98]].map(([s,a])=>new Ge(s,a)),t=mo(new jo(new ld(e).getPoints(90),r.low?72:128)),n=new Pt(t,lE()),i=new Bn;return i.add(n),qc(i,1),{name:"can",key:"cg:can",group:i,tilt:-.22,spin:.6,timed:[],dispose:Yc(i)}}const pE={drumstick:cE,burger:hE,fries:fE,can:dE};function mE(r){return/برجر|برغر|سندو|ساندو|راب|تورتيلا|burger|sandwich|wrap/i.test(r)?"burger":/بطاطس|مقبلات|سلط|حلقات|fries|side/i.test(r)?"fries":/مشروب|عصير|حلو|بيبسي|كانز|drink|dessert|soda/i.test(r)?"can":"drumstick"}const gE="([A-Za-z0-9_-]{10,40})";function Ac(){const r=new RegExp(`^#track-${gE}$`).exec(location.hash);return r?r[1]:null}function _E(r){Ac()!==r&&history.pushState({track:r},"",`#track-${r}`)}function vE(){Ac()&&history.pushState({},"",location.pathname+location.search)}function md(r){return`./${r}`}async function C_(r){const e=await fetch(r);if(!e.ok)throw new Error(`${r}: ${e.status}`);if(!/\.txt(\?.*)?$/i.test(r))return e.arrayBuffer();const t=(await e.text()).replace(/\s+/g,""),n=atob(t),i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i.buffer}const xE=["drumstick","drumstick-raw","drumstick-dredged","burger","fries","can"],R_=/\.(spz|ply|splat|ksplat|sog)(\?.*)?$/i,yE=/\.(glb|gltf)(\.txt)?(\?.*)?$/i;async function ME(){try{const r=await fetch(md("models/manifest.json"),{cache:"no-cache"});if(!r.ok||!(r.headers.get("content-type")??"").includes("json"))return null;const e=await r.json();if(!e||typeof e!="object")return null;const t={};for(const n of xE){const i=e[n],s=a=>typeof a=="string"&&(R_.test(a)||yE.test(a));i&&s(i.file)&&(i.fileLite===void 0||s(i.fileLite))&&(t[n]=i)}return Object.keys(t).length?t:null}catch{return null}}function uf(r){return new URL(r,new URL(md("models/"),document.baseURI)).href}function P_(r,e,t){const n=e.getSize(new O),i=e.getCenter(new O),s=2/Math.max(n.x,n.y,n.z,1e-6)*(t.scale??1),a=new Bn;a.add(r),a.position.copy(i).multiplyScalar(-1);const o=new Bn;return o.add(a),o.scale.setScalar(s),t.offset&&o.position.set(t.offset[0],t.offset[1],t.offset[2]),o}function D_(r){const[e,t,n]=(r.rotate??[0,0,0]).map(i=>a_.degToRad(Number(i)||0));return new jn(e,t,n)}let SE=null,Vu=null;async function bE(r,e,t){const n=await(SE??=Bc(()=>import("./spark.module-C5pnNgvA.js"),[],import.meta.url));Vu||(Vu=new n.SparkRenderer({renderer:e}),t.add(Vu));const i=new n.SplatMesh({url:uf(r.file)});await i.initialized,i.rotation.copy(D_(r)),i.updateMatrix();const s=i.getBoundingBox(!0).applyMatrix4(i.matrix);return P_(i,s,r)}const Hu=r=>({value:new Ke(r)});function TE(r){const e={uTime:{value:0},uCoat:{value:1},uFry:{value:1},uMarinade:{value:1},uRawTone:Hu("#e7b9a1"),uSpiceTone:Hu("#c2502a"),uFlourTone:Hu("#f1e7d6")};return r.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uCoat, uFry, uMarinade;
        uniform vec3 uRawTone, uSpiceTone, uFlourTone;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 friedC = diffuseColor.rgb;
        // Linear luminance of the fried colour, opened up to roughly 0..1.
        float cookT = clamp(sqrt(dot(friedC, vec3(0.2126, 0.7152, 0.0722))) * 1.7, 0.0, 1.0);
        vec3 rawC = uRawTone * mix(0.62, 1.0, cookT);
        vec3 rubC = mix(uRawTone, uSpiceTone, 0.6 + 0.3 * (1.0 - cookT)) * mix(0.55, 1.0, cookT);
        vec3 flourC = uFlourTone * mix(0.6, 1.0, cookT);
        vec3 stageC = mix(mix(rawC, rubC, uMarinade), flourC, uCoat);
        #ifdef USE_COLOR
          // The baked occlusion lives in the vertex colours — keep the cracks dark in
          // every stage, not only the fried one.
          stageC *= mix(vec3(1.0), vec3(dot(vColor.rgb, vec3(0.333))), 0.85);
        #endif
        float browned = clamp(pow(uFry, 0.6) * 1.35 - (1.0 - cookT) * 0.35, 0.0, 1.0);
        diffuseColor.rgb = mix(stageC, friedC, browned);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float stageRough = mix(mix(0.62, 0.36, uMarinade), 0.93, uCoat);
        roughnessFactor = mix(stageRough, roughnessFactor, browned);`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
        #ifdef USE_CLEARCOAT
          material.clearcoat *= mix(uMarinade * 0.5 * (1.0 - uCoat), 1.0, browned);
        #endif`)},r.customProgramCacheKey=()=>"real-cook",e}async function EE(r,e){const t=await(await fetch(e)).json(),n=e.slice(0,e.lastIndexOf("/")+1),i=new zy,s=async(o,l)=>{const c=await i.loadAsync(n+o);return c.flipY=!1,c.wrapS=c.wrapT=_c,c.colorSpace=l?Vn:or,c},a={};await Promise.all(["map","normalMap","roughnessMap","metalnessMap","clearcoatMap"].map(async o=>{typeof t[o]=="string"&&(a[o]=await s(t[o],o==="map"))})),r.traverse(o=>{const l=o;if(l.isMesh)for(const c of Array.isArray(l.material)?l.material:[l.material]){const u=c;if(Object.assign(u,a),a.normalMap){const d=Number(t.normalScale)||1;u.normalScale.set(d,-d)}u.needsUpdate=!0}})}async function wE(r,e,t){const{GLTFLoader:n}=await Bc(async()=>{const{GLTFLoader:d}=await import("./GLTFLoader-xL_17mmx.js");return{GLTFLoader:d}},[],import.meta.url),i=new n,s=uf(e),o=(/\.txt(\?.*)?$/i.test(e)?await i.parseAsync(await C_(s),s.slice(0,s.lastIndexOf("/")+1)):await i.loadAsync(s)).scene;r.textures&&await EE(o,uf(r.textures));const l=d=>{const h=d;if(!r.oil||!h.isMeshStandardMaterial||h.isMeshPhysicalMaterial)return d;const f=new jr;return Tc.prototype.copy.call(f,h),f.clearcoat=Math.min(1,Math.max(0,r.oil)),f.clearcoatRoughness=.35,h.dispose(),f};o.traverse(d=>{const h=d;h.isMesh&&(h.material=Array.isArray(h.material)?h.material.map(l):l(h.material))});let c;if(t){const d=new Set;if(o.traverse(h=>{const f=h;f.isMesh&&(Array.isArray(f.material)?f.material:[f.material]).forEach(p=>d.add(p))}),d.size===1){const h=[...d][0];h.isMeshStandardMaterial&&(c=TE(h))}}o.rotation.copy(D_(r)),o.updateMatrixWorld(!0);const u=new Zi().setFromObject(o);return{group:P_(o,u,r),cook:c}}async function AE(r,e,t,n,i){const s=i.low&&e.fileLite?e.fileLite:e.file;let a,o;return R_.test(s)?a=await bE({...e,file:s},t,n):{group:a,cook:o}=await wE(e,s,r==="drumstick"&&e.cook!==!1),{name:r.startsWith("drumstick")?"drumstick":r,key:`real:${r}`,real:!0,group:a,tilt:e.tilt??0,spin:e.spin??.28,cook:o,timed:o?[o]:[],dispose(){a.traverse(l=>{const c=l;typeof c.dispose=="function"&&!l.isMesh&&c.dispose();const u=l;u.isMesh&&(u.geometry?.dispose(),(Array.isArray(u.material)?u.material:[u.material]).forEach(h=>h?.dispose()))})}}}class Cc{constructor(e){this.canvas=e;const t=matchMedia("(pointer: coarse)").matches,n=navigator.hardwareConcurrency||4;this.quality={low:t||n<=4};try{this.renderer=new JT({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{this.ok=!1;return}this.ok=!0;const i=this.renderer;this.dpr=Math.min(window.devicePixelRatio||1,this.quality.low?1.5:1.75),i.setPixelRatio(this.dpr),i.outputColorSpace=Vn,i.toneMapping=Wf,i.toneMappingExposure=.98,i.setClearColor(0,0);const s=new of(i);this.scene.environment=s.fromScene(new QT,.04).texture,this.scene.environmentIntensity=.55,Promise.all([Bc(()=>import("./EXRLoader-CwviZV1R.js"),[],import.meta.url),C_(md("env/studio.exr.txt"))]).then(([{EXRLoader:d},h])=>{const f=new d().parse(h),p=new $o(f.data,f.width,f.height,f.format,f.type);return p.colorSpace=f.colorSpace??Cs,p.flipY=f.flipY??!1,p.minFilter=qt,p.magFilter=qt,p.generateMipmaps=!1,p.needsUpdate=!0,p}).then(d=>{d.mapping=ql;const h=s.fromEquirectangular(d).texture;d.dispose(),this.scene.environment=h,this.scene.environmentIntensity=.85,this.scene.environmentRotation.set(0,Math.PI*.35,0)}).catch(()=>{}).finally(()=>s.dispose());const o=new wl("#ffe0bd",2.7);o.position.set(3.5,4.5,5);const l=new wl("#ff2638",5.5);this.rim=l,l.position.set(-4.5,1.5,-3.5);const c=new wl("#ff8a3d",2.2);c.position.set(4,-1,-4);const u=new wl("#ffb347",.9);u.position.set(-2,-3,4),this.scene.add(o,l,c,u,new Vy("#fff1dc","#2a0d08",.35)),this.camera.position.set(0,0,9),this.scene.add(this.root),this.root.add(this.tiltGroup),this.tiltGroup.add(this.spinGroup),this.buildCrumbs(),this.setModelNow(this.resolve("drumstick")),window.addEventListener("pointermove",d=>{this.pointer.tx=d.clientX/window.innerWidth*2-1,this.pointer.ty=d.clientY/window.innerHeight*2-1},{passive:!0}),document.addEventListener("visibilitychange",()=>{this.visible=!document.hidden}),this.resize(),window.addEventListener("resize",()=>this.resize())}canvas;ok;renderer;scene=new l_;camera=new Hn(30,1,.1,100);root=new Bn;tiltGroup=new Bn;spinGroup=new Bn;crumbs=null;crumbData=[];crumbUniforms=null;quality;cache=new Map;real=new Map;manifest=null;current=null;pendingSlot="drumstick";swap=1;swapping=!1;anchors=[];target={x:0,y:0,s:0};pos={x:0,y:0,s:0};pointer={x:0,y:0,tx:0,ty:0};spin=0;spinBoost=0;burst=0;cook={coat:1,fry:1,marinade:1};width=1;height=1;visible=!0;clock=new rM;rim=null;static RIM_DRAWN=new Ke("#ff2638");static RIM_REAL=new Ke("#ff6a2a");dpr=1;frameTimes=[];async warmUp(e){if(!this.ok)return;const t=["drumstick","burger","fries","can"];for(let n=0;n<t.length;n++){const i=this.getModel(t[n]),s=new Bn;s.add(i.group),s.position.set(0,0,-50),this.scene.add(s),await(this.renderer.compileAsync?.(this.scene,this.camera)??Promise.resolve(this.renderer.compile(this.scene,this.camera))),this.scene.remove(s),s.remove(i.group),e?.((n+1)/t.length)}this.current&&this.spinGroup.add(this.current.group)}getModel(e){let t=this.cache.get(e);return t||(t=pE[e](this.quality),this.cache.set(e,t)),t}realRitual(){return this.real.has("drumstick-raw")&&this.real.has("drumstick-dredged")&&this.real.has("drumstick")}resolve(e){if(e==="ritual"){if(!this.realRitual()){const i=this.real.get("drumstick");return i?.cook?i:this.getModel("drumstick")}const t=this.cook,n=t.fry>.5?"drumstick":t.coat>.5?"drumstick-dredged":"drumstick-raw";return this.real.get(n)}return this.real.get(e)??this.getModel(e)}setModelNow(e){this.current&&this.spinGroup.remove(this.current.group),this.current=e,this.spinGroup.add(e.group),this.applyCook()}setModel(e){this.pendingSlot=e,!(!this.ok||this.swapping||this.current?.key===this.resolve(e).key)&&(this.swapping=!0,this.burst=1)}async loadCaptures(e){if(!this.ok)return 0;if(this.manifest=await ME(),!this.manifest)return e?.(),0;const t=Object.entries(this.manifest);t.sort(([i],[s])=>i==="drumstick"?-1:s==="drumstick"?1:0);let n=0;for(const[i,s]of t){try{this.real.set(i,await AE(i,s,this.renderer,this.scene,this.quality)),n++}catch(a){console.warn(`[stage] capture for ${i} did not load (${s.file}):`,a)}i==="drumstick"&&e?.()}return this.manifest.drumstick||e?.(),n}get showingReal(){return!!this.current?.real}setCook(e){Object.assign(this.cook,e),this.applyCook(),this.pendingSlot==="ritual"&&this.realRitual()&&this.setModel("ritual")}applyCook(){const e=this.current?.cook;e&&(e.uCoat.value=this.cook.coat,e.uFry.value=this.cook.fry,e.uMarinade.value=this.cook.marinade)}kick(e=1){this.spinBoost+=6*e,this.burst=Math.max(this.burst,.7*e)}registerAnchors(e=document){this.anchors=[...e.querySelectorAll("[data-gl-anchor]")].map(t=>({el:t,model:t.dataset.glModel||null,scale:Number(t.dataset.glScale)||1,spinBoost:Number(t.dataset.glSpin)||0}))}setAnchorModel(e,t){e.dataset.glModel=t;const n=this.anchors.find(i=>i.el===e);n&&(n.model=t)}buildCrumbs(){const e=this.quality.low?34:60,t=new cd(1,2),n=Xc({amp:.45,freq:1.4,detail:3,bump:.6,seed:5.5,lowQuality:!0});this.crumbUniforms=n.userData.crust,this.crumbs=new zc(t,n,e),this.crumbs.frustumCulled=!1;let i=7;const s=()=>(i=i*16807%2147483647)/2147483647;for(let a=0;a<e;a++)this.crumbData.push({r:1.05+s()*.75,a:s()*Math.PI*2,y:(s()-.5)*1.9,s:.012+Math.pow(s(),3)*.045,speed:(.08+s()*.22)*(s()>.5?1:-1),wob:s()*10,rot:new jn(s()*6,s()*6,s()*6)});this.tiltGroup.add(this.crumbs)}resize(){this.ok&&(this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setSize(this.width,this.height,!1),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix())}worldHeight(){return 2*Math.tan(a_.degToRad(this.camera.fov/2))*this.camera.position.z}updateTarget(){let e=null,t=0,n=null;for(const l of this.anchors){const c=l.el.getBoundingClientRect();if(c.width===0||c.height===0)continue;const u=Math.max(0,Math.min(c.bottom,this.height)-Math.max(c.top,0)),d=Math.max(0,Math.min(c.right,this.width)-Math.max(c.left,0)),h=u*d/(c.width*c.height),f=(c.top+c.bottom)/2,p=1-Math.min(1,Math.abs(f-this.height/2)/this.height),_=h*(.5+p);_>t&&(e=l,t=_,n=c)}if(!e||!n||t<.12){this.target.s=0;return}const s=this.worldHeight()/this.height,a=n.left+n.width/2,o=n.top+n.height/2;this.target.x=(a-this.width/2)*s,this.target.y=-(o-this.height/2)*s,this.target.s=Math.min(n.width,n.height)/2*s*e.scale,this.spinBoost=Math.max(this.spinBoost,e.spinBoost),e.model&&this.setModel(e.model)}render(){if(!this.ok||!this.visible)return;const e=this.clock.getDelta(),t=Math.min(e,1/20),n=this.clock.elapsedTime;this.adapt(e),this.updateTarget();const i=1-Math.exp(-4.2*t);this.pos.s===0&&this.target.s>0&&n<1.5&&(this.pos.x=this.target.x,this.pos.y=this.target.y),this.pos.x+=(this.target.x-this.pos.x)*i,this.pos.y+=(this.target.y-this.pos.y)*i,this.pos.s+=(this.target.s-this.pos.s)*i,this.swapping?(this.swap=Math.max(0,this.swap-t*4),this.swap===0&&(this.setModelNow(this.resolve(this.pendingSlot)),this.swapping=!1,this.spinBoost+=4)):this.swap<1&&(this.swap=Math.min(1,this.swap+t*2.6));const s=this.swapping?this.swap*this.swap:1-Math.pow(1-this.swap,3),a=this.current,o=Math.sin(n*1.1)*.035;this.root.position.set(this.pos.x,this.pos.y+o*this.pos.s,0),this.root.scale.setScalar(Math.max(1e-4,this.pos.s*s)),this.pointer.x+=(this.pointer.tx-this.pointer.x)*i,this.pointer.y+=(this.pointer.ty-this.pointer.y)*i,this.tiltGroup.rotation.set(this.pointer.y*.25,this.pointer.x*.35,(a?.tilt??0)+this.pointer.x*-.08),this.spinBoost*=Math.exp(-2.4*t),this.spin+=((a?.spin??.3)+this.spinBoost)*t,this.spinGroup.rotation.y=this.spin;for(const l of a?.timed??[])l.uTime.value=n;if(this.rim){const l=!!a?.real;this.rim.color.lerp(l?Cc.RIM_REAL:Cc.RIM_DRAWN,i),this.rim.intensity+=((l?3.2:5.5)-this.rim.intensity)*i}this.burst*=Math.exp(-1.6*t),this.updateCrumbs(n,t),this.renderer.render(this.scene,this.camera)}adapt(e){if(e>.25||(this.frameTimes.push(e),this.frameTimes.length<60))return;const t=[...this.frameTimes].sort((i,s)=>i-s),n=t[Math.floor(t.length/2)];this.frameTimes=[],n>1/45&&this.dpr>1&&(this.dpr=Math.max(1,this.dpr-.25),this.renderer.setPixelRatio(this.dpr),this.resize())}crumbMatrix=new it;crumbQuat=new Ni;crumbPos=new O;crumbScale=new O;updateCrumbs(e,t){if(!this.crumbs)return;const n=1+this.burst*.9;if(this.crumbData.forEach((i,s)=>{i.a+=i.speed*t*(1+this.burst*4),i.rot.x+=t*.6,i.rot.y+=t*.4;const a=i.r*n;this.crumbPos.set(Math.cos(i.a)*a,i.y*n+Math.sin(e*.7+i.wob)*.08,Math.sin(i.a)*a*.7),this.crumbQuat.setFromEuler(i.rot);const o=i.s*(this.swapping?this.swap:1);this.crumbScale.set(o,o*.8,o*1.1),this.crumbMatrix.compose(this.crumbPos,this.crumbQuat,this.crumbScale),this.crumbs.setMatrixAt(s,this.crumbMatrix)}),this.crumbs.instanceMatrix.needsUpdate=!0,this.current?.real){this.crumbs.visible=!1;return}this.crumbUniforms&&(this.crumbUniforms.uFry.value=this.current?.cook?this.cook.fry:1,this.crumbUniforms.uCoat.value=this.current?.cook?Math.max(.15,this.cook.coat):1,this.crumbs.material.opacity=1,this.crumbs.visible=!(this.current?.cook&&this.cook.coat<.05))}}let gd="ج.م";function CE(r){gd=!r||r.toUpperCase()==="EGP"?"ج.م":r}function Ra(r){return(Math.round(r*100)/100).toLocaleString("en-US",{maximumFractionDigits:2})}function hr(r){return`${Ra(r)} ${gd}`}function Rc(){return gd}function RE(r){return r.replace(/[٠-٩]/g,e=>String(e.charCodeAt(0)-1632)).replace(/[۰-۹]/g,e=>String(e.charCodeAt(0)-1776))}function PE(r){let e=RE(r).replace(/[\s\-().]/g,"");return e.startsWith("+20")?e="0"+e.slice(3):e.startsWith("0020")?e="0"+e.slice(4):/^20\d{10}$/.test(e)&&(e="0"+e.slice(2)),/^01[0125]\d{8}$/.test(e)||/^\+?\d{8,15}$/.test(e)?e:null}function Zt(r){return r.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const Ii={get(r,e){try{const t=localStorage.getItem(r);return t?JSON.parse(t):e}catch{return e}},set(r,e){try{localStorage.setItem(r,JSON.stringify(e))}catch{}},remove(r){try{localStorage.removeItem(r)}catch{}}},Gu="crispo:cart",Wu=50,Xu=r=>Math.round((r+Number.EPSILON)*100)/100;class _d{lines=Ii.get(Gu,[]).filter(e=>Number.isInteger(e?.itemId)&&e.qty>0);listeners=new Set;subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}changed(){Ii.set(Gu,this.lines),this.listeners.forEach(e=>e())}static keyOf(e,t){return`${e}:${[...t].sort((n,i)=>n-i).join(",")}`}add(e,t,n=1){const i=_d.keyOf(e,t),s=this.lines.find(a=>a.key===i);s?s.qty=Math.min(Wu,s.qty+n):this.lines.push({key:i,itemId:e,optionIds:[...t],qty:Math.min(Wu,n)}),this.changed()}setQty(e,t){const n=this.lines.find(i=>i.key===e);n&&(t<=0?this.lines=this.lines.filter(i=>i.key!==e):n.qty=Math.min(Wu,t),this.changed())}clear(){this.lines=[],this.changed()}count(){return this.lines.reduce((e,t)=>e+t.qty,0)}raw(){return this.lines.map(e=>({...e}))}priced(e){if(!e)return{lines:[],subtotal:0,dropped:0};const t=new Map(e.items.map(s=>[s.id,s])),n=[];let i=0;for(const s of this.lines){const a=t.get(s.itemId);if(!a){i++;continue}const o=[];let l=!0;for(const u of a.variants){const d=u.options.find(h=>s.optionIds.includes(h.id));if(!d){l=!1;break}o.push(d)}if(!l||o.length!==s.optionIds.length){i++;continue}const c=Xu(Math.max(0,a.price+o.reduce((u,d)=>u+d.delta,0)));n.push({...s,item:a,options:o,label:o.length?o.map(u=>u.name).join(" · "):null,unitPrice:c,total:Xu(c*s.qty)})}if(i){const s=new Set(n.map(a=>a.key));this.lines=this.lines.filter(a=>s.has(a.key)),Ii.set(Gu,this.lines)}return{lines:n,subtotal:Xu(n.reduce((s,a)=>s+a.total,0)),dropped:i}}}const st={shop:{open:!1,reason:null,snapshot:null,updatedAt:null},cart:new _d,stage:null},L_=new EventTarget;function I_(r,e){L_.dispatchEvent(new CustomEvent(r,{detail:e}))}function Vo(r,e){L_.addEventListener(r,t=>e(t.detail))}function hf(r){st.shop=r,I_("shop",r)}"".replace(/\/$/,"");const vd=()=>Bc(()=>import("./demo-D27nwmOt.js"),[],import.meta.url);async function N_(){return(await vd()).fetchShop()}async function DE(r){return(await vd()).placeOrder(r)}async function LE(r){return(await vd()).fetchOrder(r)}let ss=null,go=null,xd=Ii.get("crispo:sound",!1);function U_(){if(!xd)return null;try{if(ss??=new AudioContext,ss.state==="suspended"&&ss.resume(),!go){go=ss.createBuffer(1,ss.sampleRate*.5,ss.sampleRate);const r=go.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1}return ss}catch{return null}}function qu(){return xd}function IE(r){xd=r,Ii.set("crispo:sound",r),r&&yd(.6)}function yd(r=1){const e=U_();if(!e||!go)return;const t=e.currentTime,n=Math.round(9+r*8);for(let i=0;i<n;i++){const s=t+Math.random()*.13*r+(i===0?0:.004),a=e.createBufferSource();a.buffer=go;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=1800+Math.random()*4200,o.Q.value=1.2+Math.random()*2;const l=e.createGain(),c=(.12+Math.random()*.3)*r;l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(c,s+.002),l.gain.exponentialRampToValueAtTime(1e-4,s+.012+Math.random()*.03),a.connect(o).connect(l).connect(e.destination),a.start(s,Math.random()*.4,.05)}}function NE(){const r=U_();if(!r)return;const e=r.createOscillator(),t=r.createGain();e.type="triangle",e.frequency.value=880,t.gain.setValueAtTime(.06,r.currentTime),t.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+.08),e.connect(t).connect(r.destination),e.start(),e.stop(r.currentTime+.09)}function UE(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function FE(r,e,t){return e&&UE(r.prototype,e),r}var mn,Jl,si,Or,Br,pa,F_,cs,ma,O_,fr,Ai,B_,k_=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},z_=1,la=[],ut=[],Yi=[],_o=Date.now,ff=function(e,t){return t},OE=function(){var e=ma.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,Yi),ut=n,Yi=i,ff=function(a,o){return t[a](o)}},Vr=function(e,t){return~Yi.indexOf(e)&&Yi[Yi.indexOf(e)+1][t]},vo=function(e){return!!~O_.indexOf(e)},Dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Rl="scrollLeft",Pl="scrollTop",df=function(){return fr&&fr.isPressed||ut.cache++},Pc=function(e,t){var n=function i(s){if(s||s===0){z_&&(si.history.scrollRestoration="manual");var a=fr&&fr.isPressed;s=i.v=Math.round(s)||(fr&&fr.iOS?1:0),e(s),i.cacheID=ut.cache,a&&ff("ss",s)}else(t||ut.cache!==i.cacheID||ff("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Fn={s:Rl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pc(function(r){return arguments.length?si.scrollTo(r,nn.sc()):si.pageXOffset||Or[Rl]||Br[Rl]||pa[Rl]||0})},nn={s:Pl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:Pc(function(r){return arguments.length?si.scrollTo(Fn.sc(),r):si.pageYOffset||Or[Pl]||Br[Pl]||pa[Pl]||0})},zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},BE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},qr=function(e,t){var n=t.s,i=t.sc;vo(e)&&(e=Or.scrollingElement||Br);var s=ut.indexOf(e),a=i===nn.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+a]||Dn(e,"scroll",df);var o=ut[s+a],l=o||(ut[s+a]=Pc(Vr(e,n),!0)||(vo(e)?i:Pc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},pf=function(e,t,n){var i=e,s=e,a=_o(),o=a,l=t||50,c=Math.max(500,l*3),u=function(p,_){var g=_o();_||g-a>l?(s=i,i=p,o=a,a=g):n?i+=p:i=s+(p-s)/(g-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(p){var _=o,g=s,m=_o();return(p||p===0)&&p!==i&&u(p),a===o||m-o>c?0:(i+(n?g:-g))/((n?m:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Ka=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},xm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},V_=function(){ma=mn.core.globals().ScrollTrigger,ma&&ma.core&&OE()},H_=function(e){return mn=e||k_(),!Jl&&mn&&typeof document<"u"&&document.body&&(si=window,Or=document,Br=Or.documentElement,pa=Or.body,O_=[si,Or,Br,pa],mn.utils.clamp,B_=mn.core.context||function(){},cs="onpointerenter"in pa?"pointer":"mouse",F_=Yt.isTouch=si.matchMedia&&si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=Yt.eventTypes=("ontouchstart"in Br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return z_=0},500),Jl=1),ma||V_(),Jl};Fn.op=nn;ut.cache=0;var Yt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Jl||H_(mn)||console.warn("Please gsap.registerPlugin(Observer)"),ma||V_();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,v=n.onDrag,M=n.onPress,y=n.onRelease,E=n.onRight,T=n.onLeft,w=n.onUp,x=n.onDown,S=n.onChangeX,P=n.onChangeY,R=n.onChange,D=n.onToggleX,k=n.onToggleY,V=n.onHover,H=n.onHoverEnd,z=n.onMove,F=n.ignoreCheck,J=n.isNormalizer,Q=n.onGestureStart,L=n.onGestureEnd,le=n.onWheel,ce=n.onEnable,ke=n.onDisable,We=n.onClick,$e=n.scrollSpeed,j=n.capture,ee=n.allowClicks,re=n.lockAxis,Ie=n.onLockAxis;this.target=o=zn(o)||Br,this.vars=n,f&&(f=mn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,$e=$e||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(si.getComputedStyle(pa).lineHeight)||22);var Ne,Ce,ft,be,ze,Ze,Be,X=this,N=0,_t=0,at=n.passive||!u&&n.passive!==!1,Ve=qr(o,Fn),xe=qr(o,nn),C=Ve(),b=xe(),U=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ai[0]==="pointerdown",K=vo(o),Z=o.ownerDocument||Or,Y=[0,0,0],_e=[0,0,0],ae=0,Re=function(){return ae=_o()},ye=function(Pe,et){return(X.event=Pe)&&f&&BE(Pe.target,f)||et&&U&&Pe.pointerType!=="touch"||F&&F(Pe,et)},ne=function(){X._vx.reset(),X._vy.reset(),Ce.pause(),d&&d(X)},se=function(){var Pe=X.deltaX=xm(Y),et=X.deltaY=xm(_e),me=Math.abs(Pe)>=i,qe=Math.abs(et)>=i;R&&(me||qe)&&R(X,Pe,et,Y,_e),me&&(E&&X.deltaX>0&&E(X),T&&X.deltaX<0&&T(X),S&&S(X),D&&X.deltaX<0!=N<0&&D(X),N=X.deltaX,Y[0]=Y[1]=Y[2]=0),qe&&(x&&X.deltaY>0&&x(X),w&&X.deltaY<0&&w(X),P&&P(X),k&&X.deltaY<0!=_t<0&&k(X),_t=X.deltaY,_e[0]=_e[1]=_e[2]=0),(be||ft)&&(z&&z(X),ft&&(g&&ft===1&&g(X),v&&v(X),ft=0),be=!1),Ze&&!(Ze=!1)&&Ie&&Ie(X),ze&&(le(X),ze=!1),Ne=0},Me=function(Pe,et,me){Y[me]+=Pe,_e[me]+=et,X._vx.update(Pe),X._vy.update(et),c?Ne||(Ne=requestAnimationFrame(se)):se()},Te=function(Pe,et){re&&!Be&&(X.axis=Be=Math.abs(Pe)>Math.abs(et)?"x":"y",Ze=!0),Be!=="y"&&(Y[2]+=Pe,X._vx.update(Pe,!0)),Be!=="x"&&(_e[2]+=et,X._vy.update(et,!0)),c?Ne||(Ne=requestAnimationFrame(se)):se()},fe=function(Pe){if(!ye(Pe,1)){Pe=Ka(Pe,u);var et=Pe.clientX,me=Pe.clientY,qe=et-X.x,Oe=me-X.y,Ye=X.isDragging;X.x=et,X.y=me,(Ye||(qe||Oe)&&(Math.abs(X.startX-et)>=s||Math.abs(X.startY-me)>=s))&&(ft||(ft=Ye?2:1),Ye||(X.isDragging=!0),Te(qe,Oe))}},Xe=X.onPress=function(ve){ye(ve,1)||ve&&ve.button||(X.axis=Be=null,Ce.pause(),X.isPressed=!0,ve=Ka(ve),N=_t=0,X.startX=X.x=ve.clientX,X.startY=X.y=ve.clientY,X._vx.reset(),X._vy.reset(),Dn(J?o:Z,Ai[1],fe,at,!0),X.deltaX=X.deltaY=0,M&&M(X))},I=X.onRelease=function(ve){if(!ye(ve,1)){Pn(J?o:Z,Ai[1],fe,!0);var Pe=!isNaN(X.y-X.startY),et=X.isDragging,me=et&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),qe=Ka(ve);!me&&Pe&&(X._vx.reset(),X._vy.reset(),u&&ee&&mn.delayedCall(.08,function(){if(_o()-ae>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(Z.createEvent){var Oe=Z.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,si,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Oe)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,d&&et&&!J&&Ce.restart(!0),ft&&se(),m&&et&&m(X),y&&y(X,me)}},oe=function(Pe){return Pe.touches&&Pe.touches.length>1&&(X.isGesturing=!0)&&Q(Pe,X.isDragging)},ie=function(){return(X.isGesturing=!1)||L(X)},de=function(Pe){if(!ye(Pe)){var et=Ve(),me=xe();Me((et-C)*$e,(me-b)*$e,1),C=et,b=me,d&&Ce.restart(!0)}},te=function(Pe){if(!ye(Pe)){Pe=Ka(Pe,u),le&&(ze=!0);var et=(Pe.deltaMode===1?l:Pe.deltaMode===2?si.innerHeight:1)*p;Me(Pe.deltaX*et,Pe.deltaY*et,0),d&&!J&&Ce.restart(!0)}},$=function(Pe){if(!ye(Pe)){var et=Pe.clientX,me=Pe.clientY,qe=et-X.x,Oe=me-X.y;X.x=et,X.y=me,be=!0,d&&Ce.restart(!0),(qe||Oe)&&Te(qe,Oe)}},Se=function(Pe){X.event=Pe,V(X)},Fe=function(Pe){X.event=Pe,H(X)},mt=function(Pe){return ye(Pe)||Ka(Pe,u)&&We(X)};Ce=X._dc=mn.delayedCall(h||.25,ne).pause(),X.deltaX=X.deltaY=0,X._vx=pf(0,50,!0),X._vy=pf(0,50,!0),X.scrollX=Ve,X.scrollY=xe,X.isDragging=X.isGesturing=X.isPressed=!1,B_(this),X.enable=function(ve){return X.isEnabled||(Dn(K?Z:o,"scroll",df),a.indexOf("scroll")>=0&&Dn(K?Z:o,"scroll",de,at,j),a.indexOf("wheel")>=0&&Dn(o,"wheel",te,at,j),(a.indexOf("touch")>=0&&F_||a.indexOf("pointer")>=0)&&(Dn(o,Ai[0],Xe,at,j),Dn(Z,Ai[2],I),Dn(Z,Ai[3],I),ee&&Dn(o,"click",Re,!0,!0),We&&Dn(o,"click",mt),Q&&Dn(Z,"gesturestart",oe),L&&Dn(Z,"gestureend",ie),V&&Dn(o,cs+"enter",Se),H&&Dn(o,cs+"leave",Fe),z&&Dn(o,cs+"move",$)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=be=ft=!1,X._vx.reset(),X._vy.reset(),C=Ve(),b=xe(),ve&&ve.type&&Xe(ve),ce&&ce(X)),X},X.disable=function(){X.isEnabled&&(la.filter(function(ve){return ve!==X&&vo(ve.target)}).length||Pn(K?Z:o,"scroll",df),X.isPressed&&(X._vx.reset(),X._vy.reset(),Pn(J?o:Z,Ai[1],fe,!0)),Pn(K?Z:o,"scroll",de,j),Pn(o,"wheel",te,j),Pn(o,Ai[0],Xe,j),Pn(Z,Ai[2],I),Pn(Z,Ai[3],I),Pn(o,"click",Re,!0),Pn(o,"click",mt),Pn(Z,"gesturestart",oe),Pn(Z,"gestureend",ie),Pn(o,cs+"enter",Se),Pn(o,cs+"leave",Fe),Pn(o,cs+"move",$),X.isEnabled=X.isPressed=X.isDragging=!1,ke&&ke(X))},X.kill=X.revert=function(){X.disable();var ve=la.indexOf(X);ve>=0&&la.splice(ve,1),fr===X&&(fr=0)},la.push(X),J&&vo(o)&&(fr=X),X.enable(_)},FE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Yt.version="3.15.0";Yt.create=function(r){return new Yt(r)};Yt.register=H_;Yt.getAll=function(){return la.slice()};Yt.getById=function(r){return la.filter(function(e){return e.vars.id===r})[0]};k_()&&mn.registerPlugin(Yt);var Ae,ra,ct,Mt,ni,xt,Md,Dc,Ho,xo,no,Dl,bn,$c,mf,Nn,ym,Mm,sa,G_,Yu,W_,In,gf,X_,q_,Dr,_f,Sd,ga,bd,yo,vf,$u,Ll=1,Tn=Date.now,ju=Tn(),Si=0,io=0,Sm=function(e,t,n){var i=ei(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},bm=function(e,t){return t&&(!ei(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},kE=function r(){return io&&requestAnimationFrame(r)},Tm=function(){return $c=1},Em=function(){return $c=0},zi=function(e){return e},ro=function(e){return Math.round(e*1e5)/1e5||0},Y_=function(){return typeof window<"u"},$_=function(){return Ae||Y_()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Rs=function(e){return!!~Md.indexOf(e)},j_=function(e){return(e==="Height"?bd:ct["inner"+e])||ni["client"+e]||xt["client"+e]},K_=function(e){return Vr(e,"getBoundingClientRect")||(Rs(e)?function(){return ic.width=ct.innerWidth,ic.height=bd,ic}:function(){return cr(e)})},zE=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Vr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?j_(s):e["client"+s])||0}},VE=function(e,t){return!t||~Yi.indexOf(e)?K_(e):function(){return ic}},Xi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Vr(e,n))?a()-K_(e)()[s]:Rs(e)?(ni[n]||xt[n])-j_(i):e[n]-e["offset"+i])},Il=function(e,t){for(var n=0;n<sa.length;n+=3)(!t||~t.indexOf(sa[n+1]))&&e(sa[n],sa[n+1],sa[n+2])},ei=function(e){return typeof e=="string"},wn=function(e){return typeof e=="function"},so=function(e){return typeof e=="number"},us=function(e){return typeof e=="object"},Za=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ta=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},na=Math.abs,Z_="left",J_="top",Td="right",Ed="bottom",bs="width",Ts="height",Mo="Right",So="Left",bo="Top",To="Bottom",jt="padding",pi="margin",Pa="Width",wd="Height",tn="px",mi=function(e){return ct.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},HE=function(e){var t=mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},wm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cr=function(e,t){var n=t&&mi(e)[mf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Lc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Q_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},GE=function(e){return function(t){return Ae.utils.snap(Q_(e),t)}},Ad=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},WE=function(e){return function(t,n){return Ad(Q_(e))(t,n.direction)}},Nl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ul=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Am={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fl={toggleActions:"play",anticipatePin:0},Ic={top:0,left:0,center:.5,bottom:1,right:1},Ql=function(e,t){if(ei(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ic?Ic[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ol=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,p=Mt.createElement("div"),_=Rs(n)||Vr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,m=_?xt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,M=v?c:u,y="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(y+=(i===nn?Td:Ed)+":"+(a+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],ec(p,0,i,v),p},ec=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Pa]=1,s["border"+o+Pa]=0,s[n.p]=t+"px",Ae.set(e,s)},lt=[],xf={},Go,Cm=function(){return Tn()-Si>34&&(Go||(Go=requestAnimationFrame(gr)))},ia=function(){(!In||!In.isPressed||In.startX>xt.clientWidth)&&(ut.cache++,In?Go||(Go=requestAnimationFrame(gr)):gr(),Si||Ds("scrollStart"),Si=Tn())},Ku=function(){q_=ct.innerWidth,X_=ct.innerHeight},ao=function(e){ut.cache++,(e===!0||!bn&&!W_&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!gf||q_!==ct.innerWidth||Math.abs(ct.innerHeight-X_)>ct.innerHeight*.25))&&Dc.restart(!0)},Ps={},XE=[],e0=function r(){return cn(Qe,"scrollEnd",r)||gs(!0)},Ds=function(e){return Ps[e]&&Ps[e].map(function(t){return t()})||XE},Qn=[],t0=function(e){for(var t=0;t<Qn.length;t+=5)(!e||Qn[t+4]&&Qn[t+4].query===e)&&(Qn[t].style.cssText=Qn[t+1],Qn[t].getBBox&&Qn[t].setAttribute("transform",Qn[t+2]||""),Qn[t+3].uncache=1)},n0=function(){return ut.forEach(function(e){return wn(e)&&++e.cacheID&&(e.rec=e())})},Cd=function(e,t){var n;for(Nn=0;Nn<lt.length;Nn++)n=lt[Nn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));yo=!0,t&&t0(t),t||Ds("revert")},i0=function(e,t){ut.cache++,(t||!Un)&&ut.forEach(function(n){return wn(n)&&n.cacheID++&&(n.rec=0)}),ei(e)&&(ct.history.scrollRestoration=Sd=e)},Un,Es=0,Rm,qE=function(){if(Rm!==Es){var e=Rm=Es;requestAnimationFrame(function(){return e===Es&&gs(!0)})}},r0=function(){xt.appendChild(ga),bd=!In&&ga.offsetHeight||ct.innerHeight,xt.removeChild(ga)},Pm=function(e){return Ho(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},gs=function(e,t){if(ni=Mt.documentElement,xt=Mt.body,Md=[ct,Mt,ni,xt],Si&&!e&&!yo){un(Qe,"scrollEnd",e0);return}r0(),Un=Qe.isRefreshing=!0,yo||n0();var n=Ds("refreshInit");G_&&Qe.sort(),t||Cd(),ut.forEach(function(i){wn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),lt.slice(0).forEach(function(i){return i.refresh()}),yo=!1,lt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),vf=1,Pm(!0),lt.forEach(function(i){var s=Xi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Pm(!1),vf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){wn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),i0(Sd,1),Dc.pause(),Es++,Un=2,gr(2),lt.forEach(function(i){return wn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Un=Qe.isRefreshing=!1,Ds("refresh")},yf=0,tc=1,Eo,gr=function(e){if(e===2||!Un&&!yo){Qe.isUpdating=!0,Eo&&Eo.update(0);var t=lt.length,n=Tn(),i=n-ju>=50,s=t&&lt[0].scroll();if(tc=yf>s?-1:1,Un||(yf=s),i&&(Si&&!$c&&n-Si>200&&(Si=0,Ds("scrollEnd")),no=ju,ju=n),tc<0){for(Nn=t;Nn-- >0;)lt[Nn]&&lt[Nn].update(0,i);tc=1}else for(Nn=0;Nn<t;Nn++)lt[Nn]&&lt[Nn].update(0,i);Qe.isUpdating=!1}Go=0},Mf=[Z_,J_,Ed,Td,pi+To,pi+Mo,pi+bo,pi+So,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nc=Mf.concat([bs,Ts,"boxSizing","max"+Pa,"max"+wd,"position",pi,jt,jt+bo,jt+Mo,jt+To,jt+So]),YE=function(e,t,n){_a(n);var i=e._gsap;if(i.spacerIsNative)_a(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Zu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Mf.length,a=t.style,o=e.style,l;s--;)l=Mf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ed]=o[Td]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[bs]=Lc(e,Fn)+tn,a[Ts]=Lc(e,nn)+tn,a[jt]=o[pi]=o[J_]=o[Z_]="0",_a(i),o[bs]=o["max"+Pa]=n[bs],o[Ts]=o["max"+wd]=n[Ts],o[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},$E=/([A-Z])/g,_a=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace($E,"-$1").toLowerCase())}},Bl=function(e){for(var t=nc.length,n=e.style,i=[],s=0;s<t;s++)i.push(nc[s],n[nc[s]]);return i.t=e,i},jE=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},ic={left:0,top:0},Dm=function(e,t,n,i,s,a,o,l,c,u,d,h,f,p){wn(e)&&(e=e(l)),ei(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Ql("0"+e.substr(3),n):0));var _=f?f.time():0,g,m,v;if(f&&f.seek(0),isNaN(e)||(e=+e),so(e))f&&(e=Ae.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&ec(o,n,i,!0);else{wn(t)&&(t=t(l));var M=(e||"0").split(" "),y,E,T,w;v=zn(t,l)||xt,y=cr(v)||{},(!y||!y.left&&!y.top)&&mi(v).display==="none"&&(w=v.style.display,v.style.display="block",y=cr(v),w?v.style.display=w:v.style.removeProperty("display")),E=Ql(M[0],y[i.d]),T=Ql(M[1]||"0",n),e=y[i.p]-c[i.p]-u+E+s-T,o&&ec(o,T,i,n-T<20||o._isStart&&T>20),n-=n-T}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var x=e+n,S=a._isStart;g="scroll"+i.d2,ec(a,x,i,S&&x>20||!S&&(d?Math.max(xt[g],ni[g]):a.parentNode[g])<=x+1),d&&(c=cr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+tn))}return f&&v&&(g=cr(v),f.seek(h),m=cr(v),f._caScrollDist=g[i.p]-m[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},KE=/(webkit|moz|length|cssText|inset)/i,Lm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=mi(e);for(a in o)!+a&&!KE.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},s0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},kl=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},Im=function(e,t){var n=qr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,p={};c=c||n();var _=s0(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ut.cache++,a.tween&&gr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Ae.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(e,"wheel",n.wheelHandler),Qe.isTouch&&un(e,"touchmove",n.wheelHandler),s},Qe=(function(){function r(t,n){ra||r.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_f(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!io){this.update=this.refresh=this.kill=zi;return}n=wm(ei(n)||so(n)||n.nodeType?{trigger:n}:n,Fl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,M=s.once,y=s.snap,E=s.pinReparent,T=s.pinSpacer,w=s.containerAnimation,x=s.fastScrollEnd,S=s.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:nn,R=!d&&d!==0,D=zn(n.scroller||ct),k=Ae.core.getCache(D),V=Rs(D),H=("pinType"in n?n.pinType:Vr(D,"pinType")||V&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=R&&n.toggleActions.split(" "),J="markers"in n?n.markers:Fl.markers,Q=V?0:parseFloat(mi(D)["border"+P.p2+Pa])||0,L=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ce=zE(D,V,P),ke=VE(D,V),We=0,$e=0,j=0,ee=qr(D,P),re,Ie,Ne,Ce,ft,be,ze,Ze,Be,X,N,_t,at,Ve,xe,C,b,U,K,Z,Y,_e,ae,Re,ye,ne,se,Me,Te,fe,Xe,I,oe,ie,de,te,$,Se,Fe;if(L._startClamp=L._endClamp=!1,L._dir=P,g*=45,L.scroller=D,L.scroll=w?w.time.bind(w):ee,Ce=ee(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(G_=1,n.refreshPriority===-9999&&(Eo=L)),k.tweenScroll=k.tweenScroll||{top:Im(D,nn),left:Im(D,Fn)},L.tweenTo=re=k.tweenScroll[P.p],L.scrubDuration=function(me){oe=so(me)&&me,oe?I?I.duration(me):I=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:oe,paused:!0,onComplete:function(){return m&&m(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(d),fe=0,l||(l=i.vars.id)),y&&((!us(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&Ae.set(V?[xt,ni]:D,{scrollBehavior:"auto"}),ut.forEach(function(me){return wn(me)&&me.target===(V?Mt.scrollingElement||ni:D)&&(me.smooth=!1)}),Ne=wn(y.snapTo)?y.snapTo:y.snapTo==="labels"?GE(i):y.snapTo==="labelsDirectional"?WE(i):y.directional!==!1?function(me,qe){return Ad(y.snapTo)(me,Tn()-$e<500?0:qe.direction)}:Ae.utils.snap(y.snapTo),ie=y.duration||{min:.1,max:2},ie=us(ie)?xo(ie.min,ie.max):xo(ie,ie),de=Ae.delayedCall(y.delay||oe/2||.1,function(){var me=ee(),qe=Tn()-$e<500,Oe=re.tween;if((qe||Math.abs(L.getVelocity())<10)&&!Oe&&!$c&&We!==me){var Ye=(me-be)/Ve,Gt=i&&!R?i.totalProgress():Ye,je=qe?0:(Gt-Xe)/(Tn()-no)*1e3||0,It=Ae.utils.clamp(-Ye,1-Ye,na(je/2)*je/.185),Jt=Ye+(y.inertia===!1?0:It),Nt,yt,vt=y,vn=vt.onStart,Dt=vt.onInterrupt,xn=vt.onComplete;if(Nt=Ne(Jt,L),so(Nt)||(Nt=Jt),yt=Math.max(0,Math.round(be+Nt*Ve)),me<=ze&&me>=be&&yt!==me){if(Oe&&!Oe._initted&&Oe.data<=na(yt-me))return;y.inertia===!1&&(It=Nt-Ye),re(yt,{duration:ie(na(Math.max(na(Jt-Gt),na(Nt-Gt))*.185/je/.05||0)),ease:y.ease||"power3",data:na(yt-me),onInterrupt:function(){return de.restart(!0)&&Dt&&ta(L,Dt)},onComplete:function(){L.update(),We=ee(),i&&!R&&(I?I.resetTo("totalProgress",Nt,i._tTime/i._tDur):i.progress(Nt)),fe=Xe=i&&!R?i.totalProgress():L.progress,v&&v(L),xn&&ta(L,xn)}},me,It*Ve,yt-me-It*Ve),vn&&ta(L,vn,re.tween)}}else L.isActive&&We!==me&&de.restart(!0)}).pause()),l&&(xf[l]=L),h=L.trigger=zn(h||f!==!0&&f),Fe=h&&h._gsap&&h._gsap.stRevert,Fe&&(Fe=Fe(L)),f=f===!0?h:zn(f),ei(o)&&(o={targets:h,className:o}),f&&(p===!1||p===pi||(p=!p&&f.parentNode&&f.parentNode.style&&mi(f.parentNode).display==="flex"?!1:jt),L.pin=f,Ie=Ae.core.getCache(f),Ie.spacer?xe=Ie.pinState:(T&&(T=zn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ie.spacerIsNative=!!T,T&&(Ie.spacerState=Bl(T))),Ie.spacer=U=T||Mt.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),Ie.pinState=xe=Bl(f)),n.force3D!==!1&&Ae.set(f,{force3D:!0}),L.spacer=U=Ie.spacer,Te=mi(f),Re=Te[p+P.os2],Z=Ae.getProperty(f),Y=Ae.quickSetter(f,P.a,tn),Zu(f,U,Te),b=Bl(f)),J){_t=us(J)?wm(J,Am):Am,X=Ol("scroller-start",l,D,P,_t,0),N=Ol("scroller-end",l,D,P,_t,0,X),K=X["offset"+P.op.d2];var mt=zn(Vr(D,"content")||D);Ze=this.markerStart=Ol("start",l,mt,P,_t,K,0,w),Be=this.markerEnd=Ol("end",l,mt,P,_t,K,0,w),w&&(Se=Ae.quickSetter([Ze,Be],P.a,tn)),!H&&!(Yi.length&&Vr(D,"fixedMarkers")===!0)&&(HE(V?xt:D),Ae.set([X,N],{force3D:!0}),ne=Ae.quickSetter(X,P.a,tn),Me=Ae.quickSetter(N,P.a,tn))}if(w){var ve=w.vars.onUpdate,Pe=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){L.update(0,0,1),ve&&ve.apply(w,Pe||[])})}if(L.previous=function(){return lt[lt.indexOf(L)-1]},L.next=function(){return lt[lt.indexOf(L)+1]},L.revert=function(me,qe){if(!qe)return L.kill(!0);var Oe=me!==!1||!L.enabled,Ye=bn;Oe!==L.isReverted&&(Oe&&(te=Math.max(ee(),L.scroll.rec||0),j=L.progress,$=i&&i.progress()),Ze&&[Ze,Be,X,N].forEach(function(Gt){return Gt.style.display=Oe?"none":"block"}),Oe&&(bn=L,L.update(Oe)),f&&(!E||!L.isActive)&&(Oe?YE(f,U,xe):Zu(f,U,mi(f),ye)),Oe||L.update(Oe),bn=Ye,L.isReverted=Oe)},L.refresh=function(me,qe,Oe,Ye){if(!((bn||!L.enabled)&&!qe)){if(f&&me&&Si){un(r,"scrollEnd",e0);return}!Un&&le&&le(L),bn=L,re.tween&&!Oe&&(re.tween.kill(),re.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ee){return Ee.vars.immediateRender&&Ee.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Gt=ce(),je=ke(),It=w?w.duration():Xi(D,P),Jt=Ve<=.01||!Ve,Nt=0,yt=Ye||0,vt=us(Oe)?Oe.end:n.end,vn=n.endTrigger||h,Dt=us(Oe)?Oe.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),xn=L.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,L),hi=h&&Math.max(0,lt.indexOf(L))||0,Qt=hi,en,an,Ji,Ns,A,B,q,W,G,ue,pe,he,we;for(J&&us(Oe)&&(he=Ae.getProperty(X,P.p),we=Ae.getProperty(N,P.p));Qt-- >0;)B=lt[Qt],B.end||B.refresh(0,1)||(bn=L),q=B.pin,q&&(q===h||q===f||q===xn)&&!B.isReverted&&(ue||(ue=[]),ue.unshift(B),B.revert(!0,!0)),B!==lt[Qt]&&(hi--,Qt--);for(wn(Dt)&&(Dt=Dt(L)),Dt=Sm(Dt,"start",L),be=Dm(Dt,h,Gt,P,ee(),Ze,X,L,je,Q,H,It,w,L._startClamp&&"_startClamp")||(f?-.001:0),wn(vt)&&(vt=vt(L)),ei(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(ei(Dt)?Dt.split(" ")[0]:"")+vt:(Nt=Ql(vt.substr(2),Gt),vt=ei(Dt)?Dt:(w?Ae.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,be):be)+Nt,vn=h)),vt=Sm(vt,"end",L),ze=Math.max(be,Dm(vt||(vn?"100% 0":It),vn,Gt,P,ee()+Nt,Be,N,L,je,Q,H,It,w,L._endClamp&&"_endClamp"))||-.001,Nt=0,Qt=hi;Qt--;)B=lt[Qt]||{},q=B.pin,q&&B.start-B._pinPush<=be&&!w&&B.end>0&&(en=B.end-(L._startClamp?Math.max(0,B.start):B.start),(q===h&&B.start-B._pinPush<be||q===xn)&&isNaN(Dt)&&(Nt+=en*(1-B.progress)),q===f&&(yt+=en));if(be+=Nt,ze+=Nt,L._startClamp&&(L._startClamp+=Nt),L._endClamp&&!Un&&(L._endClamp=ze||-.001,ze=Math.min(ze,Xi(D,P))),Ve=ze-be||(be-=.01)&&.001,Jt&&(j=Ae.utils.clamp(0,1,Ae.utils.normalize(be,ze,te))),L._pinPush=yt,Ze&&Nt&&(en={},en[P.a]="+="+Nt,xn&&(en[P.p]="-="+ee()),Ae.set([Ze,Be],en)),f&&!(vf&&L.end>=Xi(D,P)))en=mi(f),Ns=P===nn,Ji=ee(),_e=parseFloat(Z(P.a))+yt,!It&&ze>1&&(pe=(V?Mt.scrollingElement||ni:D).style,pe={style:pe,value:pe["overflow"+P.a.toUpperCase()]},V&&mi(xt)["overflow"+P.a.toUpperCase()]!=="scroll"&&(pe.style["overflow"+P.a.toUpperCase()]="scroll")),Zu(f,U,en),b=Bl(f),an=cr(f,!0),W=H&&qr(D,Ns?Fn:nn)(),p?(ye=[p+P.os2,Ve+yt+tn],ye.t=U,Qt=p===jt?Lc(f,P)+Ve+yt:0,Qt&&(ye.push(P.d,Qt+tn),U.style.flexBasis!=="auto"&&(U.style.flexBasis=Qt+tn)),_a(ye),xn&&lt.forEach(function(Ee){Ee.pin===xn&&Ee.vars.pinSpacing!==!1&&(Ee._subPinOffset=!0)}),H&&ee(te)):(Qt=Lc(f,P),Qt&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=Qt+tn)),H&&(A={top:an.top+(Ns?Ji-be:W)+tn,left:an.left+(Ns?W:Ji-be)+tn,boxSizing:"border-box",position:"fixed"},A[bs]=A["max"+Pa]=Math.ceil(an.width)+tn,A[Ts]=A["max"+wd]=Math.ceil(an.height)+tn,A[pi]=A[pi+bo]=A[pi+Mo]=A[pi+To]=A[pi+So]="0",A[jt]=en[jt],A[jt+bo]=en[jt+bo],A[jt+Mo]=en[jt+Mo],A[jt+To]=en[jt+To],A[jt+So]=en[jt+So],C=jE(xe,A,E),Un&&ee(0)),i?(G=i._initted,Yu(1),i.render(i.duration(),!0,!0),ae=Z(P.a)-_e+Ve+yt,se=Math.abs(Ve-ae)>1,H&&se&&C.splice(C.length-2,2),i.render(0,!0,!0),G||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yu(0)):ae=Ve,pe&&(pe.value?pe.style["overflow"+P.a.toUpperCase()]=pe.value:pe.style.removeProperty("overflow-"+P.a));else if(h&&ee()&&!w)for(an=h.parentNode;an&&an!==xt;)an._pinOffset&&(be-=an._pinOffset,ze-=an._pinOffset),an=an.parentNode;ue&&ue.forEach(function(Ee){return Ee.revert(!1,!0)}),L.start=be,L.end=ze,Ce=ft=Un?te:ee(),!w&&!Un&&(Ce<te&&ee(te),L.scroll.rec=0),L.revert(!1,!0),$e=Tn(),de&&(We=-1,de.restart(!0)),bn=0,i&&R&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),(Jt||j!==L.progress||w||_||i&&!i._initted)&&(i&&!R&&(i._initted||j||i.vars.immediateRender!==!1)&&i.totalProgress(w&&be<-.001&&!j?Ae.utils.normalize(be,ze,0):j,!0),L.progress=Jt||(Ce-be)/Ve===j?0:j),f&&p&&(U._pinOffset=Math.round(L.progress*ae)),I&&I.invalidate(),isNaN(he)||(he-=Ae.getProperty(X,P.p),we-=Ae.getProperty(N,P.p),kl(X,P,he),kl(Ze,P,he-(Ye||0)),kl(N,P,we),kl(Be,P,we-(Ye||0))),Jt&&!Un&&L.update(),u&&!Un&&!at&&(at=!0,u(L),at=!1)}},L.getVelocity=function(){return(ee()-ft)/(Tn()-no)*1e3||0},L.endAnimation=function(){Za(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?R||Za(i,L.direction<0,1):Za(i,i.reversed()))},L.labelToScroll=function(me){return i&&i.labels&&(be||L.refresh()||be)+i.labels[me]/i.duration()*Ve||0},L.getTrailing=function(me){var qe=lt.indexOf(L),Oe=L.direction>0?lt.slice(0,qe).reverse():lt.slice(qe+1);return(ei(me)?Oe.filter(function(Ye){return Ye.vars.preventOverlaps===me}):Oe).filter(function(Ye){return L.direction>0?Ye.end<=be:Ye.start>=ze})},L.update=function(me,qe,Oe){if(!(w&&!Oe&&!me)){var Ye=Un===!0?te:L.scroll(),Gt=me?0:(Ye-be)/Ve,je=Gt<0?0:Gt>1?1:Gt||0,It=L.progress,Jt,Nt,yt,vt,vn,Dt,xn,hi;if(qe&&(ft=Ce,Ce=w?ee():Ye,y&&(Xe=fe,fe=i&&!R?i.totalProgress():je)),g&&f&&!bn&&!Ll&&Si&&(!je&&be<Ye+(Ye-ft)/(Tn()-no)*g?je=1e-4:je===1&&ze>Ye+(Ye-ft)/(Tn()-no)*g&&(je=.9999)),je!==It&&L.enabled){if(Jt=L.isActive=!!je&&je<1,Nt=!!It&&It<1,Dt=Jt!==Nt,vn=Dt||!!je!=!!It,L.direction=je>It?1:-1,L.progress=je,vn&&!bn&&(yt=je&&!It?0:je===1?1:It===1?2:3,R&&(vt=!Dt&&F[yt+1]!=="none"&&F[yt+1]||F[yt],hi=i&&(vt==="complete"||vt==="reset"||vt in i))),S&&(Dt||hi)&&(hi||d||!i)&&(wn(S)?S(L):L.getTrailing(S).forEach(function(Ji){return Ji.endAnimation()})),R||(I&&!bn&&!Ll?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",je,i._tTime/i._tDur):(I.vars.totalProgress=je,I.invalidate().restart())):i&&i.totalProgress(je,!!(bn&&($e||me)))),f){if(me&&p&&(U.style[p+P.os2]=Re),!H)Y(ro(_e+ae*je));else if(vn){if(xn=!me&&je>It&&ze+1>Ye&&Ye+1>=Xi(D,P),E)if(!me&&(Jt||xn)){var Qt=cr(f,!0),en=Ye-be;Lm(f,xt,Qt.top+(P===nn?en:0)+tn,Qt.left+(P===nn?0:en)+tn)}else Lm(f,U);_a(Jt||xn?C:b),se&&je<1&&Jt||Y(_e+(je===1&&!xn?ae:0))}}y&&!re.tween&&!bn&&!Ll&&de.restart(!0),o&&(Dt||M&&je&&(je<1||!$u))&&Ho(o.targets).forEach(function(Ji){return Ji.classList[Jt||M?"add":"remove"](o.className)}),a&&!R&&!me&&a(L),vn&&!bn?(R&&(hi&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),a&&a(L)),(Dt||!$u)&&(c&&Dt&&ta(L,c),z[yt]&&ta(L,z[yt]),M&&(je===1?L.kill(!1,1):z[yt]=0),Dt||(yt=je===1?1:3,z[yt]&&ta(L,z[yt]))),x&&!Jt&&Math.abs(L.getVelocity())>(so(x)?x:2500)&&(Za(L.callbackAnimation),I?I.progress(1):Za(i,vt==="reverse"?1:!je,1))):R&&a&&!bn&&a(L)}if(Me){var an=w?Ye/w.duration()*(w._caScrollDist||0):Ye;ne(an+(X._isFlipped?1:0)),Me(an)}Se&&Se(-Ye/w.duration()*(w._caScrollDist||0))}},L.enable=function(me,qe){L.enabled||(L.enabled=!0,un(D,"resize",ao),V||un(D,"scroll",ia),le&&un(r,"refreshInit",le),me!==!1&&(L.progress=j=0,Ce=ft=We=ee()),qe!==!1&&L.refresh())},L.getTween=function(me){return me&&re?re.tween:I},L.setPositions=function(me,qe,Oe,Ye){if(w){var Gt=w.scrollTrigger,je=w.duration(),It=Gt.end-Gt.start;me=Gt.start+It*me/je,qe=Gt.start+It*qe/je}L.refresh(!1,!1,{start:bm(me,Oe&&!!L._startClamp),end:bm(qe,Oe&&!!L._endClamp)},Ye),L.update()},L.adjustPinSpacing=function(me){if(ye&&me){var qe=ye.indexOf(P.d)+1;ye[qe]=parseFloat(ye[qe])+me+tn,ye[1]=parseFloat(ye[1])+me+tn,_a(ye)}},L.disable=function(me,qe){if(me!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,qe||I&&I.pause(),te=0,Ie&&(Ie.uncache=1),le&&cn(r,"refreshInit",le),de&&(de.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!V)){for(var Oe=lt.length;Oe--;)if(lt[Oe].scroller===D&&lt[Oe]!==L)return;cn(D,"resize",ao),V||cn(D,"scroll",ia)}},L.kill=function(me,qe){L.disable(me,qe),I&&!qe&&I.kill(),l&&delete xf[l];var Oe=lt.indexOf(L);Oe>=0&&lt.splice(Oe,1),Oe===Nn&&tc>0&&Nn--,Oe=0,lt.forEach(function(Ye){return Ye.scroller===L.scroller&&(Oe=1)}),Oe||Un||(L.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),qe||i.kill()),Ze&&[Ze,Be,X,N].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),Eo===L&&(Eo=0),f&&(Ie&&(Ie.uncache=1),Oe=0,lt.forEach(function(Ye){return Ye.pin===f&&Oe++}),Oe||(Ie.spacer=0)),n.onKill&&n.onKill(L)},lt.push(L),L.enable(!1,!1),Fe&&Fe(L),i&&i.add&&!Ve){var et=L.update;L.update=function(){L.update=et,ut.cache++,be||ze||L.refresh()},Ae.delayedCall(.01,L.update),Ve=.01,be=ze=0}else L.refresh();f&&qE()},r.register=function(n){return ra||(Ae=n||$_(),Y_()&&window.document&&r.enable(),ra=io),ra},r.defaults=function(n){if(n)for(var i in n)Fl[i]=n[i];return Fl},r.disable=function(n,i){io=0,lt.forEach(function(a){return a[i?"kill":"disable"](n)}),cn(ct,"wheel",ia),cn(Mt,"scroll",ia),clearInterval(Dl),cn(Mt,"touchcancel",zi),cn(xt,"touchstart",zi),Nl(cn,Mt,"pointerdown,touchstart,mousedown",Tm),Nl(cn,Mt,"pointerup,touchend,mouseup",Em),Dc.kill(),Il(cn);for(var s=0;s<ut.length;s+=3)Ul(cn,ut[s],ut[s+1]),Ul(cn,ut[s],ut[s+2])},r.enable=function(){if(ct=window,Mt=document,ni=Mt.documentElement,xt=Mt.body,Ae){if(Ho=Ae.utils.toArray,xo=Ae.utils.clamp,_f=Ae.core.context||zi,Yu=Ae.core.suppressOverwrites||zi,Sd=ct.history.scrollRestoration||"auto",yf=ct.pageYOffset||0,Ae.core.globals("ScrollTrigger",r),xt){io=1,ga=document.createElement("div"),ga.style.height="100vh",ga.style.position="absolute",r0(),kE(),Yt.register(Ae),r.isTouch=Yt.isTouch,Dr=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),gf=Yt.isTouch===1,un(ct,"wheel",ia),Md=[ct,Mt,ni,xt],Ae.matchMedia?(r.matchMedia=function(u){var d=Ae.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Ae.addEventListener("matchMediaInit",function(){n0(),Cd()}),Ae.addEventListener("matchMediaRevert",function(){return t0()}),Ae.addEventListener("matchMedia",function(){gs(0,1),Ds("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return Ku(),Ku})):console.warn("Requires GSAP 3.11.0 or later"),Ku(),un(Mt,"scroll",ia);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,a=Ae.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=cr(xt),nn.m=Math.round(o.top+nn.sc())||0,Fn.m=Math.round(o.left+Fn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),Dl=setInterval(Cm,250),Ae.delayedCall(.5,function(){return Ll=0}),un(Mt,"touchcancel",zi),un(xt,"touchstart",zi),Nl(un,Mt,"pointerdown,touchstart,mousedown",Tm),Nl(un,Mt,"pointerup,touchend,mouseup",Em),mf=Ae.utils.checkPrefix("transform"),nc.push(mf),ra=Tn(),Dc=Ae.delayedCall(.2,gs).pause(),sa=[Mt,"visibilitychange",function(){var u=ct.innerWidth,d=ct.innerHeight;Mt.hidden?(ym=u,Mm=d):(ym!==u||Mm!==d)&&ao()},Mt,"DOMContentLoaded",gs,ct,"load",gs,ct,"resize",ao],Il(un),lt.forEach(function(u){return u.enable(0,1)}),l=0;l<ut.length;l+=3)Ul(cn,ut[l],ut[l+1]),Ul(cn,ut[l],ut[l+2])}else if(Mt){var c=function u(){r.enable(),Mt.removeEventListener("DOMContentLoaded",u)};Mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&($u=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Dl)||(Dl=i)&&setInterval(Cm,i),"ignoreMobileResize"in n&&(gf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Il(cn)||Il(un,n.autoRefreshEvents||"none"),W_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=zn(n),a=ut.indexOf(s),o=Rs(s);~a&&ut.splice(a,o?6:2),i&&(o?Yi.unshift(ct,i,xt,i,ni,i):Yi.unshift(s,i))},r.clearMatchMedia=function(n){lt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ei(n)?zn(n):n).getBoundingClientRect(),o=a[s?bs:Ts]*i||0;return s?a.right-o>0&&a.left+o<ct.innerWidth:a.bottom-o>0&&a.top+o<ct.innerHeight},r.positionInViewport=function(n,i,s){ei(n)&&(n=zn(n));var a=n.getBoundingClientRect(),o=a[s?bs:Ts],l=i==null?o/2:i in Ic?Ic[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ct.innerWidth:(a.top+l)/ct.innerHeight},r.killAll=function(n){if(lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ps.killAll||[];Ps={},i.forEach(function(s){return s()})}},r})();Qe.version="3.15.0";Qe.saveStyles=function(r){return r?Ho(r).forEach(function(e){if(e&&e.style){var t=Qn.indexOf(e);t>=0&&Qn.splice(t,5),Qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),_f())}}):Qn};Qe.revert=function(r,e){return Cd(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?ao(!0):(ra||Qe.register())&&gs(!0)};Qe.update=function(r){return++ut.cache&&gr(r===!0?2:0)};Qe.clearScrollMemory=i0;Qe.maxScroll=function(r,e){return Xi(r,e?Fn:nn)};Qe.getScrollFunc=function(r,e){return qr(zn(r),e?Fn:nn)};Qe.getById=function(r){return xf[r]};Qe.getAll=function(){return lt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Si};Qe.snapDirectional=Ad;Qe.addEventListener=function(r,e){var t=Ps[r]||(Ps[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Ps[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Ae.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),h.push(p),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&wn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return wn(s)&&(s=s(),un(Qe,"refresh",function(){return s=e.batchMax()})),Ho(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Qe.create(c))}),t};var Nm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ju=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===ni&&r(xt,t)},zl={auto:1,scroll:1},ZE=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ae.core.getCache(s),o=Tn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(zl[(l=mi(s)).overflowY]||zl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Rs(s)&&(zl[(l=mi(s)).overflowY]||zl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},a0=function(e,t,n,i){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ZE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(Mt,Yt.eventTypes[0],Fm,!1,!0)},onDisable:function(){return cn(Mt,Yt.eventTypes[0],Fm,!0)}})},JE=/(input|label|select|textarea)/i,Um,Fm=function(e){var t=JE.test(e.target.tagName);(t||Um)&&(e._gsapAllow=!0,Um=t)},QE=function(e){us(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=zn(e.target)||ni,u=Ae.core.globals().ScrollSmoother,d=u&&u.get(),h=Dr&&(e.content&&zn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=qr(c,nn),p=qr(c,Fn),_=1,g=(Yt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,m=0,v=wn(i)?function(){return i(o)}:function(){return i||2.8},M,y,E=a0(c,e.type,!0,s),T=function(){return y=!1},w=zi,x=zi,S=function(){l=Xi(c,nn),x=xo(Dr?1:0,l),n&&(w=xo(0,Xi(c,Fn))),M=Es},P=function(){h._gsap.y=ro(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},R=function(){if(y){requestAnimationFrame(T);var J=ro(o.deltaY/2),Q=x(f.v-J);if(h&&Q!==f.v+f.offset){f.offset=Q-f.v;var L=ro((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",f.cacheID=ut.cache,gr()}return!0}f.offset&&P(),y=!0},D,k,V,H,z=function(){S(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return h&&Ae.set(h,{y:"+=0"}),e.ignoreCheck=function(F){return Dr&&F.type==="touchmove"&&R()||_>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){y=!1;var F=_;_=ro((ct.visualViewport&&ct.visualViewport.scale||1)/g),D.pause(),F!==_&&Ju(c,_>1.01?!0:n?!1:"x"),k=p(),V=f(),S(),M=Es},e.onRelease=e.onGestureStart=function(F,J){if(f.offset&&P(),!J)H.restart(!0);else{ut.cache++;var Q=v(),L,le;n&&(L=p(),le=L+Q*.05*-F.velocityX/.227,Q*=Nm(p,L,le,Xi(c,Fn)),D.vars.scrollX=w(le)),L=f(),le=L+Q*.05*-F.velocityY/.227,Q*=Nm(f,L,le,Xi(c,nn)),D.vars.scrollY=x(le),D.invalidate().duration(Q).play(.01),(Dr&&D.vars.scrollY>=l||L>=l-1)&&Ae.to({},{onUpdate:z,duration:Q})}a&&a(F)},e.onWheel=function(){D._ts&&D.pause(),Tn()-m>1e3&&(M=0,m=Tn())},e.onChange=function(F,J,Q,L,le){if(Es!==M&&S(),J&&n&&p(w(L[2]===J?k+(F.startX-F.x):p()+J-L[1])),Q){f.offset&&P();var ce=le[2]===Q,ke=ce?V+F.startY-F.y:f()+Q-le[1],We=x(ke);ce&&ke!==We&&(V+=We-ke),f(We)}(Q||J)&&gr()},e.onEnable=function(){Ju(c,n?!1:"x"),Qe.addEventListener("refresh",z),un(ct,"resize",z),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),E.enable()},e.onDisable=function(){Ju(c,!0),cn(ct,"resize",z),Qe.removeEventListener("refresh",z),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Yt(e),o.iOS=Dr,Dr&&!f()&&f(1),Dr&&Ae.ticker.add(zi),H=o._dc,D=Ae.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:s0(f,f(),function(){return D.pause()})},onUpdate:gr,onComplete:H.vars.onComplete}),o};Qe.sort=function(r){if(wn(r))return lt.sort(r);var e=ct.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),lt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Yt(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return In;if(r===!0&&In)return In.enable();if(r===!1){In&&In.kill(),In=r;return}var e=r instanceof Yt?r:QE(r);return In&&In.target===e.target&&In.kill(),Rs(e.target)&&(In=e),e};Qe.core={_getVelocityProp:pf,_inputObserver:a0,_scrollers:ut,_proxies:Yi,bridge:{ss:function(){Si||Ds("scrollStart"),Si=Tn()},ref:function(){return bn}}};$_()&&Ae.registerPlugin(Qe);var Om="1.3.23";function o0(r,e,t){return Math.max(r,Math.min(e,t))}function ew(r,e,t){return(1-t)*r+t*e}function tw(r,e,t,n){return ew(r,e,1-Math.exp(-t*n))}function nw(r,e){return(r%e+e)%e}var iw=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=o0(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=tw(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function rw(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var sw=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=rw(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},l0=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const aw=100/6,Pr={passive:!1};function Bm(r,e){return r===1?aw:r===2?e:1}var ow=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new l0;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Pr),this.element.addEventListener("touchstart",this.onTouchStart,Pr),this.element.addEventListener("touchmove",this.onTouchMove,Pr),this.element.addEventListener("touchend",this.onTouchEnd,Pr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Pr),this.element.removeEventListener("touchstart",this.onTouchStart,Pr),this.element.removeEventListener("touchmove",this.onTouchMove,Pr),this.element.removeEventListener("touchend",this.onTouchEnd,Pr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Bm(n,this.window.width),s=Bm(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const km=r=>Math.min(1,1.001-2**(-10*r));var lw=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new iw;emitter=new l0;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:v=!0,autoRaf:M=!1,anchors:y=!1,autoToggle:E=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:x=w,stopInertiaOnNavigate:S=!1}={}){window.lenisVersion=Om,window.lenis||(window.lenis={}),window.lenis.version=Om,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=km:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:v,autoRaf:M,anchors:y,autoToggle:E,allowNestedScroll:T,naiveDimensions:x,stopInertiaOnNavigate:S},this.dimensions=new sw(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new ow(t,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,f=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let p=null;if(typeof h=="string"?(p=document.querySelector(h),p||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&h?.nodeType&&(p=h),p){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}const _=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),v=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(M)?0:M)}}if(typeof h=="number"){if(h+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const p=h-this.animatedScroll;p>this.limit/2?h-=this.limit:p<-this.limit/2&&(h+=this.limit)}}else h=o0(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=km:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,d,h,f,p;if(n-(i.time??0)>2e3){i.time=Date.now();const T=window.getComputedStyle(r);if(i.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),a=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),u=["auto"].includes(T.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,o=d>f,l=h>p,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,d=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let g,m,v,M,y,E;if(_==="horizontal")g=Math.round(r.scrollLeft),m=d-f,v=e,M=s,y=o,E=c;else if(_==="vertical")g=Math.round(r.scrollTop),m=h-p,v=t,M=a,y=l,E=u;else return!1;return!E&&(g>=m||g<=0)?!0:(v>0?g<m:g>0)&&M&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?nw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const Wo=matchMedia("(prefers-reduced-motion: reduce)").matches;let as=null;dt.registerPlugin(Qe);function cw(){Wo||(as=new lw({lerp:.085,smoothWheel:!0}),as.on("scroll",Qe.update),dt.ticker.add(n=>as.raf(n*1e3)),dt.ticker.lagSmoothing(0)),document.addEventListener("click",n=>{const i=n.target.closest('a[href^="#"]'),s=i?.getAttribute("href");if(!i||!s||s==="#")return;const a=s==="#top"?0:document.querySelector(s);a!==null&&(n.preventDefault(),as?as.scrollTo(a,{offset:s==="#top"?0:-40,duration:1.6}):a===0?scrollTo({top:0,behavior:"smooth"}):a.scrollIntoView({behavior:"smooth"}))});let r=!1;new MutationObserver(()=>{const n=document.documentElement.classList.contains("is-locked");n!==r&&(r=n,n?as?.stop():as?.start())}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const e=document.querySelector(".nav"),t=()=>e.classList.toggle("is-scrolled",scrollY>40);addEventListener("scroll",t,{passive:!0}),t()}function uw(r){r.querySelectorAll(".line").forEach(e=>{const t=document.createElement("span");for(t.className="split-inner";e.firstChild;)t.appendChild(e.firstChild);e.classList.add("split-mask"),e.appendChild(t)})}function hw(r){const e=[],t=[...r.childNodes];r.textContent="";for(const n of t)if(n.nodeType===Node.TEXT_NODE)for(const i of(n.textContent??"").split(/(\s+)/)){if(!i)continue;if(/^\s+$/.test(i)){r.appendChild(document.createTextNode(" "));continue}const s=document.createElement("span");s.className="w",s.textContent=i,r.appendChild(s),e.push(s)}else n instanceof HTMLElement&&(n.classList.add("w"),r.appendChild(n),e.push(n));return e}function fw(){document.querySelectorAll("main [data-theme], footer[data-theme]").forEach(r=>{Qe.create({trigger:r,start:"top 50%",end:"bottom 50%",onToggle:e=>{e.isActive&&(document.body.dataset.theme=r.dataset.theme)}})})}function dw(){const r=document.querySelector(".ritual"),e=[...r.querySelectorAll(".ritual__step")],t=r.querySelector(".ritual__deg"),n=r.querySelector(".ritual__progress"),i=r.querySelector(".ritual__pin"),s=(c,u,d)=>Math.min(1,Math.max(0,(c-u)/(d-u))),a=c=>c*c*(3-2*c);let o=-1;const l=c=>{const u=1-a(s(c,.02,.14)),d=Math.max(u,a(s(c,.16,.38))),h=Math.max(u,a(s(c,.42,.64))),f=Math.max(u,a(s(c,.7,.94)));st.stage?.setCook({marinade:d,coat:h,fry:f}),c>.02&&c<.14&&st.stage?.kick(.04);const p=c<.4?0:c<.68?1:2;p!==o&&(e.forEach((g,m)=>{g.classList.toggle("is-active",m===p),g.classList.toggle("is-past",m<p)}),o=p);const _=c<.14?Math.round(180*u):c<.4?4:c<.68?22:Math.round(22+158*s(c,.7,.94));t.textContent=String(_),i.style.setProperty("--heat",(f*(c>=.68||c<.14?1:0)).toFixed(3)),n.style.setProperty("--p",c.toFixed(3))};Qe.create({trigger:r,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:c=>l(c.progress),onLeave:()=>l(1),onLeaveBack:()=>l(0)}),l(0)}function pw(){fw(),dw(),uw(document.querySelector(".hero__title"));const r=hw(document.querySelector(".manifesto__text"));Wo||(dt.to(r,{opacity:1,ease:"none",stagger:.08,scrollTrigger:{trigger:".manifesto__text",start:"top 78%",end:"bottom 42%",scrub:!0}}),dt.to(".hero__word span",{yPercent:22,scale:.94,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),dt.to(".hero__content",{y:-90,opacity:0,ease:"none",scrollTrigger:{trigger:".hero",start:"30% top",end:"bottom top",scrub:!0}}),dt.fromTo(".band--red",{yPercent:-50,rotate:-7},{yPercent:-50,rotate:-2.5,ease:"none",scrollTrigger:{trigger:".bands",start:"top bottom",end:"bottom top",scrub:!0}}),dt.fromTo(".band--gold",{yPercent:-50,rotate:6},{yPercent:-50,rotate:2,ease:"none",scrollTrigger:{trigger:".bands",start:"top bottom",end:"bottom top",scrub:!0}}),dt.from(".menu__title",{yPercent:40,opacity:0,duration:1.4,ease:"expo.out",scrollTrigger:{trigger:".menu__head",start:"top 80%"}}),dt.from(".zones__title",{yPercent:30,opacity:0,duration:1.4,ease:"expo.out",scrollTrigger:{trigger:".zones",start:"top 70%"}}),dt.from(".footer__word",{yPercent:45,ease:"none",scrollTrigger:{trigger:".footer__word",start:"top bottom",end:"bottom bottom",scrub:!0}}),dt.from(".footer__q",{yPercent:40,opacity:0,duration:1.4,ease:"expo.out",scrollTrigger:{trigger:".footer",start:"top 70%"}})),document.querySelectorAll("[data-count]").forEach(e=>{const t=Number(e.dataset.count),n=e.dataset.suffix??"",i={v:0};Qe.create({trigger:e,start:"top 88%",once:!0,onEnter:()=>dt.to(i,{v:t,duration:Wo?0:2.2,ease:"power3.out",onUpdate:()=>{e.textContent=`${Math.round(i.v)}${n}`}})})})}function mw(){const r=dt.timeline({defaults:{ease:"expo.out"}});return Wo||r.from(".hero__word span",{yPercent:40,opacity:0,duration:2},0).from(".hero__title .split-inner",{yPercent:110,duration:1.5,stagger:.12},.2).from(".hero__eyebrow, .hero__aside > *, .hero__lede, .hero__ctas > *",{y:30,opacity:0,duration:1.3,stagger:.07},.5).from(".hero__meta > *",{y:20,opacity:0,duration:1.1,stagger:.06},.8).from(".nav > *",{y:-24,opacity:0,duration:1.1,stagger:.06},.35),r}let zm=0;function Vm(){clearTimeout(zm),zm=window.setTimeout(()=>Qe.refresh(),120)}function gw(){if(matchMedia("(hover: none), (pointer: coarse)").matches)return;const r=document.querySelector(".cursor"),e=r.querySelector(".cursor__dot"),t=r.querySelector(".cursor__ring"),n=r.querySelector(".cursor__label"),i={x:innerWidth/2,y:innerHeight/2},s={...i};let a=!1;addEventListener("pointermove",o=>{i.x=o.clientX,i.y=o.clientY,a||(a=!0,s.x=i.x,s.y=i.y,r.classList.add("is-active"));const l=o.target,c=l.closest("[data-cursor-label]"),u=l.closest('a, button, [data-cursor="hover"], label, select');r.classList.toggle("is-label",!!c),r.classList.toggle("is-hover",!c&&!!u),c&&(n.textContent=c.dataset.cursorLabel||"")},{passive:!0}),document.addEventListener("pointerleave",()=>{a=!1,dt.to([e,t],{opacity:0,duration:.3})}),document.addEventListener("pointerenter",()=>dt.to([e,t],{opacity:1,duration:.3})),dt.ticker.add(()=>{s.x+=(i.x-s.x)*.18,s.y+=(i.y-s.y)*.18,e.style.transform=`translate3d(${i.x}px, ${i.y}px, 0)`,t.style.transform=`translate3d(${s.x}px, ${s.y}px, 0)`})}function _w(r=document){matchMedia("(hover: none), (pointer: coarse)").matches||r.querySelectorAll("[data-magnetic]").forEach(e=>{if(e.dataset.magneticBound)return;e.dataset.magneticBound="1";const t=e.querySelector("span");e.addEventListener("pointermove",n=>{const i=e.getBoundingClientRect(),s=n.clientX-(i.left+i.width/2),a=n.clientY-(i.top+i.height/2);dt.to(e,{x:s*.22,y:a*.32,duration:.6,ease:"power3.out"}),t&&dt.to(t,{x:s*.1,y:a*.12,duration:.6,ease:"power3.out"})}),e.addEventListener("pointerleave",()=>{dt.to(e,{x:0,y:0,duration:1,ease:"elastic.out(1, 0.4)"}),t&&dt.to(t,{x:0,y:0,duration:1,ease:"elastic.out(1, 0.4)"})})})}const vw=()=>document.querySelector(".toast");let Hm=0;function jc(r,e=2600){const t=vw();t.textContent=r,t.classList.add("is-on"),clearTimeout(Hm),Hm=window.setTimeout(()=>t.classList.remove("is-on"),e)}const Da=()=>document.querySelector("#sheet");let ws=null,va=1,c0=null;function u0(){return[...Da().querySelectorAll(".sheet__groups input:checked")].map(r=>Number(r.value))}function xw(){if(!ws)return 0;const r=new Set(u0()),e=ws.variants.flatMap(t=>t.options).filter(t=>r.has(t.id)).reduce((t,n)=>t+n.delta,0);return Math.max(0,ws.price+e)}function Sf(){Da().querySelector(".qty__n").textContent=String(va),Da().querySelector(".sheet__price").textContent=hr(xw()*va)}function yw(r){ws=r,va=1,c0=document.activeElement;const e=Da(),t=st.shop.snapshot?.categories.find(n=>n.id===r.categoryId);e.querySelector(".sheet__cat").textContent=t?.name??"",e.querySelector(".sheet__title").textContent=r.name,e.querySelector(".sheet__desc").textContent=r.description??"",e.querySelector(".sheet__groups").innerHTML=r.variants.map(n=>`
    <fieldset class="opt-group">
      <legend>${Zt(n.name)}<small>مطلوب</small></legend>
      <div class="pills">
        ${n.options.map((i,s)=>`
          <label class="pill">
            <input type="radio" name="g${n.id}" value="${i.id}" ${s===0?"checked":""} />
            <span>${Zt(i.name)}${i.delta?`<small>${i.delta>0?"+":"−"}${Ra(Math.abs(i.delta))}</small>`:""}</span>
          </label>`).join("")}
      </div>
    </fieldset>`).join(""),Sf(),e.hidden=!1,document.documentElement.classList.add("is-locked"),dt.fromTo(e.querySelector(".sheet__scrim"),{opacity:0},{opacity:1,duration:.4}),dt.fromTo(e.querySelector(".sheet__panel"),{y:60,opacity:0},{y:0,opacity:1,duration:.7,ease:"expo.out"}),e.querySelector(".sheet__add").focus({preventScroll:!0})}function Qu(){const r=Da();r.hidden||(dt.to(r.querySelector(".sheet__panel"),{y:40,opacity:0,duration:.3,ease:"power2.in"}),dt.to(r.querySelector(".sheet__scrim"),{opacity:0,duration:.3,onComplete:()=>{r.hidden=!0,document.documentElement.classList.remove("is-locked"),c0?.focus({preventScroll:!0})}}))}function Mw(){const r=Da();r.addEventListener("click",e=>{const t=e.target;t.closest("[data-close-sheet]")&&Qu();const n=t.closest("[data-qty]");n&&(va=Math.max(1,Math.min(50,va+Number(n.dataset.qty))),Sf())}),r.addEventListener("change",Sf),r.querySelector(".sheet__add").addEventListener("click",()=>{if(!ws)return;const e=document.querySelector(`.dish[data-id="${ws.id}"]`);h0(ws,u0(),va,e),Qu()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!r.hidden&&Qu()})}const rc=()=>document.querySelector(".menu__tabs"),sc=()=>document.querySelector(".menu__list"),Sw=()=>document.querySelector(".menu__anchor");let ac=null;function bw(r){const e=[...r.categories].sort((s,a)=>s.order-a.order),t=e.map(s=>({id:s.id,name:s.name,items:r.items.filter(a=>a.categoryId===s.id)})),n=new Set(e.map(s=>s.id)),i=r.items.filter(s=>!n.has(s.categoryId));return i.length&&t.push({id:-1,name:"أخرى",items:i}),t.filter(s=>s.items.length>0)}function Tw(r){const e=r.variants.reduce((n,i)=>n+Math.min(...i.options.map(s=>s.delta)),0);return{prefix:r.variants.some(n=>new Set(n.options.map(i=>i.delta)).size>1)?"من ":"",value:Math.max(0,r.price+e)}}function Ew(r,e){const t=Tw(r),n=r.variants.map(i=>i.options.map(s=>s.name).join(" / ")).join(" · ");return`
    <li class="dish" data-id="${r.id}" data-cursor-label="أضف" tabindex="0" role="button"
        aria-label="${Zt(r.name)} — ${Ra(t.value)} ${Zt(Rc())}">
      <span class="dish__idx">${String(e+1).padStart(2,"0")}</span>
      <div class="dish__body">
        <h3 class="dish__name">${Zt(r.name)}</h3>
        ${r.description?`<p class="dish__desc">${Zt(r.description)}</p>`:""}
        ${n?`<p class="dish__opts">${Zt(n)}</p>`:""}
      </div>
      <div class="dish__price"><small>${Zt(t.prefix)}</small><b>${Ra(t.value)}</b><small>${Zt(Rc())}</small></div>
      <span class="dish__add" aria-hidden="true">+</span>
    </li>`}function Gm(r,e,t){const n=r.find(s=>s.id===e)??r[0];if(!n)return;ac=n.id,rc().querySelectorAll(".tab").forEach(s=>s.setAttribute("aria-selected",String(Number(s.dataset.id)===n.id)));const i=sc();i.innerHTML=n.items.map(Ew).join(""),t&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&dt.fromTo(i.children,{y:40,opacity:0},{y:0,opacity:1,duration:.9,ease:"expo.out",stagger:.05}),document.querySelector(".menu__cat-name").textContent=n.name,document.querySelector(".menu__cat-n").textContent=`${String(n.items.length).padStart(2,"0")} ITEMS`,st.stage?.setAnchorModel(Sw(),mE(n.name))}function h0(r,e,t,n){st.cart.add(r.id,e,t),yd(1),st.stage?.kick(1),I_("added",r),jc(`اتضاف للسلة — ${r.name}`),n&&(n.classList.add("is-added"),setTimeout(()=>n.classList.remove("is-added"),700))}function Wm(r,e){r.variants.length?yw(r):h0(r,[],1,e)}function ww(){let r=[];const e=()=>{const n=st.shop.snapshot;if(!n){rc().innerHTML="",sc().innerHTML='<li class="dish"><div class="dish__body"><h3 class="dish__name">المنيو بيتحمّل…</h3></div></li>';return}r=bw(n),rc().innerHTML=r.map(s=>`
      <button class="tab" type="button" role="tab" data-id="${s.id}" aria-selected="false">
        ${Zt(s.name)}<small>${s.items.length}</small>
      </button>`).join("");const i=r.some(s=>s.id===ac)?ac:r[0]?.id;Gm(r,i,!1),document.querySelector(".menu__count").textContent=`${n.items.length} صنف — كل اللي في المطبخ، بأسعار الكاشير.`};Vo("shop",e),e(),rc().addEventListener("click",n=>{const i=n.target.closest(".tab");!i||Number(i.dataset.id)===ac||(NE(),Gm(r,Number(i.dataset.id),!0))});const t=n=>st.shop.snapshot?.items.find(i=>i.id===Number(n.dataset.id));sc().addEventListener("click",n=>{const i=n.target.closest(".dish[data-id]"),s=i&&t(i);i&&s&&Wm(s,i)}),sc().addEventListener("keydown",n=>{if(n.key!=="Enter"&&n.key!==" ")return;const i=n.target.closest(".dish[data-id]"),s=i&&t(i);i&&s&&(n.preventDefault(),Wm(s,i))})}const wo=new Set(["delivered","collected","rejected","cancelled","expired"]),dr=()=>document.querySelector("#track"),Rd=()=>document.querySelector(".track-pill"),Kc="crispo:active-order";let _s=null,Xm=0,oc=null;const Aw={delivery:[{status:"received",label:"وصل للمطعم"},{status:"preparing",label:"في المطبخ"},{status:"ready",label:"جاهز"},{status:"on_the_way",label:"مع الطيار"},{status:"delivered",label:"وصل"}],takeaway:[{status:"received",label:"وصل للمطعم"},{status:"preparing",label:"في المطبخ"},{status:"ready",label:"جاهز للاستلام"},{status:"collected",label:"اتستلم"}]};function Cw(r){const e=r.etaMinutes?`الوقت المتوقع حوالي ${r.etaMinutes} دقيقة.`:"",t=(Date.now()-Date.parse(r.createdAt))/6e4;switch(r.status){case"pending":return{title:"بنبعت طلبك للمطعم…",sub:"ثواني والكاشير هيشوفه على شاشته."};case"received":return t>8?{title:"الطلب مستني تأكيد",sub:"الكاشير لسه ما أكّدش — لو مستعجل كلّمنا."}:{title:"المطعم استلم طلبك",sub:"الكاشير بيراجعه دلوقتي."};case"preparing":return{title:"بيتقلي دلوقتي 🔥",sub:`${r.firstName}، طلبك في الزيت على ١٨٠°. ${e}`};case"ready":return r.type==="delivery"?{title:"جاهز ومستني الطيار",sub:"متغلّف وسخن، وطالع حالاً."}:{title:"جاهز — تعالى استلمه",sub:"قول رقم الطلب للكاشير."};case"on_the_way":return{title:"الطيار في الطريق 🛵",sub:`رايح ${r.areaName?`لـ ${r.areaName}`:"ليك"} دلوقتي.`};case"delivered":return{title:"وصل. بالهنا والشفا",sub:"شكراً إنك اخترت كريسبو."};case"collected":return{title:"استلمته. بالهنا والشفا",sub:"شكراً إنك اخترت كريسبو."};case"rejected":return{title:"اعتذرنا عن الطلب",sub:r.reason?`السبب: ${r.reason}`:"كلّمنا ونشوف نقدر نعمل إيه."};case"cancelled":return{title:"الطلب اتلغى",sub:r.reason??"لو ده مش متوقع كلّمنا."};case"expired":return{title:"المطعم ما ردّش",sub:"الطلب ما وصلش للكاشير في الوقت — كلّمنا على التليفون."}}}function f0(r){const e=dr(),t=r.status==="rejected"||r.status==="cancelled"||r.status==="expired";e.classList.toggle("is-bad",t),e.querySelector(".track__code").textContent=r.code;const n=Cw(r),i=e.querySelector(".track__title");i.textContent!==n.title&&(i.textContent=n.title,oc&&oc!==r.status&&(dt.fromTo(i,{y:30,opacity:0},{y:0,opacity:1,duration:.8,ease:"expo.out"}),yd(.5),st.stage?.kick(.6))),e.querySelector(".track__sub").textContent=n.sub;const s=Aw[r.type],a=new Set(r.timeline.map(d=>d.status)),o=s.findIndex(d=>d.status===r.status);e.querySelector(".track__steps").innerHTML=s.map((d,h)=>{const f=o>=0?h<o:a.has(d.status),p=h===o&&!wo.has(r.status),_=h===o&&wo.has(r.status);return`<li class="${f||_?"is-done":""} ${p?"is-now":""}">${Zt(d.label)}</li>`}).join(""),e.querySelector(".track__lines").innerHTML=r.lines.map(d=>`
    <li><span>${d.qty} × ${Zt(d.name)}${d.label?`<small>${Zt(d.label)}</small>`:""}</span><b>${hr(d.total)}</b></li>`).join(""),e.querySelector(".track__fee-row").hidden=r.type!=="delivery",e.querySelector(".track__fee").textContent=hr(r.quote.deliveryFee);const l=r.final?.total??r.quote.total;e.querySelector(".track__total").textContent=hr(l),e.querySelector(".track__invoice").textContent=r.final?.invoiceNumber?`فاتورة رقم ${r.final.invoiceNumber} · ${r.payment==="card"?"فيزا":"كاش"} عند الاستلام`:`السعر النهائي بيأكده الكاشير · ${r.payment==="card"?"فيزا":"كاش"} عند الاستلام`;const c=st.shop.snapshot?.business.phone?.replace(/[^\d+]/g,""),u=e.querySelector(".track__call");u.hidden=!c,c&&(u.href=`tel:${c}`),oc=r.status,wo.has(r.status)&&Ii.remove(Kc),d0(r)}function d0(r){const e=Rd(),t=!!r&&!wo.has(r.status)&&dr().hidden;e.hidden=!t,r&&(e.querySelector("b").textContent=r.code)}async function Xo(){if(_s){clearTimeout(Xm);try{const r=await LE(_s);if(f0(r),wo.has(r.status)&&(r.status!=="expired"||Date.now()-Date.parse(r.createdAt)>45*6e4))return}catch(r){if(r.status===404){Ii.remove(Kc),d0(null),dr().hidden||(dr().querySelector(".track__title").textContent="الطلب ده مش موجود",dr().querySelector(".track__sub").textContent="ممكن يكون قديم — الطلبات بتتمسح بعد أسبوعين.");return}}Xm=window.setTimeout(Xo,dr().hidden||document.hidden?15e3:4e3)}}function lc(r,e){_s=r,oc=null,Ii.set(Kc,r);const t=dr();t.hidden=!1,Rd().hidden=!0,document.documentElement.classList.add("is-locked"),_E(r),e?f0(e):(t.querySelector(".track__title").textContent="بنجيب حالة طلبك…",t.querySelector(".track__sub").textContent=""),dt.fromTo(t,{opacity:0},{opacity:1,duration:.5}),dt.fromTo(t.querySelector(".track__panel"),{y:50},{y:0,duration:1,ease:"expo.out"}),Xo()}function Vl(){const r=dr();dt.to(r,{opacity:0,duration:.35,onComplete:()=>{r.hidden=!0,document.documentElement.classList.remove("is-locked"),vE(),Xo()}})}function Rw(){const r=dr();r.querySelector(".track__close").addEventListener("click",Vl),r.querySelector(".track__again").addEventListener("click",()=>{Vl(),setTimeout(()=>document.querySelector("#menu")?.scrollIntoView({behavior:"smooth"}),400)}),Rd().addEventListener("click",()=>_s&&lc(_s)),document.addEventListener("keydown",t=>{t.key==="Escape"&&!r.hidden&&Vl()}),addEventListener("popstate",()=>{const t=Ac();t?lc(t):r.hidden||Vl()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&_s&&Xo()});const e=Ac();if(e)lc(e);else{const t=Ii.get(Kc,null);t&&(_s=t,Xo())}}function Pd(r){switch(r.reason){case"preview":return"ده عرض للمنيو — الطلب أونلاين مش متوصل بالمطعم دلوقتي";case"paused":return"المطبخ موقّف الطلبات أونلاين شوية — جرّب كمان شوية";case"closed":return"المطبخ مقفول دلوقتي — نشوفك في الوردية الجاية";case"not_configured":return"الطلب أونلاين قريب جداً";default:return"المطعم مش متصل دلوقتي — الطلب أونلاين متوقف مؤقتاً"}}function Pw(r){if(r.demo)return"تجريبي · مطبخ وهمي";if(r.open)return`المطبخ شغّال · ~${r.snapshot?.eta.delivery??40} د`;switch(r.reason){case"preview":return"معاينة";case"paused":return"الطلبات متوقفة مؤقتاً";case"closed":return"المطبخ مقفول";case"not_configured":return"قريباً";default:return"غير متصل"}}function Dw(){const r=e=>{const t=e.snapshot;CE(t?.business.currency);const n=document.querySelector(".status");n.dataset.status=e.open?"open":"closed",n.querySelector(".status__text").textContent=Pw(e),n.title=e.demo?"دي نسخة للتجربة: الطلبات بتتسجل في المتصفح ده بس ومش بتوصل للمطعم":e.open?"طلبك بيوصل لشاشة الكاشير على طول":Pd(e);const i=document.querySelector(".drawer__note");i&&e.demo&&(i.textContent="نسخة تجريبية: الطلب ده مش هيوصل للمطعم — المطبخ هنا وهمي وبيمشّي الطلب لوحده.");const s=document.querySelector(".track__code-label");s&&e.demo&&(s.textContent="طلب تجريبي رقم"),document.querySelector(".preview-note").hidden=!e.preview;const a=document.querySelector(".zones__list");a.innerHTML=(t?.areas??[]).map(c=>`
      <li><span>${Zt(c.name)}</span><b>${Ra(c.fee)}<small>${Zt(Rc())}</small></b></li>`).join(""),t?.takeaway!==!1&&a.insertAdjacentHTML("beforeend",`<li><span>استلام من الفرع</span><b>${Ra(0)}<small>${Zt(Rc())}</small></b></li>`),document.querySelector(".zones__eta").innerHTML=`${t?.eta.delivery??40}<small>دقيقة</small>`;const o=t?.business.phone?.trim(),l=document.querySelector(".footer__phone");l.textContent=o||"—",l.href=o?`tel:${o.replace(/[^\d+]/g,"")}`:"#",t?.business.address&&(document.querySelector(".footer__address").textContent=t.business.address)};Vo("shop",r),r(st.shop),document.querySelector(".footer__year").textContent=String(new Date().getFullYear())}const Ba=()=>document.querySelector("#drawer"),On=()=>Ba().querySelector(".checkout");let ds="cart",qm=p0(),Ao=!1;function p0(){return crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`}const m0="crispo:profile";function ka(){return On().elements.namedItem("type").value==="takeaway"?"takeaway":"delivery"}function Lw(){if(ka()!=="delivery")return 0;const r=Number(On().elements.namedItem("areaId").value);return st.shop.snapshot?.areas.find(e=>e.id===r)?.fee??0}function vs(){const r=Ba(),{lines:e,subtotal:t,dropped:n}=st.cart.priced(st.shop.snapshot);n&&jc("في صنف اتشال من المنيو — شيلناه من سلتك"),r.classList.toggle("drawer--empty",e.length===0&&ds==="cart"),r.querySelector(".cart").innerHTML=e.map(a=>`
    <li data-key="${Zt(a.key)}">
      <span class="cart__name">${Zt(a.item.name)}</span>
      ${a.label?`<span class="cart__label">${Zt(a.label)}</span>`:""}
      <div class="cart__row">
        <div class="qty qty--sm">
          <button type="button" data-step="-1" aria-label="أقل">−</button>
          <output class="qty__n">${a.qty}</output>
          <button type="button" data-step="1" aria-label="أكتر">+</button>
        </div>
        <button class="cart__remove" type="button" data-remove>شيل</button>
        <b class="cart__price">${hr(a.total)}</b>
      </div>
    </li>`).join("");const i=ds==="checkout"?Lw():0;r.querySelector(".totals__sub").textContent=hr(t),r.querySelector(".totals__fee-row").hidden=!(ds==="checkout"&&ka()==="delivery"),r.querySelector(".totals__fee").textContent=hr(i),r.querySelector(".totals__total").textContent=hr(t+i);const s=r.querySelector(".drawer__go");s.querySelector("span").textContent=ds==="cart"?"كمّل الطلب":Ao?"بنبعت…":"ابعت الطلب",s.disabled=Ao||e.length===0,r.querySelector(".drawer__note").hidden=ds!=="checkout",document.querySelector(".nav__count").textContent=String(st.cart.count())}function Nc(r){ds=r;const e=Ba();e.querySelector(".drawer__view--cart").hidden=r!=="cart",On().hidden=r!=="checkout",e.querySelector(".drawer__back").hidden=r!=="checkout",e.querySelector("#drawer-title").textContent=r==="cart"?"سلتك":"بيانات الطلب",vs()}function g0(){const r=On().elements.namedItem("areaId"),e=st.shop.snapshot?.areas??[],t=r.value;r.innerHTML='<option value="">اختار منطقتك</option>'+e.map(i=>`<option value="${i.id}">${Zt(i.name)} — توصيل ${hr(i.fee)}</option>`).join(""),e.some(i=>String(i.id)===t)&&(r.value=t);const n=On().querySelector('input[name="type"][value="takeaway"]');n.disabled=st.shop.snapshot?.takeaway===!1,n.closest("label").hidden=n.disabled}function Iw(){const r=Ii.get(m0,{}),e=On();for(const n of["name","phone","address"]){const i=e.elements.namedItem(n);r[n]&&!i.value&&(i.value=r[n])}const t=e.elements.namedItem("areaId");r.areaId&&!t.value&&[...t.options].some(n=>n.value===r.areaId)&&(t.value=r.areaId);for(const n of["type","payment"]){const i=e.querySelector(`input[name="${n}"][value="${r[n]}"]`);i&&!i.disabled&&(i.checked=!0)}e.classList.toggle("is-takeaway",ka()==="takeaway")}function oo(r,e){const t=On();t.elements.namedItem(r)?.closest(".field")?.classList.add("is-invalid");const i=t.querySelector(".checkout__error");return i.textContent=e,i.hidden=!1,t.elements.namedItem(r)?.focus(),!1}function Nw(){const r=On();r.querySelectorAll(".is-invalid").forEach(a=>a.classList.remove("is-invalid")),r.querySelector(".checkout__error").hidden=!0;const e=a=>(r.elements.namedItem(a).value??"").trim(),t=e("name");if(t.length<2)return oo("name","اكتب اسمك");const n=PE(e("phone"));if(!n)return oo("phone","رقم الموبايل مش مظبوط — اكتبه زي 01012345678");let i="",s=0;if(ka()==="delivery"){if(s=Number(e("areaId")),!s)return oo("areaId","اختار منطقة التوصيل");if(i=e("address"),i.length<5)return oo("address","اكتب العنوان بالتفصيل عشان الطيار يوصلك")}return{name:t,phone:n,address:i,areaId:s,notes:e("notes")}}async function Ym(){if(Ao)return;if(!st.shop.open){jc(Pd(st.shop));return}const r=Nw();if(!r)return;const{lines:e}=st.cart.priced(st.shop.snapshot);if(e.length===0)return;Ao=!0,vs();const t=On().elements.namedItem("payment").value==="card"?"card":"cash",n=ka();try{const i=await DE({clientRef:qm,type:n,payment:t,customer:{name:r.name,phone:r.phone,...n==="delivery"?{address:r.address,areaId:r.areaId}:{}},notes:r.notes||void 0,lines:e.map(s=>({itemId:s.itemId,qty:s.qty,optionIds:s.optionIds}))});Ii.set(m0,{name:r.name,phone:r.phone,address:r.address,areaId:r.areaId?String(r.areaId):"",type:n,payment:t}),qm=p0(),st.cart.clear(),bf(),setTimeout(()=>Nc("cart"),800),lc(i.id,i)}catch(i){const s=i,a=On().querySelector(".checkout__error");if(a.textContent=s.message,a.hidden=!1,s.code==="menu_changed"||s.code==="closed")try{hf(await N_())}catch{}s.body?.field&&oo(s.body.field,s.message)}finally{Ao=!1,vs()}}function Uw(){const r=Ba();g0(),Iw(),Nc("cart"),r.classList.add("is-open"),r.setAttribute("aria-hidden","false"),document.documentElement.classList.add("is-locked"),r.querySelector("[data-close-cart].icon-btn")?.focus({preventScroll:!0})}function bf(){const r=Ba();r.classList.remove("is-open"),r.setAttribute("aria-hidden","true"),document.documentElement.classList.remove("is-locked")}function Fw(){const r=Ba();st.cart.subscribe(vs),Vo("shop",()=>{g0(),vs()}),Vo("added",()=>{const e=document.querySelector(".nav__cart");e.classList.remove("is-bump"),e.offsetWidth,e.classList.add("is-bump")}),document.querySelectorAll("[data-open-cart]").forEach(e=>e.addEventListener("click",Uw)),r.addEventListener("click",e=>{const t=e.target;if(t.closest("[data-close-cart]"))return bf();const n=t.closest("li[data-key]");if(n){const i=n.dataset.key,s=st.cart.raw().find(o=>o.key===i);if(!s)return;const a=t.closest("[data-step]");a&&st.cart.setQty(i,s.qty+Number(a.dataset.step)),t.closest("[data-remove]")&&st.cart.setQty(i,0)}}),r.querySelector(".drawer__back").addEventListener("click",()=>Nc("cart")),r.querySelector(".drawer__go").addEventListener("click",()=>{ds==="cart"?(st.shop.open||jc(Pd(st.shop),4e3),Nc("checkout"),On().elements.namedItem("name").focus({preventScroll:!0})):Ym()}),On().addEventListener("change",()=>{On().classList.toggle("is-takeaway",ka()==="takeaway"),vs()}),On().addEventListener("input",e=>e.target.closest(".field")?.classList.remove("is-invalid")),On().addEventListener("submit",e=>{e.preventDefault(),Ym()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&r.classList.contains("is-open")&&bf()}),vs()}const Ow={business:{name:"Crispo",phone:"0100 000 0000",address:"القاهرة",currency:"ج.م"},eta:{delivery:40,takeaway:20},takeaway:!0,categories:[{id:1,name:"وجبات الدجاج المقرمش",order:1},{id:2,name:"البرجر والسندوتشات",order:2},{id:3,name:"المقبلات والبطاطس",order:3},{id:4,name:"المشروبات والحلويات",order:4}],items:[{id:1,categoryId:1,name:"وجبة 4 قطع دجاج مقرمش",price:135,description:"4 قطع دجاج مقرمش + بطاطس + كول سلو + خبز",variants:[{id:1,name:"التتبيلة",options:[{id:1,name:"عادي",delta:0},{id:2,name:"حار",delta:0}]}]},{id:2,categoryId:1,name:"وجبة التوفير العائلية (8 قطع)",price:260,description:"8 قطع دجاج + 2 بطاطس كبير + 2 كول سلو + 4 خبز",variants:[{id:3,name:"التتبيلة",options:[{id:5,name:"عادي",delta:0},{id:6,name:"حار",delta:0},{id:7,name:"نص ونص",delta:0}]}]},{id:3,categoryId:1,name:"باكت الحفلات واللمة (12 قطعة)",price:375,description:"12 قطعة دجاج + 3 بطاطس + 3 صوص + 6 خبز",variants:[]},{id:4,categoryId:1,name:"وجبة ستريبس دجاج (4 قطع)",price:110,description:"4 أصابع ستريبس مقرمشة + بطاطس + صوص هوني ماسترد",variants:[]},{id:5,categoryId:2,name:"ساندوتش زنجر سوبريم كلاسيك",price:95,description:"صدر دجاج مقرمش + خس + مايونيز + خبز بريوش محمص",variants:[{id:4,name:"الحجم",options:[{id:8,name:"سنجل",delta:0},{id:9,name:"دبل",delta:35}]}]},{id:6,categoryId:2,name:"برجر فاير سبايسي حار",price:105,description:"فيليه متبل حار + صوص باربكيو حار + جبنة شيدر + هالبينو",variants:[]},{id:7,categoryId:2,name:"دبل كرانش ستاك العملاق",price:140,description:"قطعتين فيليه مقرمش + دبل جبنة + صوص كريسبو الخاص",variants:[]},{id:8,categoryId:2,name:"تشيكن راب تورتيلا باربكيو",price:85,description:"قطع ستريبس مقرمشة + بيف بيكون + صوص باربكيو مدخن",variants:[]},{id:9,categoryId:3,name:"بطاطس شيدر وهالبينو لوديد",price:55,description:"بطاطس مقلية مغطاة بصلصة الشيدر وشرائح الهالبينو",variants:[{id:5,name:"الحجم",options:[{id:10,name:"وسط",delta:0},{id:11,name:"كبير",delta:15}]}]},{id:10,categoryId:3,name:"حلقات بصل مقرمشة (8 قطع)",price:40,description:"حلقات بصل ذهبية مع صوص الثومية الخاص",variants:[]},{id:11,categoryId:3,name:"سلطة كول سلو كلاسيك كبيرة",price:30,description:"كرنب وجزر طازج بالمايونيز وصوص العسل",variants:[]},{id:12,categoryId:3,name:"أصابع موزاريلا مقلية (4 قطع)",price:60,description:"موزاريلا سايحة مع صوص المارينارا",variants:[]},{id:13,categoryId:4,name:"بيبسي كانز 330 مل",price:20,description:"مشروب غازي بارد منعش",variants:[]},{id:14,categoryId:4,name:"سفن آب كانز 330 مل",price:20,description:"مشروب غازي ليمون منعش",variants:[]},{id:15,categoryId:4,name:"عصير برتقال فريش",price:35,description:"برتقال طبيعي 100% بدون سكر مضاف",variants:[]},{id:16,categoryId:4,name:"مولتن تشوكلت لافا كيك",price:65,description:"كيك الشوكولاتة الساخن بقلب سايح",variants:[]}],areas:[{id:1,name:"وسط البلد",fee:15},{id:2,name:"المعادي",fee:25},{id:3,name:"مدينة نصر",fee:20},{id:4,name:"المهندسين",fee:30},{id:5,name:"الدقي",fee:25},{id:6,name:"حلوان",fee:35}]},cc=r=>new Promise(e=>setTimeout(e,r));function Bw(){try{const r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}function $m(r){return{open:!1,reason:r,snapshot:Ow,updatedAt:null,preview:!0}}async function jm(){try{const r=await N_();hf(r.snapshot?r:$m(r.reason))}catch{hf(st.shop.snapshot&&!st.shop.preview?{...st.shop,open:!1,reason:"offline"}:$m("preview"))}}function kw(){const r=document.querySelector(".loader"),e=r.querySelector(".loader__num"),t=r.querySelector(".loader__bar i"),n={p:0};let i=0;const s=()=>dt.to(n,{p:i,duration:.8,ease:"power2.out",overwrite:!0,onUpdate:()=>{e.textContent=String(Math.round(n.p*180)),t.style.transform=`scaleX(${n.p})`}});return{progress(a){i=Math.max(i,Math.min(1,a)),s()},async finish(){i=1,await s().then();const a=r.querySelector(".loader__curtain");dt.timeline().to(a,{y:"0%",duration:.7,ease:"expo.inOut"}).set(r.querySelector(".loader__inner"),{opacity:0}).set(r,{backgroundColor:"transparent"}).to(a,{y:"-100%",duration:.9,ease:"expo.inOut"}).add(()=>{document.body.classList.remove("is-loading"),document.body.classList.add("is-loaded")},"-=0.6").set(r,{display:"none"}),await cc(900)}}}async function zw(){document.body.classList.add("is-loading"),document.documentElement.lang="ar",document.documentElement.dir="rtl",document.body.dataset.theme="ink";const r=document.querySelector("canvas.gl"),e=Bw()?new Cc(r):null;st.stage=e?.ok?e:null,st.stage||document.documentElement.classList.add("no-webgl");const t=kw();Dw(),ww(),Mw(),Fw(),gw(),_w(),cw();const n=document.querySelector(".nav__sound");n.setAttribute("aria-pressed",String(qu())),n.addEventListener("click",()=>{IE(!qu()),n.setAttribute("aria-pressed",String(qu()))}),st.stage?.registerAnchors(),dt.ticker.add(()=>st.stage?.render());let i=0;const s=()=>t.progress(++i/7),a=new Promise(o=>{if(!st.stage)return o();st.stage.loadCaptures(o)});await Promise.all([jm().then(s),Promise.race([document.fonts?.ready,cc(2500)]).then(s),st.stage?st.stage.warmUp(o=>t.progress((i+o*4)/7)).then(()=>{i+=4,t.progress(i/7)}):Promise.resolve().then(()=>{i+=4}),Promise.race([a,cc(9e3)]).then(s),cc(Wo?0:1200)]),pw(),Vo("shop",Vm),Vm(),await t.finish(),mw(),Rw(),setInterval(()=>{document.hidden||jm()},3e4)}zw();export{Mi as $,of as A,_n as B,Ke as C,Kw as D,jn as E,xi as F,lp as G,xr as H,Tc as I,Ua as J,By as K,Cs as L,Pt as M,pn as N,fd as O,Hn as P,Ni as Q,yi as R,Ki as S,tA as T,ji as U,O as V,Hw as W,Zi as X,Fo as Y,rt as Z,Qw as _,wa as a,M_ as a0,Hf as a1,by as a2,Jw as a3,jr as a4,Zw as a5,Wy as a6,wl as a7,zc as a8,Dp as a9,vc as aA,nf as aB,h_ as aC,Cn as aD,wc as aE,Ec as aF,Vc as aG,Xr as aH,Zo as aI,Mr as aJ,hx as aK,ap as aL,zy as aa,eA as ab,Ww as ac,Ur as ad,Qo as ae,au as af,lx as ag,_c as ah,bh as ai,Pi as aj,gy as ak,$r as al,my as am,f_ as an,wt as ao,Xw as ap,iA as aq,qw as ar,p_ as as,Yw as at,$w as au,Bn as av,a_ as aw,d_ as ax,jw as ay,cy as az,$f as b,qt as c,Gw as d,Ow as e,Lt as f,Ge as g,it as h,Ut as i,id as j,Kf as k,Zf as l,$o as m,nA as n,ri as o,zt as p,gi as q,Li as r,Ii as s,Vn as t,tt as u,pt as v,b_ as w,Vw as x,qy as y,y_ as z};
