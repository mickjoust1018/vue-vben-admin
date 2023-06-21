var Q=Object.defineProperty,U=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var L=(e,a,t)=>a in e?Q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))O.call(a,t)&&L(e,t,a[t]);if(I)for(var t of I(a))R.call(a,t)&&L(e,t,a[t]);return e},M=(e,a)=>U(e,X(a));var q=(e,a)=>{var t={};for(var s in e)O.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&I)for(var s of I(e))a.indexOf(s)<0&&R.call(e,s)&&(t[s]=e[s]);return t};var z=(e,a,t)=>new Promise((s,C)=>{var v=m=>{try{p(t.next(m))}catch(d){C(d)}},y=m=>{try{p(t.throw(m))}catch(d){C(d)}},p=m=>m.done?s(m.value):Promise.resolve(m.value).then(v,y);p((t=t.apply(e,a)).next())});import{a as T}from"./formItemConfig-f7a3d0ff.js";import{I as Y,aS as Z,_ as x}from"./index-59f8fabe.js";import{h as A}from"./index-634e8894.js";import{a as ee}from"./useFormDesignState-5b1e89df.js";import{V as oe,bD as ae,aj as te,aa as ne,J as se}from"./antd-2cb51430.js";import{d as le,r as me,e as P,u as S,H as re,a7 as b,_ as g,a8 as D,a9 as f,f as E,ad as V,ag as H,ae as J,R as ce,ac as W,E as ie,a1 as $,ab as _,a0 as B,ai as pe,$ as de}from"./vue-bfa52d01.js";import"./componentMap-95d9f68b.js";import"./useFormItem-bb83f293.js";import"./RadioButtonGroup-790e54c8.js";import"./index-36d5da49.js";import"./index-454d5d36.js";import"./index-b471d44b.js";import"./useWindowSizeFn-50158f48.js";import"./uuid-31b8b5a4.js";import"./download-8878c743.js";import"./base64Conver-39fc0d26.js";import"./index-b4bf844b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-3b9b63c2.js";import"./useCopyToClipboard-6f678e69.js";import"./index-cbb60a0f.js";const he=le({name:"VFormItem",components:{Tooltip:oe,Icon:Y,FormItem:ae,Divider:te,Col:ne},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},emits:["update:form-data","change"],setup(e,{emit:a}){const t=me({componentMap:T}),{formModel:s,setFormModel:C}=ee(),v=P(()=>{const{colProps:o={}}=e.schema;return o}),y=P(()=>{var N,j;const{formConfig:o}=S(e);let{field:l,required:n,rules:h,labelCol:c,wrapperCol:i}=S(e.schema);const{colon:G}=e.formConfig,{itemProps:r}=S(e.schema);c=c||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:`width:${o.labelWidth}px`}:o.labelCol:{}),i=i||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:"width:auto;flex:1"}:o.wrapperCol:{});const K=o.layout==="horizontal"&&o.labelLayout==="flex"?{display:"flex"}:{},w=Object.assign({},{name:l,style:u({},K),colon:G,required:n,rules:h,labelCol:c,wrapperCol:i},r);return(N=r==null?void 0:r.labelCol)!=null&&N.span||(w.labelCol=c),(j=r==null?void 0:r.wrapperCol)!=null&&j.span||(w.wrapperCol=i),r!=null&&r.rules||(w.rules=h),w}),p=P(()=>T.get(e.schema.component)),m=o=>{var l,n;o.component==="Button"&&((l=o.componentProps)!=null&&l.handle)&&a((n=o.componentProps)==null?void 0:n.handle)},d=Z(()=>z(this,null,function*(){var n;let{options:o,treeData:l}=(n=e.schema.componentProps)!=null?n:{};return o&&(o=yield A(o)),l&&(l=yield A(l)),{options:o,treeData:l}})),F=P(()=>{var c;const o=e.schema&&["Switch","Checkbox","Radio"].includes(e.schema.component);let{field:l}=e.schema,i=(c=se(e.schema.componentProps,["options","treeData"]))!=null?c:{},{disabled:n}=i,h=q(i,["disabled"]);return n=e.formConfig.disabled||n,M(u({},h),{disabled:n,[o?"checked":"value"]:s.value[l]})}),k=function(o){const l=["Switch","Checkbox","Radio"].includes(e.schema.component),n=o?o.target:null,h=n?l?n.checked:n.value:o;C(e.schema.field,h),a("change",h)};return M(u({},re(t)),{componentItem:p,formItemProps:y,handleClick:m,asyncProps:d,cmpProps:F,handleChange:k,colPropsComputed:v})}});const ue={key:2};function fe(e,a,t,s,C,v){const y=b("Icon"),p=b("Tooltip"),m=b("Divider"),d=b("FormItem"),F=b("Col");return g(),D(F,V(H(e.colPropsComputed)),{default:f(()=>[E(d,V(H(u({},e.formItemProps))),J({default:f(()=>{var k;return[e.schema.componentProps&&((k=e.schema.componentProps)!=null&&k.slotName)?ce(e.$slots,e.schema.componentProps.slotName,V(W({key:0},e.schema)),void 0,!0):e.schema.component=="Divider"&&e.schema.label&&!e.formItemProps.hiddenLabel?(g(),D(m,{key:1},{default:f(()=>[ie($(e.schema.label),1)]),_:1})):_("",!0),B("div",null,[(g(),D(pe(e.componentItem),W({class:"v-form-item-wrapper"},u(u({},e.cmpProps),e.asyncProps),{schema:e.schema,style:e.schema.width?{width:e.schema.width}:{},onChange:e.handleChange,onClick:a[0]||(a[0]=o=>e.handleClick(e.schema))}),null,16,["schema","style","onChange"]))]),["Button"].includes(e.schema.component)?(g(),de("span",ue,$(e.schema.label),1)):_("",!0)]}),_:2},[!e.formItemProps.hiddenLabel&&e.schema.component!=="Divider"?{name:"label",fn:f(()=>[E(p,null,J({default:f(()=>[B("span",null,$(e.schema.label),1),e.schema.helpMessage?(g(),D(y,{key:0,class:"ml-5",icon:"ant-design:question-circle-outlined"})):_("",!0)]),_:2},[e.schema.helpMessage?{name:"title",fn:f(()=>[B("span",null,$(e.schema.helpMessage),1)]),key:"0"}:void 0]),1024)]),key:"0"}:void 0]),1040)]),_:3},16)}const Re=x(he,[["render",fe],["__scopeId","data-v-43612c3e"]]);export{Re as default};
