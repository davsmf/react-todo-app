(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),s=(a(13),a(2)),r=(a(14),a(7));function i(e){var t=e.inputText,a=e.setInputText,o=e.todos,c=e.setTodos,l=e.setStatus;return n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("input",{value:t,type:"text",className:"todo-input",onChange:function(e){a(e.target.value)}}),n.a.createElement("button",{className:"todo-button",type:"submit",onClick:function(e){e.preventDefault(),c([].concat(Object(r.a)(o),[{task:t,completed:!1,id:Math.round(1e3*Math.random())}])),a("")}},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{name:"todos",className:"filter-todo",onChange:function(e){l(e.target.value)}},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted")))))}var u=a(4);function m(e){var t=e.task,a=e.todo,o=e.todos,c=e.setTodos;return n.a.createElement("div",null,n.a.createElement("li",{className:"todo=item ".concat(a.completed?"completed":"")},t),n.a.createElement("button",{className:"complete-btn",onClick:function(){c(o.map((function(e){return e.id===a.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))}},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{className:"trash-btn",onClick:function(){c(o.filter((function(e){return e.id!==a.id})))}},n.a.createElement("i",{className:"fas fa-trash"})))}function d(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(m,{todos:t,todo:e,setTodos:a,key:e.id,task:e.task})}))))}var f=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),r=Object(s.a)(l,2),u=r[0],m=r[1],f=Object(o.useState)("all"),p=Object(s.a)(f,2),E=p[0],v=p[1],b=Object(o.useState)([]),h=Object(s.a)(b,2),g=h[0],N=h[1];Object(o.useEffect)((function(){S()}),[]),Object(o.useEffect)((function(){O(),k()}),[u,E]);var O=function(){switch(E){case"completed":N(u.filter((function(e){return!0===e.completed})));break;case"uncompleted":N(u.filter((function(e){return!1===e.completed})));break;default:N(u)}},k=function(){localStorage.setItem("todos",JSON.stringify(u))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));m(e)}};return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"David's Todo List")),n.a.createElement(i,{inputText:a,setInputText:c,todos:u,setTodos:m,setStatus:v}),n.a.createElement(d,{todos:u,setTodos:m,filteredTodos:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1028d180.chunk.js.map