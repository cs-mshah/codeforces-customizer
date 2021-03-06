$(document).ready(function(){

    // sync checkbox state
    chrome.storage.sync.get(function(data){
        $("input[type='checkbox']").each(function(index, element){
            let val = String(element.id);
            data[val] ? $(this).prop("checked", true) : $(this).prop("checked", false);
        });
    });

    // toggle checkbox
    $("input[type='checkbox']").on("click", function(event){
        event.stopPropagation();
        let val = $(event.target).prop("checked");
        let save = {};
        save[String(event.target.id)] = val;
        chrome.storage.sync.set(save);
    });

    // sync userList state
    chrome.storage.sync.get('userLists', function(data){
        $('#userLists').val(data.userLists);
    });

    // set userList
    $('#userLists').keydown(function(event){
        if (event.keyCode == 13) {
            chrome.storage.sync.set({'userLists': $('#userLists').val()});
        }
    });
});
