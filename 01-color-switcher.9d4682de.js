const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(()=>{t.hasAttribute("disabled")||(timerId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!0))})),e.addEventListener("click",(()=>{clearInterval(timerId),t.toggleAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.9d4682de.js.map
