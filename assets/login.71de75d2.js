import{v as N,x as f,y as k,o as r,c,z as w,A as T,u as t,a as s,B as m,t as C,s as B,r as _,C as D,b as g,n as v,F as R,D as S}from"./entry.5dd55c72.js";const $=["id","placeholder","type","maxlength"],I={key:0,class:"text-red-500 text-[14px] font-semibold"},U={__name:"TextInput",props:["input","placeholder","inputType","max","autoFocus","error"],emits:["update:input"],setup(y,{emit:p}){const u=p,n=y,{input:i,placeholder:d,inputType:x,max:b,autoFocus:l,error:e}=N(n);f(()=>{l.value&&document.getElementById(`input-${d.value}`).focus()});const a=k({get:()=>i.value,set:o=>u("update:input",o)});return(o,h)=>(r(),c("div",null,[w(s("input",{id:`input-${t(d)}`,placeholder:t(d),class:"block w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none",type:t(x),"onUpdate:modelValue":h[0]||(h[0]=F=>m(a)?a.value=F:null),autocomplete:"off",maxlength:t(b)},null,8,$),[[T,t(a)]]),t(e)?(r(),c("span",I,C(t(e)),1)):B("",!0)]))}},V=s("div",{class:"my-3"},[s("h2",{class:"text-center text-2xl font-semibold"}," Digital Study Planner ")],-1),z={class:"max-w-md mx-auto bg-white m-3 py-6 border rounded-md"},A={key:0},E=s("div",{class:"text-center text-[28px] mb-4 font-bold"},"Login",-1),L={class:"px-6 pb-2"},M={class:"px-6 pb-2 mt-6"},P=["disabled"],j={key:1},q=s("div",{class:"text-center text-[28px] mb-4 font-bold"},"Sign up",-1),G={class:"px-6 pb-2"},H={class:"px-6 pb-2"},J={class:"px-6 pb-2 mt-6"},K=["disabled"],Q={__name:"login",setup(y){const{$userStore:p}=S();let u=_(null),n=_(null),i=_(null);const d=D(),x=async()=>{try{let l=n.value.slice(-11);p.login(l,d)}catch(l){console.log(l)}},b=async()=>{try{let l=n.value.slice(-11);p.register(u.value,l,i.value,d)}catch(l){console.log(l)}};return f(()=>{p.isNotRegistered=!0}),(l,e)=>{const a=U;return r(),c(R,null,[V,s("div",z,[t(p).isNotRegistered?(r(),c("div",A,[E,s("div",L,[g(a,{placeholder:"Phone Number",input:t(n),"onUpdate:input":e[0]||(e[0]=o=>m(n)?n.value=o:n=o),inputType:"tel"},null,8,["input"])]),s("div",M,[s("button",{disabled:!t(n),class:v([t(n)?"bg-blue-500":"bg-gray-200","w-full text-[17px] font-semibold text-white bg-blue-500 py-3 rounded-sm"]),onClick:e[1]||(e[1]=o=>x())}," Login ",10,P)])])):(r(),c("div",j,[q,s("div",G,[g(a,{placeholder:"Full name",input:t(u),"onUpdate:input":e[2]||(e[2]=o=>m(u)?u.value=o:u=o),inputType:"text",autoFocus:!0},null,8,["input"])]),s("div",H,[g(a,{placeholder:"Institute",input:t(i),"onUpdate:input":e[3]||(e[3]=o=>m(i)?i.value=o:i=o),inputType:"text"},null,8,["input"])]),s("div",J,[s("button",{disabled:!t(u)||!t(n)||!t(i),class:v([!t(u)||!t(n)||!t(i)?"bg-gray-200":"bg-blue-500","w-full text-[17px] font-semibold text-white bg-blue-500 py-3 rounded-sm"]),onClick:e[4]||(e[4]=o=>b())}," Sign up ",10,K)])]))])],64)}}};export{Q as default};
