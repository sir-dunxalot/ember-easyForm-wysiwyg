/**
WYSIWYG Editor
*/

Ember.EasyForm.WYSIWYG = Ember.EasyForm.TextArea.extend({

  renderEditor: function() {
    var _this = this;

    _this.$().jqte({
      color: false,
      fsize: false,
      format: false,
      indent: false,
      outdent: false,
      placeholder: _this.get('placeholder'),
      source: false, // Code
      sub: false, // Subscript
      strike: false,
      sup: false, // Superscript

      change: function() {
        Em.run.debounce(_this, _this.changed, 200);
      }
    });
  }.on('didInsertElement'),

  changed: function() {
    this.set('value', $('.jqte_editor').html());
  },

});

Ember.EasyForm.Config.registerInputType('wysiwyg', Ember.EasyForm.WYSIWYG);
