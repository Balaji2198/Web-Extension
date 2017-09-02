var arr = ["Hello","hi",1,2,3,"Great"];

browser.contextMenus.create({
	id: "contentsave",
	title: "Save the contents",
	contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(contextMenuAction);

arr.push(12);
// function createTab() {
// 	// body...
// 	browser.tabs.create({"url": "/newtab.html"});
// 	arr.push(43);
// }
function contextMenuAction(info, tab) {
	// body...
	console.log(info.selectionText);
	arr.push(info.selectionText);
	//createtab();
	browser.tabs.create({"url": "/newtab.html"});
	//document.getElementById("link").innerHTML=a;	
}

window.onload = function() {
   	  for(var i = 0; i < arr.length; i++)
   	  {
		document.getElementById("link").append(arr[i]);
		var linebreak = document.createElement('br');
		document.getElementById("link").appendChild(linebreak);
   	  }
} 
