var h=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var C=(e,o,t)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,M=(e,o)=>{for(var t in o||(o={}))k.call(o,t)&&C(e,t,o[t]);if(c)for(var t of c(o))V.call(o,t)&&C(e,t,o[t]);return e},v=(e,o)=>w(e,A(o));var b=(e,o,t)=>new Promise((p,m)=>{var u=n=>{try{r(t.next(n))}catch(i){m(i)}},s=n=>{try{r(t.throw(n))}catch(i){m(i)}},r=n=>n.done?p(n.value):Promise.resolve(n.value).then(u,s);r((t=t.apply(e,o)).next())});import g from"./index-b0f6585b.js";import{a as D}from"./index-634e8894.js";import O from"./JsonModal-8438159d.js";import{d as S,k as U,r as $,H as y,a7 as f,_ as B,a8 as E,a9 as F,f as d}from"./vue-bfa52d01.js";import{O as J}from"./antd-2cb51430.js";import{_ as G}from"./index-59f8fabe.js";import"./FormRender-84603e23.js";import"./index-a27c471e.js";import"./formItemConfig-f7a3d0ff.js";import"./componentMap-95d9f68b.js";import"./useFormItem-bb83f293.js";import"./RadioButtonGroup-790e54c8.js";import"./index-36d5da49.js";import"./index-454d5d36.js";import"./index-b471d44b.js";import"./useWindowSizeFn-50158f48.js";import"./uuid-31b8b5a4.js";import"./download-8878c743.js";import"./base64Conver-39fc0d26.js";import"./index-b4bf844b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-3b9b63c2.js";import"./useCopyToClipboard-6f678e69.js";import"./index-cbb60a0f.js";import"./useFormDesignState-5b1e89df.js";import"./PreviewCode-d4bbdddb.js";import"./index-4784e3bb.js";const N=S({name:"VFormPreview",components:{JsonModal:O,VFormCreate:g,Modal:J},setup(){const e=U(null),o=$({formModel:{},formConfig:{},visible:!1,fApi:{}}),t=r=>{D(r.schemas),o.formConfig=r,o.visible=!0},p=()=>{o.visible=!1,o.formModel={}},m=()=>b(this,null,function*(){var n,i,a,l;const r=yield(i=(n=o.fApi).submit)==null?void 0:i.call(n);(l=(a=e.value)==null?void 0:a.showModal)==null||l.call(a,r)}),u=r=>{},s=()=>{o.formModel={}};return v(M({handleGetData:m,handleCancel:p},y(o)),{showModal:t,jsonModal:e,onSubmit:u,onCancel:s})}});function P(e,o,t,p,m,u){const s=f("a-input"),r=f("VFormCreate"),n=f("JsonModal"),i=f("Modal");return B(),E(i,{title:"预览(支持布局)",visible:e.visible,onOk:e.handleGetData,onCancel:e.handleCancel,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:F(()=>[d(r,{"form-config":e.formConfig,fApi:e.fApi,"onUpdate:fApi":o[0]||(o[0]=a=>e.fApi=a),formModel:e.formModel,"onUpdate:formModel":o[1]||(o[1]=a=>e.formModel=a),onSubmit:e.onSubmit},{slotName:F(({formModel:a,field:l})=>[d(s,{value:a[l],"onUpdate:value":_=>a[l]=_,placeholder:"我是插槽传递的输入框"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(n,{ref:"jsonModal"},null,512)]),_:1},8,["visible","onOk","onCancel"])}const fo=G(N,[["render",P]]);export{fo as default};
