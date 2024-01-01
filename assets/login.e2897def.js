import{k as F,f,l as N,o as r,c,m as w,v as T,g as t,a as s,q as m,t as C,i as R,r as _,s as S,b as g,n as v,F as $,j as B}from"./entry.593961be.js";const D=["id","placeholder","type","maxlength"],I={key:0,class:"text-red-500 text-[14px] font-semibold"},U={__name:"TextInput",props:["input","placeholder","inputType","max","autoFocus","error"],emits:["update:input"],setup(y,{emit:p}){const u=p,n=y,{input:i,placeholder:d,inputType:b,max:x,autoFocus:l,error:e}=F(n);f(()=>{l.value&&document.getElementById(`input-${d.value}`).focus()});const a=N({get:()=>i.value,set:o=>u("update:input",o)});return(o,h)=>(r(),c("div",null,[w(s("input",{id:`input-${t(d)}`,placeholder:t(d),class:"block w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none",type:t(b),"onUpdate:modelValue":h[0]||(h[0]=k=>m(a)?a.value=k:null),autocomplete:"off",maxlength:t(x)},null,8,D),[[T,t(a)]]),t(e)?(r(),c("span",I,C(t(e)),1)):R("",!0)]))}},V=s("div",{class:"my-3"},[s("h2",{class:"text-center text-2xl font-semibold"}," Digital Study Planner ")],-1),E={class:"max-w-md mx-auto bg-white m-3 py-6 border rounded-md"},L={key:0},M=s("div",{class:"text-center text-[28px] mb-4 font-bold"},"Login",-1),P={class:"px-6 pb-2"},j={class:"px-6 pb-2 mt-6"},q=["disabled"],z={key:1},A=s("div",{class:"text-center text-[28px] mb-4 font-bold"},"Sign up",-1),G={class:"px-6 pb-2"},H={class:"px-6 pb-2"},J={class:"px-6 pb-2 mt-6"},K=["disabled"],Q={__name:"login",setup(y){const{$userStore:p}=B();let u=_(null),n=_(null),i=_(null);const d=S(),b=async()=>{try{let l=n.value.slice(-11);p.login(l,d)}catch(l){console.log(l)}},x=async()=>{try{let l=n.value.slice(-11);p.register(u.value,l,i.value,d)}catch(l){console.log(l)}};return f(()=>{p.isNotRegistered=!0}),(l,e)=>{const a=U;return r(),c($,null,[V,s("div",E,[t(p).isNotRegistered?(r(),c("div",L,[M,s("div",P,[g(a,{placeholder:"Phone Number",input:t(n),"onUpdate:input":e[0]||(e[0]=o=>m(n)?n.value=o:n=o),inputType:"tel"},null,8,["input"])]),s("div",j,[s("button",{disabled:!t(n),class:v([t(n)?"bg-blue-500":"bg-gray-200","w-full text-[17px] font-semibold text-white bg-blue-500 py-3 rounded-sm"]),onClick:e[1]||(e[1]=o=>b())}," Login ",10,q)])])):(r(),c("div",z,[A,s("div",G,[g(a,{placeholder:"Full name",input:t(u),"onUpdate:input":e[2]||(e[2]=o=>m(u)?u.value=o:u=o),inputType:"text",autoFocus:!0},null,8,["input"])]),s("div",H,[g(a,{placeholder:"Institute",input:t(i),"onUpdate:input":e[3]||(e[3]=o=>m(i)?i.value=o:i=o),inputType:"text"},null,8,["input"])]),s("div",J,[s("button",{disabled:!t(u)||!t(n)||!t(i),class:v([!t(u)||!t(n)||!t(i)?"bg-gray-200":"bg-blue-500","w-full text-[17px] font-semibold text-white bg-blue-500 py-3 rounded-sm"]),onClick:e[4]||(e[4]=o=>x())}," Sign up ",10,K)])]))])],64)}}};export{Q as default};
