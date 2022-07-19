(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(9),s=r.n(n),a=(r(16),r(1)),c=r.n(a),i=r(5),o=r.n(i),l=r(0),u=function(e){var t=Object(a.useRef)(""),r=Object(a.useRef)("");return Object(l.jsx)("div",{className:o.a.form,children:Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var s={userName:t.current.value,skills:r.current.value.split("/")};""!==s.userName&&""!==s.skills&&(e.afterAddUser(s),t.current.value="",r.current.value="")},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(l.jsx)("input",{id:"userName",type:"text",ref:t,placeholder:"your name"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"skills",children:"skills"}),Object(l.jsx)("input",{id:"skills",type:"text",ref:r,placeholder:"separate skills using ' / '"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"submit",className:e.sendingState[0]?o.a.btn__1:o.a.btn__2,children:e.sendingState[0]?"Send Data":"Sending ......."}),Object(l.jsxs)("p",{children:["Note: ",Object(l.jsx)("br",{}),'when adding username and skills, the data will send to Firebase : "https://normal-form-130f3-default-rtdb.firebaseio.com/usersData.json"']})]})]})})},d=r(11),b=r(3),j=r(8),h=r(10),f=function(e){var t=Object(a.useState)(!0),r=Object(b.a)(t,2),n=r[0],s=r[1],c=Object(a.useState)(null),i=Object(b.a)(c,2),o=i[0],l=i[1],u=Object(a.useCallback)(function(){var t=Object(h.a)(Object(j.a)().mark((function t(r){var n,a;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,fetch(r.url,{method:r.method?"POST":"GET",body:r.body?JSON.stringify(r.body):null,headers:r.headers?r.headers:{}});case 4:if(n=t.sent,console.log("response!"),n.ok){t.next=8;break}throw new Error("some thing is Wrong!");case 8:return t.next=10,n.json();case 10:a=t.sent,e(a),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),l(t.t0.message);case 17:s(!1),setTimeout((function(){"POST"===r.method&&s(!0)}),400);case 19:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return{loading:n,error:o,httpRequest:u}},m=r(7),O=r.n(m),p=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),r=t[0],n=t[1],s=Object(a.useCallback)((function(e){n([]);var t=function(t){n((function(r){return[].concat(Object(d.a)(r),[e[t]])}))};for(var r in e)t(r)}),[]),c=Object(a.useMemo)((function(){return{url:"https://normal-form-130f3-default-rtdb.firebaseio.com/usersData.json"}}),[]),i=f(s),o=i.loading,u=i.error,j=i.httpRequest,h=Object(a.useCallback)((function(){console.log("getDataHandler!"),j(c)}),[j,c]);return Object(a.useEffect)((function(){h()}),[h]),Object(l.jsxs)("div",{className:O.a.users,children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Note: ",Object(l.jsx)("br",{}),"the data which appear in this part is loading automatically, but if you adding new data from the first adding form, you must click to below button."]}),Object(l.jsx)("button",{onClick:h,children:"Get Data from Firebase"})]}),o&&!u&&Object(l.jsx)("h4",{children:"loading ......."}),u&&Object(l.jsx)("h4",{children:u}),Object(l.jsx)("div",{className:O.a.list,children:r.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.userName}),Object(l.jsx)("ul",{children:e.skills.map((function(e){return Object(l.jsx)("li",{children:e},e+Math.random())}))})]},Math.random())}))})]})};var x=function(){var e=f(),t=e.loading,r=e.error,n=e.httpRequest;return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)(u,{afterAddUser:function(e){n({url:"https://normal-form-130f3-default-rtdb.firebaseio.com/usersData.json",method:"POST",body:e,headers:{"Content-Type":"application/json"}})},sendingState:[t,r]}),Object(l.jsx)(p,{})]})};s.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))},5:function(e,t,r){e.exports={form:"AddUser_form__3_Mo7",btn__1:"AddUser_btn__1__1IAPv",btn__2:"AddUser_btn__2__2P5zh"}},7:function(e,t,r){e.exports={users:"Users_users__1OUl_",list:"Users_list__3cYRc"}}},[[18,1,2]]]);
//# sourceMappingURL=main.bb148fd3.chunk.js.map