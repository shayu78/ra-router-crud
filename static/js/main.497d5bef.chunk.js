(this["webpackJsonpra-router-crud"]=this["webpackJsonpra-router-crud"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(21),r=c.n(a),o=(c(28),c(9)),i=c(2),j=(c(29),c(3)),l=c(0);function u(e){var t=e.className,c=e.data;return Object(l.jsx)("ul",{className:t,children:e.children(c)})}var d=c(8),b=c.n(d);c(19);function m(e){var t=e.item;return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsxs)("div",{className:"post__user__date__wrapper",children:[Object(l.jsx)("div",{className:"post__user__icon",children:t.id}),Object(l.jsxs)("div",{className:"post__username__publish",children:[Object(l.jsx)("span",{className:"post__username",children:"Ivan Petrov"}),Object(l.jsx)("span",{className:"post__publish",children:b.a.duration(b()().diff(b()(t.created))).humanize()})]})]}),Object(l.jsx)("h3",{className:"post__content",children:t.content})]})}function p(e){var t=e.className,c=e.item;return Object(l.jsx)("li",{className:t,children:Object(l.jsx)(o.b,{className:"list__item__link",to:"/posts/".concat(c.id),children:Object(l.jsx)(m,{item:c})},c.id)})}var h=c(18),O=c.n(h),_=c(23);function x(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=Object(n.useState)(null),a=Object(j.a)(s,2),r=a[0],o=a[1],i=Object(n.useState)(!1),l=Object(j.a)(i,2),u=l[0],d=l[1],b=Object(n.useState)(null),m=Object(j.a)(b,2),p=m[0],h=m[1];return Object(n.useEffect)((function(){e&&function(){var e=Object(_.a)(O.a.mark((function e(){var n,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),h(null),o(null),e.prev=3,e.next=6,fetch(t,c);case 6:if((n=e.sent).ok){e.next=9;break}throw new Error(n.statusText);case 9:if(204!==n.status){e.next=13;break}o([]),e.next=17;break;case 13:return e.next=15,n.json();case 15:s=e.sent,o(s);case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(3),h("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ".concat(t," (").concat(e.t0.message,")")),setTimeout((function(){return h(null)}),3e3);case 23:return e.prev=23,d(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[3,19,23,26]])})));return function(){return e.apply(this,arguments)}}()()}),[t,e]),[{data:r,loading:u,error:p}]}var f=s.a.createContext();function N(){var e=Object(n.useContext)(f).setPosts,t=x(!0,"".concat("https://ra-router-crud-backend.herokuapp.com/","posts"),{method:"GET"}),c=Object(j.a)(t,1)[0],a=c.data,r=c.loading,i=c.error;return Object(n.useEffect)((function(){a&&e(a)}),[a]),Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("div",{className:"posts__header",children:Object(l.jsx)(o.b,{to:"/posts/new",className:"action__button",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})}),r&&Object(l.jsx)("span",{className:"loading",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435..."}),i&&Object(l.jsx)("span",{className:"error",children:i}),a&&Object(l.jsx)(u,{className:"list__items",data:a,children:function(){return a.map((function(e){return Object(l.jsx)(p,{className:"list__item",item:e},e.id)}))}})]})}var v=c(12),g=c(10),k={content:""};function w(e){var t=e.history,c=Object(n.useState)(k),a=Object(j.a)(c,2),r=a[0],o=a[1],i=Object(n.useState)(!1),u=Object(j.a)(i,2),d=u[0],b=u[1],m="".concat("https://ra-router-crud-backend.herokuapp.com/","posts"),p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:0,content:r.content})},h=x(d,m,p),O=Object(j.a)(h,1)[0],_=O.data,f=O.loading,N=O.error;Object(n.useEffect)((function(){d&&_&&t.goBack(),N&&b(!1)}),[d,_,N]);return Object(l.jsxs)(s.a.Fragment,{children:[f&&Object(l.jsx)("span",{className:"loading",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435..."}),N&&Object(l.jsx)("span",{className:"error",children:N}),Object(l.jsxs)("div",{className:"post__wrapper",children:[Object(l.jsxs)("div",{className:"post__header",children:[Object(l.jsx)("span",{className:"post__header__text",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044e"}),Object(l.jsx)("i",{className:"post__close material-icons",onClick:function(){return t.goBack()},children:"close"})]}),Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),r.content.trim().length?b(!0):o(k)},children:[Object(l.jsxs)("div",{className:"form__data",children:[Object(l.jsx)("div",{className:"post__user__icon"}),Object(l.jsx)("textarea",{className:"form__ta",name:"content",onChange:function(e){var t=e.target,c=t.name,n=t.value;o((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(v.a)({},c,n))}))},value:r.content,required:!0})]}),Object(l.jsx)("div",{className:"button__wrapper",children:Object(l.jsx)("button",{className:"action__button",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})})]})]})]})}function S(e){var t=e.match,c=e.history,a=Object(n.useContext)(f).posts,r=Object(n.useState)(!1),o=Object(j.a)(r,2),i=o[0],u=o[1],d=Object(n.useRef)(Number(t.params.id)),m=a.find((function(e){return e.id===d.current})),p="".concat("https://ra-router-crud-backend.herokuapp.com/","posts/").concat(d.current),h=x(i,p,{method:"DELETE"}),O=Object(j.a)(h,1)[0],_=O.data,N=O.loading,v=O.error;Object(n.useEffect)((function(){i&&_&&c.goBack(),v&&u(!1)}),[i,_,v]);return Object(l.jsxs)(s.a.Fragment,{children:[N&&Object(l.jsx)("span",{className:"loading",children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435..."}),v&&Object(l.jsx)("span",{className:"error",children:v}),m&&Object(l.jsxs)("div",{className:"post__view",children:[Object(l.jsxs)("div",{className:"post__user__date__wrapper",children:[Object(l.jsx)("div",{className:"post__user__icon",children:m.id}),Object(l.jsxs)("div",{className:"post__username__publish",children:[Object(l.jsx)("span",{className:"post__username",children:"Ivan Petrov"}),Object(l.jsx)("span",{className:"post__publish",children:b.a.duration(b()().diff(b()(m.created))).humanize()})]})]}),Object(l.jsx)("h3",{className:"post__content",children:m.content}),Object(l.jsxs)("div",{className:"button__wrapper",children:[Object(l.jsx)("button",{className:"action__button",onClick:function(){return c.push("/posts/edit/".concat(d.current))},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(l.jsx)("button",{className:"action__button red__bg",onClick:function(){return u(!0)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})]})}function C(e){var t=e.match,c=e.history,a=Object(n.useContext)(f),r=a.posts,o=a.setPosts,i=Object(n.useState)(!1),u=Object(j.a)(i,2),d=u[0],b=u[1],m=Object(n.useRef)(Number(t.params.id)),p=Object(n.useState)(r.find((function(e){return e.id===m.current}))),h=Object(j.a)(p,2),O=h[0],_=h[1],N="".concat("https://ra-router-crud-backend.herokuapp.com/","posts"),k={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:m.current,content:O.content})},w=x(d,N,k),S=Object(j.a)(w,1)[0],C=S.data,P=S.loading,y=S.error;Object(n.useEffect)((function(){d&&C&&(o((function(e){return e.map((function(e){return e.id===m.current?Object(g.a)(Object(g.a)({},e),{},{content:O.content}):e}))})),c.goBack()),y&&b(!1)}),[d,C,y]);return Object(l.jsxs)(s.a.Fragment,{children:[P&&Object(l.jsx)("span",{className:"loading",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435..."}),y&&Object(l.jsx)("span",{className:"error",children:y}),Object(l.jsxs)("div",{className:"post__wrapper",children:[Object(l.jsxs)("div",{className:"post__header",children:[Object(l.jsx)("span",{className:"post__header__text",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044e"}),Object(l.jsx)("i",{className:"post__close material-icons",onClick:function(){return c.goBack()},children:"close"})]}),Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),O.content.trim().length?b(!0):_({id:m.current,content:""})},children:[Object(l.jsxs)("div",{className:"form__data",children:[Object(l.jsx)("div",{className:"post__user__icon",children:O.id}),Object(l.jsx)("textarea",{className:"form__ta",name:"content",onChange:function(e){var t=e.target,c=t.name,n=t.value;_((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(v.a)({},c,n))}))},value:O.content,required:!0})]}),Object(l.jsx)("div",{className:"button__wrapper",children:Object(l.jsx)("button",{className:"action__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})]})}function P(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],a=c[1];return Object(l.jsx)(f.Provider,{value:{posts:s,setPosts:a},children:e.children})}function y(){return Object(l.jsxs)("div",{className:"container__404",children:[Object(l.jsx)("h1",{className:"header__404",children:"404"}),Object(l.jsx)("p",{className:"text__404",children:"Page not found"}),Object(l.jsx)(o.b,{className:"main__404__link",to:"/",children:"Main Page"})]})}var E=function(){return Object(l.jsx)(P,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"component__wrapper",children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/posts/new",exact:!0,component:w}),Object(l.jsx)(i.a,{path:"/posts/edit/:id",exact:!0,component:C}),Object(l.jsx)(i.a,{path:"/posts/:id",exact:!0,component:S}),Object(l.jsx)(i.a,{path:"/",exact:!0,component:N}),Object(l.jsx)(i.a,{path:"*",component:y})]})})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),T()}},[[38,1,2]]]);
//# sourceMappingURL=main.497d5bef.chunk.js.map