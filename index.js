import{S as f,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="47584344-4fbbfc2b4e03cd845aed0766f",p="https://pixabay.com/api/";function h(o){const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${p}?${s.toString()}`;return fetch(e).then(n=>{if(!n.ok)throw new Error("Failed to fetch images");return n.json()})}const d=document.querySelector(".gallery");let c;function g(o){const s=o.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" width="360"/>
      <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </a>
  `).join("");d.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function y(){d.innerHTML=""}function b(o){o.classList.remove("hidden")}function u(o){o.classList.add("hidden")}const L=document.getElementById("search-form"),w=document.querySelector(".search-input"),l=document.querySelector(".loader");L.addEventListener("submit",o=>{o.preventDefault();const s=w.value.trim();if(!s){a.error({message:"Please enter a search term.",position:"topRight",backgroundColor:"#ef4040",class:"custom-toast-error"});return}y(),b(l),h(s).then(e=>{if(u(l),e.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#ef4040",class:"custom-toast-error"});return}g(e.hits)}).catch(e=>{u(l),a.error({message:"Something went wrong. Please try again.",position:"topRight",backgroundColor:"#ef4040",class:"custom-toast-error"}),console.error(e)})});
//# sourceMappingURL=index.js.map
