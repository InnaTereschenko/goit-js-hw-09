!function(){var t=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]"),d=null;a.disabled=!0,t.classList.add("start-btn"),a.classList.add("stop-btn"),t.addEventListener("click",(function(){t.disabled=!0,a.disabled=!1,d=setInterval((function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3)})),a.addEventListener("click",(function(){t.disabled=!1,a.disabled=!0,clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.8b950b4b.js.map
