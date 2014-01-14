var html = document.getElementById('html');
var html_editor = ace.edit(html);
html_editor.getSession().setMode('ace/mode/html');

var css = document.getElementById('css');
var css_editor = ace.edit(css);
css_editor.getSession().setMode('ace/mode/css');

var script = document.getElementById('script');
var js = document.getElementById('js');
var js_editor = ace.edit(js);
js_editor.getSession().setMode('ace/mode/javascript');

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

function add_shortcuts(editor) {
    editor.commands.addCommand({
	name: 'update',
	bindKey: {win: 'Ctrl-Return'},
	exec: update_frame,
	readOnly: true
    });
}

add_shortcuts(html_editor);
add_shortcuts(css_editor);
add_shortcuts(js_editor);

update.addEventListener('click', update_frame);
