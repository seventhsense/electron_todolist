class MyApp.Views.EditForm extends Backbone.Marionette.View
  template: JST['edit_form']
  tagName: 'span'

  events:
    'blur input:text': 'updateContent'

  updateContent: (event)->
    value = event.target.value
    @model.save(content: value) unless value is ''
    Backbone.Events.off 'blur'
    @remove
