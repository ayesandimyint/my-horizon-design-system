import{c as l}from"./core.value.tokens-BnFFGnyH.js";const d=Object.entries(l).filter(([o])=>o.startsWith("color-")).reduce((o,[r,t])=>{const s=r.replace("color-","").split("-"),e=s[s.length-1],i=s.slice(0,-1).join("-");return o[i]||(o[i]={}),o[i][e]={key:r,...t},o},{}),p=o=>{const[r,t,s]=o.map(e=>Math.round(e*255));return`#${r.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`},m=o=>{const[r,t,s]=o.map(e=>Math.round(e*255));return`rgb(${r}, ${t}, ${s})`},g={title:"Design Tokens/Colors",parameters:{layout:"fullscreen"}},h=()=>{const o=`
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 40px; }
      .color-family { margin-bottom: 60px; }
      .family-name { font-size: 24px; font-weight: 600; margin-bottom: 20px; }
      .color-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
      .color-swatch { display: flex; flex-direction: column; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
      .swatch-color { height: 80px; width: 100%; }
      .swatch-info { padding: 12px; font-size: 12px; background: #f5f5f5; }
      .swatch-name { font-weight: 500; margin-bottom: 4px; }
      .swatch-value { color: #666; font-family: monospace; font-size: 11px; }
      .swatch-description { color: #999; font-size: 11px; margin-top: 4px; }
    </style>
  `,r=Object.entries(d).sort().map(([t,s])=>{const e=Object.entries(s).sort((i,a)=>{const n=parseInt(i[0])||0,c=parseInt(a[0])||0;return n-c});return`
        <div class="color-family">
          <div class="family-name">${t.charAt(0).toUpperCase()+t.slice(1)}</div>
          <div class="color-row">
            ${e.map(([i,a])=>{const n=p(a.$value.components),c=m(a.$value.components);return`
                  <div class="color-swatch">
                    <div class="swatch-color" style="background-color: ${n};"></div>
                    <div class="swatch-info">
                      <div class="swatch-name">${t}-${i}</div>
                      <div class="swatch-value">${n}</div>
                      <div class="swatch-value">${c}</div>
                      ${a.$description?`<div class="swatch-description">${a.$description}</div>`:""}
                    </div>
                  </div>
                `}).join("")}
          </div>
        </div>
      `}).join("");return`
    ${o}
    <div>
      <h1>Design System Colors</h1>
      ${r}
    </div>
  `},v={render:()=>h()},u=["AllColors"];export{v as AllColors,u as __namedExportsOrder,g as default};
