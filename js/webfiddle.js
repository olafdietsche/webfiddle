var html = new editor_panel('html', 'html-switch', 'ace/mode/html');
var css = new editor_panel('css', 'css-switch', 'ace/mode/css');
var js = new editor_panel('js', 'js-switch', 'ace/mode/javascript');
js.script = document.getElementById('js-script');

var libraries = document.getElementById('libraries');
var web = document.getElementById('web');
var update = document.getElementById('update');
update.addEventListener('click', update_frame);
update_frame();

function include_libraries() {
    var inputs = libraries.getElementsByTagName('input');
    var js = '', css = '';
    for (var i = 0; i < inputs.length; ++i) {
        var type = inputs[i].type;
        if ((type == 'checkbox') && inputs[i].checked) {
            var url = inputs[i].getAttribute('data-url');
            var ext = url.lastIndexOf('.');
            switch (url.substr(ext)) {
            case '.js':
                js += '<script type="text/javascript" src="' + url + '"></script>\n';
                break;
            case '.css':
                css += '<link rel="stylesheet" href="' + url + '">\n';
                break;
            }
        }
    }

    return js + css;
}

function build_page_source() {
    var source = '<!DOCTYPE html>\n<html>\n<head>\n';
    source += include_libraries();
    var style = css.getValue();
    if (style)
        source += '<style>' + style + '</style>\n';

    if (js.script.value == 'head')
	source += '<script>' + js.getValue() + '</script>\n';

    if (js.script.value == 'onload')
	source += '<script>window.onload = function() {\n' + js.getValue() + '\n};</script>\n';

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
