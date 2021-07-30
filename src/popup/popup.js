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
});
