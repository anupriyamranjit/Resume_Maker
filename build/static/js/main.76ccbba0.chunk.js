(this.webpackJsonpresumefrontend=this.webpackJsonpresumefrontend||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),i=(a(88),a(15));a(89);function o(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-ig"},l.a.createElement(i.b,{to:"/",className:"navbar-brand"},"Resume Maker"),l.a.createElement("div",{className:"collpase navbar-collpase"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/",className:"nav-link"},"Resume")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/addframework",className:"nav-link"},"Add Frameworks")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/addlanguages",className:"nav-link"},"Add Languages")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/resume",className:"nav-link"},"Old Resumes")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/projects",className:"nav-link"},"All Projects")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/award",className:"nav-link"},"All Awards")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/experience",className:"nav-link"},"All Experience")))))}var u=a(5),m=a(147),d=a(150),s=a(151),f=a(152),p=a(153),E=a(159),h=a(160),b=a(154),v=a(7),g=a.n(v);function j(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),o=i[0],v=i[1],j=Object(n.useState)(""),y=Object(u.a)(j,2),x=y[0],O=y[1],w=Object(n.useState)(""),S=Object(u.a)(w,2),C=S[0],k=S[1];return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(s.a,{variant:"h3",gutterBottom:!0},"Add Project"),l.a.createElement(f.a,{my:6}),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:a,position:o,what:x,tools:C};g.a.post("/api/projects/add",t).then((function(e){return alert(e.data)})).catch((function(e){return alert(e)}))}},l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"Name",label:"Name",value:a,onChange:function(e){return r(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"Position",label:"Position",value:o,onChange:function(e){return v(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"What",label:"What is it",value:x,onChange:function(e){return O(e.target.value)},variant:"outlined",fullWidth:!0,multiline:!0,rows:4})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"Tools",label:"What Tools Did You Use",value:C,onChange:function(e){return k(e.target.value)},variant:"outlined",fullWidth:!0,multiline:!0,rows:4}))),l.a.createElement(p.a,{container:!0,spacing:8},l.a.createElement(h.a,{pt:10,mx:"auto"},l.a.createElement(b.a,{style:{margin:5},color:"primary",variant:"contained",type:"submit"},"Save")))),l.a.createElement("br",null)))}function y(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),o=i[0],v=i[1],j=Object(n.useState)(0),y=Object(u.a)(j,2),x=y[0],O=y[1];return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(s.a,{variant:"h3",gutterBottom:!0},"Add Awards"),l.a.createElement(f.a,{my:6}),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:a,what:o,year:x};g.a.post("/api/award/add",t).then((function(e){return alert(e.data)}))}},l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"Name",label:"Name",value:a,onChange:function(e){return r(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"What",label:"What is it",value:o,onChange:function(e){return v(e.target.value)},variant:"outlined",fullWidth:!0,multiline:!0,rows:4})),l.a.createElement(p.a,{item:!0,md:12},l.a.createElement(E.a,{id:"outlined-name",name:"Year",label:"What Year Did You Get The Award",value:x,onChange:function(e){return O(e.target.value)},variant:"outlined",fullWidth:!0,multiline:!0,rows:4}))),l.a.createElement(p.a,{container:!0,spacing:8},l.a.createElement(h.a,{pt:10,mx:"auto"},l.a.createElement(b.a,{style:{margin:5},color:"primary",variant:"contained",type:"submit"},"Save")))),l.a.createElement("br",null)))}function x(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),o=i[0],v=i[1],j=Object(n.useState)(""),y=Object(u.a)(j,2),x=y[0],O=y[1],w=Object(n.useState)(""),S=Object(u.a)(w,2),C=S[0],k=S[1],F=Object(n.useState)(""),N=Object(u.a)(F,2),W=N[0],D=N[1];return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(s.a,{variant:"h3",gutterBottom:!0},"Add Experience"),l.a.createElement(f.a,{my:6}),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:a,position:o,firstLine:x,secondLine:C,thirdLine:W};g.a.post("/api/experience/add",t).then((function(e){return alert(e.data)}))}},l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"Name",label:"Name",value:a,onChange:function(e){return r(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"Position",label:"Position",value:o,onChange:function(e){return v(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",label:"First Line",value:x,onChange:function(e){return O(e.target.value)},variant:"outlined",fullWidth:!0,multiline:!0,rows:4})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",label:"Second Line",value:C,onChange:function(e){return k(e.target.value)},variant:"outlined",fullWidth:!0,multiline:!0,rows:4})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",label:"Third Line",value:W,onChange:function(e){return D(e.target.value)},variant:"outlined",fullWidth:!0,multiline:!0,rows:4}))),l.a.createElement(p.a,{container:!0,spacing:8},l.a.createElement(h.a,{pt:10,mx:"auto"},l.a.createElement(b.a,{style:{margin:5},color:"primary",variant:"contained",type:"submit"},"Save"),l.a.createElement("br",null)))),l.a.createElement("br",null)))}var O=a(10),w=a(155),S=a(28),C=a.n(S);function k(e){return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement("h2",null,e.project.name),l.a.createElement("h4",null,e.project.position),l.a.createElement("h6",null,e.project.what),l.a.createElement("h6",null,e.project.tools),l.a.createElement(b.a,{style:{color:"red"},onClick:function(){return t=e.project._id,void e.onDelete(t);var t}},"Delete "),l.a.createElement(b.a,{style:{color:"yellow"},onClick:function(){return t=e.project._id,void(window.location.href="http://localhost:3000/projects/"+t);var t}},"Update ")))}function F(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=function(e){g.a.delete("/api/projects/"+e).then((function(e){alert(e.data),window.location.reload(!1)}))};return Object(n.useEffect)((function(){g.a.get("/api/projects").then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},a.map((function(e){return l.a.createElement(k,{onDelete:c,project:e})})))),l.a.createElement(i.b,{to:"/addproject"},l.a.createElement(w.a,{style:{float:"right"},color:"primary","aria-label":"add"},l.a.createElement(C.a,null)))))}function N(e){return l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement("h2",null,e.project.name),l.a.createElement("h6",null,e.project.what),l.a.createElement("h6",null,e.project.year),l.a.createElement(b.a,{style:{color:"red"},onClick:function(){return t=e.project._id,void e.onDelete(t);var t}},"Delete "),l.a.createElement(b.a,{style:{color:"yellow"},onClick:function(){return t=e.project._id,void(window.location.href="http://localhost:3000/award/"+t);var t}},"Update "))))}function W(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=function(e){g.a.delete("/api/award/"+e).then((function(e){alert(e.data),window.location.reload(!1)}))};return Object(n.useEffect)((function(){g.a.get("/api/award").then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement(p.a,{container:!0,spacing:2,style:{padding:"20px"}},l.a.createElement(m.a,{style:{backgroundImage:"linear-gradient( 95deg,#1f4037 0%,#1f4037 50%,#99f2c8 100%)"}},l.a.createElement(d.a,null,l.a.createElement(p.a,{container:!0,spacing:2},a.map((function(e){return l.a.createElement(N,{onDelete:c,project:e})}))))),l.a.createElement(i.b,{to:"/addaward"},l.a.createElement(w.a,{style:{float:"right"},color:"primary","aria-label":"add"},l.a.createElement(C.a,null))))}function D(e){return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement("h2",null,e.project.name),l.a.createElement("h6",null,e.project.position),l.a.createElement("h6",null,e.project.firstLine),l.a.createElement("h6",null,e.project.secondLine),l.a.createElement("h6",null,e.project.thirdLine),l.a.createElement(b.a,{style:{color:"red"},onClick:function(){return t=e.project._id,void e.onDelete(t);var t}},"Delete "),l.a.createElement(b.a,{style:{color:"yellow"},onClick:function(){return t=e.project._id,void(window.location.href="http://localhost:3000/experience/"+t);var t}},"Update ")))}function T(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=function(e){g.a.delete("/api/experience/"+e).then((function(e){alert(e.data),window.location.reload(!1)}))};return Object(n.useEffect)((function(){g.a.get("/api/experience").then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},a.map((function(e){return l.a.createElement(D,{onDelete:c,project:e})})))),l.a.createElement(i.b,{to:"/addexperience"},l.a.createElement(w.a,{style:{float:"right"},color:"primary","aria-label":"add"},l.a.createElement(C.a,null)))))}var z=a(68),L=a.n(z),A=a(161),_=a(69),P=a(156),B=a(4),V=a(157),I=a(158),R=a(70),U=a.n(R),G=a(162),M=a(114),Y=a(3),$=Object(P.a)((function(e){return{root:{width:"100%"},button:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}})),J=Object(B.a)({alternativeLabel:{top:22},active:{"& $line":{backgroundImage:"linear-gradient( 95deg,#11998e 0%,#11998e 50%,#38ef7d 100%)"}},completed:{"& $line":{backgroundImage:"linear-gradient( 95deg,#000000 0%,#11998e 50%,#38ef7d 100%)"}},line:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1}})(M.a),Q=Object(P.a)({root:{color:"#eaeaf0",display:"flex",height:22,alignItems:"center"},active:{color:"#38ef7d"},circle:{width:10,height:10,borderRadius:"100%",backgroundColor:"currentColor"},completed:{color:"#38ef7d",zIndex:1,fontSize:18}});function q(e){var t=Q(),a=e.active,n=e.completed;return l.a.createElement("div",{className:Object(Y.a)(t.root,Object(_.a)({},t.active,a))},n?l.a.createElement(U.a,{className:t.completed}):l.a.createElement("div",{className:t.circle}))}function H(e){var t=$(),a=l.a.useState(0),n=Object(u.a)(a,2),r=n[0],c=n[1],i=l.a.useState(!0),o=Object(u.a)(i,2),m=(o[0],o[1],["Experience","Award","Framework","Languages","Project"]);return l.a.createElement("div",{className:t.root},l.a.createElement(V.a,{activeStep:r,style:{backgroundColor:"transparent"},connector:l.a.createElement(J,null)},m.map((function(e,t){return l.a.createElement(I.a,Object.assign({key:e},{}),l.a.createElement(G.a,Object.assign({},{},{StepIconComponent:q}),e))}))),l.a.createElement("div",null,r===m.length?l.a.createElement("div",null,l.a.createElement(s.a,{className:t.instructions},"All steps completed - you're finished"),l.a.createElement(b.a,{onClick:function(){c(0)},className:t.button},"Reset")):l.a.createElement("div",null,l.a.createElement(s.a,{className:t.instructions},function(e,t,a){switch(e){case 0:return t.one;case 1:return t.two;case 2:return t.three;case 3:return t.four;case 4:return t.five;default:return"Unknown step"}}(r,e)),l.a.createElement("div",null,l.a.createElement(b.a,{disabled:0===r,variant:"contained",color:"primary",onClick:function(){c((function(e){return e-1}))},className:t.button},"Back"),l.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){c((function(e){return e+1}))},className:t.button},r===m.length-1?"Finish":"Next")))))}function K(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("Software Developer"),i=Object(u.a)(c,2),o=i[0],s=(i[1],Object(n.useState)([])),f=Object(u.a)(s,2),v=f[0],j=f[1],y=Object(n.useState)([]),x=Object(u.a)(y,2),O=x[0],w=x[1],S=Object(n.useState)([]),C=Object(u.a)(S,2),k=C[0],F=C[1],N=Object(n.useState)([]),W=Object(u.a)(N,2),D=W[0],T=W[1],z=Object(n.useState)([]),_=Object(u.a)(z,2),P=_[0],B=_[1],V=Object(n.useState)([]),I=Object(u.a)(V,2),R=I[0],U=I[1],G=Object(n.useState)([]),M=Object(u.a)(G,2),Y=M[0],$=M[1],J=Object(n.useState)([]),Q=Object(u.a)(J,2),q=Q[0],K=Q[1],X=Object(n.useState)(["5f0009046671b9e5a4e70c54","5f00144c6671b9e5a4e70c5f","5f0014526671b9e5a4e70c60","5f00145a6671b9e5a4e70c61","5f00145e6671b9e5a4e70c62"]),Z=Object(u.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(["5f00090c6671b9e5a4e70c55","5f0009156671b9e5a4e70c56","5f00091c6671b9e5a4e70c57","5f00092a6671b9e5a4e70c58","5f000d646671b9e5a4e70c59","5f000d7b6671b9e5a4e70c5a","5f000d836671b9e5a4e70c5b","5f000d8a6671b9e5a4e70c5c","5f000d936671b9e5a4e70c5d","5f000da26671b9e5a4e70c5e"]),ne=Object(u.a)(ae,2),le=ne[0],re=ne[1],ce=Object(n.useState)("Anupriyam Resume"),ie=Object(u.a)(ce,2),oe=ie[0],ue=ie[1],me=Object(n.useState)(""),de=Object(u.a)(me,2),se=de[0],fe=de[1],pe=l.a.useState(!1),Ee=Object(u.a)(pe,2),he=(Ee[0],Ee[1],function(e,t){return"project"===t?-1!==D.indexOf(e):"award"===t?-1!==R.indexOf(e):"framework"===t?-1!==le.indexOf(e):"language"===t?-1!==ee.indexOf(e):-1!==P.indexOf(e)});function be(e){return l.a.createElement(m.a,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(d.a,null,l.a.createElement("h7",null,e.project.name," "),l.a.createElement(A.a,{defaultChecked:!!e.check,onChange:function(t){return function(t,a){if("project"===e.type){var n=D;if(!1===a){var l=D.indexOf(t);l>-1&&n.splice(l,1)}else n.push(t);T(n)}if("award"===e.type){var r=R;if(!1===a){var c=R.indexOf(t);c>-1&&r.splice(c,1)}else r.push(t);U(r)}if("framework"===e.type){var i=le;if(!1===a){var o=le.indexOf(t);o>-1&&i.splice(o,1)}else i.push(t);re(i)}if("language"===e.type){var u=ee;if(!1===a){var m=ee.indexOf(t);m>-1&&u.splice(m,1)}else u.push(t);te(u)}if("experience"===e.type){var d=P;if(!1===a){var s=P.indexOf(t);s>-1&&d.splice(s,1)}else d.push(t);B(d)}}(e.project._id,t.target.checked)}})))}Object(n.useEffect)((function(){g.a.get("/api/award").then((function(e){j(e.data)})).catch((function(e){console.log(e)})),g.a.get("/api/projects").then((function(e){w(e.data)})).catch((function(e){console.log(e)})),g.a.get("/api/experience").then((function(e){F(e.data)})).catch((function(e){console.log(e)})),g.a.get("/api/framework").then((function(e){K(e.data)})).catch((function(e){console.log(e)})),g.a.get("/api/languages").then((function(e){$(e.data)})).catch((function(e){console.log(e)}))}),[]);var ve=function(e){var t=new L.a;t.addFont("ArialMS","Arial","normal","Calibri"),t.setFillColor("#293e60"),t.setFont("ArialMS"),t.setFontSize(30),t.setTextColor("Black"),t.text(15,25,"Anupriyam Ranjit"),t.setFontSize(20);var a=o;t.text(210-4*a.length,25,"".concat(a));var n=["aranjit@uwaterloo.ca","www.anupriyamranjit.weebly.com","www.github.com/anupriyamranjit"];t.setLineWidth(.5),t.setFontSize(22),t.text(15,45,"Contact"),t.line(15,47,65,47,"DF"),t.setFontSize(10);var l=0,c=0;for(c=0;c<n.length;c++)t.text(15,52+5*c,n[c]),l=52+5*c;var i=[];for(c=0;c<Y.length;c++)ee.indexOf(Y[c]._id)>-1&&i.push(Y[c].name);var u=[];for(c=0;c<q.length;c++)le.indexOf(q[c]._id)>-1&&u.push(q[c].name);for(t.setFontSize(22),t.text(15,l+15,"Skills"),t.line(15,l+17,65,l+17,"DF"),l+=22,t.setFontSize(10),t.setFontType("bold"),t.text(15,l,"Languages"),t.setFontType("normal"),t.setFontSize(10),l+=5,c=0;c<i.length;c++)t.text(15,l,i[c]),l+=5;for(l+=5,t.setFontSize(10),t.setFontType("bold"),t.text(15,l,"Frameworks"),t.setFontType("normal"),t.setFontSize(10),l+=5,c=0;c<u.length;c++)t.text(15,l,u[c]),l+=5;t.setFontSize(22),t.text(15,l+10,"Education"),t.line(15,l+12,65,l+12),t.setFontSize(12),t.setFontType("bold"),t.text(15,l+17,"University of Waterloo"),t.setFontType("normal"),t.setFontSize(10),t.text(15,l+22,"Bachelors in Computer Science"),t.text(15,l+27,"and Business Administration"),t.text(15,l+32,"Double Degree"),t.setFontSize(8),t.text(15,l+37,"2019-Present"),l+=37,t.setFontSize(22),t.text(15,l+15,"Certifications"),t.line(15,l+17,65,l+17),l+=22,t.setFontSize(10);var m=[["Intoduction to SQL","University of Michigan"],["Data Analysis with Panda","Codeacademy"]];for(c=0;c<m.length;c++)t.setFontSize(10),t.text(15,l,m[c][0]),t.setFontSize(8),t.text(15,l+4,"by "+m[c][1]),l+=9;t.setFontSize(10);var d=[];for(c=0;c<k.length;c++)P.indexOf(k[c]._id)>-1&&d.push([k[c].name,k[c].position,k[c].firstLine,k[c].secondLine,k[c].thirdLine]);var s=30;for(t.setFontSize(22),t.text(75,45,"Experience"),t.line(75,47,150,47),s+=2,c=0;c<d.length;c++)s+=21,t.setFontSize(12),t.text(75,s,d[c][0]),t.setFontSize(9),t.setTextColor("Gray"),t.text(75,s+4,d[c][1]),t.setTextColor("Black"),t.setFontSize(9),t.text(78,s+9,d[c][2]),t.circle(76,s+9,.5,"F"),t.text(78,s+14,d[c][3]),t.circle(76,s+14,.5,"F"),t.text(78,s+19,d[c][4]),t.circle(76,s+19,.5,"F"),s+=5;s+=25,t.setFontSize(22),t.text(75,s,"Projects"),t.line(75,s+2,150,s+2),s+=2;var f=[];for(c=0;c<O.length;c++)D.indexOf(O[c]._id)>-1&&f.push([O[c].name,O[c].position,O[c].what,O[c].tools]);for(s-=13,c=0;c<f.length;c++)s+=18,t.setFontSize(12),t.text(75,s,f[c][0]),t.setFontSize(9),t.setTextColor("Gray"),t.text(75,s+4,f[c][1]),t.setTextColor("Black"),t.setFontSize(9),t.text(78,s+9,f[c][2]),t.circle(76,s+8,.5,"F"),t.text(78,s+14,f[c][3]),t.circle(76,s+13,.5,"F"),s+=2;var p=[];for(c=0;c<v.length;c++)R.indexOf(v[c]._id)>-1&&p.push([v[c].name,v[c].what,v[c].year]);for(s+=22,t.setFontSize(22),t.text(75,s,"Awards"),t.line(75,s+2,150,s+2),s+=8,c=0;c<p.length;c++)t.setFontSize(11),t.text(75,s,p[c][0]),t.setFontSize(8),t.setTextColor("Gray"),t.text(75,s+4,p[c][1]),t.setTextColor("Black"),s+=10;var E=t.output("datauristring");if("Download"===e&&t.save("".concat(oe,".pdf")),"Database"===e){var h={name:oe,data_uri:se};g.a.post("http://localhost:5000/api/resume/add",h).then((function(e){alert(e.data),ue("")})).catch((function(e){return alert(e)}))}r(E),fe(E)};function ge(){return l.a.createElement(m.a,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(d.a,null,l.a.createElement("h1",{style:{display:"flex",justifyContent:"center"}}," Experience "),k.map((function(e){return l.a.createElement(be,{check:he(e._id,"experience"),type:"experience",project:e})}))))}function je(){return l.a.createElement(m.a,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(d.a,null,l.a.createElement("h1",{style:{display:"flex",justifyContent:"center"}}," Award "),v.map((function(e){return l.a.createElement(be,{check:he(e._id,"award"),type:"award",project:e})}))))}function ye(){return l.a.createElement(m.a,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(d.a,null,l.a.createElement("h1",{style:{display:"flex",justifyContent:"center"}}," Frameworks "),q.map((function(e){return l.a.createElement(be,{check:he(e._id,"framework"),type:"framework",project:e})}))))}function xe(){return l.a.createElement(m.a,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(d.a,null,l.a.createElement("h1",{style:{display:"flex",justifyContent:"center"}}," Languages "),Y.map((function(e){return l.a.createElement(be,{check:he(e._id,"language"),type:"language",project:e})}))))}function Oe(){return l.a.createElement(m.a,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(d.a,null,l.a.createElement("h1",{style:{display:"flex",justifyContent:"center"}}," Project "),O.map((function(e){return l.a.createElement(be,{check:he(e._id,"project"),type:"project",project:e})}))))}return l.a.createElement(p.a,{container:!0,spacing:4,style:{display:"flex",justifyContent:"center"}},l.a.createElement(p.a,{item:!0,xs:6},l.a.createElement(E.a,{id:"outlined-name",name:"Name",label:"Name",value:oe,onChange:function(e){return ue(e.target.value)},variant:"outlined",fullWidth:!0}),l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(H,{one:l.a.createElement(ge,null),two:l.a.createElement(je,null),three:l.a.createElement(ye,null),four:l.a.createElement(xe,null),five:l.a.createElement(Oe,null)}))),l.a.createElement(m.a,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(d.a,null,l.a.createElement(h.a,{m:2,pt:1,style:{display:"flex",justifyContent:"center"}},l.a.createElement(b.a,{pt:10,variant:"contained",color:"primary",onClick:function(){ve("Generate")}},"Generate PDF")),l.a.createElement(h.a,{m:2,pt:1,style:{display:"flex",justifyContent:"center"}},l.a.createElement(b.a,{pt:1,variant:"contained",color:"primary",onClick:function(){ve("Download")}},"Download PDF")),l.a.createElement(h.a,{m:2,pt:1,style:{display:"flex",justifyContent:"center"}},l.a.createElement(b.a,{pt:1,variant:"contained",color:"primary",onClick:function(){ve("Database")}},"Save PDF in Database"))))),l.a.createElement(p.a,{item:!0,xs:6},l.a.createElement("h3",null,oe),l.a.createElement("iframe",{src:a,height:"100%",width:"100%"})))}function X(e){var t=e.match.params,a=Object(n.useState)(""),r=Object(u.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),f=s[0],h=s[1],v=Object(n.useState)(""),j=Object(u.a)(v,2),y=j[0],x=j[1],O=Object(n.useState)(""),w=Object(u.a)(O,2),S=w[0],C=w[1],k=Object(n.useState)(""),F=Object(u.a)(k,2),N=F[0],W=F[1];Object(n.useEffect)((function(){g.a.get("/api/experience/"+"".concat(t.id)).then((function(e){i(e.data.name),h(e.data.position),x(e.data.firstLine),C(e.data.secondLine),W(e.data.thirdLine)})).catch((function(e){return alert(e)}))}),[]);return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"Name",value:c,defaultValue:c,onChange:function(e){return i(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"Position",value:f,defaultValue:f,onChange:function(e){return h(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"First Line",value:y,defaultValue:y,onChange:function(e){return x(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"Second Line",value:S,defaultValue:S,onChange:function(e){return C(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:12},l.a.createElement(E.a,{id:"standard-helperText",label:"Third Line",value:N,defaultValue:N,onChange:function(e){return W(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{alignContent:"center",item:!0,md:12},l.a.createElement(b.a,{style:{backgroundImage:"linear-gradient( 95deg,#a8ff78 0%,#a8ff78 50%,#78ffd6 100%)",color:"black"},onClick:function(e){e.preventDefault();var a={id:t.id,name:c,position:f,firstLine:y,secondLine:S,thirdLine:N};g.a.post("/api/experience/update/"+"".concat(t.id),a).then((function(e){alert(e.data),window.location.href="http://localhost:3000/experience"})).catch((function(e){return console.log(e)}))}}," Submit ")))))}function Z(e){var t=e.match.params,a=Object(n.useState)(""),r=Object(u.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),f=s[0],h=s[1],v=Object(n.useState)(""),j=Object(u.a)(v,2),y=j[0],x=j[1];Object(n.useEffect)((function(){g.a.get("/api/award/"+"".concat(t.id)).then((function(e){i(e.data.name),h(e.data.what),x(e.data.year)})).catch((function(e){return alert(e)}))}),[]);return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"Name",value:c,defaultValue:c,onChange:function(e){return i(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"What",value:f,defaultValue:f,onChange:function(e){return h(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"Year",value:y,defaultValue:y,onChange:function(e){return x(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{alignContent:"center",item:!0,md:12},l.a.createElement(b.a,{style:{backgroundImage:"linear-gradient( 95deg,#a8ff78 0%,#a8ff78 50%,#78ffd6 100%)",color:"black"},onClick:function(e){e.preventDefault();var a={id:t.id,name:c,what:f,year:y};g.a.post("/api/award/update/"+"".concat(t.id),a).then((function(e){alert(e.data),window.location.href="http://localhost:3000/award"})).catch((function(e){return console.log(e)}))}}," Submit ")))))}function ee(e){var t=e.match.params,a=Object(n.useState)(""),r=Object(u.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),f=s[0],h=s[1],v=Object(n.useState)(""),j=Object(u.a)(v,2),y=j[0],x=j[1],O=Object(n.useState)(""),w=Object(u.a)(O,2),S=w[0],C=w[1];Object(n.useEffect)((function(){g.a.get("/api/projects/"+"".concat(t.id)).then((function(e){i(e.data.name),h(e.data.what),x(e.data.position),C(e.data.tools)})).catch((function(e){return alert(e)}))}),[]);return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"Name",value:c,defaultValue:c,onChange:function(e){return i(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"Position",value:y,defaultValue:y,onChange:function(e){return x(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"What",value:f,defaultValue:f,onChange:function(e){return h(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"standard-helperText",label:"Tools",value:S,defaultValue:S,onChange:function(e){return C(e.target.value)},variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{alignContent:"center",item:!0,md:12},l.a.createElement(b.a,{style:{backgroundImage:"linear-gradient( 95deg,#a8ff78 0%,#a8ff78 50%,#78ffd6 100%)",color:"black"},onClick:function(e){e.preventDefault();var a={id:t.id,name:c,what:f,position:y,tools:S};g.a.post("/api/projects/update/"+"".concat(t.id),a).then((function(e){alert(e.data),window.location.href="http://localhost:3000/projects"})).catch((function(e){return console.log(e)}))}}," Submit ")))))}function te(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1];return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(s.a,{variant:"h3",gutterBottom:!0},"Add Frameworks"),l.a.createElement(f.a,{my:6}),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:a};g.a.post("/api/framework/add",t).then((function(e){return alert(e.data)}))}},l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"Name",label:"Name",value:a,onChange:function(e){return r(e.target.value)},variant:"outlined",fullWidth:!0}))),l.a.createElement(p.a,{container:!0,spacing:8},l.a.createElement(h.a,{pt:10,mx:"auto"},l.a.createElement(b.a,{style:{margin:5},color:"primary",variant:"contained",type:"submit"},"Save"),l.a.createElement("br",null)))),l.a.createElement("br",null)))}function ae(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1];return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(s.a,{variant:"h3",gutterBottom:!0},"Add Languages"),l.a.createElement(f.a,{my:6}),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:a};g.a.post("/api/languages/add",t).then((function(e){return alert(e.data)}))}},l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},l.a.createElement(E.a,{id:"outlined-name",name:"Name",label:"Name",value:a,onChange:function(e){return r(e.target.value)},variant:"outlined",fullWidth:!0}))),l.a.createElement(p.a,{container:!0,spacing:8},l.a.createElement(h.a,{pt:10,mx:"auto"},l.a.createElement(b.a,{style:{margin:5},color:"primary",variant:"contained",type:"submit"},"Save"),l.a.createElement("br",null)))),l.a.createElement("br",null)))}function ne(e){return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement("h2",null,e.project.name),l.a.createElement("iframe",{src:e.project.data_uri,height:"500",width:"100%"}),l.a.createElement(b.a,{style:{color:"red"},onClick:function(){return t=e.project._id,void e.onDelete(t);var t}},"Delete "),l.a.createElement(b.a,{style:{color:"yellow"},onClick:function(){return t=e.project._id,void(window.location.href="http://localhost:3000/experience/"+t);var t}},"Update ")))}function le(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=function(e){g.a.delete("/api/resume/"+e).then((function(e){alert(e.data),window.location.reload(!1)}))};return Object(n.useEffect)((function(){g.a.get("/api/resume").then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{container:!0,spacing:2},l.a.createElement(p.a,{item:!0,md:6},a.map((function(e){return l.a.createElement(ne,{onDelete:c,project:e})})))),l.a.createElement(i.b,{to:"/addresume"},l.a.createElement(w.a,{style:{float:"right"},color:"primary","aria-label":"add"},l.a.createElement(C.a,null)))))}var re=function(){return l.a.createElement(i.a,null,l.a.createElement(o,null),l.a.createElement("br",null),l.a.createElement(O.a,{path:"/addproject",exact:!0,component:j}),l.a.createElement(O.a,{path:"/addframework",exact:!0,component:te}),l.a.createElement(O.a,{path:"/addlanguages",exact:!0,component:ae}),l.a.createElement(O.a,{path:"/addaward",exact:!0,component:y}),l.a.createElement(O.a,{path:"/addexperience",exact:!0,component:x}),l.a.createElement(O.a,{path:"/resume",exact:!0,component:le}),l.a.createElement(O.a,{path:"/projects",exact:!0,component:F}),l.a.createElement(O.a,{path:"/award",exact:!0,component:W}),l.a.createElement(O.a,{path:"/experience",exact:!0,component:T}),l.a.createElement(O.a,{path:"/",exact:!0,component:K}),l.a.createElement(O.a,{path:"/experience/:id",component:X}),l.a.createElement(O.a,{path:"/award/:id",component:Z}),l.a.createElement(O.a,{path:"/projects/:id",component:ee}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a(112)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.76ccbba0.chunk.js.map