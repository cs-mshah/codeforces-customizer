chrome.storage.sync.get('blogEntries', function(data){
    // if option disabled, return, else inject script
    if(!data.blogEntries){
        return;
    }

    // hide .content class
    $('.content').toggle();

    // Add [data-filter-name="SEARCH TERM"] to each blog div
    $(".topic").each(function(index, element){
        
        const title = $('> .title > a > p', element).text().toLowerCase();
        $(element).attr('data-filter-item', '');
        $(element).attr('data-filter-name', title);

        // add Expand/Hide button
        const toggleButton = $(('<button class="expand-blog">Expand/Hide</button>'));
        $('> .info', element).after(toggleButton);
    });

    // add blog search below 'div.roundbox.menu-box'
    const searchBlog = $(('<form class="search-box-form"><input id="search-blog" type="text" placeholder="Search blog title" data-search/></form>'));
    $('#body > div.roundbox.menu-box').after(searchBlog);

    // filter and show results
    $('[data-search]').on({
        keyup : function() {
            var searchVal = $(this).val().toLowerCase();
            var filterItems = $('[data-filter-item]');
    
            if ( searchVal != '' ) {
                filterItems.addClass('hidden');
                $('[data-filter-item][data-filter-name*="' + searchVal + '"]').removeClass('hidden');
            } 
            else {
                filterItems.removeClass('hidden');
            }
        },
        // prevent form submit
        keydown : function(event) {

            if (event.keyCode == 13) {
                event.preventDefault();
                return false;
            }
        }
    });

    // Hide Expand button
    $('.expand-blog').on('click', function(event){
        event.preventDefault();
        $($(event.target)[0]).next().toggle();
    });
});