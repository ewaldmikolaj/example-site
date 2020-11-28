const isIE = /Trident|MSIE/.test(navigator.userAgent);
if(isIE) {
    document.body.innerHTML = "";
    alert("Strona nie wspiera tej wersji przeglądarki");
}
