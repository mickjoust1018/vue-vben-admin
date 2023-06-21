import{Q as _}from"./index-0b716f35.js";import{az as v,_ as E}from"./index-59f8fabe.js";import{C as D}from"./index-454d5d36.js";import{P as b}from"./index-dd339bf6.js";import{d as B,k as p,u as f,a7 as a,_ as q,a8 as A,a9 as t,a0 as s,f as o,E as g,a3 as w,a4 as y}from"./vue-bfa52d01.js";import"./antd-2cb51430.js";import"./download-8878c743.js";import"./base64Conver-39fc0d26.js";import"./index-b471d44b.js";import"./useContentViewHeight-30ed4137.js";import"./useWindowSizeFn-50158f48.js";import"./onMountedOrActivated-6ab1435a.js";const h="https://www.vvbin.cn",k=B({components:{CollapseContainer:D,QrCode:_,PageWrapper:b},setup(){const e=p(null),r=p(null);function d(){const u=f(e);u&&u.download("文件名")}function i(){const u=f(r);u&&u.download("Qrcode")}function c({ctx:u}){u instanceof CanvasRenderingContext2D&&(u.fillStyle="black",u.font='16px "微软雅黑"',u.textBaseline="bottom",u.textAlign="center",u.fillText("你帅你先扫",100,195,200))}return{onQrcodeDone:c,qrCodeUrl:h,LogoImg:v,download:d,downloadDiy:i,qrRef:e,qrDiyRef:r}}});const C=e=>(w("data-v-0027badc"),e=e(),y(),e),U={class:"flex flex-wrap"},I=C(()=>s("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1)),Q=C(()=>s("div",{class:"msg"},"要进行扩展绘制则不能将tag设为img",-1));function R(e,r,d,i,c,u){const l=a("QrCode"),n=a("CollapseContainer"),m=a("a-button"),F=a("PageWrapper");return q(),A(F,{title:"二维码组件使用示例"},{default:t(()=>[s("div",U,[o(n,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl},null,8,["value"])]),_:1}),o(n,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])]),_:1}),o(n,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])]),_:1}),o(n,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])]),_:1}),o(n,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])]),_:1}),o(n,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])]),_:1}),o(n,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),o(m,{class:"mb-2",type:"primary",onClick:e.download},{default:t(()=>[g(" 下载 ")]),_:1},8,["onClick"]),I]),_:1}),o(n,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,width:300},null,8,["value"])]),_:1}),o(n,{title:"扩展绘制示例",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,width:200,options:{margin:5},ref:"qrDiyRef",logo:e.LogoImg,onDone:e.onQrcodeDone},null,8,["value","logo","onDone"]),o(m,{class:"mb-2",type:"primary",onClick:e.downloadDiy},{default:t(()=>[g(" 下载 ")]),_:1},8,["onClick"]),Q]),_:1})])]),_:1})}const H=E(k,[["render",R],["__scopeId","data-v-0027badc"]]);export{H as default};
