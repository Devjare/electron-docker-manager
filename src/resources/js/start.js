const { ipcRenderer } = require('electron');

$('#sourceSelect').on('change', (e) => {
    console.log('changed to: ', e.target.value);
    var value = e.target.value;
    if(value == 'local') {
        $('.remote-options').addClass('hide-display');
        $('.remote-options').removeClass('show-flex')
    } else {
        $('.remote-options').removeClass('hide-display');
        $('.remote-options').addClass('show-flex')
    }
});


$('#submitSettings').click((e) => {
    var settings = {};
    settings.sourceType = $('#sourceSelect')[0].value;
    if(settings.sourceType == 'remote') {
        ip = $('#ipaddress')[0].value;
        port = $('#port')[0].value;

        settings.ip = ip;
        settings.port = port;
    }
    ipcRenderer.send('settings-done', settings);
    e.preventDefault();
});