(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,n){e.exports=n(259)},169:function(e,t,n){},170:function(e,t,n){},259:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(21),i=n.n(r),c=(n(169),n(44)),l=n(63),s=n(64),u=n(67),h=n(65),d=n(68),p=n(11),m=(n(170),n(33)),f=n.n(m),g=n(34),b=n.n(g),v=n(35),w=n.n(v),y=function(){return a.a.createElement("div",{className:"footer"}," ",a.a.createElement("a",{href:"https://github.com/Natcancein"},"Created by Natcancein"))},E=n(30),k=n.n(E),C=n(22),j=n.n(C),q=n(43),O=function(e){return a.a.createElement(k.a,null,a.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h2",id:"text",style:e.style},a.a.createElement(q.a,null,"format_quote"),e.quote,a.a.createElement(q.a,null,"format_quote")),a.a.createElement(j.a,{component:"p",id:"author",align:"right"},e.author))},S=n(31),x=n.n(S),A=n(32),N=n.n(A),W=n(14),T=n.n(W),L=function(e){return a.a.createElement(N.a,{className:"btns"},a.a.createElement(T.a,{size:"small",variant:"outlined",color:"primary"},a.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=".concat(e.quote,"--").concat(e.author),id:"tweet-quote",title:"Tweet this quote!",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(x.a,{color:"primary"},"send"))),a.a.createElement(T.a,{size:"small",variant:"outlined",color:"primary",id:"new-quote",onClick:e.btn},"New quote"))},P=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(e){var t=Math.floor(25*Math.random());fetch("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25").then(function(e){return e.json()}).then(function(e){console.log(e);var o=e[t],a=o.content.replace(/^<p>|[<\/p>]/gi,"").replace(/&#8217;|&#8217;/gi,"'").replace(/&#8220;|&#8221;/gi,'"'),r=o.title.replace(/&#8217;/gi,"\u2019");n.setState({quote:a,author:r})}).catch(function(e){return console.log("error is",e)})},n.state={appStyle:{backgroundColor:"salmon"},appStyleText:{color:"salmon"},quote:"Offend nobody, design for somebody.",author:"PAUL BOAG"},n.changeColor=n.changeColor.bind(Object(p.a)(Object(p.a)(n))),n.handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleClick()}},{key:"changeColor",value:function(){var e=parseInt(16777215*Math.random()).toString(16),t=Object(c.a)({},this.state.appStyle,{backgroundColor:"#"+e}),n=Object(c.a)({},this.state.appStyle,{color:"#"+e,backgroundColor:"white"});this.setState({appStyle:t,appStyleText:n}),console.log(t)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App",style:this.state.appStyle},a.a.createElement(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{minHeight:"100vh"}}," ",a.a.createElement("div",{id:"quote-box"},a.a.createElement(b.a,null,a.a.createElement(w.a,null,a.a.createElement(O,{style:this.state.appStyleText,quote:this.state.quote,author:this.state.author}),a.a.createElement(L,{quote:this.state.quote,author:this.state.author,btn:function(){e.changeColor(),e.handleClick()}})))),a.a.createElement(y,null)))}}]),t}(o.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/FreeCodeCamp/FrontEndLibrariesProjects/build-random-quote-machine",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/FreeCodeCamp/FrontEndLibrariesProjects/build-random-quote-machine","/service-worker.js");_?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):B(t,e)})}}()}},[[164,1,2]]]);
//# sourceMappingURL=main.926a127f.chunk.js.map