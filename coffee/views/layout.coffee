class MyApp.Views.Layout extends Backbone.Marionette.View
  template: JST['layout']
  initialize: ->
    @collection = new MyApp.Collections.Tasks
    @collection.fetch()

  regions:
    form         : '#task_form'
    clear_button : '#clear'
    count        : '#task_count'
    list         : '#task_list'

  onRender: ->
    @showChildView 'form', new MyApp.Views.TaskForm
      collection: @collection
    @showChildView 'clear_button', new MyApp.Views.ClearButton
      collection: @collection
    @showChildView 'count', new MyApp.Views.TaskCount
      collection: @collection
    @showChildView 'list', new MyApp.Views.TaskList
      collection: @collection
