import{P as A}from"./index-dd339bf6.js";import{C as h}from"./index-454d5d36.js";import{C as I,a as E}from"./index-01ab9af4.js";import{u as y}from"./upload-9f71cf2d.js";import{h as B}from"./header-55b09394.js";import{k,_ as D}from"./index-59f8fabe.js";import{d as w,k as n,a7 as s,_ as p,a8 as $,a9 as u,f as o,a0 as c,$ as i,ab as l,a1 as F}from"./vue-bfa52d01.js";import"./useContentViewHeight-30ed4137.js";import"./useWindowSizeFn-50158f48.js";import"./onMountedOrActivated-6ab1435a.js";import"./antd-2cb51430.js";import"./index-b471d44b.js";import"./index-36d5da49.js";import"./base64Conver-39fc0d26.js";const P=w({components:{PageWrapper:A,CropperImage:I,CollapseContainer:h,CropperAvatar:E},setup(){var a;const e=n(""),d=n(""),m=n(""),C=n(""),g=k(),v=n(((a=g.getUserInfo)==null?void 0:a.avatar)||"");function _({imgBase64:t,imgInfo:f}){e.value=f,d.value=t}function r({imgBase64:t,imgInfo:f}){m.value=f,C.value=t}return{img:B,info:e,circleInfo:m,cropperImg:d,circleImg:C,handleCropend:_,handleCircleCropend:r,avatar:v,uploadApi:y}}});const N={class:"container p-4"},S={class:"cropper-container mr-10"},V=["src"],W={key:0},U={class:"container p-4"},b={class:"cropper-container mr-10"},j=["src"],q={key:0};function z(e,d,m,C,g,v){const _=s("CropperAvatar"),r=s("CollapseContainer"),a=s("CropperImage"),t=s("PageWrapper");return p(),$(t,{title:"图片裁剪示例",content:"需要开启测试接口服务才能进行上传测试！"},{default:u(()=>[o(r,{title:"头像裁剪"},{default:u(()=>[o(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),o(r,{title:"矩形裁剪",class:"my-4"},{default:u(()=>[c("div",N,[c("div",S,[o(a,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(p(),i("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,V)):l("",!0)]),e.cropperImg?(p(),i("p",W,"裁剪后图片信息："+F(e.info),1)):l("",!0)]),_:1}),o(r,{title:"圆形裁剪"},{default:u(()=>[c("div",U,[c("div",b,[o(a,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(p(),i("img",{key:0,src:e.circleImg,class:"croppered"},null,8,j)):l("",!0)]),e.circleImg?(p(),i("p",q,"裁剪后图片信息："+F(e.circleInfo),1)):l("",!0)]),_:1})]),_:1})}const ee=D(P,[["render",z],["__scopeId","data-v-20a70d07"]]);export{ee as default};
