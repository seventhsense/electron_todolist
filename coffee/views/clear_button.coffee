class MyApp.Views.ClearButton extends Backbone.Marionette.View
  template: _.template '<span class="icon icon-trash" id="trash"></span>  Clear'
  tagName: 'button'
  className: 'btn btn-negative'
  events:
    'click': 'onClick'

  onClick: ->
    _.each @collection.where(done: true), (model)-> model.destroy()
