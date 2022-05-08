"use strict";(self["webpackChunkaus_tour"]=self["webpackChunkaus_tour"]||[]).push([[515],{3329:function(t,s,e){var a=e(1530);s["Z"]=(t,s)=>{a.Z.emit("push-message",{style:!0===t?"success":"danger",title:!0===t?"成功":"失敗",content:s})}},7520:function(t,s,e){e.d(s,{Z:function(){return p}});var a=e(6252),o=e(3577);const r={class:"bg-light mb-5"},n={class:"container"},i={class:"py-4","aria-label":"breadcrumb"},c={class:"breadcrumb mb-0"};function l(t,s,e,l,u,d){const h=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",r,[(0,a._)("div",n,[(0,a._)("nav",i,[(0,a._)("ol",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.items,((t,s)=>((0,a.wg)(),(0,a.iD)("li",{class:(0,o.C_)(["breadcrumb-item",{active:!!t.link}]),key:s},[t.link?((0,a.wg)(),(0,a.j4)(h,{key:0,to:t.link},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.name),1)])),_:2},1032,["to"])):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)((0,o.zw)(t.name),1)],64))],2)))),128))])])])])}var u={data(){return{items:[]}},props:["productTitle"],watch:{productTitle(){3===this.$route.meta.breadcrumb.length&&this.$route.meta.breadcrumb.pop(),this.$route.meta.breadcrumb.push({name:this.productTitle}),this.getRoute()},$route(){this.getRoute()}},methods:{getRoute(){this.items=this.$route.meta.breadcrumb}},created(){void 0===this.$route.params.id&&this.getRoute()},mounted(){}},d=e(3744);const h=(0,d.Z)(u,[["render",l]]);var p=h},3850:function(t,s,e){e.d(s,{Z:function(){return x}});var a=e(6252),o=e(3577),r=e(9963);const n={class:"mask d-flex justify-content-center align-items-center"},i={key:0,class:"content"},c=(0,a._)("h2",{class:"text-white fw-bolder rounded fs-1 my-3 mx-2","data-aos":"zoom-in","data-aos-duration":"1000"}," 澳式旅遊 Aus Tour ",-1),l=(0,a._)("p",{class:"text-white fs-4 fw-bolder my-0 mx-2","data-aos":"zoom-in","data-aos-duration":"1000"}," 帶你享受澳洲的經典，體驗一次永生難忘 ",-1),u=(0,a.Uk)(" 立即前往選擇景點 "),d={class:"bounce"},h=(0,a._)("span",null,"往下看更多",-1),p={key:1,class:"text-white","data-aos":"fade-in","data-aos-duration":"1000"},m={key:0,class:"fw-bolder"},b={key:1,class:"fw-bolder"},g={key:2,class:"fw-bolder"},f={key:3,class:"fw-bolder"},k={key:4,class:"fw-bolder"},w={key:5,class:"fw-bolder"};function v(t,s,e,v,y,_){const C=(0,a.up)("router-link"),x=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("section",{class:(0,o.C_)(["custom-banner",{"vh-30":y.isToggleVh,"products-banner":"products-banner"===this.backgroundClassname,"product-banner":"product-banner"===this.backgroundClassname,"about-banner":"about-banner"===this.backgroundClassname,"favorite-banner":"favorite-banner"===this.backgroundClassname,"cart-banner":"cart-banner"===this.backgroundClassname,"checkOut-banner":"checkOut-banner"===this.backgroundClassname}]),ref:"banner"},[(0,a._)("div",n,[y.isToggleVh?((0,a.wg)(),(0,a.iD)("div",p,["/products"===y.routePath?((0,a.wg)(),(0,a.iD)("h2",m,"景點列表")):y.routePath===`/product/${y.productId}`?((0,a.wg)(),(0,a.iD)("h2",b,(0,o.zw)(e.productTitle),1)):"/about"===y.routePath?((0,a.wg)(),(0,a.iD)("h2",g,"關於我們")):"/favorite"===y.routePath?((0,a.wg)(),(0,a.iD)("h2",f,"我的收藏")):"/cart"===y.routePath?((0,a.wg)(),(0,a.iD)("h2",k,"購物車")):((0,a.wg)(),(0,a.iD)("h2",w,"結帳流程"))])):((0,a.wg)(),(0,a.iD)("div",i,[c,l,(0,a.Wm)(C,{class:"btn btn-primary fw-bolder fs-4 px-5 my-3 mx-2",to:"/products","data-aos":"zoom-in","data-aos-duration":"1000"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a._)("a",{class:"scroll-down-btn d-flex flex-column align-items-center text-white",href:"#",onClick:s[0]||(s[0]=(0,r.iM)(((...t)=>_.scrollToHome&&_.scrollToHome(...t)),["prevent"]))},[(0,a._)("span",d,[(0,a.Wm)(x,{icon:["fas","chevron-down"],class:"text-white fs-1"})]),h])]))])],2)}var y={data(){return{isToggleVh:!1,backgroundClassname:"",routePath:"",productId:""}},props:["productTitle"],inject:["mitt"],watch:{$route(){this.routePath=this.$route.fullPath,void 0!==this.$route.params.id&&(this.productId=this.$route.params.id)}},methods:{scrollToHome(){this.$emit("scroll-to-home","home")}},created(){"/home"!==this.$route.fullPath&&(this.isToggleVh=!0,"/products"===this.$route.fullPath&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="products-banner"),this.$route.fullPath===`/product/${this.$route.params.id}`&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="product-banner"),"/about"===this.$route.fullPath&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="about-banner"),"/favorite"===this.$route.fullPath&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="favorite-banner"),"/cart"===this.$route.fullPath&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="cart-banner"),this.$route.fullPath.includes("/checkout")&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="checkOut-banner"))},mounted(){this.routePath=this.$route.fullPath,void 0!==this.$route.params.id&&(this.productId=this.$route.params.id)},beforeUnmount(){this.mitt.off("getRoutePath")}},_=e(3744);const C=(0,_.Z)(y,[["render",v]]);var x=C},6515:function(t,s,e){e.r(s),e.d(s,{default:function(){return Y}});var a=e(6252),o=e(3577),r=e(9963);const n={class:"mb-5"},i={class:"container"},c={class:"d-flex p-2"},l={class:"flex-fill bg-light text-end p-2"},u={class:"p-2"},d={class:"table-responsive bg-light px-4 pt-4"},h={class:"table text-center align-middle m-0"},p=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"py-2 px-0",scope:"col"},"圖片"),(0,a._)("th",{class:"py-2 px-0",scope:"col"},"名稱"),(0,a._)("th",{class:"py-2 px-0",scope:"col"},"數量"),(0,a._)("th",{class:"py-2 px-0",scope:"col"},"單價"),(0,a._)("th",{class:"py-2 px-0",scope:"col"},"小計"),(0,a._)("th",{class:"py-2 px-0",scope:"col"})])],-1),m={class:"text-nowrap fw-bolder"},b={class:"text-nowrap"},g={for:"qty"},f=["onUpdate:modelValue"],k={style:{cursor:"pointer"}},w={class:"text-nowrap"},v={class:"text-nowrap"},y={class:"bg-light text-end px-4 pb-4"},_={class:"border-bottom"},C={class:"fs-5 fw-bold p-2"},x={class:"p-2"},$={class:"bg-light d-flex p-2"},L=(0,a.Uk)(" 繼續選購 "),D=(0,a.Uk)(" 前往結帳 "),P={key:1,class:"text-center"},T={class:"bg-light py-5 px-2 px-sm-5"},Z=(0,a._)("h2",{class:"mb-5 fw-bolder"},"尚未有景點加入購物車",-1),W=(0,a.Uk)(" 把喜歡的景點加入購物車吧 ! ");function q(t,s,e,q,z,U){const H=(0,a.up)("FrontBanner"),j=(0,a.up)("BreadCrumb"),V=(0,a.up)("Loading"),R=(0,a.up)("font-awesome-icon"),Y=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(H),(0,a.Wm)(j),(0,a.Wm)(V,{active:z.isLoading},null,8,["active"]),(0,a._)("section",n,[(0,a._)("div",i,[z.carts.length?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",c,[(0,a._)("div",l,[(0,a._)("button",{type:"button",class:"btn btn-outline-primary",onClick:s[0]||(s[0]=(...t)=>U.deleteCarts&&U.deleteCarts(...t))},"清空購物車 ")])]),(0,a._)("div",u,[(0,a._)("div",d,[(0,a._)("table",h,[p,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(z.carts,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,[(0,a._)("div",{class:"m-auto",style:(0,o.j5)(`\n                        width: 6rem;\n                        height: 5rem;\n                        background-size: cover;\n                        background-position: center center;\n                        background-image: url(${t.product.imageUrl});\n                      `)},null,4)]),(0,a._)("td",m,(0,o.zw)(t.product.title),1),(0,a._)("td",null,[(0,a._)("div",b,[(0,a._)("span",{style:(0,o.j5)({cursor:1===t.qty?"not-allowed":"pointer"})},[(0,a.Wm)(R,{icon:["fas","minus"],class:(0,o.C_)(["text-primary px-3",{"text-gray":1===t.qty}]),style:(0,o.j5)({"pointer-events":1===t.qty?"none":""}),onClick:s=>(t.qty--,U.updateCart(t))},null,8,["style","class","onClick"])],4),(0,a._)("label",g,[(0,a.wy)((0,a._)("input",{type:"number",id:"qty",class:"form-control text-center",style:{width:"65px"},min:"1",max:"99","onUpdate:modelValue":s=>t.qty=s,disabled:""},null,8,f),[[r.nr,t.qty,void 0,{number:!0}]])]),(0,a._)("span",k,[(0,a.Wm)(R,{icon:["fas","plus"],class:"text-primary px-3",onClick:s=>(t.qty++,U.updateCart(t))},null,8,["onClick"])])])]),(0,a._)("td",w,"NT$ "+(0,o.zw)(U.currency(t.product.price))+"/人",1),(0,a._)("td",v,"NT$ "+(0,o.zw)(U.currency(t.total)),1),(0,a._)("td",null,[(0,a.Wm)(R,{style:{cursor:"pointer"},icon:["far","trash-can"],class:"custom-trash",onClick:s=>U.deleteCart(t.id)},null,8,["onClick"])])])))),128))])])]),(0,a._)("div",y,[(0,a._)("div",_,[(0,a._)("div",C,"總計 : NT$ "+(0,o.zw)(U.currency(z.total)),1)])])]),(0,a._)("div",x,[(0,a._)("div",$,[(0,a.Wm)(Y,{class:"btn btn-outline-primary",to:"/products"},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{icon:["fas","arrow-left"],class:"pe-2"}),L])),_:1}),(0,a.Wm)(Y,{class:"btn btn-primary ms-auto",to:"/checkout/order"},{default:(0,a.w5)((()=>[D,(0,a.Wm)(R,{icon:["fas","arrow-right"],class:"ps-2"})])),_:1})])])],64)):((0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",T,[Z,(0,a.Wm)(Y,{class:"btn btn-primary fw-bolder fs-5",to:"/products"},{default:(0,a.w5)((()=>[W])),_:1})])]))])])],64)}var z=e(3850),U=e(7520),H=e(3329),j={components:{FrontBanner:z.Z,BreadCrumb:U.Z},data(){return{isLoading:!1,carts:[],finalTotal:0,total:0}},inject:["mitt","currency"],methods:{getCarts(){this.isLoading=!0,this.$http.get("https://vue3-course-api.hexschool.io/v2/api/skps0102/cart").then((t=>{this.isLoading=!1;const{carts:s,total:e}=t.data.data;this.carts=s,this.total=e,this.finalTotal=t.data.data.final_total})).catch((t=>{const{message:s,success:e}=t.response.data;(0,H.Z)(e,s)}))},updateCart(t){this.isLoading=!0;const{qty:s,id:e}=t,a={data:{product_id:t.product_id,qty:s}};this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/skps0102/cart/${e}`,a).then((t=>{this.isLoading=!1;const{message:s,success:e}=t.data;(0,H.Z)(e,s),this.getCarts()})).catch((t=>{const{message:s,success:e}=t.response.data;(0,H.Z)(e,s)}))},deleteCart(t){this.isLoading=!0,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/skps0102/cart/${t}`).then((t=>{this.isLoading=!1;const{message:s,success:e}=t.data;(0,H.Z)(e,s),this.mitt.emit("getCartLength"),this.getCarts()})).catch((t=>{const{message:s,success:e}=t.response.data;(0,H.Z)(e,s)}))},deleteCarts(){this.isLoading=!0,this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/skps0102/carts").then((t=>{this.isLoading=!1;const{message:s,success:e}=t.data;(0,H.Z)(e,s),this.mitt.emit("getCartLength"),this.getCarts()})).catch((t=>{const{message:s,success:e}=t.response.data;(0,H.Z)(e,s)}))}},mounted(){this.getCarts()}},V=e(3744);const R=(0,V.Z)(j,[["render",q]]);var Y=R}}]);
//# sourceMappingURL=515.622bb12f.js.map