// if option enabled, inject script
chrome.storage.sync.get('blogEntries', function(data){
    if(data.blogEntries){
        
        // hide .content class
        $('.content').toggle();

        // add blog search below 'div.roundbox.menu-box'
        const searchBlog = $(('<form class="search-box-form"><input  id="search-blog" type="text" placeholder="Search blog title" /></form>'));
        $('#body > div.roundbox.menu-box').after(searchBlog);
    }
});