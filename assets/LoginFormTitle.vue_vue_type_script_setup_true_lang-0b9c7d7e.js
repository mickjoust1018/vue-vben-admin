var I=Object.defineProperty;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(e,s,o)=>s in e?I(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,p=(e,s)=>{for(var o in s||(s={}))T.call(s,o)&&h(e,o,s[o]);if(f)for(var o of f(s))w.call(s,o)&&h(e,o,s[o]);return e};var R=(e,s,o)=>new Promise((t,r)=>{var u=c=>{try{d(o.next(c))}catch(n){r(n)}},F=c=>{try{d(o.throw(c))}catch(n){r(n)}},d=c=>c.done?t(c.value):Promise.resolve(c.value).then(u,F);d((o=o.apply(e,s)).next())});import{j as O}from"./index-59f8fabe.js";import{k as S,e as i,u as l,d as b,_ as x,$ as E,a1 as j}from"./vue-bfa52d01.js";var a=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(a||{});const y=S(0);function B(){function e(t){y.value=t}const s=i(()=>y.value);function o(){e(0)}return{setLoginState:e,getLoginState:s,handleBackLogin:o}}function A(e){const s=i(()=>{var r;const t=l(e);return(r=t==null?void 0:t.validate)!=null?r:u=>Promise.resolve()});function o(){return R(this,null,function*(){const t=l(e);return t?yield t.validate():void 0})}return{validate:s,validForm:o}}function M(e){const{t:s}=O(),o=i(()=>_(s("sys.login.accountPlaceholder"))),t=i(()=>_(s("sys.login.passwordPlaceholder"))),r=i(()=>_(s("sys.login.smsPlaceholder"))),u=i(()=>_(s("sys.login.mobilePlaceholder"))),F=(n,m)=>R(this,null,function*(){return m?Promise.resolve():Promise.reject(s("sys.login.policyPlaceholder"))}),d=n=>(m,g)=>R(this,null,function*(){return g?g!==n?Promise.reject(s("sys.login.diffPwd")):Promise.resolve():Promise.reject(s("sys.login.passwordPlaceholder"))});return{getFormRules:i(()=>{const n=l(o),m=l(t),g=l(r),v=l(u),P={sms:g,mobile:v};switch(l(y)){case 1:return p({account:n,password:m,confirmPassword:[{validator:d(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:F,trigger:"change"}]},P);case 2:return p({account:n},P);case 3:return P;default:return{account:n,password:m}}})}}function _(e){return[{required:!0,message:e,trigger:"change"}]}const G={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},D=b({__name:"LoginFormTitle",setup(e){const{t:s}=O(),{getLoginState:o}=B(),t=i(()=>({[a.RESET_PASSWORD]:s("sys.login.forgetFormTitle"),[a.LOGIN]:s("sys.login.signInFormTitle"),[a.REGISTER]:s("sys.login.signUpFormTitle"),[a.MOBILE]:s("sys.login.mobileSignInFormTitle"),[a.QR_CODE]:s("sys.login.qrSignInFormTitle")})[l(o)]);return(r,u)=>(x(),E("h2",G,j(l(t)),1))}});export{a as L,D as _,M as a,A as b,B as u};
