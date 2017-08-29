
// URL:
// https://chrome.google.com/extensions/detail/apfandgagcebddggkbfjekglmfdaijcd
//
// Developer URL:
// https://chrome.google.com/extensions/developer/edit/apfandgagcebddggkbfjekglmfdaijcd?hl=en
// Update via InternetExplorer

//alert("google-chrome-inline-images");

for ( var i = 0; i < document.links.length; ++i) {
	myHref = document.links[i].href;

	if (document.links[i].firstChild != null) {
		linkText = document.links[i].firstChild.data;
		if (linkText != null) {
			linkText = linkText.toLowerCase();
	//		alert(linkText);
			if (linkText.indexOf(".gif") >= 0 || linkText.indexOf(".png") >= 0
					|| linkText.indexOf(".jpeg") >= 0
					|| linkText.indexOf(".jpg") >= 0
					|| linkText.indexOf(".bmp") >= 0)

			{
				var myIMG = document.createElement("img");
				myIMG.src = document.links[i].href;
				myIMG.alt = linkText;
				myIMG.title = linkText;
				document.links[i].appendChild(document.createElement("br"));
				document.links[i].appendChild(myIMG);
				document.links[i].appendChild(document.createElement("br"));
	//			alert(linkText);
			}
		}
	}
//	 document.write("<br>" + i+"="+myHref);
//	 document.write("<br>parentNode=" + document.links[i].parentNode);
//	 document.write("<br>firstChild=" + document.links[i].firstChild);
//	 document.write("<br>nodeValue=" + document.links[i].nodeValue);
//	 document.write("<br>nodeName=" + document.links[i].nodeName);
//	 document.write("<br>data=" + document.links[i].data);
//	 document.write("<br>attributes=" + document.links[i].attributes);
//	 document.write("<br>firstChild nodeValue=" +
//	 document.links[i].firstChild.nodeValue);
//	 document.write("<br>firstChild nodeName=" +
//	 document.links[i].firstChild.nodeName);
//	 document.write("<br>firstChild data=" +
//	 document.links[i].firstChild.data);
//	 document.write("<br>firstChild attributes=" +
//	 document.links[i].firstChild.attributes);
}