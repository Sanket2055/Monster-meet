(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var s=n(5),r=n.n(s),c=n(39),o=n.n(c),a=(n(48),n(40)),i=n(41),h=n(43),u=n(42),l=(n(49),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-contianer",children:[Object(l.jsx)("img",{alt:"mosnter",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(l.jsx)("h1",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})},j=(n(51),function(e){return Object(l.jsx)("div",{className:"cardlist",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})}),m=(n(52),n(53),n(112),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"tp",children:"Monsters Meet!"}),Object(l.jsx)(m,{placeholder:"Search monsters ",handleChange:this.handleChange}),Object(l.jsx)(j,{monsters:s})]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.98acea90.chunk.js.map