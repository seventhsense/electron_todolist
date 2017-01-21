class MyApp.Views.ClearButton extends Backbone.Marionette.View
  template: _.template 'Clear'
  tagName: 'button'
  events:
    'click': 'onClick'

  onClick: ->
    _.each @collection.where(done: true), (model)-> model.destroy()
