import b from"./Input.818d5c36.js";import h from"./Button.8f4dc389.js";import{a as x,C as v,y as S,r as C,R as F,o as l,i as u,k as d,F as R,K as w,u as s,m as B,w as T,L as V,t as k,c as E,x as j}from"./entry.a724e635.js";const N=["action"],O={class:"inputs"},q=x({__name:"ContactForm",props:{submitButtonText:{type:String,default:"Send message"},fields:{type:Array,default:()=>[{type:"text",model:"name",name:"Name",placeholder:"Your name",required:!0,layout:"default"},{type:"email",model:"email",name:"Email",placeholder:"Your email",required:!0,layout:"default"},{type:"text",model:"text",name:"Subject",required:!1,layout:"default"},{type:"textarea",model:"message",name:"Message",placeholder:"Your message",required:!0,layout:"big"}]}},setup(m){const i=m,p=v().alpine,{FORMSPREE_URL:n}=S().public;n||console.warn("No FORMSPREE_URL provided");const t=C(),_=F(i.fields.map(e=>({...e,data:""}))),f=async e=>{e.preventDefault();const c=new FormData(e.target);t.value="Sending...",fetch(e.target.action,{method:e.target.method,body:c,headers:{Accept:"application/json"}}).then(r=>{r.ok?(t.value=p.form.successMessage,e.target.reset()):r.json().then(a=>{Object.hasOwn(a,"errors")?(t.value=a.errors[0].message,console.error(a.errors.map(o=>o.message).join(", ")),setTimeout(()=>{t.value="Send message"},2e3)):console.error("There was a problem submitting your form")})}).catch(()=>{console.error("There was a problem submitting your form")})};return(e,c)=>{const r=b,a=h;return l(),u("form",{class:"contact-form",method:"POST",action:s(n),onSubmit:f},[d("div",O,[(l(!0),u(R,null,w(s(_),(o,g)=>(l(),E(r,{key:g,modelValue:o.data,"onUpdate:modelValue":y=>o.data=y,field:o},null,8,["modelValue","onUpdate:modelValue","field"]))),128))]),d("div",null,[B(a,{type:"submit",disabled:!s(n)},{default:T(()=>[V(k(s(t)?s(t):m.submitButtonText),1)]),_:1},8,["disabled"])])],40,N)}}});const A=j(q,[["__scopeId","data-v-0c83bab1"]]);export{A as default};
