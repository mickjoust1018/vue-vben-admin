var m=(t,o,e)=>new Promise((a,u)=>{var l=n=>{try{r(e.next(n))}catch(c){u(c)}},s=n=>{try{r(e.throw(n))}catch(c){u(c)}},r=n=>n.done?a(n.value):Promise.resolve(n.value).then(l,s);r((e=e.apply(t,o)).next())});import{t as $,j as B,l as b,_ as v,f as I,w as C}from"./index-59f8fabe.js";import{k as d,u as i,d as S,e as h,s as z,a7 as p,_,a8 as g,a9 as f,E as F,a1 as k,ac as y,ae as A,aa as N,R as T,ad as j,ag as D,f as O}from"./vue-bfa52d01.js";import{Z as P}from"./antd-2cb51430.js";import{u as R}from"./useFormItem-bb83f293.js";function E(t){const o=d(t),e=d(!1);let a;function u(){a&&window.clearInterval(a)}function l(){e.value=!1,u(),a=null}function s(){i(e)||a||(e.value=!0,a=setInterval(()=>{i(o)===1?(l(),o.value=t):o.value-=1},1e3))}function r(){o.value=t,l()}function n(){r(),s()}return $(()=>{r()}),{start:s,reset:r,restart:n,clear:u,stop:l,currentCount:o,isStart:e}}const V={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},L=S({name:"CountButton",components:{Button:P},props:V,setup(t){const o=d(!1),{currentCount:e,isStart:a,start:u,reset:l}=E(t.count),{t:s}=B(),r=h(()=>i(a)?s("component.countdown.sendText",[i(e)]):s("component.countdown.normalText"));z(()=>{t.value===void 0&&l()});function n(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&b(c)){o.value=!0;try{(yield c())&&u()}finally{o.value=!1}}else u()})}return{handleStart:n,currentCount:e,loading:o,getButtonText:r,isStart:a}}});function U(t,o,e,a,u,l){const s=p("Button");return _(),g(s,y(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:f(()=>[F(k(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}const w=v(L,[["render",U]]),Z={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},q=S({name:"CountDownInput",components:{CountButton:w},inheritAttrs:!1,props:Z,setup(t){const{prefixCls:o}=I("countdown-input"),[e]=R(t);return{prefixCls:o,state:e}}});function G(t,o,e,a,u,l){const s=p("CountButton"),r=p("a-input");return _(),g(r,y(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),A({addonAfter:f(()=>[O(s,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[N(Object.keys(t.$slots).filter(n=>n!=="addonAfter"),n=>({name:n,fn:f(c=>[T(t.$slots,n,j(D(c||{})))])}))]),1040,["class","size","value"])}const H=v(q,[["render",G]]),Y=C(H);C(w);export{Y as C};
