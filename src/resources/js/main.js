const { ipcRenderer } = require('electron');

var globalSettings;

ipcRenderer.on('some', (e, settings) => {
    console.log('e: ', e);
    console.log('settings: ', settings);
    $('#texto').text(settings);
});

$('#btn').click((e) => {
    $('#modal').modal('toggle');
});

var navbuttons = $('.list-element');
console.log('navbuttons: ', navbuttons);
console.log('type of list: ', typeof(navbuttons));

function changePage(e) {
    const classToRemove = 'list-element-selected';
    console.log('changing page for: ', e.target);
    var element = $(e.target);
    console.log('jquery element: ', element);
    if(element.hasClass(classToRemove)) {
        console.log('deselect');
        element.removeClass(classToRemove);
    } else {
        console.log('select');
        element.addClass(classToRemove);
    }

    const id = e.target.id;
    var allExecptSelected = $(`.list-element:not(#${id})`);
    console.log('all exepct selected: ', allExecptSelected);
    for(var i = 0;i < allExecptSelected.length;i++) {
        var jelement = $(`#${allExecptSelected[i].id}`);
        jelement.removeClass(classToRemove);
    }
    displayNewPage(id);
}

function displayNewPage(id) {
    var currentPageShowing = $('.right-panel:not(.hide)');
    console.log('hide: ', currentPageShowing);
    var nextPageToShow = $(`.right-panel.${id}`);
    console.log('show: ', nextPageToShow);
    currentPageShowing.toggleClass('hide');
    nextPageToShow.toggleClass('hide');
}

$('#btnBuildImage').click((e) => {
    $('#modalBuildImage').modal('show');
});