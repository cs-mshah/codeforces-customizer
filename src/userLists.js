chrome.storage.sync.get('userLists', function(data){
    // if no userList set, return, else inject script
    if(data.userLists=='') {
        return;
    }
    const currentURL = window.location.href;
    var listURL = currentURL + '?list=' + data.userLists;
    window.location.replace(listURL); //redirect using list
});