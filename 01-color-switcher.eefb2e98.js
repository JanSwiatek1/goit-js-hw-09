const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d;t.addEventListener("click",(()=>{t.hasAttribute("disabled")||(d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!0))})),e.addEventListener("click",(()=>{clearInterval(d),e.removeAttribute("disabled",!0),t.toggleAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.eefb2e98.js.map
