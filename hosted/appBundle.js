(()=>{var e={603:e=>{const t=e=>{document.getElementById("errorMessage").textContent=e,document.getElementById("domoMessage").classList.remove("hidden")};e.exports={handleError:t,sendPost:async(e,a,o)=>{const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),r=await n.json();document.getElementById("domoMessage").classList.add("hidden"),r.error&&t(r.error),r.redirect&&(window.location=r.redirect),o&&o(r)},hideError:()=>{document.getElementById("domoMessage").classList.add("hidden")}}}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}(()=>{const e=a(603),t=t=>{t.preventDefault(),e.hideError();const a=t.target.querySelector("#domoName").value,o=t.target.querySelector("#domoAge").value,n=t.target.querySelector("#domoMoney").value,m=t.target.querySelector("#_csrf").value;return a&&o?(e.sendPost(t.target.action,{name:a,age:o,money:n,_csrf:m},r),!1):(e.handleError("All fields are required!"),!1)},o=e=>React.createElement("form",{id:"domoForm",onSubmit:t,name:"domoForm",action:"/maker",method:"POST",className:"domoForm"},React.createElement("label",{htmlFor:"name",id:"nameLabel"},"Name: "),React.createElement("input",{id:"domoName",type:"text",name:"name",placeholder:"Domo Name"}),React.createElement("label",{htmlFor:"age"},"Age: "),React.createElement("input",{id:"domoAge",type:"number",min:"0",name:"age"}),React.createElement("label",{htmlFor:"money"},"Money: "),React.createElement("input",{id:"domoMoney",type:"number",min:"0",name:"money"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"makeDomoSubmit",type:"submit",value:"Make Domo"})),n=t=>{if(0===t.domos.length)return React.createElement("div",{className:"domoList"},React.createElement("h3",{className:"emptyDomo"},"No Domos Yet!"));const a=t.domos.map((a=>React.createElement("div",{key:a._id,className:"domo"},React.createElement("img",{src:"/assets/img/domoface.jpeg",alt:"domo face",className:"domoFace"}),React.createElement("h3",{className:"domoName"},"Name: ",a.name),React.createElement("h3",{className:"domoAge"},"Age: ",a.age),React.createElement("h3",{className:"domoMoney"},"Money: ",a.money),React.createElement("input",{id:"giveMoney",type:"button",value:"Give Money",onClick:t=>((t,a,o)=>{t.preventDefault(),e.hideError();const n=t.target.parentNode.querySelector("#_csrf").value;return e.sendPost("/giveMoney",{id:a,money:o,_csrf:n},r),!1})(t,a._id,a.money)}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:t.csrf}))));return React.createElement("div",{className:"domoList"},a)},r=async()=>{const e=await fetch("/getDomos"),t=await e.json(),a=await fetch("/getToken"),o=await a.json();ReactDOM.render(React.createElement(n,{domos:t.domos,csrf:o.csrfToken}),document.getElementById("domos"))};window.onload=async()=>{const e=await fetch("/getToken"),t=await e.json();ReactDOM.render(React.createElement(o,{csrf:t.csrfToken}),document.getElementById("makeDomo")),ReactDOM.render(React.createElement(n,{domos:[],csrf:t.csrfToken}),document.getElementById("domos")),r()}})()})();