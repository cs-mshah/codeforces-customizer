//enable all options on install/update
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        'blogEntries': true,
        'problemset': true
    });
});