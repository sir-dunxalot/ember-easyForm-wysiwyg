##Ember easyForm WYSIWYG Editor

This is a simple integration of a wysiwyg editor, [jQuery te](http://jqueryte.com/) for Ember.js apps using Dockyard's ember-easyForm library.

##Prerequisites

- [ember-easyForm](https://github.com/dockyard/ember-easyForm)
- [jQuery te](http://jqueryte.com/)

##Usage

For apps built [ember-cli](http://iamstef.net/ember-cli/), add [ember-cli.index.js](https://github.com/sir-dunxalot/ember-easyForm-wysiwyg/blob/master/ember-cli.index.js) to your `initializers` directory. For all other apps, add [index.js](https://github.com/sir-dunxalot/ember-easyForm-wysiwyg/blob/master/index.js) to your app.

In your template, add the wysiwyg editor easily as follows:

```
{{input bodyContent as='wysiwyg' placeholder='Add some content here'}}
```

The html content of the text editor is bound to the `bodyContent` property, or whatever property you bind the input to. Styling is left up to you (jQuery te provides default themes) and all options listed in the [documentation](http://jqueryte.com/documentation) work with this module.
