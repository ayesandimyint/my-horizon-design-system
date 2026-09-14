const y={$type:"typography",$value:{fontFamily:"{fontfamily-heading}",fontWeight:"Medium",fontSize:"{fontsize-jumbo}",lineHeight:"{lineheight-jumbo}",letterSpacing:{value:0,unit:"px"}}},g={$type:"typography",$value:{fontFamily:"{fontfamily-heading}",fontWeight:"SemiBold",fontSize:"{fontsize-3xl}",lineHeight:"{lineheight-3xl}",letterSpacing:{value:0,unit:"px"}}},h={$type:"typography",$value:{fontFamily:"{fontfamily-heading}",fontWeight:"Regular",fontSize:"{fontsize-2xl}",lineHeight:"{lineheight-2xl}",letterSpacing:{value:0,unit:"px"}}},s={$type:"typography",$value:{fontFamily:"{fontfamily-heading}",fontWeight:"SemiBold",fontSize:"{fontsize-xl}",lineHeight:"{lineheight-xl}",letterSpacing:{value:0,unit:"px"}}},d={$type:"typography",$value:{fontFamily:"{fontfamily-heading}",fontWeight:"Regular",fontSize:"{fontsize-lg}",lineHeight:"{lineheight-lg}",letterSpacing:{value:0,unit:"px"}}},m={$type:"typography",$value:{fontFamily:"{fontfamily-heading}",fontWeight:"SemiBold",fontSize:"{fontsize-md}",lineHeight:"{lineheight-md}",letterSpacing:{value:0,unit:"px"}}},r={$type:"typography",$value:{fontFamily:"{fontfamily-caption}",fontWeight:"SemiBold",fontSize:"{fontsize-lg}",lineHeight:"{lineheight-lg}",letterSpacing:{value:0,unit:"px"}}},v={$type:"typography",$value:{fontFamily:"{fontfamily-caption}",fontWeight:"SemiBold",fontSize:"{fontsize-md}",lineHeight:"{lineheight-md}",letterSpacing:{value:0,unit:"px"}}},u={$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"Regular",fontSize:"{fontsize-lg}",lineHeight:"{lineheight-lg}",letterSpacing:{value:0,unit:"px"}}},c={$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"Medium",fontSize:"{fontsize-md}",lineHeight:"{lineheight-md}",letterSpacing:{value:0,unit:"px"}}},S={$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"Regular",fontSize:"{fontsize-md}",lineHeight:"{lineheight-sm}",letterSpacing:{value:0,unit:"px"}}},$={$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"Medium",fontSize:"{fontsize-xs}",lineHeight:"{lineheight-xs}",letterSpacing:{value:0,unit:"px"}}},x={$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"Medium",fontSize:"{fontsize-2xs}",lineHeight:"{lineheight-2xs}",letterSpacing:{value:0,unit:"px"}}},z={$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"SemiBold",fontSize:"{fontsize-md}",lineHeight:"{lineheight-md}",letterSpacing:{value:0,unit:"px"}}},b={$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"SemiBold",fontSize:"{fontsize-sm}",lineHeight:"{lineheight-sm}",letterSpacing:{value:0,unit:"px"}}},F={$type:"typography",$value:{fontFamily:"{fontfamily-label}",fontWeight:"SemiBold",fontSize:"{fontsize-sm}",lineHeight:"{lineheight-sm}",letterSpacing:{value:0,unit:"px"}}},H={$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"SemiBold",fontSize:"{fontsize-md}",lineHeight:"{lineheight-md}",letterSpacing:{value:0,unit:"px"}}},W={$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"SemiBold",fontSize:"{fontsize-sm}",lineHeight:"{lineheight-sm}",letterSpacing:{value:0,unit:"px"}}},B={h1:y,h2:g,h3:h,h4:s,h5:d,h6:m,caption1:r,caption2:v,body1:u,body2:c,body3:S,body4:$,body5:x,bodyunderlined2:z,bodyunderlined3:b,label:F,button1:H,button2:W,"cap-body1":{$type:"typography",$value:{fontFamily:"{fontfamily-body}",fontWeight:"Regular",fontSize:"{fontsize-xl}",lineHeight:"{lineheight-md}",letterSpacing:{value:0,unit:"px"}}}},w={title:"Design Tokens/Typography",parameters:{layout:"fullscreen"}},T=()=>{const f=`
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 40px; }
      .typography-family { margin-bottom: 60px; }
      .family-name { font-size: 24px; font-weight: 600; margin-bottom: 20px; }
      .typography-item { margin-bottom: 32px; padding: 24px; background: #f9f9f9; border-radius: 8px; border: 1px solid #e0e0e0; }
      .typography-preview { margin-bottom: 16px; }
      .typography-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; font-size: 12px; }
      .info-item { }
      .info-label { font-weight: 600; color: #666; margin-bottom: 4px; }
      .info-value { color: #999; font-family: monospace; }
    </style>
  `,p=Object.entries(B).filter(([i])=>typeof i=="string").map(([i,t])=>{if(t.$type==="typography"){const{fontFamily:e,fontSize:n,fontWeight:o,lineHeight:l,letterSpacing:a}=t.$value;return`
          <div class="typography-item">
            <div class="typography-preview" style="font-family: ${e}; font-size: ${n}; font-weight: ${o}; line-height: ${l}; letter-spacing: ${a};">
              The quick brown fox jumps over the lazy dog
            </div>
            <div class="typography-info">
              <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">${i}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Font Family</div>
                <div class="info-value">${e}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Font Size</div>
                <div class="info-value">${n}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Font Weight</div>
                <div class="info-value">${o}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Line Height</div>
                <div class="info-value">${l}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Letter Spacing</div>
                <div class="info-value">${a}</div>
              </div>
            </div>
          </div>
        `}return""}).filter(Boolean).join("");return`
    ${f}
    <div>
      <h1>Design System Typography</h1>
      <div class="typography-family">
        ${p}
      </div>
    </div>
  `},j={render:()=>T()},M=["AllTypography"];export{j as AllTypography,M as __namedExportsOrder,w as default};
