(this.webpackJsonpreact_employee_directory=this.webpackJsonpreact_employee_directory||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(13),o=c.n(r),a=(c(19),c(20),c(4)),l=c(0);var i=function(){return Object(l.jsx)("div",{className:"container-fluid py-5 text-center",children:Object(l.jsx)("h1",{className:"display-5 fw-bold",children:"Employee Directory"})})};var j=function(e){return Object(l.jsx)("div",{class:"input-group",children:Object(l.jsx)("div",{className:"navbar-toggler",children:Object(l.jsx)("input",{type:"search",placeholder:"Enter Name",onChange:function(t){e.searchBar(t)}})})})},u=function(e){return console.log(e.employee),Object(l.jsxs)("table",{className:"table table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:" mb-4",children:[Object(l.jsx)("th",{scope:"col",children:"picture"}),Object(l.jsx)("th",{scope:"col",children:"ref id"}),Object(l.jsxs)("th",{scope:"col",onClick:function(){return e.sort("first")},children:["first ",Object(l.jsx)("i",{class:"fas fa-sort-alpha-up"})]}),Object(l.jsxs)("th",{scope:"col",onClick:function(){return e.sort("last")},children:["last ",Object(l.jsx)("i",{class:"fas fa-sort-alpha-up"})]}),Object(l.jsx)("th",{scope:"col",children:"email"}),Object(l.jsx)("th",{scope:"col",children:"phone"}),Object(l.jsx)("th",{scope:"col",children:"age"})]})}),Object(l.jsx)("tbody",{children:e.employee.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[Object(l.jsx)("img",{src:e.picture.thumbnail,alt:"employee profile of ".concat(e.name.last)})," "]}),Object(l.jsx)("td",{children:t+100}),Object(l.jsx)("td",{children:e.name.first}),Object(l.jsx)("td",{children:e.name.last}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.dob.age}),Object(l.jsx)("td",{})]},t)}))})]})},d=c(14),b=c.n(d),h=function(){return b.a.get("https://randomuser.me/api/?results=50&nat=us")},p=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),o=Object(a.a)(r,2),d=o[0],b=o[1];Object(n.useEffect)((function(){h().then((function(e){s(e.data.results),b(e.data.results),console.log(e.data.results[0].name.first),console.log(e.data.results[1].picture.thumbnail),console.log(c)}))}),[s]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{}),Object(l.jsx)(j,{searchBar:function(e){var t=e.target.value;console.log(t,c);var n=c.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));console.log(n),b(n)}}),Object(l.jsx)(u,{employee:d,sort:function(e){var t=d.sort((function(t,c){return t.name[e].localeCompare(c.name[e])}));t=t.map((function(e){return e})),b(t)}})]})};var O=function(){return Object(l.jsx)(p,{})};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.54d8273d.chunk.js.map