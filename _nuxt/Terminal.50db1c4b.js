import{u as m}from"./index.cf3dd428.js";import{a as v,r as h,Q as f,o as s,i as o,u as i,l as _,k as t,F as y,V as k,s as C,v as g,t as x,x as S}from"./entry.e9fcba37.js";const c=e=>(C("data-v-2808c0f6"),e=e(),g(),e),w={key:0,class:"copied"},B=c(()=>t("div",{class:"scrim"},null,-1)),I=c(()=>t("div",{class:"content"}," Copied! ",-1)),T=[B,I],b=c(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),V={class:"window"},F=c(()=>t("span",{class:"sign"},"$",-1)),N={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(e){const a=e,{copy:p}=m(),n=h("init"),r=f(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{p(r.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(n)==="copied"?(s(),o("div",w,T)):_("",!0),b,t("div",V,[(s(!0),o(y,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[F,t("span",N,x(d),1)]))),128))]),i(n)!=="copied"?(s(),o("div",j," Click to copy ")):_("",!0)]))}});const L=S(q,[["__scopeId","data-v-2808c0f6"]]);export{L as default};