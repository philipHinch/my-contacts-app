(this["webpackJsonpmy-contacts-app"]=this["webpackJsonpmy-contacts-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(7),i=c.n(s),l=(c(14),c(3)),o=c(8),r=(c(15),c(9)),j=c(2),u=c(0),b=function(e){var t=e.buttonText,c=e.className,a=e.icon,n=e.setUserFormVisible,s=e.type;return Object(u.jsxs)("button",{className:c,type:s,onClick:function(e){return function(e){e.target.classList.contains("add-contact-btn")?n(!0):e.target.classList.contains("close-btn")&&n(!1)}(e)},children:[t,a]})},m=["crimson","steelblue","hotpink","rebeccapurple","forestgreen","goldenrod"],d=function(e){var t=e.setUserFormVisible,c=e.contacts,n=e.setContacts,s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],d=i[1],h=Object(a.useState)(""),x=Object(l.a)(h,2),O=x[0],p=x[1],N=Object(a.useState)(""),f=Object(l.a)(N,2),v=f[0],g=f[1],C=Object(a.useState)(""),y=Object(l.a)(C,2),k=y[0],F=y[1],S=Object(a.useState)(""),E=Object(l.a)(S,2),T=E[0],V=E[1],U=Object(a.useState)(""),w=Object(l.a)(U,2),M=w[0],A=w[1],L=Object(a.useState)(""),H=Object(l.a)(L,2),J=H[0],I=H[1],P=function(e){e.preventDefault(),t(!1);var a=c&&c.length,s={firstName:o,lastName:O,phoneNumber:v,email:k,sex:T,avatarColor:M,contactType:J,id:a},i=[].concat(Object(r.a)(c),[s]);n(i)},z=function(e){e.target.id?I(e.target.id):e.target.id?I(e.target.parentElement.id):e.target.parentElement.parentElement.id&&I(e.target.parentElement.parentElement.id)};return Object(u.jsx)("div",{className:"add-contact-form-container",children:Object(u.jsxs)("form",{className:"add-contact-form",onSubmit:P,children:[Object(u.jsx)(j.a,{icon:"mdi:account-circle",className:"user-avatar add-contact-avatar",style:{color:M}}),Object(u.jsxs)("div",{className:"contact-type-container",children:[Object(u.jsx)("div",{className:"contact-type",id:"home-contact",title:"Home",value:"home",onClick:function(e){return z(e)},children:Object(u.jsx)(j.a,{icon:"mdi:home-outline"})}),Object(u.jsx)("div",{className:"contact-type",id:"mobile-contact",title:"Mobile",value:"mobile",onClick:function(e){return z(e)},children:Object(u.jsx)(j.a,{icon:"mdi:cellphone"})}),Object(u.jsx)("div",{className:"contact-type",id:"work-contact",title:"Work",value:"work",onClick:function(e){return z(e)},children:Object(u.jsx)(j.a,{icon:"mdi:briefcase-outline"})})]}),Object(u.jsx)("label",{htmlFor:"fisrt-name-input",children:"First Name:"}),Object(u.jsx)("input",{type:"text",id:"first-name-input",autoFocus:!0,required:!0,value:o,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"last-name-input",children:"Last Name:"}),Object(u.jsx)("input",{type:"text",id:"last-name-input",value:O,onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"phone-number-input",children:"Phone Number:"}),Object(u.jsx)("input",{type:"number",id:"phone-number-input",value:v,onChange:function(e){return g(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"email-input",children:"Email Address:"}),Object(u.jsx)("input",{type:"email",id:"email-input",value:k,onChange:function(e){return F(e.target.value)}}),Object(u.jsxs)("div",{className:"sex-container",children:[Object(u.jsx)("input",{type:"radio",name:"sex",id:"sex-input-male",value:"male",onClick:function(e){return V(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"sex-input-male",children:"Male"}),Object(u.jsx)("input",{type:"radio",name:"sex",id:"sex-input-female",value:"female",onClick:function(e){return V(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"sex-input-female",children:"Female"}),Object(u.jsx)("input",{type:"radio",name:"sex",id:"sex-input-other",value:"other",onClick:function(e){return V(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"sex-input-other",children:"Other"})]}),Object(u.jsxs)("div",{className:"color-choice-container",children:[Object(u.jsx)("span",{className:"color-choice",onClick:function(e){return A(e.target.id)},id:m[0],style:{backgroundColor:m[0]}}),Object(u.jsx)("span",{className:"color-choice",onClick:function(e){return A(e.target.id)},id:m[1],style:{backgroundColor:m[1]}}),Object(u.jsx)("span",{className:"color-choice",onClick:function(e){return A(e.target.id)},id:m[2],style:{backgroundColor:m[2]}}),Object(u.jsx)("span",{className:"color-choice",onClick:function(e){return A(e.target.id)},id:m[3],style:{backgroundColor:m[3]}}),Object(u.jsx)("span",{className:"color-choice",onClick:function(e){return A(e.target.id)},id:m[4],style:{backgroundColor:m[4]}}),Object(u.jsx)("span",{className:"color-choice",onClick:function(e){return A(e.target.id)},id:m[5],style:{backgroundColor:m[5]}})]}),Object(u.jsxs)("div",{className:"buttons-container",children:[Object(u.jsx)(b,{buttonText:"Add",type:"submit",className:"add-btn btn",setUserFormVisible:t,onClick:P}),Object(u.jsx)(b,{buttonText:"Close",className:"close-btn btn",setUserFormVisible:t})]})]})})},h=function(e){var t,c,a=e.avatarColor,n=e.contactType,s=e.firstName,i=e.lastName,l=e.email,o=e.phoneNumber,r=e.sex,b=e.id;return"mobile-contact"===n?(t="cellphone",c="Mobile"):"home-contact"===n?(t="home-outline",c="Home"):"work-contact"===n&&(t="briefcase-outline",c="Work"),Object(u.jsxs)("li",{id:b,className:"table-row",children:[Object(u.jsxs)("div",{className:"li-icons-container col col-1",children:[Object(u.jsx)("div",{className:"li-user-avatar",title:"Avatar",children:Object(u.jsx)(j.a,{icon:"mdi:account-circle",className:"user-avatar",style:{color:a}})}),Object(u.jsx)("div",{className:"li-contact-type",title:c,children:Object(u.jsx)(j.a,{icon:"mdi:".concat(t),className:"contact-type-icon"})})]}),Object(u.jsx)("div",{className:"li-first-name col col-2",title:"First Name",children:s}),Object(u.jsx)("div",{className:"li-last-name col col-3",title:"Last Name",children:i}),Object(u.jsx)("div",{className:"li-email col col-4",title:"Email",children:l}),Object(u.jsx)("div",{className:"li-phone-number col col-5",title:"Phone",children:o}),Object(u.jsx)("div",{className:"li-sex col col-6",title:"Sex",children:r}),Object(u.jsx)("div",{className:"li-close-icon col col-7",onClick:function(e){return function(e){console.log(e.target)}(e)},children:Object(u.jsx)(j.a,{icon:"mdi:close-thick",className:"close-icon"})})]})},x=function(e){var t=e.contacts,c=e.setContacts;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:"total-contacts",children:["Total Contacts: ",Object(u.jsx)("span",{className:"total-contacts-amount",children:t.length})]}),Object(u.jsxs)("ul",{className:"contact-list responsive-table",children:[Object(u.jsxs)("li",{className:"info-li table-header",children:[Object(u.jsx)("div",{className:"col col-1"}),Object(u.jsxs)("div",{className:"col col-2",children:[Object(u.jsx)(j.a,{icon:"mdi:menu-up",style:{fontSize:"1.6rem",color:"#666"}}),"First Name"]}),Object(u.jsxs)("div",{className:"col col-3",children:[Object(u.jsx)(j.a,{icon:"mdi:menu-up",style:{fontSize:"1.6rem",color:"#666"}}),"Last Name"]}),Object(u.jsx)("div",{className:"col col-4",children:"Email"}),Object(u.jsx)("div",{className:"col col-5",children:"Phone"}),Object(u.jsx)("div",{className:"col col-6",children:"Sex"}),Object(u.jsx)("div",{className:"col col-7"})]}),t&&t.map((function(e){return Object(u.jsx)(h,{id:e.id,avatarColor:e.avatarColor,contactType:e.contactType,firstName:e.firstName,lastName:e.lastName,email:e.email,sex:e.sex,phoneNumber:e.phoneNumber,contacts:t,setContacts:c},Math.random())}))]})]})},O=function(){return Object(u.jsx)("header",{children:Object(u.jsxs)("h1",{className:"header-title",children:[Object(u.jsx)(j.a,{icon:"mdi:account-group-outline",className:"header-icon"}),"My Contacts"]})})},p=Object(u.jsx)(j.a,{icon:"mdi:plus",className:"plus-icon"}),N=function(e){var t=e.setUserFormVisible;return Object(u.jsxs)("form",{className:"search-input-form",onSubmit:function(e){return e.preventDefault()},children:[Object(u.jsx)("input",{type:"text",id:"search-input",placeholder:"Filter contacts..","aria-label":"filter"}),Object(u.jsx)(b,{buttonText:"Add Contact",className:"add-contact-btn btn",icon:p,setUserFormVisible:t})]})};var f=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(JSON.parse(localStorage.getItem("contacts"))||[]),i=Object(l.a)(s,2),r=i[0],j=i[1];return Object(o.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(r))}),[r]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{}),Object(u.jsx)(N,{setUserFormVisible:n,userFormVisible:c}),c&&Object(u.jsx)(d,{setUserFormVisible:n,contacts:r,setContacts:j}),Object(u.jsx)(x,{contacts:r,setContacts:j})]})},v=function(){return Object(u.jsx)("footer",{children:Object(u.jsxs)("small",{children:["\xa9 2021 - ",Object(u.jsx)("a",{href:"https://github.com/philipHinch",target:"_blank",rel:"noreferrer",children:"https://github.com/philipHinch"})]})})};i.a.render(Object(u.jsxs)(n.a.StrictMode,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(v,{})]}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2ca232c5.chunk.js.map