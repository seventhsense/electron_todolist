class MyApp.Views.TaskCount extends Backbone.Marionette.View
  template: JST['task_count']
  tagName: 'p'
  templateContext: ->
    all: @collection.length
    done: @collection.where(done: true).length
    undone: @collection.where(done: false).length
  collectionEvents: ->
    'change': @render
    'remove': @render
    'sync': @render
