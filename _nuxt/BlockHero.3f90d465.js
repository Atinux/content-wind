import f from"./ContentSlot.82664d42.js";import y from"./ButtonLink.66ccbedc.js";import h from"./Terminal.50db1c4b.js";import k from"./VideoPlayer.428da507.js";import{a as v,o as s,i as a,k as o,m as c,l as r,w as i,U as u,c as l,F as $,t as d,L as B,x as w}from"./entry.e9fcba37.js";import"./index.cf3dd428.js";import"./NuxtImg.vue.35c29d7d.js";const S={class:"block-hero"},g={class:"layout"},C={class:"content"},H={key:0,class:"announce"},V={class:"title"},b={class:"description"},q={key:1,class:"extra"},x={class:"actions"},N=["href"],A={class:"support"},T=v({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,F)=>{const n=f,_=y,p=h,m=k;return s(),a("section",S,[o("div",g,[o("div",C,[t.$slots.announce?(s(),a("p",H,[c(n,{use:t.$slots.announce,unwrap:"p"},null,8,["use"])])):r("",!0),o("h1",V,[c(n,{use:t.$slots.title,unwrap:"p"},{default:i(()=>[u(" Hero Title ")]),_:1},8,["use"])]),o("p",b,[c(n,{use:t.$slots.description,unwrap:"p"},{default:i(()=>[u(" Hero default description. ")]),_:1},8,["use"])]),t.$slots.extra?(s(),a("div",q,[c(n,{use:t.$slots.extra,unwrap:"p"},null,8,["use"])])):r("",!0),o("div",x,[t.$slots.actions?(s(),l(n,{key:0,use:t.$slots.actions,unwrap:"p"},null,8,["use"])):(s(),a($,{key:1},[e.cta?(s(),l(_,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:i(()=>[u(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(s(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,N)):r("",!0)],64))])]),o("div",A,[B(t.$slots,"support",{},()=>[e.snippet?(s(),l(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(s(),l(m,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}});const j=w(T,[["__scopeId","data-v-b7378d9f"]]);export{j as default};