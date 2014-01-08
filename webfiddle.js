var html = document.getElementById('html');
var css = document.getElementById('css');
var script = document.getElementById('script');
var js = document.getElementById('js');
var web = document.getElementById('web');
var update = document.getElementById('update');

function updateFrame() {
    web.srcdoc = '<!DOCTYPE html>\n<html>\n<head>\n';
    web.srcdoc += '<style>' + css.value + '</style>\n';
    if (script.value == 'head')
	web.srcdoc += '<script>' + js.value + '</script>\n';

    web.srcdoc += '</head>\n<body>\n' + html.value + '\n';
    if (script.value == 'body')
	web.srcdoc += '<script>' + js.value + '</script>\n';

    web.srcdoc += '</body>\n</html>\n';
}

update.addEventListener('click', updateFrame);
