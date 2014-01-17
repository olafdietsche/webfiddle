function editor_panel(panel_id, select_id, edit_mode) {
    this.panel = document.getElementById(panel_id);

    // setup editor
    this.editor = ace.edit(this.panel);
    this.editor.getSession().setMode(edit_mode);
    this.add_shortcuts(this.editor);

    // setup show/hide switch
    this.select = document.getElementById(select_id);
    var self = this;
    this.select.addEventListener('change', function() {
        self.panel_switch();
    });

    this.panel_switch();
}

editor_panel.prototype.add_shortcuts = function() {
    this.editor.commands.addCommand({
	name: 'update',
	bindKey: {win: 'Ctrl-Return'},
	exec: update_frame,
	readOnly: true
    });
}

editor_panel.prototype.panel_switch = function() {
    var i = this.select.selectedIndex;
    var value = this.select.options[i].value;
    switch (value) {
    case 'hide':
        this.panel.style.display = 'none';
        break;
    case 'show':
        this.panel.style.display = 'block';
        this.editor.renderer.updateFull();
        break;
    }
}

editor_panel.prototype.getValue = function() {
    return this.editor.getSession().getValue();
}
