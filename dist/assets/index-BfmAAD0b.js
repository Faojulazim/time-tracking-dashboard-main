(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();const c=document.querySelectorAll("button"),a=document.querySelectorAll("[data-card]");for(let r=0;r<c.length;r++)c[r].addEventListener("click",i=>{c[r].classList.add("text-white");for(let e=0;e<c.length;e++)r!==e&&c[e].classList.remove("text-white");fetch("data.json").then(e=>e.json()).then(e=>{n(e,i.target.id)}).catch(e=>{console.log(e)})});const n=(r,i)=>{if(i==="daily"){console.log("Last Day");for(let e=0;e<r.length;e++)a[e].querySelector("[data-current]").innerText=`${r[e].timeframes[i].current}hrs`,a[e].querySelector("[data-previous]").innerText=`Last Day - ${r[e].timeframes[i].previous}hrs`,r[e].timeframes[i].current<=1&&r[e].timeframes[i].previous<=1&&(a[e].querySelector("[data-current]").innerText=`${r[e].timeframes[i].current}hr`,a[e].querySelector("[data-previous]").innerText=`Last Day - ${r[e].timeframes[i].previous}hr`)}if(i==="weekly"){console.log("Last Week");for(let e=0;e<r.length;e++)a[e].querySelector("[data-current]").innerText=`${r[e].timeframes[i].current}hrs`,a[e].querySelector("[data-previous]").innerText=`Last Week - ${r[e].timeframes[i].previous}hrs`,r[e].timeframes[i].current<=1&&r[e].timeframes[i].previous<=1&&(a[e].querySelector("[data-current]").innerText=`${r[e].timeframes[i].current}hr`,a[e].querySelector("[data-previous]").innerText=`Last Week - ${r[e].timeframes[i].previous}hr`)}if(i==="monthly"){console.log("Last Month");for(let e=0;e<r.length;e++)a[e].querySelector("[data-current]").innerText=`${r[e].timeframes[i].current}hrs`,a[e].querySelector("[data-previous]").innerText=`Last Month - ${r[e].timeframes[i].previous}hrs`,r[e].timeframes[i].current<=1&&r[e].timeframes[i].previous<=1&&(a[e].querySelector("[data-current]").innerText=`${r[e].timeframes[i].current}hr`,a[e].querySelector("[data-previous]").innerText=`Last Month - ${r[e].timeframes[i].previous}hr`)}};
