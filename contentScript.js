console.log('This is penta')

let but = "<button id='buttonShowPanel' class='button' style='height: 40px; width: 70px; left: 150px; top: 0px; position: absolute;'>Home</button>"

var buttonShowPanel = document.createElement('button');
buttonShowPanel.id = 'buttonShowPanel';
buttonShowPanel.className = 'button';
buttonShowPanel.textContent = '';
buttonShowPanel.style = 'height: 40px; width: 10px; left: 0px; top: 0px; position: absolute;';
buttonShowPanel.setAttribute('onclick','openPanel()');


var pageHead = document.body;
var el = document.createElement('button');
el.innerHTML = but;
//pageHead.after(el);