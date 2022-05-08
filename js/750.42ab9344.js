"use strict";(self["webpackChunkaus_tour"]=self["webpackChunkaus_tour"]||[]).push([[750],{3329:function(t,e,s){var i=s(1530);e["Z"]=(t,e)=>{i.Z.emit("push-message",{style:!0===t?"success":"danger",title:!0===t?"成功":"失敗",content:e})}},7520:function(t,e,s){s.d(e,{Z:function(){return m}});var i=s(6252),a=s(3577);const r={class:"bg-light mb-5"},c={class:"container"},o={class:"py-4","aria-label":"breadcrumb"},n={class:"breadcrumb mb-0"};function l(t,e,s,l,u,d){const p=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("section",r,[(0,i._)("div",c,[(0,i._)("nav",o,[(0,i._)("ol",n,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.items,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{class:(0,a.C_)(["breadcrumb-item",{active:!!t.link}]),key:e},[t.link?((0,i.wg)(),(0,i.j4)(p,{key:0,to:t.link},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t.name),1)])),_:2},1032,["to"])):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)((0,a.zw)(t.name),1)],64))],2)))),128))])])])])}var u={data(){return{items:[]}},props:["productTitle"],watch:{productTitle(){3===this.$route.meta.breadcrumb.length&&this.$route.meta.breadcrumb.pop(),this.$route.meta.breadcrumb.push({name:this.productTitle}),this.getRoute()},$route(){this.getRoute()}},methods:{getRoute(){this.items=this.$route.meta.breadcrumb}},created(){void 0===this.$route.params.id&&this.getRoute()},mounted(){}},d=s(3744);const p=(0,d.Z)(u,[["render",l]]);var m=p},4552:function(t,e,s){s.r(e),s.d(e,{default:function(){return J}});var i=s(6252),a=s(3577),r=s(9963);const c={class:"container-lg mb-5"},o={class:"row justify-content-center"},n={class:"col-sm-6 px-2 px-md-4 mb-5 mb-md-0"},l={class:"row row-cols-1"},u={class:"col"},d=["src"],p={class:"product-sub-img row row-cols-4 p-2"},m=["src"],g=["onClick"],b=["src"],h={class:"d-flex flex-column justify-content-between col-sm-6 px-2 px-md-4"},f={class:"badge bg-primary text-wrap fs-6 mb-2",style:{width:"8rem"}},y={class:"d-flex align-items-center justify-content-between mb-2"},v={class:"h2 fw-bolder mb-0"},w={class:"px-1",style:{cursor:"pointer"}},_={class:"fw-bolder mb-2"},k={class:"border-start border-4 border-primary ps-3 mb-3"},x={key:0,class:"d-flex align-items-center"},C=(0,i.Uk)("包含所有門票 "),q={key:1,class:"d-flex align-items-center"},$=(0,i.Uk)("提供飯店接送 "),I={key:2,class:"d-flex align-items-center"},U={class:"d-flex justify-content-between mb-2"},Z={class:"text-decoration-line-through text-gray"},D={class:"fs-5 fw-bolder"},T={class:"d-flex align-items-center"},j=["disabled"],z={for:"qty",class:"flex-fill"},L=(0,i.Uk)(" 加入購物車 "),W={class:"container py-5"},F=(0,i._)("h2",{class:"text-start fw-bolder mb-4"},"其它景點選擇",-1),R={class:"px-0"};function S(t,e,s,S,B,H){const M=(0,i.up)("FrontBanner"),N=(0,i.up)("BreadCrumb"),Y=(0,i.up)("Loading"),P=(0,i.up)("font-awesome-icon"),E=(0,i.up)("RandomSwiper");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(M,{"product-title":B.product.title},null,8,["product-title"]),(0,i.Wm)(N,{"product-title":B.product.title},null,8,["product-title"]),(0,i.Wm)(Y,{active:B.isLoading},null,8,["active"]),(0,i._)("section",null,[(0,i._)("div",c,[(0,i._)("div",o,[(0,i._)("div",n,[(0,i._)("div",l,[(0,i._)("div",u,[(0,i._)("img",{src:B.mainImg,alt:"顯示產品圖片",class:"img-fluid bg-cover"},null,8,d)])]),(0,i._)("div",p,[(0,i._)("a",{class:(0,a.C_)(["px-1",{active:B.mainImg===B.product.imageUrl}]),href:"#",onClick:e[0]||(e[0]=(0,r.iM)((t=>H.updateImg(B.product.imageUrl)),["prevent"]))},[(0,i._)("img",{src:B.product.imageUrl,alt:"產品圖片",class:"img-fluid"},null,8,m)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(B.product.imagesUrl,((t,e)=>((0,i.wg)(),(0,i.iD)("a",{class:(0,a.C_)(["px-1",{active:B.mainImg===t}]),href:"#",key:e,onClick:(0,r.iM)((e=>H.updateImg(t)),["prevent"])},[(0,i._)("img",{src:t,alt:"產品圖片",class:"img-fluid"},null,8,b)],10,g)))),128))])]),(0,i._)("div",h,[(0,i._)("p",f,(0,a.zw)(B.product.category),1),(0,i._)("div",y,[(0,i._)("h2",v,(0,a.zw)(B.product.title),1),(0,i._)("span",w,[H.isIdEqual?((0,i.wg)(),(0,i.j4)(P,{key:0,icon:["fa","heart"],class:"fs-4 text-danger","data-bs-toggle":"tooltip","data-bs-placement":"buttom",title:"取消收藏",onClick:(0,r.iM)(H.toggleFavorite,["prevent"])},null,8,["onClick"])):((0,i.wg)(),(0,i.j4)(P,{key:1,icon:["far","heart"],class:"fs-4 text-danger","data-bs-toggle":"tooltip","data-bs-placement":"buttom",title:"加入收藏",onClick:(0,r.iM)(H.toggleFavorite,["prevent"])},null,8,["onClick"]))])]),(0,i._)("p",_,(0,a.zw)(B.product.content),1),(0,i._)("p",k,(0,a.zw)(B.product.description),1),B.product.include_ticket?((0,i.wg)(),(0,i.iD)("p",x,[(0,i.Wm)(P,{icon:["fa","ticket"],class:"text-primary fs-4 px-2"}),C])):(0,i.kq)("",!0),B.product.is_pickup?((0,i.wg)(),(0,i.iD)("p",q,[(0,i.Wm)(P,{icon:["fa","bus"],class:"text-primary fs-4 px-2"}),$])):(0,i.kq)("",!0),B.product.spendTime?((0,i.wg)(),(0,i.iD)("p",I,[(0,i.Wm)(P,{icon:["far","clock"],class:"text-primary fs-4 px-2"}),(0,i.Uk)("行程時間 "+(0,a.zw)(B.product.spendTime)+" 小時 ",1)])):(0,i.kq)("",!0),(0,i._)("div",U,[(0,i._)("span",Z,"原價NT$ "+(0,a.zw)(H.currency(B.product.origin_price))+"/人",1),(0,i._)("span",D,"現在只要NT$ "+(0,a.zw)(H.currency(B.product.price))+"/人",1)]),(0,i._)("div",T,[(0,i._)("div",{class:"d-flex align-items-center flex-fill me-1",style:(0,a.j5)({cursor:1===B.quantity?"not-allowed":"pointer"})},[(0,i._)("button",{type:"button",class:"btn btn-primary",disabled:1===B.quantity,onClick:e[1]||(e[1]=t=>B.quantity--)}," - ",8,j),(0,i._)("label",z,[(0,i.wy)((0,i._)("input",{type:"number",id:"qty",class:"form-control text-center",min:"1",max:"99","onUpdate:modelValue":e[2]||(e[2]=t=>B.quantity=t)},null,512),[[r.nr,B.quantity,void 0,{number:!0}]])]),(0,i._)("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=t=>B.quantity++)},"+")],4),(0,i._)("button",{type:"button",class:"btn btn-primary flex-fill ms-1",onClick:e[4]||(e[4]=(...t)=>H.addToCart&&H.addToCart(...t))},[(0,i.Wm)(P,{icon:["fas","cart-plus"],class:"px-1"}),L])])])])]),(0,i._)("div",W,[F,(0,i._)("div",R,[(0,i.Wm)(E)])])])],64)}var B=s(3850),H=s(7520),M=s(9210),N=s(3329),Y={components:{FrontBanner:B.Z,BreadCrumb:H.Z,RandomSwiper:M.Z},data(){return{isLoading:!1,product:{},mainImg:"",quantity:1,favorites:JSON.parse(localStorage.getItem("favorites"))||[]}},inject:["mitt","currency"],watch:{quantity(){this.quantity<=0&&(this.quantity=1)},$route(){void 0!==this.$route.params.id&&this.getProduct()}},computed:{isIdEqual(){return this.favorites.includes(this.product.id)}},methods:{getProduct(){this.isLoading=!0;const{id:t}=this.$route.params;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/skps0102/product/${t}`).then((t=>{this.isLoading=!1;const{product:e}=t.data;this.product=e,this.mainImg=this.product.imageUrl})).catch((t=>{const{message:e,success:s}=t.response.data;(0,N.Z)(s,e)}))},updateImg(t){this.mainImg=t},toggleFavorite(){this.mitt.emit("toggleFavorite",this.product),this.favorites=JSON.parse(localStorage.getItem("favorites"))||[]},addToCart(){this.isLoading=!0;const t={data:{product_id:this.product.id,qty:this.quantity}};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/skps0102/cart",t).then((t=>{this.isLoading=!1,this.mitt.emit("getCartLength");const{message:e,success:s}=t.data,{title:i}=t.data.data.product;(0,N.Z)(s,`${i} ${e}`),this.quantity=1})).catch((t=>{const{message:e,success:s}=t.response.data;(0,N.Z)(s,e)}))}},mounted(){this.getProduct()}},P=s(3744);const E=(0,P.Z)(Y,[["render",S]]);var J=E}}]);
//# sourceMappingURL=750.42ab9344.js.map