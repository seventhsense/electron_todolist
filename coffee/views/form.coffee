class MyApp.Views.TaskForm extends Backbone.Marionette.View
  template: _.template '<input type="text" id="task_input">'
  events:
    'keydown #task_input': 'addTask'
  addTask: (event)->
    val = $('#task_input').val()
    return if event.which isnt 13 or val is ''
    @collection.create
      content: val
    $('#task_input').val('')
