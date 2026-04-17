import{a as l,S as f,i as n}from"./assets/vendor-Cu43xbyG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u="55463829-87ababc408fcd8cb97ff0a765";async function m(a,t=1){return(await l.get("https://pixabay.com/api/",{params:{key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t}})).data}const c=document.querySelector(".gallery");let p=new f(".gallery a");function d(a){const t=a.map(r=>`
      <li class="gallery-item">
        <a class="item-link" href="${r.largeImageURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="img-info-wrapper">
          <p class="img-info">Likes: <span class="info-accent">${r.likes}</span></p>
          <p class="img-info">Views: <span class="info-accent">${r.views}</span></p>
          <p class="img-info">Comments: <span class="info-accent">${r.comments}</span></p>
          <p class="img-info">Downloads: <span class="info-accent">${r.downloads}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),p.refresh()}function y(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.add("active")}function h(){document.querySelector(".loader").classList.remove("active")}function L(a){return new Promise(t=>setTimeout(t,a))}const w=document.querySelector(".form");w.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search query!"});return}y(),g();try{const r=await m(t);if(await L(500),r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}d(r.hits)}catch{n.error({message:"Error fetching images"})}finally{h()}});
//# sourceMappingURL=index.js.map
