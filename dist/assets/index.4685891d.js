var N=Object.defineProperty,x=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var d=(n,e,t)=>e in n?N(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,u=(n,e)=>{for(var t in e||(e={}))g.call(e,t)&&d(n,t,e[t]);if(a)for(var t of a(e))y.call(e,t)&&d(n,t,e[t]);return n},m=(n,e)=>x(n,v(e));import{j as f,r as p,R as b,a as T}from"./vendor.ae696ef6.js";const L=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}};L();const o=f.exports.jsx,i=f.exports.jsxs;function j({inputText:n,setInputText:e,todos:t,setTodos:c}){return i("form",{children:[o("input",{value:n,onChange:s=>{console.log(s.target.value),e(s.target.value)},type:"text",className:"todo-input"}),o("button",{onClick:s=>{s.preventDefault(),c([...t,{text:n,completed:!1,id:Math.random()*1e3}]),e("")},className:"todo-button",type:"submit",children:o("i",{className:"fas fa-plus-square"})}),o("div",{className:"select",children:i("select",{name:"todos",className:"filter-todo",children:[o("option",{value:"all",children:"All"}),o("option",{value:"completed",children:"Completed"}),o("option",{value:"uncompleted",children:"Uncompleted"})]})})]})}const H=({text:n,todo:e,todos:t,setTodos:c})=>{const r=s=>{c(t.filter(h=>h.id!==e.id))},l=()=>{c(t.map(s=>{if(s.id===e.id)return m(u({},s),{completed:!s.completed})}))};return i("div",{className:"todo",children:[o("li",{className:`todo-item ${e.completed?"completed":""}`,children:n}),o("button",{onClick:l,className:"complete-btn",children:o("i",{className:"fas fa-check"})}),o("button",{onClick:r,className:"trash-btn",children:o("i",{className:"fas fa-trash"})})]})},A=({todos:n,setTodos:e})=>o("div",{className:"todo-container",children:o("ul",{className:"todo-list",children:n.map(t=>o(H,{setTodos:e,todos:n,todo:t,text:t.text,id:t.id},t.id))})});function C(){const[n,e]=p.exports.useState(""),[t,c]=p.exports.useState([]);return i("div",{className:"App",children:[o("header",{children:o("h1",{children:"Todo List"})}),o(j,{inputText:n,setInputText:e,todos:t,setTodos:c}),o(A,{setTodos:c,todos:t})]})}b.render(o(T.StrictMode,{children:o(C,{})}),document.getElementById("root"));