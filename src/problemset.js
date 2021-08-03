chrome.storage.sync.get('problemset', function(data){
    // if option disabled, return, else inject script
    if(!data.problemset){
        return;
    }

    // global page constants
    const contestURL = $('#sidebar th a').attr('href'); // '/contest/<no.>'
    const probLetter = $('.header > .title').text()[0];

    // add all submissions tab to the menu
    const tab = $('.second-level-menu-list')[0].lastElementChild;
    const allSubmissions = $(tab).clone(true)[0];
    const allSubmissionsURL = contestURL + '/status/' + probLetter;
    $('a', allSubmissions).text('all submissions');
    $('a', allSubmissions).attr('href', allSubmissionsURL);
    tab.after(allSubmissions);

    // add star favourite problem icon
    const starContest = $('#sidebar > div:nth-child(1) > table > tbody > tr:last-child');
    $('> td > span > center > span > img', starContest).attr('alt', 'Add contest to favourites');
    $('> td > span > center > span > img', starContest).attr('title', 'Add contest to favourites');

    const starProblem = $(('<tr><td class="left bottom" colspan="1"><span class="contest-state-regular">Problem: <span id="put"></span></span></td></tr>'));
    $(starContest).after(starProblem);

    // make selector to get probem-star
    const row = probLetter.charCodeAt(0) - 65 + 2;
    const selector = "#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr:nth-child("+String(row)+") span:nth-child(2) > span >img"
    const url = contestURL + ' ' + selector;

    $("#put").load(url, function () {
        const star = $('#put')[0].childNodes[0];
        
    });
});