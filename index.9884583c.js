const t=document.getElementById("top-stories"),e=async()=>{try{let t=await fetch("/mock.json");return await t.json()}catch(t){return alert("An error occured",t),[]}},r=e=>{t.innerHTML="",(e.results||[]).forEach(e=>{let r=document.createElement("div");r.setAttribute("class","article"),r.innerHTML=`
      <h2>${e?.title}</h2>
      ${e?.abstract}
    `,t.appendChild(r)})};(async()=>{r(await e())})();
//# sourceMappingURL=index.9884583c.js.map
