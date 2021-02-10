(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){e.exports=a(138)},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=a(11),s=a(42),l=a(85),u=a(10),p=a(16),d=a(18),m=a(23),b=a(166),g=a(94),f=a(168),h=a(70),v=a.n(h),E=a(90),x=a.n(E),w=a(7),y=a(164),O=Object(y.a)((function(e){var t;return{root:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",backgroundColor:"#F79460",padding:e.spacing(1,0)},menuButton:Object(w.a)({display:"none"},e.breakpoints.down("xs"),{width:"65%",height:"65%",display:"block",margin:"auto"}),titleHeader:{display:"flex",alignItems:"center",margin:e.spacing(0,1),"& .MuiTypography-root":Object(w.a)({padding:e.spacing(0,1)},e.breakpoints.down("xs"),{display:"none"}),"& .logo":Object(w.a)({height:"70px",width:"70px",borderRadius:"25px"},e.breakpoints.down("xs"),{alignItems:"center"})},container:Object(w.a)({display:"flex",justifyContent:"space-around","& .MuiButtonBase-root":{textAlign:"center",color:"white"}},e.breakpoints.down("xs"),{display:"none"}),account:{display:"flex",justifyContent:"flex-end",alignItems:"center",color:"white"},accountTitle:(t={height:"100%",width:"150px",display:"flex"},Object(w.a)(t,e.breakpoints.down("xs"),{width:"50px",height:"50px",margin:"auto"}),Object(w.a)(t,"& .MuiButtonBase-root",Object(w.a)({},e.breakpoints.down("xs"),{display:"none"})),Object(w.a)(t,"& .accountIcon",Object(w.a)({marginLeft:e.spacing(1)},e.breakpoints.up("sm"),{display:"none"})),t),accountMenu:{position:"absolute",right:"1%",top:"75%",width:"120px",border:"1px solid black",backgroundColor:"#4A4953",borderRadius:"15px",color:"white","& .MuiTypography-root":{display:"flex",justifyContent:"center",padding:e.spacing(1)},"& .logOutButton":{fontSize:"18px",color:"white"}}}})),j=a(6),k=a.n(j),C=a(12),N=a(36),I=a.n(N),S=new m.a,D=S.get("token"),T=I.a.create({baseURL:"https://delnero-review-app.herokuapp.com/user",headers:{Authorization:"Bearer ".concat(D)}}),R=function(e,t,a){return function(){var n=Object(C.a)(k.a.mark((function n(r){var o,c,i,s;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T.post("/",{name:e,email:t,password:a});case 3:o=n.sent,c=o.data,i=c.token,s=c.user,S.set("token",i,{path:"/"}),S.set("user",s,{path:"/"}),r({type:"SIGN_UP",payload:s}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},B=function(e,t){return function(){var a=Object(C.a)(k.a.mark((function a(n){var r,o,c,i;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T.post("/login",{email:e,password:t});case 3:r=a.sent,o=r.data,c=o.token,i=o.user,S.set("token",c,{path:"/"}),S.set("user",i,{path:"/"}),n({type:"SIGN_IN",payload:i}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.log(a.t0.message);case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()},A=function(e,t,a){return function(){var n=Object(C.a)(k.a.mark((function n(r){var o,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T.patch("/me",{currentPassword:e,newPassword:t,confirmNewPassword:a});case 3:o=n.sent,c=o.data.user,r({type:"UPDATE_USER",payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},L=Object(n.createContext)(),F=a(89),P=a.n(F);var M=function(){var e=O(),t=Object(i.c)((function(e){return e.user})).isLoggedIn,a=Object(n.useContext)(L),o=a.isSidebarOpen,c=a.setIsSidebarOpen,s=a.isAccMenuOpen,l=a.setIsAccMenuOpen,u=Object(i.b)(),p=Object(n.useRef)(null);!function(e){var t=Object(n.useContext)(L),a=t.isAccMenuOpen,r=t.setIsAccMenuOpen;Object(n.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&r(!1)}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[a,e,r])}(p);return r.a.createElement(b.a,{position:"relative",className:e.root},r.a.createElement(x.a,{onClick:function(){return c(!o)},className:e.menuButton}),r.a.createElement("div",{className:e.titleHeader},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{src:P.a,alt:"LOGO",className:"logo"})),r.a.createElement(g.a,{variant:"h4",align:"center"},"Did we hear?")),r.a.createElement("div",{className:e.container},r.a.createElement(f.a,{href:"/why"},"Why we do this"),r.a.createElement(f.a,{href:"/"},"Products"),t&&r.a.createElement(f.a,{href:"/product"},"Add Product")),t?r.a.createElement("div",{className:e.account},r.a.createElement("div",{ref:p,onClick:function(e){return l(e.currentTarget)},className:e.accountTitle},r.a.createElement(v.a,{style:{fontSize:40},className:"accountIcon"}),r.a.createElement(f.a,{startIcon:r.a.createElement(v.a,null),size:"large"},"Account"),!!s&&r.a.createElement("div",{className:e.accountMenu},r.a.createElement(g.a,{variant:"h5",component:d.b,to:"/user",style:{textDecoration:"none",color:"white",borderBottom:"1px solid black"}},"Account"),r.a.createElement(f.a,{className:"logOutButton",component:g.a,onClick:function(){return u(function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.post("/logout");case 3:a=e.sent,n=a.data,S.remove("token",{path:"/"}),S.remove("user",{path:"/"}),window.location.href="/",t({type:"SIGN_OUT",payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())},size:"large"},"Log out")))):r.a.createElement(f.a,{className:e.button,component:d.b,to:"/sign-in"},"Sign in"))},W=Object(y.a)((function(e){return{root:{height:"100px",backgroundColor:"black",color:"white",textAlign:"center"}}})),U=function(){var e=W();return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{variant:"h4"},"Made by PDN"))},_=a(61),z=a.n(_),G=Object(y.a)((function(e){var t,a,n,r;return{root:(t={display:"flex",asignItems:"center",textDecoration:"none",color:"black",backgroundColor:"#FFFFFF",borderRadius:"50px 25px 25px 25px",marginBottom:e.spacing(1)},Object(w.a)(t,e.breakpoints.down("xs"),{flexDirection:"column",height:"220px",width:"114px",alignItems:"center"}),Object(w.a)(t,e.breakpoints.up("sm"),{flexDirection:"row",height:"180px",width:"400px",justifyContent:"space-around"}),t),header:(a={display:"flex",width:"100%",minHeight:"125px",justifyContent:"center"},Object(w.a)(a,e.breakpoints.down("xs"),{alignItems:"flex-end"}),Object(w.a)(a,e.breakpoints.up("sm"),{alignItems:"center"}),a),image:(n={borderRadius:"20px"},Object(w.a)(n,e.breakpoints.down("xs"),{maxHeight:"100px",width:"100px"}),Object(w.a)(n,e.breakpoints.up("sm"),{maxHeight:"120px",maxWidth:"120px"}),n),content:(r={display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center"},Object(w.a)(r,e.breakpoints.down("xs"),{alignItems:"center","& .prodTitle":{textAlign:"center"},"& .prodAuthor, .prodDescription":{display:"none"}}),Object(w.a)(r,e.breakpoints.up("sm"),{alignItems:"flex-end",marginRight:e.spacing(2),"& .prodTitle":{textAlign:"end",fontSize:"110%",fontWeight:600,width:"100%"}}),r)}})),H=function(e){var t=e.product,a=t.author,o=t.description,c=t.name,i=t._id,s=t.image,l=(t.reviews,G());return Object(n.useEffect)((function(){}),[]),r.a.createElement(d.b,{to:"/".concat(i,"/details"),className:l.root},r.a.createElement("div",{className:l.header},r.a.createElement("img",{alt:" ",src:s||"https://via.placeholder.com/150",title:"Phto",className:l.image})),r.a.createElement("div",{className:l.content},r.a.createElement(g.a,{className:"prodTitle",variant:"body1"},c),r.a.createElement(g.a,{className:"prodAuthor"},"Added by: ",a),r.a.createElement(g.a,{className:"prodDescription"},o)))},q=Object(y.a)((function(e){var t;return{root:{display:"flex",flexDirection:"column",width:"100%"},button:{backgroundColor:"#203061",borderRadius:"25px",color:"white",height:"50px",width:"200px",marginLeft:e.spacing(2),marginBottom:e.spacing(2),"& .MuiButton-label":{fontSize:"19px","& .MuiButton-startIcon":{border:"1px solid white",borderRadius:"30px"}}},grid:(t={display:"grid",width:"100%",justifyItems:"center"},Object(w.a)(t,e.breakpoints.down("xs"),{gridTemplateColumns:"repeat(auto-fit, minmax(115px, 1fr))"}),Object(w.a)(t,e.breakpoints.up("sm"),{gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))"}),t)}})),Y=(new m.a).get("token"),V=I.a.create({baseURL:"https://delnero-review-app.herokuapp.com/products",headers:{Authorization:"Bearer ".concat(Y)}}),J=function(){var e=Object(i.c)((function(e){return e.products})),t=Object(i.b)(),a=q();return Object(n.useEffect)((function(){t(function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.get("/");case 3:a=e.sent,n=a.data,t({type:"GET_PRODUCTS",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),r.a.createElement("div",{className:a.root},r.a.createElement(f.a,{component:d.b,to:"/product",startIcon:r.a.createElement(z.a,null),className:a.button},"Add Product"),r.a.createElement("div",{className:a.grid},e.map((function(e,t){return r.a.createElement(H,{product:e,key:e._id})}))))},K=a(180),Q=Object(y.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"150px",color:"black",border:"1px solid red",backgroundColor:"#FFFFFF",borderRadius:"25px",marginBottom:e.spacing(1),padding:e.spacing(2),"& .MuiTypography-root":{marginBottom:e.spacing(1)},"& .MuiRating-root":{marginBottom:e.spacing(2)}}}})),X=function(e){e.prodId;var t=e.review,a=t._id,n=t.author,o=t.rating,c=t.content,i=Q();return r.a.createElement("div",{key:a,className:i.root},r.a.createElement(g.a,{variant:"body1",color:"textSecondary",style:{padding:0,lineHeight:1}},n),r.a.createElement(K.a,{value:o,readOnly:!0}),r.a.createElement(g.a,{variant:"body1",style:{padding:0,lineHeight:1}},c))},Z=a(91),$=a.n(Z),ee=a(176),te=Object(y.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%","& .title":{color:"#203061"}},paper:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"white",borderRadius:"20px",margin:e.spacing(1),padding:e.spacing(1,0)},container:{display:"flex",flexDirection:"column",color:"black",padding:e.spacing(1.5,2),"& .MuiTextField-root":{width:"100%",marginBottom:e.spacing(1),"& .MuiInputBase-root":{borderRadius:"10px"}}},fileInput:{display:"flex",alignItems:"center",justifyContent:"center",color:"#203061",marginTop:e.spacing(2),"& .MuiTypography-root, input ":{margin:e.spacing(1)},"& input ":{color:"black"}},button:{height:"50px",border:"2px solid #84D7D2",borderRadius:"25px",margin:e.spacing(2),backgroundColor:"#F69560"}}})),ae=(new m.a).get("token"),ne=function(){var e=te(),t=Object(p.g)().id,a=Object(i.c)((function(e){return e.products.find((function(e){return e._id===t}))})),o=Object(n.useState)((null===a||void 0===a?void 0:a.name)||""),c=Object(u.a)(o,2),s=c[0],l=c[1],d=Object(n.useState)((null===a||void 0===a?void 0:a.brand)||""),m=Object(u.a)(d,2),b=m[0],h=m[1],v=Object(n.useState)((null===a||void 0===a?void 0:a.model)||""),E=Object(u.a)(v,2),x=E[0],w=E[1],y=Object(n.useState)((null===a||void 0===a?void 0:a.description)||""),O=Object(u.a)(y,2),j=O[0],N=O[1],I=Object(n.useState)((null===a||void 0===a?void 0:a.image)||[]),S=Object(u.a)(I,2),D=S[0],T=S[1],R=Object(i.b)();ae||(window.location.href="/sign-in");return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{variant:"h3",className:"title"},t?"Edit product":"Add product"),r.a.createElement("div",{className:e.paper},r.a.createElement("form",{className:e.container},r.a.createElement(ee.a,{label:"Name",variant:"outlined",value:s,onChange:function(e){return l(e.target.value)}}),r.a.createElement(ee.a,{label:"Brand",variant:"outlined",value:b,onChange:function(e){return h(e.target.value)}}),r.a.createElement(ee.a,{label:"Model/Part #",variant:"outlined",value:x,onChange:function(e){return w(e.target.value)}}),r.a.createElement(ee.a,{label:"Brief Description",multiline:!0,rows:4,value:j,onChange:function(e){return N(e.target.value)},variant:"outlined"}),r.a.createElement("div",{className:e.fileInput},r.a.createElement(g.a,{variant:"body1"},"Add Image"),r.a.createElement($.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return T(t)}}))),r.a.createElement(f.a,{className:e.button,onClick:function(e){R(t?function(e,t){return function(){var a=Object(C.a)(k.a.mark((function a(n){var r,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.patch("/".concat(e),t);case 3:r=a.sent,o=r.data,n({type:"UPDATE_PRODUCT",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,{name:s,description:j,brand:b}):function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.post("/",e);case 3:n=t.sent,r=n.data,window.location.href="/",a({type:"ADD_PRODUCT",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}({name:s,brand:b,model:x,description:j,image:D}))}},t?"Edit product":"Create product")))},re=a(169),oe=Object(y.a)((function(e){var t,a,n,r,o,c;return{root:{display:"flex",flexDirection:"column",padding:e.spacing(0,1),width:"100%"},content:Object(w.a)({display:"flex",alignItems:"center",backgroundColor:e.palette.background.paper,border:"1px solid white",borderRadius:"25px",margin:e.spacing(1,0),padding:e.spacing(1)},e.breakpoints.down("xs"),{flexDirection:"column"}),image:(t={borderRadius:"30px"},Object(w.a)(t,e.breakpoints.up("sm"),{maxHeight:"300px",maxWidth:"300px"}),Object(w.a)(t,e.breakpoints.down("sm"),{maxHeight:"200",maxWidth:"200px"}),t),details:(n={display:"flex",flex:1,flexDirection:"column",width:"100%",height:"100%"},Object(w.a)(n,e.breakpoints.up("sm"),{alignItems:"flex-end",justifyContent:"center",marginRight:e.spacing(5),fontSize:"300%"}),Object(w.a)(n,e.breakpoints.down("xs"),{alignItems:"center",marginTop:e.spacing(3),fontSize:"150%"}),Object(w.a)(n,"& .prodName",(a={color:"red",fontWeight:"600"},Object(w.a)(a,e.breakpoints.up("sm"),{textAlign:"end",justifyItem:"flex-start",fontSize:"100%"}),Object(w.a)(a,e.breakpoints.down("xs"),{padding:e.spacing(0,3),textAlign:"center",fontSize:"110%"}),a)),Object(w.a)(n,"& .author",{display:"flex",textAlign:"end"}),n),detailButtons:(r={display:"flex"},Object(w.a)(r,e.breakpoints.up("sm"),{marginTop:"auto"}),Object(w.a)(r,e.breakpoints.down("xs"),{marginTop:e.spacing(5),width:"100%",justifyContent:"center"}),Object(w.a)(r,"& .MuiButton-root",{borderRadius:"20px",marginLeft:e.spacing(1)}),Object(w.a)(r,"& .editButton",{border:"1px solid #F69560",backgroundColor:"#D8D9DB"}),Object(w.a)(r,"& .deleteButton",{padding:e.spacing(1,3),color:"white",fontWeight:"bold",backgroundColor:"#F70913"}),r),formButton:{marginBottom:"15px","& .addReview":(o={border:"1px solid white"},Object(w.a)(o,e.breakpoints.down("xs"),{height:"95px",width:"95px",borderRadius:"50%"}),Object(w.a)(o,"& MuiButton-label",{wordWrap:"normal"}),o)},reviewForm:(c={display:"flex",flexDirection:"column"},Object(w.a)(c,e.breakpoints.down("xs"),{width:"100%"}),Object(w.a)(c,e.breakpoints.up("sm"),{width:"500px"}),Object(w.a)(c,"& .MuiRating-root",{marginBottom:"10px"}),Object(w.a)(c,"& .MuiFormControl-root",{backgroundColor:"white",border:"1px solid #C61362",borderRadius:"8px",marginBottom:"10px","& .MuiInputBase-input":{margin:"5px"}}),Object(w.a)(c,"& .MuiButton-root",{width:"95px"}),c)}})),ce=(new m.a).get("token"),ie=I.a.create({baseURL:"https://delnero-review-app.herokuapp.com/products",headers:{Authorization:"Bearer ".concat(ce)}}),se=(new m.a).get("token"),le=I.a.create({baseURL:"https://delnero-review-app.herokuapp.com/products",headers:{Authorization:"Bearer ".concat(se)}}),ue=new m.a,pe=function(){var e=Object(p.g)().id,t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(!1),l=Object(u.a)(s,2),m=l[0],b=l[1],h=Object(n.useState)(0),v=Object(u.a)(h,2),E=v[0],x=v[1],w=Object(n.useState)(""),y=Object(u.a)(w,2),O=y[0],j=y[1],N=Object(i.c)((function(e){return e.product})),I=Object(i.c)((function(e){return e.user})).isLoggedIn,S=oe(),D=Object(i.b)();Object(n.useEffect)((function(){D(function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){var n,r,o,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie.get("/".concat(e));case 2:return n=t.sent,r=n.data,t.next=6,ie.get("/".concat(r._id,"/reviews"));case 6:o=t.sent,c=o.data,r.reviews=c,a({type:"GET_PRODUCT",payload:r});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),I&&ue.get("user").name===N.author?b(!0):b(!1)}),[e,D,I,N.author]);var T=function(e){return D(function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.delete("/".concat(e));case 3:window.location.href="/",a({type:"DELETE_PRODUCT",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e))},R=function(){return D(function(e,t){return function(){var a=Object(C.a)(k.a.mark((function a(n){var r,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,le.post("/".concat(e,"/reviews"),t);case 3:r=a.sent,o=r.data,n({type:"ADD_REVIEW",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(e,{rating:E,content:O}))};return N.name?r.a.createElement("div",{className:S.root},r.a.createElement("div",{className:S.content},r.a.createElement("div",null,r.a.createElement("img",{alt:"",src:N.image||"https://via.placeholder.com/150",title:"Photo",className:S.image})),r.a.createElement("div",{className:S.details},r.a.createElement(g.a,{className:"prodName",variant:"body1"},N.name),r.a.createElement(g.a,{variant:"subtitle1",color:"textSecondary"},"Description"),r.a.createElement(g.a,{variant:"body1"},N.description),m?r.a.createElement("div",{className:S.detailButtons},r.a.createElement(f.a,{className:"editButton",component:d.b,to:"/product/".concat(e)},"Edit"),r.a.createElement(f.a,{className:"deleteButton",onClick:function(){return T(e)}},"Delete")):r.a.createElement(g.a,{variant:"body1",color:"textSecondary",className:"author"},"Added by: ",N.author))),r.a.createElement("div",{className:S.formButton},I?r.a.createElement(f.a,{size:"large",color:"secondary",variant:"contained",className:"addReview",onClick:function(){return c(!o)}},"Write Review"):r.a.createElement(f.a,{variant:"contained",className:"signIn",component:d.b,to:"/sign-in"},"Sign in to write review")),o&&r.a.createElement("div",{className:S.reviewForm},r.a.createElement(g.a,{variant:"h5"},"Rating"),r.a.createElement(K.a,{value:E,name:"unique-rating",onChange:function(e,t){return x(t)}}),r.a.createElement(ee.a,{value:O,onChange:function(e){return j(e.target.value)},multiline:!0,rows:4,placeholder:"Write your review...",InputProps:{disableUnderline:!0}}),r.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){return R()}},"Submit")),N.reviews.map((function(t,a){return r.a.createElement("div",{className:S.reviews,key:a},r.a.createElement(X,{review:t,prodId:e}))}))):r.a.createElement(re.a,null)},de=a(170),me=a(171),be=a(181),ge=a(172),fe=a(173),he=a(177),ve=a(46),Ee=a.n(ve),xe=Object(y.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white",borderRadius:"20px",padding:e.spacing(3),marginTop:e.spacing(2)},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},button:{backgroundColor:"#203061",borderRadius:"10px",color:"white",margin:e.spacing(3,0,2)}}})),we=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user})).user,a=Object(n.useState)(""),o=Object(u.a)(a,2),c=o[0],s=o[1],l=Object(n.useState)(""),p=Object(u.a)(l,2),d=p[0],m=p[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),v=h[0],E=h[1],x=Object(n.useState)(""),w=Object(u.a)(x,1)[0],y=xe();Object(n.useEffect)((function(){t.name&&(window.location.href="/")}),[t]);var O=function(){var t=Object(C.a)(k.a.mark((function t(a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e(R(c,d,v));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(de.a,{component:"main",maxWidth:"xs"},r.a.createElement(me.a,null),r.a.createElement("div",{className:y.paper},r.a.createElement(be.a,{className:y.avatar},r.a.createElement(Ee.a,null)),r.a.createElement(g.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:y.form,onSubmit:O},r.a.createElement(ge.a,{container:!0,spacing:2},r.a.createElement(ge.a,{item:!0,xs:12},r.a.createElement(ee.a,{variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Full Name",name:"name",autoComplete:"name",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement(ge.a,{item:!0,xs:12},r.a.createElement(ee.a,{error:!!w.email,helperText:w.email,variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:d,onChange:function(e){return m(e.target.value)}})),r.a.createElement(ge.a,{item:!0,xs:12},r.a.createElement(ee.a,{error:!!w.password,helperText:w.password,variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:v,onChange:function(e){return E(e.target.value)}}))),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:y.button},"Sign Up"),r.a.createElement(ge.a,{container:!0,justify:"center"},r.a.createElement(ge.a,{item:!0},r.a.createElement(fe.a,{href:"/sign-in",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(he.a,{mt:5},r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(fe.a,{color:"inherit",href:"https://material-ui.com/"},"Product Review Site")," ",(new Date).getFullYear(),".")))},ye=a(174),Oe=a(179),je=Object(y.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white",borderRadius:"20px",padding:e.spacing(3),marginTop:e.spacing(2)},avatar:{backgroundColor:e.palette.secondary.main},form:{marginTop:e.spacing(1)},button:{backgroundColor:"#203061",borderRadius:"10px",color:"white",margin:e.spacing(3,0,2)}}})),ke=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user})).user,a=Object(n.useState)(""),o=Object(u.a)(a,2),c=o[0],s=o[1],l=Object(n.useState)(""),p=Object(u.a)(l,2),d=p[0],m=p[1],b=Object(n.useState)(!1),h=Object(u.a)(b,1)[0];Object(n.useEffect)((function(){t.name&&(window.location.href="/")}),[t]);var v=function(){var t=Object(C.a)(k.a.mark((function t(a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e(B(c,d));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=je();return r.a.createElement(de.a,{component:"main",maxWidth:"xs"},r.a.createElement(me.a,null),r.a.createElement("div",{className:E.paper},r.a.createElement(be.a,{className:E.avatar},r.a.createElement(Ee.a,null)),r.a.createElement(g.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:E.form,onSubmit:v},r.a.createElement(ee.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:h?"No account with this email address":"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement(ee.a,{error:h,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:h?"Incorrect password":"Password",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){return m(e.target.value)}}),r.a.createElement(ye.a,{control:r.a.createElement(Oe.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,className:E.button},"Sign In"),r.a.createElement(ge.a,{container:!0},r.a.createElement(ge.a,{item:!0,xs:!0},r.a.createElement(fe.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(ge.a,{item:!0},r.a.createElement(fe.a,{href:"/sign-up",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(he.a,{mt:8},r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(fe.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")))},Ce=a(178),Ne=Object(y.a)((function(e){return{container:{display:"flex",alignContent:"center",flexDirection:"row"},typography:{padding:e.spacing(2)}}})),Ie=function(){var e=Object(i.b)(),t=Ne(),a=Object(n.useState)(null),o=Object(u.a)(a,2),c=o[0],s=o[1],l=Object(i.c)((function(e){return e.user})).user,p=Boolean(c),d=p?"simple-popover":void 0,m=function(){var t=Object(C.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.delete("/me");case 3:a=e.sent,n=a.data.user,console.log(n),S.remove("token",{path:"/"}),S.remove("user",{path:"/"}),t({type:"DELETE_USER",payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Account Details"),r.a.createElement("h2",null,"Email: ")," ",l.email,r.a.createElement(f.a,{href:"/password",variant:"contained",color:"primary"},"Change your password"),r.a.createElement(f.a,{"aria-describedby":d,variant:"contained",color:"primary",onClick:function(e){s(e.currentTarget)}},"Delete Account"),r.a.createElement(Ce.a,{id:d,open:p,anchorEl:c,onClose:function(){s(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(g.a,{className:t.typography},"Are you sure you want to delete your account?"),r.a.createElement(f.a,{"aria-describedby":d,variant:"contained",color:"primary",onClick:function(){return m()}},"Delete Account")),r.a.createElement("h2",null,"Products you've added:"),r.a.createElement(ge.a,{container:!0,spacing:10,className:t.container},l.products&&l.products.map((function(e,t){return r.a.createElement(ge.a,{item:!0,xs:4,key:t},r.a.createElement(H,{product:e}))}))),r.a.createElement("h2",null,"Reviews you've added:"),r.a.createElement(ge.a,{container:!0,spacing:10,className:t.container},l.reviews&&l.reviews.map((function(e,t){return r.a.createElement(ge.a,{item:!0,xs:4,key:t},r.a.createElement(X,{review:e}))}))))},Se=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),De=function(){var e=Object(i.b)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),l=Object(u.a)(s,2),p=l[0],d=l[1],m=Object(n.useState)(""),b=Object(u.a)(m,2),h=b[0],v=b[1],E=Object(n.useState)(!1),x=Object(u.a)(E,1)[0],w=function(){var t=Object(C.a)(k.a.mark((function t(a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e(A(o,p,h)),window.location.href="/user";case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=Se();return r.a.createElement(de.a,{component:"main",maxWidth:"xs"},r.a.createElement(me.a,null),r.a.createElement("div",{className:y.paper},r.a.createElement(be.a,{className:y.avatar},r.a.createElement(Ee.a,null)),r.a.createElement(g.a,{component:"h1",variant:"h5"},"Change password"),r.a.createElement("form",{className:y.form,onSubmit:w},r.a.createElement(ee.a,{error:x,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:x?"Incorrect password":"Current password",type:"password",id:"password",autoComplete:"current-password",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement(ee.a,{error:x,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:x?"Incorrect password":"New password",type:"password",id:"password",autoComplete:"current-password",value:p,onChange:function(e){return d(e.target.value)}}),r.a.createElement(ee.a,{error:x,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:x?"Incorrect password":"Confirm new password",type:"password",id:"password",autoComplete:"current-password",value:h,onChange:function(e){return v(e.target.value)}}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:y.submit},"Change password"))),r.a.createElement(he.a,{mt:8},r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(fe.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")))},Te=Object(y.a)((function(){return{root:{position:"absolute",backgroundColor:"#FFFFFF",border:"1px solid black",borderRadius:"20px",width:"65%",height:"100%",zIndex:2}}})),Re=a(175),Be=a(92),Ae=a.n(Be),Le=a(65),Fe=a.n(Le),Pe=Object(y.a)((function(e){return{root:{},list:{display:"flex",flexDirection:"column",alignItems:"center","& .MuiButton-root":{height:"50px",width:"100%",boxShadow:"1px 1px #000000"}}}})),Me=function(){var e=Pe(),t=Object(n.useContext)(L),a=t.isSidebarOpen,o=t.setIsSidebarOpen;return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.icon,onClick:function(){return o(!a)}},r.a.createElement(Re.a,{size:"medium"},r.a.createElement(Ae.a,null))),r.a.createElement("div",{className:e.list},r.a.createElement(f.a,{component:d.b,to:"/"},r.a.createElement(Fe.a,null),r.a.createElement(g.a,{variant:"h5"},"Home")),r.a.createElement(f.a,{component:d.b,to:"/add-product"},r.a.createElement(z.a,null),r.a.createElement(g.a,{variant:"h5"},"Add Product")),r.a.createElement(f.a,{component:d.b,to:"/"},r.a.createElement(Fe.a,null),r.a.createElement(g.a,{variant:"h5"},"Categories")),r.a.createElement(f.a,{component:d.b,to:"/why"},r.a.createElement(Fe.a,null),r.a.createElement(g.a,{variant:"h5"},"Why"))))};var We=function(){var e=Te(),t=Object(n.useRef)(null);return function(e){var t=Object(n.useContext)(L),a=t.isSidebarOpen,r=t.setIsSidebarOpen;Object(n.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&(console.log("You clicked outside of me!"),r(!1))}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[a,r,e])}(t),r.a.createElement("div",{ref:t,className:e.root},r.a.createElement(Me,null))},Ue=Object(y.a)((function(e){return{root:{margin:e.spacing(0,5)}}})),_e=function(){var e=Ue();return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{variant:"h2",color:"primary"},"Your voice..."),r.a.createElement(g.a,{variant:"p",color:"primary"},'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'))},ze=Object(y.a)((function(e){return{app:{backgroundImage:"linear-gradient(180deg, #96deda, #50c9c3)"},body:{display:"flex",minHeight:"100vh",marginTop:e.spacing(2),marginBottom:e.spacing(10)}}})),Ge=new m.a,He=function(){var e=ze(),t=Object(p.f)(),a=Object(i.c)((function(e){return e.user})).isLoggedIn,o=Object(n.useState)(!1),c=Object(u.a)(o,2),s=c[0],l=c[1],m=Object(n.useState)(!1),b=Object(u.a)(m,2),g=b[0],f=b[1],h=Object(i.b)(),v=Ge.get("token");return Object(n.useEffect)((function(){(a||v)&&h(function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.get("/");case 3:a=e.sent,n=a.data,t({type:"GET_USER",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[h,a,v]),r.a.createElement(L.Provider,{value:{isSidebarOpen:s,setIsSidebarOpen:l,isAccMenuOpen:g,setIsAccMenuOpen:f}},r.a.createElement("div",{className:e.app},r.a.createElement(d.a,{value:t},r.a.createElement(M,null),s&&r.a.createElement(We,null),r.a.createElement("div",{className:e.body},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/product/:id?",component:ne}),r.a.createElement(p.a,{path:"/:id?/details",component:pe}),r.a.createElement(p.a,{path:"/sign-up",component:we}),r.a.createElement(p.a,{path:"/sign-in",component:ke}),r.a.createElement(p.a,{path:"/user",component:Ie}),r.a.createElement(p.a,{path:"/password",component:De}),r.a.createElement(p.a,{path:"/why",component:_e}),r.a.createElement(p.a,{exact:!0,path:"/",component:J}))),r.a.createElement(U,{className:e.footer}))))},qe=a(54),Ye=Object(s.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return t.payload;case"ADD_PRODUCT":return[t.payload].concat(Object(qe.a)(e));case"DELETE_PRODUCT":return e.filter((function(e){return e.id!==t.payload}));case"UPDATE_PRODUCT":return[t.payload].concat(Object(qe.a)(e));default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCT":return t.payload;default:return e}},reviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_REVIEWS":return t.payload;case"ADD_REVIEW":return[t.payload].concat(Object(qe.a)(e));default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{},isLoggedIn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":case"UPDATE_USER":case"SIGN_UP":case"SIGN_IN":return{user:t.payload,isLoggedIn:!!t.payload.name};case"SIGN_OUT":case"DELETE_USER":default:return e}}}),Ve=(a(137),Object(s.d)(Ye,Object(s.a)(l.a)));c.a.render(r.a.createElement(i.a,{store:Ve},r.a.createElement(He,null)),document.getElementById("root"))},89:function(e,t,a){e.exports=a.p+"static/media/logo.a8147754.png"}},[[108,1,2]]]);
//# sourceMappingURL=main.e8ddca86.chunk.js.map