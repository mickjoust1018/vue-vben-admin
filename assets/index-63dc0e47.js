var d=(o,a,e)=>new Promise((i,t)=>{var p=r=>{try{s(e.next(r))}catch(u){t(u)}},n=r=>{try{s(e.throw(r))}catch(u){t(u)}},s=r=>r.done?i(r.value):Promise.resolve(r.value).then(p,n);s((e=e.apply(o,a)).next())});import{P as F}from"./index-dd339bf6.js";import{B as w}from"./BasicForm-adcd46e9.js";import"./componentMap-95d9f68b.js";import{u as h}from"./useForm-552b1b9b.js";import"./RadioButtonGroup-790e54c8.js";import{d as g,a7 as m,_ as P,a8 as B,a9 as c,a0 as f,f as l,E as _}from"./vue-bfa52d01.js";import{_ as C}from"./index-59f8fabe.js";import"./useContentViewHeight-30ed4137.js";import"./useWindowSizeFn-50158f48.js";import"./onMountedOrActivated-6ab1435a.js";import"./antd-2cb51430.js";import"./FormItem.vue_vue_type_script_lang-1b2c7fe1.js";import"./index-454d5d36.js";import"./index-b471d44b.js";import"./uniqBy-03306adf.js";import"./index-36d5da49.js";import"./useFormItem-bb83f293.js";import"./uuid-31b8b5a4.js";import"./download-8878c743.js";import"./base64Conver-39fc0d26.js";import"./index-b4bf844b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-3b9b63c2.js";import"./useCopyToClipboard-6f678e69.js";import"./index-cbb60a0f.js";const b=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:o})=>[{required:!0,validator:(a,e)=>e?e!==o.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("密码不能为空")}]}],E=g({name:"ChangePassword",components:{BasicForm:w,PageWrapper:F},setup(){const[o,{validate:a,resetFields:e}]=h({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:b});function i(){return d(this,null,function*(){try{const t=yield a(),{passwordOld:p,passwordNew:n}=t;console.log(p,n)}catch(t){}})}return{register:o,resetFields:e,handleSubmit:i}}}),y={class:"py-8 bg-white flex flex-col justify-center items-center"},k={class:"flex justify-center"};function v(o,a,e,i,t,p){const n=m("BasicForm"),s=m("a-button"),r=m("PageWrapper");return P(),B(r,{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:c(()=>[f("div",y,[l(n,{onRegister:o.register},null,8,["onRegister"]),f("div",k,[l(s,{onClick:o.resetFields},{default:c(()=>[_(" 重置 ")]),_:1},8,["onClick"]),l(s,{class:"!ml-4",type:"primary",onClick:o.handleSubmit},{default:c(()=>[_(" 确认 ")]),_:1},8,["onClick"])])])]),_:1})}const Z=C(E,[["render",v]]);export{Z as default};
