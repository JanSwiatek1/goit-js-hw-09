const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o;function n(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}t.addEventListener("click",(function(){o=setInterval(n,1e3),t.toggleAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.445e73b5.js.map