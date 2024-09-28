const t=async()=>{try{let t=await fetch("/mock.json");return await t.json()}catch(t){return alert("An error occured",t),[]}},e=document.getElementById("top-stories"),r=t=>{e.innerHTML="",(t.results||[]).forEach(t=>{let r=document.createElement("div");r.setAttribute("class","article"),r.innerHTML=`
      <h2>${t?.title}</h2>
      ${t?.abstract}
    `,e.appendChild(r)})};(async()=>{r(await t())})();
//# sourceMappingURL=index.5c1d1b69.js.map
