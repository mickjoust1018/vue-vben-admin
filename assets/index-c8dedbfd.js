import{B as R}from"./BasicForm-adcd46e9.js";import{A as M}from"./componentMap-95d9f68b.js";import"./RadioButtonGroup-790e54c8.js";import{C as _}from"./index-454d5d36.js";import{u as D,b as w,_ as O}from"./index-59f8fabe.js";import{P as q}from"./index-dd339bf6.js";import{o as f}from"./select-3e101620.js";import{t as G}from"./tree-9036fa21.js";import{a as U}from"./cascader-77509aa6.js";import{u as V}from"./upload-9f71cf2d.js";import{ab as j,L as C}from"./antd-2cb51430.js";import{d as H,k as u,e as h,u as d,a7 as c,_ as L,a8 as T,a9 as p,f as i}from"./vue-bfa52d01.js";import"./FormItem.vue_vue_type_script_lang-1b2c7fe1.js";import"./uniqBy-03306adf.js";import"./index-36d5da49.js";import"./useWindowSizeFn-50158f48.js";import"./useFormItem-bb83f293.js";import"./uuid-31b8b5a4.js";import"./download-8878c743.js";import"./base64Conver-39fc0d26.js";import"./index-b4bf844b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-3b9b63c2.js";import"./useCopyToClipboard-6f678e69.js";import"./index-cbb60a0f.js";import"./index-b471d44b.js";import"./useContentViewHeight-30ed4137.js";import"./onMountedOrActivated-6ab1435a.js";const A=u([]),F=u([]),v=u([]);for(let e=1;e<10;e++)v.value.push({label:"选项"+e,value:`${e}`});const $=h(()=>C(d(v)).map(e=>(e.disabled=d(F).indexOf(e.value)!==-1,e))),I=h(()=>C(d(v)).map(e=>(e.disabled=d(A).indexOf(e.value)!==-1,e))),b=[{id:"guangdong",label:"广东省",value:"1",key:"1"},{id:"jiangsu",label:"江苏省",value:"2",key:"2"}],S={guangdong:[{label:"珠海市",value:"1",key:"1"},{label:"深圳市",value:"2",key:"2"},{label:"广州市",value:"3",key:"3"}],jiangsu:[{label:"南京市",value:"1",key:"1"},{label:"无锡市",value:"2",key:"2"},{label:"苏州市",value:"3",key:"3"}]},W=[{field:"divider-basic",component:"Divider",label:"基础字段",colProps:{span:24}},{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>(console.log("form:",e),console.log("formModel:",o),{placeholder:"自定义placeholder",onChange:n=>{console.log(n)}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{console.log(e)}},suffix:"天"},{field:"fieldsc",component:"Upload",label:"上传",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:V}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}],onChange:(e,o)=>{console.log("RadioButtonGroup====>:",e,o)}}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"divider-api-select",component:"Divider",label:"远程下拉演示",colProps:{span:24}},{field:"field30",component:"ApiSelect",label:"懒加载远程下拉",required:!0,componentProps:{api:f,params:{id:1},resultField:"list",labelField:"name",valueField:"id",immediate:!0,onChange:(e,o)=>{console.log("ApiSelect====>:",e,o)},onOptionsChange:e=>{console.log("get options",e.length,e)}},colProps:{span:8},defaultValue:"0"},{field:"field8",component:"ApiCascader",label:"联动ApiCascader",required:!0,colProps:{span:8},componentProps:{api:U,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:e=>!(e.levelType<3),onChange:(e,...o)=>{console.log("ApiCascader====>:",e,o)}}},{field:"field31",component:"Input",label:"下拉本地搜索",helpMessage:["ApiSelect组件","远程数据源本地搜索","只发起一次请求获取所有选项"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0"},{field:"field32",component:"Input",label:"下拉远程搜索",helpMessage:["ApiSelect组件","将关键词发送到接口进行远程搜索"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"field33",component:"ApiTreeSelect",label:"远程下拉树",helpMessage:["ApiTreeSelect组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:G,resultField:"list",onChange:(e,o)=>{console.log("ApiTreeSelect====>:",e,o)}},colProps:{span:8}},{field:"field34",component:"ApiRadioGroup",label:"远程Radio",helpMessage:["ApiRadioGroup组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:f,params:{count:2},resultField:"list",labelField:"name",valueField:"id"},defaultValue:"1",colProps:{span:8}},{field:"field35",component:"ApiRadioGroup",label:"远程Radio",helpMessage:["ApiRadioGroup组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:f,params:{count:2},resultField:"list",labelField:"name",valueField:"id",isBtn:!0,onChange:(e,o)=>{console.log("ApiRadioGroup====>:",e,o)}},colProps:{span:8}},{field:"divider-linked",component:"Divider",label:"字段联动",colProps:{span:24}},{field:"province",component:"Select",label:"省份",colProps:{span:8},componentProps:({formModel:e,formActionType:o})=>({options:b,placeholder:"省份与城市联动",onChange:n=>{let s=n==1?S[b[0].id]:S[b[1].id];n===void 0&&(s=[]),e.city=void 0;const{updateSchema:m}=o;m({field:"city",componentProps:{options:s}})}})},{field:"city",component:"Select",label:"城市",colProps:{span:8},componentProps:{options:[],placeholder:"省份与城市联动"}},{field:"divider-selects",component:"Divider",label:"互斥多选",helpMessage:["两个Select共用数据源","但不可选择对方已选中的项目"],colProps:{span:24}},{field:"selectA",component:"Select",label:"互斥SelectA",slot:"selectA",defaultValue:[],colProps:{span:8}},{field:"selectB",component:"Select",label:"互斥SelectB",slot:"selectB",defaultValue:[],colProps:{span:8}},{field:"divider-deconstruct",component:"Divider",label:"字段解构",helpMessage:["如果组件的值是 array 或者 object","可以根据 ES6 的解构语法分别取值"],colProps:{span:24}},{field:"[startTime, endTime]",label:"时间范围",component:"RangePicker",componentProps:{format:"YYYY-MM-DD HH:mm:ss",placeholder:["开始时间","结束时间"],showTime:{format:"HH:mm:ss"}}},{field:"divider-others",component:"Divider",label:"其它",colProps:{span:24}},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}},{field:"field21",component:"Slider",label:"字段21",componentProps:{min:0,max:100,range:!0,marks:{20:"20°C",60:"60°C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"字段22",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}}],z=H({components:{BasicForm:R,CollapseContainer:_,PageWrapper:q,ApiSelect:M,ASelect:j},setup(){const e=u(null),{createMessage:o}=w(),n=u(""),s=h(()=>({keyword:d(n)}));function m(r){n.value=r}return{schemas:W,optionsListApi:f,optionsA:$,optionsB:I,valueSelectA:A,valueSelectB:F,onSearch:D(m,300),searchParams:s,handleReset:()=>{n.value=""},handleSubmit:r=>{console.log("values",r),o.success("click search,values:"+JSON.stringify(r))},check:e}}});function N(e,o,n,s,m,r){const g=c("a-select"),P=c("ApiSelect"),k=c("BasicForm"),y=c("CollapseContainer"),B=c("PageWrapper");return L(),T(B,{title:"表单基础示例",contentFullHeight:""},{default:p(()=>[i(y,{title:"基础示例"},{default:p(()=>[i(k,{autoFocusFirstItem:"",labelWidth:200,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit,onReset:e.handleReset},{selectA:p(({model:l,field:a})=>[i(g,{options:e.optionsA,mode:"multiple",value:l[a],"onUpdate:value":t=>l[a]=t,onChange:t=>e.valueSelectA=l[a],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),selectB:p(({model:l,field:a})=>[i(g,{options:e.optionsB,mode:"multiple",value:l[a],"onUpdate:value":t=>l[a]=t,onChange:t=>e.valueSelectB=l[a],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),localSearch:p(({model:l,field:a})=>[i(P,{api:e.optionsListApi,showSearch:"",value:l[a],"onUpdate:value":t=>l[a]=t,optionFilterProp:"label",resultField:"list",labelField:"name",valueField:"id"},null,8,["api","value","onUpdate:value"])]),remoteSearch:p(({model:l,field:a})=>[i(P,{api:e.optionsListApi,showSearch:"",value:l[a],"onUpdate:value":t=>l[a]=t,filterOption:!1,resultField:"list",labelField:"name",valueField:"id",params:e.searchParams,onSearch:e.onSearch},null,8,["api","value","onUpdate:value","params","onSearch"])]),_:1},8,["schemas","onSubmit","onReset"])]),_:1})]),_:1})}const Pe=O(z,[["render",N]]);export{Pe as default};
