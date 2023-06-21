import{P as R}from"./index-dd339bf6.js";import{D as n}from"./index-da99975e.js";import{G as m,D,S as T}from"./siteSetting-efd6ab5b.js";import{u as i}from"./useDescription-97779f97.js";import{a7 as B}from"./antd-2cb51430.js";import{d as S,_ as V,a8 as q,a9 as g,a0 as r,u as s,a1 as z,E as C,f as a,n as v}from"./vue-bfa52d01.js";import"./index-59f8fabe.js";import"./useContentViewHeight-30ed4137.js";import"./useWindowSizeFn-50158f48.js";import"./onMountedOrActivated-6ab1435a.js";import"./index-454d5d36.js";import"./index-b471d44b.js";const E={class:"flex justify-between items-center"},G={class:"flex-1"},L=["href"],X=S({__name:"index",setup(U){const{pkg:f,lastBuildTime:b}={pkg:{dependencies:{"@ant-design/icons-vue":"^6.1.0","@iconify/iconify":"^3.1.0","@logicflow/core":"^1.2.1","@logicflow/extension":"^1.2.1","@vben/hooks":"workspace:*","@vue/shared":"^3.2.47","@vueuse/core":"^9.13.0","@vueuse/shared":"^9.13.0","@zxcvbn-ts/core":"^2.2.1","ant-design-vue":"^3.2.17",axios:"^1.3.5",codemirror:"^5.65.12",cropperjs:"^1.5.13","crypto-js":"^4.1.1",dayjs:"^1.11.7",echarts:"^5.4.2",exceljs:"^4.3.0","intro.js":"^7.0.1","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-to-regexp":"^6.2.1",pinia:"2.0.33","print-js":"^1.6.0",qrcode:"^1.5.1",qs:"^6.11.1","resize-observer-polyfill":"^1.5.1",showdown:"^2.1.0",sortablejs:"^1.15.0",tinymce:"^5.10.7",vditor:"^3.9.1",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-json-pretty":"^2.2.4","vue-router":"^4.1.6","vue-types":"^5.0.2",vuedraggable:"^4.1.0","vxe-table":"^4.3.11","vxe-table-plugin-export-xlsx":"^3.0.4","xe-utils":"^3.5.7",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^17.5.1","@commitlint/config-conventional":"^17.4.4","@iconify/json":"^2.2.46","@purge-icons/generated":"^0.9.0","@types/codemirror":"^5.60.7","@types/crypto-js":"^4.1.1","@types/intro.js":"^5.1.1","@types/lodash-es":"^4.17.7","@types/mockjs":"^1.0.7","@types/nprogress":"^0.2.0","@types/qrcode":"^1.5.0","@types/qs":"^6.9.7","@types/showdown":"^2.0.0","@types/sortablejs":"^1.15.1","@vben/eslint-config":"workspace:*","@vben/stylelint-config":"workspace:*","@vben/ts-config":"workspace:*","@vben/types":"workspace:*","@vben/vite-config":"workspace:*","@vue/compiler-sfc":"^3.2.47","@vue/test-utils":"^2.3.2","cross-env":"^7.0.3","cz-git":"^1.6.1",czg:"^1.6.1",husky:"^8.0.3","lint-staged":"13.2.0",prettier:"^2.8.7","prettier-plugin-packagejson":"^2.4.3",rimraf:"^4.4.1",turbo:"^1.8.8",typescript:"^5.0.3",unbuild:"^1.2.0","unplugin-vue-define-options":"^1.3.3",vite:"^4.3.0-beta.2","vite-plugin-mock":"^2.9.6","vite-plugin-vue-setup-extend":"^0.4.0","vue-tsc":"^1.2.0"},name:"vben-admin",version:"2.10.0"},lastBuildTime:"2023-06-21 14:42:05"},{dependencies:c,devDependencies:l,name:h,version:y}=f,p=[],d=[],u=e=>t=>v(B,{color:e},()=>t),o=e=>t=>v("a",{href:t,target:"_blank"},e),x=[{label:"版本",field:"version",render:u("blue")},{label:"最后编译时间",field:"lastBuildTime",render:u("blue")},{label:"文档地址",field:"doc",render:o("文档地址")},{label:"预览地址",field:"preview",render:o("预览地址")},{label:"Github",field:"github",render:o("Github")}],_={version:y,lastBuildTime:b,doc:D,preview:T,github:m};Object.keys(c).forEach(e=>{p.push({field:e,label:e})}),Object.keys(l).forEach(e=>{d.push({field:e,label:e})});const[k]=i({title:"生产环境依赖",data:c,schema:p,column:3}),[j]=i({title:"开发环境依赖",data:l,schema:d,column:3}),[w]=i({title:"项目信息",data:_,schema:x,column:2});return(e,t)=>(V(),q(s(R),{title:"关于"},{headerContent:g(()=>[r("div",E,[r("span",G,[r("a",{href:s(m),target:"_blank"},z(s(h)),9,L),C(" 是一个基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。 ")])])]),default:g(()=>[a(s(n),{onRegister:s(w),class:"enter-y"},null,8,["onRegister"]),a(s(n),{onRegister:s(k),class:"my-4 enter-y"},null,8,["onRegister"]),a(s(n),{onRegister:s(j),class:"enter-y"},null,8,["onRegister"])]),_:1}))}});export{X as default};
