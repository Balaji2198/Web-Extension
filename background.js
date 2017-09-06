//Declaring Array
var arr = ["Hello","hi",1,2,3,"Great"];
//Creating Context Menu
browser.contextMenus.create({
	id: "contentsave",
	title: "Save the contents",
	contexts: ["selection"]
});
//Listening to the user
browser.contextMenus.onClicked.addListener(contextMenuAction);

arr.push(12);
// function createTab() {
// 	// body...
// 	browser.tabs.create({"url": "/newtab.html"});
// 	arr.push(43);
// }
//function for context Menu on Clicked
function contextMenuAction(info, tab) {
	// body...
	console.log(info.selectionText);
	//Pushing the selcted text
	arr.push(info.selectionText);
	//createtab();
	//Opening the new tab
	browser.tabs.create({"url": "/newtab.html"});
	//document.getElementById("link").innerHTML=a;	
}

//In New tab when the function on load 
//Linking all the elements
window.onload = function() {
   	  for(var i = 0; i < arr.length; i++)
   	  {
		document.getElementById("link").append(arr[i]);
		//New Line
		var linebreak = document.createElement('br');
		document.getElementById("link").appendChild(linebreak);
   	  }
} 
