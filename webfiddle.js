var html = new editor_panel('html', 'html-switch', 'ace/mode/html');
var css = new editor_panel('css', 'css-switch', 'ace/mode/css');
var js = new editor_panel('js', 'js-switch', 'ace/mode/javascript');
js.script = document.getElementById('js-script');

var web = document.getElementById('web');
web.srcdoc = '';
var update = document.getElementById('update');

function update_frame() {
    web.srcdoc = '<!DOCTYPE html>\n<html>\n<head>\n';
    web.srcdoc += '<style>' + css_editor.getSession().getValue() + '</style>\n';
    if (script.value == 'head')
	web.srcdoc += '<script>' + js_editor.getSession().getValue() + '</script>\n';

    web.srcdoc += '</head>\n<body>\n' + html_editor.getSession().getValue() + '\n';
    if (script.value == 'body')
	web.srcdoc += '<script>' + js_editor.getSession().getValue() + '</script>\n';

    web.srcdoc += '</body>\n</html>\n';
}

}

update.addEventListener('click', update_frame);
