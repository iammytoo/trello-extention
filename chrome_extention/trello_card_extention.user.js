// ==UserScript==
// @name           trello task card extention
// @version        1
// @include        https://trello.com/*
// ==/UserScript==


extendCss = `
    .window{
        width:90% !important;
    }
    .window-main-col{
        width:80% !important;
    }
    .window-main-col .edit textarea.field{
        min-height:500px;
    }
    .window-wrapper{
        height: 100%;
    }
    `;



insertHeadCSS(extendCss);
// Function to insert CSS
function insertHeadCSS(extendCss) {
	var head=document.getElementsByTagName('head')[0];
	if(!head)
		return;
	var css=document.createElement('style');
	css.setAttribute('type','text/css');
	css.appendChild(document.createTextNode(extendCss));
	head.appendChild(css);
}