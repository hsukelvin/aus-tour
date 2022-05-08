"use strict";(self["webpackChunkaus_tour"]=self["webpackChunkaus_tour"]||[]).push([[11],{3329:function(e,t,s){var r=s(1530);t["Z"]=(e,t)=>{r.Z.emit("push-message",{style:!0===e?"success":"danger",title:!0===e?"成功":"失敗",content:t})}},7011:function(e,t,s){s.r(t),s.d(t,{default:function(){return G}});var r=s(6252),n=s(3577);const l={class:"container"},i={class:"row flex-row-reverse"},a={class:"col-md-6 p-2"},o=(0,r._)("div",{class:"bg-light"},[(0,r._)("h4",{class:"text-center fw-bolder p-4 m-0"},"購買景點明細")],-1),c={class:"table-responsive bg-light px-4"},d={class:"table text-center align-middle m-0"},u={class:"text-nowrap"},p={class:"text-nowrap"},_={class:"text-end bg-light p-4"},g={class:"h5 fw-bold p-2 mb-0"},h={class:"col-md-6 p-2"},m={class:"bg-light"},b=(0,r._)("h4",{class:"text-center fw-bolder p-4 m-0"},"訂單資訊",-1),w={class:"list-group px-4"},f={class:"list-group-item border-0 d-flex justify-content-between align-items-center"},v=(0,r._)("span",null,"訂購時間 : ",-1),x={class:"list-group-item border-0 d-flex justify-content-between align-items-center"},y=(0,r._)("span",null,"訂單編號 : ",-1),k={class:"list-group-item border-0 d-flex justify-content-between align-items-center"},z=(0,r._)("span",null,"付款狀態 : ",-1),$=(0,r._)("h4",{class:"text-center fw-bolder p-4 m-0"},"購買人資料",-1),j={class:"list-group px-4 pb-4"},L={class:"list-group-item border-0 d-flex justify-content-between align-items-center"},C=(0,r._)("span",null,"姓名 : ",-1),Z={class:"list-group-item border-0 d-flex justify-content-between align-items-center"},O=(0,r._)("span",null,"地址 : ",-1),D={class:"list-group-item border-0 d-flex justify-content-between align-items-center"},H=(0,r._)("span",null,"電話 : ",-1),N={class:"list-group-item border-0 d-flex justify-content-between align-items-center"},T=(0,r._)("span",null,"Email : ",-1),Y={class:"list-group-item border-0"},q=(0,r._)("span",null,"留言 : ",-1),E={class:"text-break mb-0"},K={class:"text-center px-4 pb-4"};function U(e,t,s,U,W,A){const B=(0,r.up)("Loading");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(B,{active:W.isLoading},null,8,["active"]),(0,r._)("div",l,[(0,r._)("div",i,[(0,r._)("div",a,[o,(0,r._)("div",c,[(0,r._)("table",d,[(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(W.order.products,(e=>((0,r.wg)(),(0,r.iD)("tr",{key:e.id},[(0,r._)("td",null,[(0,r._)("div",{class:"m-auto",style:(0,n.j5)(`\n                      width: 6rem;\n                      height: 5rem;\n                      background-size: cover;\n                      background-position: center center;\n                      background-image: url(${e.product.imageUrl});\n                    `)},null,4)]),(0,r._)("td",u,(0,n.zw)(e.product.title),1),(0,r._)("td",null,(0,n.zw)(`x ${e.qty}`),1),(0,r._)("td",p,"NT$ "+(0,n.zw)(A.currency(e.total)),1)])))),128))])])]),(0,r._)("div",_,[(0,r._)("div",g,"總金額 : NT$ "+(0,n.zw)(A.currency(W.order.total)),1)])]),(0,r._)("div",h,[(0,r._)("div",m,[b,(0,r._)("ul",w,[(0,r._)("li",f,[v,(0,r._)("span",null,(0,n.zw)(A.timeConvert(W.order.create_at)),1)]),(0,r._)("li",x,[y,(0,r._)("span",null,(0,n.zw)(W.order.id),1)]),(0,r._)("li",k,[z,(0,r._)("span",{class:(0,n.C_)({"text-danger":!W.order.is_paid})},(0,n.zw)(W.order.is_paid?"已付款":"尚未付款"),3)])]),$,(0,r._)("ul",j,[(0,r._)("li",L,[C,(0,r._)("span",null,(0,n.zw)(W.user.name),1)]),(0,r._)("li",Z,[O,(0,r._)("span",null,(0,n.zw)(W.user.address),1)]),(0,r._)("li",D,[H,(0,r._)("span",null,(0,n.zw)(W.user.tel),1)]),(0,r._)("li",N,[T,(0,r._)("span",null,(0,n.zw)(W.user.email),1)]),(0,r._)("li",Y,[q,(0,r._)("p",E,(0,n.zw)(W.order.message),1)])]),(0,r._)("div",K,[(0,r._)("button",{type:"button",class:"btn btn-primary",style:{width:"100%"},onClick:t[0]||(t[0]=(...e)=>A.payOrder&&A.payOrder(...e))}," 馬上付款 ")])])])])])],64)}var W=s(3329),A={data(){return{isLoading:!1,order:{},user:{}}},inject:["timeConvert","currency"],methods:{getOrder(){this.isLoading=!0;const{id:e}=this.$route.params;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/skps0102/order/${e}`).then((e=>{this.isLoading=!1;const{order:t}=e.data;!0===t.is_paid?this.$router.push(`/checkout/payed/${t.id}`):(this.order=t,this.user=t.user)})).catch((e=>{const{message:t,success:s}=e.response.data;(0,W.Z)(s,t)}))},payOrder(){this.isLoading=!0,this.$http.post(`https://vue3-course-api.hexschool.io/v2/api/skps0102/pay/${this.order.id}`).then((e=>{this.isLoading=!1;const{message:t,success:s}=e.data;(0,W.Z)(s,t),this.$router.push(`/checkout/payed/${this.order.id}`)})).catch((e=>{const{message:t,success:s}=e.response.data;(0,W.Z)(s,t)}))}},mounted(){this.getOrder()}},B=s(3744);const F=(0,B.Z)(A,[["render",U]]);var G=F}}]);
//# sourceMappingURL=11.544ef3b0.js.map