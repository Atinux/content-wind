import b from"./TabsHeader.875f0454.js";import x from"./ComponentPlaygroundProps.e2984dff.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.b565ffe2.js";import{_ as g}from"./ComponentPlaygroundTokens.vue.47ad7ef9.js";import{a as D}from"./index.cf3dd428.js";import{a as V,r as k,o as a,i as C,m as P,u as o,c as m,aa as T,l,x as B}from"./entry.e9fcba37.js";import"./ProseH4.1afda67b.js";import"./ProseCodeInline.ea002521.js";import"./Badge.c55f6820.js";import"./ContentSlot.82664d42.js";import"./ProseP.bbe8e518.js";const I={class:"component-playground-data"},j=V({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const n=D(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=s=>e.value=s;return(s,c)=>{const u=b,_=x,i=v,f=g;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":c[0]||(c[0]=y=>T(n)?n.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):l("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):l("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):l("",!0)])}}});const z=B(j,[["__scopeId","data-v-a8c957da"]]);export{z as default};