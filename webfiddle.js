var html = new editor_panel('html', 'html-switch', 'ace/mode/html');
var css = new editor_panel('css', 'css-switch', 'ace/mode/css');
var js = new editor_panel('js', 'js-switch', 'ace/mode/javascript');
js.script = document.getElementById('js-script');

var web = document.getElementById('web');
var update = document.getElementById('update');
update.addEventListener('click', update_frame);
update_frame();

function build_page_source() {
    var source = '<!DOCTYPE html>\n<html>\n<head>\n';
    var style = css.getValue();
    if (style)
        source += '<style>' + style + '</style>\n';

    if (js.script.value == 'head')
	source += '<script>' + js.getValue() + '</script>\n';

    source += '</head>\n<body>\n' + html.getValue() + '\n';
    if (js.script.value == 'body')
	source += '<script>' + js.getValue() + '</script>\n';

    source += '</body>\n</html>\n';
    return source;
}

function update_frame() {
    var source = build_page_source();
    web.srcdoc = source;
}
