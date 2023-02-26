const contextMenuItem = {
    id: 'futureReads',
    title: 'Save this link for later',
    contexts: ['all'],
    type: 'normal',
};

chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create(contextMenuItem);
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('Information', info);
    console.log('Tab Information', tab);
    const { pageUrl, selectionText } = info;
    const { favIconUrl, title, url } = tab;
});

// chrome.action.setBadgeText({ text: 'ON' });
// chrome.action.setBadgeBackgroundColor({ color: '#4688F1' });
