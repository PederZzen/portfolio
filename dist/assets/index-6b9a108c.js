(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();const u=document.getElementById("menu_icon"),r=document.getElementById("get_in_touch").classList,a=()=>{r.contains("show_menu")?(r.remove("show_menu"),r.add("hide_menu")):(r.add("show_menu"),r.remove("hide_menu"))};u.addEventListener("click",a);const i=document.querySelectorAll("section"),l=document.querySelector("#side_bar"),m=()=>{for(let t=0;t<l.children.length;t++)l.children[t].classList.remove("side_bar__dot__selected")};window.addEventListener("scroll",()=>{i.forEach((t,n)=>{t.getBoundingClientRect().top<window.innerHeight/2&&t.getBoundingClientRect().bottom>window.innerHeight/2&&(m(),l.children[n].classList.add("side_bar__dot__selected"))})});document.querySelectorAll(".side_bar__dot").forEach((t,n)=>{t.addEventListener("click",()=>{window.scrollTo({top:i[n].offsetTop})})});const f=document.getElementById("scroll_down"),h=document.getElementById("anchor"),y=document.querySelector("#logo"),_=()=>{h.scrollIntoView()};f.addEventListener("click",_);const g=()=>{scrollTo({top:0})};y.addEventListener("click",g);const p=document.querySelectorAll(".work_card");p.forEach(t=>{t.addEventListener("mouseover",()=>{t.lastElementChild.style.opacity=1}),t.addEventListener("mouseleave",()=>{t.lastElementChild.style.opacity=0})});