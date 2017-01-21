class MyApp.Views.TaskForm extends Backbone.Marionette.View
  template: JST['form']
  events:
    'keydown #task_input': 'addTask'
  addTask: (event)->
    val = $('#task_input').val()
    return if event.which isnt 13 or val is ''
    @collection.create
      content: val
    $('#task_input').val('')
