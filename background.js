chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

  chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    console.log(tablink);
});