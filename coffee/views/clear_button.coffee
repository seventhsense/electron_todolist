class MyApp.Views.ClearButton extends Backbone.Marionette.View
  template: JST['clear_button']
  events:
    'click': 'onClick'

  onClick: ->
    _.each @collection.where(done: true), (model)-> model.destroy()
