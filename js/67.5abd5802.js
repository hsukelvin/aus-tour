"use strict";(self["webpackChunkaus_tour"]=self["webpackChunkaus_tour"]||[]).push([[67],{7520:function(t,a,s){s.d(a,{Z:function(){return m}});var e=s(6252),o=s(3577);const r={class:"bg-light mb-5"},n={class:"container"},i={class:"py-4","aria-label":"breadcrumb"},c={class:"breadcrumb mb-0"};function u(t,a,s,u,l,d){const h=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("section",r,[(0,e._)("div",n,[(0,e._)("nav",i,[(0,e._)("ol",c,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(l.items,((t,a)=>((0,e.wg)(),(0,e.iD)("li",{class:(0,o.C_)(["breadcrumb-item",{active:!!t.link}]),key:a},[t.link?((0,e.wg)(),(0,e.j4)(h,{key:0,to:t.link},{default:(0,e.w5)((()=>[(0,e.Uk)((0,o.zw)(t.name),1)])),_:2},1032,["to"])):((0,e.wg)(),(0,e.iD)(e.HY,{key:1},[(0,e.Uk)((0,o.zw)(t.name),1)],64))],2)))),128))])])])])}var l={data(){return{items:[]}},props:["productTitle"],watch:{productTitle(){3===this.$route.meta.breadcrumb.length&&this.$route.meta.breadcrumb.pop(),this.$route.meta.breadcrumb.push({name:this.productTitle}),this.getRoute()},$route(){this.getRoute()}},methods:{getRoute(){this.items=this.$route.meta.breadcrumb}},created(){void 0===this.$route.params.id&&this.getRoute()},mounted(){}},d=s(3744);const h=(0,d.Z)(l,[["render",u]]);var m=h},3850:function(t,a,s){s.d(a,{Z:function(){return y}});var e=s(6252),o=s(3577),r=s(9963);const n={class:"mask d-flex justify-content-center align-items-center"},i={key:0,class:"content"},c=(0,e._)("h2",{class:"text-white fw-bolder rounded fs-1 my-3 mx-2","data-aos":"zoom-in","data-aos-duration":"1000"}," 澳式旅遊 Aus Tour ",-1),u=(0,e._)("p",{class:"text-white fs-4 fw-bolder my-0 mx-2","data-aos":"zoom-in","data-aos-duration":"1000"}," 帶你享受澳洲的經典，體驗一次永生難忘 ",-1),l=(0,e.Uk)(" 立即前往選擇景點 "),d={class:"bounce"},h=(0,e._)("span",null,"往下看更多",-1),m={key:1,class:"text-white","data-aos":"fade-in","data-aos-duration":"1000"},b={key:0,class:"fw-bolder"},f={key:1,class:"fw-bolder"},g={key:2,class:"fw-bolder"},p={key:3,class:"fw-bolder"},k={key:4,class:"fw-bolder"},v={key:5,class:"fw-bolder"};function w(t,a,s,w,C,$){const x=(0,e.up)("router-link"),y=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("section",{class:(0,o.C_)(["custom-banner",{"vh-30":C.isToggleVh,"products-banner":"products-banner"===this.backgroundClassname,"product-banner":"product-banner"===this.backgroundClassname,"about-banner":"about-banner"===this.backgroundClassname,"favorite-banner":"favorite-banner"===this.backgroundClassname,"cart-banner":"cart-banner"===this.backgroundClassname,"checkOut-banner":"checkOut-banner"===this.backgroundClassname}]),ref:"banner"},[(0,e._)("div",n,[C.isToggleVh?((0,e.wg)(),(0,e.iD)("div",m,["/products"===C.routePath?((0,e.wg)(),(0,e.iD)("h2",b,"景點列表")):C.routePath===`/product/${C.productId}`?((0,e.wg)(),(0,e.iD)("h2",f,(0,o.zw)(s.productTitle),1)):"/about"===C.routePath?((0,e.wg)(),(0,e.iD)("h2",g,"關於我們")):"/favorite"===C.routePath?((0,e.wg)(),(0,e.iD)("h2",p,"我的收藏")):"/cart"===C.routePath?((0,e.wg)(),(0,e.iD)("h2",k,"購物車")):((0,e.wg)(),(0,e.iD)("h2",v,"結帳流程"))])):((0,e.wg)(),(0,e.iD)("div",i,[c,u,(0,e.Wm)(x,{class:"btn btn-primary fw-bolder fs-4 px-5 my-3 mx-2",to:"/products","data-aos":"zoom-in","data-aos-duration":"1000"},{default:(0,e.w5)((()=>[l])),_:1}),(0,e._)("a",{class:"scroll-down-btn d-flex flex-column align-items-center text-white",href:"#",onClick:a[0]||(a[0]=(0,r.iM)(((...t)=>$.scrollToHome&&$.scrollToHome(...t)),["prevent"]))},[(0,e._)("span",d,[(0,e.Wm)(y,{icon:["fas","chevron-down"],class:"text-white fs-1"})]),h])]))])],2)}var C={data(){return{isToggleVh:!1,backgroundClassname:"",routePath:"",productId:""}},props:["productTitle"],inject:["mitt"],watch:{$route(){this.routePath=this.$route.fullPath,void 0!==this.$route.params.id&&(this.productId=this.$route.params.id)}},methods:{scrollToHome(){this.$emit("scroll-to-home","home")}},created(){"/home"!==this.$route.fullPath&&(this.isToggleVh=!0,"/products"===this.$route.fullPath&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="products-banner"),this.$route.fullPath===`/product/${this.$route.params.id}`&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="product-banner"),"/about"===this.$route.fullPath&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="about-banner"),"/favorite"===this.$route.fullPath&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="favorite-banner"),"/cart"===this.$route.fullPath&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="cart-banner"),this.$route.fullPath.includes("/checkout")&&(""!==this.backgroundClassname&&this.$refs.banner.classList.remove(this.backgroundClassname),this.backgroundClassname="checkOut-banner"))},mounted(){this.routePath=this.$route.fullPath,void 0!==this.$route.params.id&&(this.productId=this.$route.params.id)},beforeUnmount(){this.mitt.off("getRoutePath")}},$=s(3744);const x=(0,$.Z)(C,[["render",w]]);var y=x},7067:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=s(6252),o=s(1349),r=s(5821);const n=(0,e.uE)('<section class="mb-5"><div class="container"><div class="row flex-row-reverse"><div class="col-md-6 d-flex flex-column justify-content-center p-4" data-aos="zoom-in" data-aos-duration="1000"><h2 class="text-center fw-bolder mb-3">我們的故事</h2><p class="text-start px-4 mb-0"> 我們是一群熱愛澳洲旅行的團隊，因5年前到澳洲打工度假體驗不同文化的生活而愛上這裡， 而決定待在澳洲生活，工作之餘我們喜歡開車到處去放鬆身心，久而久之我們對澳洲越來越熟悉， 而進一步創立了澳洲景點帶人暢遊的服務。 </p></div><div class="col-md-6 p-4" data-aos="zoom-in" data-aos-duration="2000"><img class="img-fluid" src="'+o+'" alt="about_img"></div></div><div class="row"><div class="col-md-6 d-flex flex-column justify-content-center p-4" data-aos="zoom-in" data-aos-duration="1000"><h2 class="text-center fw-bolder mb-3">服務簡介</h2><p class="text-start px-4 mb-0"> 我們屬於開車帶小團體(不超過10人)遊客去想去的景點並介紹解說給他們了解澳洲各景點的文化由來， 比較一般旅行團品質較高，且大不相同，所以您可以放心地讓我們為您服務，保證滿意， 在未來將會提供更多元的旅遊行程。 </p></div><div class="col-md-6 p-4" data-aos="zoom-in" data-aos-duration="2000"><img class="img-fluid" src="'+r+'" alt="about_img"></div></div></div></section>',1);function i(t,a,s,o,r,i){const c=(0,e.up)("FrontBanner"),u=(0,e.up)("BreadCrumb");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),(0,e.Wm)(u),n],64)}var c=s(3850),u=s(7520),l={components:{FrontBanner:c.Z,BreadCrumb:u.Z}},d=s(3744);const h=(0,d.Z)(l,[["render",i]]);var m=h},1349:function(t,a,s){t.exports=s.p+"img/about_1.04dcb9b8.jpg"},5821:function(t,a,s){t.exports=s.p+"img/about_2.cc183c11.jpg"}}]);
//# sourceMappingURL=67.5abd5802.js.map