(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=(n(15),n(5)),l=n(3),o=n(9),u=n(2),j=n(26),b=(n(16),n(0)),f=function(e){var t=e.employees,n=e.increased;return Object(b.jsxs)("div",{className:"app-info",children:[Object(b.jsx)("h1",{children:"\u0423\u0447\u0435\u0442 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(b.jsxs)("h2",{children:["\u041e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432: ",t]}),Object(b.jsxs)("h2",{children:["\u041f\u0440\u0435\u043c\u0438\u044e \u043f\u043e\u043b\u0443\u0447\u0430\u0442: ",n]})]})},d=(n(18),function(e){var t=e.onUpdateSearch,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],s=c[1];return Object(b.jsx)("input",{value:r,onChange:function(e){var n=e.target.value;s(n),t(n)},type:"text",className:"form-control search-input",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"})}),m=(n(19),function(e){var t=e.filter,n=e.onFilterSelect,a=[{name:"all",label:"\u0412\u0441\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"},{name:"rise",label:"\u041d\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435"},{name:"moreThen1000",label:"\u0417/\u041f \u0431\u043e\u043b\u044c\u0448\u0435 1000$"}].map((function(e){var a=e.name,c=e.label,r=t===a?"btn-light":"btn-outline-light";return Object(b.jsx)("button",{onClick:function(){return n(a)},className:"btn ".concat(r),type:"button",children:c},a)}));return Object(b.jsx)("div",{className:"btn-group",children:a})}),O=n(10),p=(n(20),function(e){var t=e.name,n=e.salary,a=e.onDeleteItem,c=e.onToggleProp,r="list-group-item d-flex justify-content-between";return e.increase&&(r+=" increase"),e.rise&&(r+=" like"),Object(b.jsxs)("li",{className:r,children:[Object(b.jsx)("span",{onClick:c,"data-toggle":"rise",className:"list-group-item-label",children:t}),Object(b.jsx)("input",{type:"text",className:"list-group-item-input",defaultValue:n+"$"}),Object(b.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(b.jsx)("button",{onClick:c,"data-toggle":"increase",type:"button",className:"btn-cookie btn-sm",children:Object(b.jsx)("i",{className:"fas fa-cookie"})}),Object(b.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:a,children:Object(b.jsx)("i",{className:"fas fa-trash"})}),Object(b.jsx)("i",{className:"fas fa-star"})]})]})}),h=(n(21),["id"]),g=function(e){var t=e.data,n=e.onDeleteItem,a=e.onToggleProp,c=t.map((function(e){var t=e.id,c=Object(O.a)(e,h);return Object(b.jsx)(p,Object(l.a)(Object(l.a)({},c),{},{onDeleteItem:function(){return n(t)},onToggleProp:function(e){return a(t,e.currentTarget.getAttribute("data-toggle"))}}),t)}));return Object(b.jsx)("ul",{className:"app-list list-group",children:c})},x=(n(22),function(e){var t=e.addItem,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),o=l[0],j=l[1];return Object(b.jsxs)("div",{className:"app-add-form",children:[Object(b.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.length<3||!o||(t(r,o),s(""),j(""))},className:"add-form d-flex",children:[Object(b.jsx)("input",{onChange:function(e){return s(e.target.value)},value:r,type:"text",className:"form-control new-post-label",placeholder:"\u041a\u0430\u043a \u0435\u0433\u043e \u0437\u043e\u0432\u0443\u0442"}),Object(b.jsx)("input",{onChange:function(e){return j(e.target.value)},value:o,type:"number",className:"form-control new-post-label",placeholder:"\u0417/\u041f \u0432 $?"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})});n(23);var v=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("data"))||[]),t=Object(u.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){localStorage.setItem("data",JSON.stringify(n))}),[n]);var r=Object(a.useState)(""),s=Object(u.a)(r,2),O=s[0],p=s[1],h=Object(a.useState)("all"),v=Object(u.a)(h,2),N=v[0],y=v[1],S=n.length,k=n.filter((function(e){return e.increase})).length,I=function(e,t){switch(t){case"rise":return e.filter((function(e){return e.rise}));case"moreThen1000":return e.filter((function(e){return e.salary>1e3}));default:return e}}(function(e,t){return 0===t.length?e:e.filter((function(e){return e.name.indexOf(t)>-1}))}(n,O),N);return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(f,{employees:S,increased:k}),Object(b.jsxs)("div",{className:"search-panel",children:[Object(b.jsx)(d,{onUpdateSearch:function(e){p(e)}}),Object(b.jsx)(m,{filter:N,onFilterSelect:function(e){y(e)}})]}),Object(b.jsx)(g,{data:I,onDeleteItem:function(e){c(n.filter((function(t){return t.id!==e})))},onToggleProp:function(e,t){c(n.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},t,!n[t])):n})))}}),Object(b.jsx)(x,{addItem:function(e,t){var a={name:e,salary:t,increase:!1,rise:!1,id:Object(j.a)()};c([].concat(Object(o.a)(n),[a]))}})]})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.4e74ede0.chunk.js.map